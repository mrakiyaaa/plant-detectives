import { useState } from "react";
import { motion } from "framer-motion";
import { climateFacts, FactItem } from "@/constants/impactsData";

export default function FlipFactCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="py-16 max-w-4xl mx-auto px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="relative w-full h-96 cursor-pointer"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={handleClick}
        >
          {/* Front Face */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white p-8"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              💡
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-black mb-4 text-center">
              Did You Know?
            </h3>
            <p className="text-lg text-blue-100 text-center">
              Click to reveal key climate facts
            </p>
            <div className="mt-6 text-blue-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L12 22M12 22L6 16M12 22L18 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Back Face */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-white rounded-3xl shadow-2xl p-8 border-2 border-slate-200"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="h-full overflow-y-auto">
              <h3 className="text-2xl font-black text-slate-800 mb-6 text-center">
                🌍 Key Climate Facts
              </h3>
              
              <div className="space-y-4">
                {climateFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -20 }}
                    transition={{ delay: isFlipped ? index * 0.1 : 0, duration: 0.5 }}
                    className="flex gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <div className="text-2xl flex-shrink-0">{fact.icon}</div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {fact.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
              >
                ← Back to Front
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}