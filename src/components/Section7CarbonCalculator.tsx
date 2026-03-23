"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSeedling, FaFire } from "react-icons/fa";
import { BsCloudSun } from "react-icons/bs";
import type { IconType } from "react-icons";

const cfQuestions = [
  {
    question: "Do you usually travel by public transport or walk?",
    yesIsGood: true,
  },
  {
    question: "Do you eat meat every day?",
    yesIsGood: false,
  },
  {
    question: "Do you turn off lights when leaving a room?",
    yesIsGood: true,
  },
  {
    question: "Do you recycle regularly?",
    yesIsGood: true,
  },
  {
    question: "Do you use a reusable water bottle?",
    yesIsGood: true,
  },
];

type Result = "LOW" | "MEDIUM" | "HIGH";

const resultData: Record<
  Result,
  { Icon: IconType; iconColor: string; color: string; bg: string; border: string; tip: string }
> = {
  LOW: {
    Icon: FaSeedling,
    iconColor: "#22c55e",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-300",
    tip: "Amazing! You're already making great choices for the planet. Keep inspiring others to follow your lead — small habits make a big difference when everyone does them!",
  },
  MEDIUM: {
    Icon: BsCloudSun,
    iconColor: "#eab308",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-300",
    tip: "You're on the right track! Try swapping one more habit — like choosing public transport more often or cutting back on meat one extra day a week. Every little change adds up!",
  },
  HIGH: {
    Icon: FaFire,
    iconColor: "#ef4444",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-300",
    tip: "There's room to improve, and that's okay! Start with one small change — like turning off lights or using a reusable bottle. Building one good habit at a time is the best way to make a lasting impact.",
  },
};

export default function Section7CarbonCalculator() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const allAnswered = Object.keys(answers).length === cfQuestions.length;

  const getResult = (): Result => {
    let greenScore = 0;
    cfQuestions.forEach((q, i) => {
      const answer = answers[i];
      if ((q.yesIsGood && answer) || (!q.yesIsGood && !answer)) {
        greenScore++;
      }
    });
    if (greenScore >= 4) return "LOW";
    if (greenScore >= 2) return "MEDIUM";
    return "HIGH";
  };

  const handleAnswer = (index: number, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
    setShowResult(false);
  };

  const handleCalculate = () => {
    setShowResult(true);
  };

  const result = getResult();
  const data = resultData[result];

  return (
    <section
      id="section-6"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 bg-gradient-to-b from-teal-50/40 via-white to-cyan-50/30"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-slate-800 mb-4"
      >
        What&apos;s Your Carbon Footprint?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base sm:text-lg text-slate-500 text-center max-w-xl mb-10"
      >
        Answer these 5 quick questions to find out how your daily habits affect
        the planet.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 sm:p-8">
          <div className="flex flex-col gap-5">
            {cfQuestions.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4"
              >
                <p className="text-sm font-medium text-slate-700 flex-1">
                  {i + 1}. {q.question}
                </p>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => handleAnswer(i, true)}
                    className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                      answers[i] === true
                        ? "bg-green-500 text-white shadow-md"
                        : "bg-slate-100 text-slate-500 hover:bg-green-100"
                    }`}
                    aria-label={`${q.question} - Yes`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleAnswer(i, false)}
                    className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                      answers[i] === false
                        ? "bg-red-500 text-white shadow-md"
                        : "bg-slate-100 text-slate-500 hover:bg-red-100"
                    }`}
                    aria-label={`${q.question} - No`}
                  >
                    No
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {allAnswered && !showResult && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-center"
            >
              <button
                onClick={handleCalculate}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-3 rounded-full text-lg shadow-lg shadow-teal-200 transition-colors cursor-pointer"
              >
                Calculate My Footprint
              </button>
            </motion.div>
          )}

          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`mt-6 rounded-2xl p-6 border-2 text-center ${data.bg} ${data.border}`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  className="flex justify-center mb-3"
                >
                  <data.Icon size={48} color={data.iconColor} />
                </motion.div>
                <h3 className={`text-2xl font-black mb-1 ${data.color}`}>
                  {result} IMPACT
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {data.tip}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
