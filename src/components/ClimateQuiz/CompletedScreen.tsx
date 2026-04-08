import Link from "next/link";
import { motion } from "framer-motion";

interface CompletedScreenProps {
  onStartOver: () => void;
}

export default function CompletedScreen({ onStartOver }: CompletedScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-8"
      >
        <motion.div
          className="text-9xl mb-6"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          🎉
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 mb-4">
          Climate Hero Unlocked!
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8 mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <motion.div
            className="text-6xl"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            🌍
          </motion.div>
          <motion.div
            className="text-4xl ml-2"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            💚
          </motion.div>
        </div>
        
        <p className="text-xl text-slate-700 leading-relaxed">
          You've completed all 3 levels and proven you're a true Planet Detective. 
          The Earth thanks you for your knowledge and dedication to fighting climate change!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="text-2xl mb-2">🟢</div>
            <h3 className="font-bold text-green-800">Level 1</h3>
            <p className="text-sm text-green-600">Beginner ✓</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="text-2xl mb-2">🟡</div>
            <h3 className="font-bold text-yellow-800">Level 2</h3>
            <p className="text-sm text-yellow-600">Intermediate ✓</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="text-2xl mb-2">🔴</div>
            <h3 className="font-bold text-red-800">Level 3</h3>
            <p className="text-sm text-red-600">Advanced ✓</p>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
          <p className="text-blue-800 font-medium">
            🌟 Share your Climate Hero status with friends and help spread awareness about climate change!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/carbon-calculator"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            🌍 Go to Carbon Calculator
          </Link>
          <button
            onClick={onStartOver}
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all shadow-lg hover:shadow-xl"
          >
            ↺ Start Over
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}