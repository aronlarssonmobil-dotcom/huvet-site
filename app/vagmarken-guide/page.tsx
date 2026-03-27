import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Vägmärken i Sverige 2026 — Komplett guide med alla kategorier | Huvet',
  description: 'Alla svenska vägmärken förklarade med bilder och betydelse. Varningsmärken, förbudsmärken, påbudsmärken, upplysningsskyltar och tilläggstavlor. Klara teoriprovet 2026.',
  keywords: ['vägmärken', 'vägmärken sverige', 'alla vägmärken', 'vägmärken körkort', 'varningsmärken', 'förbudsmärken', 'påbudsmärken', 'vägmärken 2026', 'vägskyltar'],
  openGraph: {
    title: 'Vägmärken i Sverige 2026 — Komplett guide | Huvet',
    description: 'Alla svenska vägmärken förklarade. Varningsmärken, förbudsmärken, påbudsmärken och mer.',
  },
};

const vagmarkenKategorier = [
  {
    namn: 'Varningsmärken',
    farg: '#D32F2F',
    icon: '⚠️',
    beskrivning: 'Varningsmärken är triangelformade med röd kant och vit/gul botten. De varnar för faror längre fram på vägen.',
    marken: [
      { namn: 'Varning för kurva', beskrivning: 'Varnar för skarp kurva. Sänk hastigheten och var beredd på att vägen svänger kraftigt.' },
      { namn: 'Varning för korsning', beskrivning: 'Korsning med väg av samma prioritet. Högerregeln gäller om inga andra skyltar finns.' },
      { namn: 'Varning för ojämn väg', beskrivning: 'Vägbanan kan vara ojämn med gropar eller gupp. Sänk hastigheten.' },
      { namn: 'Varning för vägkorsning', beskrivning: 'En korsning närmar sig där du kan behöva väja eller lämna företräde.' },
      { namn: 'Varning för järnvägskorsning', beskrivning: 'Järnvägskorsning utan bommar. Stanna alltid och lyssna efter tåg.' },
      { namn: 'Varning för barn', beskrivning: 'Skolor, lekplatser eller bostadsområden nära. Var extra uppmärksam.' },
      { namn: 'Varning för älg/vilt', beskrivning: 'Viltstängsel saknas. Risk för vilt på vägen, särskilt i gryning och skymning.' },
      { namn: 'Varning för halt väglag', beskrivning: 'Vägbanan kan vara hal. Sänk hastigheten och undvik plötsliga manövrar.' },
    ],
  },
  {
    namn: 'Förbudsmärken',
    farg: '#C62828',
    icon: '🚫',
    beskrivning: 'Förbudsmärken är runda med röd kant. De anger vad som är förbjudet — exempelvis hastighetsbegränsningar, omkörningsförbud eller fordonsbegränsningar.',
    marken: [
      { namn: 'Förbud mot infart', beskrivning: 'Fordon får inte köra in på vägen från den sida skylten sitter.' },
      { namn: 'Hastighetsbegränsning', beskrivning: 'Anger maxhastigheten. Siffran i mitten visar tillåten hastighet i km/h.' },
      { namn: 'Omkörning förbjuden', beskrivning: 'Du får inte köra om andra motorfordon på denna sträcka.' },
      { namn: 'Stannande förbjudet', beskrivning: 'Du får varken stanna eller parkera vid vägkanten.' },
      { namn: 'Parkering förbjuden', beskrivning: 'Parkering är inte tillåten, men korta stopp (under 3 minuter) kan vara okej.' },
      { namn: 'Fordonstrafik förbjuden', beskrivning: 'Alla motorfordon är förbjudna på denna väg.' },
    ],
  },
  {
    namn: 'Påbudsmärken',
    farg: '#1565C0',
    icon: '➡️',
    beskrivning: 'Påbudsmärken är runda med blå botten och vit symbol. De anger vad du MÅSTE göra — exempelvis körriktning eller användning av viss utrustning.',
    marken: [
      { namn: 'Påbjuden körriktning (höger)', beskrivning: 'Du måste svänga höger vid nästa korsning.' },
      { namn: 'Påbjuden körriktning (rakt fram)', beskrivning: 'Du måste fortsätta rakt fram — svängning är förbjuden.' },
      { namn: 'Cirkulationsplats (rondell)', beskrivning: 'Rondell — du måste köra medurs runt rondellen. Trafik i rondellen har företräde.' },
      { namn: 'Påbjuden cykelbana', beskrivning: 'Cyklister måste använda denna bana. Motorfordon förbjudna.' },
    ],
  },
  {
    namn: 'Upplysningsskyltar',
    farg: '#2E7D32',
    icon: 'ℹ️',
    beskrivning: 'Upplysningsskyltar är oftast rektangulära med blå eller grön botten. De ger information om vägen, avstånd, service eller riktningar.',
    marken: [
      { namn: 'Motorväg', beskrivning: 'Motorväg börjar. Minsta tillåtna hastighet 40 km/h, max 110 km/h (120 om skyltad).' },
      { namn: 'Motorväg upphör', beskrivning: 'Motorväg slutar. Andra regler gäller härefter.' },
      { namn: 'Motortrafikled', beskrivning: 'Motortrafikled börjar. Liknar motorväg men kan ha korsningar i plan.' },
      { namn: 'Tättbebyggt område', beskrivning: 'Du kör in i tättbebyggt område. 50 km/h gäller om inget annat skyltas.' },
      { namn: 'Rekommenderad hastighet', beskrivning: 'Visar en rekommenderad hastighet som inte är obligatorisk men lämplig.' },
      { namn: 'Övergångsställe', beskrivning: 'Markerar att det finns ett övergångsställe. Fotgängare har företräde.' },
    ],
  },
  {
    namn: 'Tilläggstavlor',
    farg: '#5D4037',
    icon: '📋',
    beskrivning: 'Tilläggstavlor sitter under andra vägmärken och ger extra information — exempelvis avstånd, tider eller undantag.',
    marken: [
      { namn: 'Avståndstavla', beskrivning: 'Anger hur långt det är till faran eller platsen som huvudskylten visar.' },
      { namn: 'Utsträckning', beskrivning: 'Visar hur lång sträcka en föreskrift gäller.' },
      { namn: 'Tidsbegränsning', beskrivning: 'Anger vilka tider en regel gäller — t.ex. P-förbud kl. 08–18.' },
      { namn: 'Gäller lastbil', beskrivning: 'Anger att huvudskylten bara gäller lastbilar eller andra specifika fordon.' },
    ],
  },
];

export default function VagmarkenGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Hur många typer av vägmärken finns det i Sverige?', acceptedAnswer: { '@type': 'Answer', text: 'I Sverige finns det fem huvudkategorier av vägmärken: varningsmärken, förbudsmärken, påbudsmärken, upplysningsskyltar och tilläggstavlor. Totalt finns det över 300 olika vägmärken.' } },
      { '@type': 'Question', name: 'Vilka vägmärken är viktigast att kunna för körkortsprovet?', acceptedAnswer: { '@type': 'Answer', text: 'Förbudsmärken (särskilt hastighetsbegränsningar och förbud mot infart), väjnings- och stoppskyltar, varningsmärken för barn och vilt, samt påbudsmärken för körriktning är de vanligaste på teoriprovet.' } },
      { '@type': 'Question', name: 'Hur känner man igen förbudsmärken?', acceptedAnswer: { '@type': 'Answer', text: 'Förbudsmärken är runda med vit botten och röd kant. De anger saker du INTE får göra. Vissa har ett rött snedstreck genom symbolen.' } },
      { '@type': 'Question', name: 'Vad betyder blå runda vägmärken?', acceptedAnswer: { '@type': 'Answer', text: 'Blå runda vägmärken är påbudsmärken. De anger vad du MÅSTE göra — till exempel obligatorisk körriktning eller att du måste använda en viss bana.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: '#006B3F', height: '64px' }}><SiteHeader /></div>
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 4rem', color: '#0d1f17' }}>
        <nav style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#006B3F', textDecoration: 'none' }}>Huvet</Link> › <Link href="/vagmarken" style={{ color: '#006B3F', textDecoration: 'none' }}>Vägmärken</Link> › Guide
        </nav>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.75rem' }}>
          Alla vägmärken i Sverige — Komplett guide 2026
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
          Sverige har över 300 olika vägmärken uppdelade i fem huvudkategorier. Att kunna vägmärken är en av de viktigaste delarna av körkortsprovet — ungefär 10–15 frågor på teoriprovet handlar om just vägmärken. Här går vi igenom alla kategorier med förklaringar, så att du kan känna igen varje skylt vid vägkanten.
        </p>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem' }}>
          <strong style={{ color: '#006B3F' }}>💡 Visste du?</strong>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.95rem', color: '#333' }}>
            Vägmärken på teoriprovet är en av de vanligaste orsakerna till underkänt resultat. Öva särskilt på förbudsmärken och varningsmärken — de utgör majoriteten av frågorna.
          </p>
        </div>

        {vagmarkenKategorier.map((kat) => (
          <section key={kat.namn} style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem', fontSize: '1.4rem' }}>
              {kat.icon} {kat.namn}
            </h2>
            <p style={{ color: '#444', lineHeight: 1.7, marginBottom: '1rem' }}>{kat.beskrivning}</p>
            {kat.marken.map((m) => (
              <div key={m.namn} style={{ padding: '0.8rem 0', borderBottom: '1px solid #f0f0f0' }}>
                <strong style={{ fontSize: '0.95rem' }}>{m.namn}</strong>
                <p style={{ color: '#555', fontSize: '0.9rem', margin: '0.25rem 0 0', lineHeight: 1.6 }}>{m.beskrivning}</p>
              </div>
            ))}
          </section>
        ))}

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Så lär du dig vägmärken effektivt</h2>
          <ol style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
            <li><strong>Lär dig kategorierna först</strong> — färg och form berättar vilken typ av skylt det är.</li>
            <li><strong>Fokusera på de vanligaste</strong> — hastighetsbegränsningar, förbudsmärken och varningsskyltar kommer mest på provet.</li>
            <li><strong>Öva med bilder</strong> — använd vårt vägmärkesquiz för att testa dig själv.</li>
            <li><strong>Koppla till verkligheten</strong> — titta på skyltar när du sitter i bilen och testa om du vet vad de betyder.</li>
            <li><strong>Repetera regelbundet</strong> — spaced repetition (att öva med ökande intervall) ger bäst långtidsminne.</li>
          </ol>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#006B3F', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Vanliga misstag på teoriprovet</h2>
          <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
            <li><strong>Blanda ihop förbudsmärken och påbudsmärken</strong> — rund med röd kant = förbud, rund blå = påbud.</li>
            <li><strong>Glömma tilläggstavlor</strong> — de ändrar ofta betydelsen av huvudskylten.</li>
            <li><strong>Missa rekommenderad vs obligatorisk hastighet</strong> — blå kvadratisk skylt = rekommenderad, röd rund = obligatorisk.</li>
            <li><strong>Förbise varningsskyltar</strong> — de ger viktig information om vad som väntar längre fram.</li>
          </ul>
        </section>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#006B3F' }}>Redo att testa dina kunskaper?</h3>
          <p style={{ margin: '0 0 1rem' }}>Öva på riktiga körkortsfrågor om vägmärken och se hur redo du är för teoriprovet.</p>
          <Link href="/korkortsfragor" style={{ background: '#006B3F', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            Öva körkortsfrågorna →
          </Link>
        </div>

        <nav style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e6f4ee', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/trafikregler-guide" style={{ color: '#006B3F', textDecoration: 'none' }}>← Trafikregler guide</Link>
          <Link href="/hastighetsgranser-guide" style={{ color: '#006B3F', textDecoration: 'none', marginLeft: 'auto' }}>Hastighetsgränser guide →</Link>
        </nav>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/teoriprov-tips" style={{ color: '#006B3F', fontSize: '0.85rem', textDecoration: 'none' }}>Teoriprov-tips</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/ovningsprov-guide" style={{ color: '#006B3F', fontSize: '0.85rem', textDecoration: 'none' }}>Övningsprov-guide</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/riskettan" style={{ color: '#006B3F', fontSize: '0.85rem', textDecoration: 'none' }}>Riskettan</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
