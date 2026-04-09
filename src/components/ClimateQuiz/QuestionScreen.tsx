import { motion } from "framer-motion";
import { QuizQuestion } from "@/constants/quizData";
import ProgressBar from "./ProgressBar";
import OptionButton from "./OptionButton";

interface QuestionScreenProps {
  question: QuizQuestion;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedIndices: number[];
  onSelectAnswer: (index: number) => void;
  onNext: () => void;
  onBack: () => void;
  isLastQuestion: boolean;
  isFirstQuestion: boolean;
  levelName: string;
}

export default function QuestionScreen({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedIndices,
  onSelectAnswer,
  onNext,
  onBack,
  isLastQuestion,
  isFirstQuestion,
  levelName,
}: QuestionScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">{levelName}</h1>
      </div>

      <ProgressBar
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl sm:text-2xl font-bold text-white mb-4 text-center"
      >
        {question.question}
      </motion.h2>

      {question.isMultiSelect && (
        <p className="text-center text-sm text-yellow-300 font-medium mb-4">
          Select all correct answers
        </p>
      )}

      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            isSelected={selectedIndices.includes(index)}
            isMultiSelect={question.isMultiSelect ?? false}
            onSelect={() => onSelectAnswer(index)}
            index={index}
          />
        ))}
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Back button */}
        <button
          onClick={onBack}
          disabled={isFirstQuestion}
          className={`flex items-center gap-2 py-3 px-6 rounded-xl font-bold text-sm transition-all ${
            isFirstQuestion
              ? "bg-white/10 text-white/30 cursor-not-allowed"
              : "bg-white/20 text-white hover:bg-white/30 cursor-pointer"
          }`}
        >
          ← Back
        </button>

        {/* Next button */}
        {selectedIndices.length > 0 ? (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onNext}
            className="flex items-center gap-2 bg-linear-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            {isLastQuestion ? "Finish Quiz" : "Next Question →"}
          </motion.button>
        ) : (
          <div />
        )}
      </div>
    </motion.div>
  );
}
