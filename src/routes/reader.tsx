import { useEffect, useRef, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"

import { ReaderArticle } from "@/components/reader"
import { useCommandMenuStore } from "@/lib/command-menu-store"
import { getBook, getChunk, getChunksForBook } from "@/lib/content/registry"
import { EASE_OUT } from "@/lib/ease"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { READER_CONTAINER } from "@/lib/layout"
import { useProgressStore } from "@/lib/progress/store"

export function Reader() {
  const { book: bookSlug, chunkId } = useParams<{
    book: string
    chunkId: string
  }>()
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const commandMenuOpen = useCommandMenuStore((state) => state.open)

  const markRead = useProgressStore((state) => state.markRead)
  const setLastOpened = useProgressStore((state) => state.setLastOpened)

  // -1 (came from prev), 0 (neutral, e.g. jumped via TOC/search), 1 (next)
  const [direction, setDirection] = useState(0)
  const lastNavRef = useRef<{ book?: string; chunkId?: string }>({})

  const book = bookSlug ? getBook(bookSlug) : undefined
  const chunks = bookSlug ? getChunksForBook(bookSlug) : []
  const currentIndex = chunks.findIndex((chunk) => chunk.id === chunkId)
  const chunkModule =
    bookSlug && chunkId ? getChunk(bookSlug, chunkId) : undefined

  const hasPrevNext = chunks.length > 1 && currentIndex !== -1
  const prevChunk = hasPrevNext
    ? chunks[(currentIndex - 1 + chunks.length) % chunks.length]
    : undefined
  const nextChunk = hasPrevNext
    ? chunks[(currentIndex + 1) % chunks.length]
    : undefined

  function goTo(targetChunkId: string, dir: number) {
    if (!bookSlug) return
    setDirection(dir)
    navigate(`/${bookSlug}/${targetChunkId}`)
  }

  // Mark read + record last-opened whenever the reader actually lands on a
  // valid chunk. Reset direction to neutral when navigation didn't come
  // through goTo (e.g. a direct link, back/forward, or the command palette).
  useEffect(() => {
    if (!bookSlug || !chunkId || !chunkModule) return
    markRead(bookSlug, chunkId)
    setLastOpened(bookSlug, chunkId)

    const cameFromNav =
      lastNavRef.current.book === bookSlug &&
      lastNavRef.current.chunkId !== chunkId
    if (!cameFromNav) setDirection(0)
    lastNavRef.current = { book: bookSlug, chunkId }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookSlug, chunkId, chunkModule])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (commandMenuOpen) return
      const target = event.target as HTMLElement | null
      if (target) {
        const tag = target.tagName
        if (
          tag === "INPUT" ||
          tag === "TEXTAREA" ||
          target.isContentEditable
        ) {
          return
        }
      }
      const key = event.key.toLowerCase()
      if (event.key === "ArrowLeft" || key === "k") {
        if (prevChunk) {
          event.preventDefault()
          goTo(prevChunk.id, -1)
        }
      } else if (event.key === "ArrowRight" || key === "j") {
        if (nextChunk) {
          event.preventDefault()
          goTo(nextChunk.id, 1)
        }
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevChunk, nextChunk, commandMenuOpen])

  if (!book || !bookSlug || !chunkModule || !chunkId) {
    return (
      <div className={`${READER_CONTAINER} py-14`}>
        <p className="font-serif text-muted-foreground">
          That page isn't in the library.
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

  const meta = chunkModule.meta
  const ChunkComponent = chunkModule.default

  return (
    <div className="py-10 sm:py-14">
      {/* The visible breadcrumb below conveys location, not the page's
          subject — screen-reader heading navigation still needs a real,
          sequential <h1> naming the chunk being read. Visually hidden so
          the breadcrumb's compact chrome look is unaffected. */}
      <h1 className="sr-only">
        {book.title}: {meta.title}
      </h1>
      <nav
        aria-label="Breadcrumb"
        className={`${READER_CONTAINER} mb-8 flex flex-wrap items-center gap-1.5 font-sans text-xs text-muted-foreground`}
      >
        <Link to="/" className="hover:text-foreground">
          Library
        </Link>
        <ChevronRight className="size-3" />
        <Link to={`/${bookSlug}`} className="hover:text-foreground">
          {book.title}
        </Link>
        <ChevronRight className="size-3" />
        <span className="text-foreground">
          {meta.kind === "lesson"
            ? `Chapter ${meta.chapter} of ${meta.totalChapters} · Note ${meta.noteIndex} of ${meta.totalNotes}`
            : meta.title}
        </span>
      </nav>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={chunkId}
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: direction === 0 ? 0 : direction > 0 ? 16 : -16 }
          }
          animate={{ opacity: 1, x: 0 }}
          exit={
            reduceMotion
              ? undefined
              : { opacity: 0, x: direction === 0 ? 0 : direction > 0 ? -16 : 16 }
          }
          transition={{ duration: reduceMotion ? 0 : 0.22, ease: EASE_OUT }}
        >
          <ReaderArticle>
            <ChunkComponent />
          </ReaderArticle>
        </motion.div>
      </AnimatePresence>

      {(prevChunk || nextChunk) && (
        <div
          className={`${READER_CONTAINER} mt-12 flex items-center justify-between gap-4 border-t border-border pt-6`}
        >
          {prevChunk ? (
            <button
              type="button"
              onClick={() => goTo(prevChunk.id, -1)}
              className="group flex min-w-0 items-center gap-1.5 py-3 text-left font-sans text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-3.5 shrink-0" />
              <span className="truncate">{prevChunk.title}</span>
            </button>
          ) : (
            <span />
          )}
          {nextChunk ? (
            <button
              type="button"
              onClick={() => goTo(nextChunk.id, 1)}
              className="group flex min-w-0 items-center gap-1.5 py-3 text-right font-sans text-sm text-muted-foreground hover:text-foreground"
            >
              <span className="truncate">{nextChunk.title}</span>
              <ArrowRight className="size-3.5 shrink-0" />
            </button>
          ) : (
            <span />
          )}
        </div>
      )}
    </div>
  )
}
