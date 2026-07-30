import type { BookMeta } from "@/lib/content/types"

export const meta: BookMeta = {
  slug: "fundamentals-of-software-architecture",
  title: "Fundamentals of Software Architecture",
  why: "Reading Richards & Ford end to end out of general interest in the field, coming from a developer background with little formal architecture exposure — the goal is a durable mental model of software architecture as a discipline, not exam or interview prep.",
  successCriteria: [
    "Can explain, in your own words, the core vocabulary of the field: architectural characteristics, coupling/cohesion, quanta, the named architecture styles, trade-off analysis.",
    "Can look at a real system and reason about which architecture style(s) it resembles and why, using the book's decision criteria rather than vibes.",
    "Retain the material well enough to reference it naturally in later work — storage strength, not just fluency while the book is open.",
    "Have a personal, browsable set of notes (per chapter/concept) to return to instead of re-reading the whole book.",
  ],
  totalChapters: 27,
  coverImage: "/covers/fundamentals-of-software-architecture.png",
}
