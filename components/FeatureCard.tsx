type FeatureCardProps = {
  title: string;
  description: string;
  detail: string;
};

export function FeatureCard({ title, description, detail }: FeatureCardProps) {
  return (
    <div className="editorial-card rounded-[28px] p-6 sm:p-7">
      <div className="muted-kicker">Det märks i produkten</div>
      <h3 className="display-title mt-4 text-[1.9rem] font-semibold leading-tight text-[var(--ink-strong)]">
        {title}
      </h3>
      <p className="mt-4 max-w-sm text-[0.98rem] leading-8 text-[var(--ink-soft)]">{description}</p>
      <div className="mt-6 border-t border-[var(--line-soft)] pt-4 text-sm leading-7 text-[var(--ink-muted)]">
        {detail}
      </div>
    </div>
  );
}
