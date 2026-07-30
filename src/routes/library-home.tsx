import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { getBooks, getChunksForBook } from "@/lib/content/registry"
import type { BookMeta } from "@/lib/content/types"
import { useProgressStore } from "@/lib/progress/store"

export function LibraryHome() {
  const books = getBooks()
  const readChunks = useProgressStore((state) => state.readChunks)
  const lastOpened = useProgressStore((state) => state.lastOpened)

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="font-display text-sm text-accent">// currently reading</p>
      <h1
        className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl"
      >
        Purbayan's Library
      </h1>

      {books.length === 0 ? (
        <p className="mt-8 font-serif text-muted-foreground">
          Nothing on the shelf yet.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {books.map((book, index) => {
            const chunks = getChunksForBook(book.slug)
            const total = chunks.length
            const readCount = chunks.filter(
              (chunk) => readChunks[`${book.slug}:${chunk.id}`],
            ).length
            const pct = total > 0 ? Math.round((readCount / total) * 100) : 0

            const lastOpenedChunkId = lastOpened[book.slug]
            const hasStarted =
              lastOpenedChunkId !== undefined &&
              chunks.some((chunk) => chunk.id === lastOpenedChunkId)
            const ctaChunkId = hasStarted ? lastOpenedChunkId : chunks[0]?.id
            const ctaLabel = hasStarted ? "Continue reading" : "Start reading"

            return (
              <Reveal key={book.slug} delay={index * 0.04}>
                <BookCard
                  book={book}
                  readCount={readCount}
                  total={total}
                  pct={pct}
                  ctaChunkId={ctaChunkId}
                  ctaLabel={ctaLabel}
                />
              </Reveal>
            )
          })}
        </div>
      )}
    </div>
  )
}

interface BookCardProps {
  book: BookMeta
  readCount: number
  total: number
  pct: number
  ctaChunkId: string | undefined
  ctaLabel: string
}

/**
 * Shelf-style cover tile: just the jacket, at a modest fixed size — the
 * cover already carries its own title/author typography, so we don't
 * repeat it as a label. Progress and the continue/start CTA live in a
 * scrim overlay that's hidden by default and only slides in on hover/focus,
 * keeping the resting grid quiet like an actual bookshelf. While a book has
 * no cover art yet (or the file 404s), the monogram/glow "jacket" backdrop
 * behind the <img> shows through instead of a broken-image icon.
 */
function BookCard({
  book,
  readCount,
  total,
  pct,
  ctaChunkId,
  ctaLabel,
}: BookCardProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const showCover = Boolean(book.coverImage) && !imageFailed

  return (
    <article className="group/card relative isolate aspect-3/4 w-full overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="absolute inset-0 bg-surface">
        {!showCover && (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_100%_0%,color-mix(in_oklch,var(--color-accent),transparent_78%),transparent_60%)]" />
            <div
              aria-hidden
              className="absolute -right-6 -bottom-14 font-display text-[10rem] leading-none font-bold text-foreground/[0.06] select-none"
            >
              {book.title.charAt(0)}
            </div>
          </>
        )}
      </div>

      {book.coverImage && (
        <img
          src={book.coverImage}
          alt=""
          onError={() => setImageFailed(true)}
          className={`absolute inset-0 size-full origin-center scale-[1.03] object-contain transition-[opacity,scale] duration-300 ease-out motion-safe:group-hover/card:scale-[1.07] motion-safe:group-focus-within/card:scale-[1.07] ${
            showCover ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Progress + CTA: hidden until hover/focus, so the resting grid
          stays a plain shelf of covers. */}
      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-1 bg-surface p-3 opacity-0 transition-[opacity,translate] duration-200 ease-out before:absolute before:inset-x-0 before:-top-20 before:h-20 before:bg-gradient-to-t before:from-surface before:to-transparent group-hover/card:translate-y-0 group-hover/card:opacity-100 group-focus-within/card:translate-y-0 group-focus-within/card:opacity-100">
        <div className="flex items-center justify-between font-sans text-[0.7rem] text-muted-foreground">
          <span>
            {readCount} / {total} read
          </span>
          <span>{book.totalChapters} ch.</span>
        </div>
        <div
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${book.title} progress`}
          className="mt-1 h-1 w-full overflow-hidden rounded-full bg-foreground/15"
        >
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>

        {ctaChunkId && (
          <Link
            to={`/${book.slug}/${ctaChunkId}`}
            className="relative mt-2 inline-flex items-center gap-1 font-sans text-xs font-medium text-accent-strong hover:underline hover:underline-offset-2"
          >
            {ctaLabel}
            <ArrowRight className="size-3" />
          </Link>
        )}
      </div>

      <Link
        to={`/${book.slug}`}
        aria-label={book.title}
        className="absolute inset-0"
      />
    </article>
  )
}
