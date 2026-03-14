interface CardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-surface border border-border-custom rounded-xl p-7 transition-border-color,transform duration-200 hover:border-accent-border hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </div>
  );
}
