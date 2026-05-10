import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon,
  progress,
  color,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0px 20px 50px rgba(0,0,0,0.25)",
      }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-3xl p-6 border ${color}
      transition-all duration-300`}
    >
      {/* Floating Glow Background */}
      <motion.div
        animate={{
          x: [0, 10, -10, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"
      />

      {/* Shine Overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="font-medium text-slate-700">{title}</p>

          {/* Animated icon */}
          <motion.div
            animate={{
              y: [0, -3, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-xl"
          >
            {icon}
          </motion.div>
        </div>

        {/* Value with pop-in effect */}
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mt-5 text-slate-900"
        >
          {value}
        </motion.h2>

        {/* Progress Section */}
        <div className="mt-5">
          <div className="flex justify-between text-sm text-slate-600">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>

          {/* Background bar */}
          <div className="h-2 bg-white/40 rounded-full mt-2 overflow-hidden">
            
            {/* Animated fill bar */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-linear-to-r from-green-300 to-blue-900 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}