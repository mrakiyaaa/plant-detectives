import { motion } from "framer-motion";

interface OptionButtonProps {
  option: string;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
  disabled: boolean;
}

export default function OptionButton({ option, isSelected, onSelect, index, disabled }: OptionButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onSelect}
      disabled={disabled}
      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
        isSelected
          ? "border-blue-400 bg-blue-50 shadow-md"
          : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"
      } ${disabled ? "cursor-not-allowed opacity-75" : "cursor-pointer"}`}
    >
      <div className="flex items-center space-x-3">
        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
          isSelected ? "border-blue-500 bg-blue-500" : "border-slate-300"
        }`}>
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-2 h-2 bg-white rounded-full"
            />
          )}
        </div>
        <span className="text-slate-800 font-medium">{option}</span>
      </div>
    </motion.button>
  );
}