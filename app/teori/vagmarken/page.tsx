import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TheoryChapterLayout from '../../../components/TheoryChapterLayout';

export const metadata: Metadata = {
  title: 'Körkortsteori: Vägmärken — Komplett guide 2026 | Huvet',
  description: 'Lär dig alla svenska vägmärken för körkortsprovet. Varningsskyltar, förbudsmärken, påbudsmärken, anvisningsmärken och tilläggstavlor med bilder och förklaringar.',
  keywords: ['vägmärken', 'vägmärken körkort', 'svenska vägmärken', 'varningsskyltar', 'förbudsmärken', 'påbudsmärken', 'vägmärken 2026', 'trafikskyltar'],
  alternates: { canonical: 'https://huvet.se/teori/vagmarken' },
  openGraph: {
    title: 'Körkortsteori: Vägmärken — Komplett guide 2026 | Huvet',
    description: 'Alla svenska vägmärken med bilder och förklaringar. 92 vägmärken uppdelade i kategorier.',
    url: 'https://huvet.se/teori/vagmarken',
  },
};

type SignInfo = { id: string; name: string; desc: string };

const varningsSigns: SignInfo[] = [
  { id: 'A1-1', name: 'Varning för kurva', desc: 'Skarp kurva till höger framför dig.' },
  { id: 'A2-1', name: 'Varning för kurvor', desc: 'Flera skarpa kurvor framför dig, den första till höger.' },
  { id: 'A3', name: 'Varning för nedförslut', desc: 'Brant nedförsbacke framåt.' },
  { id: 'A4', name: 'Varning för uppförslut', desc: 'Brant uppförsbacke framåt.' },
  { id: 'A5-1', name: 'Varning för avsmalnande väg', desc: 'Vägen smalnar av från båda sidor.' },
  { id: 'A6', name: 'Varning för bro', desc: 'Smal bro framåt — möte kan vara svårt.' },
  { id: 'A7', name: 'Varning för vägkorsning', desc: 'Korsning framför — var beredd på trafik från sidan.' },
  { id: 'A8', name: 'Varning för cirkulationsplats', desc: 'Rondell framåt.' },
  { id: 'A9-1', name: 'Varning för järnväg med bommar', desc: 'Järnvägsövergång med bommar närmar sig.' },
  { id: 'A9-2', name: 'Varning för järnväg utan bommar', desc: 'Järnvägsövergång utan bommar — extra försiktig.' },
  { id: 'A10', name: 'Varning för övergångsställe', desc: 'Övergångsställe framåt — var beredd att stanna.' },
  { id: 'A11', name: 'Varning för barn', desc: 'Barn kan förekomma nära vägen (skola, lekplats).' },
  { id: 'A13', name: 'Varning för cyklister', desc: 'Cyklister kan korsa eller finnas på vägen.' },
  { id: 'A14', name: 'Varning för djur', desc: 'Risk för vilt eller djur på vägen.' },
  { id: 'A15', name: 'Varning för stenras', desc: 'Risk för fallande sten från sidan.' },
  { id: 'A16', name: 'Varning för slirig väg', desc: 'Halt väglag — anpassa hastigheten.' },
  { id: 'A17', name: 'Varning för ojämn väg', desc: 'Ojämn vägbana framåt.' },
  { id: 'A18', name: 'Varning för farthinder', desc: 'Gupp eller farthinder framåt.' },
  { id: 'A19-1', name: 'Varning för sidvind', desc: 'Risk för stark sidvind.' },
  { id: 'A20', name: 'Varning för flygplan', desc: 'Flygfält i närheten — lågtflygande flygplan.' },
  { id: 'A21', name: 'Varning för tunnel', desc: 'Tunnel framåt — tänk belysning.' },
  { id: 'A22', name: 'Varning för kö', desc: 'Risk för köbildning framåt.' },
  { id: 'A25', name: 'Varning för tvåvägsriktad trafik', desc: 'Mötande trafik framåt.' },
  { id: 'A29-1', name: 'Varning för kaj', desc: 'Vägen slutar vid kaj eller brink.' },
  { id: 'A34', name: 'Varning för trafikljus', desc: 'Trafiksignal framåt.' },
  { id: 'A40', name: 'Varning annan fara', desc: 'Annan fara — tilläggstavla anger vilken.' },
];

const forbudsSigns: SignInfo[] = [
  { id: 'C1', name: 'Förbud mot infart', desc: 'Du får inte köra in. Vanlig vid enkelriktade gator.' },
  { id: 'C2', name: 'Förbud mot trafik', desc: 'All trafik förbjuden i båda riktningar.' },
  { id: 'C3', name: 'Förbud mot motortrafik', desc: 'Motorfordon får inte köra här.' },
  { id: 'C4', name: 'Förbud mot tung trafik', desc: 'Tunga fordon förbjudna.' },
  { id: 'C5', name: 'Förbud mot motorcykel', desc: 'Motorcyklar inte tillåtna.' },
  { id: 'C6', name: 'Förbud mot moped klass I', desc: 'Mopeder klass I förbjudna.' },
  { id: 'C7', name: 'Förbud mot cykel och moped', desc: 'Cyklar och mopeder klass II förbjudna.' },
  { id: 'C8', name: 'Förbud mot gångtrafik', desc: 'Fotgängare inte tillåtna.' },
  { id: 'C10', name: 'Förbud mot fordonstrafik', desc: 'Alla fordon förbjudna.' },
  { id: 'C11', name: 'Förbud mot fordon längre', desc: 'Fordon längre än angivet mått förbjudna.' },
  { id: 'C12', name: 'Förbud mot fordon bredare', desc: 'Fordon bredare än angivet mått förbjudna.' },
  { id: 'C13', name: 'Förbud mot fordon högre', desc: 'Fordon högre än angivet mått förbjudna.' },
  { id: 'C14', name: 'Förbud mot fordon tyngre', desc: 'Fordon tyngre än angivet mått förbjudna.' },
  { id: 'C15', name: 'Begränsad axeltryck', desc: 'Max axelbelastning angiven.' },
  { id: 'C16', name: 'Begränsat boggitryck', desc: 'Max boggibelastning angiven.' },
  { id: 'C17', name: 'Förbud mot omkörning', desc: 'Omkörning förbjuden.' },
  { id: 'C18', name: 'Förbud mot omkörning tung', desc: 'Tunga fordon får inte köra om.' },
  { id: 'C20', name: 'Förbud mot U-sväng', desc: 'U-sväng inte tillåten.' },
  { id: 'C21', name: 'Förbud mot sväng vänster', desc: 'Sväng vänster förbjudet.' },
  { id: 'C23', name: 'Hastighetsbegränsning', desc: 'Maxhastighet angiven på skylten.' },
  { id: 'C24', name: 'Slut på hastighetsbegränsning', desc: 'Den angivna begränsningen upphör.' },
  { id: 'C25-1', name: 'Slut på omkörningsförbud', desc: 'Omkörningsförbudet upphör.' },
  { id: 'C31-3', name: 'Datumparkering udda', desc: 'Parkering förbjuden udda datum.' },
  { id: 'C31-5', name: 'Datumparkering jämna', desc: 'Parkering förbjuden jämna datum.' },
  { id: 'C31-7', name: 'Stanningsförbud', desc: 'Förbjudet att både stanna och parkera.' },
  { id: 'C31-9', name: 'Parkeringsförbud', desc: 'Förbjudet att parkera men du får stanna.' },
  { id: 'C35', name: 'Slut på alla begränsningar', desc: 'Alla lokala begränsningar upphör.' },
  { id: 'C36', name: 'Förbud mot ljudsignal', desc: 'Användning av tuta förbjuden.' },
  { id: 'C39', name: 'Farlig gods begränsning', desc: 'Begränsning för transport av farligt gods.' },
];

const pabudsSigns: SignInfo[] = [
  { id: 'D1-1', name: 'Påbjuden körriktning höger', desc: 'Du måste svänga höger.' },
  { id: 'D1-3', name: 'Påbjuden körriktning rakt fram', desc: 'Du måste köra rakt fram.' },
  { id: 'D1-6', name: 'Påbjuden körriktning rakt eller höger', desc: 'Du måste köra rakt fram eller svänga höger.' },
  { id: 'D1-7', name: 'Påbjuden körriktning rakt eller vänster', desc: 'Du måste köra rakt fram eller svänga vänster.' },
  { id: 'D2-1', name: 'Påbjuden passage höger', desc: 'Du måste passera hindret till höger.' },
  { id: 'D3', name: 'Påbjuden cirkulationsplats', desc: 'Rondell — kör moturs.' },
  { id: 'D4', name: 'Påbjuden cykelbana', desc: 'Cyklister måste använda banan.' },
  { id: 'D6', name: 'Påbjuden gångbana', desc: 'Fotgängare måste använda banan.' },
  { id: 'D8', name: 'Påbjuden gång- och cykelbana', desc: 'Gemensam bana för gång och cykel.' },
];

const anvisningsSigns: SignInfo[] = [
  { id: 'E1', name: 'Motorväg', desc: 'Motorväg börjar — minst 2 körfält i varje riktning.' },
  { id: 'E3', name: 'Motortrafikled', desc: 'Motortrafikled börjar.' },
  { id: 'E4', name: 'Slut motorväg', desc: 'Motorvägen slutar.' },
  { id: 'E5', name: 'Slut motortrafikled', desc: 'Motortrafikleden slutar.' },
  { id: 'E6', name: 'Tättbebyggt område', desc: 'Tätort börjar — 50 km/h gäller om ej annat skyltad.' },
  { id: 'E7', name: 'Slut tättbebyggt område', desc: 'Tätorten slutar — 70 km/h gäller om ej annat skyltad.' },
  { id: 'E8', name: 'Rekommenderad lägre hastighet', desc: 'Rekommenderad maxhastighet (t.ex. i kurva).' },
  { id: 'E9', name: 'Motorvägsslut', desc: 'Motorväg upphör.' },
  { id: 'E10', name: 'Övergångsställe', desc: 'Markerat övergångsställe — fotgängare har företräde.' },
  { id: 'E11-2', name: 'Gångfartsområde', desc: 'Fotgängare har företräde, max 7 km/h.' },
  { id: 'E15', name: 'Enkelriktat', desc: 'Vägen är enkelriktad i pilens riktning.' },
  { id: 'E16-1', name: 'Infart till parkering', desc: 'Parkeringsplats framåt.' },
  { id: 'E19', name: 'Huvudled', desc: 'Du kör på huvudled — du har företräde i korsningar.' },
  { id: 'E20-1', name: 'Slut på huvudled', desc: 'Huvudleden upphör.' },
  { id: 'E21-1', name: 'Förhandsvisning', desc: 'Information om kommande korsning.' },
];

const tillaggsSigns: SignInfo[] = [
  { id: 'T2', name: 'Avståndstavla', desc: 'Anger avstånd till det fara/objekt som vägmärket avser.' },
  { id: 'T3', name: 'Sträcka', desc: 'Anger sträckan som förbudet/påbudet gäller.' },
  { id: 'T4', name: 'Tidsangivelse', desc: 'Anger tiderna då vägmärket gäller.' },
  { id: 'T5', name: 'Utsträckning', desc: 'Anger i vilken riktning bestämmelsen gäller.' },
  { id: 'T6', name: 'Fordonskategori', desc: 'Anger vilka fordon som bestämmelsen gäller/undantas.' },
];

function SignGrid({ signs, color }: { signs: SignInfo[]; color: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', margin: '1.25rem 0 2rem' }}>
      {signs.map((s) => (
        <div key={s.id} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.75rem', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
          <Image
            src={`/signs/${s.id}.svg`}
            alt={s.name}
            width={48}
            height={48}
            style={{ flexShrink: 0 }}
          />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#0d1f17' }}>{s.name}</div>
            <div style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.5 }}>{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TeoriVagmarken() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Hur många kategorier av vägmärken finns det?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Det finns sex huvudkategorier: varningsmärken (A), förbudsmärken (C), påbudsmärken (D), anvisningsmärken (E), tilläggstavlor (T) och vägmarkeringar. Varje kategori har en egen design och färg.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vad betyder en triangelformad skylt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En uppåtvänd triangel med röd kant och gul/vit bakgrund är ett varningsmärke. En nedåtvänd triangel med röd kant betyder väjningsplikt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hur känner man igen en förbudsskylt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Förbudsskyltar är runda med röd kant och vit bakgrund. De anger vad du INTE får göra — t.ex. inte köra in, inte parkera, inte överskrida en viss hastighet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vad är skillnaden på påbud och förbud?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Påbudsmärken (runda, blå med vit symbol) talar om vad du MÅSTE göra. Förbudsmärken (runda, vit med röd kant) talar om vad du INTE FÅR göra.',
        },
      },
    ],
  };

  return (
    <TheoryChapterLayout currentSlug="vagmarken">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <h1 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.5rem', color: '#0d1f17' }}>
        Vägmärken — Alla skyltar du måste kunna
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Kapitel 2 av 7 · 92 vägmärken med bilder · Uppdaterad mars 2026
      </p>

      <p>
        Vägmärken är trafikens språk. De talar om vad du får göra, vad du inte får göra, och vad du ska vara
        beredd på. Att kunna alla vägmärken är helt avgörande för att klara <Link href="/ovningsprov" style={{ color: '#006B3F', fontWeight: 500 }}>teoriprovet</Link>.
        I det här kapitlet går vi igenom alla kategorier med bilder och förklaringar.
      </p>

      <div className="theory-info-box">
        <p>💡 Tips: lär dig formen och färgen först — det ger dig en ledtråd även om du inte känner igen exakta symbolen.</p>
      </div>

      <h2>Varningsmärken (A-serien)</h2>
      <p>
        Varningsmärken är <strong>triangelformade</strong> (spetsen uppåt) med <strong>röd kant</strong> och
        gul eller vit bakgrund. De varnar dig för faror framåt — kurvor, djur, barn, halka med mera.
        Ett varningsmärke kräver att du anpassar körningen, men det är inte ett förbud.
      </p>
      <SignGrid signs={varningsSigns} color="#d97706" />

      <h2>Förbudsmärken (C-serien)</h2>
      <p>
        Förbudsmärken är <strong>runda</strong> med <strong>röd kant</strong> och vit bakgrund. De anger
        vad du <strong>inte får göra</strong>: inte köra in, inte parkera, inte överskrida en viss hastighet.
        Ett rött snedstreck genom symbolen förstärker förbudet. Dessa är bland de viktigaste för <Link href="/teori/trafikregler" style={{ color: '#006B3F', fontWeight: 500 }}>trafikreglerna</Link>.
      </p>
      <SignGrid signs={forbudsSigns} color="#D32F2F" />

      <h2>Påbudsmärken (D-serien)</h2>
      <p>
        Påbudsmärken är <strong>runda</strong> med <strong>blå bakgrund</strong> och vit symbol. De anger
        vad du <strong>måste göra</strong>: svänga i en viss riktning, använda en viss bana, eller köra
        i cirkulationsplats. Blått = plikt.
      </p>
      <SignGrid signs={pabudsSigns} color="#1565C0" />

      <h2>Anvisningsmärken (E-serien)</h2>
      <p>
        Anvisningsmärken är oftast <strong>rektangulära</strong> med <strong>blå eller grön bakgrund</strong>.
        De ger information om vägen — motorväg, tättbebyggt område, övergångsställe, huvudled med mera.
        De förbjuder ingenting men ger viktig information för körningen.
      </p>
      <SignGrid signs={anvisningsSigns} color="#006B3F" />

      <h2>Tilläggstavlor (T-serien)</h2>
      <p>
        Tilläggstavlor sitter under andra vägmärken och ger kompletterande information: avstånd, sträcka,
        tid eller vilka fordon som undantas. De kan aldrig förekomma ensamma — de hör alltid ihop med ett
        annat märke.
      </p>
      <SignGrid signs={tillaggsSigns} color="#555" />

      <h2>Sammanfattning</h2>
      <p>
        Det finns 92 vanliga vägmärken uppdelade i sex kategorier. Nyckeln till att lära sig dem är att
        förstå systemet: <strong>trianglar varnar, runda med rött förbjuder, runda med blått påbjuder,
        rektangulära informerar</strong>. Öva med bilder och test — det är det snabbaste sättet. Fortsätt
        till nästa kapitel om <Link href="/teori/fordonskanndom" style={{ color: '#006B3F', fontWeight: 500 }}>fordonskännedom</Link> för
        att lära dig allt om bilens teknik.
      </p>
    </TheoryChapterLayout>
  );
}
