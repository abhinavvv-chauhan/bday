"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden film-grain">
      {/* Background soft gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose/20 via-cream to-cream/80 z-0" />
      
      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <Image 
          src="/images/img1.jpg" 
          alt="Our favorite moment" 
          fill
          className="object-cover object-center opacity-60 mix-blend-multiply"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm md:text-base tracking-[0.2em] uppercase text-warm-brown/80 mb-6 font-sans"
        >
          Today isn't just another day...
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-dark-plum leading-tight mb-8"
        >
          Happy Birthday,<br/>My Love
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 z-10 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs tracking-widest text-warm-brown uppercase">Open your little surprise</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-warm-brown/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
