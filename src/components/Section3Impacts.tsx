"use client";

import ImpactsHeader from "./impacts/ImpactsHeader";
import TabbedImpactExplorer from "./impacts/TabbedImpactExplorer";
import ImpactsWorldMap from "./impacts/ImpactsWorldMap";

export default function Section3Impacts() {
  return (
    <section
      id="section-2"
      className="min-h-screen flex flex-col items-center px-4 sm:px-8 pt-8 pb-20 bg-gradient-to-b from-rose-50/50 via-white to-sky-50/30"
    >
      <ImpactsHeader />
      <TabbedImpactExplorer />
      <ImpactsWorldMap />
    </section>
  );
}
