"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Rocket } from "lucide-react";

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

const panelContent = {
  vision: {
    title: "Our Vision",
    body: "Our vision is to build a future where the Earth stays clean, green, safe, and full of life for children, animals, and plants. We want young minds to grow up loving nature, understanding the changes happening around them, and believing that even small hands can help protect the planet.",
  },
  mission: {
    title: "Our Mission",
    body: "Our mission is to educate and empower the next generation through interactive experiences that make climate science fun, accessible, and actionable. We turn complex environmental topics into engaging stories that inspire kids to become everyday climate heroes.",
  },
};

export default function Home() {
  const router = useRouter();
  const [activePanel, setActivePanel] = useState<
    "vision" | "mission" | null
  >(null);

  return (
    <main
      className="relative h-screen w-full flex items-center justify-center overflow-hidden -mt-14"
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
        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="mb-6 text-sm sm:text-base md:text-lg text-white/70 tracking-[0.3em] uppercase font-medium"
        >
          Explore &middot; Learn &middot; Act
        </motion.p>

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

      {/* Floating Vision & Mission icon buttons with side cards */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
        {(
          [
            { type: "vision" as const, Icon: Target, delay: 1.2 },
            { type: "mission" as const, Icon: Rocket, delay: 1.35 },
          ]
        ).map(({ type, Icon, delay }) => {
          const isOpen = activePanel === type;
          return (
            <motion.div
              key={type}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay, duration: 0.5, ease: "easeOut" as const }}
              className="relative"
              style={{ width: 48, height: 48 }}
            >
              {/* Expanding card — absolutely positioned to the left of the icon */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`${type}-card`}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.25, ease: "easeOut" as const }}
                    className="absolute top-1/2 -translate-y-1/2 rounded-2xl bg-white border border-gray-200 p-5"
                    style={{
                      right: 60,
                      width: 260,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} color="#22c55e" />
                      <span className="text-sm font-bold" style={{ color: "#1f2937" }}>
                        {panelContent[type].title}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                      {panelContent[type].body}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Circular icon trigger */}
              <motion.button
                onClick={() => setActivePanel(isOpen ? null : type)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center rounded-full cursor-pointer transition-colors"
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: isOpen ? "#22c55e" : "#ffffff",
                  border: "2px solid #22c55e",
                }}
              >
                <Icon size={22} color={isOpen ? "#ffffff" : "#22c55e"} />
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
