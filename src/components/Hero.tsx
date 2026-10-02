"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Floating particles data - stable references
const PARTICLES = [
  { id: 0, x: "8%",  y: "15%", size: 4,  delay: 0,   duration: 6,   opacity: 0.6 },
  { id: 1, x: "85%", y: "22%", size: 3,  delay: 1.2, duration: 8,   opacity: 0.45 },
  { id: 2, x: "20%", y: "75%", size: 5,  delay: 0.5, duration: 7,   opacity: 0.5 },
  { id: 3, x: "70%", y: "60%", size: 3,  delay: 2,   duration: 9,   opacity: 0.4 },
  { id: 4, x: "50%", y: "88%", size: 4,  delay: 1.5, duration: 6.5, opacity: 0.55 },
  { id: 5, x: "35%", y: "40%", size: 2,  delay: 0.8, duration: 10,  opacity: 0.35 },
  { id: 6, x: "92%", y: "80%", size: 6,  delay: 3,   duration: 7.5, opacity: 0.5 },
  { id: 7, x: "12%", y: "50%", size: 3,  delay: 2.5, duration: 8.5, opacity: 0.4 },
  { id: 8, x: "60%", y: "12%", size: 4,  delay: 1,   duration: 6,   opacity: 0.6 },
  { id: 9, x: "78%", y: "42%", size: 2,  delay: 3.5, duration: 9,   opacity: 0.35 },
];

// Falling petals
const PETALS = [
  { id: 0, x: "5%",  delay: 0,   duration: 12, size: 14 },
  { id: 1, x: "25%", delay: 2.5, duration: 15, size: 10 },
  { id: 2, x: "45%", delay: 5,   duration: 11, size: 16 },
  { id: 3, x: "65%", delay: 1,   duration: 14, size: 12 },
  { id: 4, x: "82%", delay: 3.5, duration: 13, size: 10 },
  { id: 5, x: "15%", delay: 7,   duration: 12, size: 13 },
  { id: 6, x: "55%", delay: 9,   duration: 16, size: 11 },
  { id: 7, x: "90%", delay: 6,   duration: 11, size: 15 },
];

const PHRASES = ["Today isn't just another day…", "This one is for you."];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const imageY = useTransform(scrollY, [0, 600], [0, 120]);
  const contentY = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Cycle intro phrases
  useEffect(() => {
    if (phraseIndex >= PHRASES.length - 1) return;
    const t = setTimeout(() => setPhraseIndex(i => i + 1), 2200);
    return () => clearTimeout(t);
  }, [phraseIndex]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden film-grain"
    >
      {/* ── Parallax Hero Image ── */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 z-0 scale-110"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full h-full"
        >
          <Image
            src="/images/img1.jpg"
            alt="Our favorite moment"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </motion.div>

      {/* ── Layered gradient overlays ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark-plum/30 via-transparent to-dark-plum/70" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-dark-plum/80 via-transparent to-transparent" />

      {/* ── Animated floating particles ── */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full z-[2] pointer-events-none"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, #F9EBEA, #E6B0AA)",
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, 6, 0],
            scale: [1, 1.4, 1],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Falling petals ── */}
      {PETALS.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute z-[2] pointer-events-none text-rose/40"
          style={{ left: petal.x, top: -30, fontSize: petal.size }}
          animate={{
            y: ["0px", "110vh"],
            x: [0, 40, -20, 30, 0],
            rotate: [0, 180, 360, 540, 720],
            opacity: [0, 0.6, 0.6, 0.3, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ✿
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl w-full"
      >
        {/* Animated phrase switcher */}
        <div className="mb-5 h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.7 }}
              className="text-xs md:text-sm tracking-[0.25em] uppercase text-cream/70 font-sans"
            >
              {PHRASES[phraseIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Title — staggered letter reveal */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.06, delayChildren: 1.8 } },
          }}
          className="overflow-visible"
        >
          <div className="flex flex-wrap justify-center">
            {["Happy Birthday,"].map((word, wi) => (
              <div key={wi} className="flex mr-3">
                {word.split("").map((char, ci) => (
                  <motion.span
                    key={ci}
                    variants={{
                      hidden: { opacity: 0, y: 40, rotateX: -90 },
                      visible: { opacity: 1, y: 0, rotateX: 0 },
                    }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="inline-block text-4xl sm:text-5xl md:text-7xl font-serif text-cream leading-tight"
                    style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-1">
            {["My Love ♡"].map((word, wi) => (
              <div key={wi} className="flex mr-3">
                {word.split("").map((char, ci) => (
                  <motion.span
                    key={ci}
                    variants={{
                      hidden: { opacity: 0, y: 40, rotateX: -90 },
                      visible: { opacity: 1, y: 0, rotateX: 0 },
                    }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="inline-block text-4xl sm:text-5xl md:text-7xl font-serif leading-tight shimmer-text"
                    style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 3.2, ease: "easeInOut" }}
          className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-rose to-transparent origin-center"
        />

        {/* Scroll CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-3 cursor-pointer ripple-btn px-6 py-3 rounded-full"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-cream/60 font-sans">
            Open your little surprise
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full border border-cream/30 flex items-center justify-center"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 2v8M3 7l3 3 3-3" stroke="rgba(253,251,247,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Vignette corners ── */}
      <div className="absolute inset-0 z-[3] pointer-events-none shadow-[inset_0_0_120px_rgba(44,26,29,0.4)]" />
    </section>
  );
}
