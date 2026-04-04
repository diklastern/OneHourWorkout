import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface PreferencePillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  selected: boolean;
}

export function PreferencePill({ children, selected, className = '', ...rest }: PreferencePillProps) {
  return (
    <button
      type="button"
      className={`rounded-pill border-2 px-4 py-2 text-sm font-semibold transition-all ui-focus-ring ${
        selected
          ? 'border-brand bg-brand/10 text-brand'
          : 'border-line text-fg-muted hover:border-brand/40 hover:text-fg'
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
