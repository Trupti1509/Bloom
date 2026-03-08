"use client";

import { motion } from "framer-motion";

export default function PetalExplosion() {
  const petals = [...Array(20)];

  return (
    <div className="petalExplosion" aria-hidden="true">
      {petals.map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const x = Math.cos(angle) * 200;
        const y = Math.sin(angle) * 200;

        return (
          <motion.div
            key={i}
            className="petal"
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
            animate={{ x, y, opacity: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}
