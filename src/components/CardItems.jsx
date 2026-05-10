import { motion } from "framer-motion";
import { CreditCard, Wifi } from "lucide-react";

export default function CardItems({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        rotateX: 3,
        rotateY: -3,
      }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[30px] p-7 min-h-[240px]
      bg-gradient-to-br ${card.color}
      border border-white/10
      backdrop-blur-xl
      shadow-[0_20px_80px_rgba(0,0,0,0.45)]`}
    >
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

      {/* Shine */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-white/70 text-sm">Current Balance</p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-white mt-1"
            >
              {card.balance}
            </motion.h2>
          </div>

          <div className="flex items-center gap-2">
            <Wifi className="text-white/60 rotate-90" size={18} />
            <CreditCard className="text-white" size={28} />
          </div>
        </div>

        {/* Card Number */}
        <div className="mt-10">
          <p className="tracking-[6px] text-white/80 text-lg">
            {card.number}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-end mt-8">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest">
              Card Holder
            </p>

            <h3 className="text-white font-semibold mt-1">
              Samaira Singh
            </h3>
          </div>

          <motion.button
            whileHover={{
              scale: 1.08,
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-2xl
            bg-white/10 backdrop-blur-md
            border border-white/10
            text-white text-sm"
          >
            Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}