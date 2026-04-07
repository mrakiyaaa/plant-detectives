"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Section2Science() {
  return (
    <section
      id="section-1"
      className="relative min-h-screen flex flex-col items-center px-4 sm:px-8 pt-8 pb-20"
      style={{
        backgroundImage: "url('/images/Climate change_ a divided world.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="relative z-10 w-full flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-white mb-18 mt-12"
      >
        <span className="block">Climate Change</span>
        <span className="block mt-5">The Science Behind a Warming Planet</span>
      </motion.h2>

      {/* What is Climate Change content block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-4xl mb-12 flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl"
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
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            What is Climate Change?
          </h3>
          <p className="text-white/80 leading-relaxed mb-4">
            Climate change refers to long-term alterations in the Earth&apos;s climate system, including variations in temperature, precipitation patterns, wind systems, and overall weather conditions across regions and over extended periods of time.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            In recent decades, the rate of these changes has significantly accelerated, primarily due to human activities that increase the concentration of greenhouse gases in the atmosphere, disrupting the natural energy balance of the planet.
          </p>
          <p className="text-white/80 leading-relaxed mb-6">
            To understand this, let&apos;s explore what greenhouse gases are and their effects.
          </p>
          <Link
            href="/climate/greenhouse-gases"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-full transition-colors duration-200 shadow-md"
          >
            Explore Greenhouse Gases
            <span>&rarr;</span>
          </Link>
        </div>
      </motion.div>

      </div>
    </section>
  );
}
