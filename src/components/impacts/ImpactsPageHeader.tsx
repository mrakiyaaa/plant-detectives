import { motion } from "framer-motion";

export default function ImpactsPageHeader() {
  return (
    <section className="px-4 sm:px-8 pt-16 pb-8 max-w-4xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight"
      >
        Impacts of Climate Change Around the Globe
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
      >
        Climate change not only affects nature but also the health and well-being of people around the world.
      </motion.p>
    </section>
  );
}