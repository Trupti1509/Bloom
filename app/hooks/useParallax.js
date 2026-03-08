"use client";

import { useEffect, useState } from "react";

export default function useParallax() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleOrientation(e) {
      const x = (e.gamma || 0) / 10;
      const y = (e.beta || 0) / 20;
      setTilt({ x, y });
    }

    function handleMouseMove(e) {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const x = ((e.clientX - cx) / cx) * 4;
      const y = ((e.clientY - cy) / cy) * 2;
      setTilt({ x, y });
    }

    window.addEventListener("deviceorientation", handleOrientation);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return tilt;
}
