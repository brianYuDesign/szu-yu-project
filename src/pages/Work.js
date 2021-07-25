import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTools } from "@fortawesome/free-solid-svg-icons"

const Work = () => {
  return (
    <div className="content_block flex flex-wrap justify-center shadow-md">
      <div className="text-xl text-center font-bold mb-2">
        Work <FontAwesomeIcon icon={faTools} />
      </div>
      <ul className=" rounded-3xl p-2 sm:p-5 xl:p-6">
        {workList.map((item, index) => (
          <li key={`work_${index}`}>
            <article>
              <div
                // href="https://blog.tailwindcss.com/multi-line-truncation-with-tailwindcss-line-clamp"
                className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white"
              >
                <h3 className="md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0">
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
                <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
                  {item.jobDesc}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

const workList = [
  {
    companyName: "云桐科技",
    jobTitle: "後端工程師",
    jobDesc:
      "參與專案需求規劃，開發後端NodeJs Restful API，區塊鏈技術(EOS)，WebCrawler，前端React功能畫面開發。",
    period: "2020.09 ~ 至今",
    projects: [
      {
        name: "公平數據平台",
        desc: "參與專案需求整理，前後端，區塊鏈主要開發",
        tech: ["Node.js", "NestJs", "MySQL", "EOSIO", "React", "MicroService"],
        link: ""
      },
      {
        name: "博弈系統",
        desc: "後端主要開發，需求討論",
        tech: ["Node.js", "NestJs", "MySQL", "KAFKA", "MicroService"],
        link: ""
      }
    ]
  },
  {
    companyName: "我愛數位科技",
    jobTitle: "全端工程師",
    jobDesc:
      "參與專案需求分析，全端(NodeJs, React)開發，公司新人教育訓練，技術分享會，福委會主委。",
    period: "2018.04 ~ 2020.08",
    projects: [
      {
        name: "借貸系統",
        jobDesc:
          "參與專案規劃分析與後端主要開發，協助新人快速熟悉環境與環境開發",
        tech: ["Node.js", "NestJs", "MySQL", "Docker"],
        link: ""
      },
      {
        name: "影音串流系統",
        jobDesc: "參與專案規劃與前後端主要開發，自動化部屬",
        tech: [
          "Node.js",
          "Apollo",
          "GraphQl",
          "AWS",
          "S3",
          "EC2",
          "ECS",
          "React",
          "MongoDB",
          "Redis"
        ],
        link: ""
      },
      {
        name: "設備叫修系統",
        jobDesc: "規格文件撰寫與前後端主要開發",
        tech: ["Node.js", "Apollo", "GraphQl", "React", "MongoDB"],
        link: ""
      },
      {
        name: "賞屋接待系統",
        jobDesc: "參與專案規劃，前後端主要開發，撰寫測試",
        tech: ["Salesforce", "Apex", "VisualForce", "BootStrap", "LineBot"],
        link: ""
      }
    ]
  },
  {
    companyName: "線上全球",
    jobTitle: "專案業務(Intern)",
    jobDesc:
      "陌生客戶開發，介紹軟體服務，協助客戶開發文件，簡報製作，技術研究(Line@)。",
    period: "2017.01 ~ 2017.07",
    projects: []
  },
  {
    companyName: "傳揚行銷",
    jobTitle: "活動督導",
    jobDesc: "介紹與銷售產品，協助產品銷售活動，產品教育訓練講師。",
    period: "2015.08 ~ 2018.08",
    projects: []
  }
]

export default Work
