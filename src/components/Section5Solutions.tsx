"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SolutionCards } from "./SolutionCards";

export default function Section5Solutions() {

  return (
    <section
      id="section-4"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20"
      style={{
        backgroundImage: "url('/images/Solutions.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="relative z-10 w-full flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-white mb-4"
      >
        What Can We Do?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base sm:text-lg text-white/80 text-center max-w-xl mb-12"
      >
        The good news? We already have the solutions. Click each card to learn
        how we can fight climate change.
      </motion.p>

      <SolutionCards />

      {/* Next Step CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 max-w-2xl mx-auto text-center bg-white/10 border border-white/20 rounded-3xl p-10 shadow-md backdrop-blur-sm"
      >
        <p className="text-white text-lg sm:text-xl leading-relaxed mb-6">
          You&apos;ve learned the solutions — now test your knowledge and measure your impact.
        </p>
        <Link
          href="/climate-action-hub"
          className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-colors duration-200 shadow-md text-sm sm:text-base"
        >
          Go to Climate Action Hub
          <span>&rarr;</span>
        </Link>
      </motion.div>
      </div>
    </section>
  );
}
