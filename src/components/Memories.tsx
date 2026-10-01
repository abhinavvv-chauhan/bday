"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Memories() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden bg-cream">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-20"
      >
        <div className="text-center mb-10">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-dark-plum mb-4">
            Little Moments
          </motion.h2>
          <motion.p variants={itemVariants} className="text-warm-brown/80 font-sans text-sm md:text-base">
            And somehow, everything feels better with you.
          </motion.p>
        </div>

        {/* Collage Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 items-start">
          
          <motion.div variants={itemVariants} className="relative w-full md:mt-24">
            <div className="absolute inset-0 bg-rose/20 rounded-2xl transform rotate-3 translate-x-4 translate-y-4"></div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl glass">
              <Image src="/images/img2.jpg" alt="Memory" width={800} height={1000} className="w-full h-auto object-contain" />
            </div>
            <p className="absolute -bottom-8 right-0 text-sm font-serif italic text-warm-brown">A moment I never want to forget.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative w-full md:w-5/6 justify-self-center md:justify-self-end">
             <div className="absolute inset-0 bg-lavender/30 rounded-xl blur-3xl transform -translate-x-10 translate-y-10"></div>
             <div className="relative w-full rounded-xl overflow-hidden shadow-xl border-4 border-cream">
               <Image src="/images/img3.jpg" alt="Memory" width={800} height={1000} className="w-full h-auto object-contain" />
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative w-[90%] md:w-[80%] justify-self-center">
            <div className="p-4 bg-white shadow-xl rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
              <div className="relative w-full mb-4 overflow-hidden rounded-sm border border-black/5">
                <Image src="/images/img4.jpg" alt="Memory" width={800} height={1000} className="w-full h-auto object-contain" />
              </div>
              <p className="font-serif text-center text-dark-plum/80">One of my favorite memories.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative w-full md:-mt-32">
            <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-white/40">
              <Image src="/images/img5.jpg" alt="Memory" width={800} height={1000} className="w-full h-auto object-contain" />
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
}
