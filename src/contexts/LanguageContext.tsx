import { createContext, useMemo, type ReactNode } from 'react';
import { messages, type AppLanguage, type MessageKey } from '../i18n/messages';

export interface LanguageContextValue {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  t: (key: MessageKey) => string;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  children: ReactNode;
}

export function LanguageProvider({ language, setLanguage, children }: LanguageProviderProps) {
  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key: MessageKey) => messages[language][key],
    }),
    [language, setLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
