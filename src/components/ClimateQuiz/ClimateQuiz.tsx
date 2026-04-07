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
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]); // Level 1 starts unlocked
  const [completedAllLevels, setCompletedAllLevels] = useState(false);

  const currentLevel = quizLevels.find(level => level.id === currentLevelId)!;
  const currentQuestion = currentLevel.questions[currentQuestionIndex];
  const totalQuestions = currentLevel.questions.length;

  const calculateScore = () => {
    return userAnswers.reduce((score, answerIndex, questionIndex) => {
      const correct = currentLevel.questions[questionIndex].correctAnswerIndex;
      return answerIndex === correct ? score + 1 : score;
    }, 0);
  };

  const handleSelectLevel = (levelId: number) => {
    setCurrentLevelId(levelId);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswerIndex(null);
    setCurrentScreen("question");
  };

  const handleSelectAnswer = (answerIndex: number) => {
    setSelectedAnswerIndex(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswerIndex === null) return;

    const newAnswers = [...userAnswers, selectedAnswerIndex];
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswerIndex(null);
    } else {
      // Quiz completed - show results
      setCurrentScreen("result");
    }
  };

  const handleNextLevel = () => {
    const nextLevelId = currentLevelId + 1;
    
    // Unlock next level
    if (!unlockedLevels.includes(nextLevelId)) {
      setUnlockedLevels([...unlockedLevels, nextLevelId]);
    }
    
    // Check if this was the last level
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
    setSelectedAnswerIndex(null);
    setCurrentScreen("question");
  };

  const handleStartOver = () => {
    setCurrentScreen("level-select");
    setCurrentLevelId(1);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswerIndex(null);
    setUnlockedLevels([1]);
    setCompletedAllLevels(false);
  };

  const handleBackToLevelSelect = () => {
    setCurrentScreen("level-select");
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswerIndex(null);
  };

  const score = calculateScore();
  const quizResult = getQuizResult(score, totalQuestions);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 bg-gradient-to-b from-blue-50/50 via-white to-green-50/30">
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
            selectedAnswerIndex={selectedAnswerIndex}
            onSelectAnswer={handleSelectAnswer}
            onNext={handleNext}
            isLastQuestion={currentQuestionIndex === totalQuestions - 1}
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
          <CompletedScreen
            key="completed"
            onStartOver={handleStartOver}
          />
        )}
      </AnimatePresence>
    </section>
  );
}