import React from "react";
import { useTranslation } from "react-i18next";
import profileImg from "../img/profile.jpg";

const Header = () => {
  const { t } = useTranslation("cover");
  const { t: ti } = useTranslation("info");
  const { t: tc } = useTranslation("common");

  const name = (t("title") || "").replace(/\s*cv\s*$/i, "").trim();
  const items = ti("items", { returnObjects: true }) || [];
  // primary 的欄位放頁首，其餘留給側欄，避免同一組聯絡方式在畫面上出現兩次
  const primary = items.filter((i) => i.primary);
  const email = items.find((i) => (i.link || "").startsWith("mailto:"));

  return (
    <header className="head">
      <div className="head__in">
        <img className="head__photo" src={profileImg} alt={name} />

        <div className="head__id">
          <h1>{name}</h1>
          <p className="head__title">{t("subtitle")}</p>
        </div>

        {email && (
          <div className="head__cta">
            <a className="btn" href={email.link}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="1" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              {tc("ui.emailMe")}
            </a>
          </div>
        )}
      </div>

      <dl className="head__meta">
        {primary.map((item, i) => (
          <div key={`primary_${i}`}>
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
    </header>
  );
};

export default Header;
