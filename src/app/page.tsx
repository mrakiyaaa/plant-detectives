"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Home() {
  const router = useRouter();

  return (
    <main
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/home-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* Badge */}
        <motion.span
          variants={fadeUp}
          className="inline-block mb-6 px-5 py-2 rounded-full text-sm font-medium text-white bg-white/15 border border-white/25 backdrop-blur-sm"
        >
          🌍 An Interactive Climate Journey
        </motion.span>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-tight"
          style={{ textShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
        >
          Planet Detectives
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          className="mt-4 text-2xl sm:text-3xl text-white/90 font-light"
        >
          <span className="relative">
            Solve the Climate Mystery
            <motion.span
              className="absolute left-0 -bottom-1 h-0.5 bg-green-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            />
          </span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="mt-5 text-sm sm:text-base text-white/70 tracking-[0.3em] uppercase font-medium"
        >
          Explore &middot; Learn &middot; Act
        </motion.p>

        {/* CTA button */}
        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.06, backgroundColor: "#16a34a" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push("/mystery")}
          className="mt-10 px-10 py-4 rounded-full bg-green-500 text-white text-lg font-bold shadow-lg shadow-green-500/30 cursor-pointer transition-colors animate-pulse-subtle"
        >
          Get Started &rarr;
        </motion.button>
      </motion.div>
    </main>
  );
}
