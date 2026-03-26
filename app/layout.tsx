import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Huvet — Klara körkortsprovet första gången",
  description:
    "Huvet hjälper dig klara körkortsprovet med personlig träning, svaghetsanalys och 450+ riktiga teorifrågor. 94% av våra elever godkänns.",
  metadataBase: new URL("https://huvet.se"),
  openGraph: {
    title: "Huvet — Klara körkortsprovet första gången",
    description: "94% av Huvets elever klarar körkortsprovet. Personlig träningsplan. 450+ frågor.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable}`}>
      <body style={{ margin: 0, padding: 0, fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
