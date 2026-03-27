import type { Metadata } from 'next';
import { CategoryPage } from '@/components/CategoryPage';

export const metadata: Metadata = {
  title: 'Anvisningsmärken (E-skyltar) – Alla informationsskyltar | Huvet',
  description: 'Alla svenska anvisningsmärken (E-skyltar) för körkortet. Blå rektangulära skyltar med information om motorväg, parkering, övergångsställe, tätort med mera.',
  keywords: ['anvisningsmärken', 'E-skyltar', 'informationsskyltar', 'motorväg', 'övergångsställe', 'tätort', 'parkeringsplats', 'körkort'],
  alternates: { canonical: 'https://huvet.se/vagmarken/information' },
};

export default function InformationPage() {
  return <CategoryPage categorySlug="information" />;
}
