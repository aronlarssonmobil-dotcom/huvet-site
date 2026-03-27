import Link from 'next/link';
import Image from 'next/image';
import type { SignData } from '@/lib/signs-data';

export function SignHeader() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e2efe9', padding: '0 20px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '36px', height: '36px', background: '#006B3F', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
              <circle cx="10" cy="10" r="2.5" fill="white"/>
              <line x1="10" y1="2" x2="10" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3.4" y1="13.5" x2="7.8" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="16.6" y1="13.5" x2="12.2" y2="11.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontSize: '20px', fontWeight: '900', color: '#0d1f17', letterSpacing: '-0.04em' }}>Huvet</span>
        </Link>
        <Link href="/#demo" style={{ background: '#006B3F', color: 'white', padding: '10px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Börja träna gratis
        </Link>
      </div>
    </header>
  );
}

export function SignFooter() {
  return (
    <footer style={{ background: '#081610', color: 'rgba(255,255,255,0.4)', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '32px' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '800', fontSize: '18px' }}>Huvet</Link>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { href: '/vagmarken', label: 'Vägmärken' },
              { href: '/vagmarken/varning', label: 'Varningsmärken' },
              { href: '/vagmarken/forbud', label: 'Förbudsmärken' },
              { href: '/vagmarken/pabud', label: 'Påbudsmärken' },
              { href: '/vagmarken/vajning', label: 'Väjning' },
              { href: '/vagmarken/information', label: 'Anvisning' },
              { href: '/trafikregler', label: 'Trafikregler' },
              { href: '/teoriprov-tips', label: 'Teoriprov tips' },
              { href: '/korkort-kostnad', label: 'Körkort kostnad' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px' }}>{label}</Link>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', fontSize: '13px' }}>
          © 2026 Huvet (huvet.se). Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
}

export function SignCard({ sign, categoryColor, categoryBg }: { sign: SignData; categoryColor: string; categoryBg: string }) {
  const linkHref = sign.hasIndividualPage ? `/vagmarken/${sign.slug}` : undefined;
  
  const content = (
    <div style={{
      background: categoryBg,
      borderRadius: '16px',
      padding: '20px',
      border: `2px solid ${categoryColor}22`,
      transition: 'transform 0.15s, box-shadow 0.15s',
      cursor: linkHref ? 'pointer' : 'default',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
        <Image
          src={`/signs/${sign.svgFile}`}
          alt={sign.name}
          width={64}
          height={64}
          style={{ flexShrink: 0 }}
        />
        <div>
          <div style={{ fontSize: '11px', fontWeight: '700', color: categoryColor, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
            {sign.code}
          </div>
          <div style={{ fontSize: '15px', fontWeight: '800', color: '#0d1f17' }}>{sign.name}</div>
        </div>
      </div>
      <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6', margin: 0 }}>{sign.shortDescription}</p>
      {linkHref && (
        <div style={{ marginTop: '10px', fontSize: '13px', fontWeight: '700', color: categoryColor }}>
          Läs mer →
        </div>
      )}
    </div>
  );

  if (linkHref) {
    return <Link href={linkHref} style={{ textDecoration: 'none', color: 'inherit' }}>{content}</Link>;
  }
  return content;
}

export function QuizSection({ questions }: { questions: SignData['quizQuestions'] }) {
  return (
    <div style={{ marginTop: '40px' }}>
      <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#0d1f17', marginBottom: '20px' }}>
        🧠 Testa dig själv
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {questions.map((q, i) => (
          <div key={i} style={{ background: '#f0f7f3', borderRadius: '16px', padding: '24px', border: '2px solid #e6f4ee' }}>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#0d1f17', marginBottom: '16px' }}>
              Fråga {i + 1}: {q.question}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              {q.options.map((opt, j) => (
                <div key={j} style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: j === q.correctIndex ? '#006B3F' : 'white',
                  color: j === q.correctIndex ? 'white' : '#333',
                  fontSize: '14px',
                  fontWeight: j === q.correctIndex ? '700' : '400',
                  border: j === q.correctIndex ? '2px solid #006B3F' : '2px solid #e2efe9',
                }}>
                  {String.fromCharCode(65 + j)}. {opt}
                  {j === q.correctIndex && ' ✓'}
                </div>
              ))}
            </div>
            <div style={{ background: '#e6f4ee', borderRadius: '10px', padding: '12px 16px', fontSize: '13px', color: '#006B3F', fontWeight: '600', lineHeight: '1.6' }}>
              💡 {q.explanation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
