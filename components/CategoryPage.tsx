import Link from 'next/link';
import { categories, signs, getCategoryBySlug } from '@/lib/signs-data';
import { SignHeader, SignFooter, SignCard } from '@/components/SignPageLayout';

export function CategoryPage({ categorySlug }: { categorySlug: string }) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;

  const categorySigns = signs.filter(s => s.category === category.prefix);
  const otherCategories = categories.filter(c => c.slug !== categorySlug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.title,
    description: category.description,
    url: `https://huvet.se/vagmarken/${category.slug}`,
    publisher: { '@type': 'Organization', name: 'Huvet', url: 'https://huvet.se' },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: categorySigns.length,
      itemListElement: categorySigns.map((sign, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${sign.code} — ${sign.name}`,
        description: sign.shortDescription,
        url: sign.hasIndividualPage ? `https://huvet.se/vagmarken/${sign.slug}` : undefined,
      })),
    },
  };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#fff', minHeight: '100vh', color: '#0d1f17' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SignHeader />

      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, ${category.bgColor} 0%, #fff 60%)`, padding: '32px 20px 48px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <nav style={{ fontSize: '13px', color: '#777', marginBottom: '24px' }}>
            <Link href="/" style={{ color: '#1DB954', textDecoration: 'none' }}>Huvet</Link>
            {' › '}
            <Link href="/vagmarken" style={{ color: '#1DB954', textDecoration: 'none' }}>Vägmärken</Link>
            {' › '}
            <span style={{ color: '#555' }}>{category.titleShort}</span>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{
              width: '56px', height: '56px',
              background: category.bgColor,
              border: `3px solid ${category.color}44`,
              borderRadius: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '24px', color: category.color, fontWeight: '900',
            }}>
              {category.shape}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: category.color, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                {category.prefix}-skyltar
              </div>
            </div>
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: '900', lineHeight: '1.1', color: '#0d1f17', margin: '0 0 16px', letterSpacing: '-0.04em' }}>
            {category.title}
          </h1>
          <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#555', margin: '0 0 12px', maxWidth: '640px' }}>
            {category.description}
          </p>
          <div style={{ background: `${category.color}15`, color: category.color, fontSize: '13px', fontWeight: '700', padding: '8px 16px', borderRadius: '999px', display: 'inline-block' }}>
            {categorySigns.length} vägmärken i denna kategori
          </div>
        </div>
      </section>

      {/* Signs grid */}
      <section style={{ padding: '48px 20px 64px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '24px', color: '#0d1f17' }}>
            Alla {category.title.toLowerCase()} ({category.prefix}-skyltar)
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px', marginBottom: '48px' }}>
            {categorySigns.map(sign => (
              <SignCard key={sign.id} sign={sign} categoryColor={category.color} categoryBg={category.bgColor} />
            ))}
          </div>

          {/* Info box about shape */}
          <div style={{ background: '#0d1f17', borderRadius: '20px', padding: '32px 28px', color: 'white', marginBottom: '48px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '900', marginTop: 0, marginBottom: '12px' }}>
              Så känner du igen {category.title.toLowerCase()}
            </h3>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', margin: '0 0 16px' }}>
              {category.shapeDescription}. Alla {category.title.toLowerCase()} har {category.prefix}-prefix i sin märkeskod.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {categories.map(c => (
                <Link key={c.slug} href={`/vagmarken/${c.slug}`} style={{
                  background: c.slug === categorySlug ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)',
                  color: c.slug === categorySlug ? 'white' : 'rgba(255,255,255,0.5)',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  border: c.slug === categorySlug ? '2px solid rgba(255,255,255,0.3)' : '2px solid transparent',
                }}>
                  {c.shape} {c.titleShort}
                </Link>
              ))}
            </div>
          </div>

          {/* Other categories */}
          <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px', color: '#0d1f17' }}>
            Andra kategorier
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px', marginBottom: '48px' }}>
            {otherCategories.map(c => (
              <Link key={c.slug} href={`/vagmarken/${c.slug}`} style={{
                background: c.bgColor,
                borderRadius: '16px',
                padding: '20px',
                border: `2px solid ${c.color}22`,
                textDecoration: 'none',
                color: 'inherit',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{c.shape}</div>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#0d1f17', marginBottom: '4px' }}>{c.title}</div>
                <div style={{ fontSize: '12px', color: c.color, fontWeight: '700' }}>
                  {signs.filter(s => s.category === c.prefix).length} skyltar →
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: 'linear-gradient(160deg, #1DB954, #17a34a)', borderRadius: '24px', padding: '40px 32px', textAlign: 'center', color: 'white' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px' }}>Testa dina kunskaper om {category.title.toLowerCase()}</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '15px' }}>
              Huvet har quiz-frågor om alla typer av vägmärken.
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
