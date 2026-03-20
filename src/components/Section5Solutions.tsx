"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  {
    icon: "☀️",
    title: "Renewable Energy",
    color: "bg-yellow-50 border-yellow-200",
    description:
      "Solar panels, wind turbines, and hydropower generate electricity without burning fossil fuels. Switching to renewables can cut energy-related CO₂ emissions by up to 90%. Many countries now get over 50% of their electricity from renewables, and the cost of solar energy has dropped by 90% in the last decade.",
  },
  {
    icon: "🚌",
    title: "Electric Transport",
    color: "bg-blue-50 border-blue-200",
    description:
      "Electric vehicles (EVs), buses, and trains produce zero direct emissions. Combined with renewable energy, electric transport can eliminate the 16% of global emissions that come from transportation. Walking and cycling are even better — they produce no emissions at all!",
  },
  {
    icon: "🌳",
    title: "Reforestation",
    color: "bg-green-50 border-green-200",
    description:
      "Planting trees is one of the most effective ways to remove CO₂ from the atmosphere. A single tree can absorb about 22 kg of CO₂ per year. Restoring forests also protects biodiversity, prevents soil erosion, and supports local communities. We need to plant billions of trees while also protecting existing forests.",
  },
  {
    icon: "🌾",
    title: "Sustainable Farming",
    color: "bg-lime-50 border-lime-200",
    description:
      "Sustainable farming practices like crop rotation, reducing food waste, and using less fertiliser can significantly cut agricultural emissions. Eating more plant-based foods also helps — producing beef creates 60x more emissions than growing peas for the same amount of protein.",
  },
  {
    icon: "♻️",
    title: "Reduce Waste",
    color: "bg-teal-50 border-teal-200",
    description:
      "When waste decomposes in landfills, it produces methane — a greenhouse gas 80x more potent than CO₂ over 20 years. Reducing, reusing, and recycling cuts emissions from waste. Composting food scraps, avoiding single-use plastics, and buying less stuff all make a real difference.",
  },
  {
    icon: "📚",
    title: "Policy & Education",
    color: "bg-purple-50 border-purple-200",
    description:
      "Government policies like carbon pricing, emission limits, and green energy incentives drive large-scale change. Education empowers people to make informed choices and demand action. Young climate activists around the world are proving that knowledge and advocacy can shift the conversation.",
  },
];

export default function Section5Solutions() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="section-4"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 bg-gradient-to-b from-green-50/50 via-white to-emerald-50/30"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-slate-800 mb-4"
      >
        What Can We Do?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base sm:text-lg text-slate-500 text-center max-w-xl mb-12"
      >
        The good news? We already have the solutions. Click each card to learn
        how we can fight climate change.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl w-full">
        {solutions.map((sol, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <motion.button
              onClick={() => setExpanded(expanded === i ? null : i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left rounded-2xl p-5 border-2 transition-all cursor-pointer ${sol.color} ${
                expanded === i ? "shadow-xl" : "shadow-md hover:shadow-lg"
              }`}
              aria-expanded={expanded === i}
              aria-label={sol.title}
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl">{sol.icon}</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-800">
                  {sol.title}
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
                    {sol.description}
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
