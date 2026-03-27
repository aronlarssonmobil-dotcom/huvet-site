import Link from 'next/link';

type Guide = {
  href: string;
  title: string;
  description: string;
};

const allGuides: Record<string, Guide> = {
  '/teoriprov': { href: '/teoriprov', title: 'Teoriprov', description: '65 frågor, 50 min — allt du behöver veta' },
  '/korprov': { href: '/korprov', title: 'Körprov', description: 'Tips och förberedelse för uppkörningen' },
  '/vagmarken': { href: '/vagmarken', title: 'Vägmärken', description: 'Alla vägmärken du behöver kunna' },
  '/trafikregler': { href: '/trafikregler', title: 'Trafikregler', description: 'Grundläggande trafikregler för körkort' },
  '/hastighetsgranser': { href: '/hastighetsgranser', title: 'Hastighetsgränser', description: 'Hastigheter i tätort, landsväg, motorväg' },
  '/riskutbildning': { href: '/riskutbildning', title: 'Riskutbildning', description: 'Risk 1 & Risk 2 — obligatoriska moment' },
  '/ovningskorning': { href: '/ovningskörning', title: 'Övningskörning', description: 'Regler och tips för privat övningskörning' },
  '/korkort-kostnad': { href: '/korkort-kostnad', title: 'Körkort Kostnad', description: 'Vad kostar körkort 2026?' },
  '/ovningsprov': { href: '/ovningsprov', title: 'Övningsprov', description: 'Simulera det riktiga teoriprovet' },
  '/intensivkurs': { href: '/intensivkurs', title: 'Intensivkurs', description: 'Ta körkort snabbt med intensivkurs' },
  '/mc': { href: '/mc', title: 'MC-körkort', description: 'A1, A2 och A — motorcykelkörkort' },
  '/moped': { href: '/moped', title: 'Mopedkörkort', description: 'AM-körkort för moped klass I & II' },
  '/b-korkort': { href: '/b-korkort', title: 'B-körkort', description: 'Personbilskörkort — krav och process' },
  '/hur-lang-tid': { href: '/hur-lang-tid', title: 'Hur lång tid?', description: 'Tidsplan för körkortet — 3–6 månader' },
  '/kostnad': { href: '/kostnad', title: 'Kostnad', description: 'Detaljerad prisguide för körkortet' },
  '/korkortsfragor': { href: '/korkortsfragor', title: 'Körkortsfrågor', description: 'Vanliga frågor och svar om körkort' },
  '/korkortstips': { href: '/korkortstips', title: 'Körkorts­tips', description: 'Smarta tips för att klara provet' },
  '/korkortstillstand': { href: '/korkortstillstand', title: 'Körkortstillstånd', description: 'Ansökan, krav, kostnad och giltighetstid' },
  '/korkort-alder': { href: '/korkort-alder', title: 'Körkort ålder', description: 'Åldersgränser för alla körkortskategorier' },
  '/parkering': { href: '/parkering', title: 'Parkeringsregler', description: 'P-förbud, datumparkering, böter & p-skiva' },
  '/rattfylleri': { href: '/rattfylleri', title: 'Rattfylleri', description: 'Promillegräns, straff & alkolås' },
  '/boka-teoriprov': { href: '/boka-teoriprov', title: 'Boka teoriprov', description: 'Steg-för-steg guide till bokning' },
  '/boka-uppkorning': { href: '/boka-uppkorning', title: 'Boka uppkörning', description: 'Krav, bokning och tips för körprovet' },
  '/vanliga-fel-korprov': { href: '/vanliga-fel-korprov', title: 'Vanliga fel på körprov', description: 'De 15 vanligaste misstagen vid uppkörningen' },
  '/handledarkurs': { href: '/handledarkurs', title: 'Handledarkurs', description: 'Krav, kostnad och bokning för handledare' },
  '/digitalt-korkort': { href: '/digitalt-korkort', title: 'Digitalt körkort', description: 'EU:s digitala körkort — vad det innebär' },
  '/nya-regler-2026': { href: '/nya-regler-2026', title: 'Nya regler 2026', description: 'Alla nya körkortsregler 2025–2026' },
  '/gora-om-teoriprovet': { href: '/gora-om-teoriprovet', title: 'Göra om teoriprovet', description: 'Regler, kostnad och tips vid omprov' },
  '/privatist': { href: '/privatist', title: 'Privatist', description: 'Ta körkort utan trafikskola — guide' },
  '/utlandskt-korkort': { href: '/utlandskt-korkort', title: 'Utländskt körkort', description: 'Byta utländskt körkort till svenskt' },
  '/steg-for-steg': { href: '/steg-for-steg', title: 'Steg för steg', description: 'Komplett guide — alla 10 steg till körkort' },
  '/nervos-uppkorning': { href: '/nervos-uppkorning', title: 'Nervös inför uppkörning', description: 'Tips och tekniker mot nervositet' },
  '/fornya-korkort': { href: '/fornya-korkort', title: 'Förnya körkort', description: 'Giltighetstid, kostnad och EU-regler' },
  '/korkort-c': { href: '/korkort-c', title: 'C-körkort lastbil', description: 'Krav, YKB, kostnad och utbildning' },
  '/automatiskt-korkort': { href: '/automatiskt-korkort', title: 'Automatiskt körkort', description: 'Automat vs manuell — regler och val' },
  '/hogersregeln': { href: '/hogersregeln', title: 'Högerregeln', description: 'Förklaring, exempel och undantag' },
  '/stopplikt-vs-vajningsplikt': { href: '/stopplikt-vs-vajningsplikt', title: 'Stopplikt vs väjningsplikt', description: 'Skillnaden förklarad med exempel' },
  '/syntest-korkort': { href: '/syntest-korkort', title: 'Syntest körkort', description: 'Krav, kostnad och tips för syntestet' },
  '/trafikforsakring': { href: '/trafikforsakring', title: 'Trafikförsäkring', description: 'Obligatorisk försäkring — vad den täcker' },
  '/bilinspektion': { href: '/bilinspektion', title: 'Bilinspektion', description: 'Besiktning — regler, kostnad och tips' },
  '/korning-i-regn': { href: '/korning-i-regn', title: 'Körning i regn', description: 'Vattenplaning, bromssträcka och sikt' },
  '/korning-pa-motorvag': { href: '/korning-pa-motorvag', title: 'Körning på motorväg', description: 'Påfart, filbyte och motorvägsregler' },
  '/korning-i-morker': { href: '/korning-i-morker', title: 'Körning i mörker', description: 'Belysning, vilt och mörkerrisker' },
  '/blinkers-regler': { href: '/blinkers-regler', title: 'Blinkers regler', description: 'När du måste blinka — alla situationer' },
};

const relatedMap: Record<string, string[]> = {
  '/teoriprov': ['/ovningsprov', '/vagmarken', '/korkortsfragor', '/korkortstips'],
  '/korprov': ['/teoriprov', '/ovningskorning', '/riskutbildning', '/b-korkort'],
  '/vagmarken': ['/trafikregler', '/hastighetsgranser', '/teoriprov', '/korkortsfragor'],
  '/trafikregler': ['/vagmarken', '/hastighetsgranser', '/teoriprov', '/riskutbildning'],
  '/hastighetsgranser': ['/trafikregler', '/vagmarken', '/korprov', '/teoriprov'],
  '/riskutbildning': ['/korprov', '/ovningskorning', '/b-korkort', '/teoriprov'],
  '/ovningskorning': ['/korprov', '/riskutbildning', '/b-korkort', '/korkort-kostnad'],
  '/korkort-kostnad': ['/kostnad', '/intensivkurs', '/b-korkort', '/hur-lang-tid'],
  '/ovningsprov': ['/teoriprov', '/korkortsfragor', '/vagmarken', '/korkortstips'],
  '/intensivkurs': ['/korkort-kostnad', '/korprov', '/teoriprov', '/b-korkort'],
  '/mc': ['/moped', '/riskutbildning', '/korprov', '/korkort-kostnad'],
  '/moped': ['/mc', '/vagmarken', '/trafikregler', '/korkort-kostnad'],
  '/b-korkort': ['/korkort-kostnad', '/hur-lang-tid', '/teoriprov', '/korprov'],
  '/hur-lang-tid': ['/b-korkort', '/intensivkurs', '/korkort-kostnad', '/teoriprov'],
  '/kostnad': ['/korkort-kostnad', '/intensivkurs', '/b-korkort', '/hur-lang-tid'],
  '/korkortsfragor': ['/teoriprov', '/vagmarken', '/korkortstips', '/ovningsprov'],
  '/korkortstips': ['/teoriprov', '/korkortsfragor', '/ovningsprov', '/korprov'],
  '/korkortstillstand': ['/b-korkort', '/korkort-alder', '/ovningskorning', '/korkort-kostnad'],
  '/korkort-alder': ['/korkortstillstand', '/mc', '/moped', '/b-korkort'],
  '/parkering': ['/trafikregler', '/vagmarken', '/hastighetsgranser', '/rattfylleri'],
  '/rattfylleri': ['/trafikregler', '/riskutbildning', '/parkering', '/korprov'],
  '/boka-teoriprov': ['/teoriprov', '/ovningsprov', '/korkort-kostnad', '/korkortstips'],
  '/boka-uppkorning': ['/korprov', '/riskutbildning', '/boka-teoriprov', '/ovningskorning'],
  '/vanliga-fel-korprov': ['/korprov', '/ovningskorning', '/boka-uppkorning', '/korkortstips'],
  '/handledarkurs': ['/ovningskorning', '/b-korkort', '/korkort-kostnad', '/korkortstillstand'],
  '/digitalt-korkort': ['/b-korkort', '/korkortstillstand', '/korkort-alder', '/nya-regler-2026'],
  '/nya-regler-2026': ['/korkortstillstand', '/b-korkort', '/digitalt-korkort', '/korkort-alder'],
  '/gora-om-teoriprovet': ['/teoriprov', '/ovningsprov', '/korkortstips', '/boka-teoriprov'],
  '/privatist': ['/ovningskorning', '/korkort-kostnad', '/handledarkurs', '/teoriprov'],
  '/utlandskt-korkort': ['/teoriprov', '/korprov', '/korkort-kostnad', '/b-korkort'],
  '/steg-for-steg': ['/korkort-kostnad', '/hur-lang-tid', '/teoriprov', '/korprov'],
  '/nervos-uppkorning': ['/korprov', '/boka-uppkorning', '/vanliga-fel-korprov', '/korkortstips'],
  '/fornya-korkort': ['/digitalt-korkort', '/b-korkort', '/korkort-kostnad', '/nya-regler-2026'],
  '/korkort-c': ['/b-korkort', '/korkort-alder', '/korkort-kostnad', '/mc'],
  '/automatiskt-korkort': ['/b-korkort', '/korkort-kostnad', '/korprov', '/teoriprov'],
  '/hogersregeln': ['/trafikregler', '/stopplikt-vs-vajningsplikt', '/vagmarken', '/teoriprov'],
  '/stopplikt-vs-vajningsplikt': ['/hogersregeln', '/trafikregler', '/vagmarken', '/teoriprov'],
  '/syntest-korkort': ['/korkortstillstand', '/b-korkort', '/korkort-alder', '/korkort-kostnad'],
  '/trafikforsakring': ['/b-korkort', '/korkort-kostnad', '/rattfylleri', '/trafikregler'],
  '/bilinspektion': ['/trafikforsakring', '/b-korkort', '/korkort-kostnad', '/trafikregler'],
  '/korning-i-regn': ['/korning-i-morker', '/korning-pa-motorvag', '/hastighetsgranser', '/riskutbildning'],
  '/korning-pa-motorvag': ['/hastighetsgranser', '/korning-i-regn', '/korning-i-morker', '/trafikregler'],
  '/korning-i-morker': ['/korning-i-regn', '/korning-pa-motorvag', '/riskutbildning', '/hastighetsgranser'],
  '/blinkers-regler': ['/trafikregler', '/hogersregeln', '/korning-pa-motorvag', '/vagmarken'],
};

type RelatedGuidesProps = {
  currentPath: string;
};

export default function RelatedGuides({ currentPath }: RelatedGuidesProps) {
  const related = relatedMap[currentPath] || [];
  if (related.length === 0) return null;

  const guides = related
    .map((path) => allGuides[path])
    .filter(Boolean);

  return (
    <section style={{
      padding: '3rem 0',
      borderTop: '1px solid #dceee5',
    }}>
      <h2 style={{
        fontFamily: "var(--font-playfair), 'Playfair Display', serif",
        fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
        fontWeight: 800,
        color: '#0d1f17',
        marginBottom: '1.5rem',
      }}>
        Relaterade guider
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '1rem',
      }}>
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            style={{
              display: 'block',
              padding: '1.25rem',
              background: '#f0f7f3',
              border: '1px solid #dceee5',
              borderRadius: 14,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            <h3 style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#1DB954',
              margin: '0 0 0.4rem',
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            }}>
              {guide.title} →
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#5a6b62',
              margin: 0,
              lineHeight: 1.5,
            }}>
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
