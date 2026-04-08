"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

      {/* Next Step CTA */}
      <div className="relative z-10 px-4 sm:px-8 py-16 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 shadow-xl"
        >
          <p className="text-white text-lg sm:text-xl leading-relaxed mb-6">
            See how climate change is affecting different regions across the world.
          </p>
          <Link
            href="/world-map"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-colors duration-200 shadow-md text-sm sm:text-base"
          >
            Discover real world climate impacts
            <span>&rarr;</span>
          </Link>
        </motion.div>
      </div>
      </div>
    </main>
  );
}
