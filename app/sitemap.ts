import type { MetadataRoute } from 'next';
import { signs, categories } from '@/lib/signs-data';

const siteUrl = 'https://huvet.se';

function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const signPages: MetadataRoute.Sitemap = signs
    .filter(s => s.hasIndividualPage)
    .map(s => ({
      url: absoluteUrl(`/vagmarken/${s.slug}`),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  const categoryPages: MetadataRoute.Sitemap = categories.map(c => ({
    url: absoluteUrl(`/vagmarken/${c.slug}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
    ...categoryPages,
    ...signPages,
    { url: absoluteUrl('/'), lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: absoluteUrl('/teoriprov'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: absoluteUrl('/korprov'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: absoluteUrl('/ovningsprov'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: absoluteUrl('/korkort-kostnad'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.92 },
    { url: absoluteUrl('/trafikregler'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.92 },
    { url: absoluteUrl('/intensivkurs'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.92 },
    { url: absoluteUrl('/korkortstips'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/korkortsfragor'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/ovningskörning'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/riskutbildning'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/hastighetsgranser'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/teoriprov-tips'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/uppkorning-tips'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/vagmarken'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    // Guide pages
    { url: absoluteUrl('/vagmarken-guide'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    { url: absoluteUrl('/trafikregler-guide'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    { url: absoluteUrl('/hastighetsgranser-guide'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    { url: absoluteUrl('/ovningsprov-guide'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    { url: absoluteUrl('/korkort-kostnad-guide'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    // Riskutbildning
    { url: absoluteUrl('/riskettan'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.87 },
    { url: absoluteUrl('/risktvaan'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.87 },
    { url: absoluteUrl('/halkkörning'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.87 },
    // Körkortskategorier
    { url: absoluteUrl('/b-korkort'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    { url: absoluteUrl('/mc'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/moped'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/korkort-c'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/automatiskt-korkort'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.82 },
    // Praktiska guider
    { url: absoluteUrl('/steg-for-steg'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/boka-teoriprov'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    { url: absoluteUrl('/boka-uppkorning'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    { url: absoluteUrl('/korkortstillstand'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    { url: absoluteUrl('/handledarkurs'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/privatist'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/hur-lang-tid'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/korkort-alder'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/kostnad'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    // Nisch-sidor
    { url: absoluteUrl('/digitalt-korkort'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.82 },
    { url: absoluteUrl('/fornya-korkort'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.82 },
    { url: absoluteUrl('/utlandskt-korkort'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.82 },
    { url: absoluteUrl('/nya-regler-2026'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/gora-om-teoriprovet'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.82 },
    { url: absoluteUrl('/nervos-uppkorning'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.82 },
    { url: absoluteUrl('/vanliga-fel-korprov'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/rattfylleri'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/parkering'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/priser'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/om-oss'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    // Extra discovered pages
    { url: absoluteUrl('/hogersregeln'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.82 },
    { url: absoluteUrl('/stopplikt-vs-vajningsplikt'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.82 },
    { url: absoluteUrl('/syntest-korkort'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.82 },
    // Previously missing pages
    { url: absoluteUrl('/bilinspektion'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.82 },
    { url: absoluteUrl('/blinkers-regler'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.82 },
    { url: absoluteUrl('/korning-i-morker'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/korning-i-regn'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/korning-pa-motorvag'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/trafikforsakring'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.82 },
    { url: absoluteUrl('/teori'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/teori/fordonskanndom'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/teori/forsta-hjalpen'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/teori/korning'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/teori/miljo'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/teori/sakerhet'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/teori/trafikregler'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/teori/vagmarken'), lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  ];
}
