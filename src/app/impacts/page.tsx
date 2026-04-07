"use client";

import ImpactsPageHeader from "@/components/impacts/ImpactsPageHeader";
import HorizontalCarousel from "@/components/impacts/HorizontalCarousel";
import FlipFactCard from "@/components/impacts/FlipFactCard";
import { environmentImpacts, healthImpacts } from "@/constants/impactsData";

export default function ImpactsPage() {
  return (
    <main
      className="relative min-h-screen"
      style={{
        backgroundImage: "url('/images/Serene ocean, forest, and sunrise blend.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />
      <div className="relative z-10">
      <ImpactsPageHeader />
      
      <HorizontalCarousel
        title="Impacts on the Environment"
        subtitle="Climate change has wide-ranging impacts on the environment."
        cards={environmentImpacts}
        colorScheme="environment"
      />

      <HorizontalCarousel
        title="Impacts on Human Health"
        subtitle="Climate change affects health through various pathways."
        cards={healthImpacts}
        colorScheme="health"
      />

      <FlipFactCard />
      </div>
    </main>
  );
}
