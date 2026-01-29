import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Block from "../components/Block";
import goatshumor from "../img/goatshumor.jpg";
import banalife from "../img/banalife.jpg";
import numberslink from "../img/numberslink.jpg";
import iflubby from "../img/iflubby.jpg";
import cashme from "../img/cashme.jpg";

const projectImages = {
  goatshumor: goatshumor,
  banalife: banalife,
  numberslink: numberslink,
  iflubby: iflubby,
  cashme: cashme,
};

const Project = () => {
  const { t } = useTranslation("project");
  const items = t("items", { returnObjects: true });

  return (
    <Block>
      <div className="text-xl text-center font-bold py-2">
        {t("title")} <FontAwesomeIcon icon={faBook} />
      </div>
      <div className="p-4 md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {items.map((item, index) => (
          <div
            key={`project_${index}`}
            className="rounded overflow-hidden shadow-lg"
          >
            {item.imgKey && projectImages[item.imgKey] && (
              <img
                className="w-full hover:opacity-90 transition-opacity duration-300"
                src={projectImages[item.imgKey]}
                alt={item.name}
              />
            )}
            <div className="px-6 py-4">
              <a href={item.link || "#"} className="font-bold text-xl mb-2">
                {item.name}
              </a>
              <p className="text-gray-400 text-base">{item.content}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {item.tech &&
                item.tech.map((t, ti) => (
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
