"use client";

import { useEffect, useRef, useCallback, forwardRef, useImperativeHandle } from "react";

const PETAL_COLORS = [
  "#f8bbd0",
  "#fce4ec",
  "#e1bee7",
  "#f3e5f5",
  "#fff9c4",
  "#dcedc8",
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function pickColor() {
  return PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ---- draw a single petal (teardrop / leaf bezier shape) ---- */
function drawPetal(ctx, x, y, size, rotation, color, opacity) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.globalAlpha = opacity;
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.bezierCurveTo(
    size * 0.6,
    -size * 0.6,
    size * 0.5,
    size * 0.4,
    0,
    size
  );
  ctx.bezierCurveTo(
    -size * 0.5,
    size * 0.4,
    -size * 0.6,
    -size * 0.6,
    0,
    -size
  );
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

/* ======== Ambient particle ======== */
function createAmbient(w, h) {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    dx: randomBetween(-0.25, 0.25),
    dy: randomBetween(-0.15, 0.15),
    size: randomBetween(8, 16),
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: randomBetween(-0.005, 0.005),
    color: pickColor(),
    opacity: randomBetween(0.25, 0.55),
    breatheSpeed: randomBetween(0.003, 0.008),
    breathePhase: Math.random() * Math.PI * 2,
  };
}

function updateAmbient(p, w, h) {
  p.x += p.dx;
  p.y += p.dy;
  p.rotation += p.rotationSpeed;
  p.breathePhase += p.breatheSpeed;
  const breathe = Math.sin(p.breathePhase) * 0.15;
  p.currentOpacity = Math.max(0.08, p.opacity + breathe);

  if (p.x < -20) p.x = w + 20;
  if (p.x > w + 20) p.x = -20;
  if (p.y < -20) p.y = h + 20;
  if (p.y > h + 20) p.y = -20;
}

/* ======== Shower particle ======== */
function createShower(cx, cy, force = 1) {
  const angle = Math.random() * Math.PI * 2;
  const speed = randomBetween(1.5, 5) * force;
  return {
    x: cx,
    y: cy,
    dx: Math.cos(angle) * speed,
    dy: Math.sin(angle) * speed - randomBetween(1, 3),
    size: randomBetween(6, 14) * Math.max(1, force * 0.85),
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: randomBetween(-0.04, 0.04),
    color: pickColor(),
    opacity: randomBetween(0.6, 1),
    life: randomBetween(2, 3),
    maxLife: 0,
    gravity: 0.06,
  };
}

function updateShower(p, dt) {
  p.dy += p.gravity;
  p.x += p.dx;
  p.y += p.dy;
  p.dx *= 0.99;
  p.rotation += p.rotationSpeed;
  p.life -= dt;
  p.currentOpacity = Math.max(0, p.opacity * (p.life / (p.maxLife || 2.5)));
}

/* ======== Trail particle ======== */
function createTrail(x, y) {
  return {
    x,
    y,
    size: randomBetween(6, 10),
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: randomBetween(-0.02, 0.02),
    color: pickColor(),
    opacity: 0.65,
    life: 0.8,
    maxLife: 0.8,
  };
}

function updateTrail(p, dt) {
  p.rotation += p.rotationSpeed;
  p.life -= dt;
  p.currentOpacity = Math.max(0, p.opacity * (p.life / p.maxLife));
}

/* ======== Main Component ======== */
const CanvasParticles = forwardRef(function CanvasParticles(
  { trailActive = false },
  showerRef
) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const ambientRef = useRef([]);
  const showerParticles = useRef([]);
  const trailParticles = useRef([]);
  const lastTime = useRef(performance.now());
  const moveCounter = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  /* expose trigger(cx, cy) */
  useImperativeHandle(
    showerRef,
    () => ({
      trigger(cx, cy, options = {}) {
        const count =
          typeof options.count === "number"
            ? options.count
            : Math.floor(randomBetween(60, 80));
        const force =
          typeof options.force === "number" ? options.force : 1;
        for (let i = 0; i < count; i++) {
          const p = createShower(cx, cy, force);
          p.maxLife = p.life;
          showerParticles.current.push(p);
        }
      },
    }),
    []
  );

  /* ----- resize handler ----- */
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

  /* ----- init ambient particles ----- */
  const initAmbient = useCallback(() => {
    const { w, h } = sizeRef.current;
    const count = Math.floor(randomBetween(18, 22));
    ambientRef.current = [];
    for (let i = 0; i < count; i++) {
      ambientRef.current.push(createAmbient(w, h));
    }
  }, []);

  /* ----- pointer / touch trail handler ----- */
  const handlePointerMove = useCallback(
    (e) => {
      if (!trailActive) return;
      moveCounter.current += 1;
      if (moveCounter.current % 3 !== 0) return;

      let x, y;
      if (e.touches && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        x = e.clientX;
        y = e.clientY;
      }
      trailParticles.current.push(createTrail(x, y));
    },
    [trailActive]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();
    initAmbient();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });

    const ctx = canvas.getContext("2d");

    function loop(now) {
      animRef.current = requestAnimationFrame(loop);

      if (document.hidden) return;

      const dt = Math.min((now - lastTime.current) / 1000, 0.1);
      lastTime.current = now;

      const { w, h, dpr } = sizeRef.current;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      /* ambient */
      for (const p of ambientRef.current) {
        updateAmbient(p, w, h);
        drawPetal(ctx, p.x, p.y, p.size, p.rotation, p.color, p.currentOpacity);
      }

      /* shower */
      for (let i = showerParticles.current.length - 1; i >= 0; i--) {
        const p = showerParticles.current[i];
        updateShower(p, dt);
        if (p.life <= 0) {
          showerParticles.current.splice(i, 1);
          continue;
        }
        drawPetal(ctx, p.x, p.y, p.size, p.rotation, p.color, p.currentOpacity);
      }

      /* trail */
      for (let i = trailParticles.current.length - 1; i >= 0; i--) {
        const p = trailParticles.current[i];
        updateTrail(p, dt);
        if (p.life <= 0) {
          trailParticles.current.splice(i, 1);
          continue;
        }
        drawPetal(ctx, p.x, p.y, p.size, p.rotation, p.color, p.currentOpacity);
      }
    }

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
    };
  }, [handleResize, initAmbient, handlePointerMove]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
});

CanvasParticles.displayName = "CanvasParticles";
export default CanvasParticles;
