"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Greenhouse Gases",
    description:
      "Discover what greenhouse gases are, how they trap heat in the atmosphere, and interact with a live climate slider.",
    href: "/climate/greenhouse-gases",
    bg: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    titleColor: "text-sky-700",
    linkColor: "text-sky-600",
  },
  {
    title: "Human Activities",
    description:
      "Explore how transportation, agriculture, deforestation, and industrial processes drive climate change.",
    href: "/climate/human-activities",
    bg: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    titleColor: "text-orange-700",
    linkColor: "text-orange-600",
  },
];

export default function Section2Science() {
  return (
    <section
      id="section-1"
      className="min-h-screen flex flex-col items-center px-4 sm:px-8 pt-8 pb-20 bg-gradient-to-b from-sky-50 via-amber-50/30 to-sky-50"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-slate-800 mb-4"
      >
        Climate Change: The Science Behind a Warming Planet
      </motion.h2>

      {/* What is Climate Change content block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-4xl mb-12 flex flex-col md:flex-row items-center gap-8"
      >
        {/* Character image - left column */}
        <motion.div
          className="flex-shrink-0"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Image
            src="/images/climate/character-climate.png"
            alt="Climate detective character"
            width={200}
            height={200}
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Text content - right column */}
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
            What is Climate Change?
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Climate change refers to long-term alterations in the Earth&apos;s climate system, including variations in temperature, precipitation patterns, wind systems, and overall weather conditions across regions and over extended periods of time.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            In recent decades, the rate of these changes has significantly accelerated, primarily due to human activities that increase the concentration of greenhouse gases in the atmosphere, disrupting the natural energy balance of the planet.
          </p>
          <Link
            href="/climate/greenhouse-gases"
            className="inline-flex items-center text-sky-600 font-semibold hover:underline group"
          >
            To understand this, let&apos;s explore what greenhouse gases are and their effects.
            <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
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
