"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const options = [
  { label: "Natural Events", correct: false },
  { label: "Human Activities", correct: true },
  { label: "Space Weather", correct: false },
  { label: "Ocean Currents", correct: false },
];

function EarthIllustration() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-2xl mx-auto">
      {/* Healthy Earth */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72">
        <Image
          src="/images/image-1.png"
          alt="Healthy Earth"
          fill
          className="object-contain"
        />
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 text-slate-400 text-2xl font-bold select-none">
        vs
      </div>

      {/* Damaged Earth */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72">
        <Image
          src="/images/image-2.png"
          alt="Damaged Earth"
          fill
          className="object-contain"
        />
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
    router.push("/climate");
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
