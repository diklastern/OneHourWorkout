import type { Exercise, WorkoutCategory, Location, WorkoutPlan, WorkoutVariant } from '../types/workout';

function buildPool(base: Record<WorkoutCategory, Record<Location, WorkoutVariant>>): Record<string, Exercise> {
  const pool: Record<string, Exercise> = {};
  for (const category of Object.keys(base) as WorkoutCategory[]) {
    for (const location of Object.keys(base[category]) as Location[]) {
      for (const exercise of base[category][location].exercises) {
        pool[exercise.name] = exercise;
      }
    }
  }
  return pool;
}

function mapExercises(
  base: WorkoutVariant,
  pool: Record<string, Exercise>,
  replacements: Record<string, string>
): WorkoutVariant {
  return {
    ...base,
    exercises: base.exercises.map((exercise) => {
      const replacementName = replacements[exercise.name];
      const replacement = replacementName ? pool[replacementName] : undefined;
      return replacement ?? exercise;
    }),
  };
}

function makeWorkoutPlan(
  base: WorkoutVariant,
  pool: Record<string, Exercise>,
  variant1Replacements: Record<string, string>,
  variant2Replacements: Record<string, string>
): WorkoutPlan {
  return {
    variants: [
      base,
      mapExercises(base, pool, variant1Replacements),
      mapExercises(base, pool, variant2Replacements),
    ],
  };
}

export function createWorkoutData(
  baseWorkoutData: Record<WorkoutCategory, Record<Location, WorkoutVariant>>,
  variant1Replacements: Record<string, string>,
  variant2Replacements: Record<string, string>
): Record<WorkoutCategory, Record<Location, WorkoutPlan>> {
  const pool = buildPool(baseWorkoutData);
  return {
    upper: {
      gym: makeWorkoutPlan(baseWorkoutData.upper.gym, pool, variant1Replacements, variant2Replacements),
      home: makeWorkoutPlan(baseWorkoutData.upper.home, pool, variant1Replacements, variant2Replacements),
    },
    lower: {
      gym: makeWorkoutPlan(baseWorkoutData.lower.gym, pool, variant1Replacements, variant2Replacements),
      home: makeWorkoutPlan(baseWorkoutData.lower.home, pool, variant1Replacements, variant2Replacements),
    },
    full: {
      gym: makeWorkoutPlan(baseWorkoutData.full.gym, pool, variant1Replacements, variant2Replacements),
      home: makeWorkoutPlan(baseWorkoutData.full.home, pool, variant1Replacements, variant2Replacements),
    },
  };
}
