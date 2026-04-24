import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "The Beach Bowl — Açaí, Boba & Loaded Mac in Door County",
  description:
    "Pure açaí bowls, 16oz boba, blended smoothies, and loaded mac n' cheese. Fresh, vibrant, made for the Door County sun.",
  openGraph: {
    title: "The Beach Bowl",
    description:
      "Açaí bowls, boba, smoothies and loaded mac — Door County, WI.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans grain">{children}</body>
    </html>
  );
}
