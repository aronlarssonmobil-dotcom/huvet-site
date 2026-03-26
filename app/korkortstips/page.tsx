import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Körkortslips 2026 – 15 tips för att klara teorin på första försöket | Huvet',
  description:
    'Lär dig de 15 viktigaste tipsen för att klara körkortsprovet på första försöket. Täcker väjningsregler, vägmärken, hastighetsgränser och de vanligaste fällorna som får folk att kugga.',
  keywords: [
    'körkortslips',
    'tips för körkortsprovet',
    'klara teoriprov',
    'klara körkortsprovet första gången',
    'teoriprov tips',
    'hur klara teoriprov',
    'körkortstips',
    'körkortsprovet tips 2026',
    'vanliga misstag teoriprov',
  ],
  alternates: { canonical: 'https://huvet.se/korkortstips' },
};

const tips = [
  {
    number: '01',
    title: 'Lär dig väjningsregeln utantill',
    body: 'Högerregeln gäller på likvärdiga vägar — fordon från din högra sida har alltid företräde. Undantagen (rondell, stoppskyltar, väjningsskyltar) måste du kunna direkt. Det är den kategori som flest kuggades på 2023–2024.',
  },
  {
    number: '02',
    title: 'Förstå skillnaden mellan stoppskylt och väjningsskylt',
    body: 'Stoppskylt (röd oktagon med STOP): du måste stanna fullständigt, alltid. Väjningsskylt (röd nedvänd triangel): du ska väja men behöver inte stanna om vägen är fri. Det är stor skillnad juridiskt — och på provet.',
  },
  {
    number: '03',
    title: 'Memorera hastighetsgränserna för olika vägtyper',
    body: 'Grundreglerna: tätort 50 km/h, landsbygd 70 km/h, motorväg 110 km/h (om ej annat anges). Men kom ihåg: den rekommenderade hastigheten i snö och halka kan sänka det avsevärt. Frågor om "anpassad hastighet" är vanliga.',
  },
  {
    number: '04',
    title: 'Säkerhetsavstånd och reaktionstid',
    body: 'Tumregeln: minst 3 sekunders avstånd till framförvarande fordon (2 sekunder vid torrt väglag, mer vid regn/is). På provet brukar det komma beräkningsfrågor: vid 90 km/h är reaktionssträckan ca 25 meter och bromsvägen ytterligare 40–60 meter.',
  },
  {
    number: '05',
    title: 'Lär dig fickparkeringens regler',
    body: 'Du får inte parkera inom 10 meter från övergångsställe, 10 meter från korsning, framför infart eller utfart, eller vid heldragen gul linje. Parkeringsfrågor är lätta extrapoäng — lär dem ordentligt.',
  },
  {
    number: '06',
    title: 'Förstå vad de gula linjerna i gatu kant betyder',
    body: 'Heldragen gul kantlinje: stopp- och parkeringsförbud. Streckad gul kantlinje: stannandeförbud under rusningstrafik (kontrollera skylt). Utan linje gäller grundreglerna. Det är en av de enklaste frågorna att lära sig.',
  },
  {
    number: '07',
    title: 'Träna specifikt på vägmärken du inte kan',
    body: 'Istället för att köra igenom alla 450 frågor: gör ett diagnostiktest och identifiera dina svaga kategorier. Är du svag på märken men stark på trafikregler? Träna märken dubbelt. Det sparar timmar.',
  },
  {
    number: '08',
    title: 'Använd eselsbryggor för varningsskyltarna',
    body: 'Varningsskyltar är alltid gula med röd kant och svart symbol. Förbudsskyltar är röda cirklar. Påbudsskyltar är blå cirklar. Upplysningsskyltar är blå rektanglar. Håll dessa fyra kategorier isär — det ger omedelbart mer rätt.',
  },
  {
    number: '09',
    title: 'Kör simulerade prov de sista dagarna',
    body: 'Riktiga provet har 65 frågor och du behöver minst 52 rätt (80%). Kör simulerade prov under tidsgräns (45 minuter) minst 3 gånger innan du bokar. Det minskar nervositeten markant.',
  },
  {
    number: '10',
    title: 'Lär dig vad som gäller vid järnvägskorsning',
    body: 'Vid järnvägskorsning utan bommar: stanna vid stopplinjen, se åt båda håll, kör bara om du är säker. Fullt stopp krävs vid rödblinkande ljus eller nedlasade bommar. Dessa frågor är nästan alltid med på provet.',
  },
  {
    number: '11',
    title: 'Förstå promilleregeln i hela sitt sammanhang',
    body: '0,2 promille är gränsen för rattfylleri. 0,5–1,0 är rattfylleri. Över 1,0 är grovt rattfylleri. Men läkemedel, narkotika och trötthet kan också ge körförbud — oavsett promillehalt. Hela det avsnittet är tenterat.',
  },
  {
    number: '12',
    title: 'Memorera övningskörningens regler',
    body: 'Handledaren måste vara minst 24 år, ha haft körkort i minst 5 år och sitta bredvid. Det räcker inte att sitta baksätet. Bilen måste ha dubbla pedaler eller vara godkänd för övningskörning. Dessa frågor är lätta poäng.',
  },
  {
    number: '13',
    title: 'Använd minst 2 veckors aktiv träning',
    body: 'Forskning visar att spridd inlärning (30 min/dag i 14 dagar) ger bättre resultat än maratonsittning (5 tim kvällen innan). Huvet bygger din träning på det principet.',
  },
  {
    number: '14',
    title: 'Bokstavligen läs hela frågan',
    body: 'Vanligaste misstaget: svarar på vad man trodde frågan var. Ord som "ALLTID", "ALDRIG", "INTE" ändrar hela svaret. Läs frågan två gånger om du är osäker.',
  },
  {
    number: '15',
    title: 'Boka provet när du klarar 85%+ i simulerade prov',
    body: 'Boka inte för tidigt. När du konsekvent klarar 85% eller mer på simulerade prov är du redo. Under 80% — fortsätt träna. Provet kostar pengar att omta och datumsbokning tar tid.',
  },
];

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Körkortslips – 15 konkreta tips för att klara teorin',
  description: 'Lär dig de 15 viktigaste tipsen för att klara körkortsprovet i Sverige.',
  url: 'https://huvet.se/korkortstips',
  publisher: {
    '@type': 'Organization',
    name: 'Huvet',
    url: 'https://huvet.se',
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: tips.length,
    itemListElement: tips.map((tip, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: tip.title,
      description: tip.body,
    })),
  },
};

export default function KorkortsTipsPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2efe9', padding: '0 20px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', background: '#006B3F', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
                <circle cx="10" cy="10" r="2.5" fill="white"/>
                <line x1="10" y1="2" x2="10" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3.4" y1="13.5" x2="7.8" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="16.6" y1="13.5" x2="12.2" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontSize: '20px', fontWeight: '900', color: '#0d1f17', letterSpacing: '-0.04em' }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Börja träna gratis
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #f0f7f3 0%, #fff 60%)', padding: '64px 20px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#e6f4ee', color: '#006B3F', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 16px', borderRadius: '999px', marginBottom: '20px' }}>
            Teoriprovet
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '900', lineHeight: '1.1', color: '#0d1f17', margin: '0 0 20px', letterSpacing: '-0.04em' }}>
            15 körkortstips som faktiskt funkar
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#555', margin: '0 0 32px' }}>
            Konkreta, specifika råd baserade på vad som faktiskt fellrar på det svenska teoriprovet. Inte generella studiemetoder — utan exakt vad du behöver veta.
          </p>
          <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '14px 28px', borderRadius: '999px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>
            Testa dina kunskaper gratis →
          </Link>
        </div>
      </section>

      {/* Tips */}
      <section style={{ padding: '60px 20px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {tips.map((tip) => (
              <div key={tip.number} style={{
                background: '#fafcfb',
                borderRadius: '20px',
                padding: '28px 32px',
                border: '2px solid #e2efe9',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '52px', fontWeight: '900', color: '#006B3F10', lineHeight: 1 }}>
                  {tip.number}
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', background: '#006B3F', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>
                    {tip.number}
                  </div>
                  <div>
                    <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0d1f17', margin: '0 0 8px', lineHeight: '1.3' }}>
                      {tip.title}
                    </h2>
                    <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                      {tip.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '60px', background: 'linear-gradient(160deg, #0d1f17 0%, #1a3a26 100%)', borderRadius: '24px', padding: '40px 32px', textAlign: 'center', color: 'white' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px' }}>Redo att testa?</h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '24px', fontSize: '15px' }}>
              Huvet identifierar exakt vilka av dessa tips du fortfarande har kvar att lära — och tränar dig på dem.
            </p>
            <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '16px 32px', borderRadius: '999px', fontSize: '16px', fontWeight: '700', textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 20px rgba(0,107,63,0.4)' }}>
              Gör gratisquiz nu →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#081610', color: 'rgba(255,255,255,0.4)', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '32px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '800', fontSize: '18px' }}>Huvet</Link>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[
                { href: '/korkortstips', label: 'Körkortslips' },
                { href: '/vagmarken', label: 'Vägmärken' },
                { href: '/korkortsfragor', label: 'Körkortsfrågor' },
                { href: '/mc', label: 'MC-körkort' },
                { href: '/moped', label: 'Mopedkörkort' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', fontSize: '13px' }}>
            © 2026 Huvet (huvet.se). Alla rättigheter förbehållna.
          </div>
        </div>
      </footer>
    </div>
  );
}
