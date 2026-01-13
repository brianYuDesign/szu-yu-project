import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Block from "../components/Block";

const Skill = () => {
  return (
    <Block>
      <div className="text-xl text-center font-bold py-2">
        Skill <FontAwesomeIcon icon={faCode} />
      </div>
      <div className="flex flex-col mb-2">
        {skillList.map((item, index) => (
          <div
            className="flex flex-wrap mr-5 ml-5 mt-3 items-baseline"
            key={`skill_${index}`}
          >
            <div className="text font-bold">{item.title}:</div>
            <div className="text-sm">{item.content}</div>
          </div>
        ))}
      </div>
    </Block>
  );
};

const skillList = [
  {
    title: "Software development",
    content: "NestJs, Typescript, Node.Js",
  },
  { title: "Web development", content: "React, NextJs, HTML/CSS" },
  { title: "Other", content: "Kafka, Sentry, Kibana, Grafana, AWS, Docker" },
  { title: "Database", content: "MySQL, Redis, MongoDB" },
  {
    title: "Methodologies",
    content:
      "FunctionalPrograming, Object Oriented Programing, Refactoring, SOLID, MicroService",
  },
];

export default Skill;
