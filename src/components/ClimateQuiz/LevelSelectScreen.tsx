import { motion } from "framer-motion";
import { QuizLevel } from "@/constants/quizData";

interface LevelSelectScreenProps {
  levels: QuizLevel[];
  unlockedLevels: number[];
  onSelectLevel: (levelId: number) => void;
}

export default function LevelSelectScreen({ levels, unlockedLevels, onSelectLevel }: LevelSelectScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl sm:text-5xl font-black text-white mb-4"
      >
        Climate Change Quiz
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-white/80 mb-12"
      >
        Test your knowledge and become a Planet Detective! Complete levels in order to unlock the next challenge.
      </motion.p>

      <div className="grid gap-6">
        {levels.map((level, index) => {
          const isUnlocked = unlockedLevels.includes(level.id);
          
          return (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
            >
              <motion.button
                whileHover={isUnlocked ? { scale: 1.02 } : {}}
                whileTap={isUnlocked ? { scale: 0.98 } : {}}
                onClick={() => isUnlocked && onSelectLevel(level.id)}
                disabled={!isUnlocked}
                className={`w-full p-6 rounded-2xl border-2 transition-all text-left ${
                  isUnlocked
                    ? `${level.color} border-transparent text-white shadow-lg hover:shadow-xl cursor-pointer`
                    : "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">
                      {isUnlocked ? level.emoji : "🔒"}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{level.name}</h3>
                      <p className={`text-sm ${isUnlocked ? "text-white/80" : "text-slate-400"}`}>
                        {level.difficulty} • 8 Questions
                      </p>
                    </div>
                  </div>
                  
                  {!isUnlocked && (
                    <div className="text-slate-400 text-sm">
                      Complete previous level to unlock
                    </div>
                  )}
                </div>
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-4"
      >
        <p className="text-blue-800 font-medium">
          🌟 Complete all 3 levels to become a certified Climate Hero!
        </p>
      </motion.div>
    </motion.div>
  );
}