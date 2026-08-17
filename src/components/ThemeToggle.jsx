import React from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/themeContext";

const ThemeToggle = () => {
  const { t } = useTranslation("common");
  const { theme, setTheme } = React.useContext(ThemeContext);
  const isDark = theme === "dark";
  const label = isDark ? t("theme.light") : t("theme.dark");

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="icon-btn"
    >
      {/* 半填滿的圓：同一個圖形同時表達「目前狀態」與「可切換」 */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
      </svg>
      <span className="icon-btn__t">{isDark ? t("ui.toLight") : t("ui.toDark")}</span>
    </button>
  );
};

export default ThemeToggle;
