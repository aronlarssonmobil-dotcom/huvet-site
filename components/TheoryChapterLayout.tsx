import Link from 'next/link';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Breadcrumbs from './Breadcrumbs';

type Chapter = {
  slug: string;
  title: string;
  shortTitle: string;
};

const chapters: Chapter[] = [
  { slug: 'trafikregler', title: 'Trafikregler', shortTitle: 'Trafikregler' },
  { slug: 'vagmarken', title: 'Vägmärken', shortTitle: 'Vägmärken' },
  { slug: 'fordonskanndom', title: 'Fordonskännedom', shortTitle: 'Fordonskännedom' },
  { slug: 'miljo', title: 'Miljö & Eco-driving', shortTitle: 'Miljö' },
  { slug: 'sakerhet', title: 'Säkerhet', shortTitle: 'Säkerhet' },
  { slug: 'korning', title: 'Körning i olika förhållanden', shortTitle: 'Körning' },
  { slug: 'forsta-hjalpen', title: 'Första hjälpen', shortTitle: 'Första hjälpen' },
];

type TheoryChapterLayoutProps = {
  currentSlug: string;
  children: React.ReactNode;
};

export default function TheoryChapterLayout({ currentSlug, children }: TheoryChapterLayoutProps) {
  const currentIndex = chapters.findIndex((c) => c.slug === currentSlug);
  const prev = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const next = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
  const current = chapters[currentIndex];

  return (
    <>
      <style>{`
        .theory-hero {
          background: linear-gradient(135deg, #006B3F 0%, #004D2C 60%, #003D23 100%);
          padding: 5.5rem 1.5rem 2.5rem;
          color: #fff;
        }
        .theory-hero-inner {
          max-width: 860px;
          margin: 0 auto;
        }
        .theory-content {
          max-width: 860px;
          margin: 0 auto;
          padding: 2.5rem 1.5rem 4rem;
        }
        .theory-content h2 {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0d1f17;
          margin: 2.5rem 0 1rem;
          line-height: 1.25;
        }
        .theory-content h3 {
          font-size: 1.15rem;
          font-weight: 600;
          color: #1a3a2a;
          margin: 2rem 0 0.75rem;
        }
        .theory-content p {
          font-size: 1rem;
          line-height: 1.8;
          color: #333;
          margin: 0 0 1rem;
        }
        .theory-content ul, .theory-content ol {
          padding-left: 1.5rem;
          margin: 0 0 1.25rem;
        }
        .theory-content li {
          font-size: 1rem;
          line-height: 1.8;
          color: #333;
          margin-bottom: 0.3rem;
        }
        .theory-info-box {
          background: #f0faf5;
          border-left: 4px solid #1DB954;
          padding: 1.25rem 1.5rem;
          border-radius: 0 12px 12px 0;
          margin: 1.5rem 0;
        }
        .theory-info-box p {
          margin: 0;
          color: #1a3a2a;
          font-weight: 500;
        }
        .theory-warning-box {
          background: #fff8f0;
          border-left: 4px solid #FF9800;
          padding: 1.25rem 1.5rem;
          border-radius: 0 12px 12px 0;
          margin: 1.5rem 0;
        }
        .theory-warning-box p {
          margin: 0;
          color: #5a3e1a;
          font-weight: 500;
        }
        .theory-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.25rem 0 1.5rem;
          font-size: 0.95rem;
        }
        .theory-table th {
          background: #f0faf5;
          padding: 0.75rem 1rem;
          text-align: left;
          font-weight: 600;
          color: #0d1f17;
          border-bottom: 2px solid #dceee5;
        }
        .theory-table td {
          padding: 0.65rem 1rem;
          border-bottom: 1px solid #f0f0f0;
          color: #333;
        }
        .theory-cta {
          background: linear-gradient(135deg, #006B3F, #1DB954);
          padding: 2.5rem;
          border-radius: 16px;
          text-align: center;
          margin: 3rem 0 2rem;
        }
        .theory-cta h3 {
          color: #fff !important;
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          margin: 0 0 0.75rem;
        }
        .theory-cta p {
          color: rgba(255,255,255,0.85) !important;
          margin: 0 0 1.5rem;
        }
        .theory-cta-btn {
          display: inline-block;
          background: #fff;
          color: #006B3F;
          padding: 0.85rem 2rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .theory-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .theory-nav {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }
        .theory-nav-btn {
          display: flex;
          flex-direction: column;
          padding: 1rem 1.5rem;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          text-decoration: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          min-width: 180px;
        }
        .theory-nav-btn:hover {
          border-color: #006B3F;
          box-shadow: 0 2px 12px rgba(0,107,63,0.1);
        }
        .theory-nav-btn .label {
          font-size: 0.75rem;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.25rem;
        }
        .theory-nav-btn .title {
          font-weight: 600;
          color: #006B3F;
          font-size: 0.95rem;
        }
        .theory-nav-btn.next {
          text-align: right;
          margin-left: auto;
        }
        .theory-chapter-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 1.5rem 0 0;
        }
        .theory-chapter-chip {
          display: inline-block;
          padding: 0.4rem 0.85rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.15s;
        }
        .theory-chapter-chip.active {
          background: rgba(255,255,255,0.2);
          color: #fff;
        }
        .theory-chapter-chip:not(.active) {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7);
        }
        .theory-chapter-chip:not(.active):hover {
          background: rgba(255,255,255,0.15);
          color: #fff;
        }
        @media (max-width: 600px) {
          .theory-hero { padding: 5rem 1rem 2rem; }
          .theory-content { padding: 1.5rem 1rem 3rem; }
          .theory-nav-btn { min-width: 140px; padding: 0.85rem 1rem; }
        }
      `}</style>

      <SiteHeader />

      <div className="theory-hero">
        <div className="theory-hero-inner">
          <Breadcrumbs
            items={[
              { label: 'Huvet', href: '/' },
              { label: 'Körkortsteori', href: '/teori' },
              { label: current?.title || '' },
            ]}
          />
          <div className="theory-chapter-list">
            {chapters.map((ch) => (
              <Link
                key={ch.slug}
                href={`/teori/${ch.slug}`}
                className={`theory-chapter-chip ${ch.slug === currentSlug ? 'active' : ''}`}
              >
                {ch.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="theory-content">
        {children}

        <div className="theory-cta">
          <h3>Testa dina kunskaper</h3>
          <p>Gör vårt gratis övningsprov och se hur redo du är för körkortsprovet.</p>
          <Link href="/ovningsprov" className="theory-cta-btn">
            Gör gratis övningsprov →
          </Link>
        </div>

        <div className="theory-nav">
          {prev ? (
            <Link href={`/teori/${prev.slug}`} className="theory-nav-btn">
              <span className="label">← Föregående</span>
              <span className="title">{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={`/teori/${next.slug}`} className="theory-nav-btn next">
              <span className="label">Nästa →</span>
              <span className="title">{next.title}</span>
            </Link>
          ) : (
            <Link href="/teori" className="theory-nav-btn next">
              <span className="label">Tillbaka</span>
              <span className="title">Alla kapitel</span>
            </Link>
          )}
        </div>
      </div>

      <SiteFooter />
    </>
  );
}

export { chapters };
