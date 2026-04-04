import type { ReactNode } from 'react';
import type { AppLanguage } from '../../i18n/messages';

interface LanguageSegmentProps {
  language: AppLanguage;
  onChange: (lang: AppLanguage) => void;
  englishLabel: string;
  hebrewLabel: string;
  /** Compact = workout toolbar; comfortable = home */
  size?: 'compact' | 'comfortable';
  groupLabel: string;
}

export function LanguageSegment({
  language,
  onChange,
  englishLabel,
  hebrewLabel,
  size = 'comfortable',
  groupLabel,
}: LanguageSegmentProps) {
  const pad = size === 'compact' ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm';
  const shell =
    size === 'compact'
      ? 'rounded-lg border border-line'
      : 'rounded-pill border-2 border-line';
  const base = `${pad} font-semibold transition-colors ui-focus-ring rounded-none`;
  const active = 'bg-brand/12 text-brand';
  const idle = 'text-fg-muted hover:text-fg';

  const btn = (lang: AppLanguage, label: string): ReactNode => (
    <button
      type="button"
      onClick={() => onChange(lang)}
      className={`${base} ${language === lang ? active : idle}`}
    >
      {label}
    </button>
  );

  return (
    <div className={`flex overflow-hidden font-bold ${shell}`} role="group" aria-label={groupLabel}>
      {btn('en', englishLabel)}
      {btn('he', hebrewLabel)}
    </div>
  );
}
