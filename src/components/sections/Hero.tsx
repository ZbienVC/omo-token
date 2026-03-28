"use client";

import { motion } from "framer-motion";
import { Copy, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function Button({ children, className, variant = "primary" }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={twMerge(
        "px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all",
        variant === "primary" && "bg-gradient-to-r from-omo-blue to-omo-purple text-white shadow-omo-blue/20 hover:shadow-omo-blue/40",
        variant === "secondary" && "bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-md",
        variant === "ghost" && "bg-transparent text-omo-gold border border-omo-gold/30 hover:bg-omo-gold/10",
        className
      )}
    >
      {children}
    </motion.button>
  );
}

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
      
      {/* Decorative Rarity Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 bg-omo-gold/10 border border-omo-gold/30 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-omo-gold animate-pulse shadow-[0_0_8px_rgba(245,208,111,0.8)]" />
        <span className="text-xs font-bold text-omo-gold uppercase tracking-widest font-[family-name:var(--font-inter)]">
          Only 1 Remains
        </span>
      </motion.div>

      {/* Main Typography */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-7xl md:text-[9rem] font-bold font-[family-name:var(--font-fredoka)] leading-none text-white glow-text mb-2 drop-shadow-2xl"
      >
        OMO
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6 max-w-2xl font-[family-name:var(--font-inter)] leading-tight"
      >
        The Last White Giraffe
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-sky-100/70 text-lg md:text-xl max-w-lg mb-12 font-medium"
      >
        One of one. Forever. The rarest asset on earth meets internet culture.
      </motion.p>

      {/* Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md mx-auto"
      >
        <a href="https://pump.fun/coin/ExKEYChkEYc9oJ92jHZyY2c4qP9Efe9AfiAZoGU8pump" target="_blank" className="w-full sm:w-auto">
          <Button variant="primary" className="w-full text-lg h-14">
            Buy $OMO
            <TrendingUp className="w-5 h-5 opacity-80" />
          </Button>
        </a>
        <a href="#" className="w-full sm:w-auto">
          <Button variant="secondary" className="w-full text-lg h-14">
            Community
            <Users className="w-5 h-5 opacity-80" />
          </Button>
        </a>
      </motion.div>

      {/* Contract Address */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 flex flex-col items-center gap-3"
      >
        <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Contract Address</p>
        <div 
          onClick={handleCopy}
          className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
        >
          <span className="font-mono text-xs md:text-sm text-sky-200 truncate max-w-[200px] md:max-w-none">
            {CA}
          </span>
          <Copy className={clsx("w-4 h-4 transition-colors", copied ? "text-omo-gold" : "text-white/40 group-hover:text-white")} />
        </div>
      </motion.div>

      {/* Abstract Giraffe Illustration (Idle Animation) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 md:-bottom-20 -right-20 md:right-[10%] w-64 md:w-96 opacity-60 md:opacity-80 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          {/* Simple abstract white giraffe head and neck silhouette */}
          <path d="M120 200 C120 150 140 100 130 60 C125 40 100 30 85 40 C75 45 70 60 70 75 C70 85 85 90 90 100 C95 110 90 150 90 200" fill="url(#giraffe-grad)" />
          {/* Ossicones (Horns) */}
          <path d="M100 35 L95 15 C95 10 105 10 105 15 L105 32" fill="#E6F4FF" />
          <path d="M115 35 L115 12 C115 8 125 8 125 12 L120 32" fill="#E6F4FF" />
          {/* Eye */}
          <circle cx="95" cy="55" r="4" fill="#0B1121" />
          <circle cx="96" cy="54" r="1.5" fill="#FFFFFF" />
          <defs>
            <linearGradient id="giraffe-grad" x1="100" y1="30" x2="100" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#6EC1FF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
}
