"use client";

import { useEffect, useRef, useCallback } from "react";

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

/**
 * Parse a hex color string to { r, g, b }.
 */
function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

/**
 * Derive 4 bokeh tint variants from a base theme color.
 * Each variant shifts hue/lightness slightly and uses low opacity.
 */
function deriveBokehColors(themeColor) {
  const { r, g, b } = hexToRgb(themeColor);

  return [
    { r, g, b },
    {
      r: Math.min(255, r + 40),
      g: Math.min(255, g + 20),
      b: Math.min(255, b + 60),
    },
    {
      r: Math.max(0, r - 30),
      g: Math.min(255, g + 50),
      b: Math.min(255, b + 30),
    },
    {
      r: Math.min(255, r + 60),
      g: Math.min(255, g + 60),
      b: Math.max(0, b - 20),
    },
  ];
}

function createBokeh(w, h, colors) {
  const c = colors[Math.floor(Math.random() * colors.length)];
  const opacity = randomBetween(0.04, 0.15);
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    radius: randomBetween(8, 45),
    dx: randomBetween(-0.3, 0.3),
    dy: randomBetween(-0.3, 0.3),
    color: c,
    opacity,
    fillStr: `rgba(${c.r},${c.g},${c.b},${opacity})`,
    shadowStr: `rgba(${c.r},${c.g},${c.b},${Math.min(1, opacity + 0.08)})`,
  };
}

export default function BokehCanvas({ themeColor = "#ff69b4" }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    sizeRef.current = { w, h, dpr };
  }, []);

  const initParticles = useCallback(() => {
    const { w, h } = sizeRef.current;
    const colors = deriveBokehColors(themeColor);
    const count = Math.floor(randomBetween(30, 40));
    particlesRef.current = [];
    for (let i = 0; i < count; i++) {
      particlesRef.current.push(createBokeh(w, h, colors));
    }
  }, [themeColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();
    initParticles();

    window.addEventListener("resize", handleResize);

    const ctx = canvas.getContext("2d");

    function loop() {
      animRef.current = requestAnimationFrame(loop);

      if (document.hidden) return;

      const { w, h, dpr } = sizeRef.current;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      for (const p of particlesRef.current) {
        p.x += p.dx;
        p.y += p.dy;

        /* wrap around edges */
        if (p.x < -p.radius * 2) p.x = w + p.radius * 2;
        if (p.x > w + p.radius * 2) p.x = -p.radius * 2;
        if (p.y < -p.radius * 2) p.y = h + p.radius * 2;
        if (p.y > h + p.radius * 2) p.y = -p.radius * 2;

        /* draw with shadow-based blur for soft glow */
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.closePath();

        ctx.shadowBlur = 12;
        ctx.shadowColor = p.shadowStr;
        ctx.fillStyle = p.fillStr;
        ctx.fill();
        ctx.restore();
      }
    }

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, initParticles]);

  /* reinit particles when themeColor changes */
  useEffect(() => {
    initParticles();
  }, [themeColor, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
