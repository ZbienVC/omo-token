"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, Maximize } from "lucide-react";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1547471080-7fc2caa01a73?auto=format&fit=crop&q=80&w=800", // Savannah
    "https://images.unsplash.com/photo-1574870111867-089730e5a72b?auto=format&fit=crop&q=80&w=800", // Giraffe close up
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800", // Magical lighting
    "https://images.unsplash.com/photo-1550742517-5e16279f0412?auto=format&fit=crop&q=80&w=800", // Abstract nature
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };
  
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-24 px-4 md:px-8 relative z-10 bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 flex items-end justify-between">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] text-white glow-text mb-4"
          >
            The Archive
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sky-100/60 text-lg font-medium"
          >
            Proof of existence. Scroll to view.
          </motion.p>
        </div>
        
        <div className="hidden md:flex gap-4">
          <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors rotate-180 text-white">
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-3xl shrink-0 snap-center overflow-hidden group border border-white/10"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold tracking-widest text-sm uppercase font-[family-name:var(--font-inter)]">
                  Archive #{i + 1}
                </span>
                <Maximize className="w-5 h-5 text-omo-gold" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
