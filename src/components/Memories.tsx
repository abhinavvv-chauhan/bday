"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/img2.jpg", caption: "A moment I never want to forget.", rotate: "-2deg", accent: "#E6B0AA" },
  { src: "/images/img3.jpg", caption: "Still my favorite view.", rotate: "1.5deg", accent: "#E8DAEF" },
  { src: "/images/img4.jpg", caption: "One of my absolute favorites.", rotate: "-1deg", accent: "#FDEBD0" },
  { src: "/images/img5.jpg", caption: "And somehow, everything feels better with you.", rotate: "2deg", accent: "#F9EBEA" },
  { src: "/images/img8.jpg", caption: "Every moment with you is a gift.", rotate: "-1.5deg", accent: "#E6B0AA" },
];

function PhotoCard({ photo, index }: { photo: typeof photos[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -3 : 3]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: index * 0.08 }}
      style={{ rotate }}
      className="group"
    >
      {/* Polaroid frame */}
      <motion.div
        style={{
          y,
          rotate: photo.rotate,
          boxShadow: `0 20px 60px rgba(44,26,29,0.15), 0 4px 20px rgba(44,26,29,0.1)`,
        }}
        whileHover={{ scale: 1.03, zIndex: 10 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white p-3 pb-10 shadow-2xl relative cursor-pointer"
      >
        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm pointer-events-none"
          style={{ boxShadow: `0 0 40px ${photo.accent}80` }}
        />

        {/* Photo */}
        <div className="relative overflow-hidden bg-blush" style={{ minHeight: 200 }}>
          <Image
            src={photo.src}
            alt={photo.caption}
            width={400}
            height={500}
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          />
          {/* Film grain overlay */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
        </div>

        {/* Caption */}
        <p className="mt-3 text-center font-serif text-warm-brown/70 text-xs md:text-sm italic leading-snug px-1">
          {photo.caption}
        </p>

        {/* Corner dot accent */}
        <div
          className="absolute bottom-3 right-3 w-2 h-2 rounded-full opacity-60"
          style={{ background: photo.accent }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Memories() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-cream">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8DAEF, transparent)" }} />
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #FDEBD0, transparent)" }} />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14 md:mb-20 px-6"
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs tracking-[0.3em] uppercase text-warm-brown/50 font-sans block mb-4"
        >
          A collection of us
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-serif text-dark-plum">
          Little Moments
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 w-16 h-px bg-gradient-to-r from-transparent via-rose to-transparent mx-auto origin-center"
        />
        <p className="mt-5 text-warm-brown/70 font-sans text-sm md:text-base max-w-sm mx-auto leading-relaxed">
          And somehow, everything feels better with you.
        </p>
      </motion.div>

      {/* Mobile: vertical stacked polaroids */}
      <div className="flex flex-col items-center gap-12 px-8 md:hidden">
        {photos.map((photo, i) => (
          <PhotoCard key={i} photo={photo} index={i} />
        ))}
      </div>

      {/* Desktop: editorial masonry */}
      <div className="hidden md:grid grid-cols-3 gap-x-10 gap-y-16 max-w-5xl mx-auto px-10 items-start">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={i === 1 ? "mt-16" : i === 3 ? "mt-8" : i === 2 ? "col-start-2 -mt-8" : ""}
          >
            <PhotoCard photo={photo} index={i} />
          </div>
        ))}
      </div>

      {/* Decorative text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="text-center mt-16 md:mt-20 font-serif italic text-warm-brown/40 text-xl md:text-2xl"
      >
        "you're my favorite person"
      </motion.p>
    </section>
  );
}
