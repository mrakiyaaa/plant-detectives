import { motion } from "framer-motion";
import { QuizResult } from "@/constants/quizData";

interface ResultScreenProps {
  result: QuizResult;
  levelName: string;
  onNextLevel?: () => void;
  onRetryLevel: () => void;
  isLastLevel: boolean;
}

export default function ResultScreen({ 
  result, 
  levelName, 
  onNextLevel, 
  onRetryLevel, 
  isLastLevel 
}: ResultScreenProps) {
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
        <h1 className="text-2xl font-bold text-slate-800 mb-4">{levelName} Complete!</h1>
        
        <motion.div
          className="text-8xl mb-6"
          animate={{
            rotate: result.earthState === "happy" ? 360 : 0,
            scale: result.earthState === "okay" ? [1, 1.05, 1] : 1,
            y: result.earthState === "sad" ? [0, 10, 0] : 0
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse" as const
          }}
        >
          {result.emoji}
        </motion.div>
        
        <div className="text-3xl font-bold text-slate-600 mb-6">
          You scored {result.score} / {result.totalQuestions}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className={`rounded-2xl p-6 mb-8 ${
          result.earthState === "happy" 
            ? 'bg-green-50 border-2 border-green-200' 
            : result.earthState === "okay"
            ? 'bg-blue-50 border-2 border-blue-200'
            : 'bg-red-50 border-2 border-red-200'
        }`}
      >
        <p className="text-lg text-slate-700 leading-relaxed">
          {result.message}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="space-y-4"
      >
        {result.passed ? (
          <>
            {isLastLevel ? (
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-4">
                <p className="text-yellow-800 font-medium">
                  🎉 Congratulations! You've completed all levels and earned the Climate Hero badge!
                </p>
              </div>
            ) : (
              <button
                onClick={onNextLevel}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all shadow-lg hover:shadow-xl"
              >
                🌱 Try Next Level
              </button>
            )}
          </>
        ) : (
          <button
            onClick={onRetryLevel}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all shadow-lg hover:shadow-xl"
          >
            🔁 Retry Level
          </button>
        )}
        
        <div className="mt-4">
          <button
            onClick={() => window.location.reload()}
            className="text-slate-600 hover:text-slate-800 font-medium underline"
          >
            ← Back to Level Select
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}