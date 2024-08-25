import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "hi", lang: "Hindi" },
  { code: "ar", lang: "Arabic" },
];

const LanguageSelector = () => {

    const {i18n}= useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  };

  useEffect(()=>{
    // i18n.dir() will automatically detect that if the language is from left to right then make it right to left0
    console.log(i18n.dir())
    document.body.dir = i18n.dir()
  },[i18n, i18n.language])
  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <button key={lng.code} onClick={() => changeLanguage(lng.code)} className={lng.code === i18n.lang ? "selected" : ""}>
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
