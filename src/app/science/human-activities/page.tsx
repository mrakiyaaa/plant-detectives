"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaCar, FaSeedling, FaTree, FaIndustry } from "react-icons/fa";

const cityIcons = [
  {
    label: "Transportation",
    info: "Cars, trucks, and planes burn fossil fuels like petrol and diesel. This releases carbon dioxide (CO\u2082) into the atmosphere, trapping heat and warming our planet. Transportation accounts for about 16% of global greenhouse gas emissions.",
    x: "10%",
    y: "62%",
    Icon: FaCar,
    color: "#3b82f6",
  },
  {
    label: "Agriculture",
    info: "Farming produces methane (from livestock) and nitrous oxide (from fertilisers) — both are powerful greenhouse gases. Agriculture accounts for about 10% of direct emissions, and more when you include land clearing.",
    x: "34%",
    y: "58%",
    Icon: FaSeedling,
    color: "#22c55e",
  },
  {
    label: "Deforestation",
    info: "Trees absorb CO\u2082 and produce oxygen. When forests are cut down, that stored carbon is released back into the atmosphere, and there are fewer trees to absorb future emissions. Deforestation causes about 10% of global emissions.",
    x: "62%",
    y: "60%",
    Icon: FaTree,
    color: "#16a34a",
  },
  {
    label: "Industrial Processes",
    info: "Factories and power plants burn coal, oil, and natural gas to generate energy. This process releases huge amounts of CO\u2082 and other greenhouse gases. Industry is responsible for around 21% of global emissions.",
    x: "86%",
    y: "54%",
    Icon: FaIndustry,
    color: "#64748b",
  },
];

export default function HumanActivitiesPage() {
  const [activeIcon, setActiveIcon] = useState<number | null>(null);
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
        Human Activities
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-slate-600 leading-relaxed mb-10 text-base sm:text-lg"
      >
        Since the Industrial Revolution, human activities have significantly
        altered the composition of Earth&apos;s atmosphere. Four key areas drive
        the majority of greenhouse gas emissions worldwide. Click each icon
        below to learn more.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full mb-6"
      >
        <p className="text-sm text-slate-400 text-center mb-4">
          Click each icon to learn more
        </p>

        <div className="relative w-full h-56 sm:h-64 bg-gradient-to-b from-sky-200 to-green-200 rounded-3xl overflow-hidden shadow-inner">
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

          {cityIcons.map((icon, i) => (
            <motion.button
              key={i}
              className="absolute cursor-pointer z-10"
              style={{ left: icon.x, top: icon.y, transform: "translate(-50%, -50%)" }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
              onClick={() => setActiveIcon(activeIcon === i ? null : i)}
              aria-label={`Learn about ${icon.label}`}
            >
              <div
                className={`p-2 rounded-xl shadow-md transition-colors ${
                  activeIcon === i ? "bg-white ring-2 ring-sky-400" : "bg-white/80 hover:bg-white"
                }`}
              >
                <icon.Icon size={32} color={icon.color} />
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeIcon !== null && (
            <motion.div
              key={activeIcon}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 bg-white rounded-2xl p-5 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-slate-50 rounded-xl">
                  {(() => {
                    const IconComp = cityIcons[activeIcon].Icon;
                    return <IconComp size={28} color={cityIcons[activeIcon].color} />;
                  })()}
                </div>
                <h4 className="font-bold text-slate-800 text-lg">
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
    </main>
  );
}
