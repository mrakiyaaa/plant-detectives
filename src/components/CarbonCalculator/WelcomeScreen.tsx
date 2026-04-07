import { motion } from "framer-motion";

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl sm:text-5xl font-black text-white mb-8"
      >
        My Carbon Footprint
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6"
      >
        <h2 className="text-xl font-bold text-blue-800 mb-4">
          What is a Carbon Footprint?
        </h2>
        
        <div className="text-slate-700 space-y-4">
          <p>
            A carbon footprint is the total amount of greenhouse gases (mainly carbon dioxide, CO₂) 
            released into the air because of our daily activities.
          </p>
          
          <div>
            <p className="mb-2">These gases come from things like:</p>
            <ul className="text-left space-y-1 ml-4">
              <li>• using electricity</li>
              <li>• traveling in cars, buses, or planes</li>
              <li>• eating food (especially meat and dairy)</li>
              <li>• buying and using products</li>
            </ul>
          </div>
          
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
            <p className="font-semibold text-yellow-800">
              Even small actions add up over time!
            </p>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-lg text-white mb-8"
      >
        Find out how your daily habits affect the planet. Are you ready?
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-colors shadow-lg hover:shadow-xl"
      >
        Start the Quiz →
      </motion.button>
    </motion.div>
  );
}