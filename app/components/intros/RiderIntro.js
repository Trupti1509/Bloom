"use client";

import { useEffect, useState } from "react";

export default function RiderIntro({ onComplete, onSkip, onSkid }) {
  const [phase, setPhase] = useState("racing");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("stopping"), 1200);
    const t2 = setTimeout(() => {
      setPhase("coming");
      onSkid?.();
    }, 1650);
    const t3 = setTimeout(() => onComplete?.(), 2250);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete, onSkid]);

  return (
    <section className={`introScene riderIntro phase-${phase}`} onClick={onSkip}>
      <button type="button" className="introSkipBtn" onClick={onSkip}>
        skip
      </button>

      <div className="introParallax introBackHills" />
      <div className="introParallax introMidRoad" />
      <div className="introParallax introFrontDust" />

      {phase !== "coming" ? (
        <>
          <div className="riderHeadlight" />
          <div className="riderStreaks" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} style={{ "--si": i }} />
            ))}
          </div>
          <div className={`riderMotoWrap ${phase === "stopping" ? "riderSkid" : ""}`}>
            <svg viewBox="0 0 280 130" className="riderMotoSvg" aria-hidden="true">
              <ellipse cx="140" cy="112" rx="96" ry="12" className="motoShadow" />
              <circle cx="72" cy="88" r="22" className="motoWheel" />
              <circle cx="206" cy="88" r="22" className="motoWheel" />
              <circle cx="72" cy="88" r="9" className="motoWheelHub" />
              <circle cx="206" cy="88" r="9" className="motoWheelHub" />
              <path d="M72 88 L110 58 L162 58 L196 44 L224 44" className="motoFrame" />
              <path d="M112 58 L146 88 L188 88" className="motoFrame" />
              <path d="M118 50 C132 42 154 42 170 50 L164 66 H122 Z" className="motoTank" />
              <path d="M170 52 L188 52 C196 52 202 58 202 66 L168 66 Z" className="motoSeat" />
              <path d="M202 44 L216 32" className="motoHandle" />
              <path d="M102 88 L92 104" className="motoExhaust" />
              <circle cx="230" cy="44" r="7" className="motoLight" />

              <g className="motoRider">
                <circle cx="160" cy="26" r="12" className="riderHead" />
                <path d="M146 26 C150 10 176 8 184 24 C180 26 174 28 168 28 C160 28 152 28 146 26 Z" className="riderHelmetShell" />
                <path d="M170 24 C176 24 182 28 184 34 C178 36 170 36 164 34 C164 30 166 26 170 24 Z" className="riderHelmetVisor" />
                <path d="M150 40 C162 34 178 36 190 48 C188 60 182 68 174 74 C162 68 154 58 150 40 Z" className="riderJacket" />
                <path d="M170 50 C186 52 198 58 212 68" className="riderArmStroke" />
                <path d="M156 52 C146 60 138 70 132 82" className="riderArmStroke" />
                <path d="M168 72 C182 74 192 78 202 88" className="riderLegStroke" />
                <path d="M154 72 C146 78 138 86 130 98" className="riderLegStroke" />
                <path d="M148 18 C146 34 138 42 128 48" className="riderHairTrail" />
              </g>
            </svg>
          </div>
          <div className="riderSparks" aria-hidden="true">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} style={{ "--pi": i }} />
            ))}
          </div>
          <div className="riderSmoke" />
        </>
      ) : (
        <div className="introSilhouetteWalk" aria-hidden="true" />
      )}

      <p className="introCaption">
        {phase === "racing" && "She is racing through the night for you."}
        {phase === "stopping" && "Brakes. Sparks. One perfect stop."}
        {phase === "coming" && "She walks in with your bloom."}
      </p>
    </section>
  );
}
