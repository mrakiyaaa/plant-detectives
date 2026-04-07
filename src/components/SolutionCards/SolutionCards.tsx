"use client";

import { motion } from "framer-motion";
import FlipCard from "./FlipCard";
import { solutionCards } from "./types";

export default function SolutionCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full place-items-center"
    >
      {solutionCards.map((card, index) => (
        <div
          key={card.id}
          className={`w-full max-w-sm ${
            // Center the 7th card when it's alone in the last row
            index === 6 ? 'sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:col-start-2' : ''
          }`}
        >
          <FlipCard card={card} index={index} />
        </div>
      ))}
    </motion.div>
  );
}