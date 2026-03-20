import { Exercise, WorkoutPlan, WorkoutVariant, WorkoutCategory, Location } from '../types/workout';

const baseWorkoutData: Record<WorkoutCategory, Record<Location, WorkoutVariant>> = {
  upper: {
    gym: {
      exercises: [
        {
          name: 'Barbell Bench Press',
          targetMuscle: 'Chest, Triceps, Shoulders',
          setsReps: '4 sets of 8-10 reps',
          proTip: 'Keep your shoulder blades retracted and feet flat on the floor. Lower the bar to mid-chest with control.',
        },
        {
          name: 'Cable Rows',
          targetMuscle: 'Back, Biceps',
          setsReps: '4 sets of 10-12 reps',
          proTip: 'Pull towards your lower abdomen, squeeze shoulder blades together at peak contraction.',
        },
        {
          name: 'Overhead Press',
          targetMuscle: 'Shoulders, Triceps',
          setsReps: '3 sets of 8-10 reps',
          proTip: 'Press straight up, keeping core tight. Avoid excessive back arch.',
        },
        {
          name: 'Lat Pulldown',
          targetMuscle: 'Lats, Biceps',
          setsReps: '3 sets of 10-12 reps',
          proTip: 'Pull the bar to upper chest, lean back slightly, and focus on pulling with your elbows.',
        },
        {
          name: 'Dumbbell Bicep Curls',
          targetMuscle: 'Biceps',
          setsReps: '3 sets of 12 reps',
          proTip: 'Keep elbows stationary at your sides. Avoid swinging or using momentum.',
        },
        {
          name: 'Tricep Rope Pushdowns',
          targetMuscle: 'Triceps',
          setsReps: '3 sets of 12-15 reps',
          proTip: 'Keep elbows tucked close to your body. Fully extend at the bottom and squeeze.',
        },
        {
          name: 'Cable Lateral Raises',
          targetMuscle: 'Side Delts',
          setsReps: '3 sets of 12-15 reps',
          proTip: 'Raise arms to shoulder height with a slight bend in elbows. Lead with your elbows, not hands.',
        },
        {
          name: 'Face Pulls',
          targetMuscle: 'Rear Delts, Upper Back',
          setsReps: '3 sets of 15 reps',
          proTip: 'Pull rope towards your face, externally rotating shoulders. Great for posture and shoulder health.',
        },
      ],
      stretches: [
        {
          name: 'Doorway Chest Stretch',
          duration: '45 seconds each side',
          description: 'Place forearm on doorframe and gently turn body away to stretch chest and front shoulders.',
        },
        {
          name: 'Cross-Body Shoulder Stretch',
          duration: '30 seconds each arm',
          description: 'Pull one arm across your chest with the opposite hand, keeping shoulders relaxed.',
        },
        {
          name: 'Overhead Tricep Stretch',
          duration: '30 seconds each arm',
          description: 'Reach one arm overhead and bend at elbow, use other hand to gently pull elbow back.',
        },
      ],
      coolDown: '10-minute incline walk at 3.5 mph, 5% incline',
    },
    home: {
      exercises: [
        {
          name: 'Push-Ups',
          targetMuscle: 'Chest, Triceps, Shoulders',
          setsReps: '4 sets of 12-15 reps',
          proTip: 'Keep body in straight line from head to heels. Lower chest to ground with control.',
        },
        {
          name: 'Dumbbell Rows',
          targetMuscle: 'Back, Biceps',
          setsReps: '4 sets of 10-12 reps each arm',
          proTip: 'Support yourself on a bench or chair. Pull dumbbell to hip, keeping elbow close to body.',
        },
        {
          name: 'Dumbbell Shoulder Press',
          targetMuscle: 'Shoulders, Triceps',
          setsReps: '3 sets of 10-12 reps',
          proTip: 'Press dumbbells overhead until arms are fully extended. Control the descent.',
        },
        {
          name: 'Pull-Ups or Resistance Band Pulldowns',
          targetMuscle: 'Lats, Biceps',
          setsReps: '3 sets of 8-10 reps',
          proTip: 'If doing pull-ups, use full range of motion. For bands, anchor high and pull to chest.',
        },
        {
          name: 'Dumbbell Hammer Curls',
          targetMuscle: 'Biceps, Forearms',
          setsReps: '3 sets of 12 reps',
          proTip: 'Keep palms facing each other throughout. Control the weight on the way down.',
        },
        {
          name: 'Dumbbell Overhead Tricep Extension',
          targetMuscle: 'Triceps',
          setsReps: '3 sets of 12-15 reps',
          proTip: 'Hold one dumbbell overhead with both hands. Lower behind head, keeping elbows stationary.',
        },
        {
          name: 'Dumbbell Lateral Raises',
          targetMuscle: 'Side Delts',
          setsReps: '3 sets of 12-15 reps',
          proTip: 'Raise arms to shoulder height with slight bend. Pour the water pitcher at the top.',
        },
        {
          name: 'Pike Push-Ups',
          targetMuscle: 'Shoulders, Upper Chest',
          setsReps: '3 sets of 10-12 reps',
          proTip: 'Start in downward dog position. Lower head towards ground between hands.',
        },
      ],
      stretches: [
        {
          name: 'Doorway Chest Stretch',
          duration: '45 seconds each side',
          description: 'Place forearm on doorframe and gently turn body away to stretch chest and front shoulders.',
        },
        {
          name: 'Cross-Body Shoulder Stretch',
          duration: '30 seconds each arm',
          description: 'Pull one arm across your chest with the opposite hand, keeping shoulders relaxed.',
        },
        {
          name: 'Overhead Tricep Stretch',
          duration: '30 seconds each arm',
          description: 'Reach one arm overhead and bend at elbow, use other hand to gently pull elbow back.',
        },
      ],
      coolDown: '10-minute outdoor walk or jog in place',
    },
  },
  lower: {
    gym: {
      exercises: [
        {
          name: 'Barbell Back Squats',
          targetMuscle: 'Quads, Glutes, Hamstrings',
          setsReps: '4 sets of 8-10 reps',
          proTip: 'Keep chest up, knees tracking over toes. Descend until thighs are parallel or below.',
        },
        {
          name: 'Romanian Deadlifts',
          targetMuscle: 'Hamstrings, Glutes, Lower Back',
          setsReps: '4 sets of 10-12 reps',
          proTip: 'Keep knees slightly bent, push hips back. Feel the stretch in hamstrings, not lower back.',
        },
        {
          name: 'Leg Press',
          targetMuscle: 'Quads, Glutes',
          setsReps: '3 sets of 12-15 reps',
          proTip: 'Feet shoulder-width apart. Lower until knees reach 90 degrees, press through heels.',
        },
        {
          name: 'Walking Lunges',
          targetMuscle: 'Quads, Glutes, Hamstrings',
          setsReps: '3 sets of 10 reps per leg',
          proTip: 'Step far enough forward so front knee doesn\'t pass toes. Keep torso upright.',
        },
        {
          name: 'Leg Curls',
          targetMuscle: 'Hamstrings',
          setsReps: '3 sets of 12-15 reps',
          proTip: 'Curl heels towards glutes, squeeze at the top. Control the eccentric phase.',
        },
        {
          name: 'Calf Raises',
          targetMuscle: 'Calves',
          setsReps: '4 sets of 15-20 reps',
          proTip: 'Full range of motion - stretch at bottom, rise as high as possible on toes.',
        },
        {
          name: 'Bulgarian Split Squats',
          targetMuscle: 'Quads, Glutes',
          setsReps: '3 sets of 10 reps per leg',
          proTip: 'Rear foot elevated on bench. Front knee stays behind toes as you lower down.',
        },
        {
          name: 'Glute Kickbacks',
          targetMuscle: 'Glutes',
          setsReps: '3 sets of 15 reps per leg',
          proTip: 'Keep core tight and back neutral. Squeeze glute at top of movement.',
        },
      ],
      stretches: [
        {
          name: 'Standing Quad Stretch',
          duration: '45 seconds each leg',
          description: 'Pull foot towards glutes while standing. Keep knees together and hips forward.',
        },
        {
          name: 'Seated Hamstring Stretch',
          duration: '60 seconds',
          description: 'Sit with legs extended, reach towards toes. Keep back straight and feel stretch in hamstrings.',
        },
        {
          name: 'Pigeon Pose',
          duration: '45 seconds each side',
          description: 'Great for hip flexors and glutes. Front leg bent, back leg extended behind.',
        },
      ],
      coolDown: '10-minute incline walk at 3.0 mph, 8% incline',
    },
    home: {
      exercises: [
        {
          name: 'Bodyweight Squats',
          targetMuscle: 'Quads, Glutes, Hamstrings',
          setsReps: '4 sets of 20 reps',
          proTip: 'Arms extended forward for balance. Go as deep as flexibility allows with good form.',
        },
        {
          name: 'Single-Leg Romanian Deadlifts',
          targetMuscle: 'Hamstrings, Glutes, Core',
          setsReps: '4 sets of 10 reps per leg',
          proTip: 'Hold dumbbells or use bodyweight. Hinge at hips, keep back straight, rear leg extends back.',
        },
        {
          name: 'Goblet Squats',
          targetMuscle: 'Quads, Glutes',
          setsReps: '3 sets of 15 reps',
          proTip: 'Hold dumbbell at chest. Squat deep, elbows track inside knees.',
        },
        {
          name: 'Reverse Lunges',
          targetMuscle: 'Quads, Glutes, Hamstrings',
          setsReps: '3 sets of 12 reps per leg',
          proTip: 'Step backward and lower until both knees at 90 degrees. Easier on knees than forward lunges.',
        },
        {
          name: 'Glute Bridges',
          targetMuscle: 'Glutes, Hamstrings',
          setsReps: '4 sets of 15-20 reps',
          proTip: 'Squeeze glutes at top, hold for 2 seconds. Add dumbbell on hips for extra resistance.',
        },
        {
          name: 'Standing Calf Raises',
          targetMuscle: 'Calves',
          setsReps: '4 sets of 20 reps',
          proTip: 'Use step for greater range. Can hold dumbbells for added resistance.',
        },
        {
          name: 'Step-Ups',
          targetMuscle: 'Quads, Glutes',
          setsReps: '3 sets of 12 reps per leg',
          proTip: 'Use sturdy chair or box. Drive through heel of elevated foot, stand fully at top.',
        },
        {
          name: 'Wall Sit',
          targetMuscle: 'Quads, Glutes',
          setsReps: '3 sets of 45-60 seconds',
          proTip: 'Back flat against wall, thighs parallel to ground. Breathe steadily throughout.',
        },
      ],
      stretches: [
        {
          name: 'Standing Quad Stretch',
          duration: '45 seconds each leg',
          description: 'Pull foot towards glutes while standing. Keep knees together and hips forward.',
        },
        {
          name: 'Seated Hamstring Stretch',
          duration: '60 seconds',
          description: 'Sit with legs extended, reach towards toes. Keep back straight and feel stretch in hamstrings.',
        },
        {
          name: 'Pigeon Pose',
          duration: '45 seconds each side',
          description: 'Great for hip flexors and glutes. Front leg bent, back leg extended behind.',
        },
      ],
      coolDown: '10-minute light walk or march in place',
    },
  },
  full: {
    gym: {
      exercises: [
        {
          name: 'Barbell Deadlifts',
          targetMuscle: 'Full Posterior Chain',
          setsReps: '4 sets of 6-8 reps',
          proTip: 'Keep bar close to body, chest up, drive through heels. The king of all exercises.',
        },
        {
          name: 'Incline Dumbbell Press',
          targetMuscle: 'Upper Chest, Shoulders',
          setsReps: '3 sets of 10-12 reps',
          proTip: 'Bench at 30-45 degrees. Press dumbbells up and slightly together at top.',
        },
        {
          name: 'Front Squats',
          targetMuscle: 'Quads, Core, Upper Back',
          setsReps: '4 sets of 8-10 reps',
          proTip: 'Bar rests on front delts. Keep elbows high, core tight. More quad-dominant than back squats.',
        },
        {
          name: 'Pull-Ups',
          targetMuscle: 'Lats, Biceps, Core',
          setsReps: '3 sets of 8-10 reps',
          proTip: 'Full hang at bottom, pull chin over bar. Use assistance machine if needed.',
        },
        {
          name: 'Dumbbell Arnold Press',
          targetMuscle: 'All Three Deltoid Heads',
          setsReps: '3 sets of 10-12 reps',
          proTip: 'Start with palms facing you, rotate as you press overhead. Great for shoulder development.',
        },
        {
          name: 'Cable Wood Chops',
          targetMuscle: 'Core, Obliques',
          setsReps: '3 sets of 12 reps per side',
          proTip: 'Rotate through torso, not just arms. Great for functional core strength.',
        },
        {
          name: 'Walking Dumbbell Lunges',
          targetMuscle: 'Legs, Glutes, Core',
          setsReps: '3 sets of 10 reps per leg',
          proTip: 'Hold dumbbells at sides. Step forward with control, alternating legs.',
        },
        {
          name: 'Plank to Push-Up',
          targetMuscle: 'Core, Chest, Shoulders',
          setsReps: '3 sets of 10 reps',
          proTip: 'Start in plank, push up to high plank position one arm at a time. Keep hips stable.',
        },
      ],
      stretches: [
        {
          name: 'Cat-Cow Stretch',
          duration: '60 seconds',
          description: 'On hands and knees, alternate between arching and rounding spine. Great for full spine mobility.',
        },
        {
          name: 'World\'s Greatest Stretch',
          duration: '45 seconds each side',
          description: 'Lunge position, hand to ground, rotate torso and reach up. Stretches everything.',
        },
        {
          name: 'Child\'s Pose',
          duration: '60 seconds',
          description: 'Sit back on heels, arms extended forward. Relaxes shoulders, back, and hips.',
        },
      ],
      coolDown: '10-minute light cardio of your choice (walk, bike, row)',
    },
    home: {
      exercises: [
        {
          name: 'Burpees',
          targetMuscle: 'Full Body, Cardio',
          setsReps: '4 sets of 12 reps',
          proTip: 'Drop to plank, push-up, jump feet to hands, jump up. Modify by stepping instead of jumping.',
        },
        {
          name: 'Dumbbell Thrusters',
          targetMuscle: 'Legs, Shoulders, Core',
          setsReps: '3 sets of 12-15 reps',
          proTip: 'Squat with dumbbells at shoulders, press overhead as you stand. Explosive movement.',
        },
        {
          name: 'Renegade Rows',
          targetMuscle: 'Back, Core, Shoulders',
          setsReps: '3 sets of 10 reps per arm',
          proTip: 'In push-up position with dumbbells, row one arm at a time. Keep hips stable.',
        },
        {
          name: 'Jump Squats',
          targetMuscle: 'Legs, Glutes, Power',
          setsReps: '3 sets of 15 reps',
          proTip: 'Squat down, explode up into a jump. Land softly and immediately go into next rep.',
        },
        {
          name: 'Push-Up to T-Rotation',
          targetMuscle: 'Chest, Core, Shoulders',
          setsReps: '3 sets of 10 reps per side',
          proTip: 'After each push-up, rotate body and extend arm up to ceiling. Great for core stability.',
        },
        {
          name: 'Mountain Climbers',
          targetMuscle: 'Core, Shoulders, Cardio',
          setsReps: '4 sets of 30 seconds',
          proTip: 'Plank position, drive knees to chest alternating. Keep hips level and core tight.',
        },
        {
          name: 'Dumbbell Step-Ups with Press',
          targetMuscle: 'Legs, Shoulders',
          setsReps: '3 sets of 10 reps per leg',
          proTip: 'Step up onto box/chair, press dumbbells overhead at top. Compound movement for efficiency.',
        },
        {
          name: 'Plank Jacks',
          targetMuscle: 'Core, Cardio',
          setsReps: '3 sets of 20 reps',
          proTip: 'In plank position, jump feet apart and together. Keep hips stable and core engaged.',
        },
      ],
      stretches: [
        {
          name: 'Cat-Cow Stretch',
          duration: '60 seconds',
          description: 'On hands and knees, alternate between arching and rounding spine. Great for full spine mobility.',
        },
        {
          name: 'World\'s Greatest Stretch',
          duration: '45 seconds each side',
          description: 'Lunge position, hand to ground, rotate torso and reach up. Stretches everything.',
        },
        {
          name: 'Child\'s Pose',
          duration: '60 seconds',
          description: 'Sit back on heels, arms extended forward. Relaxes shoulders, back, and hips.',
        },
      ],
      coolDown: '10-minute walk or light jog in place',
    },
  },
};

const exercisePool: Record<string, Exercise> = {};
for (const category of Object.keys(baseWorkoutData) as WorkoutCategory[]) {
  for (const location of Object.keys(baseWorkoutData[category]) as Location[]) {
    for (const exercise of baseWorkoutData[category][location].exercises) {
      exercisePool[exercise.name] = exercise;
    }
  }
}

// Replacement maps for auto-generated variants.
// If a key is missing or a replacement name can't be found, we fall back to the original exercise.
const variant1Replacements: Record<string, string> = {
  'Barbell Bench Press': 'Incline Dumbbell Press',
  'Cable Rows': 'Renegade Rows',
  'Overhead Press': 'Dumbbell Arnold Press',
  'Lat Pulldown': 'Pull-Ups or Resistance Band Pulldowns',
  'Dumbbell Bicep Curls': 'Dumbbell Hammer Curls',
  'Tricep Rope Pushdowns': 'Dumbbell Overhead Tricep Extension',
  'Cable Lateral Raises': 'Face Pulls',
  'Face Pulls': 'Dumbbell Lateral Raises',

  'Push-Ups': 'Pike Push-Ups',
  'Dumbbell Rows': 'Cable Rows',
  'Dumbbell Shoulder Press': 'Overhead Press',
  'Pull-Ups or Resistance Band Pulldowns': 'Lat Pulldown',
  'Dumbbell Hammer Curls': 'Dumbbell Bicep Curls',
  'Dumbbell Overhead Tricep Extension': 'Tricep Rope Pushdowns',
  'Dumbbell Lateral Raises': 'Cable Lateral Raises',
  'Pike Push-Ups': 'Push-Ups',

  'Barbell Back Squats': 'Goblet Squats',
  'Romanian Deadlifts': 'Single-Leg Romanian Deadlifts',
  'Leg Press': 'Step-Ups',
  'Walking Lunges': 'Reverse Lunges',
  'Leg Curls': 'Glute Bridges',
  'Calf Raises': 'Standing Calf Raises',
  'Bulgarian Split Squats': 'Wall Sit',
  'Glute Kickbacks': 'Glute Bridges',

  'Bodyweight Squats': 'Leg Press',
  'Single-Leg Romanian Deadlifts': 'Romanian Deadlifts',
  'Goblet Squats': 'Barbell Back Squats',
  'Reverse Lunges': 'Walking Lunges',
  'Glute Bridges': 'Glute Kickbacks',
  'Standing Calf Raises': 'Calf Raises',
  'Step-Ups': 'Bulgarian Split Squats',
  'Wall Sit': 'Leg Curls',

  'Barbell Deadlifts': 'Romanian Deadlifts',
  'Incline Dumbbell Press': 'Push-Ups',
  'Front Squats': 'Barbell Back Squats',
  'Pull-Ups': 'Lat Pulldown',
  'Dumbbell Arnold Press': 'Overhead Press',
  'Cable Wood Chops': 'Cable Rows',
  'Walking Dumbbell Lunges': 'Walking Lunges',
  'Plank to Push-Up': 'Push-Up to T-Rotation',

  'Burpees': 'Jump Squats',
  'Dumbbell Thrusters': 'Front Squats',
  'Renegade Rows': 'Cable Wood Chops',
  'Jump Squats': 'Burpees',
  'Push-Up to T-Rotation': 'Plank to Push-Up',
  'Mountain Climbers': 'Plank Jacks',
  'Dumbbell Step-Ups with Press': 'Step-Ups',
  'Plank Jacks': 'Mountain Climbers',
};

const variant2Replacements: Record<string, string> = {
  'Barbell Bench Press': 'Pike Push-Ups',
  'Cable Rows': 'Dumbbell Rows',
  'Overhead Press': 'Dumbbell Shoulder Press',
  'Lat Pulldown': 'Pull-Ups',
  'Dumbbell Bicep Curls': 'Dumbbell Hammer Curls',
  'Tricep Rope Pushdowns': 'Dumbbell Overhead Tricep Extension',
  'Cable Lateral Raises': 'Dumbbell Lateral Raises',
  'Face Pulls': 'Cable Lateral Raises',

  'Push-Ups': 'Dumbbell Rows',
  'Dumbbell Rows': 'Renegade Rows',
  'Dumbbell Shoulder Press': 'Overhead Press',
  'Pull-Ups or Resistance Band Pulldowns': 'Pull-Ups',
  'Dumbbell Hammer Curls': 'Dumbbell Bicep Curls',
  'Dumbbell Overhead Tricep Extension': 'Tricep Rope Pushdowns',
  'Dumbbell Lateral Raises': 'Face Pulls',
  'Pike Push-Ups': 'Plank to Push-Up',

  'Barbell Back Squats': 'Front Squats',
  'Romanian Deadlifts': 'Glute Bridges',
  'Leg Press': 'Wall Sit',
  'Walking Lunges': 'Walking Dumbbell Lunges',
  'Leg Curls': 'Glute Kickbacks',
  'Calf Raises': 'Standing Calf Raises',
  'Bulgarian Split Squats': 'Step-Ups',
  'Glute Kickbacks': 'Leg Curls',

  'Bodyweight Squats': 'Goblet Squats',
  'Single-Leg Romanian Deadlifts': 'Glute Kickbacks',
  'Goblet Squats': 'Leg Press',
  'Reverse Lunges': 'Walking Dumbbell Lunges',
  'Glute Bridges': 'Leg Curls',
  'Standing Calf Raises': 'Calf Raises',
  'Step-Ups': 'Wall Sit',
  'Wall Sit': 'Reverse Lunges',

  'Barbell Deadlifts': 'Barbell Back Squats',
  'Incline Dumbbell Press': 'Dumbbell Thrusters',
  'Front Squats': 'Goblet Squats',
  'Pull-Ups': 'Pull-Ups or Resistance Band Pulldowns',
  'Dumbbell Arnold Press': 'Dumbbell Shoulder Press',
  'Cable Wood Chops': 'Renegade Rows',
  'Walking Dumbbell Lunges': 'Reverse Lunges',
  'Plank to Push-Up': 'Plank Jacks',

  'Burpees': 'Mountain Climbers',
  'Dumbbell Thrusters': 'Goblet Squats',
  'Renegade Rows': 'Dumbbell Rows',
  'Jump Squats': 'Walking Lunges',
  'Push-Up to T-Rotation': 'Push-Ups',
  'Mountain Climbers': 'Plank Jacks',
  'Dumbbell Step-Ups with Press': 'Bulgarian Split Squats',
  'Plank Jacks': 'Plank to Push-Up',
};

function mapExercises(base: WorkoutVariant, replacements: Record<string, string>): WorkoutVariant {
  return {
    ...base,
    exercises: base.exercises.map((exercise) => {
      const replacementName = replacements[exercise.name];
      const replacement = replacementName ? exercisePool[replacementName] : undefined;
      return replacement ?? exercise;
    }),
  };
}

function makeWorkoutPlan(base: WorkoutVariant): WorkoutPlan {
  return {
    variants: [base, mapExercises(base, variant1Replacements), mapExercises(base, variant2Replacements)],
  };
}

export const workoutData: Record<WorkoutCategory, Record<Location, WorkoutPlan>> = {
  upper: {
    gym: makeWorkoutPlan(baseWorkoutData.upper.gym),
    home: makeWorkoutPlan(baseWorkoutData.upper.home),
  },
  lower: {
    gym: makeWorkoutPlan(baseWorkoutData.lower.gym),
    home: makeWorkoutPlan(baseWorkoutData.lower.home),
  },
  full: {
    gym: makeWorkoutPlan(baseWorkoutData.full.gym),
    home: makeWorkoutPlan(baseWorkoutData.full.home),
  },
};
