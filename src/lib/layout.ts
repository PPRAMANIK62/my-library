/**
 * Shared measure for the reader page: breadcrumb, prose, and prev/next nav
 * all use this exact class string so their content boxes line up and
 * widen/narrow together. Pixel-based (not `ch`) so it doesn't shift with
 * per-element font (breadcrumb is sans, article is serif).
 */
export const READER_CONTAINER = "mx-auto w-full max-w-3xl px-4 sm:px-6"
