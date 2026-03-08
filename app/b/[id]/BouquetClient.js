"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BokehCanvas from "../../components/canvas/BokehCanvas";
import CanvasParticles from "../../components/canvas/CanvasParticles";
import LoadingBloom from "../../components/flowers/LoadingBloom";
import DancingGirl from "../../components/girl/DancingGirl";
import GymGirl from "../../components/girl/GymGirl";
import BloomReveal from "../../components/reveal/BloomReveal";
import RiderIntro from "../../components/intros/RiderIntro";
import GymIntro from "../../components/intros/GymIntro";
import MusicianIntro from "../../components/intros/MusicianIntro";
import TechieIntro from "../../components/intros/TechieIntro";
import GenericIntro from "../../components/intros/GenericIntro";
import useGyroParallax from "../../hooks/useGyroParallax";
import useAmbientAudio from "../../hooks/useAmbientAudio";
import { resolveTheme, THEMES } from "../../../data/themes.js";
import { THEME_ICONS } from "../../components/icons/ThemeIcons";

function vibrate(pattern) {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

function ConstellationLayer({ initial = "S" }) {
  const heart = [
    [12, 20], [16, 16], [20, 14], [24, 16], [28, 20], [24, 26], [20, 30], [16, 26],
  ];
  const flower = [
    [74, 18], [70, 24], [74, 30], [80, 30], [84, 24], [80, 18], [77, 24],
  ];

  const letterPoints = Array.from({ length: 7 }, (_, i) => [
    44 + i * 2,
    16 + ((initial.charCodeAt(0) + i * 5) % 12),
  ]);

  const groups = [heart, flower, letterPoints];

  return (
    <svg className="constellationLayer" viewBox="0 0 100 50" preserveAspectRatio="none" aria-hidden="true">
      {groups.map((group, gi) => (
        <g key={gi}>
          {group.map(([x, y], i) => {
            const next = group[(i + 1) % group.length];
            return (
              <line
                key={`l-${gi}-${i}`}
                x1={x}
                y1={y}
                x2={next[0]}
                y2={next[1]}
                className="constellationLine"
              />
            );
          })}
          {group.map(([x, y], i) => (
            <circle key={`c-${gi}-${i}`} cx={x} cy={y} r="0.45" className="constellationStar" />
          ))}
        </g>
      ))}
    </svg>
  );
}

function IntroRouter({ theme, onComplete, onSkip, onRiderSkid }) {
  if (theme === "rider") {
    return <RiderIntro onComplete={onComplete} onSkip={onSkip} onSkid={onRiderSkid} />;
  }
  if (theme === "gym") {
    return <GymIntro onComplete={onComplete} onSkip={onSkip} />;
  }
  if (theme === "musician") {
    return <MusicianIntro onComplete={onComplete} onSkip={onSkip} />;
  }
  if (theme === "techie") {
    return <TechieIntro onComplete={onComplete} onSkip={onSkip} />;
  }
  return <GenericIntro theme={theme} onComplete={onComplete} onSkip={onSkip} />;
}

export default function BouquetClient({ initialBouquet }) {
  const [phase, setPhase] = useState("intro");
  const [offering, setOffering] = useState(false);
  const showerRef = useRef(null);

  const themeId = useMemo(
    () => resolveTheme(initialBouquet?.theme || "performer"),
    [initialBouquet?.theme]
  );

  const theme = THEMES[themeId];
  const items = initialBouquet?.items || [];
  const recipient = (initialBouquet?.recipientName || "you").trim();
  const firstInitial = (recipient[0] || "S").toUpperCase();

  const parallax = useGyroParallax();
  const { isPlaying, toggle, playChime, playPop } = useAmbientAudio(themeId);

  const bgX = (parallax.x * -8).toFixed(2);
  const bgY = (parallax.y * -8).toFixed(2);
  const midX = (parallax.x * 3).toFixed(2);
  const midY = (parallax.y * 2.5).toFixed(2);
  const fgX = (parallax.x * 12).toFixed(2);
  const fgY = (parallax.y * 12).toFixed(2);

  const openReveal = useCallback(() => {
    if (phase !== "idle") return;
    vibrate(15);
    setOffering(true);

    window.setTimeout(() => {
      const bursts = [
        [0.5, 0.58, 140, 1.25],
        [0.28, 0.46, 95, 1.05],
        [0.72, 0.44, 95, 1.05],
        [0.18, 0.7, 70, 0.95],
        [0.82, 0.68, 70, 0.95],
      ];
      bursts.forEach(([x, y, count, force], index) => {
        window.setTimeout(() => {
          showerRef.current?.trigger?.(
            window.innerWidth * x,
            window.innerHeight * y,
            { count, force }
          );
        }, index * 90);
      });
      vibrate([10, 30, 10]);
      playChime();
      setPhase("revealed");
    }, 280);

    window.setTimeout(() => setOffering(false), 900);
  }, [phase, playChime]);

  const closeReveal = useCallback(() => {
    setPhase("idle");
  }, []);

  const onRiderSkid = useCallback(() => {
    vibrate([5, 15, 5, 15, 30]);
  }, []);

  if (!initialBouquet) {
    return (
      <main className="bloomRoot bloomEmpty">
        <LoadingBloom />
        <p className="bloomEmptyText">This bloom was not found.</p>
        <a href="/create" className="sceneLinkBtn">
          Create a new bloom
        </a>
      </main>
    );
  }

  const ThemeIcon = THEME_ICONS[theme.icon] || THEME_ICONS.performer;

  return (
    <main className={`bloomRoot theme-${themeId}`} style={{ "--theme-accent": theme.accent }}>
      <div className="sceneGradient" style={{ transform: `translate3d(${bgX}px, ${bgY}px, 0)` }} />
      <ConstellationLayer initial={firstInitial} />
      <div className="bokehWrap" style={{ transform: `translate3d(${fgX}px, ${fgY}px, 0)` }}>
        <BokehCanvas themeColor={theme.accent} />
      </div>
      <CanvasParticles ref={showerRef} trailActive={phase !== "intro"} />

      <div className="sceneHeaderBadge" style={{ transform: `translate3d(${midX}px, ${midY}px, 0)` }}>
        <ThemeIcon className="sceneHeaderIcon" size={22} />
        <span>
          {recipient ? `For ${recipient}` : "A bloom for you"}
        </span>
      </div>

      {phase !== "intro" ? (
        <button type="button" className="sceneAudioBtn" onClick={toggle}>
          {isPlaying ? "sound on" : "sound off"}
        </button>
      ) : null}

      <AnimatePresence mode="wait">
        {phase === "intro" ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="introMount"
          >
            <IntroRouter
              theme={themeId}
              onComplete={() => setPhase("idle")}
              onSkip={() => setPhase("idle")}
              onRiderSkid={onRiderSkid}
            />
          </motion.div>
        ) : (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="idleMount"
            onClick={phase === "idle" ? openReveal : undefined}
            role={phase === "idle" ? "button" : undefined}
            tabIndex={phase === "idle" ? 0 : undefined}
            onKeyDown={(event) => {
              if ((event.key === "Enter" || event.key === " ") && phase === "idle") {
                event.preventDefault();
                openReveal();
              }
            }}
            aria-label={phase === "idle" ? "Open bloom" : undefined}
          >
            <div className="sceneGirlWrap" style={{ transform: `translate3d(${midX}px, ${midY}px, 0)` }}>
              {themeId === "gym" ? (
                <GymGirl items={items} walkIn={false} offering={offering} />
              ) : (
                <DancingGirl theme={themeId} items={items} walkIn={false} offering={offering} />
              )}
            </div>
            {phase === "idle" ? <div className="sceneTapPrompt">tap to open her bloom</div> : null}
          </motion.div>
        )}
      </AnimatePresence>

      <BloomReveal
        open={phase === "revealed"}
        bouquet={initialBouquet}
        theme={theme}
        onClose={closeReveal}
        onItemBloom={() => {
          vibrate(8);
          playPop();
        }}
      />
    </main>
  );
}
