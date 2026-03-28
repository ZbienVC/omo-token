"use client";

import { motion } from "framer-motion";
import { Wallet, Search, Coins, Sparkles } from "lucide-react";

export default function HowToBuy() {
  const steps = [
    {
      num: "01",
      title: "Get Phantom Wallet",
      text: "Download Phantom or your wallet of choice. Fund it with some Solana.",
      icon: <Wallet className="w-8 h-8 text-omo-blue" />,
    },
    {
      num: "02",
      title: "Go to Pump.fun",
      text: "Open your browser and navigate to the Raydium/Pump.fun interface.",
      icon: <Search className="w-8 h-8 text-omo-sunset" />,
    },
    {
      num: "03",
      title: "Paste Contract",
      text: "Paste the $OMO token address to ensure you are buying the real one.",
      icon: <Coins className="w-8 h-8 text-omo-purple" />,
    },
    {
      num: "04",
      title: "Buy $OMO",
      text: "Swap SOL for $OMO. Hold onto the rarest asset on the blockchain.",
      icon: <Sparkles className="w-8 h-8 text-omo-gold" />,
    },
  ];

  return (
    <section id="how-to-buy" className="py-32 md:py-48 px-4 md:px-8 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-omo-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-fredoka)] text-white glow-text mb-6">
            How to secure $OMO
          </h2>
          <p className="text-lg md:text-xl text-sky-100/70 font-medium max-w-2xl mx-auto">
            You don't just buy $OMO. You rescue him. Here's the path.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-[2rem] glass-card border border-white/10 hover:border-white/20 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-7xl font-black text-white/[0.03] select-none font-[family-name:var(--font-fredoka)] transition-transform group-hover:scale-110 group-hover:text-white/[0.05]">
                {step.num}
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sky-100/60 font-medium leading-relaxed relative z-10">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
