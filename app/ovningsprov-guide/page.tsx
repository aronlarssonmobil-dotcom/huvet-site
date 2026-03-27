import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Övningsprov körkort 2026 — Tips för att klara provet | Huvet',
  description: 'Så klarar du övningsprovet för körkort. Hur många rätt behövs? Bästa strategierna för att förbereda sig inför teoriprovet 2026. Gratis övningsprov online.',
  keywords: ['övningsprov körkort', 'övningsprov', 'körkortsprov', 'gratis övningsprov', 'teoriprov övning', 'hur många rätt teoriprov', 'övningsprov online', 'klara övningsprovet'],
  openGraph: {
    title: 'Övningsprov körkort 2026 — Tips och strategier | Huvet',
    description: 'Bästa tipsen för att klara övningsprovet för körkort. Hur provet fungerar, hur många rätt du behöver och var du övar.',
  },
};

export default function OvningsprovGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Hur många frågor har teoriprovet?', acceptedAnswer: { '@type': 'Answer', text: 'Teoriprovet (kunskapsprov) för B-körkort har 70 frågor. Du behöver minst 52 rätt för att bli godkänd, det vill säga 75% rätt.' } },
      { '@type': 'Question', name: 'Hur lång tid har man på teoriprovet?', acceptedAnswer: { '@type': 'Answer', text: 'Du har 50 minuter på dig att svara på alla 70 frågor. Det ger dig i snitt cirka 43 sekunder per fråga.' } },
      { '@type': 'Question', name: 'Kan man göra övningsprov gratis?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, det finns flera sajter som erbjuder gratis övningsprov med riktiga körkortsfrågor. Huvet.se erbjuder gratis övningsprov med svaghetsanalys och förklaringar.' } },
      { '@type': 'Question', name: 'Vad händer om man kuggar teoriprovet?', acceptedAnswer: { '@type': 'Answer', text: 'Om du inte blir godkänd kan du boka om provet direkt. Det finns ingen begränsning på antal försök. Varje provtillfälle kostar 325 kr (2026).' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: '#1DB954', height: '64px' }}><SiteHeader /></div>
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 4rem', color: '#0d1f17' }}>
        <nav style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#1DB954', textDecoration: 'none' }}>Huvet</Link> › <Link href="/ovningsprov" style={{ color: '#1DB954', textDecoration: 'none' }}>Övningsprov</Link> › Guide
        </nav>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.75rem' }}>
          Övningsprov körkort — Så klarar du teoriprovet 2026
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
          Att göra övningsprov är det mest effektiva sättet att förbereda sig inför det riktiga teoriprovet. Men det gäller att öva rätt — inte bara många gånger. Här guidar vi dig genom exakt hur teoriprovet fungerar, hur många rätt du behöver och de bästa strategierna för att lyckas.
        </p>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem' }}>
          <strong style={{ color: '#1DB954' }}>📊 Snabbfakta om teoriprovet</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 2, color: '#333' }}>
            <li><strong>70 frågor</strong> — blandning av text- och bildfrågor</li>
            <li><strong>50 minuter</strong> — det ger ~43 sekunder per fråga</li>
            <li><strong>52 rätt (75%)</strong> — krävs för godkänt</li>
            <li><strong>325 kr</strong> — kostar varje provtillfälle</li>
            <li><strong>5 kategorier</strong> — fordonskännedom, trafikregler, vägmärken, riskmedvetenhet, miljö</li>
          </ul>
        </div>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Hur teoriprovet är uppbyggt</h2>
        <p style={{ lineHeight: 1.8, color: '#333' }}>
          Teoriprovet (officiellt kunskapsprovet) administreras av Trafikverket. Det görs på en dator vid ett av Trafikverkets förarprovskontor. Frågorna delas in i följande huvudkategorier:
        </p>
        <ol style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Trafikregler och vägmärken</strong> — högerregeln, väjningsplikt, skyltar, vägmarkeringar</li>
          <li><strong>Fordonskännedom</strong> — bromsar, däck, belysning, kontrollpunkter</li>
          <li><strong>Riskmedvetenhet</strong> — faror i trafiken, anpassa hastighet, trötthet</li>
          <li><strong>Miljö och bränsle</strong> — miljöpåverkan, eco-driving, bränsleförbrukning</li>
          <li><strong>Personlig förmåga</strong> — stress, alkohol, medicinpåverkan</li>
        </ol>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>7 strategier för att klara övningsprovet</h2>
        <ol style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Börja med teori, inte frågor.</strong> Läs igenom grunderna först (trafikregler, vägmärken, hastigheter). Sedan övar du frågor.</li>
          <li><strong>Gör minst 10 fullständiga övningsprov.</strong> Forskning visar att repeterad provövning ger bäst resultat. Sikta på att klara 60+ rätt av 70 innan du bokar provet.</li>
          <li><strong>Analysera dina fel.</strong> Det är inte antalet prov som avgör — det är om du förstår VARFÖR du svarat fel. Använd Huvets svaghetsanalys.</li>
          <li><strong>Öva på svaga områden separat.</strong> Om du gör flest fel på vägmärken, öva BARA vägmärken tills du behärskar dem.</li>
          <li><strong>Simulera provmiljön.</strong> Sätt en timer på 50 minuter. Inga hjälpmedel. Stäng av telefonen. Öva under realistiska förhållanden.</li>
          <li><strong>Sprid ut övningen.</strong> Öva 30–45 minuter per dag i 2–3 veckor istället för att maran-plugga kvällen innan.</li>
          <li><strong>Läs frågan noggrant.</strong> Många fel beror på att man läser för snabbt. Ord som &quot;alltid&quot;, &quot;aldrig&quot;, &quot;bör&quot;, &quot;måste&quot; ändrar hela betydelsen.</li>
        </ol>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Vanligaste fällan på teoriprovet</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Blanda ihop &quot;bör&quot; och &quot;måste&quot;</strong> — juridisk skillnad som ändrar rätt svar</li>
          <li><strong>Hastigheter vid vägarbeten</strong> — tillfälliga skyltar gäller ALLTID framför fasta</li>
          <li><strong>Parkering nära korsning</strong> — 10 meter, inte 5 meter</li>
          <li><strong>Bildfrågor med dold information</strong> — titta på HELA bilden, inte bara mitten</li>
          <li><strong>Rondell-frågor</strong> — trafik i rondellen har ALLTID företräde</li>
          <li><strong>Miljöfrågor</strong> — ofta underskattade men utgör ~10% av provet</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>När är du redo att boka provet?</h2>
        <p style={{ lineHeight: 1.8, color: '#333' }}>
          En bra tumregel: boka teoriprovet när du <strong>konsekvent klarar 60 rätt av 70</strong> på övningsprov (86%). Det ger dig marginal för att nervositeten tar några poäng på det riktiga provet. Många bokar provet och övar intensivt de sista 1–2 veckorna innan — det funkar, men kräver disciplin.
        </p>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#1DB954' }}>Gör ett gratis övningsprov nu</h3>
          <p style={{ margin: '0 0 1rem' }}>Testa dig med riktiga körkortsfrågor och se hur redo du är för teoriprovet.</p>
          <Link href="/ovningsprov" style={{ background: '#1DB954', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginRight: '0.75rem' }}>
            Starta övningsprov →
          </Link>
          <Link href="/korkortsfragor" style={{ color: '#1DB954', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', border: '2px solid #1DB954' }}>
            Öva ämnesvis
          </Link>
        </div>

        <nav style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e6f4ee', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/hastighetsgranser-guide" style={{ color: '#1DB954', textDecoration: 'none' }}>← Hastighetsgränser guide</Link>
          <Link href="/korkort-kostnad-guide" style={{ color: '#1DB954', textDecoration: 'none', marginLeft: 'auto' }}>Körkort kostnad →</Link>
        </nav>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/teoriprov-tips" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Teoriprov-tips</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/uppkorning-tips" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Uppkörning-tips</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/riskettan" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Riskettan</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
