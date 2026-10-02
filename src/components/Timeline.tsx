"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const events = [
  {
    tag: "The First Hello",
    title: "When everything changed",
    desc: "A simple hello that started it all. One ordinary moment that made everything extraordinary.",
    emoji: "✨",
    color: "#E6B0AA",
  },
  {
    tag: "The Little Moments",
    title: "Falling for you",
    desc: "Every coffee, every laugh, every late-night conversation. The kind of moments I'd replay over and over.",
    image: "/images/img6.jpg",
    emoji: "☕",
    color: "#FDEBD0",
  },
  {
    tag: "Adventures Together",
    title: "You made every day better",
    desc: "Whether it was something grand or just an evening walk — everything felt like an adventure with you.",
    image: "/images/img7.jpg",
    emoji: "🌅",
    color: "#E8DAEF",
  },
  {
    tag: "One Beautiful Year",
    title: "Still my favorite person",
    desc: "365 days later, and I choose you over and over again. Here's to many more.",
    emoji: "♡",
    color: "#C0717A",
  },
];

function TimelineNode({ event, index }: { event: typeof events[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const nodeScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const nodeGlow = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
      className="relative pl-10 md:pl-14"
    >
      {/* Timeline dot */}
      <motion.div
        style={{ scale: nodeScale }}
        className="absolute -left-[10px] top-1 flex items-center justify-center"
      >
        <motion.div
          className="w-5 h-5 rounded-full border-2 border-cream flex items-center justify-center text-xs"
          style={{ background: event.color, boxShadow: `0 0 0 4px ${event.color}33` }}
        >
        </motion.div>
      </motion.div>

      <div className={`flex flex-col gap-5 ${event.image ? "md:flex-row md:gap-8 md:items-start" : ""}`}>
        {/* Text block */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-base">{event.emoji}</span>
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-sans"
              style={{ color: event.color }}>
              {event.tag}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif text-dark-plum mb-2 leading-snug">{event.title}</h3>
          <p className="text-sm md:text-base text-warm-brown/75 font-sans leading-relaxed">{event.desc}</p>
        </div>

        {/* Image block */}
        {event.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="w-full md:w-52 flex-shrink-0 group"
          >
            <div className="bg-white p-2 shadow-xl"
              style={{ boxShadow: `0 12px 40px rgba(44,26,29,0.15)` }}>
              <div className="overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={360}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FDFBF7 0%, #F9EBEA22 50%, #FDFBF7 100%)" }}>
      
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #E6B0AA, transparent)" }} />
        <div className="absolute bottom-1/4 left-0 w-56 h-56 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #E8DAEF, transparent)" }} />
      </div>

      <div className="max-w-2xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-warm-brown/50 font-sans block mb-4">
            A year in the making
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark-plum">Our Little Story</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 w-16 h-px bg-gradient-to-r from-transparent via-rose to-transparent mx-auto origin-center"
          />
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative ml-2 md:ml-4">
          {/* Animated line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-rose/15">
            <motion.div
              className="w-full origin-top"
              style={{
                height: lineHeight,
                background: "linear-gradient(180deg, #E6B0AA, #C0717A, #E8DAEF)",
                boxShadow: "0 0 8px rgba(192, 113, 122, 0.4)",
              }}
            />
          </div>

          {/* Events */}
          <div className="space-y-16 md:space-y-20">
            {events.map((event, i) => (
              <TimelineNode key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
