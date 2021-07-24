import React from "react"

const Skill = () => {
  return (
    <div className="content_block shadow-md">
      <div className="text-xl text-center font-bold">
        Skill<i class="fa fa-code" aria-hidden="true"></i>
      </div>
      <div>
        {skillList.map((item, index) => (
          <div
            className="flex flex-wrap mr-5 ml-5 items-baseline"
            key={`skill_${index}`}
          >
            <div className="text-sm font-bold flex-shrink-0">{item.title}:</div>
            <div className="text-sm">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const skillList = [
  { title: "Software development", content: "Node.Js, Salesforce, C#, JAVA" },
  { title: "Web development", content: "ReactJs, Javascript, HTML/CSS" },
  { title: "Other", content: "AWS, JenkinsCI, Docker, ElasticSearch" },
  {
    title: "Development",
    content:
      "Javascript, TypeScript, C#, HTML, CSS, Full stack, Salesforce (APEX)"
  },
  { title: "Database", content: "MongoDB, MySQL, Redis" },
  {
    title: "Methodologies",
    content:
      "FunctionalPrograming, Object Oriented Programing, Refactoring, SOLID, MicroService"
  },
  {
    title: "OS",
    content: "MacOS X, Windows, Linux (Ubuntu)"
  }
]

export default Skill
