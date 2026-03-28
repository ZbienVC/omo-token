"use client";

import { motion } from "framer-motion";
import { Droplet, MapPin, Wind } from "lucide-react";

const fade: any = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-40 px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-24">

        {/* Header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fade} className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-6" style={{ color: '#FDFAF3' }}>
            Her Story
          </h2>
          <p className="text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(212,148,58,0.9)' }}>
            "She is the only second record of a white giraffe in Tarangire over the past 20 years, among more than 3,000 giraffes." — Derek Lee, Wild Nature Institute
          </p>
        </motion.div>

        {/* Block 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="order-2 md:order-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(212,148,58,0.1)', border: '1px solid rgba(212,148,58,0.25)' }}>
                <MapPin className="w-5 h-5" style={{ color: '#D4943A' }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#D4943A' }}>Tarangire, Tanzania · 2015</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#FDFAF3' }}>
              First Spotted January 2015
            </h3>
            <p className="leading-relaxed text-lg" style={{ color: 'rgba(253,250,243,0.55)' }}>
              In the golden acacia woodlands of Tarangire National Park, Tanzania, wildlife biologist Derek Lee of the Wild Nature Institute first photographed Omo — a female Masai giraffe calf unlike any other. She was born with <strong style={{ color: '#D4943A' }}>leucism</strong>, a rare genetic condition that prevents skin cells from producing pigment.
            </p>
            <p className="leading-relaxed" style={{ color: 'rgba(253,250,243,0.45)' }}>
              A local lodge guide named her <strong style={{ color: '#D4943A' }}>Omo</strong> — after a popular Tanzanian detergent brand. The name stuck.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="order-1 md:order-2 h-80 md:h-[420px] rounded-3xl overflow-hidden relative"
            style={{ border: '1px solid rgba(212,148,58,0.12)' }}
          >
            <img src="/omo-7.jpg" alt="Tarangire savannah"
              className="absolute inset-0 w-full h-full object-cover grayscale" style={{ filter: 'grayscale(0.4) sepia(0.3)' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,18,8,0.8) 0%, rgba(212,148,58,0.1) 100%)' }} />
            <div className="absolute bottom-5 left-6">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(212,148,58,0.7)' }}>Tarangire National Park · Tanzania</p>
            </div>
          </motion.div>
        </div>

        {/* Block 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="h-80 md:h-[420px] rounded-3xl overflow-hidden relative"
            style={{ border: '1px solid rgba(212,148,58,0.12)' }}
          >
            <img src="/omo-4.jpg" alt="Masai giraffe"
              className="absolute inset-0 w-full h-full object-cover" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(212,148,58,0.15), transparent 60%)' }} />
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(192,86,42,0.1)', border: '1px solid rgba(192,86,42,0.25)' }}>
                <Wind className="w-5 h-5" style={{ color: '#C0562A' }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#C0562A' }}>The Science</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#FDFAF3' }}>
              Not Albino. Leucistic.
            </h3>
            <p className="leading-relaxed text-lg" style={{ color: 'rgba(253,250,243,0.55)' }}>
              Unlike albinism, leucism leaves her eyes dark and rich — framed by pale lashes. Her mane is faintly rusty, her tail has a black tuft, and the ghost of a giraffe's pattern still speckles her sides. She is pale but not invisible.
            </p>
            <p className="leading-relaxed" style={{ color: 'rgba(253,250,243,0.45)' }}>
              She lives among thousands of normal giraffes. They don't treat her differently. She travels with her herd, eats, walks the plains. She is <em>one of them</em> — just visually impossible to miss.
            </p>
          </motion.div>
        </div>

        {/* Block 3 — immortality */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}
          className="text-center px-6 py-12 rounded-3xl"
          style={{ background: 'rgba(212,148,58,0.05)', border: '1px solid rgba(212,148,58,0.15)' }}>
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: 'rgba(212,148,58,0.1)', border: '1px solid rgba(212,148,58,0.3)' }}>
            <Droplet className="w-6 h-6" style={{ color: '#D4943A' }} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#FDFAF3' }}>
            Forever On-Chain
          </h3>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(253,250,243,0.55)' }}>
            We immortalize what the world cannot afford to lose. $OMO is not just a token — it's a tribute to the most visually striking and statistically improbable creature alive. You found her. Now own a piece of the legend.
          </p>
        </motion.div>

      </div>
    </section>
  );
}







