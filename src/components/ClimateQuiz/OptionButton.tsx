import { motion } from "framer-motion";

interface OptionButtonProps {
  option: string;
  isSelected: boolean;
  isMultiSelect: boolean;
  onSelect: () => void;
  index: number;
}

export default function OptionButton({ option, isSelected, isMultiSelect, onSelect, index }: OptionButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`w-full p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
        isSelected
          ? "border-blue-400 bg-blue-50 shadow-md"
          : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center space-x-3">
        {/* Checkbox for multi-select, radio for single-select */}
        <div
          className={`shrink-0 flex items-center justify-center border-2 ${
            isMultiSelect ? "w-5 h-5 rounded-md" : "w-4 h-4 rounded-full"
          } ${isSelected ? "border-blue-500 bg-blue-500" : "border-slate-300"}`}
        >
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`bg-white ${isMultiSelect ? "w-2.5 h-2.5 rounded-sm" : "w-2 h-2 rounded-full"}`}
            />
          )}
        </div>
        <span className="text-slate-800 font-medium">{option}</span>
      </div>
    </motion.button>
  );
}
