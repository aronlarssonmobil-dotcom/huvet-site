import type { Metadata } from "next";
import Link from "next/link";
import CostCalculator from "../../components/CostCalculator";

export const metadata: Metadata = {
  title: "Vad kostar körkortet 2026? Komplett prislista | Huvet",
  description:
    "Verkliga priser för körkort 2026: teoriprov 325 kr, uppkörning 1 100 kr, Risk 2 ca 2 000 kr, körskola 600–900 kr/lektion. Billigaste vs dyraste alternativet — skillnaden är 20 000 kr.",
  keywords: [
    "körkort kostnad 2026",
    "vad kostar körkortet",
    "körskola pris",
    "teoriprov kostnad",
    "uppkörning pris",
    "risk 1 risk 2 kostnad",
  ],
  openGraph: {
    title: "Vad kostar körkortet 2026? Komplett prislista",
    description: "Alla verkliga priser för körkort i Sverige 2026. Jämför billigaste vs dyraste alternativet.",
    locale: "sv_SE",
    type: "article",
  },
  alternates: { canonical: "https://huvet.se/kostnad" },
};

const fixedCosts = [
  {
    item: "Körkortstillstånd",
    cost: "220 kr",
    who: "Transportstyrelsen",
    note: "Engångskostnad. Ansökan online, betalas med Swish/kort.",
    required: true,
  },
  {
    item: "Teoriprov (B-körkort)",
    cost: "325 kr / försök",
    who: "Trafikverket",
    note: "Betalas varje gång du bokar. Klarar du det på första försöket: 325 kr totalt.",
    required: true,
  },
  {
    item: "Uppkörning (körprov B)",
    cost: "1 100 kr / försök",
    who: "Trafikverket",
    note: "Körprovet hos Trafikverket. Underkänns du kostar det 1 100 kr per nytt försök.",
    required: true,
  },
  {
    item: "Riskutbildning del 1",
    cost: "400–700 kr",
    who: "Körskola / Trafikverket",
    note: "Obligatorisk teoridag (~4 timmar) om trafiksäkerhet och risker. Priset varierar per skola.",
    required: true,
  },
  {
    item: "Riskutbildning del 2 (halkkörning)",
    cost: "1 500–2 500 kr",
    who: "Körskola / halkbana",
    note: "Obligatorisk kördag på halkbana. Kan vara svår att boka — planera 2–4 månader i förväg.",
    required: true,
  },
  {
    item: "Körkortskortet (utfärdande)",
    cost: "220 kr",
    who: "Transportstyrelsen",
    note: "Betalt när du är godkänd och ansöker om det faktiska körkortskortet.",
    required: true,
  },
];

const variableCosts = [
  {
    item: "Teoribok (körkortsbok)",
    cost: "300–800 kr",
    note: "Körkortsbok från Trafikverket eller Trafikteoriboken ca 350–450 kr. Digital version finns ibland billigare.",
    tip: "Spara: Låna på biblioteket eller köp begagnad.",
  },
  {
    item: "Körskola — teori/teorikurs",
    cost: "500–2 000 kr",
    note: "Körskola erbjuder teorikurser som en heldag eller ett par kvällar. Alternativ: studera hemma med bok och digital träning.",
    tip: "Spara: Skippa teorikursen på körskola — studiera hemma med Huvet.",
  },
  {
    item: "Körskola — körlektioner",
    cost: "650–950 kr/lektion",
    note: "En lektion är vanligtvis 45–60 minuter. De flesta behöver 20–40 lektioner om de inte övningskör privat parallellt.",
    tip: "Spara: Öva privat med handledare parallellt — minska antalet körskolelektioner.",
  },
  {
    item: "Handledarutbildning",
    cost: "200–500 kr",
    note: "Den som ska handleda din privata övningskörning behöver gå en handledarutbildning (3–4 timmar).",
    tip: "Engångskostnad som betalar sig snabbt om du övningskör mycket privat.",
  },
  {
    item: "Digital träningsapp/tjänst",
    cost: "0–599 kr",
    note: "Gratis alternativ finns. Betalda alternativ som Huvet ger anpassad träning och simulerade prov.",
    tip: "Kostar mindre än ett nytt teoriprovstillfälle (325 kr) och ökar chansen att klara på första försöket.",
  },
];

export default function KostnadPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#fff", color: "#0d1f17", minHeight: "100vh" }}>
      <header style={{ background: "rgba(255,255,255,0.96)", borderBottom: "1px solid #e2efe9", padding: "0 20px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{ width: "36px", height: "36px", background: "#006B3F", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
                <circle cx="10" cy="10" r="2.5" fill="white"/>
                <line x1="10" y1="2" x2="10" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3.4" y1="13.5" x2="7.8" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="16.6" y1="13.5" x2="12.2" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontSize: "20px", fontWeight: "900", color: "#0d1f17", letterSpacing: "-0.04em" }}>Huvet</span>
          </Link>
          <Link href="/#demo" style={{ background: "#006B3F", color: "white", padding: "10px 22px", borderRadius: "999px", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
            Träna gratis
          </Link>
        </div>
      </header>

      <section style={{ background: "linear-gradient(160deg, #f0f7f3 0%, #fff 70%)", padding: "64px 20px 52px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#e6f4ee", color: "#006B3F", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.16em", padding: "6px 16px", borderRadius: "999px", marginBottom: "24px" }}>
            Priser uppdaterade 2026
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: "900", lineHeight: "1.05", color: "#0d1f17", margin: "0 0 24px", letterSpacing: "-0.04em" }}>
            Vad kostar körkortet 2026?<br />
            <span style={{ color: "#006B3F" }}>Komplett prislista</span>
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.75", color: "#555", maxWidth: "640px", margin: "0 0 32px" }}>
            Det korta svaret: mellan <strong>8 000 och 35 000 kr</strong>. Skillnaden beror nästan helt på hur mycket du kör i körskola vs privat. Vi listar alla verkliga priser för 2026 — inga vaga intervall, inga dolda kostnader.
          </p>
          {/* Summary range boxes */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            {[
              { label: "Privat övningskörning + minimalt körskola", value: "8 000–14 000 kr", color: "#006B3F" },
              { label: "Blandad (privat + körskola)", value: "15 000–22 000 kr", color: "#d97706" },
              { label: "Helt via körskola", value: "25 000–35 000 kr", color: "#dc2626" },
            ].map((s) => (
              <div key={s.label} style={{ background: "white", border: `2px solid ${s.color}30`, borderRadius: "14px", padding: "14px 20px" }}>
                <div style={{ fontSize: "22px", fontWeight: "900", color: s.color, marginBottom: "4px" }}>{s.value}</div>
                <div style={{ fontSize: "13px", color: "#555", fontWeight: "600" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "52px 20px 100px" }}>

        {/* Fixed costs */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "8px", letterSpacing: "-0.03em" }}>
            De fasta kostnaderna — du betalar dessa oavsett
          </h2>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "24px", lineHeight: "1.7" }}>
            Dessa kostnader är obligatoriska och gäller alla som tar B-körkort i Sverige. Summan av dessa fasta kostnader blir <strong>ca 2 265–3 765 kr</strong> vid ett godkänt på första försöket.
          </p>
          <div style={{ border: "2px solid #e2efe9", borderRadius: "18px", overflow: "hidden" }}>
            {fixedCosts.map((item, i) => (
              <div key={item.item} style={{
                padding: "20px 24px",
                borderBottom: i < fixedCosts.length - 1 ? "1px solid #f0f0f0" : "none",
                background: i % 2 === 0 ? "white" : "#fafcfb",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap", marginBottom: "6px" }}>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "800", color: "#0d1f17", marginBottom: "2px" }}>{item.item}</div>
                    <div style={{ fontSize: "12px", color: "#888", fontWeight: "600" }}>Betalas till: {item.who}</div>
                  </div>
                  <div style={{ fontSize: "18px", fontWeight: "900", color: "#006B3F", whiteSpace: "nowrap" }}>{item.cost}</div>
                </div>
                <p style={{ fontSize: "14px", color: "#555", margin: 0, lineHeight: "1.6" }}>{item.note}</p>
              </div>
            ))}
            {/* Total fixed */}
            <div style={{ background: "#f0f7f3", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "2px solid #c3ddd2" }}>
              <div style={{ fontSize: "15px", fontWeight: "800", color: "#0d1f17" }}>Summa fasta kostnader (1 godkänt försök)</div>
              <div style={{ fontSize: "20px", fontWeight: "900", color: "#006B3F" }}>≈ 2 265–3 765 kr</div>
            </div>
          </div>
        </div>

        {/* Variable costs */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "8px", letterSpacing: "-0.03em" }}>
            De rörliga kostnaderna — här väljer du själv
          </h2>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "24px", lineHeight: "1.7" }}>
            Det är här de stora skillnaderna uppstår. Den som är smart med sina val kan spara <strong>15 000–20 000 kr</strong> jämfört med den som lämnar allt till körskolan.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {variableCosts.map((item) => (
              <div key={item.item} style={{ background: "white", borderRadius: "16px", border: "2px solid #e2efe9", overflow: "hidden" }}>
                <div style={{ padding: "20px 24px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginBottom: "8px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#0d1f17" }}>{item.item}</div>
                    <div style={{ fontSize: "18px", fontWeight: "900", color: "#0d1f17", whiteSpace: "nowrap" }}>{item.cost}</div>
                  </div>
                  <p style={{ fontSize: "14px", color: "#555", margin: 0, lineHeight: "1.65" }}>{item.note}</p>
                </div>
                <div style={{ background: "#f0f7f3", padding: "12px 24px", borderTop: "1px solid #e2efe9", display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "#006B3F", fontWeight: "900", flexShrink: 0 }}>💡</span>
                  <p style={{ fontSize: "13px", color: "#004d2d", margin: 0, lineHeight: "1.55", fontWeight: "600" }}>{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison: Billigast vs Dyrast */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "8px", letterSpacing: "-0.03em" }}>
            Billigast vs dyrast — 20 000 kr i skillnad
          </h2>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "28px", lineHeight: "1.7" }}>
            Här är två verkliga scenarion för att illustrera skillnaden. Båda slutar med ett B-körkort.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {/* Cheapest */}
            <div style={{ background: "white", border: "2px solid #006B3F", borderRadius: "18px", overflow: "hidden" }}>
              <div style={{ background: "#006B3F", padding: "16px 20px" }}>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px" }}>Billigaste alternativet</div>
                <div style={{ color: "white", fontSize: "20px", fontWeight: "900" }}>≈ 8 000–12 000 kr</div>
              </div>
              <div style={{ padding: "16px 20px" }}>
                {[
                  { label: "Körkortstillstånd", val: "220 kr" },
                  { label: "Teoribok (begagnad)", val: "200 kr" },
                  { label: "Digital träning (Huvet)", val: "0–300 kr" },
                  { label: "Risk 1", val: "500 kr" },
                  { label: "Teoriprov (1 försök)", val: "325 kr" },
                  { label: "Risk 2 (halkkörning)", val: "1 700 kr" },
                  { label: "5–10 körskolelektioner*", val: "3 500–7 000 kr" },
                  { label: "Uppkörning (1 försök)", val: "1 100 kr" },
                  { label: "Körkortskortet", val: "220 kr" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "6px 0", borderBottom: "1px solid #f0f0f0" }}>
                    <span style={{ color: "#555" }}>{row.label}</span>
                    <span style={{ fontWeight: "700", color: "#0d1f17" }}>{row.val}</span>
                  </div>
                ))}
                <p style={{ fontSize: "12px", color: "#888", marginTop: "10px", lineHeight: "1.5" }}>
                  *Förutsätter att du övningskör privat med handledare ca 50–80 timmar parallellt.
                </p>
              </div>
            </div>

            {/* Most expensive */}
            <div style={{ background: "white", border: "2px solid #dc2626", borderRadius: "18px", overflow: "hidden" }}>
              <div style={{ background: "#dc2626", padding: "16px 20px" }}>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px" }}>Dyraste alternativet</div>
                <div style={{ color: "white", fontSize: "20px", fontWeight: "900" }}>≈ 28 000–38 000 kr</div>
              </div>
              <div style={{ padding: "16px 20px" }}>
                {[
                  { label: "Körkortstillstånd", val: "220 kr" },
                  { label: "Teoribok (ny)", val: "500 kr" },
                  { label: "Teorikurs körskola", val: "1 500 kr" },
                  { label: "Risk 1", val: "600 kr" },
                  { label: "Teoriprov (2 försök)", val: "650 kr" },
                  { label: "Risk 2 (halkkörning)", val: "2 200 kr" },
                  { label: "30–40 körskolelektioner", val: "21 000–32 000 kr" },
                  { label: "Uppkörning (2 försök)", val: "2 200 kr" },
                  { label: "Körkortskortet", val: "220 kr" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "6px 0", borderBottom: "1px solid #f0f0f0" }}>
                    <span style={{ color: "#555" }}>{row.label}</span>
                    <span style={{ fontWeight: "700", color: "#0d1f17" }}>{row.val}</span>
                  </div>
                ))}
                <p style={{ fontSize: "12px", color: "#888", marginTop: "10px", lineHeight: "1.5" }}>
                  Ingen privat övningskörning. Underkänd på teoriprov och uppkörning en gång vardera.
                </p>
              </div>
            </div>
          </div>

          <div style={{ background: "#fffbeb", border: "2px solid #fde68a", borderRadius: "14px", padding: "18px 20px", marginTop: "16px" }}>
            <p style={{ fontSize: "15px", color: "#92400e", margin: 0, lineHeight: "1.65" }}>
              <strong>Den stora insikten:</strong> Körskolelektionerna är 80–90% av totalkostnaden. Varje extralektion kostar 700–900 kr. Privat övningskörning kostar i princip bara drivmedel. Vill du hålla ner kostnaden drastiskt — öva privat, och ta körskola framför allt för att förbättra tekniken och förbereda inför uppkörningen.
            </p>
          </div>
        </div>

        {/* Cost reduction tips */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "24px", letterSpacing: "-0.03em" }}>
            5 konkreta sätt att spara
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                saving: "Spara 5 000–15 000 kr",
                title: "Öva privat med handledare — satsa på 60–80 timmars övningskörning",
                text: "Det viktigaste sparsteget. Ju mer du kör privat, desto färre körskolelektioner behöver du. En handledarkurs kostar 200–400 kr och betalar sig efter första övningstillfället.",
              },
              {
                saving: "Spara 325–1 000 kr",
                title: "Klara teoriprovet på första försöket — träna rätt",
                text: "325 kr per nytt försök låter billigt, men det är inte pengar du behöver slösa. Tre veckor med strukturerad träning (Huvet eller liknande) ger dig en klar fördel. Sikta på 85%+ i simulerade prov innan du bokar.",
              },
              {
                saving: "Spara 500–1 500 kr",
                title: "Hoppa över teorikursen på körskola",
                text: "Körskolor erbjuder teorikurser för 500–2 000 kr. Du behöver inte dem. En bra teoribok + digital träning täcker exakt samma material och kostar en bråkdel.",
              },
              {
                saving: "Spara 200–300 kr",
                title: "Köp teoribok begagnad eller låna den",
                text: "Körkortsböcker säljs begagnade på Blocket för 100–200 kr. Reglerna i boken ändras inte dramatiskt år för år — en bok från 2024 fungerar till 90% lika bra som en 2026-upplaga.",
              },
              {
                saving: "Spara 1 100 kr",
                title: "Klara uppkörningen på första försöket — boka inte förrän du är redo",
                text: "Uppkörning kostar 1 100 kr per försök. Den som bokar för tidigt, misslyckas och bokar om har slösat 1 100 kr. Kör körskola och privat tills din körlärare säger att du är redo.",
              },
            ].map((tip, i) => (
              <div key={i} style={{ background: "white", borderRadius: "16px", padding: "22px", border: "2px solid #e2efe9" }}>
                <div style={{ display: "flex", gap: "14px", marginBottom: "10px", flexWrap: "wrap", alignItems: "flex-start" }}>
                  <span style={{ background: "#e6f4ee", color: "#006B3F", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "999px", whiteSpace: "nowrap" }}>{tip.saving}</span>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#0d1f17", flex: 1 }}>{tip.title}</div>
                </div>
                <p style={{ fontSize: "15px", color: "#555", margin: 0, lineHeight: "1.65" }}>{tip.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Package deals */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "8px", letterSpacing: "-0.03em" }}>
            Körskolepaket — vad du faktiskt betalar
          </h2>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "24px", lineHeight: "1.7" }}>
            Körskolor marknadsför paket aggressivt. Här är vad de faktiskt innehåller och vad du bör tänka på.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              {
                package: "Grundpaket",
                typical: "8 000–12 000 kr",
                includes: "Vanligtvis: 10–15 körlektioner, Risk 1, teorikurs. Inte: Risk 2, uppkörning, teoriprov.",
                warning: "De flesta behöver mer lektioner än vad grundpaketet inkluderar. Extrapriser tillkommer.",
              },
              {
                package: "Mellanpaket / Intensivpaket",
                typical: "15 000–20 000 kr",
                includes: "Vanligtvis: 20–25 körlektioner, Risk 1, Risk 2, teorikurs. Ibland: teoriprov ingår.",
                warning: "Rätt om du vill köra klart på 2–3 månader och inte har möjlighet till privat övningskörning.",
              },
              {
                package: "Allt-inklusivt / Garanti-paket",
                typical: "25 000–32 000 kr",
                includes: "Allt ovan plus obegränsade lektioner tills du klarar uppkörningen. Kan verka lockande.",
                warning: "Dyrast men ger trygghet. Räkna på om det är värt det baserat på hur snabbt du brukar lära dig.",
              },
            ].map((pkg) => (
              <div key={pkg.package} style={{ background: "#fafcfb", borderRadius: "14px", padding: "20px", border: "2px solid #e2efe9" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginBottom: "10px" }}>
                  <div style={{ fontSize: "17px", fontWeight: "800", color: "#0d1f17" }}>{pkg.package}</div>
                  <div style={{ fontSize: "17px", fontWeight: "900", color: "#006B3F" }}>{pkg.typical}</div>
                </div>
                <p style={{ fontSize: "14px", color: "#444", marginBottom: "10px", lineHeight: "1.6" }}><strong>Inkluderar:</strong> {pkg.includes}</p>
                <p style={{ fontSize: "14px", color: "#d97706", margin: 0, lineHeight: "1.55" }}>⚠️ {pkg.warning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Cost Calculator */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0d1f17', marginBottom: '0.5rem' }}>
            Räkna ut din kostnad
          </h2>
          <p style={{ color: '#5a6b62', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Anpassa efter ditt upplägg och se exakt vad körkortet kostar dig.
          </p>
          <CostCalculator />
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #006B3F 0%, #008a50 100%)", borderRadius: "24px", padding: "44px 36px", textAlign: "center" }}>
          <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: "900", color: "white", margin: "0 0 14px", letterSpacing: "-0.03em" }}>
            Klara teoriprovet på första försöket
          </h3>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", margin: "0 0 28px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto", lineHeight: "1.6" }}>
            Spara 325 kr och veckor av väntetid. Huvet tränar dig på exakt de ämnen du är svag på.
          </p>
          <Link href="/#demo" style={{ background: "white", color: "#006B3F", padding: "16px 36px", borderRadius: "999px", fontWeight: "800", fontSize: "16px", textDecoration: "none", display: "inline-block" }}>
            Testa gratis →
          </Link>
        </div>

        <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "2px solid #e2efe9" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#0d1f17", marginBottom: "16px" }}>Fler guider från Huvet</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { href: "/teoriprov", label: "📋 Körkortsteoriprov 2026" },
              { href: "/hur-lang-tid", label: "⏱️ Hur lång tid tar körkortet?" },
              { href: "/b-korkort", label: "🚗 B-körkort — guide" },
              { href: "/korkortstips", label: "📚 Körkortslips" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ background: "#f0f7f3", color: "#006B3F", padding: "8px 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "600", textDecoration: "none", border: "1px solid #c3ddd2" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </article>

      <footer style={{ background: "#081610", color: "rgba(255,255,255,0.4)", padding: "32px 20px", textAlign: "center", fontSize: "13px" }}>
        <p style={{ margin: "0 0 8px" }}>© 2026 Huvet (huvet.se). Alla rättigheter förbehållna.</p>
        <Link href="/" style={{ color: "#4ade96", textDecoration: "none" }}>← Tillbaka till startsidan</Link>
      </footer>
    </div>
  );
}
