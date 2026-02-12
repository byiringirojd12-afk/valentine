import { useState } from "react";
import "./quizEffects.css";
import "./LanguageSwitcher.jsx"

// Define supported languages
export type Language = "en" | "fr" | "rw";

// Option and Question types
type Option = {
  text: string;
  points: number;
};

type Question = {
  question: string;
  options: Option[];
};

// Props for the Quiz component
interface QuizProps {
  language: Language; // matches ValentineIntro
}

// Quiz questions
const questions: Question[] = [
  {
    question: "When did Mr Offspace truly realize his feelings?",
    options: [
      { text: "At first glance", points: 5 },
      { text: "During a quiet evening reflection", points: 10 },
      { text: "After months of deep talks", points: 8 },
      { text: "When she smiled unexpectedly", points: 7 },
    ],
  },
  {
    question: "What made Mrs Robot Vanessa special to him?",
    options: [
      { text: "Her beauty", points: 5 },
      { text: "Her calm intelligence", points: 10 },
      { text: "Her mystery", points: 7 },
      { text: "Her kindness", points: 9 },
    ],
  },
  {
    question: "How did his love grow?",
    options: [
      { text: "Suddenly and intense", points: 6 },
      { text: "Slowly and deeply", points: 10 },
      { text: "Confusing at first", points: 5 },
      { text: "Unexpectedly fast", points: 7 },
    ],
  },
  {
    question: "What did he miss most when she was away?",
    options: [
      { text: "Her messages", points: 8 },
      { text: "Her voice", points: 10 },
      { text: "Her advice", points: 7 },
      { text: "Her presence", points: 9 },
    ],
  },
  {
    question: "Their love feels like...",
    options: [
      { text: "A temporary spark", points: 3 },
      { text: "A growing foundation", points: 10 },
      { text: "A beautiful journey", points: 9 },
      { text: "An exciting adventure", points: 7 },
    ],
  },
  {
    question: "What defines their bond?",
    options: [
      { text: "Attraction", points: 5 },
      { text: "Emotional connection", points: 10 },
      { text: "Shared laughter", points: 8 },
      { text: "Shared dreams", points: 9 },
    ],
  },
  {
    question: "When she smiles, he feels...",
    options: [
      { text: "Peace", points: 10 },
      { text: "Butterflies", points: 8 },
      { text: "Excited", points: 7 },
      { text: "Inspired", points: 9 },
    ],
  },
  {
    question: "Their love would survive...",
    options: [
      { text: "Distance", points: 9 },
      { text: "Time", points: 10 },
      { text: "Challenges", points: 10 },
      { text: "Doubts", points: 8 },
    ],
  },
  {
    question: "If their love had a symbol, it would be...",
    options: [
      { text: "A rose", points: 8 },
      { text: "A heartbeat", points: 10 },
      { text: "A star", points: 7 },
      { text: "A flame", points: 9 },
    ],
  },
  {
    question: "What makes their story unique?",
    options: [
      { text: "Fate", points: 8 },
      { text: "Depth", points: 10 },
      { text: "Timing", points: 7 },
      { text: "Connection", points: 9 },
    ],
  },
  {
    question: "What is the core of their relationship?",
    options: [
      { text: "Trust", points: 10 },
      { text: "Passion", points: 8 },
      { text: "Loyalty", points: 9 },
      { text: "Understanding", points: 10 },
    ],
  },
  {
    question: "This Valentine, their love feels...",
    options: [
      { text: "Unbreakable", points: 10 },
      { text: "Growing stronger", points: 9 },
      { text: "Magical", points: 8 },
      { text: "Destined", points: 10 },
    ],
  },
];

export default function Quiz({ language: _language }: QuizProps) {
  const [current, setCurrent] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);

  // Handle user answer
  const handleAnswer = (points: number) => {
    setScore((prev) => prev + points);

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  // Calculate final score
  const maxScore = questions.length * 10;
  const percentage = Math.round((score / maxScore) * 100);

  // Determine result message
  const getResultMessage = (): string => {
    if (percentage >= 90)
      return "🔥 Legendary Soulmates — A love written beyond time.";
    if (percentage >= 75) return "💖 Deep Emotional Bond — Strong and lasting.";
    if (percentage >= 60) return "🌹 Growing Romantic Connection.";
    return "✨ A Story Still Unfolding.";
  };

  return (
    <div className="quiz-wrapper">
      <div className="floating-hearts"></div>
      <div className="floating-flowers"></div>

      {!finished ? (
        <div className="quiz-container fade-in">
          <h2>{questions[current].question}</h2>

          <div className="options">
            {questions[current].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt.points)}
                className="option-btn"
              >
                {opt.text}
              </button>
            ))}
          </div>

          <p className="progress">
            Question {current + 1} of {questions.length}
          </p>
        </div>
      ) : (
        <div className="result-container fade-in">
          <h1>💘 Love Compatibility: {percentage}%</h1>
          <h2>{getResultMessage()}</h2>
          <p>
            Mr Offspace & Mrs Robot Vanessa share a bond that grows deeper
            through understanding, patience, and emotional connection.
          </p>
        </div>
      )}
    </div>
  );
}
