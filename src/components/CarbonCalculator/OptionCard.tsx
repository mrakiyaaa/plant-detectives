import { motion } from "framer-motion";
import { QuestionOption } from "@/constants/calculatorQuestions";

interface OptionCardProps {
  option: QuestionOption;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}

export default function OptionCard({ option, isSelected, onSelect, index }: OptionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
        isSelected
          ? "border-green-400 bg-green-50 shadow-md"
          : "border-slate-200 bg-white hover:border-green-200 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center space-x-3">
        <span className="text-2xl" role="img" aria-label={option.text}>
          {option.emoji}
        </span>
        <span className="text-slate-800 font-medium">{option.text}</span>
      </div>
    </motion.button>
  );
}