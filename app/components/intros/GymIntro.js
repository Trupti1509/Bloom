"use client";

import { useEffect, useState } from "react";

export default function GymIntro({ onComplete, onSkip }) {
  const [phase, setPhase] = useState("training");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("power"), 980);
    const t2 = setTimeout(() => setPhase("coming"), 1580);
    const t3 = setTimeout(() => onComplete?.(), 2140);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <section className={`introScene gymIntro phase-${phase}`} onClick={onSkip}>
      <button type="button" className="introSkipBtn" onClick={onSkip}>
        skip
      </button>

      {phase !== "coming" ? (
        <>
          <div className="gymStageWrap" aria-hidden="true">
            <svg viewBox="0 0 280 280" className="gymFighterSvg">
              <ellipse cx="140" cy="244" rx="84" ry="18" className="gymFloorGlow" />
              <path d="M48 108 H232" className="gymRope gymRopeBack" />
              <path d="M42 128 H238" className="gymRope gymRopeMid" />
              <path d="M36 148 H244" className="gymRope gymRopeFront" />

              <g className="gymFighter">
                <path d="M110 78 C114 50 150 50 156 80 C156 96 150 110 138 120 C124 118 114 102 110 78 Z" className="gymSkin" />
                <path d="M108 78 C114 48 148 46 158 74 C156 74 152 74 148 74 C142 58 128 54 108 78 Z" className="gymHair" />
                <path d="M100 72 H160" className="gymHeadband" />
                <path d="M114 122 C126 114 144 114 156 122 C164 144 166 162 170 186 C154 192 126 192 110 186 C112 162 114 144 114 122 Z" className="gymTop" />
                <path d="M116 186 C130 192 150 192 164 186 C170 202 172 216 176 238 C160 246 122 246 104 238 C108 216 110 202 116 186 Z" className="gymBottom" />

                <path d="M150 136 C170 136 188 146 204 164" className="gymPunchArm" />
                <circle cx="212" cy="170" r="12" className="gymGlove" />
                <path d="M118 136 C104 142 94 152 88 164" className="gymGuardArm" />
                <circle cx="86" cy="170" r="11" className="gymGlove" />

                <path d="M124 238 C118 252 114 266 112 280" className="gymLegStroke" />
                <path d="M154 238 C160 252 166 266 170 280" className="gymLegStroke" />
              </g>
            </svg>
          </div>

          <div className="gymAura" aria-hidden="true">
            <span className="gymRing ring1" />
            <span className="gymRing ring2" />
            <span className="gymRing ring3" />
          </div>
          <div className="gymShards" aria-hidden="true">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} style={{ "--pi": i }} />
            ))}
          </div>
          <div className="gymSweat" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} style={{ "--si": i }} />
            ))}
          </div>
        </>
      ) : (
        <div className="introSilhouetteWalk gymWalk" aria-hidden="true" />
      )}

      <p className="introCaption">
        {phase === "training" && "Focus. Breath. Rhythm."}
        {phase === "power" && "Power surge unlocked."}
        {phase === "coming" && "She steps in with your bloom."}
      </p>
    </section>
  );
}
