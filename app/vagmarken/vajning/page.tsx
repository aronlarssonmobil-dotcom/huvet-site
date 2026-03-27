import type { Metadata } from 'next';
import { CategoryPage } from '@/components/CategoryPage';

export const metadata: Metadata = {
  title: 'Väjningspliktsmärken (B-skyltar) – Stopplikt & väjning | Huvet',
  description: 'Alla väjningspliktsmärken (B-skyltar) för körkortet. Lär dig stopplikt, väjningsplikt, huvudled och andra viktiga företrädesmärken med bilder och förklaringar.',
  keywords: ['väjningspliktsmärken', 'B-skyltar', 'stopplikt', 'väjningsplikt', 'huvudled', 'företräde', 'körkort'],
  alternates: { canonical: 'https://huvet.se/vagmarken/vajning' },
};

export default function VajningPage() {
  return <CategoryPage categorySlug="vajning" />;
}
