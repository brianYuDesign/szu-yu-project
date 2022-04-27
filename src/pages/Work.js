import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import Block from "../components/Block";

const Work = () => {
  return (
    <Block>
      <div className="text-xl text-center font-bold py-2">
        Work <FontAwesomeIcon icon={faTools} />
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
                <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0 text-gray-400">
                  {item.jobDesc}
                </p>
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
    companyName: "Self-Employed",
    jobTitle: "Freelancer",
    jobDesc:
      "接觸專案管理工作(工時與時程安排，確認需求，人員派工，專案外部與內部溝通)，共同完成客戶目標。或是當一個開發者，在指定期間內，交付API與相關規格文件。",
    period: "2020.09 ~ 至今",
  },
  {
    companyName: "云桐科技(現)",
    jobTitle: "後端工程師",
    jobDesc:
      "主要參與內部產品的系統分析，與後端開發等工作，開發項目包括(遊戲，彩票，公平隨機數，爬蟲數據，後台，重構程式碼與優化效能)。開發上自律，除了主動提供API文件與postman提供串接方進行串接，也會時常參與需求規劃與分析。",
    period: "2020.09 ~ 至今",
  },
  {
    companyName: "我愛數位科技",
    jobTitle: "全端工程師",
    jobDesc:
      "主要負責外包專案的系統分析與討論，進行後端後台主要開發等工作。空閒時主動自學新的技術，參加AWS提供的技術交流分享會，或是前端開發者社群，並定期舉辦技術分享會，早起刷leetcode等活動。TeamBuilding舉辦公司內部團康活動，爬山或戶外烤肉活動，尾牙活動等。",
    period: "2018.04 ~ 2020.08",
  },
  {
    companyName: "線上全球",
    jobTitle: "專案業務(Intern)",
    jobDesc:
      "陌生客戶開發，介紹軟體服務，協助客戶開發文件，簡報製作，技術研究(Line@)。",
    period: "2017.01 ~ 2017.07",
  },
  {
    companyName: "傳揚行銷",
    jobTitle: "活動督導",
    jobDesc: "參與活動前期準備，產品銷售活動督導，產品教育訓練講師。",
    period: "2015.08 ~ 2018.08",
  },
];

export default Work;
