import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import Block from "../components/Block";

const Work = () => {
  const { t } = useTranslation("work");
  const workList = t("items", { returnObjects: true });

  return (
    <Block>
      <div className="text-xl text-center font-bold py-2">
        {t("title")} <FontAwesomeIcon icon={faTools} />
      </div>
      <ul className=" rounded-3xl">
        {workList.map((item, index) => (
          <li key={`work_${index}`}>
            <article>
              <div
                // href="https://blog.tailwindcss.com/multi-line-truncation-with-tailwindcss-line-clamp"
                className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden "
              >
                <h3 className="md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0 font-bold">
                  {item.companyName} - {item.jobTitle}
                </h3>
                <time
                  dateTime="2021-01-24T20:00:00Z"
                  className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
                >
                  <svg
                    viewBox="0 0 12 12"
                    className="w-3 h-3 mr-6 overflow-visible text-gray-300"
                  >
                    <circle cx={6} cy={6} r={6} fill="currentColor" />
                    <path
                      d="M 6 -6 V -30"
                      fill="none"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="text-gray-200"
                    />
                    <path
                      d="M 6 18 V 500"
                      fill="none"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="text-gray-200"
                    />
                  </svg>
                  {item.period}
                </time>
                <div className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0 text-gray-400">
                  {Array.isArray(item.jobDesc) ? (
                    <ul className="list-disc list-inside space-y-1">
                      {item.jobDesc.map((desc, idx) => (
                        <li
                          key={idx}
                          dangerouslySetInnerHTML={{ __html: desc }}
                        />
                      ))}
                    </ul>
                  ) : (
                    <p>{item.jobDesc}</p>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Block>
  );
};

export default Work;
