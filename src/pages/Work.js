import React from "react"

const Work = () => {
  return (
    <div className="content_block flex flex-wrap justify-center shadow-md">
      {workList.map((item, index) => (
        <div key={`work_${index}`}>
          <>
            <div className="company_name">{item.companyName}</div>
            <div className="company_desc">{item.companyDesc}</div>
            <div className="job_title">{item.jobTitle}</div>
            <div className="period">{item.period}</div>

            <div className="">
              {item.projects.map((p, i) => (
                <div key={`project_${i}`}>
                  {p.name}
                  {p.jobDesc}
                  {p.tech}
                </div>
              ))}
            </div>
          </>
        </div>
      ))}
    </div>
  )
}

const workList = [
  {
    companyName: "云桐科技",
    companyDesc: "",
    jobTitle: "軟體工程師",
    jobFeeling: "",
    period: "2020.09 - 至今",
    projects: [
      {
        name: "公平數據平台",
        jobDesc: "參與專案規劃，需求討論，前後端，區塊鏈主要開發",
        tech: ["Node.js", "NestJs", "MySQL", "EOSIO", "React", "MicroService"],
        link: ""
      },
      {
        name: "博弈系統",
        jobDesc: "後端主要開發，需求討論",
        tech: ["Node.js", "NestJs", "MySQL", "KAFKA", "MicroService"],
        link: ""
      }
    ]
  },
  {
    companyName: "我愛數位科技",
    companyDesc: "",
    jobTitle: "軟體工程師",
    jobFeeling: "",
    period: "2018.04 - 2020.08",
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
        tech: [("Salesforce", "Apex", "VisualForce", "BootStrap", "LineBot")],
        link: ""
      }
    ]
  },
  {
    companyName: "線上全球",
    companyDesc: "",
    jobTitle: "專案業務(Intern)",
    jobFeeling: "",
    period: "2017.01 - 2017.07",
    projects: []
  }
]

export default Work
