"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { calculatorQuestions, QuestionOption } from "@/constants/calculatorQuestions";
import WelcomeScreen from "./WelcomeScreen";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "./ResultScreen";

type Screen = "welcome" | "question" | "result";

export default function CarbonCalculator() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuestionOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<QuestionOption | null>(null);

  const totalScore = answers.reduce((sum, answer) => sum + answer.points, 0);
  const currentQuestion = calculatorQuestions[currentQuestionIndex];

  const handleStart = () => {
    setCurrentScreen("question");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedOption(null);
  };

  const handleSelectOption = (option: QuestionOption) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = [...answers, selectedOption];
      setAnswers(newAnswers);

      if (currentQuestionIndex < calculatorQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        setCurrentScreen("result");
      }
    }
  };

  const handleRetake = () => {
    setCurrentScreen("welcome");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedOption(null);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20"
      style={{
        backgroundImage: "url('/images/Eco-friendly footprint in a green world.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="relative z-10 w-full flex flex-col items-center">
      <AnimatePresence mode="wait">
        {currentScreen === "welcome" && (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        )}
        
        {currentScreen === "question" && (
          <QuestionScreen
            key={`question-${currentQuestionIndex}`}
            question={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={calculatorQuestions.length}
            selectedOption={selectedOption}
            onSelectOption={handleSelectOption}
            onNext={handleNext}
            isLastQuestion={currentQuestionIndex === calculatorQuestions.length - 1}
          />
        )}
        
        {currentScreen === "result" && (
          <ResultScreen
            key="result"
            score={totalScore}
            onRetake={handleRetake}
          />
        )}
      </AnimatePresence>
      </div>
    </section>
  );
}