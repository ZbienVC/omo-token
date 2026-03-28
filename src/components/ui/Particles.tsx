"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Particles() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; s: number; d: number; warm: boolean }[]>([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push({ id: i, x: Math.random() * 100, y: Math.random() * 100, s: Math.random() * 3 + 1, d: Math.random() * 20 + 12, warm: Math.random() > 0.5 });
    }
    setParticles(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.s, height: p.s,
            left: `${p.x}vw`, top: `${p.y}vh`,
            background: p.warm ? '#D4943A' : '#C0562A',
            boxShadow: `0 0 ${p.s * 2}px ${p.warm ? 'rgba(212,148,58,0.9)' : 'rgba(192,86,42,0.9)'}`,
          }}
          animate={{ y: ["-15vh", "15vh"], opacity: [0, 0.9, 0] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "linear", times: [0, 0.5, 1] }}
        />
      ))}
      {/* Ambient Tarangire sunset glows */}
      <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-omo-gold/15 rounded-full blur-[100px]" />
      <div className="absolute top-[40%] right-[10%] w-80 h-80 bg-omo-sunset/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-[15%] left-[40%] w-64 h-64 bg-omo-earth/15 rounded-full blur-[80px]" />
    </div>
  );
}
