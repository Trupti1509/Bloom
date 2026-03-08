"use client";

import { motion } from "framer-motion";

export default function BloomGirl() {
  return (
    <motion.div
      className="girlWrapper"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <svg viewBox="0 0 200 300" className="girlSVG" aria-hidden="true">
        <path
          d="M40 70 C20 120 20 200 80 220 C140 230 170 170 150 100 C140 40 80 30 40 70"
          fill="#2c1a15"
        />
        <circle cx="100" cy="90" r="35" fill="#f7d7c4" />
        <circle cx="85" cy="90" r="3" />
        <circle cx="115" cy="90" r="3" />
        <path d="M85 105 Q100 115 115 105" stroke="#7a3a3a" strokeWidth="2" fill="none" />
        <path d="M70 120 L130 120 L150 240 L50 240 Z" fill="#ff6fa5" />
        <rect x="60" y="130" width="20" height="70" fill="#f7d7c4" />
        <rect x="120" y="130" width="20" height="70" fill="#f7d7c4" />
      </svg>
    </motion.div>
  );
}
