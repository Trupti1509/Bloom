"use client";

import { useEffect, useState } from "react";

const CODE_LINES = [
  "booting bloom kernel...",
  "hydrate(scene)",
  "compile feelings.ts",
  "deploy affection v1",
];

export default function TechieIntro({ onComplete, onSkip }) {
  const [phase, setPhase] = useState("booting");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("compiled"), 950);
    const t2 = setTimeout(() => setPhase("coming"), 1350);
    const t3 = setTimeout(() => onComplete?.(), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <section className={`introScene techieIntro phase-${phase}`} onClick={onSkip}>
      <button type="button" className="introSkipBtn" onClick={onSkip}>
        skip
      </button>

      {phase !== "coming" ? (
        <>
          <div className="techPanels" aria-hidden="true">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="techPanel" style={{ "--pi": i }}>
                {CODE_LINES.map((line, li) => (
                  <p key={li} style={{ "--li": li }}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="techCompileFlash" />
        </>
      ) : (
        <div className="introSilhouetteWalk" aria-hidden="true" />
      )}

      <p className="introCaption">
        {phase === "booting" && "Boot sequence in progress."}
        {phase === "compiled" && "Compiled. No errors."}
        {phase === "coming" && "She steps out with your bloom."}
      </p>
    </section>
  );
}
