export interface Exercise {
  name: string;
  targetMuscle: string;
  setsReps: string;
  proTip: string;
}

export interface Stretch {
  name: string;
  duration: string;
  description: string;
}

export interface WorkoutVariant {
  exercises: Exercise[];
  stretches: Stretch[];
  coolDown: string;
}

export interface WorkoutPlan {
  variants: WorkoutVariant[];
}

export type WorkoutCategory = 'upper' | 'lower' | 'full';
export type Location = 'gym' | 'home';
