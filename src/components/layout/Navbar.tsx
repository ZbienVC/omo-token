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
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 flex items-center justify-between mx-4 md:mx-auto max-w-7xl mt-4 rounded-2xl"
      style={{ background: 'rgba(26,18,8,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(212,148,58,0.15)' }}
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold tracking-tight font-[family-name:var(--font-fredoka)] glow-text text-omo-bone">
          $OMO
        </span>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-omo-bone/70">
        <Link href="#story"      className="hover:text-omo-gold transition-colors">Story</Link>
        <Link href="#tokenomics" className="hover:text-omo-gold transition-colors">Tokenomics</Link>
        <Link href="#chart"      className="hover:text-omo-gold transition-colors">Chart</Link>
        <Link href="#gallery"    className="hover:text-omo-gold transition-colors">Gallery</Link>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleCopy}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors"
          style={{ background: 'rgba(212,148,58,0.08)', border: '1px solid rgba(212,148,58,0.2)', color: '#D4943A' }}
        >
          {copied ? "Copied!" : "CA"}
          <Copy className="w-3 h-3" />
        </button>
        <a
          href="https://pump.fun/coin/ExKEYChkEYc9oJ92jHZyY2c4qP9Efe9AfiAZoGU8pump"
          target="_blank" rel="noreferrer"
          className="px-5 py-2 rounded-xl font-bold text-omo-bone shadow-lg transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #D4943A, #C0562A)', boxShadow: '0 4px 20px rgba(212,148,58,0.25)' }}
        >
          Buy $OMO
        </a>
      </div>
    </motion.nav>
  );
}
