import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { signs, categories, getSignBySlug, getCategoryByPrefix } from '@/lib/signs-data';
import { SignHeader, SignFooter, QuizSection } from '@/components/SignPageLayout';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return signs
    .filter(s => s.hasIndividualPage)
    .map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // Check if slug matches a category page
  const cat = categories.find(c => c.slug === slug);
  if (cat) return {};
  
  const sign = getSignBySlug(slug);
  if (!sign) return {};

  const category = getCategoryByPrefix(sign.category);
  return {
    title: `${sign.name} (${sign.code}) — Vägmärke förklarat | Huvet`,
    description: `${sign.shortDescription} Lär dig vad vägmärke ${sign.code} (${sign.name}) betyder, var det används och vanliga missförstånd. Quiz-frågor ingår.`,
    keywords: [sign.name, sign.code, 'vägmärke', 'vägmärken', category?.title || '', 'körkort', 'teoriprov', 'trafikskyltar'],
    openGraph: {
      title: `${sign.name} — Vägmärke ${sign.code} | Huvet`,
      description: sign.shortDescription,
      images: [{ url: `/signs/${sign.svgFile}`, width: 200, height: 200, alt: sign.name }],
    },
    alternates: {
      canonical: `https://huvet.se/vagmarken/${sign.slug}`,
    },
  };
}

export default async function SignPage({ params }: Props) {
  const { slug } = await params;
  
  // Category pages are handled by their own route files
  const cat = categories.find(c => c.slug === slug);
  if (cat) notFound();
  
  const sign = getSignBySlug(slug);
  if (!sign || !sign.hasIndividualPage) notFound();

  const category = getCategoryByPrefix(sign.category);
  const relatedSigns = signs.filter(s => s.category === sign.category && s.id !== sign.id).slice(0, 6);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${sign.name} (${sign.code}) — Vägmärke förklarat`,
    description: sign.shortDescription,
    image: `https://huvet.se/signs/${sign.svgFile}`,
    url: `https://huvet.se/vagmarken/${sign.slug}`,
    dateModified: '2026-03-27',
    publisher: { '@type': 'Organization', name: 'Huvet', url: 'https://huvet.se' },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: sign.quizQuestions.map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.explanation,
        },
      })),
    },
  };

  const catColor = category?.color || '#1DB954';
  const catBg = category?.bgColor || '#e6f4ee';

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SignHeader />

      {/* Breadcrumb + Hero */}
      <section style={{ background: `linear-gradient(160deg, ${catBg} 0%, #fff 60%)`, padding: '32px 20px 48px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontSize: '13px', color: '#777', marginBottom: '24px' }}>
            <Link href="/" style={{ color: '#1DB954', textDecoration: 'none' }}>Huvet</Link>
            {' › '}
            <Link href="/vagmarken" style={{ color: '#1DB954', textDecoration: 'none' }}>Vägmärken</Link>
            {' › '}
            {category && (
              <>
                <Link href={`/vagmarken/${category.slug}`} style={{ color: '#1DB954', textDecoration: 'none' }}>{category.titleShort}</Link>
                {' › '}
              </>
            )}
            <span style={{ color: '#555' }}>{sign.code}</span>
          </nav>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{
              width: '160px', height: '160px',
              background: 'white',
              borderRadius: '24px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              border: `3px solid ${catColor}33`,
              flexShrink: 0,
            }}>
              <Image src={`/signs/${sign.svgFile}`} alt={sign.name} width={120} height={120} priority />
            </div>
            <div style={{ flex: '1', minWidth: '280px' }}>
              <div style={{ display: 'inline-block', background: catBg, color: catColor, fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '5px 14px', borderRadius: '999px', marginBottom: '12px' }}>
                {category?.title} • {sign.code}
              </div>
              <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: '900', lineHeight: '1.15', color: '#0d1f17', margin: '0 0 12px', letterSpacing: '-0.03em' }}>
                {sign.name}
              </h1>
              <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#555', margin: 0 }}>
                {sign.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '48px 20px 64px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {/* Main description */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0d1f17', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '24px', background: catColor, borderRadius: '3px', display: 'inline-block' }}></span>
              Vad betyder {sign.code}?
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
              {sign.fullDescription}
            </p>
          </div>

          {/* Usage */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0d1f17', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '24px', background: catColor, borderRadius: '3px', display: 'inline-block' }}></span>
              Var används {sign.code}?
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
              {sign.usage}
            </p>
          </div>

          {/* Common misunderstandings */}
          <div style={{ background: '#fff7ed', borderRadius: '16px', padding: '24px', border: '2px solid #fed7aa', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#c2410c', marginTop: 0, marginBottom: '12px' }}>
              ⚠️ Vanliga missförstånd
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#7c2d12', margin: 0 }}>
              {sign.commonMisunderstandings}
            </p>
          </div>

          {/* Quick facts */}
          <div style={{ background: '#0d1f17', borderRadius: '20px', padding: '28px 24px', color: 'white', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', marginTop: 0, marginBottom: '16px' }}>📋 Snabbfakta: {sign.code}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Märkeskod</div>
                <div style={{ fontSize: '16px', fontWeight: '700' }}>{sign.code}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Kategori</div>
                <div style={{ fontSize: '16px', fontWeight: '700' }}>{category?.title}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Form</div>
                <div style={{ fontSize: '16px', fontWeight: '700' }}>{category?.shapeDescription}</div>
              </div>
            </div>
          </div>

          {/* Quiz */}
          {sign.quizQuestions.length > 0 && (
            <QuizSection questions={sign.quizQuestions} />
          )}

          {/* Related signs */}
          {relatedSigns.length > 0 && (
            <div style={{ marginTop: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#0d1f17', marginBottom: '20px' }}>
                Fler {category?.title?.toLowerCase()}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                {relatedSigns.map(rs => (
                  <div key={rs.id} style={{ background: catBg, borderRadius: '14px', padding: '16px', border: `2px solid ${catColor}22` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <Image src={`/signs/${rs.svgFile}`} alt={rs.name} width={40} height={40} />
                      <div>
                        <div style={{ fontSize: '11px', color: catColor, fontWeight: '700' }}>{rs.code}</div>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#0d1f17' }}>{rs.name}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.5', margin: 0 }}>{rs.shortDescription}</p>
                    {rs.hasIndividualPage && (
                      <Link href={`/vagmarken/${rs.slug}`} style={{ fontSize: '12px', fontWeight: '700', color: catColor, textDecoration: 'none', display: 'inline-block', marginTop: '8px' }}>
                        Läs mer →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div style={{ background: 'linear-gradient(160deg, #1DB954, #17a34a)', borderRadius: '24px', padding: '40px 32px', textAlign: 'center', color: 'white', marginTop: '48px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px' }}>Kan du alla vägmärken?</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '15px' }}>
              Öva med Huvet och lär dig alla vägmärken inför teoriprovet.
            </p>
            <Link href="/#demo" style={{ background: 'white', color: '#1DB954', padding: '16px 32px', borderRadius: '999px', fontSize: '16px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>
              Testa gratis nu →
            </Link>
          </div>
        </div>
      </section>

      <SignFooter />
    </div>
  );
}
