# CLAUDE.md — Huvet (huvet.se)

> Sveriges smartaste förberedelse för körkortsprovet.

---

## Design System

### Typografi
- **Rubriker:** Playfair Display (Google Fonts), weight 700–900
- **Body:** DM Sans, weight 400–700
- **CSS vars:** `--font-playfair`, `--font-dm-sans` (via next/font/google i layout.tsx)
- **ALDRIG:** Inter, Roboto, Arial eller generiska system-fonts för rubriker

### Färger
| Token | Hex | Användning |
|-------|-----|------------|
| `--green` | `#006B3F` | Primary, knappar, ikoner |
| `--green-dark` | `#004d2d` | Hover-states |
| `--green-xdark` | `#0d1f17` | Hero overlay, footer bg |
| `--green-light` | `#e6f4ee` | Badges, ljusa bakgrunder |
| `--green-bg` / `--card-bg` | `#f0f7f3` | Kort-bakgrunder, sektioner |
| `--yellow` | `#f5d020` | Accent, CTA-knappar, vägskylt-känsla |
| `--yellow-dark` | `#d4af00` | Hover för gula element |
| `--text` | `#0d1f17` | Huvudtext |
| `--muted` | `#5a6b62` | Sekundär text |
| `--border` | `#dceee5` | Kortkanter |

### Design-principer
1. **Gamification-känsla** — Progress bars, achievement-badges, road-timeline
2. **Playful & energisk** — Inte premium/lugn — detta är en quiz-app
3. **Vägskylt-tema** — Octagon-ikoner, speed-limit shapes, road-dashes
4. **hover: translateY(-4px) + shadow** — Alla interaktiva kort
5. **border-radius: 14-20px** — Mjuka, vänliga hörn
6. **Responsive first** — Fungerar på mobil utan exception
7. **Ingen parallax** — Enkel scrollning

### Animationer
- `fadeSlideUp` — Hero-element fadear in med stagger (0.1s-0.5s delay)
- Road-line animation — Gula streck scrollar i hero-botten
- Hover-lift — `translateY(-4px)` med box-shadow på alla kort

---

## Filstruktur

```
├── app/
│   ├── layout.tsx          ← Root layout (Playfair + DM Sans fonts, JSON-LD)
│   ├── page.tsx            ← Startsida (Hero, Stats, Quiz, Categories, Journey, Guides, CTA)
│   ├── globals.css         ← Minimal global resets
│   ├── robots.ts           ← SEO robots
│   ├── sitemap.ts          ← SEO sitemap
│   ├── teoriprov/page.tsx  ← SEO-sida
│   ├── korprov/page.tsx    ← SEO-sida
│   ├── vagmarken/page.tsx  ← SEO-sida
│   ├── trafikregler/page.tsx
│   ├── hastighetsgranser/page.tsx
│   ├── riskutbildning/page.tsx
│   ├── ovningskörning/page.tsx
│   ├── korkort-kostnad/page.tsx
│   ├── korkortsfragor/page.tsx
│   ├── korkortstips/page.tsx
│   ├── ovningsprov/page.tsx
│   ├── intensivkurs/page.tsx
│   ├── mc/page.tsx
│   └── moped/page.tsx
├── components/
│   ├── QuizDemo.tsx        ← Interaktiv quiz (client component)
│   ├── SiteHeader.tsx      ← Global header med mobilmeny
│   └── SiteFooter.tsx      ← 4-kolumn footer
├── public/
│   └── hero.jpg            ← Hero-bakgrundsbild (Volvo, svensk landsväg)
├── CLAUDE.md               ← Denna fil
├── package.json
├── tsconfig.json
└── vercel.json
```

---

## Kommandon

```bash
# Utveckling
npm run dev

# Bygg
npm run build

# Deploy till Vercel (prod)
cd /Users/a.l3629/.openclaw/workspace/projects/korkort/trafik && npm run build && vercel --token $VERCEL_TOKEN --yes --prod

# Sync till Desktop
rsync -a --exclude='.next' --exclude='node_modules' /Users/a.l3629/.openclaw/workspace/projects/korkort/trafik/ ~/Desktop/Trafik/

# Git commit & push
cd /Users/a.l3629/.openclaw/workspace/projects/korkort/trafik && git add -A && git commit -m "message" && git push
```

---

## SEO-strategi

### Målsökord (per sida)
| Sida | Primärt sökord | Sekundära |
|------|---------------|-----------|
| `/` | körkortsprov, teoriprov | körkort 2026, körkortsfrågor |
| `/teoriprov` | teoriprov | teoriprov övning, teoriprovet |
| `/korprov` | körprov | körprov tips, uppkörning |
| `/vagmarken` | vägmärken | vägmärken körkort, trafikskyltar |
| `/trafikregler` | trafikregler | trafikregler körkort |
| `/hastighetsgranser` | hastighetsgränser | hastighetsgräns motorväg |
| `/riskutbildning` | riskutbildning | riskettan, risk 1, risk 2 |
| `/ovningskörning` | övningskörning | övningskörning regler |
| `/korkort-kostnad` | körkort kostnad | körkort pris, vad kostar körkort |
| `/korkortsfragor` | körkortsfrågor | körkortsfrågor gratis |
| `/intensivkurs` | intensivkurs körkort | snabb körkort |
| `/mc` | mc körkort | mc-körkort pris |
| `/moped` | mopedkörkort | AM-körkort |

### SEO-principer
1. **H1** — Varje sida har exakt en H1 med primärt sökord
2. **Meta description** — Unik per sida, inkluderar sökord + CTA
3. **Intern länkning** — Alla sidor länkas från footer + relevanta sektioner
4. **JSON-LD** — WebSite + EducationalOrganization i layout.tsx
5. **Sitemap** — Auto-genererad via sitemap.ts
6. **Robots** — Standard i robots.ts
7. **Bildoptimering** — next/image med priority på hero

---

## Regler

1. **BEHÅLL alla befintliga routes** — Inga sidoändringar utan explicit order
2. **QuizDemo-komponenten** — Kan stylas om men behåll funktionalitet
3. **SiteHeader + SiteFooter** — Ska användas på alla sidor konsekvent
4. **Inga externa beroenden utan approval** — Håll det lean
5. **Ingen parallax** — Aldrig
6. **Testa på mobil** — Varje ändring ska fungera på 375px+
7. **Deploy via Vercel** — Alltid med `--prod` flagga
8. **Sync till Desktop** — Efter varje deploy
