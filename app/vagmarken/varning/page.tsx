import type { Metadata } from 'next';
import { CategoryPage } from '@/components/CategoryPage';

export const metadata: Metadata = {
  title: 'Varningsmärken (A-skyltar) – Alla varningsskyltar för körkort | Huvet',
  description: 'Lär dig alla svenska varningsmärken (A-skyltar) inför körkortsprovet. Triangelformade skyltar med röd kant som varnar för faror på vägen. Bilder, förklaringar och quiz.',
  keywords: ['varningsmärken', 'A-skyltar', 'varningsskyltar', 'vägmärken varning', 'körkort varningsmärken', 'trafikmärken varning'],
  alternates: { canonical: 'https://huvet.se/vagmarken/varning' },
};

export default function VarningPage() {
  return <CategoryPage categorySlug="varning" />;
}
