"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    question: "What is the main greenhouse gas produced by burning fossil fuels?",
    options: ["Oxygen", "Carbon Dioxide (CO₂)", "Nitrogen", "Hydrogen"],
    correct: 1,
  },
  {
    question: "How much has the global average temperature risen since the late 1800s?",
    options: ["About 0.1°C", "About 1.2°C", "About 5°C", "About 10°C"],
    correct: 1,
  },
  {
    question: "Which of these is NOT a renewable energy source?",
    options: ["Solar power", "Wind power", "Natural gas", "Hydropower"],
    correct: 2,
  },
  {
    question: "What happens to sea levels when ice sheets melt?",
    options: [
      "They stay the same",
      "They go down",
      "They rise",
      "They freeze over",
    ],
    correct: 2,
  },
  {
    question: "Which daily action can help reduce your carbon footprint the most?",
    options: [
      "Watching less TV",
      "Eating more plant-based meals",
      "Sleeping earlier",
      "Reading more books",
    ],
    correct: 1,
  },
];

const bgParticles = [
  { type: "question", x: "3%",  y: "10%", size: 80,  color: "#c4b5fd", delay: 0,   duration: 5.5 },
  { type: "bulb",     x: "12%", y: "65%", size: 60,  color: "#fcd34d", delay: 1.2, duration: 7   },
  { type: "question", x: "22%", y: "35%", size: 56,  color: "#f9a8d4", delay: 0.5, duration: 6.5 },
  { type: "bulb",     x: "35%", y: "78%", size: 64,  color: "#fcd34d", delay: 2,   duration: 8   },
  { type: "question", x: "46%", y: "6%",  size: 48,  color: "#a5b4fc", delay: 1.5, duration: 5   },
  { type: "question", x: "58%", y: "52%", size: 72,  color: "#c4b5fd", delay: 0.3, duration: 7.5 },
  { type: "bulb",     x: "68%", y: "18%", size: 58,  color: "#fcd34d", delay: 1,   duration: 6   },
  { type: "question", x: "78%", y: "72%", size: 52,  color: "#f9a8d4", delay: 0.8, duration: 8.5 },
  { type: "bulb",     x: "88%", y: "38%", size: 66,  color: "#fcd34d", delay: 1.8, duration: 5.5 },
  { type: "question", x: "93%", y: "85%", size: 44,  color: "#a5b4fc", delay: 2.5, duration: 7   },
];

export default function Section6Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === questions[current].correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  const progress = ((current + (answered ? 1 : 0)) / questions.length) * 100;

  const getMessage = () => {
    if (score === 5)
      return "Perfect score! You're a true Planet Detective! 🏆";
    if (score >= 3)
      return "Great job! You know a lot about our planet! 🌟";
    return "Good try! Keep learning about climate change! 💪";
  };

  return (
    <section
      id="section-5"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 bg-gradient-to-b from-violet-50/40 via-white to-purple-50/30 overflow-hidden"
    >
      {/* Background particles */}
      {bgParticles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none z-0"
          style={{ left: p.x, top: p.y }}
          animate={{
            y: [0, -18, 0, 18, 0],
            x: [0, 8, 0, -8, 0],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 12, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
        >
          {p.type === "question" ? (
            <span style={{ fontSize: p.size, color: p.color, fontWeight: 900, lineHeight: 1 }}>
              ?
            </span>
          ) : (
            <FaLightbulb size={p.size} color={p.color} />
          )}
        </motion.div>
      ))}

      <div className="relative z-10 w-full flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-slate-800 mb-10"
      >
        Test Your Knowledge
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-lg"
      >
        {!finished ? (
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 sm:p-8">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>
                  Question {current + 1} of {questions.length}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-bold text-slate-800 mb-5">
                  {questions[current].question}
                </h3>

                <div className="flex flex-col gap-3">
                  {questions[current].options.map((opt, i) => {
                    let style =
                      "bg-slate-50 border-slate-200 hover:border-sky-400 hover:bg-sky-50";
                    if (answered) {
                      if (i === questions[current].correct) {
                        style =
                          "bg-green-50 border-green-400 text-green-800";
                      } else if (i === selected) {
                        style = "bg-red-50 border-red-400 text-red-700";
                      } else {
                        style = "bg-slate-50 border-slate-200 opacity-50";
                      }
                    }
                    return (
                      <motion.button
                        key={i}
                        whileHover={!answered ? { scale: 1.02 } : {}}
                        whileTap={!answered ? { scale: 0.98 } : {}}
                        onClick={() => handleSelect(i)}
                        className={`w-full text-left rounded-xl px-4 py-3 border-2 font-medium text-sm transition-all cursor-pointer ${style}`}
                        disabled={answered}
                        aria-label={opt}
                      >
                        {opt}
                      </motion.button>
                    );
                  })}
                </div>

                {answered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center justify-between"
                  >
                    <p
                      className={`text-sm font-semibold ${
                        selected === questions[current].correct
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {selected === questions[current].correct
                        ? "Correct! ✓"
                        : "Not quite ✗"}
                    </p>
                    <button
                      onClick={handleNext}
                      className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors cursor-pointer"
                    >
                      {current < questions.length - 1
                        ? "Next Question →"
                        : "See Results"}
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="text-6xl mb-4"
            >
              {score === 5 ? "🏆" : score >= 3 ? "🌟" : "💪"}
            </motion.div>
            <h3 className="text-2xl font-black text-slate-800 mb-2">
              Your Score: {score}/{questions.length}
            </h3>
            <p className="text-slate-500 mb-6">{getMessage()}</p>
            <div className="flex justify-center gap-1 mb-6">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-2 rounded-full ${
                    i < score ? "bg-green-400" : "bg-red-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={reset}
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-full transition-colors cursor-pointer"
            >
              Try Again
            </button>
          </motion.div>
        )}
      </motion.div>
      </div>
    </section>
  );
}
