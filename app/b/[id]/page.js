import BouquetClient from "./BouquetClient";
import { loadBouquet } from "../../../lib/storage.js";
import { resolveTheme, THEMES } from "../../../data/themes.js";

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

function ogUrlForBouquet(baseUrl, bouquet) {
  const themeId = resolveTheme(bouquet?.theme || "performer");
  const recipient = bouquet?.recipientName || "You";
  const from = bouquet?.fromName || "Someone";
  const params = new URLSearchParams({
    theme: themeId,
    recipient,
    from,
  });
  return `${baseUrl}/api/og?${params.toString()}`;
}

export async function generateMetadata({ params }) {
  const bouquet = await loadBouquet(params.id);
  const baseUrl = getBaseUrl();

  if (!bouquet) {
    return {
      title: "Bloom not found",
      description: "This bloom may have expired or been removed.",
      openGraph: {
        title: "Bloom not found",
        description: "This bloom may have expired or been removed.",
        images: [`${baseUrl}/api/og`],
      },
      twitter: {
        card: "summary_large_image",
        title: "Bloom not found",
        description: "This bloom may have expired or been removed.",
        images: [`${baseUrl}/api/og`],
      },
    };
  }

  const themeId = resolveTheme(bouquet.theme || "performer");
  const theme = THEMES[themeId];
  const recipient = bouquet.recipientName?.trim() || "you";
  const from = bouquet.fromName?.trim() || "Someone";

  const title = `A bloom for ${recipient}`;
  const description = `${from} sent a ${theme.label.toLowerCase()} bloom.`;
  const image = ogUrlForBouquet(baseUrl, bouquet);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BouquetPage({ params }) {
  const bouquet = await loadBouquet(params.id);
  return <BouquetClient initialBouquet={bouquet} id={params.id} />;
}
