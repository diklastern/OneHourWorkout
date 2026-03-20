export type Theme = 'light' | 'dark';
export type DefaultLocation = 'gym' | 'home';

export interface PreferencesState {
  theme: Theme;
  defaultLocation: DefaultLocation;
}

const STORAGE_KEY = 'workoutInbar:preferences';

const defaultPreferences: PreferencesState = {
  theme: 'dark',
  defaultLocation: 'gym',
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

    return { theme, defaultLocation };
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

