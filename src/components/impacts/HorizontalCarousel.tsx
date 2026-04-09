"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImpactCard as ImpactCardType } from "@/constants/impactsData";
import ImpactCard from "./ImpactCard";

interface HorizontalCarouselProps {
  title: string;
  subtitle: string;
  cards: ImpactCardType[];
  colorScheme: "environment" | "health";
}

const CARDS_PER_SLIDE = 3;

export default function HorizontalCarousel({
  title,
  subtitle,
  cards,
  colorScheme,
}: HorizontalCarouselProps) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(cards.length / CARDS_PER_SLIDE);
  const visibleCards = cards.slice(
    page * CARDS_PER_SLIDE,
    page * CARDS_PER_SLIDE + CARDS_PER_SLIDE
  );

  const goNext = () => {
    if (page < totalPages - 1) {
      setDirection(1);
      setPage((p) => p + 1);
    }
  };

  const goPrev = () => {
    if (page > 0) {
      setDirection(-1);
      setPage((p) => p - 1);
    }
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
          {title}
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">{subtitle}</p>
      </motion.div>

      {/* Carousel */}
      <div className="flex items-center gap-4">
        {/* Left Arrow */}
        <motion.button
          onClick={goPrev}
          disabled={page === 0}
          className={`shrink-0 p-3 rounded-full shadow-lg transition-all ${
            page === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-slate-700 hover:bg-slate-50 hover:shadow-xl"
          }`}
          whileHover={page !== 0 ? { scale: 1.1 } : {}}
          whileTap={page !== 0 ? { scale: 0.95 } : {}}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>

        {/* Cards */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex gap-3 pb-4 justify-center"
            >
              {visibleCards.map((card, index) => (
                <ImpactCard
                  key={card.id}
                  impact={card}
                  colorScheme={colorScheme}
                  index={index}
                  totalCards={visibleCards.length}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <motion.button
          onClick={goNext}
          disabled={page >= totalPages - 1}
          className={`shrink-0 p-3 rounded-full shadow-lg transition-all ${
            page >= totalPages - 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-slate-700 hover:bg-slate-50 hover:shadow-xl"
          }`}
          whileHover={page < totalPages - 1 ? { scale: 1.1 } : {}}
          whileTap={page < totalPages - 1 ? { scale: 0.95 } : {}}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === page ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
