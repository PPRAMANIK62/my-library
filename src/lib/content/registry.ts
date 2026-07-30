import type { BookMeta, ChunkMeta, ChunkModule } from "./types"

/**
 * This module is the ONLY place that knows about the content glob pattern.
 * Everything else (routes, search, nav) should consume the typed functions
 * below rather than reaching into `import.meta.glob` itself.
 *
 * Layout convention a new book/chunk must follow to be picked up:
 *   src/content/<book-slug>/_meta.ts        -> exports `meta: BookMeta`
 *   src/content/<book-slug>/<chunk-id>.tsx  -> exports `meta: ChunkMeta` + default component
 *
 * `_meta.ts` is deliberately not `.tsx` so the chunk glob below doesn't
 * accidentally treat a book's metadata file as a content chunk.
 */

const chunkModules = import.meta.glob<ChunkModule>("/src/content/*/*.tsx", {
  eager: true,
})

const bookMetaModules = import.meta.glob<{ meta: BookMeta }>(
  "/src/content/*/_meta.ts",
  { eager: true },
)

const booksBySlug = new Map<string, BookMeta>()
for (const module of Object.values(bookMetaModules)) {
  booksBySlug.set(module.meta.slug, module.meta)
}

const chunksByBook = new Map<string, ChunkModule[]>()
for (const module of Object.values(chunkModules)) {
  const { book } = module.meta
  const existing = chunksByBook.get(book)
  if (existing) {
    existing.push(module)
  } else {
    chunksByBook.set(book, [module])
  }
}
for (const modules of chunksByBook.values()) {
  modules.sort((a, b) => a.meta.order - b.meta.order)
}

/** All books, in the order their `_meta.ts` files were discovered. */
export function getBooks(): BookMeta[] {
  return Array.from(booksBySlug.values())
}

export function getBook(slug: string): BookMeta | undefined {
  return booksBySlug.get(slug)
}

/** A book's chunks (lessons + reference), sorted by `order`. */
export function getChunksForBook(slug: string): ChunkMeta[] {
  return (chunksByBook.get(slug) ?? []).map((module) => module.meta)
}

/** The full module (meta + default component) for one chunk. */
export function getChunk(book: string, id: string): ChunkModule | undefined {
  return chunksByBook.get(book)?.find((module) => module.meta.id === id)
}

/** Every chunk across every book — for future cross-book search. */
export function getAllChunks(): ChunkMeta[] {
  return Array.from(chunksByBook.values())
    .flat()
    .map((module) => module.meta)
}
