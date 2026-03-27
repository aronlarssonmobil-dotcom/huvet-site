import type { Metadata } from 'next';
import { CategoryPage } from '@/components/CategoryPage';

export const metadata: Metadata = {
  title: 'Förbudsmärken (C-skyltar) – Alla förbudsskyltar för körkort | Huvet',
  description: 'Lär dig alla svenska förbudsmärken (C-skyltar). Runda skyltar med röd kant som förbjuder infart, parkering, hastighetsöverträdelser med mera. Bilder och quiz.',
  keywords: ['förbudsmärken', 'C-skyltar', 'förbudsskyltar', 'infart förbjuden', 'hastighetsbegränsning', 'parkeringsförbud', 'körkort'],
  alternates: { canonical: 'https://huvet.se/vagmarken/forbud' },
};

export default function ForbudPage() {
  return <CategoryPage categorySlug="forbud" />;
}
