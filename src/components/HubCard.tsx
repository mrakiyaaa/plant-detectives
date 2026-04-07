"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HubCardProps {
  href: string;
  emoji: string;
  heading: string;
  description: string;
  index: number;
  accentFrom: string;
  accentTo: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
}

export default function HubCard({
  href,
  emoji,
  heading,
  description,
  index,
  accentFrom,
  accentTo,
  borderColor,
  badgeBg,
  badgeText,
}: HubCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="w-full"
    >
      <Link
        href={href}
        className={`group flex flex-col items-center text-center bg-white border-2 ${borderColor} rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full`}
      >
        {/* Icon area */}
        <div className={`w-full py-10 bg-gradient-to-br ${accentFrom} ${accentTo} flex flex-col items-center justify-center gap-3`}>
          <span className="text-7xl drop-shadow-sm leading-none">{emoji}</span>
        </div>

        {/* Body */}
        <div className="flex flex-col items-center gap-3 px-8 py-8">
          <h3 className="text-2xl font-black text-slate-800 leading-tight">{heading}</h3>
          <p className="text-slate-500 text-base leading-relaxed max-w-xs">{description}</p>
          <span
            className={`mt-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold ${badgeBg} ${badgeText} group-hover:scale-105 transition-transform`}
          >
            Let&apos;s Go →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
