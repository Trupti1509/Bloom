"use client";

export function Rose({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="18" fill="#ff5b7f" />
      <circle cx="50" cy="50" r="12" fill="#ff7c97" />
      <circle cx="50" cy="50" r="6" fill="#ffd1dc" />
    </svg>
  );
}

export function Tulip({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <path d="M50 30 C30 40 30 70 50 70 C70 70 70 40 50 30" fill="#ff7ab8" />
    </svg>
  );
}

export function Daisy({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {[...Array(10)].map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="30"
          rx="6"
          ry="18"
          fill="white"
          transform={`rotate(${i * 36} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="10" fill="#ffc93c" />
    </svg>
  );
}

export function Peony({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="20" fill="#ff8fb1" />
      <circle cx="50" cy="50" r="14" fill="#ffb3c6" />
      <circle cx="50" cy="50" r="8" fill="#ffe0e9" />
    </svg>
  );
}

export function Lavender({ className }) {
  return (
    <svg viewBox="0 0 40 100" className={className}>
      <circle cx="20" cy="20" r="6" fill="#a78bfa" />
      <circle cx="20" cy="40" r="6" fill="#a78bfa" />
      <circle cx="20" cy="60" r="6" fill="#a78bfa" />
      <circle cx="20" cy="80" r="6" fill="#a78bfa" />
    </svg>
  );
}

export function Sunflower({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {[...Array(12)].map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="28"
          rx="7"
          ry="18"
          fill="#ffd54f"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="14" fill="#5d4037" />
    </svg>
  );
}

export const FLOWERS = [Rose, Tulip, Daisy, Peony, Lavender, Sunflower];
