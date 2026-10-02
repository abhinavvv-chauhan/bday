"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div 
      className="z-[9999] bg-transparent pointer-events-none"
      style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", zIndex: 9999 }}
    >
      <motion.div
        className="h-full origin-left"
        style={{
          width,
          background: "linear-gradient(90deg, #E8DAEF, #E6B0AA, #C0717A)",
          boxShadow: "0 0 8px rgba(192,113,122,0.6)",
        }}
      />
    </div>
  );
}
