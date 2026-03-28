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

      {/* Proper giraffe SVG silhouette */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-16 md:-bottom-4 right-[-20px] md:right-[6%] w-52 md:w-80 opacity-40 md:opacity-60 pointer-events-none"
      >
        <svg viewBox="0 0 220 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Back leg left */}
          <rect x="82" y="290" width="18" height="100" rx="9" fill="url(#gfill)" opacity="0.7"/>
          {/* Back leg right */}
          <rect x="108" y="290" width="18" height="100" rx="9" fill="url(#gfill)" opacity="0.55"/>
          {/* Front leg left */}
          <rect x="56" y="270" width="18" height="110" rx="9" fill="url(#gfill)" opacity="0.9"/>
          {/* Front leg right */}
          <rect x="82" y="275" width="18" height="105" rx="9" fill="url(#gfill)" opacity="0.75"/>
          {/* Hooves */}
          <rect x="53" y="370" width="24" height="14" rx="7" fill="#3A2910"/>
          <rect x="79" y="372" width="24" height="12" rx="6" fill="#3A2910"/>
          <rect x="79" y="381" width="21" height="11" rx="5" fill="#3A2910"/>
          <rect x="105" y="381" width="21" height="11" rx="5" fill="#3A2910"/>
          {/* Body */}
          <ellipse cx="100" cy="255" rx="52" ry="45" fill="url(#gfill)"/>
          {/* Long neck — curved */}
          <path d="M105 215 C102 175 108 130 104 90 C102 70 94 58 90 50" stroke="url(#gfill)" strokeWidth="28" strokeLinecap="round" fill="none"/>
          {/* Neck fill solid shape */}
          <path d="M92 215 C88 172 94 128 90 88 C88 68 80 56 76 48 C82 40 104 42 110 50 C114 60 118 75 118 92 C118 132 112 174 118 218Z" fill="url(#gfill)"/>
          {/* Head */}
          <ellipse cx="93" cy="46" rx="24" ry="18" fill="url(#gfill)"/>
          {/* Snout */}
          <ellipse cx="88" cy="58" rx="12" ry="8" fill="url(#gfill)"/>
          {/* Left ossicone */}
          <rect x="81" y="20" width="7" height="26" rx="3.5" fill="#FDFAF3"/>
          <ellipse cx="84.5" cy="20" rx="4.5" ry="4.5" fill="#D4943A"/>
          {/* Right ossicone */}
          <rect x="98" y="18" width="7" height="28" rx="3.5" fill="#FDFAF3"/>
          <ellipse cx="101.5" cy="18" rx="4.5" ry="4.5" fill="#D4943A"/>
          {/* Eye */}
          <circle cx="82" cy="44" r="5" fill="#1A1208"/>
          <circle cx="80.5" cy="42.5" r="2" fill="#FDFAF3"/>
          <circle cx="83" cy="44" r="1" fill="rgba(255,255,255,0.3)"/>
          {/* Nostril */}
          <ellipse cx="83" cy="60" rx="3" ry="2" fill="#1A1208" opacity="0.4"/>
          {/* Ear */}
          <ellipse cx="110" cy="48" rx="7" ry="12" fill="url(#gfill)" transform="rotate(20 110 48)"/>
          {/* Mane */}
          <path d="M104 50 C108 65 112 85 115 105 C118 125 117 145 116 165" stroke="#C0562A" strokeWidth="4" strokeLinecap="round" opacity="0.5"/>
          {/* Tail */}
          <path d="M148 255 C160 268 165 285 160 305 C158 315 154 318 152 322" stroke="url(#gfill)" strokeWidth="8" strokeLinecap="round" fill="none"/>
          <ellipse cx="151" cy="325" rx="5" ry="9" fill="#7A5C3A" transform="rotate(-10 151 325)"/>
          {/* Giraffe patches */}
          <ellipse cx="100" cy="230" rx="14" ry="10" fill="rgba(192,86,42,0.15)"/>
          <ellipse cx="78" cy="260" rx="10" ry="8" fill="rgba(192,86,42,0.1)"/>
          <ellipse cx="125" cy="248" rx="12" ry="9" fill="rgba(192,86,42,0.12)"/>
          <defs>
            <linearGradient id="gfill" x1="100" y1="18" x2="100" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDFAF3"/>
              <stop offset="35%" stopColor="#E8D5B0"/>
              <stop offset="70%" stopColor="#D4943A" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#7A5C3A" stopOpacity="0.5"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
}
