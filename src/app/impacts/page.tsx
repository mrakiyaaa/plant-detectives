"use client";

import ImpactsPageHeader from "@/components/impacts/ImpactsPageHeader";
import HorizontalCarousel from "@/components/impacts/HorizontalCarousel";
import FlipFactCard from "@/components/impacts/FlipFactCard";
import { environmentImpacts, healthImpacts } from "@/constants/impactsData";

export default function ImpactsPage() {
  return (
    <main className="min-h-screen">
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
    </main>
  );
}
