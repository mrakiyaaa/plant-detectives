import { motion } from "framer-motion";

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

export default function ProgressBar({ currentQuestion, totalQuestions }: ProgressBarProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-600">
          Question {currentQuestion} of {totalQuestions}
        </span>
        <span className="text-sm font-medium text-slate-600">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <motion.div
          className="bg-green-500 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}