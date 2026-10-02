"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const STARS = [
  { x: "12%", y: "20%", size: 4, delay: 0 },
  { x: "80%", y: "15%", size: 3, delay: 0.5 },
  { x: "55%", y: "30%", size: 5, delay: 1 },
  { x: "25%", y: "65%", size: 3, delay: 0.3 },
  { x: "70%", y: "70%", size: 4, delay: 0.8 },
  { x: "40%", y: "85%", size: 3, delay: 1.2 },
  { x: "88%", y: "50%", size: 4, delay: 0.6 },
  { x: "8%",  y: "80%", size: 3, delay: 1.5 },
  { x: "62%", y: "10%", size: 5, delay: 0.2 },
  { x: "33%", y: "42%", size: 3, delay: 0.9 },
];

export default function FinalMoment() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.7, 0.7, 0.4]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#1A0F12" }}
    >
      {/* Parallax background photo */}
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/img9.jpg"
          alt="Happy Birthday"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Multi-layer gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#1A0F12] via-[#1A0F12]/60 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#1A0F12]/70 to-transparent opacity-70" />

      {/* Animated stars */}
      {STARS.map((star, i) => (
        <motion.div
          key={i}
          className="absolute z-[2] rounded-full pointer-events-none"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            background: "white",
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 2.5 + i * 0.3,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Soft glow orb */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-[2] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #E6B0AA40, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(20px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
        {/* Small tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.35em] uppercase text-rose/60 font-sans mb-8"
        >
          for you, always
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl md:text-7xl font-serif text-cream leading-tight mb-4"
          style={{ textShadow: "0 4px 40px rgba(230,176,170,0.4)" }}
        >
          Happy Birthday.
        </motion.h2>

        {/* Divider with heart */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-3 my-7"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose/50" />
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-rose text-lg"
          >
            ♡
          </motion.span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-cream/60 font-serif italic text-lg md:text-xl leading-relaxed"
        >
          You are loved more than words can say.
        </motion.p>

        {/* Final note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-8 text-rose/80 font-sans tracking-[0.2em] uppercase text-xs"
        >
          I love you. ✦
        </motion.p>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 z-[1] pointer-events-none shadow-[inset_0_0_100px_rgba(26,15,18,0.7)]" />
    </section>
  );
}
