import { useCallback, useEffect, useState } from 'react';
import Home from './components/Home';
import WorkoutView from './components/WorkoutView';
import Preferences from './components/Preferences';
import { WorkoutCategory } from './types/workout';
import { loadPreferences, savePreferences, type PreferencesState } from './services/preferences';
import { LanguageProvider } from './contexts/LanguageContext';
import type { AppLanguage } from './i18n/messages';

function App() {
  type Screen = 'home' | 'workout' | 'preferences';

  const [screen, setScreen] = useState<Screen>('home');
  const [returnTo, setReturnTo] = useState<Exclude<Screen, 'preferences'>>('home');
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutCategory | null>(null);
  const [preferences, setPreferences] = useState<PreferencesState>(() => loadPreferences());

  const setLanguage = useCallback((language: AppLanguage) => {
    setPreferences((p) => ({ ...p, language }));
  }, []);

  useEffect(() => {
    savePreferences(preferences);
  }, [preferences]);

  useEffect(() => {
    // Enables Tailwind dark mode utilities (configured in Tailwind settings).
    document.documentElement.classList.toggle('dark', preferences.theme === 'dark');
  }, [preferences.theme]);

  useEffect(() => {
    document.documentElement.lang = preferences.language === 'he' ? 'he' : 'en';
    document.documentElement.dir = preferences.language === 'he' ? 'rtl' : 'ltr';
  }, [preferences.language]);

  const handleSelectWorkout = (category: WorkoutCategory) => {
    setSelectedWorkout(category);
    setScreen('workout');
  };

  const handleBack = () => {
    setSelectedWorkout(null);
    setScreen('home');
  };

  const openPreferences = (from: Exclude<Screen, 'preferences'>) => {
    setReturnTo(from);
    setScreen('preferences');
  };

  const closePreferences = () => {
    if (returnTo === 'home') {
      setSelectedWorkout(null);
      setScreen('home');
      return;
    }

    setScreen('workout');
  };

  return (
    <LanguageProvider language={preferences.language} setLanguage={setLanguage}>
      {screen === 'home' && (
        <Home onSelectWorkout={handleSelectWorkout} onOpenPreferences={() => openPreferences('home')} />
      )}
      {screen === 'workout' && selectedWorkout && (
        <WorkoutView
          category={selectedWorkout}
          onBack={handleBack}
          defaultLocation={preferences.defaultLocation}
          onOpenPreferences={() => openPreferences('workout')}
        />
      )}
      {screen === 'preferences' && (
        <Preferences preferences={preferences} onChange={setPreferences} onBack={closePreferences} />
      )}
    </LanguageProvider>
  );
}

export default App;
