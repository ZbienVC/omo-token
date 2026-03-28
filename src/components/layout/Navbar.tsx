"use client";

import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const CA = "ExKEYChkEYc9oJ92jHZyY2c4qP9Efe9AfiAZoGU8pump";

  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 flex items-center justify-between glass-card rounded-b-2xl mx-4 md:mx-auto max-w-7xl mt-4"
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-fredoka)]">
          $OMO
        </span>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-sky-100">
        <Link href="#story" className="hover:text-omo-gold transition-colors">Story</Link>
        <Link href="#tokenomics" className="hover:text-omo-gold transition-colors">Tokenomics</Link>
        <Link href="#chart" className="hover:text-omo-gold transition-colors">Chart</Link>
        <Link href="#gallery" className="hover:text-omo-gold transition-colors">Gallery</Link>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={handleCopy}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-xs font-mono"
        >
          {copied ? "Copied!" : "CA"}
          <Copy className="w-3 h-3" />
        </button>
        <a 
          href="https://pump.fun/coin/ExKEYChkEYc9oJ92jHZyY2c4qP9Efe9AfiAZoGU8pump" 
          target="_blank" 
          rel="noreferrer"
          className="bg-gradient-to-r from-omo-blue to-omo-purple text-white px-5 py-2 rounded-xl font-bold shadow-lg shadow-omo-blue/20 hover:shadow-omo-blue/40 hover:scale-105 transition-all"
        >
          Buy $OMO
        </a>
      </div>
    </motion.nav>
  );
}
