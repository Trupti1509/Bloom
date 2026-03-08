"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BouquetCluster from "../flowers/BouquetCluster";
import { FLOWER_COMPONENTS } from "../flowers/FlowerSVGs";
import { THEME_ICONS } from "../icons/ThemeIcons";

function CornerFlourish({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M6 58 C18 48 20 36 22 24 C24 14 30 10 40 8" className="postFlourishStroke" />
      <path d="M40 8 C44 10 48 14 50 20 C46 22 42 24 38 24 C34 18 36 12 40 8 Z" className="postFlourishLeaf" />
      <path d="M26 28 C30 30 34 34 36 40 C32 42 28 44 24 44 C22 36 22 30 26 28 Z" className="postFlourishLeaf" />
    </svg>
  );
}

function PostcardIllustration({ accent = "#f39aa8" }) {
  const [useCustomImage, setUseCustomImage] = useState(true);

  if (useCustomImage) {
    return (
      <div className="postHeroArt" aria-hidden="true">
        <img
          src="/postcard-hero.png"
          alt=""
          className="postHeroImg"
          onError={() => setUseCustomImage(false)}
        />
      </div>
    );
  }

  return (
    <div className="postHeroArt" aria-hidden="true">
      <svg viewBox="0 0 360 220" className="postHeroSvg">
        <rect x="12" y="12" width="336" height="196" rx="30" fill="#7a50b4" />

        <path d="M52 38 C58 26 74 22 84 32 C74 38 64 42 52 38 Z" fill="#ffd37a" opacity="0.9" />
        <path d="M292 34 C304 24 320 24 330 34 C318 40 304 40 292 34 Z" fill="#a8cf9e" opacity="0.82" />
        <path d="M58 156 C66 146 82 146 90 156 C80 164 68 164 58 156 Z" fill="#ffc785" opacity="0.88" />
        <path d="M286 160 C296 148 314 148 324 160 C312 166 298 168 286 160 Z" fill="#ffd37a" opacity="0.88" />

        <path d="M206 24 C246 20 286 50 294 108 C300 150 298 194 318 208 L258 208 C230 188 224 160 222 124 C220 84 206 46 178 26 C188 24 198 24 206 24 Z" fill="#603115" />
        <path d="M168 74 C172 42 208 28 232 42 C246 50 254 70 248 92 C240 118 214 132 188 124 C172 118 164 98 168 74 Z" fill="#eca383" />
        <path d="M170 76 C176 40 208 24 236 32 C250 46 256 72 252 104 C242 96 234 92 222 90 C214 64 198 44 170 76 Z" fill="#5d2f17" />
        <path d="M180 42 C208 52 230 82 234 124 C238 170 250 192 286 208 L180 208 C162 192 152 172 152 140 C152 98 162 62 180 42 Z" fill="#6d381c" />

        <path d="M112 208 C116 176 128 146 150 124 C168 106 188 98 214 100 C236 102 250 112 264 128 C278 144 286 174 290 208 Z" fill={accent} opacity="0.88" />
        <path d="M130 208 C134 170 144 138 160 120" stroke="#f9bfba" strokeWidth="2" opacity="0.45" />
        <path d="M146 208 C150 168 162 136 178 118" stroke="#f9bfba" strokeWidth="2" opacity="0.45" />
        <path d="M162 208 C166 166 178 134 194 118" stroke="#f9bfba" strokeWidth="2" opacity="0.45" />
        <path d="M178 208 C182 170 192 138 210 120" stroke="#f9bfba" strokeWidth="2" opacity="0.45" />
        <path d="M194 208 C200 170 210 140 226 124" stroke="#f9bfba" strokeWidth="2" opacity="0.45" />

        <path d="M114 154 C132 144 152 144 170 154 C156 172 134 180 112 178 C108 170 108 162 114 154 Z" fill="#e9a484" />
        <path d="M228 126 C246 124 262 132 280 152 C288 162 292 170 304 176 C286 182 262 180 238 164 C226 154 222 140 228 126 Z" fill="#e9a484" />

        <path d="M170 124 C194 114 226 118 258 134 C248 158 222 176 188 182 C166 168 158 148 170 124 Z" fill="#c5a75e" />
        <path d="M158 134 C176 118 198 114 222 120 C214 146 196 166 168 182 C150 168 146 148 158 134 Z" fill="#95af7a" />
        <path d="M188 122 C204 112 226 112 248 120 C240 138 224 152 202 164 C184 156 180 140 188 122 Z" fill="#9ab184" />
        <path d="M148 140 C160 130 176 126 192 130 C186 146 174 160 156 172 C144 164 140 150 148 140 Z" fill="#74a44f" />
        <path d="M220 134 C232 126 248 126 266 132 C262 146 250 158 234 168 C222 160 216 146 220 134 Z" fill="#f0ca8b" />

        <g transform="translate(156 128) rotate(-12)">
          <ellipse cx="0" cy="-18" rx="10" ry="24" fill="#75a5e8" />
          <ellipse cx="18" cy="-10" rx="12" ry="26" fill="#9dc568" />
          <ellipse cx="34" cy="-18" rx="10" ry="24" fill="#f0b571" />
          <ellipse cx="48" cy="-6" rx="12" ry="26" fill="#d6b95f" />
          <ellipse cx="62" cy="-18" rx="10" ry="24" fill="#f3c08e" />
        </g>
      </svg>
    </div>
  );
}

export default function BloomReveal({ open, bouquet, theme, onClose, onItemBloom }) {
  const [showContent, setShowContent] = useState(false);

  const items = useMemo(() => (bouquet?.items || []).slice(0, 12), [bouquet?.items]);
  const message = (bouquet?.message || "Your bloom is here.").trim();
  const sender = (bouquet?.fromName || "").trim();
  const recipient = (bouquet?.recipientName || "you").trim() || "you";
  const ThemeIcon = THEME_ICONS[theme?.icon] || THEME_ICONS.performer;
  const messageClass = useMemo(() => {
    if (message.length <= 70) return "postMessage-short";
    if (message.length <= 170) return "postMessage-medium";
    return "postMessage-long";
  }, [message]);

  const bloomFieldItems = useMemo(() => {
    const source = items.length ? items : [{ id: "rose" }];
    return Array.from({ length: 28 }, (_, index) => source[index % source.length]);
  }, [items]);

  useEffect(() => {
    if (!open) return undefined;

    setShowContent(true);

    const timers = [];
    items.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          onItemBloom?.();
        }, 160 + index * 70)
      );
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [open, items, onItemBloom]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="revealXOverlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="revealXBloomField" aria-hidden="true">
            {bloomFieldItems.map((item, index) => {
              const Flower = FLOWER_COMPONENTS[item.id] || FLOWER_COMPONENTS.rose;
              return (
                <motion.div
                  key={`${item.id}-${index}`}
                  className="revealXFieldFlower"
                  style={{
                    left: `${(index * 17) % 100}%`,
                    top: `${(index * 23) % 100}%`,
                    "--fi": index,
                    "--fr": `${index * 9}deg`,
                    "--fdur": `${10 + (index % 6) * 0.9}s`,
                  }}
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 0.9, scale: 1 }}
                  transition={{ delay: 0.04 * index, duration: 0.55 }}
                >
                  <Flower size={index % 5 === 0 ? 98 : 72} animated={false} />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="revealXShell"
            initial={{ y: 90, opacity: 0 }}
            animate={showContent ? { y: 0, opacity: 1 } : { y: 90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="revealXTopbar">
              <div className="revealXBadge">
                <ThemeIcon size={20} />
                <span>
                  For {recipient}
                </span>
              </div>
              <button type="button" className="revealXClose" onClick={onClose}>
                close
              </button>
            </div>

            <div className="revealXGrid">
              <section className="revealXBloomPanel">
                <h2>Happy Women&apos;s Day</h2>
                <p className="revealXSub">Every flower carries meaning.</p>

                <div className="revealXCenterBloom">
                  <motion.div
                    className="revealXCenterBouquet"
                    initial={{ opacity: 0, scale: 0.55, y: 24 }}
                    animate={showContent ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.55, y: 24 }}
                    transition={{ delay: 0.24, type: "spring", stiffness: 240, damping: 18 }}
                  >
                    <BouquetCluster items={items} variant="card" />
                  </motion.div>
                </div>

                <div className="revealXFlowerList">
                  {items.map((item, index) => (
                    <motion.div
                      key={`m-${item.id}-${index}`}
                      className="revealXFlowerRow"
                      initial={{ opacity: 0, y: 12 }}
                      animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                      transition={{ delay: 0.38 + index * 0.08 }}
                    >
                      <span className="revealXFlowerIndex">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{item.label}</h3>
                        <p>{item.meaning}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section className="revealXPostcardPanel">
                <div className="postcardPaper">
                  <CornerFlourish className="postFlourish postFlourishTop" />
                  <CornerFlourish className="postFlourish postFlourishBottom" />

                  <PostcardIllustration accent={theme?.accent} />
                  <p className="postGreeting">Happy Women&apos;s Day to {recipient}</p>
                  <p className={`postMessage ${messageClass}`} aria-label={message}>{message}</p>

                  {sender ? <p className="postSignature">{sender}</p> : null}

                  {sender ? (
                    <div className="postSignatureMark" aria-hidden="true">
                      <svg viewBox="0 0 40 16" width="40" height="16">
                        <path d="M2 8 C12 -2 22 18 38 8" className="postNibStroke" />
                      </svg>
                    </div>
                  ) : null}

                  <div className="postWaxSeal" aria-hidden="true">
                    <span>
                      <ThemeIcon size={16} />
                    </span>
                  </div>

                  <a href="/" className="postCreateBtn">
                    Make one too
                  </a>

                  <div className="postStamp" aria-hidden="true">
                    <div className="postStampInner">
                      <ThemeIcon size={18} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
