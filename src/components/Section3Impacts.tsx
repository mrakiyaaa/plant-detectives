"use client";

import ImpactsHeader from "./impacts/ImpactsHeader";
import TabbedImpactExplorer from "./impacts/TabbedImpactExplorer";
import ImpactsWorldMap from "./impacts/ImpactsWorldMap";

export default function Section3Impacts() {
  return (
    <section
      id="section-2"
      className="relative min-h-screen flex flex-col items-center px-4 sm:px-8 pt-8 pb-20"
      style={{
        backgroundImage: "url('/images/Serene ocean, forest, and sunrise blend.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="relative z-10 w-full flex flex-col items-center">
        <ImpactsHeader />
        <TabbedImpactExplorer />
        <ImpactsWorldMap />
      </div>
    </section>
  );
}
