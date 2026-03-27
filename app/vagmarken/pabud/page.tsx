import type { Metadata } from 'next';
import { CategoryPage } from '@/components/CategoryPage';

export const metadata: Metadata = {
  title: 'Påbudsmärken (D-skyltar) – Alla påbudsskyltar för körkort | Huvet',
  description: 'Lär dig alla svenska påbudsmärken (D-skyltar). Blå runda skyltar som anger vad du måste göra: körriktning, cykelbana, cirkulationsplats med mera.',
  keywords: ['påbudsmärken', 'D-skyltar', 'påbudsskyltar', 'cirkulationsplats', 'påbjuden körriktning', 'cykelbana', 'körkort'],
  alternates: { canonical: 'https://huvet.se/vagmarken/pabud' },
};

export default function PabudPage() {
  return <CategoryPage categorySlug="pabud" />;
}
