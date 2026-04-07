import { motion } from "framer-motion";
import { Question, QuestionOption } from "@/constants/calculatorQuestions";
import ProgressBar from "./ProgressBar";
import OptionCard from "./OptionCard";

interface QuestionScreenProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedOption: QuestionOption | null;
  onSelectOption: (option: QuestionOption) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

export default function QuestionScreen({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onNext,
  isLastQuestion,
}: QuestionScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      <ProgressBar 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={totalQuestions} 
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold text-slate-800 mb-8 text-center"
      >
        {question.question}
      </motion.h2>

      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <OptionCard
            key={index}
            option={option}
            isSelected={selectedOption?.text === option.text}
            onSelect={() => onSelectOption(option)}
            index={index}
          />
        ))}
      </div>

      {selectedOption && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <button
            onClick={onNext}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            {isLastQuestion ? "Calculate My Carbon Footprint" : "Next Question →"}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}