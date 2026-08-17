import React from "react";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation("education");
  const items = t("items", { returnObjects: true }) || [];

  return (
    <section className="sec" id="education">
      <div className="sec__h">
        <h2>{t("title")}</h2>
      </div>
      <div>
        {items.map((item, index) => (
          <div className="edu" key={`edu_${index}`}>
            <div className="edu__s">{item.school}</div>
            <div className="edu__p">{item.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
