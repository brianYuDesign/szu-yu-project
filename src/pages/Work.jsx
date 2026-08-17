import React from "react";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation("work");
  const items = t("items", { returnObjects: true }) || [];

  // 年份範圍直接從 period 字串推導，不另外維護一份會過期的常數
  const years = items
    .flatMap((i) => String(i.period || "").match(/\d{4}/g) || [])
    .map(Number);
  const range = years.length
    ? `${Math.min(...years)} — ${Math.max(...years)}`
    : "";

  return (
    <section className="sec" id="experience">
      <div className="sec__h">
        <h2>{t("title")}</h2>
        {range && <span className="count">{range}</span>}
      </div>
      <div>
        {items.map((item, index) => (
          <article className="job" key={`work_${index}`}>
            <div className="job__top">
              <h3 className="job__co">{item.companyName}</h3>
              <span className="job__when">{item.period}</span>
            </div>
            <div className="job__role">{item.jobTitle}</div>
            {item.context && <div className="job__ctx">{item.context}</div>}
            {Array.isArray(item.jobDesc) ? (
              <ul className="pts">
                {item.jobDesc.map((desc, i) => (
                  // jobDesc 允許少量行內標記，沿用原專案既有的寫法
                  <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </ul>
            ) : (
              <ul className="pts">
                <li>{item.jobDesc}</li>
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
