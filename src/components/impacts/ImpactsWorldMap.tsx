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
  impact: string;
  color: string;
}

const regions: RegionData[] = [
  {
    name: "Arctic",
    coordinates: [0, 78],
    impact: "Ice melting 3x faster than global average, threatening polar ecosystems.",
    color: "#3b82f6",
  },
  {
    name: "Amazon",
    coordinates: [-60, -3],
    impact: "Severe droughts and deforestation turning rainforest into carbon emitter.",
    color: "#22c55e",
  },
  {
    name: "Australia",
    coordinates: [134, -25],
    impact: "Record bushfires and coral bleaching on the Great Barrier Reef.",
    color: "#f59e0b",
  },
  {
    name: "Pacific Islands",
    coordinates: [170, -10],
    impact: "Rising seas threaten entire nations with displacement.",
    color: "#06b6d4",
  },
  {
    name: "Sub-Saharan Africa",
    coordinates: [25, 0],
    impact: "Droughts cause food insecurity affecting millions.",
    color: "#ef4444",
  },
  {
    name: "South Asia",
    coordinates: [90, 24],
    impact: "Flooding and heatwaves impact billions of people.",
    color: "#a855f7",
  },
];

export default function ImpactsWorldMap() {
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<SVGCircleElement>, i: number) => {
    const rect = mapRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setHoveredRegion(i);
  };

  const handleMouseLeave = () => {
    setHoveredRegion(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      <p className="text-base sm:text-lg text-slate-600 text-center mb-6">
        Explore the world and see how climate change affects each region.
      </p>

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
                r={hoveredRegion === i ? 12 : 8}
                fill={region.color}
                opacity={0.8}
                stroke="white"
                strokeWidth={2}
                style={{ cursor: "pointer", transition: "r 0.2s ease" }}
                onMouseEnter={(e) => handleMouseEnter(e, i)}
                onMouseLeave={handleMouseLeave}
              >
                <animate
                  attributeName="r"
                  values="8;11;8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </Marker>
          ))}
        </ComposableMap>

        {/* Tooltip */}
        <AnimatePresence>
          {hoveredRegion !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              style={{
                position: "absolute",
                left: tooltipPos.x,
                top: tooltipPos.y,
                transform: "translate(-50%, -110%)",
                zIndex: 50,
              }}
              className="bg-slate-800 text-white rounded-xl px-4 py-3 shadow-xl max-w-[240px] pointer-events-none"
            >
              <h4 className="font-bold text-sm mb-1">{regions[hoveredRegion].name}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {regions[hoveredRegion].impact}
              </p>
              <div
                className="absolute left-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-800"
                style={{ transform: "translateX(-50%)" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-slate-500">
        {regions.map((region, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: region.color }}
            />
            {region.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
