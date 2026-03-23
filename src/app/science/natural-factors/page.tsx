"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function VolcanoScene() {
  return (
    <div className="relative w-full max-w-lg mx-auto h-64 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-b from-slate-700 to-slate-900">
      <svg
        viewBox="0 0 400 200"
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
      >
        <rect x="0" y="160" width="400" height="40" fill="#7f1d1d" />
        <polygon points="200,40 120,160 280,160" fill="#44403c" />
        <polygon points="200,40 155,160 245,160" fill="#57534e" />
        <ellipse cx="200" cy="44" rx="22" ry="9" fill="#292524" />
      </svg>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${46 + (i % 5) * 2}%`,
            bottom: "54%",
            width: 6 + (i % 3) * 5,
            height: 6 + (i % 3) * 5,
            backgroundColor: i % 2 === 0 ? "#f97316" : "#fbbf24",
          }}
          animate={{
            y: [0, -(70 + (i % 4) * 18)],
            x: [(i - 4) * 7, (i - 4) * 22],
            opacity: [1, 0],
            scale: [1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.4 + (i % 3) * 0.4,
            delay: i * 0.18,
            ease: "easeOut",
          }}
        />
      ))}

      {[0, 1, 2].map((i) => (
        <motion.div
          key={`smoke-${i}`}
          className="absolute rounded-full bg-slate-400/40"
          style={{
            left: `${47 + i * 1.5}%`,
            bottom: "62%",
            width: 18 + i * 12,
            height: 18 + i * 12,
          }}
          animate={{
            y: [0, -(50 + i * 18)],
            opacity: [0.5, 0],
            scale: [1, 2.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.4 + i * 0.5,
            delay: i * 0.7,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

function SolarRadiationScene() {
  return (
    <div className="relative w-full max-w-lg mx-auto h-64 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-b from-indigo-900 to-slate-900 flex items-center justify-center">
      <motion.div
        className="absolute rounded-full bg-yellow-300"
        style={{
          width: 72,
          height: 72,
          left: "14%",
          top: "50%",
          translateY: "-50%",
          boxShadow: "0 0 48px 20px rgba(253,224,71,0.35)",
        }}
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${26 + i * 8}%`,
            top: `${44 + (i % 3) * 4}%`,
            width: 8,
            height: 8,
            backgroundColor: i % 2 === 0 ? "#fde047" : "#fb923c",
          }}
          animate={{
            x: [0, 90 + i * 8],
            opacity: [0, 0.9, 0],
            scale: [0.5, 1.2, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            delay: i * 0.25,
            ease: "easeInOut",
          }}
        />
      ))}

      <div
        className="absolute rounded-full overflow-hidden shadow-lg"
        style={{ right: "12%", top: "50%", translateY: "-50%", width: 68, height: 68 }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-400 to-blue-600">
          <div className="absolute top-3 left-4 w-6 h-4 rounded-full bg-green-500 opacity-80" />
          <div className="absolute bottom-4 right-3 w-5 h-3 rounded-full bg-green-600 opacity-80" />
        </div>
      </div>

      <div className="absolute left-14 bottom-5 text-yellow-300 text-xs font-semibold tracking-wide">
        Sun
      </div>
      <div className="absolute right-10 bottom-5 text-sky-300 text-xs font-semibold tracking-wide">
        Earth
      </div>
    </div>
  );
}

export default function NaturalFactorsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen px-4 sm:px-8 py-12 max-w-3xl mx-auto">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium text-sm mb-10 transition-colors cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Climate
      </button>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-black text-slate-800 mb-4"
      >
        Natural Factors
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-slate-600 leading-relaxed mb-14 text-base sm:text-lg"
      >
        While human activities are the dominant cause of modern climate change,
        natural factors have always influenced Earth&apos;s climate over
        geological timescales. Understanding these helps us distinguish natural
        variability from the accelerated warming driven by human emissions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-14"
      >
        <h2 className="text-2xl font-black text-slate-800 mb-3">
          Volcanic Eruptions
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          Large volcanic eruptions inject sulfur dioxide (SO2) and ash into the
          stratosphere. The SO2 converts to sulfate aerosols that reflect
          sunlight, temporarily cooling the Earth by 0.1–0.5°C for one to three
          years. Volcanoes also release CO2, but their total annual contribution
          is about 100 times less than human emissions. The 1991 eruption of
          Mount Pinatubo, for example, caused a measurable drop in global
          temperatures the following year.
        </p>
        <VolcanoScene />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mb-14"
      >
        <h2 className="text-2xl font-black text-slate-800 mb-3">
          Solar Radiation
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          The Sun is Earth&apos;s primary energy source. Variations in solar
          output — known as the solar cycle (approximately 11 years) — cause
          minor fluctuations in Earth&apos;s temperature. Over longer
          timescales, changes in Earth&apos;s orbital path around the Sun,
          called Milankovitch cycles, can trigger ice ages and warm periods.
          However, since 1980 solar output has slightly decreased while global
          temperatures have continued rising — confirming that recent warming is
          not driven by the Sun alone.
        </p>
        <SolarRadiationScene />
      </motion.div>
    </main>
  );
}
