import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Om Huvet — Vår historia och mission | Huvet',
  description:
    'Huvet skapades av Aron Larsson med ett enkelt mål — göra körkortsprovet enklare för alla. Lär känna teamet bakom Sveriges smartaste körkortsutbildning.',
  alternates: { canonical: 'https://huvet.se/om-oss' },
};

export default function OmOssPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#fff', minHeight: '100vh', color: '#111' }}>
      {/* Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e2efe9',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 56,
          }}
        >
          <Link href="/" style={{ textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: '#111' }}>
            Huvet
          </Link>
          <Link
            href="/ovningsprov"
            style={{
              background: '#1DB954',
              color: '#fff',
              padding: '8px 20px',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
            }}
          >
            Starta övningsprov
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: '80px 20px 60px',
          textAlign: 'center',
          background: '#fafafa',
        }}
      >
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 48,
            color: '#111',
            margin: '0 0 16px',
          }}
        >
          Om Huvet
        </h1>
        <p style={{ fontSize: 18, color: '#666', maxWidth: 500, margin: '0 auto' }}>
          Människorna bakom Sveriges smartaste körkortsutbildning.
        </p>
      </section>

      {/* Founder */}
      <section style={{ padding: '80px 20px', maxWidth: 800, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 40,
          }}
        >
          <div style={{ position: 'relative', width: 200, height: 200, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <Image
              src="/aron.jpg"
              alt="Aron Larsson, grundare av Huvet"
              fill
              style={{ objectFit: 'cover' }}
              sizes="200px"
            />
          </div>
          <div style={{ textAlign: 'center', maxWidth: 560 }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 28,
                color: '#111',
                margin: '0 0 4px',
              }}
            >
              Aron Larsson
            </h2>
            <p style={{ fontSize: 15, color: '#1DB954', fontWeight: 600, margin: '0 0 24px' }}>
              Grundare
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: '#444' }}>
              Huvet skapades av Aron Larsson med ett enkelt mål — göra körkortsprovet enklare för alla.
              Som 22-åring förstår jag hur frustrerande teoriprov kan kännas. Huvet är svaret.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '80px 20px', background: '#fafafa' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#1DB954', textTransform: 'uppercase', letterSpacing: 2, margin: '0 0 12px' }}>
            Vår mission
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 32,
              color: '#111',
              margin: '0 0 24px',
            }}
          >
            Körkortsteori, utan krångel
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: '#444' }}>
            Vi tror att alla förtjänar ett enkelt och roligt sätt att lära sig trafik. Ingen krånglig bok.
            Bara rena frågor, tydliga förklaringar och gamification som faktiskt funkar.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 20px' }}>
        <div
          style={{
            maxWidth: 600,
            margin: '0 auto',
            background: '#111',
            borderRadius: 24,
            padding: '48px 32px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 28,
              color: '#fff',
              margin: '0 0 16px',
            }}
          >
            Redo att börja?
          </h2>
          <p style={{ fontSize: 16, color: '#aaa', margin: '0 0 32px' }}>
            Testa Huvet gratis och se hur snabbt du kan bli redo för teoriprovet.
          </p>
          <Link
            href="/ovningsprov"
            style={{
              display: 'inline-block',
              background: '#1DB954',
              color: '#fff',
              padding: '14px 36px',
              borderRadius: 14,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
            }}
          >
            Börja öva gratis &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #f0f0f0', padding: '40px 20px', textAlign: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: '#111' }}>
          Huvet
        </Link>
        <p style={{ fontSize: 13, color: '#999', marginTop: 8 }}>
          &copy; {new Date().getFullYear()} Huvet. Alla rättigheter förbehållna.
        </p>
      </footer>
    </div>
  );
}
