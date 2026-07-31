# 附錄：程式碼實證

> 2026-07-31 從 `~/Project/feeling-bank/` 實際程式碼查證，取代案例中的推論內容
> **所有內容都附檔案路徑，面試前可自行複查**
> 這份的用途：把案例 A、D 裡標 ⚠️（Claude 推論）的部分換成 ✅（程式碼事實）

---

## ⚠️ 先修正一個歸屬問題

**AI 功能的主要實作在 Bound（`bound-front-backend`），不是 SugarBee。**

| 專案 | AI 相關檔案 |
|------|------------|
| **Bound** | `providers/ai/anthropic.js`、`service/icebreakerService.js`、`service/chatCoachService.js`、`service/aiJobService.js`、`service/trendingService.js`，且**有對應單元測試**（`__tests__/service/*.test.js`、`__tests__/mocks/anthropicMock.js`） |
| SugarBee | `service/icebreakerService.js`（單檔） |

履歷把 AI 功能寫在「感覺銀航」底下（公司層級）沒有問題，但**面試講具體實作時要說對是哪個產品**。

---

# 一、案例 A 的實證（破冰話題）

> 檔案：`bound-front-backend/service/icebreakerService.js`（525 行）

## 1. 輸出格式：有做結構化輸出 ✅

原本標為「待核對」，實際上**有明確要求 JSON**：

```js
// systemPrompt 內
'請只輸出 JSON，格式必須是 {"suggestions":["...", "...", "..."]}。'
```

而且 user prompt 明確標示資料已去識別化：

```js
`以下是去識別後的配對資料 JSON，請只根據資料內容提供 3 句可以直接傳給對方的第一則訊息：...`
```

**面試可講**：輸出用 JSON 約束、輸入做去識別化 —— 這兩點正好對應 prompt injection 防護的輸入面與輸出面。

## 2. 快取：雙層，而且 key 設計有講究 ✅

```js
const CACHE_TTL_SECONDS = 60 * 60;        // 1 小時
const MEMORY_CACHE = new Map();            // 第一層：Lambda 容器內記憶體

function buildCacheKey(currentUserId, targetUserId, tier = "free", style = null) {
  const base = `icebreaker:v1:${currentUserId}:${targetUserId}:${tier}`;
  return style ? `${base}:${style}` : base;
}
```

**三個設計值得單獨講**：

| 設計 | 為什麼 |
|------|--------|
| **記憶體 + Redis 雙層** | Lambda 容器 warm 的期間，同一個 key 連 Redis 都不用打 —— 省一次網路往返 |
| **key 帶 `v1` 版本前綴** | prompt 或格式改版時，把 `v1` 換成 `v2` 就整批失效，不用去掃 Redis 刪 key |
| **`tier` 與 `style` 納入 key** | 程式碼註解：「不同語氣的開場白各自快取，避免互相覆蓋」 |

> ⚠️ **修正我先前的提醒**：我在案例 A 說「cache key 用兩個 userId 要先排序，否則 A→B 和 B→A 會產生兩份」。
> **這個提醒在這裡不適用** —— 破冰話題是「我要對他說的第一句話」，方向本來就有意義，A→B 和 B→A 本來就該是不同內容。**不排序是正確的。**

## 3. 降級：三層合併，不是二選一 ✅

我原本寫的是「模型失敗 → 改用預設文案」的二選一。**實際做法更好**：

```js
let aiSuggestions = [];
if (process.env.ANTHROPIC_API_KEY) {
  try {
    aiSuggestions = tier === "premium"
      ? await generateWithAnthropicPremium(profile, timeoutMs, style)
      : await generateWithAnthropic(profile, timeoutMs, style);
  } catch (error) {
    console.error("[icebreaker] AI generation failed (tier=%s):", tier, ...);
  }
}

const fallbackSuggestions = generateTemplateIcebreakers(profile);   // 依 profile 產生的模板
const finalSuggestions = finalizeSuggestions(
  [...aiSuggestions, ...fallbackSuggestions],   // ← 合併，不是取代
  profile,
);
```

再往下 `finalizeSuggestions` 還有第三層：

```js
// 前面湊不滿 MAX_SUGGESTIONS(3) 時，再補通用 fallback
for (const fallback of generateGenericFallback(profile)) { ... }
```

**三層的順序**：AI 生成 → 依 profile 的模板 → 通用文案，全部**合併後去重取前 3**。

**為什麼合併比取代好**（面試講這個）：

> 如果模型只回了一則、或有兩則被過濾掉，二選一的降級會整批丟掉 AI 的結果。合併的話，AI 產出多少就用多少，不足的部分才用模板補滿 —— 使用者永遠拿到三則，而且品質是盡可能高的那三則。

## 4. 去重與長度限制 ✅

```js
const MAX_SUGGESTIONS = 3;
const MAX_SUGGESTION_LENGTH = 36;

// finalizeSuggestions 內
const dedupeKey = normalized.toLowerCase();
if (seen.has(dedupeKey)) continue;
```

三層來源合併後可能重複（模板和 AI 產出撞句），用 lowercase 當 key 去重。開場白限 36 字 —— 太長的開場白沒人想讀。

## 5. ★ 輸出端內容過濾：四組正則 ✅

**這是原本完全沒寫進案例、但很有份量的一塊。** AI 生成的開場白會被四組 pattern 篩過：

| Pattern | 擋什麼 |
|---------|--------|
| `RISKY_PATTERN` | 聯絡方式（line/ig/微信/賴）、約砲、援交、投資詐騙（股票/期貨/虛擬幣） |
| `SENSITIVE_PATTERN` | 前任、感情史、收入薪水、住址、政治宗教、身高體重三圍、年紀、菸酒夜店 |
| `OVERFAMILIAR_PATTERN` | 寶貝、女神、老婆、命中註定、想你了、抱你親你 |
| `PHONE_PATTERN` | 台灣手機號碼格式 |

**面試講法**：

> 我沒有假設模型一定會守規矩。系統提示裡有寫規則，但輸出端還是有一層正則過濾 —— 擋掉要聯絡方式、問收入年紀、過度親暱這幾類。因為第一句話如果踩到這些，使用者的體感是很差的，而模型偶爾就是會越界。

**這段展示的是「不信任模型輸出」的工程直覺** —— 這正是 Cake 說的「AI 品質治理」的一部分。

## 6. ★ 逾時設定：有 P95 數據支撐的調整 ✅

程式碼註解（原文）：

```
// Bumped 4500 → 8000ms (YC-77 / YC-169 / YC-190 #7): premium prompts use Sonnet
// with 400 max_tokens; p95 latency exceeds 4.5s in production, causing axios
// timeout → empty AI suggestions → chatCoachAdviceFailed in Flutter. Match
// chatCoachService.REQUEST_TIMEOUT_MS to stay within the Lambda 60s budget
// while not capping below Sonnet p95.
```

**這段註解本身就是一個完整的案例**，而且回答了案例 A 裡「P95 延遲多少」那個待補欄位：

- **問題鏈**：逾時設 4.5 秒 → Sonnet 的 P95 超過 4.5 秒 → axios timeout → AI 建議為空 → Flutter 端報 `chatCoachAdviceFailed`
- **診斷**：premium 用 Sonnet、`max_tokens: 400`，生產環境 P95 > 4.5s
- **決策**：調到 8 秒 —— 上界是 Lambda 60 秒預算，下界是 Sonnet 的 P95
- **一致性**：同步對齊 `chatCoachService` 的逾時設定
- **可追溯**：有工單編號 YC-77 / YC-169 / YC-190

**面試講法**：

> 逾時我一開始設 4.5 秒，結果 premium 走 Sonnet 之後，生產環境的 P95 超過這個數，就會 axios timeout、AI 建議變空、前端報錯。所以我改成 8 秒 —— 上限是 Lambda 的 60 秒預算，下限不能低於 Sonnet 的 P95，取中間留餘裕。同時把聊天教練的逾時也對齊，避免兩個服務行為不一致。

**這段的價值**：它證明你的參數是**依實測數據調的**，不是拍腦袋。而且你追到了「逾時 → 空結果 → 前端錯誤」這條完整的因果鏈。

## 7. 其他實證

- `forceRefresh` 參數：使用者可強制重新生成，跳過快取
- `ANTHROPIC_API_KEY` 不存在時完全不呼叫，直接走模板 —— 開發環境不會產生費用
- **有單元測試**：`__tests__/service/icebreakerService.test.js`、`__tests__/mocks/anthropicMock.js`（mock 掉模型呼叫）
- 模型分層：`getGeneralAIModel()` / `getAdvancedAIModel()`，free 與 premium 走不同模型

---

# 二、AI 開發規範文件（重要發現）

> 檔案：`sugarbee/.claude/skills/ai-service/SKILL.md`
> 依據「2026-07-12《AI 深度整合評估報告》的架構決策」

**這份文件的存在，直接影響 Day 3 的規劃 —— 詳見下方第三節。**

文件涵蓋：

| 章節 | 內容重點 |
|------|---------|
| 技術選型 | 一律用官方 `@anthropic-ai/sdk`，**明文禁止 LangChain / LlamaIndex**；API key 走 secrets 管理 |
| 架構掛法 | `service/ai/` 分層（`aiClient.js` 單例、`prompts/` 版本化、各功能 service）；**改 prompt = 正式變更，要 review** |
| 用量落庫 | `aiUsageRepository.js` 記錄每次 `input_tokens / output_tokens / cache_read_input_tokens` → CMS 成本看板 |
| 模型分層 | Haiku 4.5（審核初篩、分類）／Sonnet 5（簡介生成、開場白、配對重排）／Opus 4.8（低頻深度分析） |
| 成本護欄 | 非即時走 **Batch API（五折）**；系統提示下 `cache_control` 做 prompt caching；**每功能設日預算熔斷 + per-user rate limit** |
| Lambda 事故沉澱 | LLM 呼叫必須 await，**禁止 fire-and-forget**；需背景化走 SQS；AI 永不阻塞關鍵路徑（扣蜜、付款、發訊、配對在 AI 失敗時照常運作） |
| 輸出安全 | 分類／審核用 **structured outputs**（固定枚舉＋信心分數）；用戶內容以分隔標記包裹並宣告為不可信資料；生成物一律**草稿＋用戶確認**，不自動代發 |
| 政策紅線 | AI 只做分級摘要，**禁止自動鎖帳號**；配對重排只作用於既有管線篩過的小候選集 |
| 品質流程 | **每個 AI 功能建 50–200 筆黃金評測集（含刁鑽案例）進版控；改 prompt 必跑評測後才合併**；上線前定義成功指標（採用率、配對率、人審推翻率）進 CMS 看板 |

## ★ 這份文件裡藏著 GA 事故的完整根因

> Lambda freeze：handler 回應後 promise 被凍結，下次 invocation 解凍時已過期——GA 埋點事故的真根因；**先前 family:4/IPv6 假說已推翻**

**「先前 family:4/IPv6 假說已推翻」這句非常有價值** —— 它證明 GA 事故也走過完整的假設-驗證-推翻流程，不是一次就猜中。

面試講案例 D 的 GA 那段時，這句要加進去：

> GA 那批逾時告警，我一開始的假說是網路層的問題 —— 懷疑是 IPv6 或 DNS family 解析造成的。後來把那個假說推翻了，真正的原因是 fire-and-forget：handler 回應之後 promise 就被凍結，等下次 invocation 解凍時計時器早就過期了，所以被記成逾時，但封包其實已經送出去。

---

# 三、對 Day 3 規劃的影響（重要）

Cake 說你缺「模型評估、提示設計體系、資料標註策略、AI 指標治理」。**從程式碼與規範文件來看，你已經有一半以上：**

| Cake 指出的缺口 | 實際狀況 |
|----------------|---------|
| **提示設計體系** | ✅ 已有 —— `prompts/` 版本化、改 prompt 要 review、系統提示下 prompt caching |
| **AI 指標治理** | ✅ 成本面已有 —— token 用量落庫、CMS 成本看板、日預算熔斷、per-user rate limit |
| **模型評估** | ⚠️ **規範有，實作待確認** —— SKILL.md 寫「建 50–200 筆黃金評測集、改 prompt 必跑評測」，但需確認是否已建 |
| **資料標註策略** | ⚠️ 同上 |

**所以 Day 3 的工作量比原本估的小很多。** 需要確認的只有一件事：

> ⬜ **SKILL.md 第 7 節寫的「黃金評測集」是已經建好了，還是只是規範？**

- **如果已建** → Day 3 幾乎不用做新東西，只要把現有的整理成可展示的形式，並更新履歷（目前履歷完全沒提評測集，是重大遺漏）
- **如果只是規範** → Day 3 照原計畫做，但起點比想像中高 —— 你已經知道要建 50–200 筆含刁鑽案例、要進版控、改 prompt 必跑

**無論哪種，這份規範文件本身就是資產**：它證明你對 AI 工程的治理面有系統性思考，而不只是會串 API。面試時可以直接講：

> 我們有一份 AI 開發規範，規定所有 LLM 呼叫的架構位置、成本護欄、輸出安全跟政策紅線。比如非即時任務一律走 Batch API 省一半、系統提示做 prompt caching、每個功能有日預算熔斷跟 per-user rate limit 防止被當免費 ChatGPT 用；輸出端分類類一律用 structured outputs，同時也封死 prompt injection 的輸出面。

---

# 四、可以直接補進履歷的三點

目前履歷完全沒提到這些，但它們的份量不低：

1. **成本護欄**：Batch API（五折）、prompt caching、token 用量落庫、日預算熔斷、per-user rate limit
2. **輸出安全**：structured outputs、用戶內容以分隔標記包裹並宣告不可信、生成物草稿制不自動代發
3. **逾時依 P95 實測調整**：4.5s → 8s，上界受 Lambda 預算約束

建議合併成一條（約 60 字），加在 AI 那條後面：

> AI 成本與安全治理：非即時任務走 Batch API、系統提示採 prompt caching，token 用量落庫並設日預算熔斷與 per-user rate limit；輸出採結構化格式與正則過濾，逾時依生產環境 P95 實測調整
