"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FinalMoment() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-dark-plum">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/images/img9.jpg" 
          alt="Our final moment" 
          fill 
          className="object-cover mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-dark-plum/40 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-cream mb-6 drop-shadow-lg"
        >
          Happy Birthday.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className="text-cream/80 font-sans tracking-widest uppercase text-sm"
        >
          I love you.
        </motion.p>
      </div>
    </section>
  );
}
