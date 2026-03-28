"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

const IMAGES = [
  {
    src: "/omo-2.jpg",
    label: "Omo — The White One",
    caption: "First photographed in January 2015 in Tarangire National Park. Leucistic, not albino — her dark eyes give her away.",
  },
  {
    src: "/omo-3.jpg",
    label: "One of One",
    caption: "Omo beside a normal giraffe. The contrast is impossible to miss — ghostly white against rich brown.",
  },
  {
    src: "/omo-4.jpg",
    label: "Guarded Day & Night",
    caption: "Omo is believed to be the only white giraffe left on Earth, watched around the clock to stay safe in the wild.",
  },
  {
    src: "/omo-5.jpg",
    label: "The Last One",
    caption: "The rarest photograph in the world. Omo — the only white giraffe on earth.",
  },
  {
    src: "/omo-6.jpg",
    label: "Newsweek · 2025",
    caption: "Omo continues to survive in the wild, becoming a global symbol of rarity and resilience.",
  },
  {
    src: "/omo-7.jpg",
    label: "Apart From the Herd",
    caption: "Standing apart from the crowd since 2015. Just like $OMO.",
  },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-24 px-4 md:px-8 relative z-10 overflow-hidden"
      style={{ background: 'rgba(10,8,4,0.4)' }}>
      <div className="max-w-7xl mx-auto mb-10 flex items-end justify-between">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-3"
            style={{ color: '#FDFAF3' }}
          >
            The Archive
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm font-medium"
            style={{ color: 'rgba(253,250,243,0.45)' }}
          >
            Real photographs of Omo. Tarangire, Tanzania.
          </motion.p>
        </div>
        <div className="hidden md:flex gap-3">
          <button onClick={() => scroll(-1)} className="w-11 h-11 rounded-full flex items-center justify-center rotate-180 transition-all hover:scale-110"
            style={{ border: '1px solid rgba(212,148,58,0.25)', background: 'rgba(212,148,58,0.06)', color: '#D4943A' }}>
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => scroll(1)} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ border: '1px solid rgba(212,148,58,0.25)', background: 'rgba(212,148,58,0.06)', color: '#D4943A' }}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="max-w-7xl mx-auto flex gap-5 overflow-x-auto snap-x snap-mandatory py-4"
        style={{ scrollbarWidth: 'none' }}>
        {IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative shrink-0 snap-center rounded-3xl overflow-hidden group"
            style={{ width: 320, height: 420, border: '1px solid rgba(212,148,58,0.15)' }}
          >
            <img
              src={img.src}
              alt={img.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-bold text-sm mb-1.5" style={{ color: '#D4943A' }}>{img.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(253,250,243,0.7)' }}>{img.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
