import React, { useState } from "react";
import ValentineIntro from "./components/ValentineIntro";
import Quiz from "./components/Quiz";
import "./index.css";

export default function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [language, setLanguage] = useState("en");

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
