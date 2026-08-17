import React from "react";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation("info");
  const items = t("items", { returnObjects: true }) || [];
  // primary 的欄位已經在頁首出現，側欄只列剩下的
  const rest = items.filter((i) => !i.primary);

  return (
    <section className="sec">
      <div className="sec__h">
        <h2>{t("title")}</h2>
      </div>
      <dl>
        {rest.map((item, index) => (
          <div className="kv" key={`info_${index}`}>
            <dt>{item.label}</dt>
            <dd>
              {item.link ? (
                <a className="link" href={item.link}>
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Info;
