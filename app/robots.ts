import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/betalning/', '/tack/'],
    },
    sitemap: 'https://huvet.se/sitemap.xml',
    host: 'https://huvet.se',
  };
}
