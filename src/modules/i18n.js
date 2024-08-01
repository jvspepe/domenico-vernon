import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const i18nKeys = document.querySelectorAll("[data-i18n-key]");

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "pt-BR",
    supportedLngs: ["pt-BR", "en-US"],
  })
  .then(() => {
    i18nKeys.forEach((element) => {
      const key = element.getAttribute("data-i18n-key");
      element.innerHTML = i18next.t(key);
    });
  });
