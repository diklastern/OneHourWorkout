import type { Exercise, Stretch, WorkoutVariant } from '../types/workout';

/** Maps English exercise names (from workout data) to native Hebrew copy. */
export const exerciseHe: Record<
  string,
  { name: string; targetMuscle: string; setsReps: string; proTip: string }
> = {
  'Barbell Bench Press': {
    name: 'לחיצת חזה במוט',
    targetMuscle: 'חזה, טרייספס, כתפיים',
    setsReps: '4 סדרות של 8–10 חזרות',
    proTip: 'שמרו על כתפיים מאחור, רגליים יציבות, הורידו את המוט באופן מבוקר לאמצע החזה.',
  },
  'Cable Rows': {
    name: 'חתירה בכבל',
    targetMuscle: 'גב, בייספס',
    setsReps: '4 סדרות של 10–12 חזרות',
    proTip: 'משכו לכיוון הבטן התחתונה, כווצו את השכמות בפסגת התנועה.',
  },
  'Overhead Press': {
    name: 'לחיצת כתפיים מעל הראש',
    targetMuscle: 'כתפיים, טרייספס',
    setsReps: '3 סדרות של 8–10 חזרות',
    proTip: 'לחצו ישר למעלה, בטן מכווצת, הימנעו מקימור יתר בגב.',
  },
  'Lat Pulldown': {
    name: 'משיכת צמרות',
    targetMuscle: 'לטיסימוס, בייספס',
    setsReps: '3 סדרות של 10–12 חזרות',
    proTip: 'משכו את המוט לחזה העליון, קצת נטייה לאחור, משכו עם המרפקים.',
  },
  'Dumbbell Bicep Curls': {
    name: 'כפיפות בייספס בידונים',
    targetMuscle: 'בייספס',
    setsReps: '3 סדרות של 12 חזרות',
    proTip: 'המרפקים נשארים ליד הגוף, בלי נדנוד או מומנטום.',
  },
  'Tricep Rope Pushdowns': {
    name: 'דחיפת חבל לשלוש ראשית',
    targetMuscle: 'שלוש ראשית',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'המרפקים צמודים לגוף, יישור מלא למטה וכיווץ בסוף.',
  },
  'Cable Lateral Raises': {
    name: 'הרמות צד בכבל',
    targetMuscle: 'דלתא צדדי',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'הרימו עד גובה הכתפיים עם קיפוף קל במרפקים, הובילו עם המרפקים.',
  },
  'Face Pulls': {
    name: 'משיכת פנים',
    targetMuscle: 'דלתא אחורי, גב עליון',
    setsReps: '3 סדרות של 15 חזרות',
    proTip: 'משכו את החבל לכיוון הפנים, סיבוב חיצוני של הכתף — מצוין ליציבה.',
  },
  'Push-Ups': {
    name: 'שכיבות סמיכה',
    targetMuscle: 'חזה, טרייספס, כתפיים',
    setsReps: '4 סדרות של 12–15 חזרות',
    proTip: 'קו גוף ישר מראש עד עקבים, הורידו את החזה בצורה מבוקרת.',
  },
  'Dumbbell Rows': {
    name: 'חתירה בידונים',
    targetMuscle: 'גב, בייספס',
    setsReps: '4 סדרות של 10–12 חזרות לכל יד',
    proTip: 'תמיכה בספסל/כיסא, משכו את הידון לכיוון הירך, מרפק צמוד לגוף.',
  },
  'Dumbbell Shoulder Press': {
    name: 'לחיצת כתפיים בידונים',
    targetMuscle: 'כתפיים, טרייספס',
    setsReps: '3 סדרות של 10–12 חזרות',
    proTip: 'לחצו את הידונים מעל הראש עד יישור, הורידו בבקרה.',
  },
  'Pull-Ups or Resistance Band Pulldowns': {
    name: 'משיכות או משיכות בגומייה',
    targetMuscle: 'לטיסימוס, בייספס',
    setsReps: '3 סדרות של 8–10 חזרות',
    proTip: 'במשיכות — טווח מלא. בגומייה — עיגון גבוה ומשיכה לחזה.',
  },
  'Dumbbell Hammer Curls': {
    name: 'פטישים בידונים',
    targetMuscle: 'בייספס, אמהות',
    setsReps: '3 סדרות של 12 חזרות',
    proTip: 'כפות פונות פנימה לאורך כל התנועה, הורידו בבקרה.',
  },
  'Dumbbell Overhead Tricep Extension': {
    name: 'פשיטת שלוש ראשית מעל הראש',
    targetMuscle: 'שלוש ראשית',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'ידון אחד מעל הראש בשתי ידיים, הורידו מאחורי הראש, מרפקים יציבים.',
  },
  'Dumbbell Lateral Raises': {
    name: 'הרמות צד בידונים',
    targetMuscle: 'דלתא צדדי',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'הרמה עד גובה הכתפיים עם קיפוף קל, “מזיגה” קלה בקצה.',
  },
  'Pike Push-Ups': {
    name: 'שכיבות סמיכה בפייק',
    targetMuscle: 'כתפיים, חזה עליון',
    setsReps: '3 סדרות של 10–12 חזרות',
    proTip: 'מנקודת כלב מבטן, הורידו את הראש בין הידיים.',
  },
  'Barbell Back Squats': {
    name: 'סקוואט גב במוט',
    targetMuscle: 'קוודריספס, ישבן, המסטרינג',
    setsReps: '4 סדרות של 8–10 חזרות',
    proTip: 'חזה למעלה, ברכיים בקו עם אצבעות הרגליים, ירידה עד מקביל או מעט מתחת.',
  },
  'Romanian Deadlifts': {
    name: 'מתדלק רומני',
    targetMuscle: 'המסטרינג, ישבן, גב תחתון',
    setsReps: '4 סדרות של 10–12 חזרות',
    proTip: 'ברכיים קלות, דחיפת ירכיים אחורה, מתיחה בהמסטרינג בלי עומס על הגב התחתון.',
  },
  'Leg Press': {
    name: 'לחיצת רגליים',
    targetMuscle: 'קוודריספס, ישבן',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'רגליים בערך ברוחב הכתפיים, ירידה עד 90 מעלות בברך, דחיפה דרך העקבים.',
  },
  'Walking Lunges': {
    name: 'צעדי טיגון בהליכה',
    targetMuscle: 'קוודריספס, ישבן, המסטרינג',
    setsReps: '3 סדרות של 10 חזרות לכל רגל',
    proTip: 'צעד ארוך קדימה, ברך קדמית לא עוברת את קו האצבעות, גב זקוף.',
  },
  'Leg Curls': {
    name: 'כפיפות ברכיים',
    targetMuscle: 'המסטרינג',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'משכו את העקבים לישבן, כיווץ בראש, הורדה איטית.',
  },
  'Calf Raises': {
    name: 'הרמות עקבים (במכונה)',
    targetMuscle: 'שוקיים',
    setsReps: '4 סדרות של 15–20 חזרות',
    proTip: 'טווח מלא — מתיחה למטה, עלייה גבוהה על קצות האצבעות.',
  },
  'Bulgarian Split Squats': {
    name: 'סקוואט בולגרי',
    targetMuscle: 'קוודריספס, ישבן',
    setsReps: '3 סדרות של 10 חזרות לכל רגל',
    proTip: 'רגל אחורית על ספסל, ברך קדמית מאחורי קו האצבעות בירידה.',
  },
  'Glute Kickbacks': {
    name: 'בעיטות ישבן',
    targetMuscle: 'ישבן',
    setsReps: '3 סדרות של 15 חזרות לכל רגל',
    proTip: 'בטן מכווצת, גב נייטרלי, כיווץ ישבן בראש התנועה.',
  },
  'Bodyweight Squats': {
    name: 'סקוואט משקל גוף',
    targetMuscle: 'קוודריספס, ישבן, המסטרינג',
    setsReps: '4 סדרות של 20 חזרות',
    proTip: 'ידיים קדימה לאיזון, ירידה לפי טווח תנועה תוך שמירה על טכניקה.',
  },
  'Single-Leg Romanian Deadlifts': {
    name: 'מתדלק רומני רגל אחת',
    targetMuscle: 'המסטרינג, ישבן, ליבה',
    setsReps: '4 סדרות של 10 חזרות לכל רגל',
    proTip: 'קיפול ירכיים, גב ישר, הרגל האחורית נמתחת לאחור לאיזון.',
  },
  'Goblet Squats': {
    name: 'סקוואט גביע',
    targetMuscle: 'קוודריספס, ישבן',
    setsReps: '3 סדרות של 15 חזרות',
    proTip: 'החזיקו ידון/משקולת מול החזה, ירידה עמוקה, מרפקים בתוך הברכיים.',
  },
  'Reverse Lunges': {
    name: 'צעדי טיגון אחורה',
    targetMuscle: 'קוודריספס, ישבן, המסטרינג',
    setsReps: '3 סדרות של 12 חזרות לכל רגל',
    proTip: 'צעד אחורה וירידה ל-90 מעלות בברכיים — לעיתים נוח יותר לברכיים מאשר קדימה.',
  },
  'Glute Bridges': {
    name: 'גשר ישבן',
    targetMuscle: 'ישבן, המסטרינג',
    setsReps: '4 סדרות של 15–20 חזרות',
    proTip: 'כיווץ ישבן בראש, עצירה קצרה, אפשר להוסיף משקולת על האגן.',
  },
  'Standing Calf Raises': {
    name: 'הרמות עקבים בעמידה',
    targetMuscle: 'שוקיים',
    setsReps: '4 סדרות של 20 חזרות',
    proTip: 'משטח מוגבה לטווח מלא, אפשר להוסיף ידונים.',
  },
  'Step-Ups': {
    name: 'עליות על משטח',
    targetMuscle: 'קוודריספס, ישבן',
    setsReps: '3 סדרות של 12 חזרות לכל רגל',
    proTip: 'כיסא/קופסה יציבים, דחיפה דרך עקב הרגל המורמת, יישור מלא בראש.',
  },
  'Wall Sit': {
    name: 'ישיבה בקיר',
    targetMuscle: 'קוודריספס, ישבן',
    setsReps: '3 סדרות של 45–60 שניות',
    proTip: 'גב צמוד לקיר, ירכיים במקביל לרצפה, נשימה אחידה.',
  },
  'Barbell Deadlifts': {
    name: 'מתח מרגליים במוט',
    targetMuscle: 'שרשרת אחורית מלאה',
    setsReps: '4 סדרות של 6–8 חזרות',
    proTip: 'המוט צמוד לגוף, חזה למעלה, דחיפה דרך העקבים.',
  },
  'Incline Dumbbell Press': {
    name: 'לחיצת חזה בידונים בשיפוע',
    targetMuscle: 'חזה עליון, כתפיים',
    setsReps: '3 סדרות של 10–12 חזרות',
    proTip: 'ספסל בזווית 30°–45°, לחיצה מעלה ומעט פנימה בראש.',
  },
  'Front Squats': {
    name: 'סקוואט קדמי',
    targetMuscle: 'קוודריספס, ליבה, גב עליון',
    setsReps: '4 סדרות של 8–10 חזרות',
    proTip: 'המוט על הדלתא הקדמי, מרפקים גבוהים, בטן מחוזקת.',
  },
  'Pull-Ups': {
    name: 'משיכות',
    targetMuscle: 'לטיסימוס, בייספס, ליבה',
    setsReps: '3 סדרות של 8–10 חזרות',
    proTip: 'האנק מלא למטה, סנטר מעל המוט, ניתן להיעזר במכונה.',
  },
  'Dumbbell Arnold Press': {
    name: 'לחיצת ארנולד בידונים',
    targetMuscle: 'כל ראשי הדלתא',
    setsReps: '3 סדרות של 10–12 חזרות',
    proTip: 'מתחילים כפות פנימה, מסובבים בזמן הלחיצה למעלה.',
  },
  'Cable Wood Chops': {
    name: '“כריתת עץ” בכבל',
    targetMuscle: 'ליבה, אלכסונים',
    setsReps: '3 סדרות של 12 חזרות לכל צד',
    proTip: 'סיבוב מהמותן, לא רק מהידיים — כוח פונקציונלי.',
  },
  'Walking Dumbbell Lunges': {
    name: 'צעדי טיגון עם ידונים',
    targetMuscle: 'רגליים, ישבן, ליבה',
    setsReps: '3 סדרות של 10 חזרות לכל רגל',
    proTip: 'החזיקו ידונים בצדדים, צעד קדימה בבקרה, החלפת רגליים.',
  },
  'Plank to Push-Up': {
    name: 'פלאנק לשכיבת סמיכה',
    targetMuscle: 'ליבה, חזה, כתפיים',
    setsReps: '3 סדרות של 10 חזרות',
    proTip: 'מתחילים בפלאנק, עולים לפלאנק גבוה יד אחר יד, ירכיים יציבות.',
  },
  'Burpees': {
    name: 'בורפיז',
    targetMuscle: 'כל הגוף, אירובי',
    setsReps: '4 סדרות של 12 חזרות',
    proTip: 'פלאנק, שכיבה, קפיצת רגליים, קפיצה — אפשר גרסה עם צעדים בלי קפיצה.',
  },
  'Dumbbell Thrusters': {
    name: 'ת׳רסטרים בידונים',
    targetMuscle: 'רגליים, כתפיים, ליבה',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'סקוואט עם ידונים בכתפיים, לחיצה מעלה בקימה — תנועה חדה ורציפה.',
  },
  'Renegade Rows': {
    name: 'חתירות רנגייד',
    targetMuscle: 'גב, ליבה, כתפיים',
    setsReps: '3 סדרות של 10 חזרות לכל יד',
    proTip: 'בפלאנק עם ידונים, חתירה יד אחר יד, ירכיים ללא סיבוב.',
  },
  'Jump Squats': {
    name: 'סקוואט קפיצה',
    targetMuscle: 'רגליים, ישבן, פאוור',
    setsReps: '3 סדרות של 15 חזרות',
    proTip: 'ירידה לסקוואט, קפיצה למעלה, נחיתה רכה ומיד המשך.',
  },
  'Push-Up to T-Rotation': {
    name: 'שכיבת סמיכה לסיבוב',
    targetMuscle: 'חזה, ליבה, כתפיים',
    setsReps: '3 סדרות של 10 חזרות לכל צד',
    proTip: 'אחרי כל שכיבה, סיבוב גוף ויד למעלה — יציבות בגוף.',
  },
  'Mountain Climbers': {
    name: 'מטפסי הרים',
    targetMuscle: 'ליבה, כתפיים, אירובי',
    setsReps: '4 סדרות של 30 שניות',
    proTip: 'בפלאנק, ברכיים לחזה לסירוגין, ירכיים בגובה אחיד.',
  },
  'Dumbbell Step-Ups with Press': {
    name: 'עליות עם לחיצה',
    targetMuscle: 'רגליים, כתפיים',
    setsReps: '3 סדרות של 10 חזרות לכל רגל',
    proTip: 'עליה לקופסה/כיסא, לחיצת ידונים בראש — תנועה משולבת.',
  },
  'Plank Jacks': {
    name: 'פלאנק ג׳קים',
    targetMuscle: 'ליבה, אירובי',
    setsReps: '3 סדרות של 20 חזרות',
    proTip: 'בפלאנק, קפיצת רגליים פתיחה/סגירה, ליבה דחוסה.',
  },
};

const stretchHe: Record<string, { name: string; duration: string; description: string }> = {
  'Doorway Chest Stretch': {
    name: 'מתיחת חזה בפתח',
    duration: '45 שניות לכל צד',
    description: 'שימו אמה על מסגרת הדלת וסובבו את הגוף בעדינות החוצה.',
  },
  'Cross-Body Shoulder Stretch': {
    name: 'מתיחת כתף בחציית גוף',
    duration: '30 שניות לכל זרוע',
    description: 'משכו זרוע אחת אל מול החזה ביד השנייה, כתפיים רפויות.',
  },
  'Overhead Tricep Stretch': {
    name: 'מתיחת שלוש ראשית מעל הראש',
    duration: '30 שניות לכל זרוע',
    description: 'זרוע מעל הראש, קיפוף במרפק, היד השנייה דוחפת בעדינות לאחור.',
  },
  'Standing Quad Stretch': {
    name: 'מתיחת קוודריספס בעמידה',
    duration: '45 שניות לכל רגל',
    description: 'משכו את כף הרגל לישבן בעמידה, ברכיים צמודות, אגן קדימה.',
  },
  'Seated Hamstring Stretch': {
    name: 'מתיחת המסטרינג בישיבה',
    duration: '60 שניות',
    description: 'ישיבה עם רגליים ישרות, נסו להגיע לכיוון האצבעות — גב ישר.',
  },
  'Pigeon Pose': {
    name: 'תנוחת יונה',
    duration: '45 שניות לכל צד',
    description: 'מתיחה טובה למפרקי ירך ולישבן — רגל קדמית כפופה, אחורית מאחור.',
  },
  'Cat-Cow Stretch': {
    name: 'מתיחת חתול–פרה',
    duration: '60 שניות',
    description: 'על ארבע, לסירוגין עקומת גב ועגולת גב — ניידות לעמוד השדרה.',
  },
  "World's Greatest Stretch": {
    name: 'המתיחה “הכי טובה בעולם”',
    duration: '45 שניות לכל צד',
    description: 'בצעדי טיגון, יד לרצפה, סיבוב גוף והרמת יד למעלה.',
  },
  "Child's Pose": {
    name: 'תנוחת הילד',
    duration: '60 שניות',
    description: 'ישיבה על העקבים, ידיים מושטות קדימה — שחרור כתפיים וגב.',
  },
};

const coolDownHe: Record<string, string> = {
  '10-minute incline walk at 3.5 mph, 5% incline': 'הליכה בשיפוע 10 דקות (כ־5.5 קמ״ש, שיפוע 5%)',
  '10-minute outdoor walk or jog in place': 'הליכה בחוץ 10 דקות או ריצה במקום',
  '10-minute incline walk at 3.0 mph, 8% incline': 'הליכה בשיפוע 10 דקות (כ־4.8 קמ״ש, שיפוע 8%)',
  '10-minute light walk or march in place': 'הליכה קלה 10 דקות או צעדים במקום',
  '10-minute light cardio of your choice (walk, bike, row)': '10 דקות אירובי קל לבחירה (הליכה, אופניים, חתירה)',
  '10-minute walk or light jog in place': 'הליכה 10 דקות או ריצה קלה במקום',
};

function translateExercise(exercise: Exercise): Exercise {
  const tr = exerciseHe[exercise.name];
  if (!tr) return exercise;
  return { ...exercise, ...tr };
}

function translateStretch(s: Stretch): Stretch {
  const tr = stretchHe[s.name];
  if (!tr) return s;
  return {
    name: tr.name,
    duration: tr.duration,
    description: tr.description,
  };
}

export function translateWorkoutVariant(variant: WorkoutVariant): WorkoutVariant {
  return {
    ...variant,
    exercises: variant.exercises.map(translateExercise),
    stretches: variant.stretches.map(translateStretch),
    coolDown: coolDownHe[variant.coolDown] ?? variant.coolDown,
  };
}
