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
    companyName: "云桐科技(現)",
    jobTitle: "資訊技術經理",
    jobDesc: [
      "帶領 <strong>11 人跨職能技術團隊（前端、後端）</strong>，負責產品研發、系統穩定度與交付品質",
      "主導 <strong>12+ 款遊戲與平台型產品</strong> 從系統設計、開發到正式上線，長期處於高變動、高併發的業務環境",
      "同時承擔 <strong>技術決策與團隊治理角色</strong>，結合系統架構設計、開發流程與風險控管，提升整體交付穩定度",
      "透過系統重構與流程優化，<strong>有效降低效能瓶頸與上線後異常發生率</strong>，顯著減少 hotfix 次數",
      "擅長以 <strong>Node.js / TypeScript</strong> 建構與維運後端服務，熟悉即時系統與遊戲後端架構",
      "<strong>專長於善用監控與觀測系統進行問題定位</strong>，能從 log、metrics 與實際行為數據中分析系統瓶頸",
      "擅長針對高併發與即時需求，<strong>分析並優化潛在效能瓶頸</strong>，包含資源使用、非同步流程與系統負載",
      "能在技術與業務需求之間取得平衡，將抽象問題轉化為可落地的優化方案",
      "透過 <strong>design review、code review 與明確交付標準</strong>，建立團隊共識並確保實作品質",
    ],
    period: "2023.01 ~ 至今",
  },
  {
    companyName: "云桐科技(現)",
    jobTitle: "後端工程師",
    jobDesc: [
      "參與多項後端系統開發與維運，包含遊戲、彩票、公平隨機數、爬蟲數據與後台系統",
      "負責系統分析、後端功能實作、程式碼重構與效能優化",
      "主動參與需求規劃，協助釐清業務邏輯與技術實作方式",
      "提供 API 文件、Postman 範例與關鍵技術文件，提升跨團隊協作效率",
      "開發風格重視結構清楚、擴充性與可維護性",
    ],
    period: "2020.09 ~ 2022.12",
  },
  {
    companyName: "Self-Employed",
    jobTitle: "Freelancer",
    jobDesc:
      "接觸專案管理工作(工時與時程安排，確認需求，人員派工，專案外部與內部溝通)，共同完成客戶目標。或是當一個開發者，在指定期間內，交付API與相關規格文件。",
    period: "2020.09 ~ 至今",
  },
  {
    companyName: "我愛數位科技",
    jobTitle: "軟體工程師",
    jobDesc: [
      "自學 Node.js、GraphQL、AWS，並實際為公司創造營收",
      "可獨立開發後端服務，與前端工程師協同完成產品功能",
      "重視程式碼架構、可讀性與可維護性",
      "撰寫後端 API 與技術文件，提升團隊開發效率",
      "參與公司技術分享，具備多次對內技術分享經驗",
      "協助帶領新人後端開發，管理部分外包工程師進度",
      "建立自動化部署流程，改善交付效率",
    ],
    period: "2018.04 ~ 2020.08",
  },
  // {
  //   companyName: "線上全球",
  //   jobTitle: "專案業務(Intern)",
  //   jobDesc:
  //     "陌生客戶開發，介紹軟體服務，協助客戶開發文件，簡報製作，技術研究(Line@)。",
  //   period: "2017.01 ~ 2017.07",
  // },
  // {
  //   companyName: "傳揚行銷",
  //   jobTitle: "活動督導",
  //   jobDesc: "參與活動前期準備，產品銷售活動督導，產品教育訓練講師。",
  //   period: "2015.08 ~ 2018.08",
  // },
];

export default Work;
