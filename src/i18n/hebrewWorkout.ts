import type { Exercise, Stretch, WorkoutVariant } from '../types/workout';

/** Maps English exercise names (from workout data) to native Hebrew copy (spoken gym Hebrew). */
export const exerciseHe: Record<
  string,
  { name: string; targetMuscle: string; setsReps: string; proTip: string }
> = {
  'Barbell Bench Press': {
    name: 'לחיצת חזה במוט',
    targetMuscle: 'חזה, טרייספס, כתפיים',
    setsReps: '4 סדרות של 8–10 חזרות',
    proTip: 'שכמות דחוסות לאחור, רגליים צמודות לרצפה, מניחים את המוט באמצע החזה בצורה רכה ומבוקרת.',
  },
  'Cable Rows': {
    name: 'חתירה בכבל',
    targetMuscle: 'גב, בייספס',
    setsReps: '4 סדרות של 10–12 חזרות',
    proTip: 'מושכים לכיוון הטבור, לוחצים שכמות יחד בראש התנועה.',
  },
  'Overhead Press': {
    name: 'לחיצת כתפיים מעל הראש',
    targetMuscle: 'כתפיים, טרייספס',
    setsReps: '3 סדרות של 8–10 חזרות',
    proTip: 'לוחצים ישר למעלה, בטן עובדת, בלי “קשת” מוגזמת בגב.',
  },
  'Lat Pulldown': {
    name: 'משיכת צמרות (פולדאון)',
    targetMuscle: 'גב רחב, בייספס',
    setsReps: '3 סדרות של 10–12 חזרות',
    proTip: 'מושכים את המוט לכיוון החזה העליון, מעט נטייה לאחור, חושבים “מרפקים למטה”.',
  },
  'Dumbbell Bicep Curls': {
    name: 'כפיפות יד קדמית בדאמבלים',
    targetMuscle: 'בייספס',
    setsReps: '3 סדרות של 12 חזרות',
    proTip: 'המרפקים נשארים ליד הגוף, בלי נדנוד ובלי “להעיף” את הדאמבלים.',
  },
  'Tricep Rope Pushdowns': {
    name: 'דחיפת חבל לטרייספס',
    targetMuscle: 'טרייספס',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'מרפקים צמודים לגוף, ישרות עד הסוף ואז כיווץ קטן של האגרוף החוצה.',
  },
  'Cable Lateral Raises': {
    name: 'הרמות צד בכבל',
    targetMuscle: 'כתף צדדית',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'מעלים עד בערך גובה הכתף, מרפקים עם קיפוף קל — לא מנופפים.',
  },
  'Face Pulls': {
    name: 'פייס פולס (משיכת חבל לפנים)',
    targetMuscle: 'כתף אחורית, גב עליון',
    setsReps: '3 סדרות של 15 חזרות',
    proTip: 'מושכים את החבל לכיוון האף/הלסת, מסיימים עם סיבוב קטן של האגרוף החוצה — מעולה לכתפיים וליציבה.',
  },
  'Push-Ups': {
    name: 'שכיבות סמיכה',
    targetMuscle: 'חזה, טרייספס, כתפיים',
    setsReps: '4 סדרות של 12–15 חזרות',
    proTip: 'גוף בקו אחד מכתפיים לעקבים, יורדים עד שהחזה בערך נוגע ברצפה.',
  },
  'Dumbbell Rows': {
    name: 'חתירה בדאמבלים',
    targetMuscle: 'גב, בייספס',
    setsReps: '4 סדרות של 10–12 חזרות לכל יד',
    proTip: 'תומכים ביד על הספסל, מושכים את הדאמבל לכיוון הירך — מרפק צמוד לגוף.',
  },
  'Dumbbell Shoulder Press': {
    name: 'לחיצת כתפיים בדאמבלים',
    targetMuscle: 'כתפיים, טרייספס',
    setsReps: '3 סדרות של 10–12 חזרות',
    proTip: 'לוחצים מעל הראש עד יישור, יורדים לאט ובשליטה.',
  },
  'Pull-Ups or Resistance Band Pulldowns': {
    name: 'מתח או משיכות בגומייה',
    targetMuscle: 'גב רחב, בייספס',
    setsReps: '3 סדרות של 8–10 חזרות',
    proTip: 'במתח — טווח מלא. בגומייה — עיגון גבוה ומושכים לכיוון החזה.',
  },
  'Dumbbell Hammer Curls': {
    name: 'פטישים בדאמבלים',
    targetMuscle: 'בייספס, שורש כף היד',
    setsReps: '3 סדרות של 12 חזרות',
    proTip: 'אחיזה ניטרלית (כפות פונות אחת לשנייה), יורדים לאט — לא מסובבים את כף היד לכפיפה רגילה.',
  },
  'Dumbbell Overhead Tricep Extension': {
    name: 'פשיטת טרייספס מאחורי הראש',
    targetMuscle: 'טרייספס',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'דאמבל אחד בשתי ידיים מעל הראש, מורידים מאחורי הראש בלי לפתוח מרפקים לצדדים.',
  },
  'Dumbbell Lateral Raises': {
    name: 'הרמות צד בדאמבלים',
    targetMuscle: 'כתף צדדית',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'מעט כיפוף במרפקים, מעלים בצורה נקייה — בלי להשתמש במומנטום.',
  },
  'Pike Push-Ups': {
    name: 'שכיבות סמיכה בפיק',
    targetMuscle: 'כתפיים, חזה עליון',
    setsReps: '3 סדרות של 10–12 חזרות',
    proTip: 'מתחילים מפוזיציית משולש (ישבן למעלה), יורדים עם הראש בין הידיים.',
  },
  'Barbell Back Squats': {
    name: 'סקוואט גב במוט',
    targetMuscle: 'ירך קדמית, ישבן, שרירי ירך אחוריים',
    setsReps: '4 סדרות של 8–10 חזרות',
    proTip: 'חזה גבוה, ברכיים בכיוון אותו כיוון של אצבעות הרגליים, יורדים עד שאפשר לשמור גב נקי.',
  },
  'Romanian Deadlifts': {
    name: 'דדליפט רומני',
    targetMuscle: 'שרירי ירך אחוריים, ישבן, גב תחתון',
    setsReps: '4 סדרות של 10–12 חזרות',
    proTip: 'ברכיים כמעט נעולות, דוחפים ישבן אחורה, מרגישים מתיחה בחלק האחורי של הירך — לא כאב חד בגב.',
  },
  'Leg Press': {
    name: 'לחיצת רגליים',
    targetMuscle: 'ירך קדמית, ישבן',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'רגליים בערך ברוחב הכתפיים, יורדים עד שמקובל עליכם, דוחפים דרך כף הרגל כולה.',
  },
  'Walking Lunges': {
    name: 'לאנג׳ים בהליכה',
    targetMuscle: 'ירך קדמית, ישבן, שרירי ירך אחוריים',
    setsReps: '3 סדרות של 10 חזרות לכל רגל',
    proTip: 'צעד ארוך קדימה, ברך קדמית נשארת מעל כף הרגל — לא נופלים על בהונות.',
  },
  'Leg Curls': {
    name: 'כפיפות ברכיים (לישבן)',
    targetMuscle: 'שרירי ירך אחוריים',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'מושכים עקב לישבן, כיווץ בראש, יורדים לאט.',
  },
  'Calf Raises': {
    name: 'הרמות עקבים (מכונה)',
    targetMuscle: 'שוק',
    setsReps: '4 סדרות של 15–20 חזרות',
    proTip: 'טווח מלא — מתיחה למטה, עלייה גבוהה על קצות האצבעות.',
  },
  'Bulgarian Split Squats': {
    name: 'בולגריאן ספליט סקוואט',
    targetMuscle: 'ירך קדמית, ישבן',
    setsReps: '3 סדרות של 10 חזרות לכל רגל',
    proTip: 'רגל אחורית על הספסל, רוב המשקל על הרגל הקדמית, יורדים נקי בלי שהברך נסגרת פנימה.',
  },
  'Glute Kickbacks': {
    name: 'בעיטות ישבן בכבל',
    targetMuscle: 'ישבן',
    setsReps: '3 סדרות של 15 חזרות לכל רגל',
    proTip: 'בטן מחוזקת, גב יציב, כיווץ ישבן בלי “לקשת” את הגב.',
  },
  'Bodyweight Squats': {
    name: 'סקוואט משקל גוף',
    targetMuscle: 'ירך קדמית, ישבן, שרירי ירך אחוריים',
    setsReps: '4 סדרות של 20 חזרות',
    proTip: 'ידיים קדימה לשיווי משקל, יורדים כמה שטווח התנועה מאפשר בלי לעגל גב.',
  },
  'Single-Leg Romanian Deadlifts': {
    name: 'דדליפט רומני על רגל אחת',
    targetMuscle: 'שרירי ירך אחוריים, ישבן, ליבה',
    setsReps: '4 סדרות של 10 חזרות לכל רגל',
    proTip: 'מקפלים מפרק ירך, גב נייטרלי, הרגל השנייה הולכת אחורה רק לאיזון.',
  },
  'Goblet Squats': {
    name: 'סקוואט גובלט (דאמבל מול החזה)',
    targetMuscle: 'ירך קדמית, ישבן',
    setsReps: '3 סדרות של 15 חזרות',
    proTip: 'מחזיקים דאמבל אחד מול החזה, יורדים עמוק, מרפקים נשארים בין הברכיים.',
  },
  'Reverse Lunges': {
    name: 'לאנג׳ים אחורה',
    targetMuscle: 'ירך קדמית, ישבן, שרירי ירך אחוריים',
    setsReps: '3 סדרות של 12 חזרות לכל רגל',
    proTip: 'צעד אחורה, שתי ברכיים כופפות ל-90 מעלות — לרוב נוח יותר על הברכיים מאשר לאנג׳ קדימה.',
  },
  'Glute Bridges': {
    name: 'גשר ישבן',
    targetMuscle: 'ישבן, שרירי ירך אחוריים',
    setsReps: '4 סדרות של 15–20 חזרות',
    proTip: 'דוחקים דרך העקבים, כיווץ ישבן בראש, אפשר לשים דאמבל על האגן.',
  },
  'Standing Calf Raises': {
    name: 'הרמות עקבים בעמידה',
    targetMuscle: 'שוק',
    setsReps: '4 סדרות של 20 חזרות',
    proTip: 'משטח מוגבה לטווח מלא, אפשר להחזיק דאמבלים.',
  },
  'Step-Ups': {
    name: 'סטפ-אפ (עליה לקופסה)',
    targetMuscle: 'ירך קדמית, ישבן',
    setsReps: '3 סדרות של 12 חזרות לכל רגל',
    proTip: 'קופסה/כיסא יציבים, דוחקים דרך כף הרגל שעל המשטח, עומדים מלאות בראש.',
  },
  'Wall Sit': {
    name: 'ישיבה בקיר',
    targetMuscle: 'ירך קדמית, ישבן',
    setsReps: '3 סדרות של 45–60 שניות',
    proTip: 'גב צמוד לקיר, ירכיים בגובה הברכיים, נשימה שקטה.',
  },
  'Barbell Deadlifts': {
    name: 'דדליפט במוט',
    targetMuscle: 'כל השרשרת האחורית',
    setsReps: '4 סדרות של 6–8 חזרות',
    proTip: 'המוט נשאר צמוד לגוף, חזה פתוח, דוחקים מהרגליים ואז פותחים ירכיים.',
  },
  'Incline Dumbbell Press': {
    name: 'לחיצת חזה בדאמבלים — ספסל משופע',
    targetMuscle: 'חזה עליון, כתפיים קדמיות',
    setsReps: '3 סדרות של 10–12 חזרות',
    proTip: 'ספסל בזווית בינונית (בערך 30°–45°), לוחצים מעלה ומסיימים עם הדאמבלים קרובים בלי להתנגש.',
  },
  'Front Squats': {
    name: 'סקוואט קדמי במוט',
    targetMuscle: 'ירך קדמית, ליבה, גב עליון',
    setsReps: '4 סדרות של 8–10 חזרות',
    proTip: 'המוט יושב נוח על הכתפיים הקדמיות, מרפקים גבוהים, בטן דחוסה.',
  },
  'Pull-Ups': {
    name: 'מתח',
    targetMuscle: 'גב רחב, בייספס, ליבה',
    setsReps: '3 סדרות של 8–10 חזרות',
    proTip: 'יורדים עד האנק מלא, מעלים עד שהסנטר בערך מעל המוט — אפשר עזר במכונה.',
  },
  'Dumbbell Arnold Press': {
    name: 'לחיצת ארנולד בדאמבלים',
    targetMuscle: 'כל ראשי הכתף',
    setsReps: '3 סדרות של 10–12 חזרות',
    proTip: 'מתחילים עם כפות פונות אליך, בזמן הלחיצה מסובבים החוצה.',
  },
  'Cable Wood Chops': {
    name: 'חיתוך אלכסוני בכבל (ווד צ׳ופ)',
    targetMuscle: 'ליבה, אלכסוני בטן',
    setsReps: '3 סדרות של 12 חזרות לכל צד',
    proTip: 'מסובבים מהירכיים והגזרה, לא רק מהידיים — לחץ קטן בברכיים, עבודה מהליבה.',
  },
  'Walking Dumbbell Lunges': {
    name: 'לאנג׳ים עם דאמבלים',
    targetMuscle: 'רגליים, ישבן, ליבה',
    setsReps: '3 סדרות של 10 חזרות לכל רגל',
    proTip: 'דאמבלים בצדדים, צעד קדימה ארוך, מתחלפים רגל — גוף יציב.',
  },
  'Plank to Push-Up': {
    name: 'מפלאנק לשכיבת סמיכה',
    targetMuscle: 'ליבה, חזה, כתפיים',
    setsReps: '3 סדרות של 10 חזרות',
    proTip: 'מתחילים בפלאנק, עולים יד אחר יד לפלאנק גבוה, הירכיים לא “נופלות”.',
  },
  'Burpees': {
    name: 'בורפי',
    targetMuscle: 'כל הגוף, אירובי',
    setsReps: '4 סדרות של 12 חזרות',
    proTip: 'יורדים לפלאנק, אופציונלי שכיבה, מביאים רגליים ליד הידיים, קימה — אפשר בלי קפיצה.',
  },
  'Dumbbell Thrusters': {
    name: 'ת׳רסטרים בדאמבלים',
    targetMuscle: 'רגליים, כתפיים, ליבה',
    setsReps: '3 סדרות של 12–15 חזרות',
    proTip: 'סקוואט עם דאמבלים בגובה כתף, בקימה לוחצים מעלה — תנועה אחת רציפה.',
  },
  'Renegade Rows': {
    name: 'חתירה בפלאנק (רנגייד)',
    targetMuscle: 'גב, ליבה, כתף',
    setsReps: '3 סדרות של 10 חזרות לכל יד',
    proTip: 'בפלאנק גבוה עם דאמבלים, מושכים דאמבל לצלע בלי לסובב את האגן.',
  },
  'Jump Squats': {
    name: 'סקוואט קפיצה',
    targetMuscle: 'רגליים, ישבן, עוצמה',
    setsReps: '3 סדרות של 15 חזרות',
    proTip: 'יורדים לסקוואט, קופצים למעלה, נוחתים רך ומיד ממשיכים.',
  },
  'Push-Up to T-Rotation': {
    name: 'שכיבת סמיכה וסיבוב לצד',
    targetMuscle: 'חזה, ליבה, כתף',
    setsReps: '3 סדרות של 10 חזרות לכל צד',
    proTip: 'אחרי שכיבה, פותחים לצד עם יד למעלה — הירכיים נשארות יציבות.',
  },
  'Mountain Climbers': {
    name: 'מטפס הרים',
    targetMuscle: 'ליבה, כתפיים, אירובי',
    setsReps: '4 סדרות של 30 שניות',
    proTip: 'בפלאנק, מביאים ברך לחזה לסירוגין בלי לקפוץ עם העכוז.',
  },
  'Dumbbell Step-Ups with Press': {
    name: 'סטפ-אפ עם לחיצת כתפיים',
    targetMuscle: 'רגליים, כתפיים',
    setsReps: '3 סדרות של 10 חזרות לכל רגל',
    proTip: 'עולים לקופסה בצורה נקייה, בראש התנועה לוחצים את הדאמבלים — רגל מובילה קבועה.',
  },
  'Plank Jacks': {
    name: 'פלאנק ג׳קים',
    targetMuscle: 'ליבה, אירובי',
    setsReps: '3 סדרות של 20 חזרות',
    proTip: 'בפלאנק, פותחים וסוגרים רגליים כמו ג׳אמפינג ג׳ק — בטן סגורה.',
  },
};

const stretchHe: Record<string, { name: string; duration: string; description: string }> = {
  'Doorway Chest Stretch': {
    name: 'מתיחת חזה בפתח',
    duration: '45 שניות לכל צד',
    description: 'מניחים את האמה על מסגרת הדלת ומסובבים את הגוף בעדינות החוצה.',
  },
  'Cross-Body Shoulder Stretch': {
    name: 'מתיחת כתף — חיבור לגוף',
    duration: '30 שניות לכל זרוע',
    description: 'מושכים זרוע אל מול החזה עם היד השנייה, כתף רפויה.',
  },
  'Overhead Tricep Stretch': {
    name: 'מתיחת טרייספס מאחורי הראש',
    duration: '30 שניות לכל זרוע',
    description: 'זרוע מעל הראש, קיפוף במרפק; היד השנייה עוזרת בעדינות.',
  },
  'Standing Quad Stretch': {
    name: 'מתיחת קוודריספס בעמידה',
    duration: '45 שניות לכל רגל',
    description: 'מושכים כף רגל לישבן, ברכיים צמודות, אגן קדימה.',
  },
  'Seated Hamstring Stretch': {
    name: 'מתיחת שרירי ירך אחוריים בישיבה',
    duration: '60 שניות',
    description: 'יושבים עם רגליים ישרות, ניגשים קדימה עם גב ישר — לא חובה “לגעת באצבעות”.',
  },
  'Pigeon Pose': {
    name: 'תנוחת יונה',
    duration: '45 שניות לכל צד',
    description: 'מתיחה טובה לירך ולישבן — רגל קדמית כפופה, האחורית מאחור.',
  },
  'Cat-Cow Stretch': {
    name: 'חתול–פרה (לגב)',
    duration: '60 שניות',
    description: 'על ארבע: מעגלים את הגב — קודם “עגול” (חתול), אחר כך “קשת” (פרה). זה מרגיש את הגב, לא “מתיחה” אחת ארוכה.',
  },
  "World's Greatest Stretch": {
    name: 'מתיחת פתיחה (World’s greatest)',
    duration: '45 שניות לכל צד',
    description: 'מתוך לאנג׳ קדימה — יד אחת על הרצפה, מסובבים את הגוף ופותחים את היד השנייה למעלה.',
  },
  "Child's Pose": {
    name: 'תנוחת ילד',
    duration: '60 שניות',
    description: 'יושבים על העקבים, ידיים ארוכות קדימה — נותנים לגב ולכתפיים להירגע.',
  },
};

const coolDownHe: Record<string, string> = {
  '10-minute incline walk at 3.5 mph, 5% incline': 'הליכה על הליכון בשיפוע — 10 דקות (בערך 5.5 קמ״ש, שיפוע 5%)',
  '10-minute outdoor walk or jog in place': 'הליכה בחוץ 10 דקות, או הליכה/ריצה קלה במקום',
  '10-minute incline walk at 3.0 mph, 8% incline': 'הליכה על הליכון בשיפוע — 10 דקות (בערך 4.8 קמ״ש, שיפוע 8%)',
  '10-minute light walk or march in place': 'הליכה קלה 10 דקות, או צעדים במקום',
  '10-minute light cardio of your choice (walk, bike, row)': '10 דקות אירובי קל לבחירה — הליכה, אופני כושר או חתירה',
  '10-minute walk or light jog in place': 'הליכה 10 דקות, או ריצה קלה במקום',
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
