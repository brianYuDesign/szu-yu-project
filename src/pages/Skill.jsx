import React from "react";
import { useTranslation } from "react-i18next";

const Skill = () => {
  const { t } = useTranslation("skill");
  const { t: tc } = useTranslation("common");
  const items = t("items", { returnObjects: true }) || [];

  return (
    <section className="sec" id="skills">
      <div className="sec__h">
        <h2>{t("title")}</h2>
        <span className="count">{tc("ui.countGroups", { count: items.length })}</span>
      </div>
      <dl>
        {items.map((item, index) => (
          <div className="skill" key={`skill_${index}`}>
            <dt>{item.title}</dt>
            <dd>
              {(item.content || "")
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean)
                .join("、")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Skill;
