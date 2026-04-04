import type { WorkoutCategory } from '../types/workout';

/** Tailwind class bundles aligned with design tokens (`cat-*` in tailwind.config). */
export function categoryTokens(category: WorkoutCategory) {
  switch (category) {
    case 'upper':
      return {
        text: 'text-cat-upper',
        hoverTitle: 'group-hover:text-cat-upper',
        border: 'border-cat-upper',
        bg: 'bg-cat-upper/10',
        hoverFrom: 'hover:from-cat-upper/20',
        hoverTo: 'hover:to-cat-upper/10',
        hoverBorder: 'hover:border-cat-upper',
        shadow: 'hover:shadow-lift hover:shadow-cat-upper/25',
        overlay: 'from-cat-upper/0 to-cat-upper/5',
      };
    case 'lower':
      return {
        text: 'text-cat-lower',
        hoverTitle: 'group-hover:text-cat-lower',
        border: 'border-cat-lower',
        bg: 'bg-cat-lower/10',
        hoverFrom: 'hover:from-cat-lower/20',
        hoverTo: 'hover:to-cat-lower/10',
        hoverBorder: 'hover:border-cat-lower',
        shadow: 'hover:shadow-lift hover:shadow-cat-lower/25',
        overlay: 'from-cat-lower/0 to-cat-lower/5',
      };
    case 'full':
      return {
        text: 'text-cat-full',
        hoverTitle: 'group-hover:text-cat-full',
        border: 'border-cat-full',
        bg: 'bg-cat-full/10',
        hoverFrom: 'hover:from-cat-full/20',
        hoverTo: 'hover:to-cat-full/10',
        hoverBorder: 'hover:border-cat-full',
        shadow: 'hover:shadow-lift hover:shadow-cat-full/25',
        overlay: 'from-cat-full/0 to-cat-full/5',
      };
  }
}
