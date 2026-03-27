import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://huvet.se${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        style={{
          padding: '0.75rem 0',
          fontSize: '0.85rem',
          color: '#5a6b62',
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        }}
      >
        <ol
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.35rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                {index > 0 && (
                  <span style={{ color: '#dceee5', userSelect: 'none' }} aria-hidden="true">
                    /
                  </span>
                )}
                {isLast || !item.href ? (
                  <span style={{ color: '#0d1f17', fontWeight: 600 }}>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    style={{
                      color: '#006B3F',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
