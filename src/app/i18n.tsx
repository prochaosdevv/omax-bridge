import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import ru from "../locales/ru.json";
import zhCN from "../locales/zhCN.json";

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  zhCN: { translation: zhCN },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
