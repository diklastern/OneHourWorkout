import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Home as HomeIcon, Dumbbell, CheckCircle2, Lightbulb, Flame, Wind } from 'lucide-react';
import { WorkoutCategory, Location } from '../types/workout';
import { workoutData } from '../data/workouts';
import { getRotationIndex, getRotationLabel } from '../utils/rotation';
import { translateWorkoutVariant } from '../i18n/hebrewWorkout';
import { useLanguage } from '../contexts/useLanguage';
import type { AppLanguage } from '../i18n/messages';

interface WorkoutViewProps {
  category: WorkoutCategory;
  onBack: () => void;
  defaultLocation: Location;
  onOpenPreferences: () => void;
}

export default function WorkoutView({ category, onBack, defaultLocation, onOpenPreferences }: WorkoutViewProps) {
  const { language, t, setLanguage } = useLanguage();
  const [location, setLocation] = useState<Location>(defaultLocation);
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());
  const rotationIndex = getRotationIndex();
  const rotationLabel = getRotationLabel(rotationIndex, language);

  useEffect(() => {
    setLocation(defaultLocation);
    setCompletedExercises(new Set());
  }, [defaultLocation]);

  useEffect(() => {
    setCompletedExercises(new Set());
  }, [location, rotationIndex]);

  const workout = useMemo(() => {
    const raw = workoutData[category][location].variants[rotationIndex];
    return language === 'he' ? translateWorkoutVariant(raw) : raw;
  }, [language, category, location, rotationIndex]);

  const toggleExercise = (index: number) => {
    const newCompleted = new Set(completedExercises);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompletedExercises(newCompleted);
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'upper':
        return { text: 'text-pink-400', border: 'border-pink-400', bg: 'bg-pink-400/10', accent: 'text-pink-400' };
      case 'lower':
        return { text: 'text-rose-400', border: 'border-rose-400', bg: 'bg-rose-400/10', accent: 'text-rose-400' };
      case 'full':
        return { text: 'text-fuchsia-400', border: 'border-fuchsia-400', bg: 'bg-fuchsia-400/10', accent: 'text-fuchsia-400' };
    }
  };

  const colors = getCategoryColor();
  const categoryTitle =
    category === 'upper' ? t('upperBody') : category === 'lower' ? t('lowerBody') : t('fullBody');

  const langToggle = (lang: AppLanguage, label: string) => (
    <button
      type="button"
      onClick={() => setLanguage(lang)}
      className={`px-2 py-1 text-xs font-bold rounded-md transition-colors ${
        language === lang
          ? 'bg-pink-300/15 text-pink-500 dark:text-pink-300'
          : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <ArrowLeft
                className={`w-5 h-5 ${language === 'he' ? 'scale-x-[-1]' : ''}`}
                aria-hidden
              />
              <span className="text-sm font-medium">{t('back')}</span>
            </button>
            <div className="flex items-center gap-2 flex-wrap justify-end">
              <div
                className="flex rounded-full border border-gray-200 dark:border-gray-700 overflow-hidden"
                role="group"
                aria-label={t('language')}
              >
                {langToggle('en', 'EN')}
                {langToggle('he', 'עב׳')}
              </div>
              <button
                onClick={onOpenPreferences}
                className="px-3 py-1.5 rounded-full text-sm font-semibold border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-pink-300 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white transition-all"
              >
                {t('preferences')}
              </button>
              <div className={`flex items-center gap-2 ${colors.text}`}>
                <Flame className="w-5 h-5" />
                <span className="text-sm font-bold">{t('min60')}</span>
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">{rotationLabel}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h1 className={`text-3xl font-black ${colors.text}`}>{categoryTitle}</h1>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
              <button
                onClick={() => setLocation('gym')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  location === 'gym'
                    ? `${colors.bg} ${colors.text}`
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                <Dumbbell className="w-4 h-4 inline me-1" />
                {t('gym')}
              </button>
              <button
                onClick={() => setLocation('home')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  location === 'home'
                    ? `${colors.bg} ${colors.text}`
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                <HomeIcon className="w-4 h-4 inline me-1" />
                {t('home')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Dumbbell className={`w-6 h-6 ${colors.text}`} />
            {t('yourWorkout')}
          </h2>
          <div className="space-y-4">
            {workout.exercises.map((exercise, index) => (
              <div
                key={index}
                className={`bg-gray-50/60 dark:bg-gray-800/50 border-2 rounded-xl p-5 transition-all hover:border-gray-600 dark:hover:border-gray-600 ${
                  completedExercises.has(index) ? 'border-gray-200 dark:border-gray-700 opacity-60' : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3
                        className={`text-xl font-bold ${
                          completedExercises.has(index)
                            ? 'text-gray-500 dark:text-gray-500 line-through'
                            : 'text-gray-900 dark:text-white'
                        }`}
                      >
                        {exercise.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{exercise.targetMuscle}</p>
                    <p className={`font-bold text-sm ${colors.text}`}>{exercise.setsReps}</p>
                  </div>
                  <button
                    onClick={() => toggleExercise(index)}
                    className="ms-4"
                  >
                    <CheckCircle2
                      className={`w-8 h-8 transition-all ${
                        completedExercises.has(index)
                          ? `${colors.text} fill-current`
                          : 'text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400'
                      }`}
                    />
                  </button>
                </div>
                <div className={`${colors.bg} border ${colors.border} rounded-lg p-3 mt-3`}>
                  <div className="flex items-start gap-2">
                    <Lightbulb className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                    <div>
                      <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">{t('coachTip')}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{exercise.proTip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Wind className={`w-6 h-6 ${colors.text}`} />
            {t('finishSection')}
          </h2>

          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{t('stretchingProtocol')}</h3>
            <div className="space-y-4">
              {workout.stretches.map((stretch, index) => (
                <div key={index} className="bg-gray-100/50 dark:bg-black/30 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-gray-900 dark:text-white font-semibold">{stretch.name}</h4>
                    <span className={`text-sm font-bold ${colors.text}`}>{stretch.duration}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{stretch.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 ${colors.border} rounded-xl p-6`}>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('coolDown')}</h3>
            <p className={`${colors.text} font-medium`}>{workout.coolDown}</p>
          </div>
        </section>

        <button
          onClick={onBack}
          className={`w-full ${colors.bg} border-2 ${colors.border} hover:bg-opacity-20 rounded-xl p-4 transition-all font-bold ${colors.text}`}
        >
          {t('backToHome')}
        </button>
      </div>
    </div>
  );
}
