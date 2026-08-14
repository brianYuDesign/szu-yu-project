# 全端 + AI-native 職缺版本｜2026-08-14

> 依 `../apply-sop.md` 跑一次的結果。不綁特定公司，當這一類職缺的通用範本用。

---

## Step 1 — JD 判讀

**這類是全端職缺，不是 AI 職缺。** 必要條件全部在 React / Next.js / Node.js / TypeScript 和 scalability、performance、caching；AI 全部落在 Strong Plus Points。

投遞策略因此是：**用全端開門，用 AI 拉開差距**。原本履歷把 AI 放在最前面，投這家會被判定成「AI 的人來投全端」，反而扣分。

### 關鍵字比對

| 類型 | JD 關鍵字 | 我的狀態 | 對應證據 |
|------|----------|---------|---------|
| Hard | React, Next.js, Node.js, TypeScript | 有 | Sugarbee、Coffee Chat、云桐全線 |
| Hard | scalable web applications / APIs / platform services | 有 | 云桐：微服務水平擴展、每秒千筆下注 |
| Hard | frontend architecture, SSR/CSR, web performance | 有 | Next.js App Router；FCP 10.0s → 1.4s |
| Hard | database design, optimization, caching, performance tuning | 有 | 推薦查詢 5s → 毫秒級；連線峰值 -24%；Redis 快取 |
| Hard | cloud, CI/CD, Docker | 有 | AWS / GCP、Docker、K8s、CD pipeline |
| Hard | 5+ years | 有 | 8 年 |
| Plus | LLM-powered applications, RAG, prompt engineering | 有（強） | Vertical AI Kit、AI Concierge、感覺銀航四項功能 |
| Plus | **Claude Code** | 有（強） | JD 直接點名，你是重度使用者，這是最大差異點 |
| Plus | evaluation pipelines | 有（強） | Recall / MRR / Groundedness 進 CI |
| Plus | orchestration workflows | 有 | RRF 融合、重排序、斷路器、供應商備援 |
| Plus | observability | 部分 | Sentry / Kibana / Grafana 有用，但沒有建置故事 |
| Plus | internal developer tooling / platform engineering | 部分 | 有 release checklist、排查流程標準化，但不是平台產品 |
| Plus | AI agents | 弱 | Bound 的非同步 AI job 勉強算，沒有真正的 agent loop |
| Plus | MCP, LangChain, LlamaIndex | 無 | 不要寫。面試被問照實說「自己寫掉那層」 |
| Plus | PHP / Laravel | 無 | 不要寫 |

---

## Step 2 — 網站改了哪三處

| 位置 | 改動 |
|------|------|
| `cover.json` | subtitle 從「AI 應用工程師 / 後端・全端工程師」改成「全端工程師 / AI-native 開發」。第一段改成 React / Next.js / Node.js / TypeScript 打頭，第二段主打 Claude Code 一人交付，第三段才放 RAG 與效能 |
| `whyme.json` | 順序改成：全端 → Claude Code 一人交付 → 找瓶頸與重構 → RAG 與評測 → AI 變現 → 帶團隊。另補上前端效能與 DB 優化的數字 |
| `project.json` | 前三個改成 Sugarbee（Next.js 全端主導）、云桐平台（scalability）、Vertical AI Kit（AI 深度） |
| `skill.json` | 網站開發拉到第一並補 SSR / CSR、Web 效能優化、Tailwind；AI 那欄補 Claude Code、AI-assisted Development |

「自己寫 RAG，不靠 LangChain」的標題也改了。JD 把 LangChain 列為加分項，原本的寫法容易被讀成不熟框架；現在寫成「沒有套 LangChain，因為檢索策略和失敗時的行為我想自己控制」。

---

## Step 3 — 純文字履歷（104 / Email 用）

```
余勝允 Brian Yu｜全端工程師
台北｜0961134525｜brian831121@gmail.com｜可立即到職
作品集：https://brianYuDesign.github.io/szu-yu-project

【簡介】
做了 8 年的全端工程師。前端 React / Next.js，後端 Node.js / TypeScript
（NestJS），前後端同一套語言，從架構設計、資料庫優化到容器化部署都是
我自己來。最近一年把 Claude Code 變成日常開發的一部分，一個人在同一個
產品週期裡交付原本要前端、後端、後台三個人分工的範圍。

【核心技能】
前端：React, Next.js (App Router), TypeScript, SSR/CSR, Web 效能優化, Tailwind CSS
後端：Node.js, NestJS, TypeScript, RESTful API, GraphQL, Python, FastAPI
資料：MySQL, PostgreSQL, Redis, MongoDB, pgvector, 索引與查詢優化, 快取策略
雲端：AWS, GCP, Docker, Kubernetes, CI/CD, Kafka, Sentry, Grafana
AI：Claude Code, RAG, Prompt Engineering, LLM-as-a-Judge, 離線評測, Anthropic API

【工作經歷】

感覺銀航 ｜ AI 工程師 ｜ 2026.03 - 2026.08
- 單月營收 21 萬 → 38 萬（+81%）：做完訂閱自動續訂與扣款失敗處理
- 用 Claude 做了配對建議、聊天教練、破冰話題、簡介生成四項訂閱付費功能，
  加上兩層 fallback，模型出狀況時功能還能用
- 推薦查詢 5 秒 → 毫秒級、API 平均 180ms：改用虛擬產生欄位加複合索引，
  不再即時解析 JSON
- 雲端月支出 1,200 → 400 美金（-60%）：審核依媒體型態分流，生成結果加快取
- FCP 10.0 秒 → 1.4 秒：換掉大圖，中文字型做子集化
- 資料庫連線峰值 1,162 → 883（-24%）：縮短 Proxy 回收時間，補上連線驗證與重試
- 一個人交付 Flutter App、NestJS 後端與 Docker 部署

云桐科技 ｜ System Development Lead ｜ 2022.12 - 2025.12
- 把一款 POC 小遊戲推上線，再擴成 12 款產品線，帶 11 位工程師完成交付
- 上版失誤率 -70%：建立 release checklist 與上版流程規範
- 問題定位效率 +50%：把排查步驟標準化並寫成文件
- 導入 design review 與 code review，成為各產品線沿用的開發標準
- 扛住開獎與熱門時段每秒千筆的下注／訂單流量：跨服務事件流走 Kafka，
  快取與非同步結算用 Redis 和 Bull Queue

云桐科技 ｜ Backend Engineer ｜ 2020.09 - 2022.12
- 開發與維運遊戲、彩票、區塊鏈公平隨機數、爬蟲數據與後台系統
- 負責系統分析、後端實作與效能優化，把接手的舊程式重構成好維護的模組結構

4idps ｜ FullStack Engineer ｜ 2018.04 - 2020.08
- 交付借貸系統、影音串流平台、設備叫修系統與電商模組等商業專案
- 拆開前後端職責、重新設計 API 降低模組耦合，並建立單元測試與功能測試流程

【代表專案】

Sugarbee 高端交友 App（全端主導）｜ Next.js, React, TypeScript, NestJS, AWS, Redis
前端、後端、CMS 與營運後台都由我負責。做了配對引擎 2.0、訂閱金流與虛擬點數、
即時聊天與推播，另外建了真人臉部驗證、內容審核與 Redis 快取架構。
https://sugarbee.vip/

云桐彩票遊戲與直播平台（架構主導）｜ NestJS, Nx Monorepo, Kafka, Socket.IO, Redis
Nx Monorepo 搭 NestJS 微服務，每款玩法拆成 API、Socket、業務服務與非同步
consumer，可以依流量各自水平擴展。即時對局與開獎用 Socket.IO 推送。
https://gamilive.com/

Vertical AI Kit 垂直產業 RAG 方案（獨立開發）｜ Python, FastAPI, pgvector, RAG
一套 RAG 核心，換掉 industry pack 就能給另一個產業用。檢索、評測與韌性框架
自己寫，沒有套 LangChain。六項指標全部過門檻，兩層快取讓單題回應從 52 秒
降到 1.1 秒。

Coffee Chat 聊天聚會平台（獨立開發）｜ Next.js App Router, Tailwind, Turbopack
產品、設計到前後端都是我一個人做。
https://coffee-chat.tw/

【學歷】
中國科技大學 資訊管理系 學士 ｜ 2013 - 2017
IPAS 行動裝置程式設計師（2017）｜ 70-483: Programming in C#（2014）
```

---

## Step 4 — 投遞信（貼在應徵訊息欄）

```
您好，

看到這個職缺同時要 React / Next.js / Node.js 全端，又在推 AI-native
development，這兩塊剛好是我這一年主要在做的事。

我做了 8 年全端，前端 React / Next.js、後端 Node.js / NestJS。最近一年
把 Claude Code 放進日常開發流程，在同一個產品週期裡一個人交付了原本要
前端、後端、後台三個人分工的範圍，單月出了十幾項功能，同時維護另外兩條
產品線；那段期間公司單月營收成長 81%、雲端支出降了 60%。

AI 的部分我不只是接 API。用 Python + FastAPI 自己寫了 RAG 與評測框架，
把 Recall、MRR、Groundedness 放進 CI 當回歸測試跑，檢索品質退步當天就
會被擋下來。效能也習慣自己扛，首屏 10 秒調到 1.4 秒、推薦查詢 5 秒改到
毫秒級。

作品集：https://brianYuDesign.github.io/szu-yu-project
目前可立即到職，希望有機會聊聊。

余勝允 Brian
```

---

## 面試前要補的三個洞

1. **MCP / LangChain / LlamaIndex**：JD 明列。你沒用過，不要寫進履歷。被問就照實說「這層我自己寫掉了」，接著講你為什麼選自建（檢索策略與失敗行為要能控制），再補一句「框架本身花一兩天就能上手」。MCP 值得花半天真的做一個 server 出來，這樣下次就不是弱項。
2. **Observability**：你用過 Sentry / Kibana / Grafana，但沒有「我建了什麼」的故事。想一個具體場景（例如云桐的排查流程標準化那條，本質上就是 observability 的產物），把它講成建置經驗。
3. **AI agents**：目前最接近的是 Bound 的非同步 AI job 和 RAG 的多輪改寫，都不是 agent loop。不要硬套 agent 這個詞，被問就講你做的 orchestration 是什麼形狀。

## 這類職缺的加分角度

JD 反覆出現 developer experience、team productivity、engineering modernization。你有一組別人少見的證據：**上版失誤率 -70%、問題定位效率 +50%、design review 與 code review 變成團隊標準**，加上 Claude Code 導入日常流程。這不是「我會用 AI 工具」，是「我把工程流程改造過，而且有數字」。面試時這條要主動講。
