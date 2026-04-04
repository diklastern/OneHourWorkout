import type { ReactNode } from 'react';

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

/** Full-viewport page background using tokenized gradient. */
export function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <div
      className={`min-h-[100dvh] min-h-screen bg-gradient-to-br from-page-from via-page-via to-page-to pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(0px,env(safe-area-inset-top))] ${className}`}
    >
      {children}
    </div>
  );
}
