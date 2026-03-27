import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Trafikregler i Sverige 2026 — Komplett sammanfattning | Huvet',
  description: 'Alla viktiga trafikregler i Sverige sammanfattade. Väjningsplikt, högerregeln, parkering, omkörning, alkohol, bilbälte och mer. Perfekt förberedelse för teoriprovet 2026.',
  keywords: ['trafikregler', 'trafikregler sverige', 'trafikregler 2026', 'trafikregler sammanfattning', 'väjningsplikt', 'högerregeln', 'trafikregler körkort', 'parkeringsregler'],
  openGraph: {
    title: 'Trafikregler i Sverige 2026 — Komplett sammanfattning | Huvet',
    description: 'Alla viktiga svenska trafikregler sammanfattade för körkortsprovet 2026.',
  },
};

export default function TrafikregelGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Vad innebär högerregeln?', acceptedAnswer: { '@type': 'Answer', text: 'Högerregeln innebär att du ska lämna företräde åt fordon som kommer från höger i korsningar som saknar trafiksignaler, vägmärken eller vägmarkeringar. Det gäller främst i bostadsområden och mindre vägar.' } },
      { '@type': 'Question', name: 'Vad är skillnaden mellan stannande och parkering?', acceptedAnswer: { '@type': 'Answer', text: 'Stannande innebär att fordonet står stilla i högst 3 minuter och att föraren finns kvar vid fordonet. Parkering innebär att fordonet står stilla längre än 3 minuter eller att föraren lämnar fordonet.' } },
      { '@type': 'Question', name: 'Vid vilken promillehalt räknas det som rattfylleri?', acceptedAnswer: { '@type': 'Answer', text: 'I Sverige räknas det som rattfylleri vid 0,2 promille alkohol i blodet. Grovt rattfylleri börjar vid 1,0 promille. För droger gäller nolltolerans.' } },
      { '@type': 'Question', name: 'Vem har företräde i en rondell?', acceptedAnswer: { '@type': 'Answer', text: 'Trafik som redan befinner sig i rondellen har alltid företräde. Du ska väja för trafik i rondellen när du kör in. Blinka höger när du ska lämna rondellen.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: '#1DB954', height: '64px' }}><SiteHeader /></div>
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 4rem', color: '#0d1f17' }}>
        <nav style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#1DB954', textDecoration: 'none' }}>Huvet</Link> › <Link href="/trafikregler" style={{ color: '#1DB954', textDecoration: 'none' }}>Trafikregler</Link> › Guide
        </nav>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.75rem' }}>
          Trafikregler i Sverige 2026 — Sammanfattning av de viktigaste reglerna
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
          Trafikreglerna i Sverige styrs av trafikförordningen och vägtrafiklagen. För att klara körkortsprovet behöver du ha koll på allt från företrädesregler och hastigheter till parkeringsregler och alkohollagstiftning. Här sammanfattar vi de absolut viktigaste reglerna du måste kunna — sorterat efter ämne.
        </p>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Företrädesregler</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Högerregeln:</strong> Lämna företräde åt fordon från höger i korsningar utan skyltning. Gäller inte mot utfart, gång- eller cykelväg.</li>
          <li><strong>Väjningsplikt:</strong> Triangel-skylt med spetsen nedåt — du ska väja för all trafik på den korsande vägen.</li>
          <li><strong>Stopplikt:</strong> Röd åttakantig skylt (stoppskylt) — du måste stanna helt innan du kan fortsätta.</li>
          <li><strong>Huvudled:</strong> Gul romb-skylt — du har företräde på huvudleden. Fordon från sidovägar ska väja.</li>
          <li><strong>Rondell:</strong> Trafik inne i rondellen har alltid företräde. Blinka höger när du lämnar.</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Hastighetsregler</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Tättbebyggt område:</strong> 50 km/h (om inget annat skyltas)</li>
          <li><strong>Landsväg:</strong> 70 km/h</li>
          <li><strong>Motortrafikled:</strong> 90 km/h</li>
          <li><strong>Motorväg:</strong> 110 km/h (120 km/h om skyltad)</li>
          <li><strong>Skolzon:</strong> Ofta 30 km/h</li>
          <li>Tillfälliga vägmärken gäller alltid framför fasta skyltar.</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Parkering och stannande</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Stannande:</strong> Max 3 minuter, föraren kvar vid fordonet.</li>
          <li><strong>Parkering:</strong> Mer än 3 minuter eller föraren lämnar fordonet.</li>
          <li>Parkering förbjudet inom <strong>10 meter från övergångsställe</strong>.</li>
          <li>Parkering förbjudet inom <strong>10 meter från korsning</strong>.</li>
          <li>Parkering förbjudet inom <strong>30 meter från järnvägskorsning</strong>.</li>
          <li><strong>Gul heldragen kantlinje:</strong> Stannande och parkering förbjudet.</li>
          <li><strong>Gul streckad kantlinje:</strong> Parkering förbjudet men stannande OK.</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Omkörning</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li>Omkörning sker alltid till vänster (undantag: spårvagn som ska svänga vänster).</li>
          <li>Du får <strong>inte</strong> köra om vid övergångsställe, korsningar eller heldragen mittlinje.</li>
          <li>Kontrollera alltid döda vinkeln, innerbackspegel, ytterbackspegel innan du kör om.</li>
          <li>Den som blir omkörd får inte öka hastigheten.</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Alkohol, droger och trötthet</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Rattfylleri:</strong> 0,2 promille eller mer — brott.</li>
          <li><strong>Grovt rattfylleri:</strong> 1,0 promille eller mer — allvarligt brott.</li>
          <li><strong>Droger:</strong> Nolltolerans. Alla spår av narkotika i blodet räknas.</li>
          <li><strong>Trötthet:</strong> Lika farligt som alkohol. Stanna och vila om du är trött — en 20-minuters powernap kan rädda liv.</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Säkerhetsutrustning</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li><strong>Bilbälte:</strong> Obligatoriskt för alla i bilen. Föraren ansvarar för barn under 15.</li>
          <li><strong>Bakåtvänd bilbarnstol:</strong> Barn under 135 cm ska använda barnstol eller bältesstol.</li>
          <li><strong>Varningstriangel:</strong> Ska finnas i bilen. Placeras 50–100 meter bakom bilen vid stopp.</li>
          <li><strong>Reflexväst:</strong> Rekommenderas starkt vid stopp på vägen, särskilt i mörker.</li>
        </ul>

        <h2 style={{ color: '#1DB954', borderBottom: '2px solid #e6f4ee', paddingBottom: '0.5rem' }}>Övergångsställe och oskyddade trafikanter</h2>
        <ul style={{ lineHeight: 2, paddingLeft: '1.5rem', color: '#333' }}>
          <li>Fotgängare har alltid företräde på övergångsställen.</li>
          <li>Du måste stanna och låta fotgängare passera — inte bara sakta ner.</li>
          <li>Var extra uppmärksam på barn, äldre och personer med funktionsnedsättning.</li>
          <li>Cyklister som korsar vägen på cykelöverfart har företräde.</li>
        </ul>

        <div style={{ background: '#e6f4ee', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: '#1DB954' }}>Öva på trafikregler-frågor</h3>
          <p style={{ margin: '0 0 1rem' }}>Testa dina kunskaper med riktiga körkortsfrågor om trafikregler och väjningsplikt.</p>
          <Link href="/korkortsfragor" style={{ background: '#1DB954', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            Öva körkortsfrågorna →
          </Link>
        </div>

        <nav style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e6f4ee', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/vagmarken-guide" style={{ color: '#1DB954', textDecoration: 'none' }}>← Vägmärken guide</Link>
          <Link href="/hastighetsgranser-guide" style={{ color: '#1DB954', textDecoration: 'none', marginLeft: 'auto' }}>Hastighetsgränser guide →</Link>
        </nav>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/ovningsprov-guide" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Övningsprov-guide</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/uppkorning-tips" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Uppkörning-tips</Link>
          <span style={{ color: '#ccc' }}>•</span>
          <Link href="/korkort-kostnad-guide" style={{ color: '#1DB954', fontSize: '0.85rem', textDecoration: 'none' }}>Körkort kostnad 2026</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
