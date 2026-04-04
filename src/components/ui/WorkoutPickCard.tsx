import type { LucideIcon } from 'lucide-react';
import type { WorkoutCategory } from '../../types/workout';
import { categoryTokens } from '../../utils/categoryTokens';

interface WorkoutPickCardProps {
  category: WorkoutCategory;
  title: string;
  description: string;
  icon: LucideIcon;
  onSelect: () => void;
}

export function WorkoutPickCard({ category, title, description, icon: Icon, onSelect }: WorkoutPickCardProps) {
  const c = categoryTokens(category);

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative overflow-hidden rounded-2xl border-2 border-line bg-gradient-to-r from-surface-muted to-surface-elevated p-8 text-start shadow-soft transition-all duration-300 hover:scale-[1.02] dark:from-surface dark:to-surface-muted ${c.hoverFrom} ${c.hoverTo} ${c.hoverBorder} ${c.shadow} ui-focus-ring`}
    >
      <div className="relative z-10">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h2
            className={`text-3xl font-bold text-fg transition-colors ${c.hoverTitle}`}
          >
            {title}
          </h2>
          <Icon
            className={`h-8 w-8 shrink-0 opacity-75 transition-opacity group-hover:opacity-100 ${c.text}`}
            aria-hidden
          />
        </div>
        <p className="text-start text-sm font-light text-fg-muted">{description}</p>
      </div>
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100 ${c.overlay}`}
        aria-hidden
      />
    </button>
  );
}
