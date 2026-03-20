"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cityIcons = [
  {
    emoji: "\u{1F697}",
    label: "Transportation",
    info: "Cars, trucks, and planes burn fossil fuels like petrol and diesel. This releases carbon dioxide (CO\u2082) into the atmosphere, trapping heat and warming our planet. Transportation accounts for about 16% of global greenhouse gas emissions.",
    x: "10%",
    y: "70%",
  },
  {
    emoji: "\u{1F3ED}",
    label: "Factories",
    info: "Factories and power plants burn coal, oil, and natural gas to generate energy. This process releases huge amounts of CO\u2082 and other greenhouse gases. Industry is responsible for around 21% of global emissions.",
    x: "35%",
    y: "55%",
  },
  {
    emoji: "\u{1F333}",
    label: "Forests",
    info: "Trees absorb CO\u2082 and produce oxygen. When forests are cut down (deforestation), that stored carbon is released back into the atmosphere, and there are fewer trees to absorb future emissions. Deforestation causes about 10% of global emissions.",
    x: "65%",
    y: "65%",
  },
  {
    emoji: "\u{1F33E}",
    label: "Agriculture",
    info: "Farming produces methane (from livestock) and nitrous oxide (from fertilisers) \u2014 both are powerful greenhouse gases. Agriculture accounts for about 10% of direct emissions, and more when you include land clearing.",
    x: "88%",
    y: "72%",
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
      {/* Sky */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{ backgroundColor: `rgb(${skyR}, ${skyG}, ${skyB})` }}
      />

      {/* Sun */}
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

      {/* Ground */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 transition-colors duration-500"
        style={{
          backgroundColor: `rgb(${120 + warmth * 80}, ${160 - warmth * 60}, ${80 - warmth * 40})`,
        }}
      />

      {/* Ice cap */}
      <motion.div
        className="absolute bottom-16 left-1/2 bg-white/80 rounded-t-full"
        animate={{ width: iceWidth, height: iceWidth * 0.4 }}
        style={{ translateX: "-50%" }}
        transition={{ duration: 0.5 }}
      />

      {/* Heat waves when value is high */}
      {value > 40 && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute bottom-20"
              style={{ left: `${20 + i * 25}%` }}
              animate={{ y: [-5, -15, -5], opacity: [0.3, 0.6, 0.3] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: i * 0.4,
              }}
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

      {/* Temperature display */}
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

export default function Section2Science() {
  const [sliderValue, setSliderValue] = useState(15);
  const [activeIcon, setActiveIcon] = useState<number | null>(null);

  return (
    <section
      id="section-1"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 bg-gradient-to-b from-sky-50 via-amber-50/30 to-sky-50"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-slate-800 mb-4"
      >
        What Is Climate Change &amp; What Causes It?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-base sm:text-lg text-slate-500 text-center max-w-2xl mb-12"
      >
        Climate change means long-term shifts in temperatures and weather
        patterns. Since the 1800s, burning fossil fuels like coal, oil, and gas
        has been the main driver — releasing greenhouse gases that trap heat in
        our atmosphere like a blanket.
      </motion.p>

      {/* Greenhouse Gas Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-xl mb-6"
      >
        <h3 className="text-lg font-bold text-slate-700 mb-2 text-center">
          Greenhouse Gas Slider
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

      {/* City Scene */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full max-w-xl mt-12"
      >
        <h3 className="text-lg font-bold text-slate-700 mb-2 text-center">
          What Produces Greenhouse Gases?
        </h3>
        <p className="text-sm text-slate-400 text-center mb-4">
          Click each icon to learn more
        </p>

        <div className="relative w-full h-48 sm:h-56 bg-gradient-to-b from-sky-200 to-green-200 rounded-3xl overflow-hidden shadow-inner">
          {/* Simple city skyline */}
          <svg
            viewBox="0 0 400 100"
            className="absolute bottom-0 left-0 right-0 w-full"
            preserveAspectRatio="none"
          >
            <rect x="30" y="30" width="30" height="70" rx="2" fill="#94a3b8" />
            <rect x="70" y="50" width="25" height="50" rx="2" fill="#cbd5e1" />
            <rect x="120" y="20" width="35" height="80" rx="2" fill="#94a3b8" />
            <rect x="165" y="40" width="28" height="60" rx="2" fill="#b0bec5" />
            <rect x="210" y="55" width="20" height="45" rx="2" fill="#cbd5e1" />
            <rect x="250" y="35" width="32" height="65" rx="2" fill="#94a3b8" />
            <rect x="300" y="45" width="25" height="55" rx="2" fill="#b0bec5" />
            <rect x="340" y="60" width="30" height="40" rx="2" fill="#cbd5e1" />
            <rect x="0" y="90" width="400" height="10" fill="#86efac" />
          </svg>

          {/* Interactive icons */}
          {cityIcons.map((icon, i) => (
            <motion.button
              key={i}
              className="absolute text-2xl sm:text-3xl cursor-pointer z-10"
              style={{ left: icon.x, top: icon.y }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: i * 0.5,
              }}
              onClick={() =>
                setActiveIcon(activeIcon === i ? null : i)
              }
              aria-label={`Learn about ${icon.label}`}
            >
              <span className="drop-shadow-lg">{icon.emoji}</span>
            </motion.button>
          ))}
        </div>

        {/* Info popover */}
        <AnimatePresence mode="wait">
          {activeIcon !== null && (
            <motion.div
              key={activeIcon}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 bg-white rounded-2xl p-5 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">
                  {cityIcons[activeIcon].emoji}
                </span>
                <h4 className="font-bold text-slate-800">
                  {cityIcons[activeIcon].label}
                </h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {cityIcons[activeIcon].info}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
