"use client";

import { motion } from "framer-motion";
import HubCard from "@/components/HubCard";

const hubCards = [
  {
    href: "/quiz",
    emoji: "🧠",
    heading: "Climate Quiz Game",
    description:
      "3 Levels of fun! Test your knowledge on climate basics, greenhouse gases, and scientific reasoning. Try to beat all 3 levels!",
    accentFrom: "from-emerald-100",
    accentTo: "to-green-200",
    borderColor: "border-green-300",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
  },
  {
    href: "/carbon-calculator",
    emoji: "🌍",
    heading: "Carbon Calculator",
    description:
      "Find out your personal impact on the planet based on your daily travel, food, and energy habits in this step-by-step tool.",
    accentFrom: "from-blue-100",
    accentTo: "to-sky-200",
    borderColor: "border-blue-300",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
  },
];

export default function ClimateActionHubPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 bg-gradient-to-b from-green-50/50 via-white to-emerald-50/30">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl font-black text-center text-slate-800 mb-4"
      >
        Climate Action{" "}
        <span className="text-green-600">Hub</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base sm:text-lg text-slate-500 text-center max-w-xl mb-14"
      >
        Choose your interactive learning experience:
      </motion.p>

      {/* Hub grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl">
        {hubCards.map((card, index) => (
          <HubCard key={card.href} {...card} index={index} />
        ))}
      </div>
    </main>
  );
}
