import { motion } from "framer-motion";
import { getResultTier } from "@/constants/calculatorQuestions";

interface ResultScreenProps {
  score: number;
  onRetake: () => void;
}

export default function ResultScreen({ score, onRetake }: ResultScreenProps) {
  const maxScore = 18;
  const result = getResultTier(score);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8"
      >
        <div className="text-8xl mb-4" role="img" aria-label={result.title}>
          {result.icon}
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 mb-4">
          {result.title}
        </h1>
        
        <div className="text-2xl font-bold text-slate-600 mb-6">
          Score: {score} / {maxScore}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className={`rounded-2xl p-6 mb-8 ${
          score <= 4 
            ? 'bg-green-50 border-2 border-green-200' 
            : score <= 9 
            ? 'bg-emerald-50 border-2 border-emerald-200'
            : score <= 14 
            ? 'bg-yellow-50 border-2 border-yellow-200'
            : 'bg-red-50 border-2 border-red-200'
        }`}
      >
        <p className="text-lg text-slate-700 leading-relaxed">
          {result.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="space-y-4"
      >
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
          <p className="text-blue-800 font-medium">
            🌟 Remember: Every small action counts! Check out our Solutions page to learn more ways to help the planet.
          </p>
        </div>

        <button
          onClick={onRetake}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-colors shadow-lg hover:shadow-xl"
        >
          ↺ Retake Quiz
        </button>
      </motion.div>
    </motion.div>
  );
}