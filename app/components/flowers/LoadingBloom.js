"use client";

/**
 * LoadingBloom — A flower bud that slowly unfurls while data loads.
 * Pure CSS animation on SVG paths. No JS animation loop needed.
 */
export default function LoadingBloom() {
  return (
    <div className="loadingBloomWrap">
      <svg
        viewBox="0 0 100 120"
        width={80}
        height={96}
        className="loadingBloomSvg"
        aria-label="Loading..."
      >
        <defs>
          <linearGradient id="lb-stem" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a9e78" />
            <stop offset="100%" stopColor="#4d7249" />
          </linearGradient>
          <radialGradient id="lb-petal" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#f8bbd0" />
            <stop offset="100%" stopColor="#e48aab" />
          </radialGradient>
          <radialGradient id="lb-center" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffd54f" />
            <stop offset="100%" stopColor="#ffb300" />
          </radialGradient>
        </defs>

        {/* Stem */}
        <path
          d="M50,120 C50,95 48,80 50,65"
          stroke="url(#lb-stem)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Left leaf */}
        <path
          d="M49,90 C40,85 32,88 30,82 C32,78 42,80 49,85"
          fill="#7a9e78"
          opacity="0.7"
          className="lbLeaf lbLeafL"
        />

        {/* Right leaf */}
        <path
          d="M51,82 C58,77 66,79 68,73 C66,69 56,72 51,78"
          fill="#7a9e78"
          opacity="0.7"
          className="lbLeaf lbLeafR"
        />

        {/* 5 Petals — each unfurls from closed bud */}
        <g className="lbPetals">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <path
              key={i}
              className={`lbPetal lbPetal${i}`}
              d="M50,45 C55,35 60,28 55,18 C52,12 48,12 45,18 C40,28 45,35 50,45"
              fill="url(#lb-petal)"
              style={{
                transformOrigin: "50px 45px",
                transform: `rotate(${angle}deg)`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </g>

        {/* Center */}
        <circle cx="50" cy="45" r="6" fill="url(#lb-center)" className="lbCenter" />
      </svg>

      <p className="loadingBloomText">preparing your bloom...</p>
    </div>
  );
}
