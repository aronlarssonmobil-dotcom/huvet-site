import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Priser — Huvet Premium vs Gratis | Körkortsprov 2026',
  description:
    'Jämför Huvet Premium med gratisversionen. Se vad som ingår i varje plan och välj den som passar din körkortsresa bäst.',
  alternates: { canonical: 'https://huvet.se/priser' },
  openGraph: {
    title: 'Priser — Huvet Premium vs Gratis',
    description: 'Jämför Huvet Premium med gratisversionen.',
    url: 'https://huvet.se/priser',
  },
};

export default function PriserLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
