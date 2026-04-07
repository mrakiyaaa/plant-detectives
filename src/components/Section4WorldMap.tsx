"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ── Data ─────────────────────────────────────────────────────────────────────

interface HotspotData {
  id: string;
  coordinates: [number, number];
  icon: string;
  title: string;
  region: string;
  year: string;
  dotColor: string;
  glowColor: string;
  gradientFrom: string;
  gradientTo: string;
  what: string;
  climateLink: string;
  specialFact: string;
  image?: string;
}

const hotspots: HotspotData[] = [
  {
    id: "california",
    coordinates: [-120, 37],
    icon: "🔥",
    title: "California Wildfires",
    region: "🇺🇸 USA — California",
    year: "2018",
    dotColor: "#f97316",
    glowColor: "rgba(249,115,22,0.5)",
    gradientFrom: "#f97316",
    gradientTo: "#ef4444",
    what: "Huge wildfires destroyed forests, homes, and entire towns across California. The Camp Fire became the deadliest and most destructive wildfire in state history.",
    climateLink: "Higher temperatures and prolonged drought conditions dried out vegetation, creating ideal conditions for fires to spread rapidly and burn more intensely.",
    specialFact: "The town of Paradise was completely destroyed within hours, displacing nearly 27,000 residents.",
    image: "/images/worldmap/Wildfire in California.jpg",
  },
  {
    id: "southasia",
    coordinates: [68, 28],
    icon: "🌊",
    title: "South Asia Floods",
    region: "🇵🇰 Pakistan / India / Bangladesh",
    year: "2022",
    dotColor: "#3b82f6",
    glowColor: "rgba(59,130,246,0.5)",
    gradientFrom: "#3b82f6",
    gradientTo: "#06b6d4",
    what: "Massive monsoon rainfall caused catastrophic flooding that submerged vast areas of Pakistan, India, and Bangladesh, destroying millions of homes and crops.",
    climateLink: "Warmer air holds significantly more moisture, leading to heavier and more intense rainfall events during monsoon season.",
    specialFact: "Nearly one-third of Pakistan was underwater at the peak of the floods — an area roughly the size of the United Kingdom.",
    image: "/images/worldmap/Pakistan monsoon flooding.jpg",
  },
  {
    id: "himalaya",
    coordinates: [84, 30],
    icon: "🧊",
    title: "Himalayan Glacier Melt",
    region: "🏔️ Himalayas (Asia)",
    year: "Ongoing",
    dotColor: "#22d3ee",
    glowColor: "rgba(34,211,238,0.5)",
    gradientFrom: "#22d3ee",
    gradientTo: "#38bdf8",
    what: "Himalayan glaciers are shrinking at an alarming rate, reducing river flows in summer and threatening long-term freshwater availability across Asia.",
    climateLink: "Rising global temperatures are accelerating ice melt across high-altitude regions, with Himalayan glaciers losing mass up to 65% faster than in the previous decade.",
    specialFact: "Over 2 billion people across Asia depend on Himalayan glaciers for their freshwater supply — they are sometimes called the 'Third Pole'.",
    image: "/images/worldmap/Melting of Himalayan glaciers.jpg",
  },
  {
    id: "mozambique",
    coordinates: [35, -19],
    icon: "🌪️",
    title: "Cyclone Idai",
    region: "🇲🇿 Mozambique / Zimbabwe",
    year: "2019",
    dotColor: "#a855f7",
    glowColor: "rgba(168,85,247,0.5)",
    gradientFrom: "#a855f7",
    gradientTo: "#7c3aed",
    what: "Cyclone Idai made landfall near Beira, Mozambique with devastating winds and rainfall, causing widespread flooding and destroying entire communities.",
    climateLink: "Warmer ocean temperatures provide more energy to tropical storms, increasing their intensity and the amount of rainfall they carry.",
    specialFact: "Over 3 million people were affected. The port city of Beira — home to 500,000 people — was almost completely destroyed.",
    image: "/images/worldmap/Cyclone idai in Mozambique.jpg",
  },
  {
    id: "europe",
    coordinates: [10, 48],
    icon: "🌡️",
    title: "European Heatwave",
    region: "🌍 Western Europe",
    year: "2019",
    dotColor: "#eab308",
    glowColor: "rgba(234,179,8,0.5)",
    gradientFrom: "#eab308",
    gradientTo: "#f97316",
    what: "Record-breaking temperatures swept across France, Germany, the Netherlands and the UK, causing droughts, wildfires and serious public health emergencies.",
    climateLink: "Climate change is making heatwaves more frequent, longer-lasting, and more intense across Europe — events that were once rare are becoming routine.",
    specialFact: "Temperatures exceeded 45°C in France — the highest ever recorded in the country. The heatwave caused over 2,500 deaths in France alone.",
    image: "/images/worldmap/People cooling off in fountains near the Eiffel Tower due to high heat.webp",
  },
  {
    id: "safrica",
    coordinates: [27, -27],
    icon: "🌧️",
    title: "Southern Africa Floods",
    region: "🌍 Southern Africa",
    year: "2026",
    dotColor: "#14b8a6",
    glowColor: "rgba(20,184,166,0.5)",
    gradientFrom: "#14b8a6",
    gradientTo: "#059669",
    what: "Severe and prolonged rainfall triggered catastrophic flooding across Southern Africa, washing away roads, bridges, and entire villages and displacing thousands.",
    climateLink: "Climate change is intensifying rainfall patterns in southern Africa, causing extreme precipitation events that overwhelm drainage systems and cause flash floods.",
    specialFact: "Some areas received an entire year's worth of rainfall in just a few days, an event that would have been nearly impossible without climate change.",
  },
];

// ── Pulsing marker (SVG-native animation) ────────────────────────────────────

function PulsingMarker({
  hotspot,
  isActive,
  onClick,
}: {
  hotspot: HotspotData;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Marker coordinates={hotspot.coordinates}>
      <g onClick={onClick} style={{ cursor: "pointer" }}>
        {/* Outer pulse ring */}
        <circle r={16} fill={hotspot.dotColor} opacity={0.15}>
          <animate attributeName="r" values="12;22;12" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.25;0;0.25" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Mid ring */}
        <circle r={10} fill={hotspot.dotColor} opacity={0.25}>
          <animate attributeName="r" values="8;14;8" dur="2s" begin="0.3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.35;0.1;0.35" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        {/* Core dot */}
        <circle
          r={isActive ? 10 : 7}
          fill={hotspot.dotColor}
          stroke="white"
          strokeWidth={2}
          style={{ transition: "r 0.2s" }}
        />
        {/* Emoji label */}
        <text
          textAnchor="middle"
          y={-14}
          style={{ fontSize: "13px", userSelect: "none", pointerEvents: "none" }}
        >
          {hotspot.icon}
        </text>
      </g>
    </Marker>
  );
}

// ── Popup modal ───────────────────────────────────────────────────────────────

function HotspotModal({
  hotspot,
  onClose,
}: {
  hotspot: HotspotData;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Card */}
      <motion.div
        className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 30 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Header gradient */}
        <div
          className="relative px-6 pt-8 pb-6 flex flex-col items-center text-center"
          style={{
            background: `linear-gradient(135deg, ${hotspot.gradientFrom}, ${hotspot.gradientTo})`,
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Big emoji */}
          <motion.div
            className="text-6xl mb-3 drop-shadow-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            {hotspot.icon}
          </motion.div>

          <h2 className="text-xl font-black text-white leading-tight mb-1">
            {hotspot.title}
          </h2>
          <p className="text-white/80 text-sm font-medium">{hotspot.region}</p>
          <span className="mt-2 inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
            📅 {hotspot.year}
          </span>
        </div>

        {/* Image */}
        {hotspot.image && (
          <div className="relative w-full h-44 overflow-hidden">
            <Image
              src={hotspot.image}
              alt={hotspot.title}
              fill
              className="object-cover"
              sizes="448px"
            />
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-5 space-y-4">
          {/* What happened */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              ⚠️ What Happened
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">{hotspot.what}</p>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100" />

          {/* Climate link */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              🌡️ Climate Link
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">{hotspot.climateLink}</p>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100" />

          {/* Special fact */}
          <div
            className="rounded-2xl px-4 py-3"
            style={{ background: `${hotspot.gradientFrom}18` }}
          >
            <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: hotspot.dotColor }}>
              ⭐ Special Fact
            </p>
            <p className="text-slate-800 text-sm font-semibold leading-relaxed">
              {hotspot.specialFact}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Section4WorldMap() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeHotspot = hotspots.find((h) => h.id === activeId) ?? null;

  const handleClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <AnimatePresence>
        {activeHotspot && (
          <HotspotModal
            hotspot={activeHotspot}
            onClose={() => setActiveId(null)}
          />
        )}
      </AnimatePresence>

      <section
        id="section-3"
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20"
        style={{
          background: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        }}
      >
        {/* ── Title ── */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-white mb-3"
        >
          🌍 Climate Impact Explorer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg text-slate-400 text-center max-w-xl mb-10"
        >
          Click on the glowing hotspots to discover real climate disasters and their causes.
        </motion.p>

        {/* ── Map ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full max-w-5xl"
        >
          <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl"
            style={{ background: "#0f172a" }}
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 130, center: [10, 15] }}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1e3a5f"
                      stroke="#1e40af"
                      strokeWidth={0.4}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#1e3a5f", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {hotspots.map((h) => (
                <PulsingMarker
                  key={h.id}
                  hotspot={h}
                  isActive={activeId === h.id}
                  onClick={() => handleClick(h.id)}
                />
              ))}
            </ComposableMap>
          </div>

          {/* ── Hotspot legend pills ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mt-5"
          >
            {hotspots.map((h) => (
              <button
                key={h.id}
                onClick={() => handleClick(h.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer"
                style={{
                  borderColor: h.dotColor,
                  color: activeId === h.id ? "#0f172a" : h.dotColor,
                  backgroundColor: activeId === h.id ? h.dotColor : `${h.dotColor}18`,
                }}
              >
                <span>{h.icon}</span>
                {h.title}
              </button>
            ))}
          </motion.div>

          <p className="text-center text-slate-600 text-xs mt-4">
            📍 {hotspots.length} hotspots — click any to explore
          </p>
        </motion.div>
      </section>
    </>
  );
}
