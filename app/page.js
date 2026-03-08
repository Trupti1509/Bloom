"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BouquetCluster from "./components/flowers/BouquetCluster";
import { THEME_ICONS } from "./components/icons/ThemeIcons";

const HERO_BOUQUET = [
  { id: "rose" },
  { id: "tulip" },
  { id: "sunflower" },
  { id: "blossom" },
  { id: "daisy" },
  { id: "hibiscus" },
  { id: "wildflower" },
  { id: "chocolate" },
  { id: "leaf" },
  { id: "sparkle" },
  { id: "butterfly" },
  { id: "dove" },
];

const HIGHLIGHTS = [
  { title: "Cinematic Reveal", text: "A full-screen reveal with dramatic flower motion." },
  { title: "Personal Postcard", text: "Your message appears like handcrafted stationery." },
  { title: "Share-Ready", text: "WhatsApp link with rich preview after deploy." },
];

const THEME_PREVIEW = ["performer", "dreamer", "techie", "artist", "gym", "musician"];

export default function HomePage() {
  return (
    <main className="landingRoot">
      <div className="landingBackdrop" aria-hidden="true" />

      <section className="landingHero">
        <div className="landingCopy">
          <p className="landingOverline">Secret Bloom</p>
          <h1>Happy Women&apos;s Day</h1>
          <p>
            Build a visual bouquet and deliver your message as a beautiful postcard.
          </p>
          <div className="landingActions">
            <Link href="/create" className="landingPrimaryBtn">
              Create her bloom
            </Link>
            <Link href="/create" className="landingSecondaryBtn">
              Try it now
            </Link>
          </div>
        </div>

        <div className="landingVisual" aria-hidden="true">
          <div className="landingVisualGlow" />
          <div className="landingBouquetHero">
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <BouquetCluster items={HERO_BOUQUET} variant="hero" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="landingHighlights">
        {HIGHLIGHTS.map((item, index) => (
          <article key={item.title} className="landingHighlightCard" style={{ "--hi": index }}>
            <p className="landingIndex">0{index + 1}</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="landingThemes">
        <p className="landingThemesTitle">Theme styles available</p>
        <div className="landingThemeRow">
          {THEME_PREVIEW.map((themeId) => {
            const Icon = THEME_ICONS[themeId];
            return (
              <div key={themeId} className="landingThemeChip">
                <Icon size={22} />
                <span>{themeId}</span>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
