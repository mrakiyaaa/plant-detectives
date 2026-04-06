"use client";

import { motion } from "framer-motion";

export default function ImpactsHeader() {
  return (
    <div className="text-center mb-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-4"
      >
        Impacts of Climate Change Around the Globe
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto"
      >
        Climate change not only affects nature but also the health and well-being of people around the world.
      </motion.p>
    </div>
  );
}
