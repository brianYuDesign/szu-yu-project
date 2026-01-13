import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import Block from "../components/Block";

const Work = () => {
  return (
    <Block>
      <div className="text-xl text-center font-bold py-2">
        Experience <FontAwesomeIcon icon={faTools} />
      </div>
      <ul className=" rounded-3xl">
        {workList.map((item, index) => (
          <li key={`work_${index}`}>
            <article>
              <div
                // href="https://blog.tailwindcss.com/multi-line-truncation-with-tailwindcss-line-clamp"
                className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden "
              >
                <h3 className="md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0 font-bold">
                  {item.companyName} - {item.jobTitle}
                </h3>
                <time
                  dateTime="2021-01-24T20:00:00Z"
                  className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
                >
                  <svg
                    viewBox="0 0 12 12"
                    className="w-3 h-3 mr-6 overflow-visible text-gray-300"
                  >
                    <circle cx={6} cy={6} r={6} fill="currentColor" />
                    <path
                      d="M 6 -6 V -30"
                      fill="none"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="text-gray-200"
                    />
                    <path
                      d="M 6 18 V 500"
                      fill="none"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="text-gray-200"
                    />
                  </svg>
                  {item.period}
                </time>
                <div className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0 text-gray-400">
                  {Array.isArray(item.jobDesc) ? (
                    <ul className="list-disc list-inside space-y-1">
                      {item.jobDesc.map((desc, idx) => (
                        <li
                          key={idx}
                          dangerouslySetInnerHTML={{ __html: desc }}
                        />
                      ))}
                    </ul>
                  ) : (
                    <p>{item.jobDesc}</p>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Block>
  );
};

const workList = [
  {
    companyName: "云桐科技 - 遊戲/直播",
    jobTitle: "System Development Lead",
    jobDesc: [
      "主導多款遊戲與平台型產品後端架構設計與技術決策，涵蓋即時系統、非同步流程與高併發場景，長期運作於高變動業務環境",
      "擅長 Node.js / TypeScript 後端服務建構，了解 MySQL 效能優化與 Redis 應用",
      "從架構層面評估風險、效能與可擴展性，快速識別瓶頸並提出改善方案，包括非同步處理、資源配置與系統負載優化",
      "熟悉使用 log、metrics 與行為數據進行系統觀測與問題定位",
      "導入 design review、code review 與 release checklist 影響團隊技術決策，建立實作標準與提升系統穩定度",
    ],
    period: "2022.12 ~ Present",
  },
  {
    companyName: "云桐科技 - 遊戲/平台",
    jobTitle: "Backend Engineer",
    jobDesc: [
      "參與多項後端系統開發與維運，包含遊戲、彩票、區塊鏈公平隨機數、爬蟲數據與後台系統",
      "負責系統分析、後端功能實作、程式碼重構與效能優化",
      "主動參與需求規劃，協助釐清業務邏輯與技術實作方式",
      "提供 API 文件、Postman 範例與關鍵技術文件，提升跨團隊協作效率",
      "開發風格重視結構清楚、擴充性與可維護性",
    ],
    period: "2020.09 ~ 2022.12",
  },
  {
    companyName: "4idps",
    jobTitle: "FullStack Engineer",
    jobDesc: [
      "參與並交付多個商業系統專案，涵蓋借貸系統、影音串流平台、設備叫修系統與電商模組，支援實際營運需求",
      "在借貸系統中負責後端核心功能開發與資料流程設計（Node.js / NestJS / MySQL），確保交易流程穩定與資料正確性",
      "於影音串流平台專案中，參與前後端整合與系統架構規劃，並負責自動化部署流程，提升交付效率",
      "透過前後端職責拆分與 API 設計優化，降低模組間耦合度，提升系統可維護性。協助建立基本測試與驗證流程（單元測試 / 功能測試），降低回歸錯誤發生率",
      "與產品與業務單位密切合作，將需求轉化為具體可執行的技術方案，確保專案如期交付",
      "在多專案並行的情境下，維持穩定交付，累積跨領域系統開發經驗，奠定後續平台與遊戲系統的技術基礎",
    ],
    period: "2018.04 ~ 2020.08",
  },
];

export default Work;
