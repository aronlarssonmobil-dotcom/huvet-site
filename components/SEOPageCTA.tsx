import Link from 'next/link';

type SEOPageCTAProps = {
  variant?: 'default' | 'theory';
};

export default function SEOPageCTA({ variant = 'default' }: SEOPageCTAProps) {
  const isTheory = variant === 'theory';
  const heading = isTheory ? 'Testa dina kunskaper' : 'Börja öva gratis';
  const description = isTheory
    ? 'Se hur mycket du har lärt dig — gör ett snabbt övningsprov nu.'
    : 'Öva med 450+ riktiga körkortsfrågor och klara teoriprovet första gången.';
  const buttonText = isTheory ? 'Gör gratis övningsprov →' : 'Börja öva gratis →';

  return (
    <div style={{
      background: 'linear-gradient(135deg, #001a0d 0%, #002e12 50%, #001a0d 100%)',
      padding: '2.5rem 2rem',
      borderRadius: 16,
      textAlign: 'center',
      margin: '2.5rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle at 30% 50%, rgba(0,200,83,0.1) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />
      <h3 style={{
        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
        fontSize: '1.4rem',
        fontWeight: 700,
        color: '#fff',
        margin: '0 0 0.5rem',
        position: 'relative',
      }}>
        {heading}
      </h3>
      <p style={{
        color: 'rgba(255,255,255,0.7)',
        fontSize: '0.95rem',
        lineHeight: 1.6,
        margin: '0 0 1.5rem',
        maxWidth: 420,
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
      }}>
        {description}
      </p>
      <Link href="/ovningsprov" style={{
        display: 'inline-block',
        padding: '0.9rem 2rem',
        background: 'linear-gradient(135deg, #1DB954, #24D963)',
        color: '#fff',
        borderRadius: 12,
        fontWeight: 700,
        fontSize: '1rem',
        textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(0,200,83,0.3)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        position: 'relative',
      }}>
        {buttonText}
      </Link>
    </div>
  );
}
