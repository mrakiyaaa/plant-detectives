import { motion } from "framer-motion";
import { HumanActivity } from "@/constants/humanActivities";

interface HumanActivityCardProps {
  activity: HumanActivity;
  index: number;
}

export default function HumanActivityCard({ activity, index }: HumanActivityCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6, 
        ease: "easeOut" 
      }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
    >
      {/* Gradient Header */}
      <div className={`h-24 bg-gradient-to-r ${activity.gradientFrom} ${activity.gradientTo} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="text-3xl">{activity.icon}</div>
          <h3 className="font-bold text-slate-800 text-lg leading-tight flex-1">
            {activity.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed">
          {activity.description}
        </p>
      </div>
    </motion.article>
  );
}