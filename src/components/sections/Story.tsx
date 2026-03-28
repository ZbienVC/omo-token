"use client";

import { motion } from "framer-motion";
import { Droplet, Sparkles, Wind } from "lucide-react";

const STAGGER: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-40 px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-24">
        
        {/* Intro */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text text-white mb-6">
            The Last of His Kind
          </h2>
          <p className="text-lg md:text-2xl text-sky-100/80 font-medium max-w-2xl mx-auto leading-relaxed">
            In a world obsessed with copies, forks, and clones, OMO stands alone. He is the legend. The anomaly. The white giraffe.
          </p>
        </motion.div>

        {/* Narrative Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          
          {/* Card 1: Poaching to Survival */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="order-2 md:order-1 flex flex-col gap-4"
          >
            <div className="w-14 h-14 bg-omo-purple/20 border border-omo-purple/40 rounded-2xl flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(178,141,255,0.4)]">
              <Wind className="w-6 h-6 text-omo-purple" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              A True Survivor
            </h3>
            <p className="text-sky-100/60 leading-relaxed text-lg">
              Hunted for his rarity. Left behind by nature. But OMO didn't fade away. He transcended. From the African savanna to the blockchain, his spirit lives on.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 md:order-2 h-72 md:h-96 rounded-3xl glass-card overflow-hidden relative"
          >
            {/* Visual Placeholder for a mystical savannah scene */}
            <div className="absolute inset-0 bg-gradient-to-br from-omo-purple/30 to-omo-blue/10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547471080-7fc2caa01a73?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-40 grayscale" />
          </motion.div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-72 md:h-96 rounded-3xl glass-card overflow-hidden relative"
          >
            {/* Visual Placeholder for white giraffe / meme */}
            <div className="absolute inset-0 bg-gradient-to-tr from-omo-gold/20 to-omo-sky/10 mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-24 h-24 text-omo-gold/40 animate-pulse" />
            </div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574870111867-089730e5a72b?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-30 contrast-[1.2]" />
          </motion.div>

          {/* Card 2: Immortality */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="flex flex-col gap-4"
          >
            <div className="w-14 h-14 bg-omo-gold/20 border border-omo-gold/40 rounded-2xl flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(245,208,111,0.4)]">
              <Droplet className="w-6 h-6 text-omo-gold" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight glow-text-gold">
              Forever On-Chain
            </h3>
            <p className="text-sky-100/60 leading-relaxed text-lg">
              We immortalize what we refuse to lose. $OMO isn't just a ticker; it's a movement. The rarest asset on earth is now powered by the community. You found him.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
