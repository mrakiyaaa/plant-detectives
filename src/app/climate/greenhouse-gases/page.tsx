"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const gases = [
  {
    name: "Carbon Dioxide (CO2)",
    source: "Burning fossil fuels, deforestation",
    impact: "Stays in the atmosphere for hundreds of years",
    level: 80,
  },
  {
    name: "Methane (CH4)",
    source: "Livestock, natural gas leaks, landfills",
    impact: "80x more potent than CO2 over 20 years",
    level: 60,
  },
  {
    name: "Nitrous Oxide (N2O)",
    source: "Fertilisers, livestock waste",
    impact: "300x more potent than CO2 over 100 years",
    level: 40,
  },
  {
    name: "Water Vapour (H2O)",
    source: "Evaporation from oceans and land",
    impact: "Most abundant greenhouse gas — amplifies warming",
    level: 90,
  },
];

function SkyScene({ value }: { value: number }) {
  const temp = (1.2 + (value / 100) * 2.6).toFixed(1);
  const warmth = value / 100;
  const skyR = Math.round(135 + warmth * 120);
  const skyG = Math.round(206 - warmth * 100);
  const skyB = Math.round(235 - warmth * 150);
  const iceWidth = 120 - warmth * 80;

  return (
    <div className="relative w-full max-w-xl mx-auto h-64 sm:h-72 rounded-3xl overflow-hidden shadow-inner">
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{ backgroundColor: `rgb(${skyR}, ${skyG}, ${skyB})` }}
      />
      <motion.div
        className="absolute top-6 right-10 rounded-full"
        style={{
          width: 50 + warmth * 20,
          height: 50 + warmth * 20,
          backgroundColor: `rgb(${250}, ${200 - warmth * 60}, ${50})`,
          boxShadow: `0 0 ${20 + warmth * 40}px ${10 + warmth * 20}px rgba(250, ${200 - warmth * 60}, 50, ${0.3 + warmth * 0.4})`,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-20 transition-colors duration-500"
        style={{
          backgroundColor: `rgb(${120 + warmth * 80}, ${160 - warmth * 60}, ${80 - warmth * 40})`,
        }}
      />
      <motion.div
        className="absolute bottom-16 left-1/2 bg-white/80 rounded-t-full"
        animate={{ width: iceWidth, height: iceWidth * 0.4 }}
        style={{ translateX: "-50%" }}
        transition={{ duration: 0.5 }}
      />
      {value > 40 && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute bottom-20"
              style={{ left: `${20 + i * 25}%` }}
              animate={{ y: [-5, -15, -5], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
            >
              <svg width="30" height="20" viewBox="0 0 30 20">
                <path
                  d="M0 15 Q7 5 15 15 Q23 25 30 15"
                  stroke={`rgba(239, 68, 68, ${0.4 + warmth * 0.4})`}
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </motion.div>
          ))}
        </>
      )}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-xl px-4 py-2 shadow">
        <p className="text-xs text-slate-500 font-medium">Global Temperature Rise</p>
        <p
          className="text-2xl font-black"
          style={{
            color: warmth > 0.5 ? "#ef4444" : warmth > 0.25 ? "#f59e0b" : "#22c55e",
          }}
        >
          +{temp}°C
        </p>
      </div>
    </div>
  );
}

export default function GreenhouseGasesPage() {
  const [sliderValue, setSliderValue] = useState(15);
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
        What are Greenhouse Gases?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-slate-600 leading-relaxed mb-10 text-base sm:text-lg"
      >
        Greenhouse gases are gases in Earth&apos;s atmosphere that absorb and
        re-emit infrared radiation, keeping the planet warm enough to support
        life. They act like the glass in a greenhouse — letting sunlight in but
        slowing the escape of heat. The key ones are carbon dioxide, methane,
        nitrous oxide, and water vapour.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14"
      >
        {gases.map((gas, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
          >
            <h3 className="font-bold text-slate-800 mb-1">{gas.name}</h3>
            <p className="text-xs text-slate-500 mb-1">Source: {gas.source}</p>
            <p className="text-xs text-sky-700 font-medium mb-3">{gas.impact}</p>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-sky-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${gas.level}%` }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
              />
            </div>
          </div>
        ))}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-2xl sm:text-3xl font-black text-slate-800 mb-4"
      >
        How They Affect Climate Change
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-slate-600 leading-relaxed mb-10 text-base sm:text-lg"
      >
        When sunlight reaches Earth, the surface absorbs it and radiates heat
        upward. Greenhouse gases in the upper atmosphere capture this outgoing
        heat and send some of it back down, raising global temperatures. As
        humans release more greenhouse gases by burning fossil fuels and
        clearing forests, this blanket gets thicker — trapping more heat and
        intensifying climate change.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full max-w-xl mx-auto mb-16"
      >
        <h3 className="text-lg font-bold text-slate-700 mb-2 text-center">
          Interactive Climate Slider
        </h3>
        <p className="text-sm text-slate-400 text-center mb-4">
          Drag to see what happens when greenhouse gases increase
        </p>
        <SkyScene value={sliderValue} />
        <div className="mt-4 flex items-center gap-4">
          <span className="text-sm text-green-600 font-semibold">Low</span>
          <input
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="flex-1 bg-gradient-to-r from-green-300 via-yellow-300 to-red-400 rounded-lg cursor-pointer"
            aria-label="Greenhouse gas level"
          />
          <span className="text-sm text-red-600 font-semibold">High</span>
        </div>
      </motion.div>
    </main>
  );
}
