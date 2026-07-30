import { Link, useParams } from "react-router-dom"
import { CheckCircle2, Circle } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { getBook, getChunksForBook } from "@/lib/content/registry"
import type { ChunkMeta } from "@/lib/content/types"
import { useProgressStore } from "@/lib/progress/store"

function TocRow({
  book,
  chunk,
  isRead,
  isCurrent,
  label,
}: {
  book: string
  chunk: ChunkMeta
  isRead: boolean
  isCurrent: boolean
  label?: string
}) {
  return (
    <li>
      <Link
        to={`/${book}/${chunk.id}`}
        className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-background"
      >
        {isRead ? (
          <CheckCircle2 className="size-4 shrink-0 text-accent" />
        ) : (
          <Circle className="size-4 shrink-0 text-muted-foreground/40" />
        )}
        <span className="min-w-0 flex-1 font-sans text-sm text-foreground">
          {label && (
            <span className="text-muted-foreground">{label} · </span>
          )}
          {chunk.title}
        </span>
        {isCurrent && (
          <span className="shrink-0 font-sans text-xs font-medium text-accent">
            Currently reading
          </span>
        )}
      </Link>
    </li>
  )
}

export function BookToc() {
  const { book: bookSlug } = useParams<{ book: string }>()
  const book = bookSlug ? getBook(bookSlug) : undefined
  const chunks = bookSlug ? getChunksForBook(bookSlug) : []
  const readChunks = useProgressStore((state) => state.readChunks)
  const lastOpened = useProgressStore((state) => state.lastOpened)

  if (!book || !bookSlug) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
        <p className="font-serif text-muted-foreground">
          That book isn't in the library.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block font-sans text-sm text-accent-strong hover:underline"
        >
          Back to Library
        </Link>
      </div>
    )
  }

  const lessons = chunks.filter((chunk) => chunk.kind === "lesson")
  const reference = chunks.filter((chunk) => chunk.kind === "reference")

  const chapterMap = new Map<number, ChunkMeta[]>()
  for (const lesson of lessons) {
    const chapterNum = lesson.chapter ?? 0
    const existing = chapterMap.get(chapterNum)
    if (existing) {
      existing.push(lesson)
    } else {
      chapterMap.set(chapterNum, [lesson])
    }
  }
  const chapters = Array.from(chapterMap.entries()).sort(
    (a, b) => a[0] - b[0],
  )

  const currentChunkId = lastOpened[bookSlug]

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Reveal>
        <Link
          to="/"
          className="font-sans text-xs text-muted-foreground hover:text-foreground"
        >
          ← Library
        </Link>
        <h1
          className="mt-3 font-display text-3xl font-bold tracking-tight text-balance"
        >
          {book.title}
        </h1>
        <p className="mt-3 max-w-prose font-serif text-base leading-relaxed text-muted-foreground">
          {book.why}
        </p>
        {book.successCriteria.length > 0 && (
          <div className="mt-5">
            <p className="font-sans text-xs font-medium tracking-[0.1em] text-muted-foreground uppercase">
              What "done" looks like
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 font-sans text-sm text-muted-foreground">
              {book.successCriteria.map((criterion) => (
                <li key={criterion}>{criterion}</li>
              ))}
            </ul>
          </div>
        )}
      </Reveal>

      <div className="mt-10 space-y-8">
        {chapters.map(([chapterNum, chapterChunks]) => (
          <section key={chapterNum}>
            <h2 className="mb-2 font-sans text-xs font-medium tracking-[0.1em] text-muted-foreground uppercase">
              Chapter {chapterNum}
            </h2>
            <ul className="divide-y divide-border rounded-lg border border-border bg-surface/50">
              {chapterChunks.map((chunk) => (
                <TocRow
                  key={chunk.id}
                  book={bookSlug}
                  chunk={chunk}
                  isRead={Boolean(readChunks[`${bookSlug}:${chunk.id}`])}
                  isCurrent={chunk.id === currentChunkId}
                  label={
                    chunk.totalNotes
                      ? `Note ${chunk.noteIndex} of ${chunk.totalNotes}`
                      : undefined
                  }
                />
              ))}
            </ul>
          </section>
        ))}

        {reference.length > 0 && (
          <section>
            <h2 className="mb-2 font-sans text-xs font-medium tracking-[0.1em] text-muted-foreground uppercase">
              Reference
            </h2>
            <ul className="divide-y divide-border rounded-lg border border-border bg-surface/50">
              {reference.map((chunk) => (
                <TocRow
                  key={chunk.id}
                  book={bookSlug}
                  chunk={chunk}
                  isRead={Boolean(readChunks[`${bookSlug}:${chunk.id}`])}
                  isCurrent={chunk.id === currentChunkId}
                />
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  )
}
