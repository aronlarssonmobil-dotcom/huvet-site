# CLAUDE.md — Huvet (huvet.se)

## Vad är detta?
Huvet är en gratis körkorts-förberedelseplattform (Next.js) med 450+ teorifrågor, vägmärken, trafikregler och guider. Domän: huvet.se

## Kommandon
```bash
npm run dev      # Lokal dev-server (localhost:3000)
npm run build    # Produktionsbygge
npm run start    # Starta produktionsserver
```

## Design System

### Typsnitt
- **Headings:** Space Grotesk (700 weight) — alla h1, h2, logo, statistik
- **Body:** Inter (400-700) — brödtext, knappar, navigation

### Färger
| Roll | Hex | Användning |
|------|-----|------------|
| Primary Green | `#00C853` | CTA-knappar, accenter, badges |
| Green Light | `#00E676` | Hover-states, hero accent text |
| Green BG | `#E8F5E9` | Feature-checkmarks, review-avatarer |
| Dark | `#111` | Journey-sektion, CTA-banner bakgrund |
| Text | `#111` | Primär textfärg |
| Muted | `#888` / `#666` / `#777` | Sekundär text beroende på kontext |
| Border | `#f0f0f0` | Kort-borders |
| BG Light | `#fafafa` | Alternerade sektionsbakgrunder |
| Star Gold | `#FFC107` | Review-stjärnor |

### Layout-mönster
- **Hero:** Fullscreen (100vh) med bakgrundsbild, gradient overlay, centrerat innehåll
- **Sektioner:** Alternerar vit (#fff) och ljusgrå (#fafafa) bakgrund
- **Max-width:** 1100px för innehåll, 800px för journey/CTA
- **Border-radius:** 16px kort, 14px knappar, 24px CTA-banner
- **Spacing:** 5rem (80px) sektionspadding

### Komponenter
- **btn-hero:** Grön CTA-knapp med 14px radius, 700 weight
- **btn-ghost:** Transparent med vit border (hero only)
- **cat-card:** Kategori-kort med emoji-ikon, hover translateY(-4px)
- **review-card:** Recensionskort med stjärnor, citat, avatar

## Filstruktur
```
app/
  layout.tsx          # Root layout (Space Grotesk + Inter fonts, JSON-LD)
  page.tsx            # Startsida (hero, quiz, categories, journey, reviews, CTA)
  globals.css         # Minimal global resets
  teoriprov/          # Teoriprov-guide
  vagmarken/          # Vägmärken-guide
  trafikregler/       # Trafikregler
  hastighetsgranser/  # Hastighetsgränser
  korprov/            # Körprov-guide
  intensivkurs/       # Intensivkurs-guide
  korkort-kostnad/    # Kostnadsguide
  riskutbildning/     # Riskutbildning
  ovningskörning/     # Övningskörning
  korkortsfragor/     # Körkortsfrågor
  ovningsprov/        # Övningsprov
  mc/                 # MC-körkort
  moped/              # Mopedkörkort
  korkortstips/       # Korkortstips
  sitemap.ts          # Dynamisk sitemap
  robots.ts           # Robots.txt

components/
  QuizDemo.tsx        # Interaktivt quiz med 5 frågor (client component)
  SiteHeader.tsx      # Transparent nav overlay (client component)
  SiteFooter.tsx      # Footer med länkkolumner

public/
  hero.jpg            # Hero-bakgrundsbild
```

## SEO-strategi
1. **Varje sida = 1 sök-intent:** Dedikerade sidor för alla huvudtermer (teoriprov, vägmärken, etc.)
2. **Strukturerad data:** WebSite + EducationalOrganization JSON-LD i layout
3. **Sitemap:** Automatisk via app/sitemap.ts
4. **Interna länkar:** Footer och kategorisektion länkar till alla guider
5. **Content:** Varje guide-sida ska ha 1500+ ord, H1→H2→H3-hierarki, FAQ-sektion

### Mål-keywords
- körkortsfrågor, teoriprov, vägmärken, trafikregler, körprov
- hastighetsgränser, övningskörning, riskutbildning, intensivkurs körkort
- körkort kostnad, mc körkort, moped körkort

## Regler
1. **BEHÅLL QuizDemo** — Det är kärn-UX, rör inte komponenten utan gott skäl
2. **Alla routes måste finnas** — Lägg aldrig till nya utan att uppdatera sitemap
3. **Inga API-nycklar i repo** — Använd env-variabler
4. **Build-verify** — Kör alltid `npm run build` innan deploy
5. **Mobile first** — Alla nya sektioner måste fungera på 375px
6. **Prestanda** — Hero-bilden använder next/image med priority + fill

## Deploy
Hostas på Vercel. Deploy sker via CLI:
```bash
npm run build && vercel --yes --prod
```

## Git
Repo synkas med GitHub. Commita med beskrivande meddelanden.
