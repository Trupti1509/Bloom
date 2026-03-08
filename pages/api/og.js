import { ImageResponse } from "next/og";
import { THEMES, resolveTheme } from "../../data/themes.js";

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const themeId = resolveTheme(searchParams.get("theme") || "performer");
  const theme = THEMES[themeId];
  const recipient = (searchParams.get("recipient") || "You").slice(0, 42);
  const from = (searchParams.get("from") || "Someone").slice(0, 42);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          color: "#fff6f8",
          fontFamily: "Georgia, serif",
          background:
            "radial-gradient(circle at 22% 24%, rgba(255,255,255,0.12), transparent 38%), radial-gradient(circle at 80% 12%, rgba(255,255,255,0.08), transparent 34%), linear-gradient(135deg, #120916 0%, #24112f 42%, #0f0b1f 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.04), transparent 32%, rgba(255,255,255,0.02))",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "460px",
            height: "460px",
            borderRadius: "999px",
            background: theme.accentSoft,
            filter: "blur(50px)",
            left: "-80px",
            top: "-100px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            filter: "blur(36px)",
            right: "-60px",
            bottom: "-100px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "74px 84px",
            width: "100%",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p
              style={{
                margin: 0,
                fontSize: "30px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.74)",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Secret Bloom
            </p>
            <h1
              style={{
                margin: 0,
                fontSize: "84px",
                lineHeight: 1.02,
                fontWeight: 600,
              }}
            >
              For {recipient}
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: "34px",
                lineHeight: 1.3,
                maxWidth: "860px",
                color: "rgba(255,248,250,0.88)",
              }}
            >
              {from} sent a {theme.label.toLowerCase()} bloom.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "26px",
                color: "rgba(255,255,255,0.78)",
                letterSpacing: "0.04em",
              }}
            >
              {theme.tagline}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "24px",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "999px",
                  background: theme.accent,
                  boxShadow: `0 0 18px ${theme.accent}`,
                }}
              />
              open to reveal
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
