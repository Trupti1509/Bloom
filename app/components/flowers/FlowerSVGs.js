"use client";

import React from "react";

// ─────────────────────────────────────────────
// 1. RoseSVG - Multi-layered botanical rose
// ─────────────────────────────────────────────
export function RoseSVG({ size = 60, animated = true, className = "" }) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 100 150"
      className={`${animated ? "flowerAnimated" : ""} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="roseOuterGrad" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#f8d0da" />
          <stop offset="60%" stopColor="#e8506a" />
          <stop offset="100%" stopColor="#c8102e" />
        </radialGradient>
        <radialGradient id="roseInnerGrad" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#fce4ec" />
          <stop offset="55%" stopColor="#f48fb1" />
          <stop offset="100%" stopColor="#e91e63" />
        </radialGradient>
        <linearGradient id="roseStemGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4caf50" />
          <stop offset="100%" stopColor="#2e7d32" />
        </linearGradient>
        <linearGradient id="roseLeafGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#66bb6a" />
          <stop offset="100%" stopColor="#2e7d32" />
        </linearGradient>
      </defs>

      {/* Stem - curved */}
      <path
        d="M50 68 C50 80, 48 100, 47 115 C46 125, 48 135, 50 145"
        stroke="url(#roseStemGrad)" strokeWidth="3" fill="none" strokeLinecap="round"
      />

      {/* Left leaf */}
      <path
        d="M48 95 C40 88, 22 82, 18 86 C14 90, 24 98, 36 100 C40 100, 46 98, 48 95Z"
        fill="url(#roseLeafGrad)" opacity="0.9"
      />
      <path d="M48 95 C38 92, 26 88, 18 86" stroke="#1b5e20" strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M38 91 C36 94, 32 96, 28 96" stroke="#1b5e20" strokeWidth="0.3" fill="none" opacity="0.4" />
      <path d="M42 93 C40 96, 36 98, 33 99" stroke="#1b5e20" strokeWidth="0.3" fill="none" opacity="0.4" />

      {/* Right leaf */}
      <path
        d="M49 110 C56 104, 72 96, 78 100 C84 104, 72 112, 60 114 C56 114, 51 112, 49 110Z"
        fill="url(#roseLeafGrad)" opacity="0.9"
      />
      <path d="M49 110 C58 106, 68 102, 78 100" stroke="#1b5e20" strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M58 105 C60 108, 64 110, 68 111" stroke="#1b5e20" strokeWidth="0.3" fill="none" opacity="0.4" />
      <path d="M54 107 C56 110, 60 112, 63 113" stroke="#1b5e20" strokeWidth="0.3" fill="none" opacity="0.4" />

      {/* Outer petals (5 petals, large, deep crimson) */}
      <path
        d="M50 25 C38 18, 20 22, 18 35 C16 48, 30 58, 50 55"
        fill="url(#roseOuterGrad)" opacity="0.95"
      />
      <path
        d="M50 25 C62 18, 80 22, 82 35 C84 48, 70 58, 50 55"
        fill="url(#roseOuterGrad)" opacity="0.9"
      />
      <path
        d="M50 55 C32 60, 15 50, 16 38 C14 52, 25 65, 45 65"
        fill="url(#roseOuterGrad)" opacity="0.85"
      />
      <path
        d="M50 55 C68 60, 85 50, 84 38 C86 52, 75 65, 55 65"
        fill="url(#roseOuterGrad)" opacity="0.85"
      />
      <path
        d="M45 65 C35 68, 28 60, 30 50 C28 62, 38 72, 50 68 C62 72, 72 62, 70 50 C72 60, 65 68, 55 65"
        fill="url(#roseOuterGrad)" opacity="0.8"
      />

      {/* Inner petals (5 petals, offset, lighter pink) */}
      <path
        d="M50 30 C42 26, 28 30, 28 40 C28 48, 38 54, 50 50"
        fill="url(#roseInnerGrad)" opacity="0.9"
      />
      <path
        d="M50 30 C58 26, 72 30, 72 40 C72 48, 62 54, 50 50"
        fill="url(#roseInnerGrad)" opacity="0.85"
      />
      <path
        d="M50 50 C38 54, 30 48, 32 40 C30 50, 38 58, 48 56"
        fill="url(#roseInnerGrad)" opacity="0.8"
      />
      <path
        d="M50 50 C62 54, 70 48, 68 40 C70 50, 62 58, 52 56"
        fill="url(#roseInnerGrad)" opacity="0.8"
      />
      <path
        d="M48 56 C42 58, 36 52, 38 46 C36 54, 42 60, 50 58 C58 60, 64 54, 62 46 C64 52, 58 58, 52 56"
        fill="url(#roseInnerGrad)" opacity="0.75"
      />

      {/* Tight center spiral */}
      <path
        d="M50 40 C46 38, 42 40, 43 44 C44 48, 48 49, 50 47 C52 45, 54 42, 52 40 C50 38, 47 39, 47 42"
        fill="#f48fb1" opacity="0.9"
      />
      {/* Golden center highlight */}
      <circle cx="50" cy="43" r="3" fill="#ffd54f" opacity="0.7" />
      <circle cx="49" cy="42" r="1.5" fill="#ffecb3" opacity="0.8" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 2. SunflowerSVG - Radiating petals with disc
// ─────────────────────────────────────────────
export function SunflowerSVG({ size = 60, animated = true, className = "" }) {
  const petalAngles = Array.from({ length: 16 }, (_, i) => (360 / 16) * i);
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 100 140"
      className={`${animated ? "flowerAnimated" : ""} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sunPetalGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffc107" />
          <stop offset="100%" stopColor="#ff8f00" />
        </linearGradient>
        <radialGradient id="sunDiscGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5d4037" />
          <stop offset="70%" stopColor="#3e2723" />
          <stop offset="100%" stopColor="#2c1a0e" />
        </radialGradient>
        <linearGradient id="sunStemGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#558b2f" />
          <stop offset="100%" stopColor="#33691e" />
        </linearGradient>
      </defs>

      {/* Stem */}
      <path
        d="M50 75 C50 85, 49 105, 50 120 C51 128, 50 135, 50 140"
        stroke="url(#sunStemGrad)" strokeWidth="4.5" fill="none" strokeLinecap="round"
      />
      {/* Left leaf on stem */}
      <path
        d="M49 95 C42 88, 25 84, 20 88 C15 92, 28 100, 40 100 C44 100, 48 98, 49 95Z"
        fill="#4caf50" opacity="0.85"
      />
      <path d="M49 95 C38 91, 28 88, 20 88" stroke="#2e7d32" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Petals - 16 radiating from center */}
      {petalAngles.map((angle, i) => (
        <path
          key={i}
          d="M0 -8 C-5 -18, -4 -32, 0 -36 C4 -32, 5 -18, 0 -8Z"
          fill="url(#sunPetalGrad)"
          opacity={0.85 + (i % 2) * 0.1}
          transform={`translate(50, 50) rotate(${angle})`}
        />
      ))}

      {/* Dark brown disc center */}
      <circle cx="50" cy="50" r="14" fill="url(#sunDiscGrad)" />

      {/* Dot pattern on disc (seed pattern) */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
        <circle
          key={`outer-${i}`}
          cx={50 + Math.cos((a * Math.PI) / 180) * 9}
          cy={50 + Math.sin((a * Math.PI) / 180) * 9}
          r="1.2"
          fill="#8d6e63"
          opacity="0.7"
        />
      ))}
      {[20, 70, 120, 170, 220, 270, 320].map((a, i) => (
        <circle
          key={`inner-${i}`}
          cx={50 + Math.cos((a * Math.PI) / 180) * 5}
          cy={50 + Math.sin((a * Math.PI) / 180) * 5}
          r="1"
          fill="#a1887f"
          opacity="0.6"
        />
      ))}
      <circle cx="50" cy="50" r="1.5" fill="#6d4c41" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 3. TulipSVG - Elegant cup-shaped tulip
// ─────────────────────────────────────────────
export function TulipSVG({ size = 60, animated = true, className = "" }) {
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 80 160"
      className={`${animated ? "flowerAnimated" : ""} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tulipPetalGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#f8bbd0" />
          <stop offset="40%" stopColor="#ec407a" />
          <stop offset="100%" stopColor="#e91e63" />
        </linearGradient>
        <linearGradient id="tulipPetalGrad2" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#fce4ec" />
          <stop offset="50%" stopColor="#f48fb1" />
          <stop offset="100%" stopColor="#e91e63" />
        </linearGradient>
        <linearGradient id="tulipStemGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#66bb6a" />
          <stop offset="100%" stopColor="#2e7d32" />
        </linearGradient>
        <linearGradient id="tulipLeafGrad" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#66bb6a" />
          <stop offset="100%" stopColor="#1b5e20" />
        </linearGradient>
      </defs>

      {/* Long straight stem */}
      <path
        d="M40 68 C40 85, 40 110, 40 140 C40 148, 40 155, 40 160"
        stroke="url(#tulipStemGrad)" strokeWidth="3" fill="none" strokeLinecap="round"
      />

      {/* Left long pointed leaf */}
      <path
        d="M39 100 C32 90, 18 75, 12 65 C10 62, 14 64, 18 68 C24 76, 34 90, 39 100Z"
        fill="url(#tulipLeafGrad)" opacity="0.9"
      />
      <path d="M39 100 C30 86, 20 74, 12 65" stroke="#1b5e20" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Right long pointed leaf */}
      <path
        d="M41 105 C48 95, 60 82, 66 72 C68 69, 64 71, 60 75 C54 83, 46 95, 41 105Z"
        fill="url(#tulipLeafGrad)" opacity="0.85"
      />
      <path d="M41 105 C50 92, 58 82, 66 72" stroke="#1b5e20" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Back petal (center, tallest) */}
      <path
        d="M40 68 C40 58, 30 30, 25 18 C22 10, 30 5, 40 8 C50 5, 58 10, 55 18 C50 30, 40 58, 40 68Z"
        fill="url(#tulipPetalGrad)" opacity="0.85"
      />

      {/* Left petal */}
      <path
        d="M40 68 C35 55, 20 35, 18 22 C16 12, 24 8, 32 12 C36 14, 40 40, 40 68Z"
        fill="url(#tulipPetalGrad2)" opacity="0.9"
      />

      {/* Right petal */}
      <path
        d="M40 68 C45 55, 60 35, 62 22 C64 12, 56 8, 48 12 C44 14, 40 40, 40 68Z"
        fill="url(#tulipPetalGrad2)" opacity="0.88"
      />

      {/* Subtle petal vein lines */}
      <path d="M40 60 C38 45, 32 28, 28 18" stroke="#c2185b" strokeWidth="0.4" fill="none" opacity="0.3" />
      <path d="M40 60 C42 45, 48 28, 52 18" stroke="#c2185b" strokeWidth="0.4" fill="none" opacity="0.3" />
      <path d="M40 60 C40 45, 40 28, 40 12" stroke="#c2185b" strokeWidth="0.4" fill="none" opacity="0.25" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 4. BlossomSVG - Cherry blossom with stamens
// ─────────────────────────────────────────────
export function BlossomSVG({ size = 60, animated = true, className = "" }) {
  const petalAngles = [0, 72, 144, 216, 288];
  return (
    <svg
      width={size}
      height={size * (110 / 90)}
      viewBox="0 0 90 110"
      className={`${animated ? "flowerAnimated" : ""} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="blossomPetalGrad" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#fce4ec" />
          <stop offset="50%" stopColor="#f8bbd0" />
          <stop offset="100%" stopColor="#f48fb1" />
        </radialGradient>
        <linearGradient id="blossomBranchGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8d6e63" />
          <stop offset="100%" stopColor="#5d4037" />
        </linearGradient>
      </defs>

      {/* Delicate branch */}
      <path
        d="M10 95 C20 85, 30 75, 45 65 C50 62, 55 58, 45 55"
        stroke="url(#blossomBranchGrad)" strokeWidth="3" fill="none" strokeLinecap="round"
      />
      <path
        d="M30 78 C35 82, 42 88, 50 95"
        stroke="url(#blossomBranchGrad)" strokeWidth="2" fill="none" strokeLinecap="round"
      />

      {/* Small bud on branch */}
      <path
        d="M50 95 C48 90, 46 87, 48 84 C50 82, 52 84, 53 87 C54 90, 52 93, 50 95Z"
        fill="#f8bbd0" opacity="0.8"
      />

      {/* 5 rounded petals with notched tips */}
      {petalAngles.map((angle, i) => (
        <g key={i} transform={`translate(45, 42) rotate(${angle})`}>
          <path
            d="M0 0 C-6 -5, -10 -16, -8 -22 C-6 -26, -3 -27, 0 -24 C3 -27, 6 -26, 8 -22 C10 -16, 6 -5, 0 0Z"
            fill="url(#blossomPetalGrad)"
            opacity={0.85 + (i % 2) * 0.1}
          />
          {/* Subtle petal vein */}
          <path d="M0 -2 C0 -10, 0 -18, 0 -23" stroke="#f48fb1" strokeWidth="0.3" fill="none" opacity="0.4" />
        </g>
      ))}

      {/* Center */}
      <circle cx="45" cy="42" r="4" fill="#fff9c4" opacity="0.9" />
      <circle cx="45" cy="42" r="2.5" fill="#ffee58" opacity="0.8" />

      {/* Stamens - 5 thin lines */}
      {petalAngles.map((angle, i) => {
        const stamenAngle = angle + 36;
        const rad = (stamenAngle * Math.PI) / 180;
        const x2 = 45 + Math.cos(rad - Math.PI / 2) * 8;
        const y2 = 42 + Math.sin(rad - Math.PI / 2) * 8;
        return (
          <g key={`s-${i}`}>
            <line x1="45" y1="42" x2={x2} y2={y2} stroke="#f9a825" strokeWidth="0.6" opacity="0.7" />
            <circle cx={x2} cy={y2} r="1" fill="#ef6c00" opacity="0.8" />
          </g>
        );
      })}
    </svg>
  );
}

// ─────────────────────────────────────────────
// 5. DaisySVG - Classic daisy with white petals
// ─────────────────────────────────────────────
export function DaisySVG({ size = 60, animated = true, className = "" }) {
  const petalAngles = Array.from({ length: 14 }, (_, i) => (360 / 14) * i);
  return (
    <svg
      width={size}
      height={size * (140 / 90)}
      viewBox="0 0 90 140"
      className={`${animated ? "flowerAnimated" : ""} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="daisyPetalGrad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f5f5f5" />
        </linearGradient>
        <radialGradient id="daisyCenterGrad" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#ffe082" />
          <stop offset="60%" stopColor="#ffb300" />
          <stop offset="100%" stopColor="#ff8f00" />
        </radialGradient>
        <linearGradient id="daisyStemGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#66bb6a" />
          <stop offset="100%" stopColor="#388e3c" />
        </linearGradient>
      </defs>

      {/* Thin stem */}
      <path
        d="M45 62 C45 75, 44 95, 45 115 C45 125, 45 135, 45 140"
        stroke="url(#daisyStemGrad)" strokeWidth="2.2" fill="none" strokeLinecap="round"
      />
      {/* Small leaf on stem */}
      <path
        d="M44 90 C38 84, 26 80, 22 83 C18 86, 28 92, 38 92 C41 92, 43 91, 44 90Z"
        fill="#4caf50" opacity="0.8"
      />
      <path d="M44 90 C36 86, 28 83, 22 83" stroke="#2e7d32" strokeWidth="0.4" fill="none" opacity="0.5" />

      {/* 14 narrow white petals */}
      {petalAngles.map((angle, i) => (
        <path
          key={i}
          d="M0 -5 C-2.5 -12, -2.5 -24, -1 -28 C0 -30, 1 -28, 1 -28 C2.5 -24, 2.5 -12, 0 -5Z"
          fill="url(#daisyPetalGrad)"
          stroke="#e0e0e0"
          strokeWidth="0.3"
          opacity={0.9 + (i % 2) * 0.08}
          transform={`translate(45, 48) rotate(${angle})`}
        />
      ))}

      {/* Yellow-orange domed center */}
      <ellipse cx="45" cy="48" rx="8" ry="7.5" fill="url(#daisyCenterGrad)" />
      {/* Texture dots on center */}
      {[0, 60, 120, 180, 240, 300].map((a, i) => (
        <circle
          key={i}
          cx={45 + Math.cos((a * Math.PI) / 180) * 4}
          cy={48 + Math.sin((a * Math.PI) / 180) * 3.5}
          r="0.8"
          fill="#e65100"
          opacity="0.4"
        />
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────────
// 6. HibiscusSVG - Tropical with ruffled edges
// ─────────────────────────────────────────────
export function HibiscusSVG({ size = 60, animated = true, className = "" }) {
  return (
    <svg
      width={size}
      height={size * (130 / 110)}
      viewBox="0 0 110 130"
      className={`${animated ? "flowerAnimated" : ""} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="hibiscusPetalGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#ef5350" />
          <stop offset="50%" stopColor="#e53935" />
          <stop offset="100%" stopColor="#c62828" />
        </radialGradient>
        <linearGradient id="hibiscusStemGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#558b2f" />
          <stop offset="100%" stopColor="#33691e" />
        </linearGradient>
      </defs>

      {/* Stem */}
      <path
        d="M55 80 C55 90, 54 105, 55 118 C55 122, 55 126, 55 130"
        stroke="url(#hibiscusStemGrad)" strokeWidth="3.5" fill="none" strokeLinecap="round"
      />
      {/* Leaf */}
      <path
        d="M54 100 C46 92, 28 86, 22 90 C16 94, 30 104, 44 104 C48 104, 52 102, 54 100Z"
        fill="#4caf50" opacity="0.85"
      />
      <path d="M54 100 C42 94, 30 90, 22 90" stroke="#2e7d32" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* 5 large petals with wavy ruffled edges */}
      {/* Petal 1 - top */}
      <path
        d="M55 50 C45 40, 30 18, 25 15 C20 12, 18 18, 22 28 C24 34, 28 38, 30 42
           C26 36, 20 30, 18 35 C16 40, 28 50, 42 54 C46 55, 52 52, 55 50Z"
        fill="url(#hibiscusPetalGrad)" opacity="0.92"
      />
      {/* Petal 2 - top right */}
      <path
        d="M55 50 C65 40, 82 22, 88 20 C94 18, 95 24, 90 32 C86 38, 80 42, 76 44
           C82 40, 90 36, 90 42 C90 48, 74 54, 62 54 C58 54, 56 52, 55 50Z"
        fill="url(#hibiscusPetalGrad)" opacity="0.88"
      />
      {/* Petal 3 - bottom right */}
      <path
        d="M55 50 C64 56, 82 65, 88 72 C92 78, 88 82, 80 78 C74 74, 70 68, 68 64
           C72 70, 78 78, 74 80 C70 82, 58 72, 54 60 C54 56, 54 52, 55 50Z"
        fill="url(#hibiscusPetalGrad)" opacity="0.85"
      />
      {/* Petal 4 - bottom left */}
      <path
        d="M55 50 C46 56, 28 65, 22 72 C18 78, 22 82, 30 78 C36 74, 40 68, 42 64
           C38 70, 32 78, 36 80 C40 82, 52 72, 56 60 C56 56, 56 52, 55 50Z"
        fill="url(#hibiscusPetalGrad)" opacity="0.87"
      />
      {/* Petal 5 - left */}
      <path
        d="M55 50 C48 44, 30 30, 22 28 C14 26, 12 32, 18 40 C22 46, 30 50, 36 52
           C28 50, 18 48, 18 54 C18 60, 38 58, 48 54 C52 52, 54 50, 55 50Z"
        fill="url(#hibiscusPetalGrad)" opacity="0.9"
      />

      {/* Petal vein lines */}
      <path d="M55 50 C45 40, 30 25, 24 18" stroke="#b71c1c" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M55 50 C65 38, 78 25, 88 20" stroke="#b71c1c" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M55 50 C62 58, 76 68, 85 74" stroke="#b71c1c" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M55 50 C48 58, 34 68, 25 74" stroke="#b71c1c" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M55 50 C42 48, 26 40, 18 36" stroke="#b71c1c" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Prominent pistil/stamen column */}
      <line x1="55" y1="50" x2="55" y2="20" stroke="#fdd835" strokeWidth="2" strokeLinecap="round" />
      {/* Small stamen dots along column */}
      <circle cx="52" cy="28" r="1.2" fill="#fdd835" opacity="0.9" />
      <circle cx="58" cy="26" r="1.2" fill="#fdd835" opacity="0.9" />
      <circle cx="53" cy="22" r="1" fill="#fdd835" opacity="0.8" />
      <circle cx="57" cy="24" r="1" fill="#fdd835" opacity="0.8" />
      {/* Red tip */}
      <circle cx="55" cy="18" r="2.5" fill="#d32f2f" />
      <circle cx="55" cy="18" r="1.5" fill="#e57373" opacity="0.6" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 7. WildflowerSVG - Cluster of small flowers
// ─────────────────────────────────────────────
export function WildflowerSVG({ size = 60, animated = true, className = "" }) {
  const smallFlower = (cx, cy, color, petalSize = 5) => {
    const angles = [0, 72, 144, 216, 288];
    return angles.map((a, i) => {
      const rad = ((a - 90) * Math.PI) / 180;
      const px = cx + Math.cos(rad) * petalSize;
      const py = cy + Math.sin(rad) * petalSize;
      return (
        <ellipse
          key={`${cx}-${cy}-${i}`}
          cx={(cx + px) / 2}
          cy={(cy + py) / 2}
          rx={petalSize * 0.55}
          ry={petalSize * 0.3}
          fill={color}
          opacity="0.85"
          transform={`rotate(${a}, ${(cx + px) / 2}, ${(cy + py) / 2})`}
        />
      );
    });
  };

  return (
    <svg
      width={size}
      height={size * (150 / 90)}
      viewBox="0 0 90 150"
      className={`${animated ? "flowerAnimated" : ""} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="wildStemGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#66bb6a" />
          <stop offset="100%" stopColor="#2e7d32" />
        </linearGradient>
      </defs>

      {/* Main stem */}
      <path
        d="M45 150 C44 140, 43 120, 42 100 C41 85, 42 70, 45 55"
        stroke="url(#wildStemGrad)" strokeWidth="2" fill="none" strokeLinecap="round"
      />
      {/* Branch to left flower */}
      <path
        d="M43 80 C38 72, 30 60, 25 45"
        stroke="url(#wildStemGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round"
      />
      {/* Branch to right flower */}
      <path
        d="M44 90 C50 82, 58 70, 62 55"
        stroke="url(#wildStemGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round"
      />

      {/* Small leaves */}
      <path
        d="M42 105 C36 100, 26 96, 22 99 C18 102, 28 108, 36 108 C39 108, 41 106, 42 105Z"
        fill="#4caf50" opacity="0.7"
      />
      <path
        d="M44 115 C50 110, 60 106, 64 109 C68 112, 58 118, 50 118 C47 118, 45 116, 44 115Z"
        fill="#4caf50" opacity="0.7"
      />

      {/* Flower 1 - Lavender (top center) */}
      {smallFlower(45, 42, "#b39ddb", 6)}
      <circle cx="45" cy="42" r="2.5" fill="#fff9c4" opacity="0.9" />
      <circle cx="45" cy="42" r="1.2" fill="#ffb74d" opacity="0.7" />

      {/* Flower 2 - White (left) */}
      {smallFlower(25, 38, "#ffffff", 5)}
      <circle cx="25" cy="38" r="2" fill="#fff9c4" opacity="0.9" />
      <circle cx="25" cy="38" r="1" fill="#ffd54f" opacity="0.7" />

      {/* Flower 3 - Soft yellow (right) */}
      {smallFlower(62, 48, "#fff9c4", 5.5)}
      <circle cx="62" cy="48" r="2.2" fill="#ffe082" opacity="0.9" />
      <circle cx="62" cy="48" r="1.1" fill="#ffb300" opacity="0.7" />

      {/* Tiny buds */}
      <circle cx="38" cy="58" r="2" fill="#ce93d8" opacity="0.6" />
      <circle cx="52" cy="62" r="1.8" fill="#e1bee7" opacity="0.5" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 8. ButterflySVG - Detailed butterfly
// ─────────────────────────────────────────────
export function ButterflySVG({ size = 60, animated = true, className = "" }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 100 80"
      className={`${animated ? "flowerAnimated" : ""} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="butterflyUpperGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e1bee7" />
          <stop offset="50%" stopColor="#ce93d8" />
          <stop offset="100%" stopColor="#ab47bc" />
        </linearGradient>
        <linearGradient id="butterflyUpperGradR" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e1bee7" />
          <stop offset="50%" stopColor="#ce93d8" />
          <stop offset="100%" stopColor="#ab47bc" />
        </linearGradient>
        <linearGradient id="butterflyLowerGrad" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#f3e5f5" />
          <stop offset="100%" stopColor="#ce93d8" />
        </linearGradient>
      </defs>

      {/* Left upper wing */}
      <path
        d="M50 38 C42 28, 25 8, 12 10 C4 12, 2 22, 8 32 C14 42, 30 48, 50 42Z"
        fill="url(#butterflyUpperGrad)" opacity="0.9"
      />
      {/* Left upper wing vein lines */}
      <path d="M50 40 C38 32, 22 18, 12 14" stroke="#9c27b0" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M50 40 C36 36, 18 28, 8 28" stroke="#9c27b0" strokeWidth="0.4" fill="none" opacity="0.25" />
      <path d="M50 41 C38 40, 22 38, 10 36" stroke="#9c27b0" strokeWidth="0.4" fill="none" opacity="0.25" />
      {/* Left wing spot */}
      <ellipse cx="24" cy="24" rx="5" ry="4" fill="#7b1fa2" opacity="0.3" />
      <ellipse cx="24" cy="24" rx="3" ry="2.5" fill="#4a148c" opacity="0.2" />

      {/* Right upper wing */}
      <path
        d="M50 38 C58 28, 75 8, 88 10 C96 12, 98 22, 92 32 C86 42, 70 48, 50 42Z"
        fill="url(#butterflyUpperGradR)" opacity="0.9"
      />
      {/* Right upper wing vein lines */}
      <path d="M50 40 C62 32, 78 18, 88 14" stroke="#9c27b0" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M50 40 C64 36, 82 28, 92 28" stroke="#9c27b0" strokeWidth="0.4" fill="none" opacity="0.25" />
      <path d="M50 41 C62 40, 78 38, 90 36" stroke="#9c27b0" strokeWidth="0.4" fill="none" opacity="0.25" />
      {/* Right wing spot */}
      <ellipse cx="76" cy="24" rx="5" ry="4" fill="#7b1fa2" opacity="0.3" />
      <ellipse cx="76" cy="24" rx="3" ry="2.5" fill="#4a148c" opacity="0.2" />

      {/* Left lower wing (smaller) */}
      <path
        d="M50 42 C40 46, 22 52, 16 58 C12 62, 16 68, 24 66 C32 64, 44 54, 50 46Z"
        fill="url(#butterflyLowerGrad)" opacity="0.85"
      />
      <path d="M50 44 C38 50, 24 56, 18 60" stroke="#9c27b0" strokeWidth="0.4" fill="none" opacity="0.2" />

      {/* Right lower wing (smaller) */}
      <path
        d="M50 42 C60 46, 78 52, 84 58 C88 62, 84 68, 76 66 C68 64, 56 54, 50 46Z"
        fill="url(#butterflyLowerGrad)" opacity="0.85"
      />
      <path d="M50 44 C62 50, 76 56, 82 60" stroke="#9c27b0" strokeWidth="0.4" fill="none" opacity="0.2" />

      {/* Body */}
      <ellipse cx="50" cy="42" rx="2.5" ry="10" fill="#4a148c" opacity="0.9" />
      <ellipse cx="50" cy="42" rx="1.5" ry="9" fill="#6a1b9a" opacity="0.6" />

      {/* Head */}
      <circle cx="50" cy="30" r="2.5" fill="#4a148c" opacity="0.9" />

      {/* Antennae */}
      <path d="M49 28 C44 18, 38 10, 35 8" stroke="#4a148c" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <circle cx="35" cy="8" r="1.2" fill="#4a148c" />
      <path d="M51 28 C56 18, 62 10, 65 8" stroke="#4a148c" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <circle cx="65" cy="8" r="1.2" fill="#4a148c" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 9. ChocolateSVG - Gift box with ribbon
// ─────────────────────────────────────────────
export function ChocolateSVG({ size = 60, animated = true, className = "" }) {
  return (
    <svg
      width={size}
      height={size * (90 / 80)}
      viewBox="0 0 80 90"
      className={`${animated ? "flowerAnimated" : ""} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="chocBoxGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8d6e63" />
          <stop offset="100%" stopColor="#5d4037" />
        </linearGradient>
        <linearGradient id="chocLidGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a1887f" />
          <stop offset="100%" stopColor="#795548" />
        </linearGradient>
        <linearGradient id="chocRibbonGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffc107" />
          <stop offset="50%" stopColor="#ffd54f" />
          <stop offset="100%" stopColor="#ffc107" />
        </linearGradient>
      </defs>

      {/* Box body */}
      <rect x="10" y="42" width="60" height="38" rx="3" ry="3" fill="url(#chocBoxGrad)" />
      {/* Box body shadow line */}
      <rect x="10" y="42" width="60" height="4" rx="1" fill="#4e342e" opacity="0.3" />

      {/* Lid */}
      <rect x="7" y="30" width="66" height="16" rx="3" ry="3" fill="url(#chocLidGrad)" />

      {/* Vertical ribbon on box */}
      <rect x="36" y="30" width="8" height="50" fill="url(#chocRibbonGrad)" opacity="0.9" />

      {/* Horizontal ribbon on lid */}
      <rect x="7" y="34" width="66" height="8" rx="1" fill="url(#chocRibbonGrad)" opacity="0.9" />

      {/* Ribbon bow - left loop */}
      <path
        d="M40 30 C32 22, 18 16, 16 20 C14 24, 24 28, 36 30"
        fill="#ffd54f" stroke="#f9a825" strokeWidth="0.5"
      />
      {/* Ribbon bow - right loop */}
      <path
        d="M40 30 C48 22, 62 16, 64 20 C66 24, 56 28, 44 30"
        fill="#ffd54f" stroke="#f9a825" strokeWidth="0.5"
      />
      {/* Bow center knot */}
      <ellipse cx="40" cy="29" rx="4" ry="3" fill="#ffb300" />

      {/* Ribbon tails */}
      <path
        d="M36 30 C32 34, 28 26, 24 30"
        stroke="#ffc107" strokeWidth="2" fill="none" strokeLinecap="round"
      />
      <path
        d="M44 30 C48 34, 52 26, 56 30"
        stroke="#ffc107" strokeWidth="2" fill="none" strokeLinecap="round"
      />

      {/* Heart on lid */}
      <path
        d="M40 40 C40 37, 35 34, 33 36 C30 38, 30 42, 40 48 C50 42, 50 38, 47 36 C45 34, 40 37, 40 40Z"
        fill="#d32f2f" opacity="0.7"
      />
      <path
        d="M40 40 C40 38, 36 36, 35 37 C33 38, 33 41, 40 46"
        fill="#ef5350" opacity="0.4"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 10. SparkleSVG - 4+4 pointed star with glow
// ─────────────────────────────────────────────
export function SparkleSVG({ size = 60, animated = true, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      className={`${animated ? "flowerAnimated" : ""} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="sparkleGlowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff9c4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#ffd54f" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffd54f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sparkleStarGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#fff9c4" />
          <stop offset="100%" stopColor="#ffd54f" />
        </radialGradient>
      </defs>

      {/* Gentle glow background */}
      <circle cx="40" cy="40" r="30" fill="url(#sparkleGlowGrad)" />

      {/* Main 4-pointed star (smooth bezier, not sharp) */}
      <path
        d="M40 8 C42 24, 44 30, 56 32 C72 34, 72 34, 72 40
           C72 42, 56 44, 56 48 C44 50, 42 56, 40 72
           C38 56, 36 50, 24 48 C8 44, 8 42, 8 40
           C8 38, 24 36, 24 32 C36 30, 38 24, 40 8Z"
        fill="url(#sparkleStarGrad)" opacity="0.95"
      />

      {/* 4 smaller diagonal points */}
      <path
        d="M40 28 C42 32, 48 34, 52 32 C48 36, 46 40, 52 48
           C48 46, 42 44, 40 52 C38 44, 32 46, 28 48
           C34 40, 32 36, 28 32 C32 34, 38 32, 40 28Z"
        fill="#ffffff" opacity="0.6"
      />

      {/* Center bright spot */}
      <circle cx="40" cy="40" r="5" fill="#ffffff" opacity="0.9" />
      <circle cx="40" cy="40" r="3" fill="#ffffff" />

      {/* Tiny sparkle dots */}
      <circle cx="26" cy="20" r="1.2" fill="#ffd54f" opacity="0.6" />
      <circle cx="58" cy="22" r="0.8" fill="#ffd54f" opacity="0.5" />
      <circle cx="60" cy="58" r="1" fill="#ffd54f" opacity="0.5" />
      <circle cx="22" cy="56" r="0.9" fill="#ffd54f" opacity="0.4" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 11. LeafSVG - Branch with alternating leaves
// ─────────────────────────────────────────────
export function LeafSVG({ size = 60, animated = true, className = "" }) {
  return (
    <svg
      width={size}
      height={size * (140 / 80)}
      viewBox="0 0 80 140"
      className={`${animated ? "flowerAnimated" : ""} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="leafGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#66bb6a" />
          <stop offset="50%" stopColor="#4caf50" />
          <stop offset="100%" stopColor="#1b5e20" />
        </linearGradient>
        <linearGradient id="leafGrad2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#81c784" />
          <stop offset="50%" stopColor="#4caf50" />
          <stop offset="100%" stopColor="#2e7d32" />
        </linearGradient>
        <linearGradient id="leafBranchGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6d4c41" />
          <stop offset="100%" stopColor="#4e342e" />
        </linearGradient>
      </defs>

      {/* Main slightly curved branch */}
      <path
        d="M40 135 C42 120, 44 100, 42 80 C40 60, 38 40, 36 20"
        stroke="url(#leafBranchGrad)" strokeWidth="3" fill="none" strokeLinecap="round"
      />

      {/* Leaf 1 - right, top */}
      <path
        d="M37 30 C45 22, 62 18, 68 24 C74 30, 62 38, 48 40 C44 40, 39 36, 37 30Z"
        fill="url(#leafGrad1)" opacity="0.9"
      />
      <path d="M37 30 C48 28, 58 24, 68 24" stroke="#1b5e20" strokeWidth="0.7" fill="none" opacity="0.5" />
      <path d="M46 28 C48 32, 52 34, 56 35" stroke="#1b5e20" strokeWidth="0.3" fill="none" opacity="0.35" />
      <path d="M42 29 C44 33, 48 36, 52 38" stroke="#1b5e20" strokeWidth="0.3" fill="none" opacity="0.35" />

      {/* Leaf 2 - left */}
      <path
        d="M40 50 C32 42, 14 38, 8 44 C2 50, 14 58, 28 60 C32 60, 38 56, 40 50Z"
        fill="url(#leafGrad2)" opacity="0.88"
      />
      <path d="M40 50 C28 46, 18 42, 8 44" stroke="#1b5e20" strokeWidth="0.7" fill="none" opacity="0.5" />
      <path d="M30 46 C28 50, 22 52, 18 53" stroke="#1b5e20" strokeWidth="0.3" fill="none" opacity="0.35" />
      <path d="M34 48 C32 52, 26 55, 22 57" stroke="#1b5e20" strokeWidth="0.3" fill="none" opacity="0.35" />

      {/* Leaf 3 - right */}
      <path
        d="M41 72 C50 64, 66 60, 72 66 C78 72, 66 80, 52 82 C48 82, 43 78, 41 72Z"
        fill="url(#leafGrad1)" opacity="0.85"
      />
      <path d="M41 72 C52 68, 62 64, 72 66" stroke="#1b5e20" strokeWidth="0.7" fill="none" opacity="0.5" />
      <path d="M50 68 C52 72, 56 74, 60 75" stroke="#1b5e20" strokeWidth="0.3" fill="none" opacity="0.35" />
      <path d="M46 70 C48 74, 52 77, 56 79" stroke="#1b5e20" strokeWidth="0.3" fill="none" opacity="0.35" />

      {/* Leaf 4 - left, bottom */}
      <path
        d="M42 95 C34 88, 18 84, 12 90 C6 96, 18 104, 32 104 C36 104, 40 100, 42 95Z"
        fill="url(#leafGrad2)" opacity="0.82"
      />
      <path d="M42 95 C30 90, 20 86, 12 90" stroke="#1b5e20" strokeWidth="0.7" fill="none" opacity="0.5" />
      <path d="M32 90 C30 94, 24 96, 20 97" stroke="#1b5e20" strokeWidth="0.3" fill="none" opacity="0.35" />
      <path d="M36 92 C34 96, 28 99, 24 101" stroke="#1b5e20" strokeWidth="0.3" fill="none" opacity="0.35" />

      {/* Tiny new leaf bud at top */}
      <path
        d="M36 20 C34 16, 32 10, 34 8 C36 6, 38 10, 37 16"
        fill="#a5d6a7" opacity="0.7"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 12. DoveSVG - Graceful bird with olive branch
// ─────────────────────────────────────────────
export function DoveSVG({ size = 60, animated = true, className = "" }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 100 80"
      className={`${animated ? "flowerAnimated" : ""} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="doveBodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </linearGradient>
        <linearGradient id="doveWingGrad" x1="0" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopColor="#eeeeee" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="doveTailGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e0e0e0" />
          <stop offset="100%" stopColor="#f5f5f5" />
        </linearGradient>
      </defs>

      {/* Shadow / soft gray under-shape */}
      <ellipse cx="48" cy="52" rx="22" ry="10" fill="#e0e0e0" opacity="0.3" />

      {/* Tail feathers (fan shape) */}
      <path
        d="M22 48 C12 40, 4 32, 2 28 C4 30, 10 34, 18 38"
        fill="url(#doveTailGrad)" stroke="#bdbdbd" strokeWidth="0.3"
      />
      <path
        d="M22 48 C10 44, 2 38, -2 34 C2 36, 10 40, 20 44"
        fill="url(#doveTailGrad)" stroke="#bdbdbd" strokeWidth="0.3"
      />
      <path
        d="M22 48 C8 48, 0 46, -4 42 C2 44, 12 46, 22 46"
        fill="url(#doveTailGrad)" stroke="#bdbdbd" strokeWidth="0.3"
      />
      {/* Main tail shape */}
      <path
        d="M22 44 C10 36, 2 30, 0 26 C-2 34, 2 44, 8 50 C14 54, 20 52, 24 50Z"
        fill="url(#doveTailGrad)" opacity="0.9"
      />

      {/* Body - oval */}
      <path
        d="M28 42 C28 34, 38 28, 52 28 C66 28, 72 36, 72 44 C72 52, 62 58, 48 58 C34 58, 28 52, 28 42Z"
        fill="url(#doveBodyGrad)"
      />

      {/* Raised wing (arched) */}
      <path
        d="M38 38 C34 28, 28 14, 30 8 C32 4, 38 6, 42 12 C46 18, 50 10, 56 6
           C62 2, 66 8, 64 16 C62 22, 58 28, 56 34 C52 30, 46 32, 38 38Z"
        fill="url(#doveWingGrad)" stroke="#bdbdbd" strokeWidth="0.5" opacity="0.95"
      />
      {/* Wing feather lines */}
      <path d="M36 32 C34 22, 30 14, 30 8" stroke="#bdbdbd" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M42 30 C40 20, 38 12, 40 8" stroke="#bdbdbd" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M48 28 C48 20, 50 12, 54 6" stroke="#bdbdbd" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M54 30 C56 22, 60 14, 62 10" stroke="#bdbdbd" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Head */}
      <circle cx="70" cy="36" r="8" fill="#ffffff" />
      <circle cx="70" cy="36" r="7.5" fill="url(#doveBodyGrad)" />

      {/* Eye */}
      <circle cx="73" cy="34" r="1.5" fill="#212121" />
      <circle cx="73.5" cy="33.5" r="0.5" fill="#ffffff" />

      {/* Beak */}
      <path
        d="M78 36 C82 35, 86 36, 88 37 C86 38, 82 38, 78 37Z"
        fill="#ff8f00" opacity="0.9"
      />

      {/* Olive branch in beak */}
      <path
        d="M86 37 C90 35, 95 32, 98 30"
        stroke="#4caf50" strokeWidth="1" fill="none" strokeLinecap="round"
      />
      {/* Tiny olive leaves */}
      <path
        d="M90 34 C92 32, 94 31, 93 33 C92 35, 90 35, 90 34Z"
        fill="#66bb6a"
      />
      <path
        d="M94 32 C96 30, 98 29, 97 31 C96 33, 94 33, 94 32Z"
        fill="#66bb6a"
      />
      <path
        d="M92 35 C93 37, 94 38, 92 37 C91 36, 91 35, 92 35Z"
        fill="#4caf50"
      />
      {/* Small olive fruit */}
      <circle cx="96" cy="31" r="1.2" fill="#33691e" opacity="0.7" />

      {/* Breast highlight */}
      <path
        d="M55 42 C52 46, 48 50, 44 52 C48 52, 54 50, 58 46 C60 44, 58 42, 55 42Z"
        fill="#ffffff" opacity="0.5"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────
// Lookup map for all flower/element components
// ─────────────────────────────────────────────
export const FLOWER_COMPONENTS = {
  rose: RoseSVG,
  sunflower: SunflowerSVG,
  tulip: TulipSVG,
  blossom: BlossomSVG,
  daisy: DaisySVG,
  hibiscus: HibiscusSVG,
  wildflower: WildflowerSVG,
  butterfly: ButterflySVG,
  chocolate: ChocolateSVG,
  sparkle: SparkleSVG,
  leaf: LeafSVG,
  dove: DoveSVG,
};

export function FlowerRose({ className = "" }) {
  return <RoseSVG size={92} className={className} />;
}

export function FlowerTulip({ className = "" }) {
  return <TulipSVG size={84} className={className} />;
}

export function FlowerDaisy({ className = "" }) {
  return <DaisySVG size={90} className={className} />;
}

export function FlowerPeony({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="peonyOuter" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#ffd6e5" />
          <stop offset="60%" stopColor="#ff8fb1" />
          <stop offset="100%" stopColor="#f06292" />
        </radialGradient>
        <radialGradient id="peonyInner" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor="#fff3f8" />
          <stop offset="100%" stopColor="#ffb3cb" />
        </radialGradient>
        <linearGradient id="peonyStem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5fa86c" />
          <stop offset="100%" stopColor="#2f6d3a" />
        </linearGradient>
      </defs>

      <path d="M50 58 C50 72,50 90,50 116" stroke="url(#peonyStem)" strokeWidth="4" fill="none" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse
          key={deg}
          cx="50"
          cy="42"
          rx="16"
          ry="26"
          fill="url(#peonyOuter)"
          transform={`rotate(${deg} 50 42)`}
          opacity="0.9"
        />
      ))}
      {[20, 80, 140, 200, 260, 320].map((deg) => (
        <ellipse
          key={deg}
          cx="50"
          cy="42"
          rx="11"
          ry="18"
          fill="url(#peonyInner)"
          transform={`rotate(${deg} 50 42)`}
          opacity="0.95"
        />
      ))}
      <circle cx="50" cy="42" r="8" fill="#ffd166" />
    </svg>
  );
}
