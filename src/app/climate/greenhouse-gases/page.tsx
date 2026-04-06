"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

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

      {/* Section 1: Greenhouse Gases and Effect */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-black text-slate-800 mb-6"
      >
        Greenhouse Gases and Effect
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-slate-600 leading-relaxed mb-8 text-base sm:text-lg"
      >
        Greenhouse gases are atmospheric gases — some occurring naturally, like water vapour, carbon dioxide (CO₂), methane (CH₄), and nitrous oxide (N₂O) — that possess the ability to absorb and re-emit infrared radiation, thereby trapping heat within the Earth&apos;s atmosphere. This heat-trapping mechanism is a fundamental component of the Earth&apos;s climate system, as it helps regulate and maintain the planet&apos;s surface temperature at levels suitable for life.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-12"
      >
        <Image
          src="/images/climate/Earth's_greenhouse_effect_(US_EPA,_2012).png"
          alt="Greenhouse gases and Earth's atmosphere diagram"
          width={800}
          height={500}
          className="w-full h-auto rounded-2xl shadow-md"
        />
      </motion.div>

      {/* Section 2: The Greenhouse Effect */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-2xl sm:text-3xl font-black text-slate-800 mb-4"
      >
        The Greenhouse Effect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-slate-600 leading-relaxed mb-8 text-base sm:text-lg"
      >
        The greenhouse effect is a natural physical process in which certain gases in the Earth&apos;s atmosphere absorb outgoing infrared radiation from the Earth&apos;s surface and re-radiate it back, preventing excessive heat loss into space. This process maintains the Earth&apos;s energy balance and keeps the global temperature within a habitable range.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mb-12"
      >
        <Image
          src="/images/climate/Figure-1-Schematics-of-the-Greenhouse-Gas-Effect.jpg"
          alt="Schematic diagram of the greenhouse effect"
          width={800}
          height={500}
          className="w-full h-auto rounded-2xl shadow-md"
        />
      </motion.div>

      {/* Section 3: Reinforced Greenhouse Effect */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-2xl sm:text-3xl font-black text-slate-800 mb-4"
      >
        Reinforced Greenhouse Effect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-slate-600 leading-relaxed mb-4 text-base sm:text-lg"
      >
        The greenhouse effect becomes a problem when it is intensified by human activities.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="text-slate-600 leading-relaxed mb-12 text-base sm:text-lg"
      >
        In its natural state, the greenhouse effect maintains a stable climate. However, human activities have increased greenhouse gas concentrations, strengthening this effect and leading to global warming.
      </motion.p>

      {/* Section 4: Interactive Climate Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="w-full max-w-xl mx-auto mb-16"
      >
        <h3 className="text-lg font-bold text-slate-700 mb-2 text-center">
          Interactive Climate Slider
        </h3>
        <p className="text-sm text-slate-500 text-center mb-4 font-medium">
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

      {/* Section 5: YouTube Video */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-slate-600 leading-relaxed mb-6 text-base sm:text-lg">
          The following video provides a simple visual explanation of how the greenhouse effect works and how it contributes to climate change.
        </p>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/SN5-DnOHQmE"
            title="Greenhouse Effect Explanation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-2xl shadow-md"
          />
        </div>
      </motion.div>
    </main>
  );
}
