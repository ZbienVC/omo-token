"use client";

import { motion } from "framer-motion";

export default function Chart() {
  return (
    <section id="chart" className="py-24 px-4 md:px-8 relative z-10 bg-black/10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] text-white glow-text mb-6"
        >
          The Market
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sky-100/70 font-medium mb-12 max-w-2xl mx-auto"
        >
          Track $OMO live. One of one, forever on chain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full h-[600px] rounded-3xl glass-card overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(110,193,255,0.15)] relative"
        >
          <style>{`
            #dexscreener-embed {
              position: relative;
              width: 100%;
              padding-bottom: 125%;
            }
            @media (min-width: 1400px) {
              #dexscreener-embed {
                padding-bottom: 65%;
              }
            }
            #dexscreener-embed iframe {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              border: 0;
            }
          `}</style>
          <div id="dexscreener-embed" className="w-full h-full">
            <iframe 
              src="https://dexscreener.com/solana/65fgf5zbssh63dhk9dfk5arpgme88a3zzq6cwhdpdejo?embed=1&theme=dark&trades=0&info=0"
              title="OMO DexScreener Chart"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <a 
            href="https://dexscreener.com/solana/65fgf5zbssh63dhk9dfk5arpgme88a3zzq6cwhdpdejo" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            View Full Chart on DexScreener ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}