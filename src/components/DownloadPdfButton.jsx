import React from "react";
import { useTranslation } from "react-i18next";

const DownloadPdfButton = () => {
  const { t } = useTranslation("common");

  // 列印樣式會把導覽列與互動控制隱藏，並把版面轉成 A4 單欄，
  // 所以從列印對話框「另存為 PDF」拿到的就是可選取、ATS 讀得到的履歷。
  const handlePrint = () => window.print();

  return (
    <button
      type="button"
      onClick={handlePrint}
      aria-label={t("ui.print")}
      title={t("ui.print")}
      className="icon-btn"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M7 9V3h10v6" />
        <rect x="4" y="9" width="16" height="8" rx="1" />
        <path d="M7 17h10v4H7z" />
      </svg>
      <span className="icon-btn__t">{t("ui.print")}</span>
    </button>
  );
};

export default DownloadPdfButton;
