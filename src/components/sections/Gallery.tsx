"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

// Using Unsplash Source API — these query for specific subjects and always return relevant images
const IMAGES = [
  {
    src: "https://source.unsplash.com/800x600/?giraffe,white,africa",
    label: "Omo — The White One",
    caption: "A leucistic giraffe like Omo — pale coat, dark eyes. One of one in Tarangire.",
  },
  {
    src: "https://source.unsplash.com/800x600/?giraffe,masai,tanzania",
    label: "Masai Giraffe",
    caption: "Omo's species — the Masai giraffe of Tanzania's Tarangire National Park.",
  },
  {
    src: "https://source.unsplash.com/800x600/?giraffe,savannah,tarangire",
    label: "Walking the Plains",
    caption: "First spotted January 2015. Tarangire, Tanzania — Omo's home.",
  },
  {
    src: "https://source.unsplash.com/800x600/?giraffe,acacia,kenya",
    label: "Among the Acacias",
    caption: "She travels with her herd. They don't treat her differently.",
  },
  {
    src: "https://source.unsplash.com/800x600/?giraffe,africa,sunset",
    label: "Golden Hour",
    caption: "As rare as the light. As rare as Omo.",
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
            Proof of existence. Tarangire, Tanzania.
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
            style={{ width: 320, height: 420, border: '1px solid rgba(212,148,58,0.1)' }}
          >
            <img
              src={img.src}
              alt={img.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-bold text-sm mb-1" style={{ color: '#D4943A' }}>{img.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(253,250,243,0.7)' }}>{img.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
