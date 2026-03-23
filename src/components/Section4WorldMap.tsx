"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface RegionData {
  name: string;
  coordinates: [number, number];
  floodRisk: "Low" | "Medium" | "High";
  droughtCondition: string;
  seaLevelImpact: string;
  heatTrend: string;
  color: string;
  summary: string;
}

const regions: RegionData[] = [
  {
    name: "Amazon Rainforest",
    coordinates: [-60, -3],
    floodRisk: "Medium",
    droughtCondition: "Severe — record droughts in recent years",
    seaLevelImpact: "Low direct impact",
    heatTrend: "Rising — accelerating deforestation",
    color: "#ef4444",
    summary:
      "The Amazon is the world's largest tropical rainforest and a critical carbon sink. Droughts and deforestation are turning parts of it from a carbon absorber into a carbon emitter.",
  },
  {
    name: "Arctic",
    coordinates: [0, 78],
    floodRisk: "Low",
    droughtCondition: "Not applicable",
    seaLevelImpact: "Extreme — ice melt raises global sea levels",
    heatTrend: "Warming 3x faster than global average",
    color: "#ef4444",
    summary:
      "The Arctic is warming nearly three times faster than the rest of the planet. Sea ice is shrinking rapidly, threatening polar bears, seals, and Indigenous communities.",
  },
  {
    name: "Bangladesh",
    coordinates: [90, 24],
    floodRisk: "High",
    droughtCondition: "Moderate — seasonal variability",
    seaLevelImpact: "Critical — millions at risk of displacement",
    heatTrend: "Rising — deadly heatwaves increasing",
    color: "#ef4444",
    summary:
      "Bangladesh is one of the most climate-vulnerable countries. Much of the land is low-lying and prone to flooding. Rising sea levels could displace over 17 million people by 2050.",
  },
  {
    name: "Australia",
    coordinates: [134, -25],
    floodRisk: "Medium",
    droughtCondition: "Severe — prolonged dry spells",
    seaLevelImpact: "Moderate — coastal erosion increasing",
    heatTrend: "Record-breaking temperatures",
    color: "#f59e0b",
    summary:
      "Australia faces devastating bushfires, coral bleaching on the Great Barrier Reef, and severe droughts. The 2019–2020 bushfires burned over 18 million hectares.",
  },
  {
    name: "Sub-Saharan Africa",
    coordinates: [25, 0],
    floodRisk: "Medium",
    droughtCondition: "Severe — food insecurity rising",
    seaLevelImpact: "Moderate — coastal cities threatened",
    heatTrend: "Rising — crop yields declining",
    color: "#ef4444",
    summary:
      "Sub-Saharan Africa contributes the least to climate change but suffers some of the worst effects. Droughts threaten food supplies, and extreme heat makes farming increasingly difficult.",
  },
  {
    name: "Pacific Islands",
    coordinates: [170, -10],
    floodRisk: "High",
    droughtCondition: "Low — but freshwater supply at risk",
    seaLevelImpact: "Existential — some islands may disappear",
    heatTrend: "Rising — coral reefs dying",
    color: "#ef4444",
    summary:
      "Small Pacific island nations like Tuvalu and Kiribati face an existential threat. Rising seas could make entire countries uninhabitable within decades, forcing whole populations to relocate.",
  },
];

function RiskBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    Low: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    High: "bg-red-100 text-red-700",
    Critical: "bg-red-200 text-red-800",
    Extreme: "bg-red-200 text-red-800",
  };
  const match = Object.keys(colors).find((k) => level.includes(k));
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
        match ? colors[match] : "bg-slate-100 text-slate-600"
      }`}
    >
      {level}
    </span>
  );
}

export default function Section4WorldMap() {
  const [activeRegion, setActiveRegion] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (e: React.MouseEvent<SVGCircleElement>, i: number) => {
    if (activeRegion === i) {
      setActiveRegion(null);
      return;
    }
    const rect = mapRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setActiveRegion(i);
  };

  const getTooltipTransform = () => {
    if (!mapRef.current) return "translate(-50%, -108%)";
    const { width, height } = mapRef.current.getBoundingClientRect();

    let x = "-50%";
    let y = "-108%";

    if (tooltipPos.x > width * 0.72) x = "-88%";
    else if (tooltipPos.x < width * 0.28) x = "-12%";

    if (tooltipPos.y < height * 0.32) y = "16px";

    return `translate(${x}, ${y})`;
  };

  return (
    <section
      id="section-3"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 bg-gradient-to-b from-sky-50 via-blue-50/30 to-indigo-50/20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-slate-800 mb-4"
      >
        A Global Crisis
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base sm:text-lg text-slate-500 text-center max-w-xl mb-8"
      >
        Climate change affects every part of our world differently. Click on the
        highlighted regions to explore how.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <div
          ref={mapRef}
          className="relative bg-white rounded-3xl shadow-lg p-2 sm:p-4 border border-slate-100"
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 120, center: [10, 20] }}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#e2e8f0"
                    stroke="#cbd5e1"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#cbd5e1", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {regions.map((region, i) => (
              <Marker key={i} coordinates={region.coordinates}>
                <circle
                  r={8}
                  fill={region.color}
                  opacity={0.8}
                  stroke="white"
                  strokeWidth={2}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => handleDotClick(e, i)}
                >
                  <animate
                    attributeName="r"
                    values="8;12;8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </Marker>
            ))}
          </ComposableMap>

          {/* Floating tooltip near dot */}
          <AnimatePresence mode="wait">
            {activeRegion !== null && (
              <motion.div
                key={activeRegion}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  left: tooltipPos.x,
                  top: tooltipPos.y,
                  transform: getTooltipTransform(),
                  width: 272,
                  zIndex: 50,
                }}
                className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-bold text-slate-800 leading-tight">
                    {regions[activeRegion].name}
                  </h3>
                  <button
                    onClick={() => setActiveRegion(null)}
                    className="text-slate-400 hover:text-slate-600 shrink-0 cursor-pointer"
                    aria-label="Close"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  {regions[activeRegion].summary}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-50 rounded-lg p-2">
                    <p className="font-semibold text-slate-700 mb-1">Flood Risk</p>
                    <RiskBadge level={regions[activeRegion].floodRisk} />
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2">
                    <p className="font-semibold text-slate-700 mb-1">Drought</p>
                    <p className="text-slate-500 leading-tight">
                      {regions[activeRegion].droughtCondition}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2">
                    <p className="font-semibold text-slate-700 mb-1">Sea Level</p>
                    <p className="text-slate-500 leading-tight">
                      {regions[activeRegion].seaLevelImpact}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2">
                    <p className="font-semibold text-slate-700 mb-1">Heat Trend</p>
                    <p className="text-slate-500 leading-tight">
                      {regions[activeRegion].heatTrend}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            High Risk
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
            Medium Risk
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
            Low Risk
          </span>
        </div>
      </motion.div>
    </section>
  );
}
