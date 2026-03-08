"use client";

import { useEffect } from "react";

const MODE_COPY = {
  performer: "The spotlight finds her first.",
  dreamer: "A slow galaxy of quiet wonder.",
  artist: "Color spills into the night.",
  chef: "Warm light rises like steam.",
};

function PerformerScene() {
  return (
    <div className="genericScene performerScene" aria-hidden="true">
      <div className="genericSceneHalo performerGlow" />
      <div className="performerBeams">
        <span />
        <span />
        <span />
      </div>
      <svg viewBox="0 0 320 280" className="genericSceneSvg">
        <ellipse cx="160" cy="240" rx="94" ry="20" className="sceneFloor performerFloor" />
        <circle cx="160" cy="38" r="18" className="performerBall" />
        <path d="M145 38 H175" className="performerBallLine" />
        <path d="M160 21 V55" className="performerBallLine" />
        <path d="M98 110 C124 78 160 62 202 70" className="performerBeamArc" />
        <path d="M160 96 V192" className="performerMicStand" />
        <path d="M146 96 C148 82 154 74 160 74 C166 74 172 82 174 96" className="performerMicHead" />

        <g className="performerSinger">
          <path d="M118 78 C122 54 148 44 166 56 C178 70 178 96 164 114 C154 126 140 128 128 120 C118 112 114 94 118 78 Z" className="performerSkin" />
          <path d="M120 78 C128 44 170 44 178 82 C178 100 170 122 160 136 C156 108 146 78 120 78 Z" className="performerHair" />
          <path d="M126 132 C138 122 154 122 166 132 C174 156 176 182 182 214 C158 222 136 222 114 214 C118 188 120 158 126 132 Z" className="performerDress" />
          <path d="M144 136 C154 130 164 128 174 128 C178 142 178 158 176 176" className="performerArmStroke" />
          <path d="M126 142 C116 150 108 160 104 172" className="performerArmStroke" />
          <circle cx="104" cy="172" r="7" className="performerSkin" />
        </g>
      </svg>
      <div className="performerConfetti">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} style={{ "--ci": i }} />
        ))}
      </div>
    </div>
  );
}

function DreamerScene() {
  return (
    <div className="genericScene dreamerScene" aria-hidden="true">
      <div className="genericSceneHalo dreamerGlow" />
      <svg viewBox="0 0 320 280" className="genericSceneSvg">
        <path d="M214 56 C194 30 198 -2 236 0 C214 12 214 42 242 56 C230 62 220 62 214 56 Z" className="dreamMoon" />
        <path d="M116 184 C144 124 214 96 272 120 C248 178 186 214 130 204 C110 198 106 190 116 184 Z" className="dreamCloud" />
        <path d="M126 180 C146 156 166 138 188 128" className="dreamTrail" />
        <g className="dreamGirl">
          <circle cx="182" cy="112" r="12" className="dreamSkin" />
          <path d="M170 122 C174 102 192 96 202 110 C206 122 204 138 192 146 C182 144 174 136 170 122 Z" className="dreamHair" />
          <path d="M176 126 C186 124 194 124 202 130 C202 146 198 160 188 172 C176 164 170 152 170 138 Z" className="dreamDress" />
        </g>
      </svg>
      <div className="dreamStars">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} style={{ "--si": i }} />
        ))}
      </div>
      <div className="dreamSpiral">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} style={{ "--ri": i }} />
        ))}
      </div>
    </div>
  );
}

function ArtistScene() {
  return (
    <div className="genericScene artistScene" aria-hidden="true">
      <div className="genericSceneHalo artistGlow" />
      <svg viewBox="0 0 320 280" className="genericSceneSvg">
        <ellipse cx="160" cy="238" rx="92" ry="20" className="sceneFloor artistFloor" />
        <path d="M182 64 L164 220" className="artistEasel" />
        <path d="M236 64 L254 220" className="artistEasel" />
        <path d="M154 220 H264" className="artistEasel" />
        <rect x="172" y="72" width="74" height="92" rx="12" className="artistCanvas" />
        <path d="M190 104 C212 82 236 90 230 112 C224 134 194 130 190 104 Z" className="artistSwashOne" />
        <path d="M184 128 C212 110 244 124 232 148 C216 164 186 156 184 128 Z" className="artistSwashTwo" />

        <g className="artistFigure">
          <circle cx="114" cy="96" r="18" className="artistSkin" />
          <path d="M92 90 C98 62 132 60 142 84 C138 80 130 76 118 76 C108 76 98 80 92 90 Z" className="artistBeret" />
          <path d="M98 118 C106 108 122 108 130 118 C138 144 142 176 146 214 C128 220 108 220 92 214 C94 176 96 144 98 118 Z" className="artistCoat" />
          <path d="M130 132 C148 128 158 134 168 146" className="artistArmStroke" />
          <path d="M96 142 C82 150 74 164 70 178" className="artistArmStroke" />
          <ellipse cx="68" cy="184" rx="18" ry="12" className="artistPalette" />
          <circle cx="60" cy="182" r="3" className="artistPaletteDotOne" />
          <circle cx="70" cy="176" r="3" className="artistPaletteDotTwo" />
          <circle cx="78" cy="184" r="3" className="artistPaletteDotThree" />
          <path d="M154 150 L182 126" className="artistBrush" />
          <path d="M178 128 C188 124 196 126 204 134" className="artistBrushTip" />
        </g>
      </svg>
      <div className="artistSplashes">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} style={{ "--ai": i }} />
        ))}
      </div>
    </div>
  );
}

function ChefScene() {
  return (
    <div className="genericScene chefScene" aria-hidden="true">
      <div className="genericSceneHalo chefGlow" />
      <svg viewBox="0 0 320 280" className="genericSceneSvg">
        <circle cx="224" cy="82" r="44" className="chefWindowGlow" />
        <ellipse cx="160" cy="238" rx="96" ry="20" className="sceneFloor chefFloor" />

        <g className="chefFigure">
          <circle cx="126" cy="86" r="20" className="chefSkin" />
          <path d="M104 86 C108 62 144 60 148 88 C146 102 140 112 132 118 C120 118 110 108 104 86 Z" className="chefHair" />
          <path d="M96 62 C96 42 154 40 156 62 C144 58 132 56 124 56 C116 56 106 58 96 62 Z" className="chefHatTop" />
          <rect x="94" y="60" width="64" height="14" rx="7" className="chefHatBand" />
          <path d="M108 114 C122 108 138 108 152 114 C162 140 166 176 170 214 C146 220 118 220 96 214 C98 178 100 142 108 114 Z" className="chefCoat" />
          <path d="M150 140 C176 134 198 138 222 154" className="chefArmStroke" />
          <path d="M102 142 C90 148 82 158 76 170" className="chefArmStroke" />
          <circle cx="74" cy="172" r="7" className="chefSkin" />
        </g>

        <g className="chefService">
          <path d="M176 154 C176 112 258 112 258 154" className="chefCloche" />
          <path d="M168 156 H270" className="chefTray" />
          <circle cx="218" cy="94" r="9" className="chefHandle" />
        </g>
      </svg>
      <div className="chefSteam">
        <span />
        <span />
        <span />
      </div>
      <div className="chefWarmDots">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} style={{ "--wi": i }} />
        ))}
      </div>
    </div>
  );
}

function SceneByTheme({ theme }) {
  if (theme === "dreamer") return <DreamerScene />;
  if (theme === "artist") return <ArtistScene />;
  if (theme === "chef") return <ChefScene />;
  return <PerformerScene />;
}

export default function GenericIntro({ theme, onComplete, onSkip }) {
  useEffect(() => {
    const t = setTimeout(() => onComplete?.(), 1550);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <section className={`introScene genericIntro generic-${theme}`} onClick={onSkip}>
      <button type="button" className="introSkipBtn" onClick={onSkip}>
        skip
      </button>

      <div className="genericAtmos" aria-hidden="true">
        {Array.from({ length: 26 }).map((_, i) => (
          <span key={i} style={{ "--pi": i }} />
        ))}
      </div>

      <SceneByTheme theme={theme} />

      <p className="introCaption">{MODE_COPY[theme] || MODE_COPY.performer}</p>
    </section>
  );
}
