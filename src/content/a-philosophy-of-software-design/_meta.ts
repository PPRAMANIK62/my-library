import type { BookMeta } from "@/lib/content/types"

export const meta: BookMeta = {
  slug: "a-philosophy-of-software-design",
  title: "A Philosophy of Software Design",
  why: "Reading Ousterhout end to end out of general interest in software design as a discipline, coming from a developer background — the goal is internalizing his vocabulary and heuristics for judging whether a design reduces or adds complexity, one level down the stack from the parallel Fundamentals of Software Architecture read-through (module/class/interface design rather than system architecture).",
  successCriteria: [
    "Can explain complexity in Ousterhout's own terms — change amplification, cognitive load, unknown unknowns — rather than vibes.",
    "Can look at a class, module, or interface and judge whether it's \"deep\" or \"shallow,\" and articulate why using the book's criteria.",
    "Can recognize the book's red flags in real code, not just recite their names.",
    "Retain the material well enough to reference it naturally when writing or reviewing code later — storage strength, not just fluency while the book is open.",
    "Have a personal, browsable set of notes (per chapter/concept) to return to instead of re-reading the whole book.",
  ],
  totalChapters: 21,
  coverImage: "/covers/a-philosophy-of-software-design.png",
}
