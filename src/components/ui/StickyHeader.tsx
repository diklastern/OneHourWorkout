import type { ReactNode } from 'react';

interface StickyHeaderProps {
  children: ReactNode;
  className?: string;
}

export function StickyHeader({ children, className = '' }: StickyHeaderProps) {
  return (
    <header
      className={`sticky top-0 z-50 border-b border-line/90 bg-surface-elevated/85 backdrop-blur-md supports-[backdrop-filter]:bg-surface-elevated/75 dark:border-line/80 dark:bg-surface-elevated/80 ${className}`}
    >
      {children}
    </header>
  );
}
