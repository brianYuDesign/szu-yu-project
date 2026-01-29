import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Block from "../components/Block";

const Skill = () => {
  const { t } = useTranslation("skill");
  const skillList = t("items", { returnObjects: true });

  return (
    <Block>
      <div className="text-xl text-center font-bold py-2">
        {t("title")} <FontAwesomeIcon icon={faCode} />
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

export default Skill;
