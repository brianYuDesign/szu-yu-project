import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Block from "../components/Block";

const Education = () => {
  const { t } = useTranslation("education");
  const items = t("items", { returnObjects: true });

  return (
    <Block>
      <div className="text-xl text-center font-bold py-2">
        {t("title")} <FontAwesomeIcon icon={faSchool} />
      </div>
      <div className="flex flex-col mb-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between mr-5 ml-5 mt-3 items-baseline"
          >
            <div className="font-bold text-sm flex-shrink-0">{item.school}</div>
            <div className="text-sm">{item.period}</div>
          </div>
        ))}
      </div>
    </Block>
  );
};

export default Education;
