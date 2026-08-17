import React from "react";
import { useTranslation } from "react-i18next";

const WhyMe = () => {
  const { t } = useTranslation("whyme");
  const { t: tc } = useTranslation("common");
  const items = t("items", { returnObjects: true }) || [];

  return (
    <section className="sec" id="strengths">
      <div className="sec__h">
        <h2>{t("title")}</h2>
        <span className="count">{tc("ui.countItems", { count: items.length })}</span>
      </div>
      <div className="merits">
        {items.map((item, index) => (
          <article className="merit" key={`whyMe_${index}`}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyMe;
