import { Playfair_Display, Nunito, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-hand",
  display: "swap",
});

const metadataBase =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://secret-bloom.vercel.app");

export const metadata = {
  title: "Secret Bloom",
  description: "Craft a beautiful bloom and share it in one tap.",
  metadataBase: new URL(metadataBase),
  openGraph: {
    title: "Secret Bloom",
    description: "Craft a beautiful bloom and share it in one tap.",
    type: "website",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Secret Bloom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secret Bloom",
    description: "Craft a beautiful bloom and share it in one tap.",
    images: ["/api/og"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0917",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable} ${dancingScript.variable}`}>
      <body>{children}</body>
    </html>
  );
}
