import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huvet — Klara körkortsprovet första gången | Teoriprov 2026",
  description:
    "Klara körkortsprovet med Huvet. Öva med 450+ riktiga teorifrågor, vägmärken, körkortsfrågor och körprov-förberedelse. 94% av eleverna klarar provet. Gratis.",
  keywords: ["körkortsprov", "teoriprov", "körkortsfrågor", "vägmärken", "körkort 2026", "teoriprov övning", "körprov tips", "övningskörning"],
  metadataBase: new URL("https://huvet.se"),
  openGraph: {
    title: "Huvet — Klara körkortsprovet första gången | Teoriprov 2026",
    description: "450+ körkortsfrågor, vägmärken och teoriprov-övning. 94% klarar provet med Huvet.",
    locale: "sv_SE",
    type: "website",
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Huvet',
  url: 'https://huvet.se',
  description: 'Huvet hjälper dig klara körkortsprovet med personlig träning, svaghetsanalys och 450+ riktiga teorifrågor.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://huvet.se/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Huvet',
  url: 'https://huvet.se',
  logo: 'https://huvet.se/favicon.ico',
  description: 'Huvet är Sveriges smartaste förberedelseplattform för körkortsprovet. Personlig träningsplan, svaghetsanalys och 450+ teorifrågor.',
  areaServed: {
    '@type': 'Country',
    name: 'Sweden',
  },
  knowsAbout: ['körkortsprovet', 'teoriprov', 'körkort', 'trafikregler', 'vägmärken'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif", color: '#111', background: '#fff', WebkitFontSmoothing: 'antialiased' }}>
        {children}
      </body>
    </html>
  );
}
