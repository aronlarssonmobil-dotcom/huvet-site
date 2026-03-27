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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur många frågor är det på körkortsprovet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Körkortsprovet (teoriprovet) består av 65 frågor. Du behöver svara rätt på minst 52 frågor (80%) för att bli godkänd. Provet tar max 50 minuter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur mycket kostar körkortet 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Totalkostnaden för körkort 2026 ligger på 15 000–25 000 kr beroende på om du kör privat eller via trafikskola. Teoriprovet kostar 400 kr och uppkörningen 1 000 kr.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är den högsta tillåtna promillehalten vid bilkörning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I Sverige är gränsen 0,2 promille alkohol i blodet. Över 0,2 promille räknas som rattfylleri och över 1,0 promille som grovt rattfylleri.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur långt innan ett övergångsställe får man parkera?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du får inte parkera inom 10 meter före ett övergångsställe eller cykelöverfart. Regeln finns för att säkerställa god sikt för fotgängare och bilister.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan man öva på körkortsprovet gratis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja! På Huvet.se kan du öva gratis med riktiga teorifrågor, vägmärken och trafikregler. Appen anpassar sig efter dina svagheter och använder smart repetition.',
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif", color: '#111', background: '#fff', WebkitFontSmoothing: 'antialiased' }}>
        {children}
      </body>
    </html>
  );
}
