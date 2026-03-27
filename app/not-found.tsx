import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sidan hittades inte — Huvet',
  description: 'Sidan du letar efter finns inte. Öva på körkortsprovet med Huvet.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #f0f7f3 0%, #fff 100%)',
      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
      padding: '2rem',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 540 }}>
        {/* Road sign style 404 */}
        <div style={{
          width: 140,
          height: 140,
          borderRadius: '50%',
          border: '8px solid #e53e3e',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        }}>
          <span style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: '3rem',
            fontWeight: 900,
            color: '#0d1f17',
          }}>404</span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
          fontWeight: 800,
          color: '#0d1f17',
          margin: '0 0 1rem',
        }}>
          Fel väg!
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: '#5a6b62',
          lineHeight: 1.7,
          margin: '0 0 2rem',
        }}>
          Sidan du letar efter finns inte. Kanske tog du en felaktig avfart?
          Inga problem — vi hjälper dig hitta rätt.
        </p>

        {/* Road dashes divider */}
        <div style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          margin: '0 0 2rem',
        }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{
              width: 24,
              height: 4,
              background: '#f5d020',
              borderRadius: 2,
            }} />
          ))}
        </div>

        {/* Popular pages */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '0.75rem',
          marginBottom: '2rem',
        }}>
          {[
            { href: '/', label: 'Startsidan' },
            { href: '/teoriprov', label: 'Teoriprov' },
            { href: '/ovningsprov', label: 'Övningsprov' },
            { href: '/vagmarken', label: 'Vägmärken' },
            { href: '/korprov', label: 'Körprov' },
            { href: '/korkort-kostnad', label: 'Kostnad' },
          ].map((link) => (
            <Link key={link.href} href={link.href} style={{
              display: 'block',
              padding: '0.75rem 1rem',
              background: '#fff',
              border: '1px solid #dceee5',
              borderRadius: 12,
              color: '#006B3F',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              transition: 'all 0.2s',
            }}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '0.9rem 2rem',
          background: '#006B3F',
          color: '#fff',
          borderRadius: 14,
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '1rem',
          transition: 'background 0.2s',
        }}>
          ← Tillbaka till start
        </Link>
      </div>
    </div>
  );
}
