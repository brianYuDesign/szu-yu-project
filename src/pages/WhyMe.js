import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Block from "../components/Block";

const WhyMe = () => {
  const { t } = useTranslation("whyme");
  const whyMeList = t("items", { returnObjects: true });

  return (
    <Block>
      <div className="text-xl text-center font-bold py-2">
        {t("title")} <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="flex flex-col mb-2">
        {whyMeList.map((item, index) => (
          <div className="flex flex-col mr-5 ml-5 mt-3" key={`whyMe_${index}`}>
            <div className="text font-bold">{item.title}:</div>
            <div className="text-sm">{item.description}</div>
          </div>
        ))}
      </div>
    </Block>
  );
};

export default WhyMe;
