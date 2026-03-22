"use client";

import dynamic from "next/dynamic";

const Section4WorldMap = dynamic(
  () => import("@/components/Section4WorldMap"),
  { ssr: false, loading: () => <div className="min-h-screen" /> }
);

export default function WorldMapPage() {
  return (
    <main>
      <Section4WorldMap />
    </main>
  );
}
