import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Change Language"
      >
        <IoLanguage size={24} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-50 border border-gray-100 dark:border-gray-700 animate-fade-in-down">
          <button
            onClick={() => changeLanguage("en")}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              i18n.language === "en"
                ? "font-bold text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-200"
            }`}
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("zh-TW")}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              i18n.language === "zh-TW"
                ? "font-bold text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-200"
            }`}
          >
            繁體中文
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
