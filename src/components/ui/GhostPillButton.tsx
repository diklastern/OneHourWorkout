import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface GhostPillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

/** Secondary navigation: Preferences, etc. */
export function GhostPillButton({ children, className = '', ...rest }: GhostPillButtonProps) {
  return (
    <button
      type="button"
      className={`shrink-0 rounded-pill border-2 border-line px-4 py-2 text-sm font-semibold text-fg-muted transition-all hover:border-brand/50 hover:text-fg ui-focus-ring ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
