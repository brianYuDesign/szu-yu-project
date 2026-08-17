import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";
import DownloadPdfButton from "./DownloadPdfButton";

const SECTIONS = [
  "summary",
  "strengths",
  "experience",
  "works",
  "archive",
  "skills",
  "education",
];

const Nav = () => {
  const { t } = useTranslation("common");
  const [current, setCurrent] = useState(SECTIONS[0]);
  const ticking = useRef(false);

  useEffect(() => {
    const spy = () => {
      // 側欄的「技能／學歷」在桌機版與主欄同一個垂直起點，
      // 不能用「最後一個通過探測線的」來判斷（那會永遠選到陣列末端的側欄區段）。
      // 改成取「通過探測線且最接近探測線」的那一個。
      let best = null;
      let bestTop = -Infinity;
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top <= 100 && top > bestTop) {
          bestTop = top;
          best = id;
        }
      });
      setCurrent(best || SECTIONS[0]);
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        spy();
        ticking.current = false;
      });
    };

    spy();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", spy, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", spy);
    };
  }, []);

  return (
    <nav className="nav" aria-label={t("ui.sectionNav")}>
      <div className="nav__in">
        <div className="nav__list">
          {SECTIONS.map((id) => (
            <a
              key={id}
              className="nav__link"
              href={`#${id}`}
              aria-current={current === id ? "true" : "false"}
            >
              {t(`nav.${id}`)}
            </a>
          ))}
        </div>
        <div className="nav__tools">
          <LanguageSelector />
          <ThemeToggle />
          <DownloadPdfButton />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
