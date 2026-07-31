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
--     ★ 價格請以 Anthropic 官方定價為準，下面的數字是佔位符，跑之前先更新
--     單位：USD / 1M tokens
-- ============================================================
SELECT
    service,
    model,
    COUNT(*)                          AS calls,
    SUM(inputTokens)                  AS total_input,
    SUM(outputTokens)                 AS total_output,
    -- 把 3.00 / 15.00 換成該 model 的實際單價
    ROUND(SUM(inputTokens)  / 1000000 * 3.00
        + SUM(outputTokens) / 1000000 * 15.00, 4)               AS est_cost_usd,
    ROUND((SUM(inputTokens)  / 1000000 * 3.00
         + SUM(outputTokens) / 1000000 * 15.00) / COUNT(*), 6)  AS est_cost_per_call_usd
FROM ai_usage_log
WHERE createdAt >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY service, model
ORDER BY est_cost_usd DESC;


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
