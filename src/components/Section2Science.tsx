"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Greenhouse Gases",
    description:
      "Discover what greenhouse gases are, how they trap heat in the atmosphere, and interact with a live climate slider.",
    href: "/science/greenhouse-gases",
    bg: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    titleColor: "text-sky-700",
    linkColor: "text-sky-600",
  },
  {
    title: "Human Activities",
    description:
      "Explore how transportation, agriculture, deforestation, and industrial processes drive climate change.",
    href: "/science/human-activities",
    bg: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    titleColor: "text-orange-700",
    linkColor: "text-orange-600",
  },
  {
    title: "Natural Factors",
    description:
      "Learn how volcanic eruptions and solar radiation contribute to natural climate variability.",
    href: "/science/natural-factors",
    bg: "from-green-50 to-emerald-50",
    border: "border-green-200",
    titleColor: "text-green-700",
    linkColor: "text-green-600",
  },
];

export default function Section2Science() {
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
        Climate change means long-term shifts in temperatures and weather patterns,
        mainly driven by burning fossil fuels that trap heat in our atmosphere.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {cards.map((card, i) => (
          <motion.div
            key={card.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
          >
            <Link
              href={card.href}
              className={`flex flex-col h-full bg-gradient-to-br ${card.bg} border ${card.border} rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group`}
            >
              <h3 className={`text-lg font-bold mb-2 ${card.titleColor}`}>
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                {card.description}
              </p>
              <span className={`text-sm font-semibold ${card.linkColor} group-hover:underline`}>
                Explore &rarr;
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
