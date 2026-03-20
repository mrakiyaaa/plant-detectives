"use client";

import { useState } from "react";
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
    "Critical": "bg-red-200 text-red-800",
    "Extreme": "bg-red-200 text-red-800",
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
        <div className="bg-white rounded-3xl shadow-lg p-2 sm:p-4 border border-slate-100">
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
                  onClick={() =>
                    setActiveRegion(activeRegion === i ? null : i)
                  }
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

      {/* Info Panel */}
      <AnimatePresence mode="wait">
        {activeRegion !== null && (
          <motion.div
            key={activeRegion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-slate-100 p-6"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {regions[activeRegion].name}
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              {regions[activeRegion].summary}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">🌊</span>
                <div>
                  <p className="font-semibold text-slate-700">Flood Risk</p>
                  <RiskBadge level={regions[activeRegion].floodRisk} />
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">☀️</span>
                <div>
                  <p className="font-semibold text-slate-700">Drought</p>
                  <p className="text-slate-500 text-xs">
                    {regions[activeRegion].droughtCondition}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-500 mt-0.5">📈</span>
                <div>
                  <p className="font-semibold text-slate-700">
                    Sea Level Impact
                  </p>
                  <p className="text-slate-500 text-xs">
                    {regions[activeRegion].seaLevelImpact}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">🌡️</span>
                <div>
                  <p className="font-semibold text-slate-700">Heat Trend</p>
                  <p className="text-slate-500 text-xs">
                    {regions[activeRegion].heatTrend}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
