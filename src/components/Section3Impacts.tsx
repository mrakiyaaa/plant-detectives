"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWater, FaFire, FaSun } from "react-icons/fa";
import { GiTornado } from "react-icons/gi";
import type { IconType } from "react-icons";

const impacts: {
  Icon: IconType;
  iconColor: string;
  title: string;
  color: string;
  bgLight: string;
  borderColor: string;
  description: string;
}[] = [
  {
    Icon: FaWater,
    iconColor: "#3b82f6",
    title: "Rising Sea Levels",
    color: "from-blue-400 to-cyan-400",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    description:
      "As global temperatures rise, glaciers and ice sheets melt, adding water to our oceans. Water also expands when it warms. Sea levels have risen about 20 cm since 1900, threatening coastal cities and small island nations where millions of people live.",
  },
  {
    Icon: FaFire,
    iconColor: "#f97316",
    title: "Extreme Heat",
    color: "from-orange-400 to-red-400",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-200",
    description:
      "Heatwaves are becoming more frequent and intense. Extreme heat can cause droughts, damage crops, and make it dangerous for people to work or play outside. In some regions, temperatures now regularly exceed levels the human body can safely handle.",
  },
  {
    Icon: GiTornado,
    iconColor: "#a855f7",
    title: "Severe Storms",
    color: "from-purple-400 to-indigo-400",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-200",
    description:
      "Warmer oceans provide more energy for storms, making hurricanes, cyclones, and typhoons stronger. Warmer air holds more moisture, leading to heavier rainfall and flooding. These extreme weather events destroy homes and displace communities.",
  },
  {
    Icon: FaSun,
    iconColor: "#f59e0b",
    title: "Droughts & Wildfires",
    color: "from-amber-400 to-orange-500",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
    description:
      "Higher temperatures dry out soil and vegetation, creating perfect conditions for wildfires. Droughts reduce water supplies for drinking and farming. Many regions face longer dry seasons, threatening food security for billions of people.",
  },
];

export default function Section3Impacts() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="section-2"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 bg-gradient-to-b from-rose-50/50 via-white to-orange-50/30"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-slate-800 mb-4"
      >
        What Are the Effects?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base sm:text-lg text-slate-500 text-center max-w-xl mb-12"
      >
        Climate change is already affecting every corner of our planet. Here are
        four major impacts scientists are tracking.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl w-full">
        {impacts.map((impact, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <motion.button
              onClick={() => setExpanded(expanded === i ? null : i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left rounded-2xl p-5 sm:p-6 border-2 transition-all cursor-pointer ${
                impact.bgLight
              } ${impact.borderColor} ${
                expanded === i ? "shadow-xl" : "shadow-md hover:shadow-lg"
              }`}
              aria-expanded={expanded === i}
              aria-label={impact.title}
            >
              <div className="flex items-center gap-3 mb-1">
                <motion.div
                  animate={expanded === i ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <impact.Icon size={28} color={impact.iconColor} />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                  {impact.title}
                </h3>
              </div>

              <AnimatePresence>
                {expanded === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-slate-600 leading-relaxed mt-3 overflow-hidden"
                  >
                    {impact.description}
                  </motion.p>
                )}
              </AnimatePresence>

              <p className="text-xs text-slate-400 mt-2">
                {expanded === i ? "Click to collapse" : "Click to learn more"}
              </p>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
