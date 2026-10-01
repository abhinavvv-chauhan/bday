"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  { year: "The First Hello", title: "When everything changed", desc: "A simple hello that started it all." },
  { year: "The Little Moments", title: "Falling for you", desc: "Every coffee, every laugh, every late-night conversation.", image: "/images/img6.jpg" },
  { year: "One Beautiful Year", title: "Still my favorite person", desc: "365 days later, and I choose you over and over again.", image: "/images/img7.jpg" }
];

export default function Timeline() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-cream to-beige relative">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-center text-dark-plum mb-20"
        >
          Our Little Story
        </motion.h2>

        <div className="relative border-l border-rose/30 ml-4 md:ml-8 space-y-24">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute w-3 h-3 bg-rose rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(230,176,170,0.8)]" />
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <span className="text-sm font-sans tracking-widest uppercase text-warm-brown/60 mb-2 block">{event.year}</span>
                  <h3 className="text-2xl font-serif text-dark-plum mb-3">{event.title}</h3>
                  <p className="text-warm-brown/80 font-sans leading-relaxed">{event.desc}</p>
                </div>
                
                {event.image && (
                  <div className="flex-1 w-full md:w-auto relative aspect-video md:aspect-square rounded-xl overflow-hidden shadow-md">
                    <Image src={event.image} alt={event.title} fill className="object-cover transition-transform duration-1000 hover:scale-105" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
