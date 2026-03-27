import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hur lång tid tar det att ta körkort? Realistisk guide 2026 | Huvet",
  description:
    "Teorin tar 40–60 timmars studier, körkortet totalt 4–18 månader. Veckoschemat som funkar, när du ska boka provet, och hur du skippar tid du inte behöver.",
  keywords: [
    "hur lång tid ta körkort",
    "körkort tid 2026",
    "hur länge tar körkort",
    "teori hur länge",
    "körkort snabbaste vägen",
  ],
  openGraph: {
    title: "Hur lång tid tar det att ta körkort? Realistisk guide 2026",
    description: "40–60 timmars teori, 4–18 månaders process. Konkret veckoschema, vad som tar längst tid och när du ska boka.",
    locale: "sv_SE",
    type: "article",
  },
  alternates: { canonical: "https://huvet.se/hur-lang-tid" },
};

const weekSchedules = [
  {
    title: "Intensivt (klara teorin på 2 veckor)",
    hours: "45–60 min/dag",
    totalWeeks: "2 veckor",
    color: "#dc2626",
    suitedFor: "Du som vill bli klar snabbt och kan prioritera det på kort tid.",
    schedule: [
      { day: "Mån–Fre", time: "45–60 min", task: "Strukturerad träning: 1 ämnesblock per dag + 30 provfrågor" },
      { day: "Lördag", time: "90 min", task: "Simulerat prov (65 frågor, tidsbegränsat) + genomgång av fel" },
      { day: "Söndag", time: "30 min", task: "Repetition av veckans svaga punkter" },
    ],
    note: "Realistiskt för de flesta vuxna som kan fokusera. Funkar sämre om du är stressad eller trött.",
  },
  {
    title: "Lagom takt (klara teorin på 3–4 veckor)",
    hours: "30 min/dag",
    totalWeeks: "3–4 veckor",
    color: "#d97706",
    suitedFor: "Du som studerar, jobbar eller har annat på gång. Fungerar för de allra flesta.",
    schedule: [
      { day: "Mån, Ons, Fre", time: "30–40 min", task: "Fokusträning: ett ämne per tillfälle, 20–25 provfrågor" },
      { day: "Tisdag, Torsdag", time: "20 min", task: "Snabb repetition av förra passets ämne" },
      { day: "Helgen", time: "60 min", task: "Simulerat prov lördag + genomgång av svar söndag" },
    ],
    note: "Den klart vanligaste vägen. Ger hjärnan tid att konsolidera kunskap mellan passen.",
  },
  {
    title: "Lugn takt (klara teorin på 6–8 veckor)",
    hours: "20 min/dag",
    totalWeeks: "6–8 veckor",
    color: "#006B3F",
    suitedFor: "Du som vill ta det lugnt, kanske kombinerar med tidig övningskörning parallellt.",
    schedule: [
      { day: "Mån, Ons, Fre", time: "20–25 min", task: "Träning på ett ämne, 10–15 provfrågor" },
      { day: "Helgen", time: "45 min", task: "Repetition + delvis simulerat prov (30 frågor)" },
    ],
    note: "Fungerar, men risken är att du tappar motivation. Boka provet i förväg för att sätta ett deadline.",
  },
];

export default function HurLangTidPage() {
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
            Realistisk guide
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: "900", lineHeight: "1.05", color: "#0d1f17", margin: "0 0 24px", letterSpacing: "-0.04em" }}>
            Hur lång tid tar det<br />
            <span style={{ color: "#006B3F" }}>att ta körkort?</span>
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.75", color: "#555", maxWidth: "640px", margin: "0 0 32px" }}>
            Det ärliga svaret: teorin tar <strong>40–60 timmars</strong> aktiv inläsning. Hela körkortsprocessen tar <strong>4–18 månader</strong> beroende på väntetider och hur hårt du kör. Här är den konkreta planen.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { label: "Teori: 40–60 timmar", icon: "📖" },
              { label: "Körning: 30–80 timmar praktik", icon: "🚗" },
              { label: "Väntetider: 4–10 veckor", icon: "⏳" },
              { label: "Totalt: 4–18 månader", icon: "📅" },
            ].map((c) => (
              <div key={c.label} style={{ background: "white", border: "2px solid #c3ddd2", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", fontWeight: "700", display: "flex", gap: "6px", alignItems: "center" }}>
                <span>{c.icon}</span><span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "52px 20px 100px" }}>

        {/* The honest breakdown */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "8px", letterSpacing: "-0.03em" }}>
            Den ärliga uppdelningen
          </h2>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "28px", lineHeight: "1.7" }}>
            Körkortsprocessen har tre separata delar med helt olika tidsprofiler. Förstå skillnaden — det hjälper dig planera bättre.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
            {[
              {
                phase: "📖 Teoridelen",
                time: "2–8 veckor studier + 1–3 veckors väntetid för bokad provtid",
                bar: 30,
                color: "#006B3F",
                body: "Teori handlar om aktiv studietid. Du behöver ca 40–60 timmars faktisk inläsning och träning för att vara redo. Det motsvarar 30 min/dag i 8 veckor, eller 60 min/dag i 4 veckor. Plus 1–3 veckors väntetid på en ledig provtid.",
                key: "Du styr den här delen helt själv. Planera och boka provet i förväg — det sätter ett motiverande deadline.",
              },
              {
                phase: "🚗 Kördelen",
                time: "3–12 månader praktisk körträning",
                bar: 70,
                color: "#d97706",
                body: "Det finns inga lagkrav på ett minsta antal körtimmar för B-körkort. De flesta behöver 30–80 timmars praktisk körning beroende på talang och hur man kör. Körskola + privat övningskörning kombinerat ger snabbast progress.",
                key: "Den här delen tar lång tid inte för att det är svårt, utan för att du inte kan komprimera körupplevelse — du behöver tid i bilen.",
              },
              {
                phase: "⏳ Väntetider",
                time: "Totalt 4–10 veckor inbyggd väntetid",
                bar: 50,
                color: "#7c3aed",
                body: "Körkortstillstånd: 1–3 veckor. Teoriprov: 1–3 veckor. Risk 2 (halkkörning): 2–6 veckor (boksbrist på många orter). Uppkörning: 4–8 veckor i Stockholm/Göteborg/Malmö, 1–2 veckor på mindre orter.",
                key: "Boka Risk 2 och uppkörning TIDIGT — det är dessa som drar iväg processen oväntat mycket.",
              },
            ].map((item) => (
              <div key={item.phase} style={{ background: "white", borderRadius: "18px", border: "2px solid #e2efe9", overflow: "hidden" }}>
                <div style={{ padding: "22px 24px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginBottom: "12px" }}>
                    <div style={{ fontSize: "18px", fontWeight: "800", color: "#0d1f17" }}>{item.phase}</div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: item.color, background: item.color + "15", padding: "4px 12px", borderRadius: "999px" }}>{item.time}</div>
                  </div>
                  <div style={{ background: "#f0f0f0", borderRadius: "999px", height: "6px", marginBottom: "16px" }}>
                    <div style={{ width: `${item.bar}%`, height: "100%", background: item.color, borderRadius: "999px" }} />
                  </div>
                  <p style={{ fontSize: "15px", color: "#444", margin: "0 0 12px", lineHeight: "1.7" }}>{item.body}</p>
                </div>
                <div style={{ background: "#f0f7f3", padding: "12px 24px", borderTop: "1px solid #e2efe9", display: "flex", gap: "8px" }}>
                  <span style={{ color: "#006B3F", fontWeight: "900" }}>→</span>
                  <p style={{ fontSize: "14px", color: "#004d2d", margin: 0, lineHeight: "1.55", fontWeight: "600" }}>{item.key}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Theory study hours */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "8px", letterSpacing: "-0.03em" }}>
            Teori: 40–60 timmar — vad ingår?
          </h2>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "24px", lineHeight: "1.7" }}>
            "40–60 timmar" låter mycket men det är <strong>aktiv studietid</strong>, inte kalendertid. Här är en realistisk fördelning av vad de timmarna bör innehålla.
          </p>

          <div style={{ border: "2px solid #e2efe9", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            {[
              { activity: "Läsa teoriboken / grundgenomgång", hours: "10–15 h", notes: "Aktivt läsande, inte passiv skanning. Skriv anteckningar." },
              { activity: "Övningsfrågor med förklaring", hours: "20–25 h", notes: "Kärnan i träningen. Träna på frågor du svarar FEL på." },
              { activity: "Simulerade prov (tidsbegränsade)", hours: "5–8 h", notes: "Minst 5 fulla prov (65 frågor, 50 min) innan du bokar." },
              { activity: "Djupgranskning av svaga ämnen", hours: "5–10 h", notes: "Räkna med att spendera extra tid på 2–3 specifika ämnen." },
              { activity: "Repetition dagarna innan provet", hours: "2–3 h", notes: "Lätt repetition — ingen intensiv plugg. Sov ordentligt." },
            ].map((row, i) => (
              <div key={row.activity} style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "16px",
                padding: "16px 20px",
                borderBottom: i < 4 ? "1px solid #f0f0f0" : "none",
                background: i % 2 === 0 ? "white" : "#fafcfb",
                alignItems: "start",
              }}>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: "700", color: "#0d1f17", marginBottom: "3px" }}>{row.activity}</div>
                  <div style={{ fontSize: "13px", color: "#888" }}>{row.notes}</div>
                </div>
                <div style={{ fontSize: "15px", fontWeight: "900", color: "#006B3F", whiteSpace: "nowrap" }}>{row.hours}</div>
              </div>
            ))}
            <div style={{ background: "#f0f7f3", padding: "14px 20px", display: "flex", justifyContent: "space-between", borderTop: "2px solid #c3ddd2" }}>
              <span style={{ fontWeight: "800", color: "#0d1f17", fontSize: "15px" }}>Totalt aktiv studietid</span>
              <span style={{ fontWeight: "900", color: "#006B3F", fontSize: "17px" }}>42–61 timmar</span>
            </div>
          </div>

          <div style={{ background: "#fef3c7", border: "2px solid #fcd34d", borderRadius: "14px", padding: "18px 20px" }}>
            <p style={{ fontSize: "15px", color: "#92400e", margin: 0, lineHeight: "1.65" }}>
              <strong>Viktigt:</strong> Det spelar ingen roll hur många timmar du lägger in om du pluggar fel. Den vanligaste fällan är att läsa boken passivt och sen chockas av att proven är svåra. Provfrågor och simulerade prov är inte "testning" — det är träning.
            </p>
          </div>
        </div>

        {/* Weekly schedules */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "8px", letterSpacing: "-0.03em" }}>
            Tre veckoschemat — välj din takt
          </h2>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "28px", lineHeight: "1.7" }}>
            Alla tre scheman fungerar. Valet beror på hur snabbt du vill bli klar och hur mycket tid du kan avsätta.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {weekSchedules.map((sched) => (
              <div key={sched.title} style={{ border: `2px solid ${sched.color}40`, borderRadius: "18px", overflow: "hidden" }}>
                <div style={{ background: sched.color, padding: "18px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
                    <div>
                      <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px" }}>Alternativ</div>
                      <div style={{ color: "white", fontSize: "19px", fontWeight: "800" }}>{sched.title}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: "600" }}>Tid per dag</div>
                      <div style={{ color: "white", fontSize: "16px", fontWeight: "800" }}>{sched.hours}</div>
                    </div>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", margin: "10px 0 0", lineHeight: "1.5" }}>
                    Passar: {sched.suitedFor}
                  </p>
                </div>
                <div style={{ background: "white", padding: "8px 0" }}>
                  {sched.schedule.map((s, i) => (
                    <div key={s.day} style={{ display: "flex", gap: "16px", padding: "12px 24px", borderBottom: i < sched.schedule.length - 1 ? "1px solid #f5f5f5" : "none" }}>
                      <div style={{ fontSize: "13px", fontWeight: "700", color: sched.color, flexShrink: 0, minWidth: "140px" }}>
                        {s.day} <span style={{ color: "#aaa", fontWeight: "600" }}>({s.time})</span>
                      </div>
                      <div style={{ fontSize: "14px", color: "#444", lineHeight: "1.55" }}>{s.task}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#fafcfb", padding: "12px 24px", borderTop: "1px solid #e2efe9" }}>
                  <p style={{ fontSize: "13px", color: "#666", margin: 0, lineHeight: "1.55", fontStyle: "italic" }}>
                    📌 {sched.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* When to book */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "8px", letterSpacing: "-0.03em" }}>
            När ska du boka teoriprovet?
          </h2>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "24px", lineHeight: "1.7" }}>
            Det finns ett tydligt rätt svar och ett vanligt fel svar på den frågan.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
            <div style={{ background: "#fef2f2", border: "2px solid #fecaca", borderRadius: "16px", padding: "20px" }}>
              <div style={{ fontSize: "14px", fontWeight: "800", color: "#dc2626", marginBottom: "10px" }}>❌ Vanligt misstag</div>
              <p style={{ fontSize: "14px", color: "#444", margin: 0, lineHeight: "1.65" }}>
                Boka provet direkt, "för att ha en deadline att plugga mot" — och sen bokade om 2 gånger för att man inte var redo. Kostnad: 975 kr extra + 3 månaders försenad process.
              </p>
            </div>
            <div style={{ background: "#f0f7f3", border: "2px solid #86efac", borderRadius: "16px", padding: "20px" }}>
              <div style={{ fontSize: "14px", fontWeight: "800", color: "#006B3F", marginBottom: "10px" }}>✓ Rätt strategi</div>
              <p style={{ fontSize: "14px", color: "#444", margin: 0, lineHeight: "1.65" }}>
                Boka provet 3–4 veckor in i studieperioden. Nära nog för motivation, tillräckligt långt bort för att hinna bli redo. Avboka gratis om du behöver mer tid.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ fontWeight: "800", fontSize: "16px", color: "#0d1f17", marginBottom: "4px" }}>Boka provet när du kan klara dessa tre:</div>
            {[
              "Du kan konsekvent svara rätt på 85%+ i simulerade prov (minst 3 prov i rad).",
              "Du har gått igenom ALLA ämnesområden — inte hoppa över \"tråkiga\" delar.",
              "Du förstår vägmärken och väjningsregler utan att behöva tänka länge.",
            ].map((crit, i) => (
              <div key={i} style={{ background: "#f0f7f3", borderRadius: "12px", padding: "14px 18px", border: "1px solid #c3ddd2", display: "flex", gap: "12px" }}>
                <span style={{ color: "#006B3F", fontWeight: "900", flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: "15px", color: "#333", margin: 0, lineHeight: "1.6" }}>{crit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fastest possible route */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "900", color: "#0d1f17", marginBottom: "8px", letterSpacing: "-0.03em" }}>
            Snabbaste möjliga vägen — 4 månader
          </h2>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "24px", lineHeight: "1.7" }}>
            Om du vill ta körkortet så snabbt som möjligt — här är planen. Observera att väntetider kan variera på din ort och faktiskt styra minimet.
          </p>

          <div style={{ border: "2px solid #e2efe9", borderRadius: "18px", overflow: "hidden", marginBottom: "20px" }}>
            {[
              { month: "Månad 1", milestone: "Ansök om körkortstillstånd dag 1. Börja studera teori samma dag. Boka teoriprov 3 veckor in. Boka Risk 2 (halkkörning) direkt — lång väntetid." },
              { month: "Månad 2", milestone: "Klara teoriprov. Starta körskola parallellt med privat övningskörning. Genomför Risk 1 (halv dag, enkelt att boka). Öva körning hårt — 3–4 gånger i veckan." },
              { month: "Månad 3", milestone: "Genomför Risk 2 (halkkörning) om den nu är tillgänglig. Fortsätt intensiv körträning. Boka uppkörning när körläraren anser dig redo." },
              { month: "Månad 4", milestone: "Genomför uppkörningen. Godkänd — körkortskortet skickas inom 2 veckor." },
            ].map((step, i) => (
              <div key={step.month} style={{
                display: "flex",
                gap: "0",
                borderBottom: i < 3 ? "1px solid #f0f0f0" : "none",
              }}>
                <div style={{ background: "#006B3F", color: "white", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "90px", flexShrink: 0 }}>
                  <span style={{ fontSize: "13px", fontWeight: "800", textAlign: "center" }}>{step.month}</span>
                </div>
                <div style={{ padding: "18px 20px", flex: 1 }}>
                  <p style={{ fontSize: "14px", color: "#333", margin: 0, lineHeight: "1.65" }}>{step.milestone}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "#0d1f17", borderRadius: "14px", padding: "20px 24px" }}>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: "1.7" }}>
              <strong style={{ color: "#4ade96" }}>Reality check:</strong> 4 månader är möjligt men kräver att du börjar boka väntelisteintensiva moment (Risk 2, uppkörning) direkt från dag 1, och att du kör minst 3–4 gånger i veckan. De flesta tar 6–12 månader — det är hälsosamt.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #006B3F 0%, #008a50 100%)", borderRadius: "24px", padding: "44px 36px", textAlign: "center" }}>
          <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: "900", color: "white", margin: "0 0 14px", letterSpacing: "-0.03em" }}>
            Börja räkna ner nu
          </h3>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", margin: "0 0 28px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto", lineHeight: "1.6" }}>
            Gör ett snabbtest och se exakt vilka ämnen du behöver fokusera på. 5 frågor, direkt.
          </p>
          <Link href="/#demo" style={{ background: "white", color: "#006B3F", padding: "16px 36px", borderRadius: "999px", fontWeight: "800", fontSize: "16px", textDecoration: "none", display: "inline-block" }}>
            Starta diagnosen →
          </Link>
        </div>

        <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "2px solid #e2efe9" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#0d1f17", marginBottom: "16px" }}>Fler guider från Huvet</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { href: "/teoriprov", label: "📋 Körkortsteoriprov 2026" },
              { href: "/kostnad", label: "💰 Vad kostar körkortet?" },
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
