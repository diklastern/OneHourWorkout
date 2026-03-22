import type { AppLanguage } from '../i18n/messages';

export type Theme = 'light' | 'dark';
export type DefaultLocation = 'gym' | 'home';

export interface PreferencesState {
  theme: Theme;
  defaultLocation: DefaultLocation;
  language: AppLanguage;
}

const STORAGE_KEY = 'workoutInbar:preferences';

const defaultPreferences: PreferencesState = {
  theme: 'dark',
  defaultLocation: 'gym',
  language: 'en',
};

export function loadPreferences(): PreferencesState {
  // localStorage is only available in the browser; this app is client-only (Vite),
  // but we still guard to keep things safe in other environments.
  if (typeof window === 'undefined') return defaultPreferences;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultPreferences;

    const parsed = JSON.parse(raw) as Partial<PreferencesState>;
    const theme: Theme = parsed.theme === 'light' || parsed.theme === 'dark' ? parsed.theme : defaultPreferences.theme;
    const defaultLocation: DefaultLocation =
      parsed.defaultLocation === 'gym' || parsed.defaultLocation === 'home'
        ? parsed.defaultLocation
        : defaultPreferences.defaultLocation;
    const language: AppLanguage =
      parsed.language === 'he' || parsed.language === 'en' ? parsed.language : defaultPreferences.language;

    return { theme, defaultLocation, language };
  } catch {
    return defaultPreferences;
  }
}

export function savePreferences(preferences: PreferencesState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
}

export function getDefaultPreferences(): PreferencesState {
  return defaultPreferences;
}

