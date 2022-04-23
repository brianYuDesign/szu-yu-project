import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Block from "../components/Block";
import goatshumor from "../img/goatshumor.jpg";
import banalife from "../img/banalife.jpg";
import numberslink from "../img/numberslink.jpg";
import iflubby from "../img/iflubby.jpg";
import cashme from "../img/cashme.jpg";

const Project = () => {
  return (
    <Block>
      <div className="text-xl text-center font-bold py-2">
        Project <FontAwesomeIcon icon={faBook} />
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {projectList.map((item, index) => (
          <div
            key={`project_${index}`}
            className="rounded overflow-hidden shadow-lg"
          >
            {item.img && (
              <img className="w-full" src={item.img} alt={item.name} />
            )}
            <div className="px-6 py-4">
              <a href={item.link || "#"} className="font-bold text-xl mb-2">
                {item.name}
              </a>
              <p className="text-gray-400 text-base">{item.content}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {item.tech.map((t, ti) => (
                <span
                  key={`tech_${index}_${ti}`}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Block>
  );
};

export default Project;

const projectList = [
  {
    name: "揚氏幽墨(外包) - shopify客製化電商UI解決方案",
    content:
      "揚氏幽墨 是一個茶商的品牌重塑，我們使用shopify當作後端與後台，為客戶打造客製化UI電商。我在這專案上除了扮演專案管理的角色，也與同伴一同進行ui的開發，自動化部屬，與後續SEO優化等工作。",
    tech: ["Shopify", "Liquid", "JQuery", "Lottie"],
    link: "https://goats-humor.com/",
    img: goatshumor,
  },
  {
    name: "iflubby(外包) - 寵聯網NodeJs客製化應用後端",
    content:
      "iflubby 是一個提供毛小孩的便利地圖服務。我在這專案上，擔任主要後端架構規劃與開發，也調研相關SSO串接(Fb, Google, Line, Apple)，Google API，並提供相關API與Postman讓前端便於串接。",
    tech: ["Node.js", "NestJs", "SSO", "Docker", "CD"],
    link: "https://iflubby.com/intro",
    img: iflubby,
  },
  {
    name: "Anko(外包) - (MessageBird)第三方聊天整合後台系統",
    content:
      "Anko 是一個將客戶的Line@ or WhatsApp Business整合的聊天室，便於客戶追蹤。我接觸時是接手前面一個freelancer的程式，並接續後面的開發，以及後續正式上線的工作(程式碼優化，系統測試，自動化，容器化，生產環境建置)，專案過程中也與Message Bird尋求國外技術支援。",
    tech: ["Node.js", "NestJs", "GraphQL", "React", "Docker", "CD"],
    link: "",
  },
  {
    name: "彩票與遊戲",
    content: "這是目前在開發的項目，crashpoint遊戲..(待續)。",
    tech: ["Node.js", "NestJs", "MySQL", "KAFKA", "Redis", "MicroService"],
    link: "",
  },
  {
    name: "Numbers Link - 公平隨機數平台",
    content:
      "Numbers Link是一個利用區塊鏈的不可篡改性的技術，我們將提供數據的廠商將數字做整合計算，產出一個隨機公平數。我是這案子的後端主要開發，也參與撰寫簡易的智能合約(eos)。",
    tech: ["Node.js", "NestJs", "MySQL", "EOSIO", "React", "MicroService"],
    link: "https://www.numbers.link/",
    img: numberslink,
  },
  {
    name: "雙城投顧 - 借貸管理系統",
    content:
      "借貸管理系統，主要是讓顧客可以輕鬆貸，但其背後業務流程繁瑣有審核階段需要提供相關的資料與報表。這是我在4i的最後一個案子，除了參與專案規劃分析，也是第一次使用ts，我們使用NestJs框架進行後續開發。",
    tech: ["Node.js", "NestJs", "MySQL", "Docker"],
    link: "https://www.thecoinscompany.com/",
    img: cashme,
  },
  {
    name: "Banana Life - 成人影音串流平台",
    content:
      "Banana Life 成人串流平台，是我在4i認為含金量最高的專案，我們使用AWS的雲服務與架構，撰寫影片高斯模糊與轉檔script 使用lambda 與 ffmpeg，後端後台自己處理外，我也前端與外包App協同合作。",
    tech: [
      "Node.js",
      "Apollo",
      "GraphQl",
      "OAuth",
      "AWS",
      "React",
      "MongoDB",
      "FFMpeg",
    ],
    link: "https://web.appbanana.life/",
    img: banalife,
  },
  {
    name: "設備維護系統",
    content: "撰寫系統規格文件，開發後端架構，協助公司導入GraphQl風格。",
    tech: ["Node.js", "Apollo", "GraphQl", "React", "MongoDB"],
    link: "",
  },
  {
    name: "賞屋接待系統",
    content: "參與整合規劃，協助客戶導入Salesforce line@的聊天機器人開發。",
    tech: ["Salesforce", "Apex", "VisualForce", "Boostrap", "Linebot"],
    link: "https://hiyes.tw/",
  },
];
