"use client";

import { useEffect, useRef, useCallback, useState } from "react";

/**
 * useGyroParallax
 *
 * Returns { x, y } normalized to -1..+1 range.
 *
 * Mobile: deviceorientation (beta / gamma mapped to -1..+1)
 * Desktop: mousemove relative to window center
 *
 * Smoothed with lerp (0.08) for buttery movement, throttled to ~30fps.
 *
 * Usage:
 *   const { x, y } = useGyroParallax();
 *   // Background layer: transform: translate(x * 8, y * 8)
 *   // Mid layer:        transform: translate(x * 2, y * 2)
 *   // Foreground layer: transform: translate(x * 12, y * 12)
 */
export default function useGyroParallax() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const lastTickRef = useRef(0);
  const usingGyroRef = useRef(false);

  /* clamp helper */
  const clamp = useCallback((val, min, max) => {
    return Math.min(max, Math.max(min, val));
  }, []);

  /* lerp helper */
  const lerp = useCallback((a, b, t) => {
    return a + (b - a) * t;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const LERP_FACTOR = 0.08;
    const FRAME_INTERVAL = 1000 / 30; /* ~30fps */

    /* --- deviceorientation handler (mobile) --- */
    function handleOrientation(e) {
      usingGyroRef.current = true;
      const gamma = e.gamma || 0; /* left-right tilt: -90..90 */
      const beta = e.beta || 0; /* front-back tilt: -180..180 */

      /* normalize to -1..+1 */
      targetRef.current = {
        x: clamp(gamma / 45, -1, 1),
        y: clamp((beta - 45) / 45, -1, 1), /* center around 45deg (natural hold angle) */
      };
    }

    /* --- mousemove handler (desktop) --- */
    function handleMouseMove(e) {
      if (usingGyroRef.current) return;

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetRef.current = {
        x: clamp((e.clientX - cx) / cx, -1, 1),
        y: clamp((e.clientY - cy) / cy, -1, 1),
      };
    }

    /* --- animation loop (lerp smoothing, ~30fps state updates) --- */
    function tick(now) {
      rafRef.current = requestAnimationFrame(tick);

      /* lerp every frame for smoothness */
      currentRef.current = {
        x: lerp(currentRef.current.x, targetRef.current.x, LERP_FACTOR),
        y: lerp(currentRef.current.y, targetRef.current.y, LERP_FACTOR),
      };

      /* throttle React state updates to ~30fps */
      if (now - lastTickRef.current >= FRAME_INTERVAL) {
        lastTickRef.current = now;
        setOffset({
          x: currentRef.current.x,
          y: currentRef.current.y,
        });
      }
    }

    /* try gyro first */
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation, true);
    }

    /* always add mouse as fallback */
    window.addEventListener("mousemove", handleMouseMove);

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("deviceorientation", handleOrientation, true);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [clamp, lerp]);

  return offset;
}
