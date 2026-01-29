import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import language files
import commonEN from './locales/en/common.json';
import coverEN from './locales/en/cover.json';
import infoEN from './locales/en/info.json';
import educationEN from './locales/en/education.json';
import skillEN from './locales/en/skill.json';
import whymeEN from './locales/en/whyme.json';
import workEN from './locales/en/work.json';
import projectEN from './locales/en/project.json';

import commonZH from './locales/zh-TW/common.json';
import coverZH from './locales/zh-TW/cover.json';
import infoZH from './locales/zh-TW/info.json';
import educationZH from './locales/zh-TW/education.json';
import skillZH from './locales/zh-TW/skill.json';
import whymeZH from './locales/zh-TW/whyme.json';
import workZH from './locales/zh-TW/work.json';
import projectZH from './locales/zh-TW/project.json';

// Translation resources
const resources = {
  en: {
    common: commonEN,
    cover: coverEN,
    info: infoEN,
    education: educationEN,
    skill: skillEN,
    whyme: whymeEN,
    work: workEN,
    project: projectEN
  },
  'zh-TW': {
    common: commonZH,
    cover: coverZH,
    info: infoZH,
    education: educationZH,
    skill: skillZH,
    whyme: whymeZH,
    work: workZH,
    project: projectZH
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
