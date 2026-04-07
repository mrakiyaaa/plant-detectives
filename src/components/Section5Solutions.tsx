"use client";

import { motion } from "framer-motion";
import { SolutionCards } from "./SolutionCards";

export default function Section5Solutions() {

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

      <SolutionCards />
    </section>
  );
}
