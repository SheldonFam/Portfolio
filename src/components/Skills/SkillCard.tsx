import {
  Code,
  RefreshCw,
  Palette,
  Shield,
  FileInput,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { SkillCategory } from "../../data/skills";
import { TechBadge } from "../common/TechBadge";

const ICON_MAP: Record<string, LucideIcon> = {
  Code,
  RefreshCw,
  Palette,
  Shield,
  FileInput,
  Wrench,
};

interface SkillCardProps {
  readonly category: SkillCategory;
}

export function SkillCard({ category }: SkillCardProps) {
  const Icon = ICON_MAP[category.icon];

  return (
    <div className="bg-surface border border-border-custom rounded-xl p-6 transition-colors hover:border-accent-border">
      <h3 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
        <span className="w-7 h-7 bg-accent-glow rounded-md flex items-center justify-center text-accent">
          {Icon && <Icon size={16} aria-hidden="true" />}
        </span>
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {category.tags.map((tag) => (
          <TechBadge key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}
