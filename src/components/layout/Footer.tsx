"use client";

import { Send, Hash } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden z-10" style={{ borderTop: '1px solid rgba(212,148,58,0.1)', background: '#120E07' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,148,58,0.06), transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">

        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-4xl font-bold font-[family-name:var(--font-fredoka)] glow-text" style={{ color: '#FDFAF3' }}>
            OMO
          </h2>
          <p className="text-sm max-w-sm text-center md:text-left font-medium" style={{ color: 'rgba(253,250,243,0.45)' }}>
            Roaming the acacia plains of Tarangire National Park, Tanzania since 2015.
            One of one. Forever.
          </p>
          <div className="text-xs font-mono px-4 py-2 rounded-xl mt-1 break-all md:break-normal" style={{ background: 'rgba(212,148,58,0.07)', border: '1px solid rgba(212,148,58,0.18)', color: '#D4943A' }}>
            ExKEYChkEYc9oJ92jHZyY2c4qP9Efe9AfiAZoGU8pump
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(253,250,243,0.3)' }}>Community</p>
          <div className="flex items-center gap-4">
            <a href="https://x.com/i/communities/2037566575344226673" target="_blank" rel="noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(212,148,58,0.08)', border: '1px solid rgba(212,148,58,0.2)', color: '#D4943A' }}>
              <Hash className="w-5 h-5" />
            </a>
            <a href="https://t.me/OmoTokenPortal" target="_blank" rel="noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(212,148,58,0.08)', border: '1px solid rgba(212,148,58,0.2)', color: '#D4943A' }}>
              <Send className="w-5 h-5" />
            </a>
          </div>
          <a href="https://dexscreener.com/solana/65fgf5zbssh63dhk9dfk5arpgme88a3zzq6cwhdpdejo"
            target="_blank" rel="noreferrer"
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all hover:opacity-80"
            style={{ background: 'rgba(192,86,42,0.12)', border: '1px solid rgba(192,86,42,0.25)', color: '#C0562A' }}>
            DexScreener ↗
          </a>
        </div>

      </div>

      <div className="text-center py-6 text-xs" style={{ borderTop: '1px solid rgba(212,148,58,0.07)', color: 'rgba(253,250,243,0.2)' }}>
        © {new Date().getFullYear()} $OMO — Tarangire, Tanzania. OMO is watching.
      </div>
    </footer>
  );
}
