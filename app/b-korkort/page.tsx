import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B-körkort personbil — komplett guide 2026 | Huvet",
  description:
    "Allt om B-körkort för personbil 2026. Krav, process, kostnad, teoriprov, uppkörning och tips för att ta körkortet snabbt och billigt.",
  keywords: [
    "B-körkort",
    "körkort personbil",
    "B-körkort guide",
    "ta körkort 2026",
    "körkort krav",
    "körkort process",
  ],
  openGraph: {
    title: "B-körkort personbil — komplett guide 2026",
    description: "Komplett guide till B-körkort: krav, process, kostnad och tips.",
    locale: "sv_SE",
    type: "article",
  },
  alternates: { canonical: "https://huvet.se/b-korkort" },
};

export default function BKorkortPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#fff", color: "#0d1f17", minHeight: "100vh" }}>
      <header style={{ background: "rgba(255,255,255,0.96)", borderBottom: "1px solid #e2efe9", padding: "0 20px" }}>
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

      <section style={{ background: "linear-gradient(160deg, #f0f7f3 0%, #fff 60%)", padding: "60px 20px 48px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#e6f4ee", color: "#006B3F", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.16em", padding: "6px 16px", borderRadius: "999px", marginBottom: "24px" }}>
            Körkortsguide 2026
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: "900", lineHeight: "1.1", color: "#0d1f17", margin: "0 0 20px", letterSpacing: "-0.04em" }}>
            B-körkort personbil —<br />komplett guide 2026
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#555", maxWidth: "620px", margin: 0 }}>
            B-körkort är det vanligaste körkortet i Sverige och ger dig rätten att köra personbil och lätta lastbilar. Här är allt du behöver veta om processen, kraven och hur du tar det så smidigt som möjligt.
          </p>
        </div>
      </section>

      <article style={{ maxWidth: "780px", margin: "0 auto", padding: "48px 20px 80px" }}>

        {/* Quick facts */}
        <div style={{ background: "#f0f7f3", borderRadius: "20px", padding: "28px", marginBottom: "48px", border: "2px solid #c3ddd2" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "800", color: "#0d1f17", marginBottom: "16px" }}>🚗 B-körkort snabbfakta</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px" }}>
            {[
              { label: "Lägsta ålder", value: "18 år" },
              { label: "Övningsköra från", value: "16 år" },
              { label: "Giltigt i EU/EEA", value: "Ja" },
              { label: "Max totalvikt", value: "3 500 kg" },
              { label: "Max passagerare", value: "8 + förare" },
              { label: "Teoriprov krävs", value: "Ja (65 frågor)" },
              { label: "Uppkörning krävs", value: "Ja (45 min)" },
              { label: "Riskutbildning", value: "Del 1 + Del 2" },
            ].map((item) => (
              <div key={item.label} style={{ background: "white", borderRadius: "12px", padding: "14px 16px", border: "1px solid #e2efe9" }}>
                <div style={{ fontSize: "12px", color: "#888", fontWeight: "600", marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#0d1f17" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "16px", letterSpacing: "-0.02em" }}>
          Vad är B-körkort?
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "20px" }}>
          B-körkort (körkortsbehörighet B) är den vanligaste körkortskategorin i Sverige och i hela EU. Det ger dig rätten att köra personbil och lätta fordon med en totalvikt upp till 3 500 kg och med plats för max 8 passagerare utöver föraren.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "32px" }}>
          Med ett B-körkort kan du också dra en lätt släpvagn (upp till 750 kg totalvikt) utan att ha ett separat BE-körkort. För tyngre släpvagnar behöver du utökat behörighet (BE).
        </p>

        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "16px", letterSpacing: "-0.02em" }}>
          Krav för att ta B-körkort
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
          {[
            { icon: "🎂", title: "Ålderskrav", text: "Du måste vara minst 18 år för att genomföra uppkörningen och få körkort. Privat övningskörning kan påbörjas från 16 år med godkänd handledare." },
            { icon: "👁️", title: "Synkrav", text: "Du måste ha tillräcklig syn — antingen med eller utan glasögon/linser. Syntest genomförs hos optiker eller läkare och bekräftas i körkortsansökan." },
            { icon: "🏥", title: "Hälsokrav", text: "Vissa medicinska tillstånd (epilepsi, diabetes, hjärtsjukdomar) kan kräva läkarintyg. Kontakta Transportstyrelsen om du är osäker." },
            { icon: "📋", title: "Körkortstillstånd", text: "Du måste ha ett giltigt körkortstillstånd (KKT) utfärdat av Transportstyrelsen. Det söks online och tar 1–3 veckor att få." },
            { icon: "📚", title: "Utbildningskrav", text: "Obligatorisk riskutbildning del 1 (trafiksäkerhet) och del 2 (halkkörning) måste vara genomförda innan uppkörningen." },
          ].map((req) => (
            <div key={req.icon} style={{ background: "#fafcfb", borderRadius: "16px", padding: "20px", border: "2px solid #e2efe9", display: "flex", gap: "16px" }}>
              <span style={{ fontSize: "24px", flexShrink: 0 }}>{req.icon}</span>
              <div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#0d1f17", marginBottom: "6px" }}>{req.title}</div>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6", margin: 0 }}>{req.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "16px", letterSpacing: "-0.02em" }}>
          Processen steg för steg
        </h2>
        <ol style={{ paddingLeft: "24px", marginBottom: "32px" }}>
          {[
            "Ansök om körkortstillstånd hos Transportstyrelsen (online, 220 kr).",
            "Gör synundersökning (om du inte redan har det i ansökan).",
            "Påbörja teoristudier — använd Huvet för anpassad träning.",
            "Genomgå riskutbildning del 1 (halv dag, via körskola).",
            "Boka och klara körkortsteoriprov hos Trafikverket (325 kr).",
            "Öva körning — privat med handledare och/eller via körskola.",
            "Genomgå riskutbildning del 2 — halkkörning (hel dag).",
            "Boka uppkörning hos Trafikverket (1 095 kr).",
            "Klara uppkörningen — körkortskortet skickas inom 1–2 veckor.",
          ].map((step, i) => (
            <li key={i} style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "10px" }}>
              {step}
            </li>
          ))}
        </ol>

        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "16px", letterSpacing: "-0.02em" }}>
          Teoriprovet för B-körkort
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "20px" }}>
          Körkortsteoriprov för B-körkort består av 65 frågor och du behöver svara rätt på minst 52 (80%) för att bli godkänd. Provet täcker hela trafikkunskapen inklusive väjningsregler, vägmärken, parkeringsregler, alkohol, hastighet, motorväg, och körning i svåra förhållanden.
        </p>
        <div style={{ background: "#e6f4ee", borderRadius: "16px", padding: "20px", marginBottom: "32px", borderLeft: "4px solid #006B3F" }}>
          <p style={{ fontSize: "15px", color: "#004d2d", margin: 0, lineHeight: "1.6" }}>
            <strong>💡 Huvet-tips:</strong> Gör ett diagnostiktest direkt och identifiera dina svaga ämnen. De flesta elever missar framförallt väjningsregler i korsningar, parkeringsregler och hastighetsregler. Fokusera träningen dit.
          </p>
        </div>

        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "16px", letterSpacing: "-0.02em" }}>
          Vad kostar B-körkortet totalt?
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "16px" }}>
          Kostnaden för B-körkortet varierar kraftigt beroende på hur du väljer att utbilda dig:
        </p>
        <div style={{ border: "2px solid #e2efe9", borderRadius: "16px", overflow: "hidden", marginBottom: "32px" }}>
          {[
            { label: "Bara körskola", range: "25 000 – 35 000 kr" },
            { label: "Blandad (privat + körskola)", range: "15 000 – 22 000 kr" },
            { label: "Mest privat övningskörning", range: "8 000 – 15 000 kr" },
          ].map((row, i) => (
            <div key={row.label} style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: i < 2 ? "1px solid #f0f0f0" : "none",
              background: i % 2 === 0 ? "white" : "#fafcfb",
            }}>
              <span style={{ fontSize: "15px", fontWeight: "600", color: "#0d1f17" }}>{row.label}</span>
              <span style={{ fontSize: "15px", fontWeight: "800", color: "#006B3F" }}>{row.range}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "15px", color: "#666", marginBottom: "40px", lineHeight: "1.7" }}>
          Se vår fullständiga guide om <Link href="/kostnad" style={{ color: "#006B3F", fontWeight: "700" }}>körkortets kostnad 2026</Link> för en detaljerad uppdelning av alla kostnader.
        </p>

        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "16px", letterSpacing: "-0.02em" }}>
          Hur lång tid tar det att ta B-körkort?
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "20px" }}>
          Den genomsnittliga tiden från start till färdigt B-körkort är 6–12 månader. Den som tränar intensivt och planerar bra kan klara det på 3–4 månader. Den som tar det i sin takt och har lång väntetid på uppkörning kan ta upp till 18–24 månader.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "40px" }}>
          Läs mer i vår guide om <Link href="/hur-lang-tid" style={{ color: "#006B3F", fontWeight: "700" }}>hur lång tid det tar att ta körkort</Link>.
        </p>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #006B3F, #008a50)", borderRadius: "24px", padding: "40px 32px", textAlign: "center", marginBottom: "48px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: "900", color: "white", marginBottom: "12px" }}>
            Klara teoriprovet på första försöket
          </h3>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", marginBottom: "24px" }}>
            Huvet tränar dig på dina svaga ämnen med riktiga frågor ur Transportstyrelsens frågebank.
          </p>
          <Link href="/#demo" style={{ background: "white", color: "#006B3F", padding: "16px 32px", borderRadius: "999px", fontWeight: "800", fontSize: "16px", textDecoration: "none", display: "inline-block" }}>
            Testa gratis →
          </Link>
        </div>

        <div style={{ paddingTop: "32px", borderTop: "2px solid #e2efe9" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#0d1f17", marginBottom: "16px" }}>Relaterade guider</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { href: "/teoriprov", label: "📋 Körkortsteoriprov 2026" },
              { href: "/kostnad", label: "💰 Vad kostar körkortet?" },
              { href: "/hur-lang-tid", label: "⏱️ Hur lång tid tar körkortet?" },
              { href: "/mc", label: "🏍️ MC-körkort" },
              { href: "/moped", label: "🛵 Mopedkörkort" },
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
