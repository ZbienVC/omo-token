"use client";

import { motion } from "framer-motion";
import { Sparkles, Eye, Crown, Target } from "lucide-react";
import Link from "next/link";

export default function Narrative() {
  const points = [
    {
      icon: <Crown className="w-5 h-5 text-omo-gold" />,
      title: "Not Just a Coin",
      text: "It's a symbol of absolute rarity. Why buy dogs or frogs when you can own the rarest creature on earth?"
    },
    {
      icon: <Target className="w-5 h-5 text-omo-sunset" />,
      title: "Cultural Hook",
      text: "Omo broke the internet. Now $OMO breaks the charts. The meme potential is infinite."
    },
    {
      icon: <Eye className="w-5 h-5 text-omo-blue" />,
      title: "The World is Watching",
      text: "From viral sensation to the last surviving icon. He stands tall, and so do his holders."
    },
  ];

  return (
    <section id="why" className="py-24 md:py-40 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border"
          style={{ borderColor: 'rgba(212,148,58,0.15)' }}
        >
          <img src="/omo-3.jpg" alt="Omo the white giraffe" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,18,8,0.85) 0%, rgba(26,18,8,0.3) 60%, transparent 100%)' }} />
          <div className="absolute bottom-8 left-8 right-8 text-left">
            <p className="text-xl md:text-2xl font-bold leading-snug drop-shadow-lg" style={{ color: '#FDFAF3' }}>
              "There are billions of dogs. There is only one OMO."
            </p>
          </div>
        </motion.div>

        {/* Content Side */}
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] text-white mb-4 glow-text">
              Why $OMO?
            </h2>
            <p className="text-lg text-sky-100/70 leading-relaxed font-medium">
              We're tired of the same metas. It's time for something that actually stands out. The white giraffe is the ultimate flex.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            {points.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1 shadow-lg backdrop-blur-sm">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sky-100/60 leading-relaxed font-medium">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


