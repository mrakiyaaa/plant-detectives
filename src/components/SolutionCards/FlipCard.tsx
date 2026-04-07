"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SolutionCard } from "./types";
import { FaSun, FaBus, FaTree, FaUtensils, FaPlug, FaRecycle, FaBullhorn } from "react-icons/fa";

const iconMap = {
  1: FaSun,
  2: FaBus,
  3: FaTree,
  4: FaUtensils,
  5: FaPlug,
  6: FaRecycle,
  7: FaBullhorn,
};

const cardAccents: Record<number, { border: string; badge: string; back: string; btn: string }> = {
  1: { border: "border-yellow-300", badge: "bg-yellow-100 text-yellow-700", back: "from-yellow-50 to-amber-100", btn: "bg-yellow-500 hover:bg-yellow-600" },
  2: { border: "border-blue-300",   badge: "bg-blue-100 text-blue-700",     back: "from-blue-50 to-sky-100",    btn: "bg-blue-500 hover:bg-blue-600"   },
  3: { border: "border-green-300",  badge: "bg-green-100 text-green-700",   back: "from-green-50 to-emerald-100", btn: "bg-green-600 hover:bg-green-700" },
  4: { border: "border-orange-300", badge: "bg-orange-100 text-orange-700", back: "from-orange-50 to-amber-100", btn: "bg-orange-500 hover:bg-orange-600"},
  5: { border: "border-purple-300", badge: "bg-purple-100 text-purple-700", back: "from-purple-50 to-violet-100",btn: "bg-purple-600 hover:bg-purple-700"},
  6: { border: "border-teal-300",   badge: "bg-teal-100 text-teal-700",     back: "from-teal-50 to-cyan-100",   btn: "bg-teal-600 hover:bg-teal-700"   },
  7: { border: "border-red-300",    badge: "bg-red-100 text-red-700",       back: "from-red-50 to-rose-100",    btn: "bg-red-500 hover:bg-red-600"     },
};

interface FlipCardProps {
  card: SolutionCard;
  index: number;
}

export default function FlipCard({ card, index }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const IconComponent = iconMap[card.id as keyof typeof iconMap];
  const accent = cardAccents[card.id as keyof typeof cardAccents];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const handleFlip = () => setIsFlipped((f) => !f);
  const handleGoBack = () => setIsFlipped(false);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleFlip();
    }
    if (event.key === "Escape" && isFlipped) handleGoBack();
  };

  // SSR-safe skeleton
  if (!isMounted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="h-96 w-full"
      >
        <div className={`w-full h-full bg-white border-2 ${accent.border} rounded-2xl shadow-md overflow-hidden flex flex-col`}>
          <div className="relative w-full h-52 bg-gray-100 flex items-center justify-center">
            <IconComponent size={52} className="text-gray-300" />
          </div>
          <div className="flex flex-col items-center justify-center flex-1 px-5 py-4 space-y-2">
            <h3 className="text-base font-bold text-slate-800 text-center leading-snug">{card.title}</h3>
            <p className="text-xs text-slate-400 italic">Click to explore ✨</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-96 w-full"
    >
      <div
        className="relative w-full h-full [perspective:1000px] cursor-pointer group"
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`${isFlipped ? "Hide" : "Show"} details for ${card.title}`}
        aria-expanded={isFlipped}
      >
        <div
          className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-out ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* ── FRONT ── */}
          <div
            className={`absolute inset-0 [backface-visibility:hidden] bg-white border-2 ${accent.border} rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col`}
          >
            {/* Hero image */}
            <div className="relative w-full h-52 overflow-hidden">
              {!imageError ? (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index < 3}
                  onError={() => setImageError(true)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${accent.back} flex items-center justify-center`}>
                  <IconComponent size={64} className="opacity-40 text-slate-600" />
                </div>
              )}
              {/* Gradient fade at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Card body */}
            <div className="flex flex-col items-center justify-center flex-1 px-5 pb-5 space-y-2">
              <h3 className="text-base font-bold text-slate-800 text-center leading-snug">
                {card.title}
              </h3>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${accent.badge}`}>
                Click to explore ✨
              </span>
            </div>
          </div>

          {/* ── BACK ── */}
          <div
            className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl shadow-md overflow-hidden flex flex-col border-2 ${accent.border}`}
          >
            {/* Blurred image background */}
            {!imageError && (
              <div className="absolute inset-0">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  aria-hidden
                  className="object-cover blur-sm scale-110 brightness-50"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b ${accent.back} opacity-80`} />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full px-6 py-6">
              <div className="space-y-3">
                <div className={`w-10 h-10 rounded-xl ${accent.badge} flex items-center justify-center mx-auto shadow`}>
                  <IconComponent size={22} />
                </div>
                <h3 className="text-base font-black text-slate-900 text-center leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-800 leading-relaxed text-center">
                  {card.description}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleGoBack();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    handleGoBack();
                  }
                }}
                className={`self-center mt-4 px-5 py-2 ${accent.btn} text-white text-sm font-semibold rounded-xl shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`}
                aria-label="Go back to front of card"
              >
                ← Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
