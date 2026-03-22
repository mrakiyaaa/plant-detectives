"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const options = [
  { label: "Natural Events", correct: false },
  { label: "Human Activities", correct: true },
  { label: "Space Weather", correct: false },
  { label: "Ocean Currents", correct: false },
];

function EarthIllustration() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-0 w-full max-w-2xl mx-auto">
      {/* Healthy Earth */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-green-300 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500" />
        {/* Land masses */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
          <ellipse cx="70" cy="80" rx="35" ry="25" fill="#22c55e" />
          <ellipse cx="130" cy="70" rx="25" ry="20" fill="#16a34a" />
          <ellipse cx="100" cy="130" rx="30" ry="18" fill="#22c55e" />
          <ellipse cx="60" cy="40" rx="15" ry="10" fill="#bbf7d0" opacity="0.8" />
          {/* Ice caps */}
          <ellipse cx="100" cy="20" rx="40" ry="15" fill="white" opacity="0.9" />
          <ellipse cx="100" cy="185" rx="35" ry="12" fill="white" opacity="0.9" />
          {/* Trees */}
          <circle cx="65" cy="75" r="4" fill="#15803d" />
          <circle cx="80" cy="85" r="3" fill="#15803d" />
          <circle cx="125" cy="65" r="3" fill="#15803d" />
          <circle cx="95" cy="125" r="4" fill="#15803d" />
          {/* Clouds */}
          <ellipse cx="40" cy="55" rx="12" ry="5" fill="white" opacity="0.7" />
          <ellipse cx="150" cy="100" rx="14" ry="5" fill="white" opacity="0.7" />
        </svg>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-green-600/80 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
          Healthy
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 text-slate-400 text-2xl font-bold select-none">
        vs
      </div>

      {/* Damaged Earth */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-red-300 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-orange-400 to-red-500" />
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
          {/* Dry land */}
          <ellipse cx="70" cy="80" rx="35" ry="25" fill="#a16207" />
          <ellipse cx="130" cy="70" rx="25" ry="20" fill="#92400e" />
          <ellipse cx="100" cy="130" rx="30" ry="18" fill="#a16207" />
          <ellipse cx="60" cy="40" rx="15" ry="10" fill="#d97706" opacity="0.8" />
          {/* Shrunk ice */}
          <ellipse cx="100" cy="20" rx="18" ry="7" fill="white" opacity="0.5" />
          <ellipse cx="100" cy="188" rx="15" ry="5" fill="white" opacity="0.5" />
          {/* Heat waves */}
          <path d="M30 50 Q40 45 50 50 Q60 55 70 50" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.6">
            <animate attributeName="d" values="M30 50 Q40 45 50 50 Q60 55 70 50;M30 48 Q40 53 50 48 Q60 43 70 48;M30 50 Q40 45 50 50 Q60 55 70 50" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M120 40 Q130 35 140 40 Q150 45 160 40" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.6">
            <animate attributeName="d" values="M120 40 Q130 35 140 40 Q150 45 160 40;M120 38 Q130 43 140 38 Q150 33 160 38;M120 40 Q130 35 140 40 Q150 45 160 40" dur="2.5s" repeatCount="indefinite" />
          </path>
          <path d="M60 150 Q75 145 90 150 Q105 155 120 150" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.5">
            <animate attributeName="d" values="M60 150 Q75 145 90 150 Q105 155 120 150;M60 148 Q75 153 90 148 Q105 143 120 148;M60 150 Q75 145 90 150 Q105 155 120 150" dur="3s" repeatCount="indefinite" />
          </path>
          {/* Flood water rising */}
          <rect x="0" y="165" width="200" height="35" fill="#3b82f6" opacity="0.4">
            <animate attributeName="y" values="165;160;165" dur="4s" repeatCount="indefinite" />
          </rect>
        </svg>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-red-600/80 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
          Damaged
        </div>
      </div>
    </div>
  );
}

export default function Section1MysteryHook() {
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const router = useRouter();
  const isCorrect = selected !== null && options[selected].correct;

  const handleSelect = (i: number) => {
    setSelected(i);
    setAnswered(true);
  };

  const goToScience = () => {
    router.push("/science");
  };

  return (
    <section
      id="section-0"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-16 bg-gradient-to-b from-sky-50 via-white to-sky-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <EarthIllustration />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-4xl sm:text-5xl md:text-6xl font-black text-center text-slate-800 mb-4 leading-tight"
      >
        Something Is Changing <br className="hidden sm:block" />
        Our Planet.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-lg sm:text-xl text-slate-500 text-center mb-10 max-w-lg"
      >
        What do you think is causing these changes?
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg w-full mb-8"
      >
        {options.map((opt, i) => {
          let cardStyle =
            "bg-white border-2 border-slate-200 hover:border-sky-400 hover:shadow-lg";
          if (answered && selected === i) {
            cardStyle = opt.correct
              ? "bg-green-50 border-2 border-green-400 shadow-lg shadow-green-100"
              : "bg-red-50 border-2 border-red-400 shadow-lg shadow-red-100";
          }
          return (
            <motion.button
              key={i}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect(i)}
              className={`rounded-2xl p-4 sm:p-5 text-center font-bold text-sm sm:text-base transition-all cursor-pointer ${cardStyle}`}
              aria-label={`Answer: ${opt.label}`}
            >
              {opt.label}
            </motion.button>
          );
        })}
      </motion.div>

      <AnimatePresence mode="wait">
        {answered && (
          <motion.div
            key={isCorrect ? "correct" : "wrong"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-center px-6 py-3 rounded-xl mb-6 max-w-md ${
              isCorrect
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-700"
            }`}
          >
            {isCorrect
              ? "Yes! Scientists found recent rapid changes are mainly caused by human activities."
              : "Not quite — take another look!"}
          </motion.div>
        )}
      </AnimatePresence>

      {isCorrect && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          onClick={goToScience}
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full text-lg shadow-lg shadow-green-200 transition-colors cursor-pointer"
          aria-label="Continue to next section"
        >
          Let&apos;s Explore the Science &rarr;
        </motion.button>
      )}
    </section>
  );
}
