"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PROGRESSIONS = {
  performer: [
    [220, 277.18, 329.63],
    [196, 246.94, 329.63],
    [174.61, 220, 293.66],
  ],
  dreamer: [
    [196, 246.94, 293.66],
    [174.61, 220, 293.66],
    [164.81, 207.65, 261.63],
  ],
  techie: [
    [207.65, 261.63, 329.63],
    [196, 246.94, 311.13],
    [185, 233.08, 293.66],
  ],
  artist: [
    [220, 261.63, 329.63],
    [196, 246.94, 311.13],
    [174.61, 220, 293.66],
  ],
  gym: [
    [164.81, 220, 261.63],
    [174.61, 220, 293.66],
    [196, 246.94, 293.66],
  ],
  chef: [
    [196, 261.63, 311.13],
    [174.61, 233.08, 293.66],
    [164.81, 220, 277.18],
  ],
  rider: [
    [130.81, 196, 261.63],
    [146.83, 220, 293.66],
    [164.81, 246.94, 329.63],
  ],
  musician: [
    [220, 293.66, 369.99],
    [196, 261.63, 329.63],
    [174.61, 233.08, 293.66],
  ],
};

const LOOP_INTERVAL = 3600;

function createOscillatorVoice(ctx, freq, type = "sine", detune = 0) {
  const osc = ctx.createOscillator();
  osc.type = type;
  osc.frequency.value = freq;
  osc.detune.value = detune;
  return osc;
}

export default function useAmbientAudio(theme) {
  const [isPlaying, setIsPlaying] = useState(false);

  const ctxRef = useRef(null);
  const masterRef = useRef(null);
  const loopRef = useRef(null);
  const chordIndexRef = useRef(0);

  const getContext = useCallback(() => {
    if (ctxRef.current) return ctxRef.current;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;

    const ctx = new AudioContext();
    ctxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.value = 0.28;
    master.connect(ctx.destination);
    masterRef.current = master;

    return ctx;
  }, []);

  const playChord = useCallback(
    (freqs, startTime) => {
      const ctx = getContext();
      if (!ctx || !masterRef.current) return;

      const chordBus = ctx.createGain();
      chordBus.gain.setValueAtTime(0.0001, startTime);
      chordBus.gain.linearRampToValueAtTime(0.18, startTime + 0.8);
      chordBus.gain.exponentialRampToValueAtTime(0.001, startTime + 3.2);
      chordBus.connect(masterRef.current);

      freqs.forEach((freq, index) => {
        const detune = index % 2 === 0 ? -4 : 4;
        const oscMain = createOscillatorVoice(ctx, freq, "sine", detune);
        const oscAir = createOscillatorVoice(ctx, freq * 2, "triangle", 2);

        const gainMain = ctx.createGain();
        gainMain.gain.value = 0.15;
        const gainAir = ctx.createGain();
        gainAir.gain.value = 0.05;

        oscMain.connect(gainMain);
        gainMain.connect(chordBus);

        oscAir.connect(gainAir);
        gainAir.connect(chordBus);

        oscMain.start(startTime + index * 0.03);
        oscAir.start(startTime + index * 0.03);
        oscMain.stop(startTime + 3.3);
        oscAir.stop(startTime + 3.3);
      });

      const bass = createOscillatorVoice(ctx, freqs[0] / 2, "sine", 0);
      const bassGain = ctx.createGain();
      bassGain.gain.value = 0.09;
      bass.connect(bassGain);
      bassGain.connect(chordBus);
      bass.start(startTime);
      bass.stop(startTime + 3.3);
    },
    [getContext]
  );

  const stopLoop = useCallback(() => {
    if (loopRef.current) {
      clearTimeout(loopRef.current);
      loopRef.current = null;
    }
  }, []);

  const startLoop = useCallback(() => {
    const ctx = getContext();
    if (!ctx) return;

    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const progression = PROGRESSIONS[theme] || PROGRESSIONS.performer;

    const tick = () => {
      const chord = progression[chordIndexRef.current % progression.length];
      playChord(chord, ctx.currentTime + 0.02);
      chordIndexRef.current += 1;
      loopRef.current = setTimeout(tick, LOOP_INTERVAL);
    };

    chordIndexRef.current = 0;
    tick();
  }, [getContext, playChord, theme]);

  const toggle = useCallback(() => {
    setIsPlaying((previous) => {
      const next = !previous;
      if (next) {
        startLoop();
      } else {
        stopLoop();
      }
      return next;
    });
  }, [startLoop, stopLoop]);

  const playChime = useCallback(() => {
    const ctx = getContext();
    if (!ctx || !masterRef.current) return;
    if (ctx.state === "suspended") ctx.resume().catch(() => {});

    const start = ctx.currentTime;
    [659.25, 987.77, 1318.51].forEach((freq, index) => {
      const osc = createOscillatorVoice(ctx, freq, "sine", 0);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.14 - index * 0.03, start + index * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.9 + index * 0.08);
      osc.connect(gain);
      gain.connect(masterRef.current);
      osc.start(start + index * 0.04);
      osc.stop(start + 1);
    });
  }, [getContext]);

  const playPop = useCallback(() => {
    const ctx = getContext();
    if (!ctx || !masterRef.current) return;
    if (ctx.state === "suspended") ctx.resume().catch(() => {});

    const start = ctx.currentTime;
    const osc = createOscillatorVoice(ctx, 520, "triangle", 0);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.07);
    osc.connect(gain);
    gain.connect(masterRef.current);
    osc.start(start);
    osc.stop(start + 0.08);
  }, [getContext]);

  useEffect(() => {
    return () => {
      stopLoop();
      if (ctxRef.current && ctxRef.current.state !== "closed") {
        ctxRef.current.close().catch(() => {});
      }
    };
  }, [stopLoop]);

  return { isPlaying, toggle, playChime, playPop };
}
