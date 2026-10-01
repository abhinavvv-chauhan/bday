"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden bg-rose/10">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="/images/img8.jpg" alt="Background Texture" fill className="object-cover blur-md" />
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer group flex flex-col items-center"
              onClick={() => setIsOpen(true)}
            >
              <div className="w-64 h-48 bg-white shadow-xl flex items-center justify-center rounded-sm border border-rose/20 transition-transform duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                {/* Envelope flap aesthetic */}
                <div className="absolute top-0 w-full h-1/2 bg-cream border-b border-rose/20 transform origin-top rotate-0"></div>
                <div className="absolute top-0 w-0 h-0 border-l-[128px] border-l-transparent border-r-[128px] border-r-transparent border-t-[96px] border-t-rose/10 z-10"></div>
                <div className="z-20 flex flex-col items-center gap-3">
                  <Heart className="w-8 h-8 text-rose drop-shadow-md animate-pulse" fill="currentColor" />
                  <span className="font-serif text-dark-plum/70 italic text-sm">Tap to open</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-cream p-8 md:p-14 shadow-2xl rounded-sm border border-warm-brown/10 w-full relative"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply"></div>
              <h2 className="text-3xl font-serif text-dark-plum mb-8">My dearest,</h2>
              <div className="space-y-6 font-serif text-warm-brown leading-relaxed text-lg relative z-10">
                <p>
                  Today is all about you. I wanted to make something that feels as special as you make me feel every single day.
                </p>
                <p>
                  You are the most beautiful part of my life. Your smile, your warmth, and the way you look at the world—it all makes me fall in love with you over and over again.
                </p>
                <p>
                  Thank you for being my safe place, my biggest adventure, and my best friend. I can't wait to see what this next year brings for you, and I promise to be by your side for every moment of it.
                </p>
                <p className="pt-4 font-italic">
                  Happy Birthday. I love you endlessly.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
