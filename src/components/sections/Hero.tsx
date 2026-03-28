"use client";

import { motion } from "framer-motion";
import { Copy, TrendingUp, BarChart2 } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const CA = "ExKEYChkEYc9oJ92jHZyY2c4qP9Efe9AfiAZoGU8pump";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden text-center z-10">

      {/* Tarangire savannah hero gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 right-0 h-[70%] opacity-30"
          style={{ background: 'linear-gradient(to bottom, rgba(192,86,42,0.15) 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[40%] opacity-20"
          style={{ background: 'linear-gradient(to top, rgba(122,92,58,0.2) 0%, transparent 100%)' }} />
      </div>

      {/* Rarity badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
        style={{ background: 'rgba(212,148,58,0.1)', border: '1px solid rgba(212,148,58,0.3)' }}
      >
        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#D4943A', boxShadow: '0 0 8px rgba(212,148,58,0.9)' }} />
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#D4943A' }}>
          Last of Her Kind · Tarangire, Tanzania
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-7xl md:text-[9rem] font-bold font-[family-name:var(--font-fredoka)] leading-none glow-text mb-2 drop-shadow-2xl"
        style={{ color: '#FDFAF3' }}
      >
        OMO
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl md:text-4xl font-semibold mb-6 max-w-2xl leading-tight"
        style={{ color: '#D4943A' }}
      >
        The Last White Giraffe
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg md:text-xl max-w-lg mb-12 font-medium"
        style={{ color: 'rgba(253,250,243,0.65)' }}
      >
        One of one. Walking the acacia plains of Tanzania since 2015. Forever on-chain.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md mx-auto"
      >
        <a href="https://pump.fun/coin/ExKEYChkEYc9oJ92jHZyY2c4qP9Efe9AfiAZoGU8pump" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="w-full h-14 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 text-omo-bone"
            style={{ background: 'linear-gradient(135deg, #D4943A, #C0562A)', boxShadow: '0 6px 28px rgba(212,148,58,0.3)' }}>
            Buy $OMO <TrendingUp className="w-5 h-5" />
          </motion.button>
        </a>
        <a href="https://dexscreener.com/solana/65fgf5zbssh63dhk9dfk5arpgme88a3zzq6cwhdpdejo" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="w-full h-14 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
            style={{ background: 'rgba(212,148,58,0.08)', border: '1px solid rgba(212,148,58,0.25)', color: '#D4943A' }}>
            View Chart <BarChart2 className="w-5 h-5" />
          </motion.button>
        </a>
      </motion.div>

      {/* Contract Address */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 flex flex-col items-center gap-3"
      >
        <p className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(253,250,243,0.35)' }}>Contract Address</p>
        <div
          onClick={handleCopy}
          className="flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer transition-all group"
          style={{ background: 'rgba(212,148,58,0.06)', border: '1px solid rgba(212,148,58,0.15)' }}
        >
          <span className="font-mono text-xs md:text-sm truncate max-w-[200px] md:max-w-none" style={{ color: '#D4943A' }}>
            {CA}
          </span>
          <Copy className="w-4 h-4 transition-colors" style={{ color: copied ? '#D4943A' : 'rgba(253,250,243,0.3)' }} />
        </div>
      </motion.div>

      {/* Abstract giraffe silhouette */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 md:-bottom-10 right-[-40px] md:right-[8%] w-56 md:w-80 opacity-30 md:opacity-50 pointer-events-none"
      >
        <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neck + body */}
          <path d="M110 280 C110 220 130 140 120 90 C115 65 92 52 78 62 C68 70 65 88 68 105 C72 122 88 128 92 145 C97 165 92 220 92 280Z"
            fill="url(#g1)" />
          {/* Head */}
          <ellipse cx="85" cy="55" rx="20" ry="16" fill="url(#g1)" />
          {/* Ossicones */}
          <rect x="78" y="30" width="6" height="22" rx="3" fill="#FDFAF3" opacity="0.8" />
          <rect x="92" y="28" width="6" height="24" rx="3" fill="#FDFAF3" opacity="0.8" />
          {/* Eye */}
          <circle cx="80" cy="55" r="4" fill="#1A1208" />
          <circle cx="81.5" cy="53.5" r="1.5" fill="#FDFAF3" />
          {/* Legs */}
          <rect x="93" y="240" width="10" height="40" rx="5" fill="url(#g1)" />
          <rect x="107" y="240" width="10" height="40" rx="5" fill="url(#g1)" />
          <rect x="93" y="250" width="10" height="30" rx="5" fill="url(#g1)" opacity="0.5" />
          <rect x="107" y="250" width="10" height="30" rx="5" fill="url(#g1)" opacity="0.5" />
          <defs>
            <linearGradient id="g1" x1="100" y1="30" x2="100" y2="280" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDFAF3" />
              <stop offset="0.6" stopColor="#D4943A" stopOpacity="0.8" />
              <stop offset="1" stopColor="#7A5C3A" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
}
