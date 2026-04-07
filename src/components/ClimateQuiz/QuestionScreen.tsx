import { motion } from "framer-motion";
import { QuizQuestion } from "@/constants/quizData";
import ProgressBar from "./ProgressBar";
import OptionButton from "./OptionButton";

interface QuestionScreenProps {
  question: QuizQuestion;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswerIndex: number | null;
  onSelectAnswer: (answerIndex: number) => void;
  onNext: () => void;
  isLastQuestion: boolean;
  levelName: string;
}

export default function QuestionScreen({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswerIndex,
  onSelectAnswer,
  onNext,
  isLastQuestion,
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
        <h1 className="text-2xl font-bold text-slate-800 mb-2">{levelName}</h1>
      </div>

      <ProgressBar 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={totalQuestions} 
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl sm:text-2xl font-bold text-slate-800 mb-8 text-center"
      >
        {question.question}
      </motion.h2>

      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            isSelected={selectedAnswerIndex === index}
            onSelect={() => onSelectAnswer(index)}
            index={index}
            disabled={selectedAnswerIndex !== null}
          />
        ))}
      </div>

      {selectedAnswerIndex !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <button
            onClick={onNext}
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
          >
            {isLastQuestion ? "Finish Quiz" : "Next Question →"}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}