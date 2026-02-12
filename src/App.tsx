import { useState } from "react";
import ValentineIntro from "./components/ValentineIntro";
import Quiz from "./components/Quiz";
import "./index.css";

type Language = "en" | "fr" | "rw";

export default function App() {
  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div className="app">
      {!startQuiz ? (
        <ValentineIntro
          onFinish={() => setStartQuiz(true)}
          language={language}
          setLanguage={setLanguage}
        />
      ) : (
        <Quiz language={language} />
      )}
    </div>
  );
}
