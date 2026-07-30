import type { ComponentType } from "react"

/**
 * "lesson" chunks are the book's narrative notes (one per chapter section);
 * "reference" chunks are standing lookup material (glossary, reading-technique
 * notes, etc.) that isn't part of the linear chapter sequence.
 */
export type ChunkKind = "lesson" | "reference"

export interface ChunkMeta {
  id: string
  book: string
  title: string
  kind: ChunkKind
  /**
   * Absolute sort key within the book. Lessons sort first, in chapter/note
   * reading order (so `order` tracks linear reading progress and can double
   * as a "N of totalLessons" position indicator); reference chunks sort
   * after every lesson (conventionally starting at 1000+) since they're
   * lookup material you jump to out of band, not part of the read-through.
   */
  order: number
  /** Populated for `kind: "lesson"` chunks, taken from the source breadcrumb. */
  chapter?: number
  totalChapters?: number
  noteIndex?: number
  totalNotes?: number
}

export interface BookMeta {
  slug: string
  title: string
  why: string
  successCriteria: string[]
  totalChapters: number
  /** Path under /public (e.g. "/covers/<slug>.jpg") for the library card backdrop. */
  coverImage?: string
}

/** What every content chunk `.tsx` file under `src/content/<book>/` exports. */
export interface ChunkModule {
  meta: ChunkMeta
  default: ComponentType
}
