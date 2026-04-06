"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const environmentImpacts = [
  {
    icon: "🧊",
    title: "Melting Ice and Glaciers",
    description:
      "Polar ice and glaciers shrink, causing sea levels to rise and habitats for animals like polar bears to disappear.",
  },
  {
    icon: "🌪️",
    title: "Extreme Weather",
    description:
      "More frequent storms, floods, droughts, and heatwaves damage ecosystems, forests, and farmland.",
  },
  {
    icon: "🦋",
    title: "Loss of Biodiversity",
    description:
      "Many plants and animals struggle to survive in changing climates, leading to extinction or migration.",
  },
  {
    icon: "🌊",
    title: "Ocean Changes",
    description:
      "Warmer oceans and acidification harm coral reefs, fish, and marine ecosystems.",
  },
  {
    icon: "🔥",
    title: "Forest Fires",
    description:
      "Hot, dry conditions increase wildfires, destroying forests and releasing more carbon dioxide.",
  },
];

const healthImpacts = [
  {
    icon: "🌡️",
    title: "Heat-Related Illnesses",
    description:
      "More frequent heatwaves can cause dehydration, heat stroke, and death.",
  },
  {
    icon: "🦟",
    title: "Vector-Borne Diseases",
    description:
      "Warmer temperatures help mosquitoes and other insects spread diseases like malaria and dengue.",
  },
  {
    icon: "🌾",
    title: "Food and Water Shortages",
    description:
      "Droughts and floods reduce crop yields and clean water availability, affecting nutrition.",
  },
  {
    icon: "💨",
    title: "Air Pollution",
    description:
      "Higher temperatures increase ground-level ozone and air pollution, causing respiratory problems.",
  },
  {
    icon: "🏚️",
    title: "Displacement and Stress",
    description:
      "Floods, storms, and rising seas force people to move, causing mental stress and health risks.",
  },
];

type TabType = "environment" | "health";

export default function TabbedImpactExplorer() {
  const [activeTab, setActiveTab] = useState<TabType>("environment");
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const currentImpacts = activeTab === "environment" ? environmentImpacts : healthImpacts;

  const tabColors = {
    environment: {
      bg: "bg-emerald-500",
      hover: "hover:bg-emerald-600",
      light: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-700",
      iconBg: "bg-emerald-100",
    },
    health: {
      bg: "bg-rose-500",
      hover: "hover:bg-rose-600",
      light: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-700",
      iconBg: "bg-rose-100",
    },
  };

  const colors = tabColors[activeTab];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="w-full max-w-4xl mx-auto mb-16"
    >
      {/* Decorative header with arrows */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="text-emerald-400">
            <path d="M58 12H8M8 12L18 4M8 12L18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm font-semibold text-emerald-600">Environment</span>
        </div>
        
        <div className="bg-slate-800 text-white px-4 py-2 rounded-full font-bold text-sm">
          Impacts
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-rose-600">Health</span>
          <svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="text-rose-400">
            <path d="M2 12H52M52 12L42 4M52 12L42 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Tab buttons */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => {
            setActiveTab("environment");
            setSelectedCard(null);
          }}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all cursor-pointer ${
            activeTab === "environment"
              ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          🌿 Environment
        </button>
        <button
          onClick={() => {
            setActiveTab("health");
            setSelectedCard(null);
          }}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all cursor-pointer ${
            activeTab === "health"
              ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          ❤️ Health
        </button>
      </div>

      {/* Impact cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === "environment" ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: activeTab === "environment" ? 20 : -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {currentImpacts.map((impact, i) => (
            <motion.button
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              onClick={() => setSelectedCard(selectedCard === i ? null : i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all cursor-pointer min-w-[120px] ${
                selectedCard === i
                  ? `${colors.light} ${colors.border} shadow-lg`
                  : "bg-white border-slate-100 shadow-md hover:shadow-lg hover:border-slate-200"
              }`}
            >
              <motion.div
                animate={selectedCard === i ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-2 ${
                  selectedCard === i ? colors.iconBg : "bg-slate-50"
                }`}
              >
                {impact.icon}
              </motion.div>
              <span className={`text-sm font-semibold text-center leading-tight ${
                selectedCard === i ? colors.text : "text-slate-700"
              }`}>
                {impact.title}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Description panel */}
      <AnimatePresence>
        {selectedCard !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`mt-6 p-6 rounded-2xl ${colors.light} ${colors.border} border-2`}>
              <div className="flex items-start gap-4">
                <span className="text-4xl">{currentImpacts[selectedCard].icon}</span>
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${colors.text}`}>
                    {currentImpacts[selectedCard].title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {currentImpacts[selectedCard].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
