"use client";

import { THEMES } from "../../../data/themes";
import { FLOWER_COMPONENTS } from "../flowers/FlowerSVGs";
import BouquetCluster from "../flowers/BouquetCluster";

const FLOATING_IDS = new Set(["sparkle", "butterfly", "dove"]);

function ThemeAccessory({ theme }) {
  switch (theme) {
    case "performer":
      return (
        <g aria-hidden="true">
          <circle cx="96" cy="24" r="4" fill="#ff8ec2" />
          <circle cx="110" cy="20" r="6" fill="#ff5c99" />
          <circle cx="124" cy="24" r="4" fill="#ff8ec2" />
        </g>
      );
    case "dreamer":
      return (
        <g aria-hidden="true">
          <path d="M118 22 C113 16 116 8 124 8 C120 12 120 18 124 22 C122 23 120 23 118 22 Z" fill="#ffe38c" />
          <circle cx="102" cy="14" r="2.4" fill="#b8d6ff" />
          <circle cx="128" cy="16" r="2" fill="#b8d6ff" />
        </g>
      );
    case "techie":
      return (
        <g aria-hidden="true">
          <path d="M80 46 C84 18 136 18 144 48 C134 38 122 34 110 34 C98 34 88 38 80 46 Z" fill={`url(#hair-${theme})`} />
          <path d="M136 42 C152 54 158 82 150 116" stroke={`url(#hair-${theme})`} strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M86 44 C94 36 102 34 110 34 C120 34 128 36 136 44" fill="none" stroke="rgba(116,255,122,0.55)" strokeWidth="1.8" />
          <rect x="86" y="48" width="20" height="10" rx="5" fill="rgba(10,16,12,0.92)" stroke="#74ff7a" strokeWidth="1.8" />
          <rect x="114" y="48" width="20" height="10" rx="5" fill="rgba(10,16,12,0.92)" stroke="#74ff7a" strokeWidth="1.8" />
          <line x1="106" y1="53" x2="114" y2="53" stroke="#74ff7a" strokeWidth="1.8" />
          <path d="M88 44 C86 34 88 28 94 22" fill="none" stroke="#74ff7a" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <path d="M132 44 C134 34 132 28 126 22" fill="none" stroke="#74ff7a" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <circle cx="94" cy="22" r="2.4" fill="#74ff7a" />
          <circle cx="126" cy="22" r="2.4" fill="#74ff7a" />
        </g>
      );
    case "artist":
      return (
        <g aria-hidden="true">
          <path d="M78 38 C84 16 124 14 136 34 C122 24 98 24 78 38 Z" fill="#5d1c8d" />
          <circle cx="125" cy="22" r="6" fill="#7d37bf" />
        </g>
      );
    case "chef":
      return (
        <g aria-hidden="true">
          <circle cx="92" cy="20" r="10" fill="#fffdf7" />
          <circle cx="110" cy="14" r="13" fill="#fffdf7" />
          <circle cx="128" cy="20" r="10" fill="#fffdf7" />
          <rect x="84" y="24" width="52" height="11" rx="4" fill="#f0ece2" />
        </g>
      );
    case "rider":
      return (
        <g aria-hidden="true">
          <path d="M78 44 C84 16 136 16 142 44 C140 54 132 62 122 64 L98 64 C88 62 80 54 78 44 Z" fill="#181818" />
          <path d="M88 42 C96 34 124 34 132 42" fill="none" stroke="#ff6532" strokeWidth="3" strokeLinecap="round" />
          <rect x="86" y="46" width="48" height="12" rx="6" fill="rgba(60,80,100,0.65)" />
        </g>
      );
    case "musician":
      return (
        <g aria-hidden="true">
          <path d="M86 42 C86 28 96 20 110 20 C124 20 134 28 134 42" fill="none" stroke="#c8a6ff" strokeWidth="5" strokeLinecap="round" />
          <circle cx="88" cy="48" r="8" fill="#8d63d7" />
          <circle cx="132" cy="48" r="8" fill="#8d63d7" />
        </g>
      );
    default:
      return null;
  }
}

function BouquetLayer({ items, className = "" }) {
  return (
    <div className={`girlBouquetLayer ${className}`.trim()}>
      <BouquetCluster items={items} variant="mini" />
    </div>
  );
}

function FloatingDetails({ items }) {
  const floatingItems = items.filter((item) => FLOATING_IDS.has(item.id)).slice(0, 3);
  if (floatingItems.length === 0) return null;

  return (
    <div className="girlFloatLayer" aria-hidden="true">
      {floatingItems.map((item, index) => {
        const Flower = FLOWER_COMPONENTS[item.id] || FLOWER_COMPONENTS.sparkle;
        return (
          <div key={`${item.id}-${index}`} className="girlFloatItem" style={{ "--fi": index }}>
            <Flower size={20} animated={false} />
          </div>
        );
      })}
    </div>
  );
}

export default function DancingGirl({ theme = "performer", items = [], walkIn = false, offering = false }) {
  const palette = THEMES[theme] || THEMES.performer;
  const bouquetItems = items.filter((item) => !FLOATING_IDS.has(item.id));

  return (
    <div className={`girlFigure ${walkIn ? "girlWalkIn" : ""} ${offering ? "girlOffering" : ""}`}>
      <div className="girlAura" style={{ background: `radial-gradient(circle, ${palette.accentSoft}, transparent 70%)` }} />
      <FloatingDetails items={items} />

      <svg viewBox="0 0 220 380" className="girlSvg" aria-hidden="true">
        <defs>
          <linearGradient id={`skin-${theme}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={palette.skin1} />
            <stop offset="100%" stopColor={palette.skin2} />
          </linearGradient>
          <linearGradient id={`dress-${theme}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={palette.dress1} />
            <stop offset="100%" stopColor={palette.dress2} />
          </linearGradient>
          <linearGradient id={`hair-${theme}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={palette.hair1} />
            <stop offset="100%" stopColor={palette.hair2} />
          </linearGradient>
        </defs>

        <path d="M72 46 C68 78 70 142 84 190" stroke={`url(#hair-${theme})`} strokeWidth="20" strokeLinecap="round" fill="none" />
        <path d="M148 46 C152 78 150 142 136 190" stroke={`url(#hair-${theme})`} strokeWidth="20" strokeLinecap="round" fill="none" />

        <path d="M96 254 C96 286 95 320 94 352" stroke={`url(#skin-${theme})`} strokeWidth="20" strokeLinecap="round" fill="none" />
        <path d="M124 254 C124 286 125 320 126 352" stroke={`url(#skin-${theme})`} strokeWidth="20" strokeLinecap="round" fill="none" />
        <ellipse cx="92" cy="357" rx="14" ry="7" fill={palette.shoe} />
        <ellipse cx="128" cy="357" rx="14" ry="7" fill={palette.shoe} />

        <path d="M76 106 C58 150 56 232 70 254 C86 266 134 266 150 254 C164 232 162 150 144 106 Z" fill={`url(#dress-${theme})`} />
        <path d="M84 206 C100 212 120 212 136 206" stroke="rgba(0,0,0,0.12)" strokeWidth="2" fill="none" />

        <rect x="102" y="82" width="16" height="20" rx="8" fill={`url(#skin-${theme})`} />

        <g className="girlArmLeft">
          <path d="M80 120 C54 158 48 178 40 196" stroke={`url(#skin-${theme})`} strokeWidth="16" strokeLinecap="round" fill="none" />
          <circle cx="38" cy="198" r="9" fill={`url(#skin-${theme})`} />
        </g>

        <g className="girlArmRight">
          <path d="M140 120 C164 152 170 176 176 192" stroke={`url(#skin-${theme})`} strokeWidth="16" strokeLinecap="round" fill="none" />
          <circle cx="178" cy="194" r="9" fill={`url(#skin-${theme})`} />
        </g>

        <g className="girlHead">
          <ellipse cx="110" cy="54" rx="30" ry="34" fill={`url(#skin-${theme})`} />
          <path d="M82 44 C88 18 132 18 138 44 C126 34 94 34 82 44 Z" fill={`url(#hair-${theme})`} />
          <path d="M82 44 C78 60 80 78 84 92" stroke={`url(#hair-${theme})`} strokeWidth="12" strokeLinecap="round" fill="none" />
          <path d="M138 44 C142 60 140 78 136 92" stroke={`url(#hair-${theme})`} strokeWidth="12" strokeLinecap="round" fill="none" />
          <ThemeAccessory theme={theme} />
          <ellipse cx="98" cy="56" rx="4.8" ry="5.5" fill="#1f1320" />
          <ellipse cx="122" cy="56" rx="4.8" ry="5.5" fill="#1f1320" />
          <circle cx="100" cy="54" r="1.6" fill="#fff" />
          <circle cx="124" cy="54" r="1.6" fill="#fff" />
          <path d="M100 72 Q110 80 120 72" stroke="#c16068" strokeWidth="2.3" fill="none" strokeLinecap="round" />
          <ellipse cx="88" cy="64" rx="7" ry="4" fill="rgba(255,130,130,0.25)" />
          <ellipse cx="132" cy="64" rx="7" ry="4" fill="rgba(255,130,130,0.25)" />
        </g>
      </svg>

      <BouquetLayer items={bouquetItems} />
    </div>
  );
}
