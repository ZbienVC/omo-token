"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, Maximize } from "lucide-react";

export default function Gallery() {
  const images = [
    "https://i.natgeofe.com/n/6df5b9e8-7ba4-4c6e-821f-829d5b00c3b8/white-giraffe-kenya.jpg", // National Geographic Omo
    "https://media.npr.org/photos/2017/09/14/hcp-white-giraffes-1_custom-9c869e96e95143a91834272183c51ef67edaa1a7.jpg", // Omo and calf
    "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200310150937-01-white-giraffes-poached-kenya.jpg", // CNN report image
    "https://s.yimg.com/ny/api/res/1.2/aZpMInm2vN.2Oq378.O3oQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2020-03/79f5d370-639a-11ea-bfcf-22d717f692db", // Yahoo news image
    "https://ca-times.brightspotcdn.com/dims4/default/d817457/2147483647/strip/true/crop/1000x563+0+105/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd6%2Fa6%2F5c7cf99e4f58999335e2f758ba16%2Fla-1505342410-y95t2x7hhe-snap-image.jpg" // LA Times image
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
