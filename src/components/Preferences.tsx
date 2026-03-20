import { useMemo } from 'react';
import type { PreferencesState } from '../services/preferences';

interface PreferencesProps {
  preferences: PreferencesState;
  onChange: (next: PreferencesState) => void;
  onBack: () => void;
}

export default function Preferences({ preferences, onChange, onBack }: PreferencesProps) {
  const themeLabel = useMemo(() => (preferences.theme === 'dark' ? 'Dark' : 'Light'), [preferences.theme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <span className="text-sm font-medium">Back</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-pink-300">PREFERENCES</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Theme</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Choose a look that feels right: currently{' '}
              <span className="font-semibold text-gray-900 dark:text-white">{themeLabel}</span>.
            </p>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => onChange({ ...preferences, theme: 'dark' })}
                className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                  preferences.theme === 'dark'
                    ? 'border-pink-300 text-pink-300 bg-pink-300/10'
                    : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:border-gray-600'
                }`}
              >
                Dark
              </button>
              <button
                onClick={() => onChange({ ...preferences, theme: 'light' })}
                className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                  preferences.theme === 'light'
                    ? 'border-pink-300 text-pink-300 bg-pink-300/10'
                    : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:border-gray-600'
                }`}
              >
                Light
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Workout Defaults</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Pick what you see when you enter your workout.</p>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => onChange({ ...preferences, defaultLocation: 'gym' })}
                className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                  preferences.defaultLocation === 'gym'
                    ? 'border-pink-300 text-pink-300 bg-pink-300/10'
                    : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:border-gray-600'
                }`}
              >
                Gym
              </button>
              <button
                onClick={() => onChange({ ...preferences, defaultLocation: 'home' })}
                className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                  preferences.defaultLocation === 'home'
                    ? 'border-pink-300 text-pink-300 bg-pink-300/10'
                    : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:border-gray-600'
                }`}
              >
                Home
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

