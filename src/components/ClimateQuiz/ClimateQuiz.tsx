"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { quizLevels, getQuizResult } from "@/constants/quizData";
import LevelSelectScreen from "./LevelSelectScreen";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "./ResultScreen";
import CompletedScreen from "./CompletedScreen";

type Screen = "level-select" | "question" | "result" | "completed";

export default function ClimateQuiz() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("level-select");
  const [currentLevelId, setCurrentLevelId] = useState<number>(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[][]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);
  const [completedAllLevels, setCompletedAllLevels] = useState(false);

  const currentLevel = quizLevels.find((level) => level.id === currentLevelId)!;
  const currentQuestion = currentLevel.questions[currentQuestionIndex];
  const totalQuestions = currentLevel.questions.length;

  const calculateScore = () => {
    return userAnswers.reduce((score, selected, qi) => {
      const q = currentLevel.questions[qi];
      if (q.isMultiSelect && q.correctAnswerIndices) {
        const a = [...selected].sort().join(",");
        const b = [...q.correctAnswerIndices].sort().join(",");
        return a === b ? score + 1 : score;
      }
      return selected[0] === q.correctAnswerIndex ? score + 1 : score;
    }, 0);
  };

  const handleSelectLevel = (levelId: number) => {
    setCurrentLevelId(levelId);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedIndices([]);
    setCurrentScreen("question");
  };

  const handleSelectAnswer = (index: number) => {
    if (currentQuestion.isMultiSelect) {
      // Toggle the tapped option
      setSelectedIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      // Single-select: toggle off if same, replace if different
      setSelectedIndices((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  const handleNext = () => {
    if (selectedIndices.length === 0) return;
    const newAnswers = [...userAnswers, selectedIndices];
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedIndices([]);
    } else {
      setCurrentScreen("result");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex === 0) return;
    const prevIndex = currentQuestionIndex - 1;
    const prevAnswer = userAnswers[prevIndex] ?? [];
    setUserAnswers((prev) => prev.slice(0, prevIndex));
    setCurrentQuestionIndex(prevIndex);
    setSelectedIndices(prevAnswer);
  };

  const handleNextLevel = () => {
    const nextLevelId = currentLevelId + 1;
    if (!unlockedLevels.includes(nextLevelId)) {
      setUnlockedLevels([...unlockedLevels, nextLevelId]);
    }
    if (currentLevelId === 3) {
      setCompletedAllLevels(true);
      setCurrentScreen("completed");
    } else {
      setCurrentScreen("level-select");
    }
  };

  const handleRetryLevel = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedIndices([]);
    setCurrentScreen("question");
  };

  const handleStartOver = () => {
    setCurrentScreen("level-select");
    setCurrentLevelId(1);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedIndices([]);
    setUnlockedLevels([1]);
    setCompletedAllLevels(false);
  };

  const handleBackToLevelSelect = () => {
    setCurrentScreen("level-select");
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedIndices([]);
  };

  const score = calculateScore();
  const quizResult = getQuizResult(score, totalQuestions);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20"
      style={{
        backgroundImage: "url('/images/Planet detective tools and checklist.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />
      <div className="relative z-10 w-full flex flex-col items-center">
        <AnimatePresence mode="wait">
          {currentScreen === "level-select" && (
            <LevelSelectScreen
              key="level-select"
              levels={quizLevels}
              unlockedLevels={unlockedLevels}
              onSelectLevel={handleSelectLevel}
            />
          )}

          {currentScreen === "question" && (
            <QuestionScreen
              key={`question-${currentLevelId}-${currentQuestionIndex}`}
              question={currentQuestion}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={totalQuestions}
              selectedIndices={selectedIndices}
              onSelectAnswer={handleSelectAnswer}
              onNext={handleNext}
              onBack={handleBack}
              isLastQuestion={currentQuestionIndex === totalQuestions - 1}
              isFirstQuestion={currentQuestionIndex === 0}
              levelName={`${currentLevel.name} - ${currentLevel.difficulty}`}
            />
          )}

          {currentScreen === "result" && (
            <ResultScreen
              key={`result-${currentLevelId}`}
              result={quizResult}
              levelName={`${currentLevel.name} - ${currentLevel.difficulty}`}
              onNextLevel={quizResult.passed ? handleNextLevel : undefined}
              onRetryLevel={handleRetryLevel}
              isLastLevel={currentLevelId === 3}
            />
          )}

          {currentScreen === "completed" && (
            <CompletedScreen key="completed" onStartOver={handleStartOver} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
