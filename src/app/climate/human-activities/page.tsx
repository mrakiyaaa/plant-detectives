"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { humanActivities } from "@/constants/humanActivities";
import HumanActivityCard from "@/components/HumanActivityCard";

export default function HumanActivitiesPage() {
  const router = useRouter();

  const scrollToCards = () => {
    const cardsSection = document.getElementById('cards-section');
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main
      className="relative min-h-screen"
      style={{
        backgroundImage: "url('/images/human activities.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
      <div className="relative z-10">
      {/* Back button */}
      <div className="px-4 sm:px-8 pt-12 max-w-6xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-300 hover:text-white font-medium text-sm mb-10 transition-colors cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Climate
        </button>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-8 py-8 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-black text-white mb-6"
        >
          Human Activities Causing{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Climate Change
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/90 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          Understanding our impact on the planet to build a better future.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          onClick={scrollToCards}
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors"
        >
          Explore the Causes 👇
        </motion.button>
      </section>

      {/* Cards Grid Section */}
      <section id="cards-section" className="px-4 sm:px-8 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {humanActivities.map((activity, index) => (
            <HumanActivityCard
              key={activity.id}
              activity={activity}
              index={index}
            />
          ))}
        </motion.div>
      </section>

      {/* Next Step CTA */}
      <section className="px-4 sm:px-8 py-16 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 border border-white/20 rounded-3xl p-10 shadow-md backdrop-blur-sm"
        >
          <p className="text-white text-lg sm:text-xl leading-relaxed mb-6">
            Human activities are driving major changes in Earth&apos;s climate system.
            <br />
            <span className="font-semibold">But what are the real effects on our planet?</span>
          </p>
          <Link
            href="/impacts"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-colors duration-200 shadow-md text-sm sm:text-base"
          >
            Explore the impacts of climate change
            <span>&rarr;</span>
          </Link>
        </motion.div>
      </section>
      </div>
    </main>
  );
}
