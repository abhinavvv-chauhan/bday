"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

const letterLines = [
  "Today is all about you.",
  "I wanted to make something that feels as special as you make me feel every single day.",
  "You are the most beautiful part of my life. Your smile, your warmth, the way you look at the world — it all makes me fall in love with you over and over again.",
  "Thank you for being my safe place, my biggest adventure, and my best friend.",
  "I can't wait to see what this next year brings for you, and I promise to be right there beside you for every moment of it.",
  "Happy Birthday. I love you endlessly. ♡",
];

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Blurred background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img8.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark-plum/60 backdrop-blur-sm" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-plum/50 via-transparent to-dark-plum/50" />
      </div>

      {/* Floating hearts background */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose/20 pointer-events-none select-none z-[1]"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 25}%`,
            fontSize: `${14 + (i % 4) * 6}px`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.35, 0.15],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + i * 0.7,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ♡
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-lg mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs tracking-[0.3em] uppercase text-cream/50 font-sans mb-8"
        >
          A letter for you
        </motion.p>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* ── Envelope ── */
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 1.05,
                y: -40,
                transition: { duration: 0.5, ease: "easeIn" },
              }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-72 md:w-80"
                style={{
                  filter: "drop-shadow(0 30px 60px rgba(192,113,122,0.3))",
                }}
              >
                {/* Envelope body */}
                <div className="relative w-full bg-cream rounded-b-lg overflow-hidden"
                  style={{ paddingTop: "60%", boxShadow: "0 20px 60px rgba(44,26,29,0.3)" }}>
                  
                  {/* Flap triangle */}
                  <div className="absolute top-0 left-0 right-0 h-0 border-l-[144px] border-l-cream border-r-[144px] border-r-cream border-t-[80px] border-t-blush md:border-l-[160px] md:border-r-[160px] md:border-t-[88px]" style={{ borderLeftColor: "#F9EBEA", borderRightColor: "#F9EBEA", borderTopColor: "#E8DAEF" }}/>
                  
                  {/* Bottom triangles for envelope look */}
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[70px] border-l-[140px] border-b-blush border-l-transparent md:border-b-[80px] md:border-l-[160px]" style={{ borderBottomColor: "#F5EEF8" }}/>
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[70px] border-r-[140px] border-b-blush border-r-transparent md:border-b-[80px] md:border-r-[160px]" style={{ borderBottomColor: "#F5EEF8" }}/>

                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pt-6">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1], opacity: [0.9, 1, 0.9] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Heart className="w-9 h-9 text-rose-deep" fill="currentColor" />
                    </motion.div>
                    <span className="font-serif italic text-warm-brown/70 text-sm">Tap to open</span>
                  </div>
                </div>
              </motion.div>

              {/* Hint */}
              <motion.p
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mt-6 text-cream/50 font-sans text-xs tracking-widest"
              >
                ✦ a little something for you ✦
              </motion.p>
            </motion.div>
          ) : (
            /* ── Letter ── */
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="relative rounded-sm overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #FDFBF7 0%, #F9EBEA 100%)",
                boxShadow: "0 30px 80px rgba(44,26,29,0.35), 0 0 0 1px rgba(230,176,170,0.3)",
              }}
            >
              {/* Paper texture line decorations */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #6B4B4B 27px, #6B4B4B 28px)",
                  backgroundPositionY: "40px",
                }}>
              </div>

              {/* Red left margin line */}
              <div className="absolute top-0 bottom-0 left-14 w-px bg-rose/30 pointer-events-none" />

              <div className="p-8 md:p-12 pl-16 md:pl-20">
                {/* Greeting */}
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-2xl md:text-3xl font-serif text-dark-plum mb-7"
                >
                  My dearest,
                </motion.h2>

                {/* Staggered lines */}
                <div className="space-y-5">
                  {letterLines.map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.18, duration: 0.6, ease: "easeOut" }}
                      className={`font-serif text-warm-brown/85 leading-relaxed text-sm md:text-base ${
                        i === letterLines.length - 1 ? "text-rose-deep font-medium mt-2" : ""
                      }`}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>

                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="mt-8 flex items-center gap-2"
                >
                  <span className="font-serif italic text-warm-brown/60 text-sm">— with all my love</span>
                  <motion.button
                    onClick={() => setHeartClicked(c => !c)}
                    className="text-xl relative ripple-btn"
                    animate={heartClicked ? { scale: [1, 1.4, 1] } : {}}
                    transition={{ duration: 0.4 }}
                    aria-label="Send love"
                  >
                    <motion.span
                      animate={heartClicked
                        ? { color: ["#C0717A", "#E6B0AA", "#C0717A"] }
                        : { color: "#C0717A" }
                      }
                    >
                      ♡
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Top wax seal decoration */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
                className="absolute -top-3 right-8 w-8 h-8 rounded-full flex items-center justify-center text-cream text-xs font-serif shadow-lg"
                style={{ background: "linear-gradient(135deg, #C0717A, #E6B0AA)" }}
              >
                ♡
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
