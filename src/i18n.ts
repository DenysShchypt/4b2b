import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationUK from "./locales/uk/translation.json";
import translationDE from "./locales/de/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      uk: {
        translation: translationUK,
      },
      de: {
        translation: translationDE,
      },
    },
    fallbackLng: "en", // Мова за замовчуванням
    supportedLngs: ["en", "uk", "de"], // Список підтримуваних мов
    load: "languageOnly", // Використовувати лише мову (наприклад, "uk" замість "uk-UA")
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"], // Порядок детекції
      lookupLocalStorage: "i18nextLng", // Ключ для збереження мови в localStorage
      lookupCookie: "i18next", // Ключ для збереження мови в cookie
      caches: ["localStorage", "cookie"], // Де зберігати вибір мови
    },
  });

export default i18n;
