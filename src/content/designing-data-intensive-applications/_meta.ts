import type { BookMeta } from "@/lib/content/types"

export const meta: BookMeta = {
  slug: "designing-data-intensive-applications",
  title: "Designing Data-Intensive Applications",
  why: "Reading Kleppmann end to end out of general interest in data systems as a discipline — no deadline, exam, or role change driving it. Same posture as the parallel A Philosophy of Software Design and Fundamentals of Software Architecture read-throughs: build a real, durable mental model rather than skim for buzzwords, coming from a developer background with hands-on coding experience but little formal distributed-systems or database-internals exposure.",
  successCriteria: [
    "Can explain the book's three core concerns — reliability, scalability, maintainability — in Kleppmann's own terms (faults vs. failures, load parameters, percentiles, operability/simplicity/evolvability) rather than vibes.",
    "Can look at a real data system (a database choice, a replication setup, a partitioning scheme) and reason about its trade-offs using the book's vocabulary, not just repeat marketing claims from vendors.",
    "Can trace how the book's ideas connect across parts — e.g. how a storage engine's indexing choice (Part I) shapes what's possible in replication and partitioning (Part II), which in turn shapes batch/stream processing (Part III).",
    "Retain the material well enough to reference it naturally when evaluating or designing systems later — storage strength, not just fluency while the book is open.",
    "Have a personal, browsable set of notes (per chapter/concept) to return to instead of re-reading the whole book.",
  ],
  totalChapters: 12,
  coverImage: "/covers/designing-data-intensive-applications.png",
}
