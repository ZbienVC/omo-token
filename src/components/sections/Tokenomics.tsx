"use client";

import { motion } from "framer-motion";
import { Coins, Lock, Flame, Heart } from "lucide-react";

export default function Tokenomics() {
  const cards = [
    {
      title: "1,000,000,000",
      label: "Total Supply",
      icon: <Coins className="w-6 h-6 text-omo-gold" />,
      color: "bg-omo-gold/10 border-omo-gold/30 shadow-[0_0_20px_rgba(245,208,111,0.2)]",
    },
    {
      title: "0% Tax",
      label: "Buy & Sell freely",
      icon: <Flame className="w-6 h-6 text-omo-sunset" />,
      color: "bg-omo-sunset/10 border-omo-sunset/30 shadow-[0_0_20px_rgba(255,155,113,0.2)]",
    },
    {
      title: "LP Locked",
      label: "Burned forever",
      icon: <Lock className="w-6 h-6 text-omo-purple" />,
      color: "bg-omo-purple/10 border-omo-purple/30 shadow-[0_0_20px_rgba(178,141,255,0.2)]",
    },
    {
      title: "100% Fair",
      label: "Community owned",
      icon: <Heart className="w-6 h-6 text-omo-blue" />,
      color: "bg-omo-blue/10 border-omo-blue/30 shadow-[0_0_20px_rgba(110,193,255,0.2)]",
    },
  ];

  return (
    <section id="tokenomics" className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] text-white mb-16"
        >
          Tokenomics
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl border flex flex-col items-center gap-4 backdrop-blur-md ${c.color}`}
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                {c.icon}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {c.title}
              </h3>
              <p className="text-sm text-sky-100/60 uppercase tracking-widest font-semibold font-[family-name:var(--font-inter)]">
                {c.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

