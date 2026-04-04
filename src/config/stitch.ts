/** Optional: set `VITE_STITCH_PROJECT_URL` in `.env` to show a “design reference” link (opens your Stitch project). */
export const STITCH_PROJECT_URL = import.meta.env.VITE_STITCH_PROJECT_URL?.trim() ?? '';

export function hasStitchProjectLink(): boolean {
  return STITCH_PROJECT_URL.length > 0;
}
