"use client";

import { Send, Hash } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080d1a] relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-gradient-to-t from-omo-blue/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-fredoka)] glow-text">
            OMO
          </h2>
          <p className="text-sky-200/70 text-sm max-w-sm text-center md:text-left">
            The last of his kind. A symbol of rarity. OMO is watching.
          </p>
          <div className="text-xs font-mono bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-omo-gold/80 mt-2">
            ExKEYChkEYc9oJ92jHZyY2c4qP9Efe9AfiAZoGU8pump
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://x.com/OmoTokenSol" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-omo-blue transition-colors border border-white/5">
            <Hash className="w-5 h-5" />
          </a>
          <a href="https://t.me/OmoTokenPortal" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-omo-blue transition-colors border border-white/5">
            <Send className="w-5 h-5" />
          </a>
        </div>

      </div>
      <div className="text-center py-6 text-xs text-white/30 border-t border-white/5">
        <p>© {new Date().getFullYear()} OMO Token. One of one. Forever.</p>
      </div>
    </footer>
  );
}
