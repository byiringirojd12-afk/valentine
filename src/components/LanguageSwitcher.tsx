type Language = "en" | "fr" | "rw";

type LanguageSwitcherProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export default function LanguageSwitcher({
  language,
  setLanguage,
}: LanguageSwitcherProps) {
  return (
    <div className="language-switch">
      <button
        onClick={() => setLanguage("en")}
        className={language === "en" ? "active" : ""}
      >
        EN
      </button>

      <button
        onClick={() => setLanguage("fr")}
        className={language === "fr" ? "active" : ""}
      >
        FR
      </button>

      <button
        onClick={() => setLanguage("rw")}
        className={language === "rw" ? "active" : ""}
      >
        RW
      </button>
    </div>
  );
}
