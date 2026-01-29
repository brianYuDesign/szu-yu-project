import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Block from "../components/Block";

const Info = () => {
  const { t } = useTranslation("info");
  const items = t("items", { returnObjects: true });

  return (
    <Block>
      <div className="text-xl text-center font-bold py-2">
        {t("title")} <FontAwesomeIcon icon={faInfo} />
      </div>

      <div className="flex flex-col mb-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between mr-5 ml-5 mt-3 items-baseline"
          >
            <div className="font-bold text-sm">{item.label}</div>
            <div className="text-sm">
              {item.link ? <a href={item.link}>{item.value}</a> : item.value}
            </div>
          </div>
        ))}
      </div>
    </Block>
  );
};

export default Info;
