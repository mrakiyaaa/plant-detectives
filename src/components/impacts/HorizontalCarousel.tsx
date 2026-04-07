import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ImpactCard as ImpactCardType } from "@/constants/impactsData";
import ImpactCard from "./ImpactCard";

interface HorizontalCarouselProps {
  title: string;
  subtitle: string;
  cards: ImpactCardType[];
  colorScheme: "environment" | "health";
}

export default function HorizontalCarousel({ 
  title, 
  subtitle, 
  cards, 
  colorScheme 
}: HorizontalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      if (scrollContainerRef.current) {
        const cardWidth = 320; // 80 * 4 (w-80 = 320px)
        const newScrollLeft = (currentIndex - 1) * cardWidth;
        scrollContainerRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollRight = () => {
    if (currentIndex < cards.length - 3) { // Show 3-4 cards at once
      setCurrentIndex(prev => prev + 1);
      if (scrollContainerRef.current) {
        const cardWidth = 320;
        const newScrollLeft = (currentIndex + 1) * cardWidth;
        scrollContainerRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">
          {title}
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <motion.button
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all ${
            currentIndex === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-slate-700 hover:bg-slate-50 hover:shadow-xl'
          }`}
          whileHover={currentIndex !== 0 ? { scale: 1.1 } : {}}
          whileTap={currentIndex !== 0 ? { scale: 0.95 } : {}}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12 16L6 10L12 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          onClick={scrollRight}
          disabled={currentIndex >= cards.length - 3}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all ${
            currentIndex >= cards.length - 3
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-slate-700 hover:bg-slate-50 hover:shadow-xl'
          }`}
          whileHover={currentIndex < cards.length - 3 ? { scale: 1.1 } : {}}
          whileTap={currentIndex < cards.length - 3 ? { scale: 0.95 } : {}}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M8 4L14 10L8 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-hidden mx-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex gap-6 pb-4"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ImpactCard 
                  impact={card} 
                  colorScheme={colorScheme} 
                  index={index}
                  totalCards={cards.length}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile scroll indicator */}
      <div className="flex justify-center mt-6 md:hidden">
        <div className="flex gap-2">
          {Array.from({ length: Math.min(cards.length - 2, 5) }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-slate-600' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}