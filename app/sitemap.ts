import type { MetadataRoute } from 'next';

const siteUrl = 'https://huvet.se';

function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: absoluteUrl('/korkortstips'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/korkortsfragor'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/vagmarken'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: absoluteUrl('/mc'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/moped'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/teoriprov'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: absoluteUrl('/korprov'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: absoluteUrl('/ovningskörning'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/korkort-kostnad'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: absoluteUrl('/ovningsprov'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: absoluteUrl('/riskutbildning'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/trafikregler'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: absoluteUrl('/hastighetsgranser'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/intensivkurs'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    // New SEO content pages
    {
      url: absoluteUrl('/vagmarken-guide'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: absoluteUrl('/trafikregler-guide'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: absoluteUrl('/hastighetsgranser-guide'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: absoluteUrl('/ovningsprov-guide'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: absoluteUrl('/korkort-kostnad-guide'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: absoluteUrl('/riskettan'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.87,
    },
    {
      url: absoluteUrl('/risktvaan'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.87,
    },
    {
      url: absoluteUrl('/halkkörning'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.87,
    },
    {
      url: absoluteUrl('/teoriprov-tips'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/uppkorning-tips'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
