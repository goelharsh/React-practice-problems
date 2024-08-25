import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  // lng: "eng",
  // if any key is missing then pass fallbackLng will give us previous language
  fallbackLng: "en",
  returnObjects: true,
  resources: {
    en: {
      translation: {
        greeting: "Hello, world",
        description: {
          line1: "Hi <1>{{channel}}</1>",
          line2: "Hello, how are you?",
        },
      },
    },
    fr: {
      translation: {
        greeting: "Bonjour, bienvenue !",
        description: {
          line1: "Salut <1>{{channel}}</1>",
          line2: "Bonjour",
        },
      },
    },
    hi: {
      translation: {
        greeting: "नमस्कार! आपका स्वागत है!",
        description: {
          line1: "<1>{{channel}}</1> कैसे हो",
          line2: "तुम कैसे हो",
        },
      },
    },
    ar: {
      translation: {
        greeting: "كيف حالك",
        description: {
          line1: "كيف حالك",
          line2: "كيف <1>{{channel}}</1>",
        },
      },
    },
  },
});

export default i18n;
