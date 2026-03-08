"use client";

import { useMemo, useState } from "react";
import { BOUQUET_ITEMS } from "../../data/suggestions.js";
import { THEME_LIST } from "../../data/themes.js";
import { THEME_ICONS } from "../components/icons/ThemeIcons";
import BouquetCluster from "../components/flowers/BouquetCluster";
import { FLOWER_COMPONENTS } from "../components/flowers/FlowerSVGs";
import WhatsAppIcon from "../components/icons/WhatsAppIcon";

const MAX_ITEMS = 12;
const MAX_MSG = 280;

export default function CreatePage() {
  const [themeId, setThemeId] = useState("performer");
  const [recipientName, setRecipientName] = useState("");
  const [selected, setSelected] = useState([]);
  const [message, setMessage] = useState("");
  const [fromName, setFromName] = useState("");
  const [loading, setLoading] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const activeTheme = useMemo(
    () => THEME_LIST.find((theme) => theme.id === themeId) || THEME_LIST[0],
    [themeId]
  );

  const toggleItem = (item) => {
    setSelected((current) => {
      const exists = current.find((entry) => entry.id === item.id);
      if (exists) return current.filter((entry) => entry.id !== item.id);
      if (current.length >= MAX_ITEMS) return current;
      return [...current, item];
    });
  };

  const createBloom = async () => {
    if (selected.length === 0) {
      setError("Pick at least one flower.");
      return;
    }
    if (!message.trim()) {
      setError("Write a short note before sharing.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/createBouquet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: selected.map((item) => ({ id: item.id })),
          message,
          fromName,
          recipientName,
          theme: themeId,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Could not create bloom");
      }

      setShareLink(`${window.location.origin}/b/${result.id}`);
    } catch (fetchError) {
      setError(fetchError.message || "Could not create bloom");
    } finally {
      setLoading(false);
    }
  };

  const copyLink = async () => {
    if (!shareLink) return;
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const shareGreeting = recipientName
    ? `"${recipientName}", Happy womens day!`
    : "Happy womens day!";

  const shareText = `${shareGreeting}
I made something for you. Open it. 🌸

${shareLink}`.trim();

  const whatsappHref = shareLink
    ? `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`
    : "#";

  return (
    <main className="createRoot">
      <section className="createHeader">
        <a href="/" className="createBackLink">
          Back
        </a>
        <h1>Build her bloom</h1>
        <p>Select a theme, pick symbolic flowers, and write one message from the heart.</p>
      </section>

      <section className="createSection">
        <h2>1. Choose her theme</h2>
        <div className="themeGrid">
          {THEME_LIST.map((theme) => {
            const Icon = THEME_ICONS[theme.icon];
            const selectedTheme = theme.id === themeId;
            return (
              <button
                key={theme.id}
                type="button"
                className={`themeCard ${selectedTheme ? "active" : ""}`}
                onClick={() => setThemeId(theme.id)}
                style={{ "--theme-accent": theme.accent }}
              >
                <Icon size={28} className="themeCardIcon" />
                <span className="themeCardTitle">{theme.label}</span>
                <span className="themeCardTag">{theme.tagline}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="createSection">
        <h2>2. Who is this for?</h2>
        <input
          value={recipientName}
          maxLength={40}
          placeholder="Recipient name"
          onChange={(event) => setRecipientName(event.target.value)}
        />
      </section>

      <section className="createSection">
        <h2>3. Pick up to 12 flowers and meanings</h2>

        <div className={`flowerPreviewStrip ${selected.length ? "hasBouquet" : ""}`}>
          {selected.length === 0 ? (
            <p className="muted">Your bouquet preview appears here.</p>
          ) : (
            <div className="flowerPreviewShowcase">
              <BouquetCluster items={selected} variant="mini" className="createPreviewBouquet" />
              <div className="flowerPreviewNames">
                {selected.map((item) => (
                  <span key={`selected-name-${item.id}`}>{item.label}</span>
                ))}
              </div>
            </div>
          )}
          <span className="flowerCounter">
            {selected.length}/{MAX_ITEMS}
          </span>
        </div>

        <div className="itemGrid">
          {BOUQUET_ITEMS.map((item) => {
            const Flower = FLOWER_COMPONENTS[item.id] || FLOWER_COMPONENTS.rose;
            const isSelected = selected.some((entry) => entry.id === item.id);
            const disabled = !isSelected && selected.length >= MAX_ITEMS;

            return (
              <button
                key={item.id}
                type="button"
                className={`itemCard ${isSelected ? "active" : ""}`}
                disabled={disabled}
                onClick={() => toggleItem(item)}
                title={item.meaning}
              >
                <Flower size={32} animated={false} />
                <span className="itemTitle">{item.label}</span>
                <span className="itemMeaning">{item.meaning}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="createSection">
        <h2>4. Write the postcard</h2>
        <textarea
          rows={5}
          value={message}
          maxLength={MAX_MSG}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write what you want her to feel when she reads this."
        />
        <div className="fieldMeta">{message.length}/{MAX_MSG}</div>

        <input
          value={fromName}
          maxLength={40}
          placeholder="From name (optional)"
          onChange={(event) => setFromName(event.target.value)}
        />
      </section>

      {error ? <p className="errorText">{error}</p> : null}

      <button type="button" className="createSubmit" onClick={createBloom} disabled={loading}>
        {loading ? "Creating..." : "Create bloom"}
      </button>

      {shareLink ? (
        <section className="shareCard">
          <div className="shareCardHead">
            {(() => {
              const Icon = THEME_ICONS[activeTheme.icon];
              return <Icon size={30} className="shareThemeIcon" />;
            })()}
            <div>
              <h3>{recipientName ? `Bloom for ${recipientName}` : "Bloom created"}</h3>
              <p>Share this link on WhatsApp with rich preview after deploy.</p>
            </div>
          </div>

          <div className="shareLinkRow">
            <span>{shareLink}</span>
            <button type="button" onClick={copyLink}>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="shareCopyPreview">
            <p className="shareCopyLabel">WhatsApp message</p>
            <pre>{shareText}</pre>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsappShareBtn"
            onClick={(event) => {
              if (!shareLink) event.preventDefault();
            }}
          >
            <WhatsAppIcon size={18} />
            Send on WhatsApp
          </a>

          <a href={shareLink} target="_blank" rel="noopener noreferrer" className="previewLinkBtn">
            Preview bloom
          </a>
        </section>
      ) : null}
    </main>
  );
}
