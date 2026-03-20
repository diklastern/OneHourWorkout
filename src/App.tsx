import { useEffect, useState } from 'react';
import Home from './components/Home';
import WorkoutView from './components/WorkoutView';
import Preferences from './components/Preferences';
import { WorkoutCategory } from './types/workout';
import { loadPreferences, savePreferences, type PreferencesState } from './services/preferences';

function App() {
  type Screen = 'home' | 'workout' | 'preferences';

  const [screen, setScreen] = useState<Screen>('home');
  const [returnTo, setReturnTo] = useState<Exclude<Screen, 'preferences'>>('home');
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutCategory | null>(null);
  const [preferences, setPreferences] = useState<PreferencesState>(() => loadPreferences());

  useEffect(() => {
    savePreferences(preferences);
  }, [preferences]);

  useEffect(() => {
    // Enables Tailwind dark mode utilities (configured in Tailwind settings).
    document.documentElement.classList.toggle('dark', preferences.theme === 'dark');
  }, [preferences.theme]);

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
    <>
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
    </>
  );
}

export default App;
