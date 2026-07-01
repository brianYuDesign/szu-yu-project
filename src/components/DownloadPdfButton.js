import React from "react";
import { FiDownload } from "react-icons/fi";

const DownloadPdfButton = () => {
  const handleDownload = () => {
    // The print stylesheet reveals only <PrintResume /> and hides the site,
    // so "Save as PDF" from the print dialog yields a clean, selectable,
    // ATS-readable résumé.
    window.print();
  };

  return (
    <button
      onClick={handleDownload}
      className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      aria-label="Save résumé as PDF"
      title="Save as PDF / 存成 PDF"
    >
      <FiDownload size={22} />
    </button>
  );
};

export default DownloadPdfButton;
