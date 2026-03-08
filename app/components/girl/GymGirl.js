"use client";

import { THEMES } from "../../../data/themes";
import BouquetCluster from "../flowers/BouquetCluster";

const FLOATING_IDS = new Set(["sparkle", "butterfly", "dove"]);

function GymBouquet({ items }) {
  return (
    <div className="girlBouquetLayer gymBouquetLayer">
      <BouquetCluster items={items} variant="mini" />
    </div>
  );
}

export default function GymGirl({ items = [], walkIn = false, offering = false }) {
  const theme = THEMES.gym;
  const bouquetItems = items.filter((item) => !FLOATING_IDS.has(item.id));

  return (
    <div className={`girlFigure gymGirl ${walkIn ? "girlWalkIn" : ""} ${offering ? "girlOffering" : ""}`}>
      <div className="girlAura" style={{ background: `radial-gradient(circle, ${theme.accentSoft}, transparent 70%)` }} />

      <svg viewBox="0 0 220 380" className="girlSvg" aria-hidden="true">
        <defs>
          <linearGradient id="skin-gym" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={theme.skin1} />
            <stop offset="100%" stopColor={theme.skin2} />
          </linearGradient>
          <linearGradient id="outfit-gym" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={theme.dress1} />
            <stop offset="100%" stopColor={theme.dress2} />
          </linearGradient>
          <linearGradient id="hair-gym" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={theme.hair1} />
            <stop offset="100%" stopColor={theme.hair2} />
          </linearGradient>
        </defs>

        <path d="M90 250 C82 286 74 320 70 352" stroke="url(#skin-gym)" strokeWidth="20" strokeLinecap="round" fill="none" />
        <path d="M130 250 C138 286 146 320 150 352" stroke="url(#skin-gym)" strokeWidth="20" strokeLinecap="round" fill="none" />
        <ellipse cx="66" cy="357" rx="14" ry="7" fill={theme.shoe} />
        <ellipse cx="154" cy="357" rx="14" ry="7" fill={theme.shoe} />

        <path d="M78 108 C66 132 64 146 66 154 C76 160 144 160 154 154 C156 146 154 132 142 108 Z" fill="url(#outfit-gym)" />
        <path d="M70 164 C74 190 72 230 82 252 C94 264 126 264 138 252 C148 230 146 190 150 164 C136 170 84 170 70 164 Z" fill="#a22e10" />
        <path d="M84 164 C96 170 124 170 136 164" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="none" />

        <rect x="102" y="82" width="16" height="20" rx="8" fill="url(#skin-gym)" />

        <g className="gymArmLeft">
          <path d="M82 122 C60 100 48 74 46 62" stroke="url(#skin-gym)" strokeWidth="16" strokeLinecap="round" fill="none" />
          <circle cx="46" cy="60" r="9" fill="url(#skin-gym)" />
          <rect x="38" y="65" width="16" height="5" rx="2.5" fill="#ff6d00" />
        </g>

        <g className="gymArmRight">
          <path d="M138 122 C156 144 166 164 172 178" stroke="url(#skin-gym)" strokeWidth="16" strokeLinecap="round" fill="none" />
          <circle cx="174" cy="180" r="9" fill="url(#skin-gym)" />
          <rect x="166" y="173" width="16" height="5" rx="2.5" fill="#ff6d00" />
        </g>

        <g className="girlHead">
          <ellipse cx="110" cy="54" rx="30" ry="34" fill="url(#skin-gym)" />
          <path d="M82 44 C88 18 132 18 138 44 C126 34 94 34 82 44 Z" fill="url(#hair-gym)" />
          <path d="M82 44 C78 60 80 78 84 92" stroke="url(#hair-gym)" strokeWidth="12" strokeLinecap="round" fill="none" />
          <path d="M138 44 C142 60 140 78 136 92" stroke="url(#hair-gym)" strokeWidth="12" strokeLinecap="round" fill="none" />
          <path d="M134 46 C150 58 156 80 150 116" stroke="url(#hair-gym)" strokeWidth="9" strokeLinecap="round" fill="none" />
          <rect x="80" y="37" width="60" height="8" rx="4" fill="#ff6d00" />
          <ellipse cx="98" cy="56" rx="4.8" ry="5.5" fill="#1f1320" />
          <ellipse cx="122" cy="56" rx="4.8" ry="5.5" fill="#1f1320" />
          <circle cx="100" cy="54" r="1.6" fill="#fff" />
          <circle cx="124" cy="54" r="1.6" fill="#fff" />
          <path d="M102 72 Q112 78 120 71" stroke="#c16068" strokeWidth="2.3" fill="none" strokeLinecap="round" />
        </g>
      </svg>

      <GymBouquet items={bouquetItems} />
    </div>
  );
}
