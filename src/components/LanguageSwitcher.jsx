import React from "react";

export default function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="language-switch">
      <button onClick={() => setLanguage("en")} className={language==="en" ? "active" : ""}>EN</button>
      <button onClick={() => setLanguage("fr")} className={language==="fr" ? "active" : ""}>FR</button>
      <button onClick={() => setLanguage("rw")} className={language==="rw" ? "active" : ""}>RW</button>
    </div>
  );
}
