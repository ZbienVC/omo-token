"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Particles() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; s: number; d: number }[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const arr = [];
      for (let i = 0; i < 40; i++) {
        arr.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          s: Math.random() * 4 + 1,
          d: Math.random() * 20 + 10,
        });
      }
      setParticles(arr);
    };
    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-omo-gold rounded-full"
          style={{
            width: p.s,
            height: p.s,
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            boxShadow: `0 0 ${p.s * 2}px rgba(245,208,111,0.8)`,
          }}
          animate={{
            y: ["-20vh", "20vh"],
            x: ["-5vw", "5vw"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.d,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 1],
          }}
        />
      ))}
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-omo-blue/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-omo-purple/20 rounded-full blur-[120px] animate-float" />
    </div>
  );
}
