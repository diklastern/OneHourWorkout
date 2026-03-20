import { Dumbbell, Sparkles } from 'lucide-react';
import { WorkoutCategory } from '../types/workout';

interface HomeProps {
  onSelectWorkout: (category: WorkoutCategory) => void;
  onOpenPreferences: () => void;
}

export default function Home({ onSelectWorkout, onOpenPreferences }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md flex justify-end mb-8">
        <button
          onClick={onOpenPreferences}
          className="px-4 py-2 rounded-full text-sm font-semibold border-2 border-gray-200 text-gray-600 hover:text-gray-900 hover:border-pink-300 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white transition-all"
        >
          Preferences
        </button>
      </div>

      <div className="text-center mb-12 animate-fade-in">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-12 h-12 text-pink-400 mr-2" />
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
            ONE HOUR
          </h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 font-light tracking-wide">
          Your one-hour workout routine for women
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <button
          onClick={() => onSelectWorkout('upper')}
          className="group relative overflow-hidden bg-gradient-to-r from-gray-100 to-white hover:from-pink-500/20 hover:to-pink-400/10 border-2 border-gray-200 dark:border-gray-700 hover:border-pink-400 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-400/20 dark:from-gray-800 dark:to-gray-900"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-pink-400 transition-colors">
                Upper Body
              </h2>
              <Dumbbell className="w-8 h-8 text-pink-400 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-light">
              Chest, Back, Arms & Shoulders
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        <button
          onClick={() => onSelectWorkout('lower')}
          className="group relative overflow-hidden bg-gradient-to-r from-gray-100 to-white hover:from-rose-500/20 hover:to-rose-400/10 border-2 border-gray-200 dark:border-gray-700 hover:border-rose-400 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-400/20 dark:from-gray-800 dark:to-gray-900"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-rose-400 transition-colors">
                Lower Body
              </h2>
              <Dumbbell className="w-8 h-8 text-rose-400 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-light">
              Quads, Hamstrings, Glutes & Calves
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400/0 to-rose-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        <button
          onClick={() => onSelectWorkout('full')}
          className="group relative overflow-hidden bg-gradient-to-r from-gray-100 to-white hover:from-fuchsia-500/20 hover:to-fuchsia-400/10 border-2 border-gray-200 dark:border-gray-700 hover:border-fuchsia-400 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-400/20 dark:from-gray-800 dark:to-gray-900"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-fuchsia-400 transition-colors">
                Full Body
              </h2>
              <Dumbbell className="w-8 h-8 text-fuchsia-400 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-light">
              Complete Head-to-Toe Training
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400/0 to-fuchsia-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      <div className="mt-12 text-center text-gray-600 dark:text-gray-500 text-sm">
        <p className="font-light">60-minute structured workout routine</p>
      </div>
    </div>
  );
}
