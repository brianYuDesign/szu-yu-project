-- Day 3 任務 2：從 ai_usage_log 撈出真實指標
--
-- 表：ai_usage_log（bound-front-backend/models/aiusagelog.js）
-- 欄位：service, model, inputTokens, outputTokens, durationMs, success, errorCode, createdAt
--
-- ⚠️ 用唯讀帳號跑。這幾支都是 SELECT，但生產環境的習慣要養成。
-- ⚠️ 資料量大時先加上 createdAt 範圍，避免全表掃描。

-- ============================================================
-- Q1. 各功能的整體概況（先跑這支，看資料量與分布）
-- ============================================================
SELECT
    service,
    model,
    COUNT(*)                                              AS calls,
    ROUND(AVG(inputTokens))                               AS avg_input_tokens,
    ROUND(AVG(outputTokens))                              AS avg_output_tokens,
    ROUND(AVG(durationMs))                                AS avg_ms,
    MAX(durationMs)                                       AS max_ms,
    ROUND(100.0 * SUM(success = 0) / COUNT(*), 2)         AS failure_rate_pct,
    MIN(createdAt)                                        AS first_seen,
    MAX(createdAt)                                        AS last_seen
FROM ai_usage_log
WHERE createdAt >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY service, model
ORDER BY calls DESC;


-- ============================================================
-- Q2. P50 / P95 / P99 延遲（MySQL 8.0+，用窗口函數）
--     ★ 這支的結果直接填進案例 A 的「P95 延遲」空欄
-- ============================================================
WITH ranked AS (
    SELECT
        service,
        durationMs,
        PERCENT_RANK() OVER (PARTITION BY service ORDER BY durationMs) AS pct
    FROM ai_usage_log
    WHERE createdAt >= DATE_SUB(NOW(), INTERVAL 30 DAY)
      AND success = 1                      -- 失敗的通常是逾時，會拉高分位數
)
SELECT
    service,
    MAX(CASE WHEN pct <= 0.50 THEN durationMs END) AS p50_ms,
    MAX(CASE WHEN pct <= 0.95 THEN durationMs END) AS p95_ms,
    MAX(CASE WHEN pct <= 0.99 THEN durationMs END) AS p99_ms
FROM ranked
GROUP BY service;


-- ============================================================
-- Q2b. P95 通用版（MySQL 5.7 沒有窗口函數時用這支，一次查一個 service）
-- ============================================================
-- 先取總筆數：
--   SELECT COUNT(*) FROM ai_usage_log
--   WHERE service = 'icebreaker' AND success = 1
--     AND createdAt >= DATE_SUB(NOW(), INTERVAL 30 DAY);
-- 再把 FLOOR(總筆數 * 0.95) 填進下面的 OFFSET：
SELECT durationMs AS p95_ms
FROM ai_usage_log
WHERE service = 'icebreaker'
  AND success = 1
  AND createdAt >= DATE_SUB(NOW(), INTERVAL 30 DAY)
ORDER BY durationMs
LIMIT 1 OFFSET 0;   -- ← 把 0 換成 FLOOR(count * 0.95)


-- ============================================================
-- Q3. 單次呼叫成本
--     價格取自 Anthropic 官方 Current Models 表（2026-08-05 查核），單位 USD / 1M tokens：
--         claude-opus-5      $5  / $25      claude-opus-4-8   $5  / $25
--         claude-sonnet-5    $3  / $15      claude-sonnet-4-6 $3  / $15
--         claude-haiku-4-5   $1  / $5       claude-fable-5    $10 / $50
--     注意 Sonnet 5 到 2026-08-31 有 introductory 價（$2/$10），之後回到 $3/$15。
--     這裡填的是標準價——報告用的成本寧可高估，也不要在客戶面前低估。
--
--     ⚠️ 定價會變。跑之前確認一次，並把查核日期記在結果旁邊；
--        過期的成本表比沒有成本表更危險。
-- ============================================================

-- 各模型單價對照，JOIN 進來就不必為每個 model 手改數字
WITH pricing (model, input_per_mtok, output_per_mtok) AS (
    SELECT 'claude-opus-5',     5.00, 25.00 UNION ALL
    SELECT 'claude-opus-4-8',   5.00, 25.00 UNION ALL
    SELECT 'claude-sonnet-5',   3.00, 15.00 UNION ALL
    SELECT 'claude-sonnet-4-6', 3.00, 15.00 UNION ALL
    SELECT 'claude-haiku-4-5',  1.00,  5.00 UNION ALL
    SELECT 'claude-fable-5',   10.00, 50.00
)
SELECT
    l.service,
    l.model,
    COUNT(*)                  AS calls,
    SUM(l.inputTokens)        AS total_input,
    SUM(l.outputTokens)       AS total_output,
    ROUND(SUM(l.inputTokens)  / 1000000 * p.input_per_mtok
        + SUM(l.outputTokens) / 1000000 * p.output_per_mtok, 4)              AS est_cost_usd,
    ROUND((SUM(l.inputTokens)  / 1000000 * p.input_per_mtok
         + SUM(l.outputTokens) / 1000000 * p.output_per_mtok) / COUNT(*), 6) AS est_cost_per_call_usd,
    -- 乘 30 天推估月成本，這是要寫進履歷與案例的那個數字
    ROUND((SUM(l.inputTokens)  / 1000000 * p.input_per_mtok
         + SUM(l.outputTokens) / 1000000 * p.output_per_mtok), 2)            AS est_monthly_usd
FROM ai_usage_log l
LEFT JOIN pricing p ON p.model = l.model
WHERE l.createdAt >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY l.service, l.model, p.input_per_mtok, p.output_per_mtok
ORDER BY est_cost_usd DESC;

-- ⚠️ 如果 est_cost_usd 是 NULL，代表該 model 不在上面的 pricing 表裡——
--    那是「不知道價格」，不是「免費」。把該模型的官方單價補進 pricing 再跑一次，
--    不要把 NULL 當成 0 帶進報告。

-- ============================================================
-- Q4. 失敗與降級分析
--     ★ 這支是「降級率」的來源 —— 案例 A 說「有 fallback」，這支證明它被觸發過幾次
-- ============================================================
SELECT
    service,
    errorCode,
    COUNT(*)                                       AS occurrences,
    ROUND(AVG(durationMs))                         AS avg_ms_before_fail,
    ROUND(100.0 * COUNT(*) / SUM(COUNT(*)) OVER (PARTITION BY service), 2) AS pct_of_service
FROM ai_usage_log
WHERE success = 0
  AND createdAt >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY service, errorCode
ORDER BY occurrences DESC;


-- ============================================================
-- Q5. 逾時是否貼近 8 秒上限
--     ★ 驗證那次 4.5s → 8s 的調整是否足夠，或還有空間
-- ============================================================
SELECT
    service,
    SUM(durationMs BETWEEN 7000 AND 8000) AS near_timeout_7to8s,
    SUM(durationMs > 8000)                AS over_8s,
    COUNT(*)                              AS total,
    ROUND(100.0 * SUM(durationMs >= 7000) / COUNT(*), 2) AS pct_over_7s
FROM ai_usage_log
WHERE createdAt >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY service;


-- ============================================================
-- Q6. 用量趨勢（每日），看成長曲線與異常尖峰
-- ============================================================
SELECT
    DATE(createdAt)                       AS day,
    service,
    COUNT(*)                              AS calls,
    SUM(inputTokens + outputTokens)       AS total_tokens,
    ROUND(100.0 * SUM(success = 0) / COUNT(*), 2) AS failure_rate_pct
FROM ai_usage_log
WHERE createdAt >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY DATE(createdAt), service
ORDER BY day DESC, calls DESC;
