"use client";

import { motion } from "framer-motion";
import HubCard from "@/components/HubCard";

const hubCards = [
  {
    href: "/quiz",
    heading: "Climate Quiz Game",
    description:
      "3 Levels of fun! Test your knowledge on climate basics, greenhouse gases, and scientific reasoning. Try to beat all 3 levels!",
    borderColor: "border-green-300",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
  },
  {
    href: "/carbon-calculator",
    heading: "Carbon Calculator",
    description:
      "Find out your personal impact on the planet based on your daily travel, food, and energy habits in this step-by-step tool.",
    borderColor: "border-blue-300",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
  },
];

export default function ClimateActionHubPage() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20"
      style={{
        backgroundImage: "url('/images/Planet detective tools and checklist.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />
      <div className="relative z-10 w-full flex flex-col items-center">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl font-black text-center text-white mb-4"
      >
        Climate Action{" "}
        <span className="text-green-600">Hub</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base sm:text-lg text-white/80 text-center max-w-xl mb-14"
      >
        Choose your interactive learning experience:
      </motion.p>

      {/* Hub grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl">
        {hubCards.map((card, index) => (
          <HubCard key={card.href} {...card} index={index} />
        ))}
      </div>
      </div>
    </main>
  );
}
