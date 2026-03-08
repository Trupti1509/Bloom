"use client";

export function PerformerIcon({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Microphone head */}
      <circle cx="12" cy="6" r="3.5" />
      {/* Grille lines */}
      <line x1="9.5" y1="5" x2="14.5" y2="5" />
      <line x1="9" y1="6.5" x2="15" y2="6.5" />
      {/* Stem */}
      <line x1="12" y1="9.5" x2="12" y2="17" />
      {/* Base */}
      <line x1="8.5" y1="17" x2="15.5" y2="17" />
      {/* Stand foot */}
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="9" y1="21" x2="15" y2="21" />
    </svg>
  );
}

export function DreamerIcon({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {/* Crescent moon */}
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      {/* Small star */}
      <path d="M19.5 3l.5 1.5L21.5 5l-1.5.5L19.5 7l-.5-1.5L17.5 5l1.5-.5z" />
    </svg>
  );
}

export function TechieIcon({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Screen */}
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      {/* Screen inner bezel */}
      <rect x="4.5" y="5.5" width="15" height="9" rx="0.5" />
      {/* Hinge */}
      <line x1="8" y1="16" x2="16" y2="16" />
      {/* Base / keyboard */}
      <path d="M5 16l-1.5 4h17L19 16" />
    </svg>
  );
}

export function ArtistIcon({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Palette */}
      <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.1 0 2-.9 2-2 0-.51-.2-.98-.52-1.34-.3-.34-.48-.78-.48-1.26 0-1.1.9-2 2-2h2.36c3.1 0 5.64-2.54 5.64-5.64C23 5.82 18.14 2 12 2z" />
      {/* Paint dots */}
      <circle cx="7.5" cy="10.5" r="1.2" fill="currentColor" />
      <circle cx="10.5" cy="7" r="1.2" fill="currentColor" />
      <circle cx="15" cy="7" r="1.2" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function GymIcon({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Bar */}
      <line x1="5" y1="12" x2="19" y2="12" />
      {/* Left inner weight */}
      <rect x="4" y="8" width="2.5" height="8" rx="0.5" />
      {/* Left outer weight */}
      <rect x="1.5" y="9.5" width="2.5" height="5" rx="0.5" />
      {/* Right inner weight */}
      <rect x="17.5" y="8" width="2.5" height="8" rx="0.5" />
      {/* Right outer weight */}
      <rect x="20" y="9.5" width="2.5" height="5" rx="0.5" />
    </svg>
  );
}

export function ChefIcon({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {/* Toque top puffs */}
      <path d="M7 8.5a4 4 0 0 1 2-3.46A3.5 3.5 0 0 1 12 2a3.5 3.5 0 0 1 3 3.04A4 4 0 0 1 17 8.5v1.5H7V8.5z" />
      {/* Additional puff volumes */}
      <circle cx="8.5" cy="6.5" r="2.8" />
      <circle cx="12" cy="5" r="3" />
      <circle cx="15.5" cy="6.5" r="2.8" />
      {/* Hat band */}
      <rect x="7" y="10" width="10" height="2.5" rx="0.3" />
      {/* Hat body */}
      <rect x="7.5" y="12.5" width="9" height="6" rx="0.3" />
    </svg>
  );
}

export function RiderIcon({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {/* Front wheel */}
      <circle cx="5.5" cy="17" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="5.5" cy="17" r="1" />
      {/* Rear wheel */}
      <circle cx="18.5" cy="17" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18.5" cy="17" r="1" />
      {/* Body / frame */}
      <path
        d="M8 17l3-5h4l2-3.5h2.5M11 12l2.5 5M8 17l1.5-2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handlebar */}
      <path
        d="M5 11.5l2-2h2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Seat */}
      <path
        d="M13 11.5h2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Exhaust */}
      <path
        d="M19.5 14l2-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MusicianIcon({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Guitar body - figure-8 shape */}
      <path d="M15 18c0 2.2-1.34 4-3 4s-3-1.8-3-4 1.34-3.5 3-3.5 3 1.3 3 3.5z" />
      <path d="M14 11.5c0 1.65-0.9 3-2 3s-2-1.35-2-3 .9-2.5 2-2.5 2 .85 2 2.5z" />
      {/* Sound hole */}
      <circle cx="12" cy="18" r="1.2" />
      {/* Neck */}
      <line x1="12" y1="9" x2="12" y2="2" />
      {/* Headstock */}
      <path d="M10.5 2h3v1.5h-3z" />
      {/* Tuning pegs */}
      <line x1="10.5" y1="2.5" x2="9.5" y2="2.5" />
      <line x1="10.5" y1="3" x2="9.5" y2="3" />
      <line x1="13.5" y1="2.5" x2="14.5" y2="2.5" />
      <line x1="13.5" y1="3" x2="14.5" y2="3" />
      {/* Strings suggestion */}
      <line x1="11.3" y1="9" x2="11.3" y2="14.5" strokeWidth="0.5" />
      <line x1="12.7" y1="9" x2="12.7" y2="14.5" strokeWidth="0.5" />
    </svg>
  );
}

export const THEME_ICONS = {
  performer: PerformerIcon,
  dreamer: DreamerIcon,
  techie: TechieIcon,
  artist: ArtistIcon,
  gym: GymIcon,
  chef: ChefIcon,
  rider: RiderIcon,
  musician: MusicianIcon,
};
