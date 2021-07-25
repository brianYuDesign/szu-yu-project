import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import Block from "../components/Block"

const Skill = () => {
  return (
    <Block>
      <div className="text-xl text-center font-bold py-2">
        Skill <FontAwesomeIcon icon={faCode} />
      </div>
      <div className="flex flex-col mb-2">
        {skillList.map((item, index) => (
          <div
            className="flex flex-wrap mr-5 ml-5 items-baseline"
            key={`skill_${index}`}
          >
            <div className="text-sm font-bold">{item.title}:</div>
            <div className="text-sm">{item.content}</div>
          </div>
        ))}
      </div>
    </Block>
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
