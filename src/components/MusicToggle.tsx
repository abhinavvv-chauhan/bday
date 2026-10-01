"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Music3 } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We don't have a music file yet, but this structure allows it to be added easily later
    audioRef.current = new Audio("/audio/romantic.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Catch potential autoplay restrictions
      audioRef.current.play().catch((e) => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div 
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <button
        onClick={togglePlay}
        className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/50 flex items-center justify-center transition-all hover:bg-white/50 hover:scale-110 active:scale-95"
        aria-label="Toggle music"
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Music3 className="w-5 h-5 text-dark-plum" />
            <motion.div 
              className="absolute -top-1 -right-1 w-2 h-2 bg-rose rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        ) : (
          <Music className="w-5 h-5 text-dark-plum/70" />
        )}
      </button>
    </motion.div>
  );
}
