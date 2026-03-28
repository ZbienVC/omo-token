"use client";

import { motion } from "framer-motion";
import { Wallet, Search, Coins, Sparkles } from "lucide-react";

export default function HowToBuy() {
  const steps = [
    {
      num: "01",
      title: "Get Phantom Wallet",
      text: "Download Phantom. Fund it with some Solana (SOL) from any exchange.",
      icon: <Wallet className="w-7 h-7" style={{ color: '#D4943A' }} />,
      glow: 'rgba(212,148,58,0.08)',
      border: 'rgba(212,148,58,0.18)',
    },
    {
      num: "02",
      title: "Go to Pump.fun",
      text: "Navigate to pump.fun in your browser and connect your wallet.",
      icon: <Search className="w-7 h-7" style={{ color: '#C0562A' }} />,
      glow: 'rgba(192,86,42,0.08)',
      border: 'rgba(192,86,42,0.18)',
    },
    {
      num: "03",
      title: "Paste CA",
      text: "Search for $OMO or paste the contract address to find the right token.",
      icon: <Coins className="w-7 h-7" style={{ color: '#8C9970' }} />,
      glow: 'rgba(140,153,112,0.08)',
      border: 'rgba(140,153,112,0.18)',
    },
    {
      num: "04",
      title: "Own the Legend",
      text: "Swap SOL for $OMO. Hold the rarest creature on the blockchain.",
      icon: <Sparkles className="w-7 h-7" style={{ color: '#D4943A' }} />,
      glow: 'rgba(212,148,58,0.08)',
      border: 'rgba(212,148,58,0.18)',
    },
  ];

  return (
    <section id="how-to-buy" className="py-32 md:py-40 px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(212,148,58,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-6" style={{ color: '#FDFAF3' }}>
            How to Own $OMO
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto" style={{ color: 'rgba(253,250,243,0.55)' }}>
            You don't just buy $OMO. You become a guardian of the last white giraffe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-[2rem] overflow-hidden group transition-all"
              style={{ background: step.glow, border: `1px solid ${step.border}`, backdropFilter: 'blur(14px)' }}
            >
              <div className="absolute top-4 right-5 text-7xl font-black select-none font-[family-name:var(--font-fredoka)] transition-transform group-hover:scale-110"
                style={{ color: 'rgba(212,148,58,0.04)' }}>
                {step.num}
              </div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 relative z-10"
                style={{ background: 'rgba(26,18,8,0.7)', border: '1px solid rgba(212,148,58,0.1)' }}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10 tracking-tight" style={{ color: '#FDFAF3' }}>{step.title}</h3>
              <p className="font-medium leading-relaxed relative z-10" style={{ color: 'rgba(253,250,243,0.5)' }}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
