import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Block from "../components/Block";
import coffeechat from "../img/coffeechat.jpg";
import boundapp from "../img/boundapp.jpg";
import sugarbee from "../img/sugarbee.jpg";
import gamilive from "../img/gamilive.jpg";

const projectImages = {
  coffeechat: coffeechat,
  boundapp: boundapp,
  sugarbee: sugarbee,
  gamilive: gamilive,
};

const Project = () => {
  const { t } = useTranslation("project");
  const items = t("items", { returnObjects: true });
  const archiveItems = t("archiveItems", { returnObjects: true });
  const archive = Array.isArray(archiveItems) ? archiveItems : [];

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
                className="project_thumb hover:opacity-90 transition-opacity duration-300"
                src={projectImages[item.imgKey]}
                alt={item.name}
                loading="lazy"
              />
            )}
            <div className="px-6 py-4">
              <a href={item.link || "#"} className="font-bold text-xl mb-2">
                {item.name}
              </a>
              <p className="text-gray-600 dark:text-gray-300 text-base">{item.content}</p>
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

      {archive.length > 0 && (
        <>
          <div className="text-lg text-center font-bold pt-2 pb-1">
            {t("archiveTitle")}
          </div>
          <div className="px-4 pb-6 md:px-10 md:pb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {archive.map((item, index) => (
              <div
                key={`archive_${index}`}
                className="rounded border border-gray-200 dark:border-gray-700 px-5 py-4"
              >
                <a
                  href={item.link || "#"}
                  className="font-bold text-base mb-1 block"
                >
                  {item.name}
                </a>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.content}
                </p>
                <div className="pt-3">
                  {item.tech &&
                    item.tech.map((tech, ti) => (
                      <span
                        key={`archive_tech_${index}_${ti}`}
                        className="inline-block bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs text-gray-600 dark:text-gray-300 mr-1.5 mb-1.5"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Block>
  );
};

export default Project;
