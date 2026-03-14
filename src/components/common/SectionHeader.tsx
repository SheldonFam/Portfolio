interface SectionHeaderProps {
  readonly tag: string;
  readonly title: string;
  readonly description: string;
  readonly centered?: boolean;
}

export function SectionHeader({
  tag,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <>
      <div className="inline-flex items-center gap-1.5 bg-accent-glow border border-accent-border text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3">
        {tag}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-2 text-wrap-balance">
        {title}
      </h2>
      <p className={`text-text-secondary mb-12 text-wrap-pretty ${centered ? "mx-auto" : ""}`}>
        {description}
      </p>
    </>
  );
}
