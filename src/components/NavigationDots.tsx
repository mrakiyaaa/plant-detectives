"use client";

import { motion } from "framer-motion";

const sectionLabels = [
  "The Mystery",
  "The Science",
  "The Impacts",
  "World Map",
  "Solutions",
  "Quiz",
  "Carbon Footprint",
  "Your Pledge",
];

export default function NavigationDots({
  activeSection,
}: {
  activeSection: number;
}) {
  const scrollTo = (index: number) => {
    const el = document.getElementById(`section-${index}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 hidden md:flex"
      aria-label="Section navigation"
    >
      {sectionLabels.map((label, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          className="group relative flex items-center justify-end cursor-pointer"
          aria-label={`Go to ${label}`}
        >
          <span className="absolute right-8 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {label}
          </span>
          <motion.div
            className="rounded-full transition-colors"
            style={{
              width: activeSection === i ? 14 : 10,
              height: activeSection === i ? 14 : 10,
              backgroundColor:
                activeSection === i ? "#22c55e" : "#cbd5e1",
            }}
            animate={{
              scale: activeSection === i ? 1.2 : 1,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </button>
      ))}
    </nav>
  );
}
