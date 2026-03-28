"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1547471080-7fc2caa01a73?auto=format&fit=crop&w=800&q=80",
    label: "Tarangire Plains",
    caption: "Omo's home. The dry savannah of Tarangire National Park.",
  },
  {
    src: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80",
    label: "The Lone Giraffe",
    caption: "A Masai giraffe — the same species as Omo — surveys the acacia landscape.",
  },
  {
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    label: "African Sunset",
    caption: "Tarangire skies. The backdrop of Omo's world.",
  },
  {
    src: "https://images.unsplash.com/photo-1612175593685-5f70dd4a93cf?auto=format&fit=crop&w=800&q=80",
    label: "One of One",
    caption: "Leucism — no pigment, dark eyes. This is Omo.",
  },
  {
    src: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
    label: "Wild & Free",
    caption: "The acacia woodlands of East Africa. Omo roams here.",
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs mt-2 italic"
            style={{ color: 'rgba(253,250,243,0.25)' }}
          >
            Add real Omo photos by placing images in the <code className="font-mono">/public</code> folder after deployment.
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
