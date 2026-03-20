"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pledges = [
  "I save electricity",
  "I recycle",
  "I reduce plastic use",
  "I walk or cycle sometimes",
  "I spread awareness to friends",
];

const badges = [
  { min: 3, label: "Climate Learner 🌿", color: "from-green-400 to-emerald-500" },
  { min: 4, label: "Eco Supporter ♻️", color: "from-teal-400 to-cyan-500" },
  { min: 5, label: "Planet Protector 🌍", color: "from-blue-500 to-indigo-500" },
];

export default function Section8Pledge() {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(pledges.length).fill(false)
  );

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const count = checked.filter(Boolean).length;
  const progress = (count / pledges.length) * 100;

  const currentBadge = [...badges].reverse().find((b) => count >= b.min);

  return (
    <section
      id="section-7"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 bg-gradient-to-b from-emerald-50/40 via-white to-green-50/40"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-slate-800 mb-4"
      >
        Your Planet Needs You 🌱
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base sm:text-lg text-slate-500 text-center max-w-xl mb-10"
      >
        Make a personal pledge to help our planet. Check the actions you commit
        to doing — and earn a badge!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 sm:p-8">
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Your Progress</span>
              <span>
                {count}/{pledges.length} pledges
              </span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, type: "spring" }}
              />
            </div>
          </div>

          {/* Checklist */}
          <div className="flex flex-col gap-3 mb-6">
            {pledges.map((pledge, i) => (
              <motion.label
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                  checked[i]
                    ? "bg-green-50 border-2 border-green-300"
                    : "bg-slate-50 border-2 border-slate-200 hover:border-green-200"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={() => toggle(i)}
                  className="sr-only"
                  aria-label={pledge}
                />
                <motion.div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    checked[i]
                      ? "bg-green-500"
                      : "bg-white border-2 border-slate-300"
                  }`}
                  animate={checked[i] ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {checked[i] && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M2 7L5.5 10.5L12 3.5"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </motion.div>
                <span
                  className={`text-sm font-medium ${
                    checked[i] ? "text-green-800" : "text-slate-700"
                  }`}
                >
                  {pledge}
                </span>
              </motion.label>
            ))}
          </div>

          {/* Badge */}
          <AnimatePresence mode="wait">
            {currentBadge && (
              <motion.div
                key={currentBadge.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-center"
              >
                <motion.div
                  className={`inline-block bg-gradient-to-r ${currentBadge.color} text-white font-black text-lg sm:text-xl px-6 py-3 rounded-2xl shadow-lg`}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(34,197,94,0)",
                      "0 0 30px rgba(34,197,94,0.4)",
                      "0 0 0px rgba(34,197,94,0)",
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {currentBadge.label}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {count >= 3 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-slate-500 text-sm mt-6 leading-relaxed"
            >
              Every action counts. You&apos;re part of the solution. 💚
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center text-xs text-slate-400"
      >
        <p>
          Planet Detectives — An interactive learning experience about climate
          change.
        </p>
        <p className="mt-1">Built with care for our planet. 🌍</p>
      </motion.footer>
    </section>
  );
}
