"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NavigationDots from "@/components/NavigationDots";
import Section1MysteryHook from "@/components/Section1MysteryHook";
import Section2Science from "@/components/Section2Science";
import Section3Impacts from "@/components/Section3Impacts";
import Section5Solutions from "@/components/Section5Solutions";
import Section6Quiz from "@/components/Section6Quiz";
import Section7CarbonCalculator from "@/components/Section7CarbonCalculator";
import Section8Pledge from "@/components/Section8Pledge";

// Dynamic import for react-simple-maps (SSR issues)
const Section4WorldMap = dynamic(
  () => import("@/components/Section4WorldMap"),
  { ssr: false, loading: () => <div className="min-h-screen" /> }
);

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sectionIds = Array.from({ length: 8 }, (_, i) => `section-${i}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionIds.indexOf(entry.target.id);
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative">
      <NavigationDots activeSection={activeSection} />
      <Section1MysteryHook />
      <Section2Science />
      <Section3Impacts />
      <Section4WorldMap />
      <Section5Solutions />
      <Section6Quiz />
      <Section7CarbonCalculator />
      <Section8Pledge />
    </main>
  );
}
