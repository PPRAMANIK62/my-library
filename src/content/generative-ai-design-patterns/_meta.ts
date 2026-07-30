import type { BookMeta } from "@/lib/content/types"

export const meta: BookMeta = {
  slug: "generative-ai-design-patterns",
  title: "Generative AI Design Patterns",
  why: "Reading Lakshmanan & Hapke end to end out of general interest in AI engineering as a discipline — no deadline, exam, or role change driving it. Same posture as the parallel A Philosophy of Software Design, Designing Data-Intensive Applications, and Fundamentals of Software Architecture read-throughs: build a real, durable mental model of the 32 patterns rather than skim for buzzwords, coming from a developer background with hands-on coding experience but no formal exposure to AI/ML engineering theory beyond using foundational models as an end user.",
  successCriteria: [
    "Can explain the book's own vocabulary — logits, temperature, sampling strategies, in-context learning, post-training, agentic characteristics — in the authors' terms rather than vibes.",
    "Can name, for a given production GenAI problem (style drift, hallucination, knowledge gaps, unreliable agents), which of the 32 named patterns addresses it and why, using the book's problem/solution framing.",
    "Can look at a piece of GenAI application code (a prompt, an agent, a fine-tuning script) and reason about which pattern it is an instance of.",
    "Retain the material well enough to reference it naturally when building or reviewing GenAI applications later — storage strength, not just fluency while the book is open.",
    "Have a personal, browsable set of notes (per chapter/pattern) to return to instead of re-reading the whole book.",
  ],
  totalChapters: 10,
  coverImage: "/covers/generative-ai-design-patterns.png",
}
