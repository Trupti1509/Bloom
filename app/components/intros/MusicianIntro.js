"use client";

import { useEffect, useState } from "react";

export default function MusicianIntro({ onComplete, onSkip }) {
  const [phase, setPhase] = useState("curtain");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("playing"), 560);
    const t2 = setTimeout(() => setPhase("coming"), 1620);
    const t3 = setTimeout(() => onComplete?.(), 2240);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <section className={`introScene musicianIntro phase-${phase}`} onClick={onSkip}>
      <button type="button" className="introSkipBtn" onClick={onSkip}>
        skip
      </button>

      <div className={`musicianCurtain curtainLeft ${phase !== "curtain" ? "open" : ""}`} />
      <div className={`musicianCurtain curtainRight ${phase !== "curtain" ? "open" : ""}`} />
      <div className="musicianStageFrame" aria-hidden="true" />

      {phase !== "coming" ? (
        <>
          <div className={`musicianSpotlight ${phase === "playing" ? "locked" : ""}`} />
          <div className="musicianStageFog" />
          <svg viewBox="0 0 180 220" className="musicianGuitar" aria-hidden="true">
            <path d="M90 24 L92 92" className="gNeck" />
            <path d="M70 92 C60 110 62 152 88 164 C112 174 132 152 128 126 C124 100 104 88 90 92 Z" className="gBody" />
            <circle cx="96" cy="126" r="12" className="gHole" />
            <line x1="86" y1="52" x2="98" y2="152" className="gString" />
            <line x1="90" y1="50" x2="102" y2="152" className="gString" />
            <line x1="94" y1="50" x2="106" y2="150" className="gString" />
          </svg>
          <div className="musicianWaves" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="musicianEq" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} style={{ "--ei": i }} />
            ))}
          </div>
          <div className="musicianFloorGlow" aria-hidden="true" />
        </>
      ) : (
        <div className="introSilhouetteWalk" aria-hidden="true" />
      )}

      <p className="introCaption">
        {phase === "curtain" && "Curtains opening."}
        {phase === "playing" && "A private stage just for you."}
        {phase === "coming" && "She brings the bloom to center stage."}
      </p>
    </section>
  );
}
