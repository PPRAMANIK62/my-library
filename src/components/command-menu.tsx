import { Fragment, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { BookOpen, FileText, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { useCommandMenuStore } from "@/lib/command-menu-store"
import { getAllChunks, getBooks } from "@/lib/content/registry"

/** Search trigger + ⌘K palette, wired to the content registry. */
export function CommandMenu() {
  const open = useCommandMenuStore((state) => state.open)
  const setOpen = useCommandMenuStore((state) => state.setOpen)
  const navigate = useNavigate()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        useCommandMenuStore.setState((state) => ({ open: !state.open }))
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const books = useMemo(() => getBooks(), [])
  const chunksByBook = useMemo(() => {
    const grouped = new Map<
      string,
      { bookTitle: string; chunks: ReturnType<typeof getAllChunks> }
    >()
    for (const chunk of getAllChunks()) {
      const bookTitle =
        books.find((book) => book.slug === chunk.book)?.title ?? chunk.book
      const existing = grouped.get(chunk.book)
      if (existing) {
        existing.chunks.push(chunk)
      } else {
        grouped.set(chunk.book, { bookTitle, chunks: [chunk] })
      }
    }
    return Array.from(grouped.values())
  }, [books])

  function go(path: string) {
    setOpen(false)
    navigate(path)
  }

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        aria-label="Search books and chapters"
        className="h-11 gap-2 font-sans text-muted-foreground"
      >
        <Search className="size-3.5" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="ml-1 hidden items-center gap-0.5 rounded-sm border border-border bg-surface px-1.5 py-0.5 text-[0.7rem] text-muted-foreground sm:inline-flex">
          &#8984;K
        </kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search"
        description="Search books and chapters"
      >
        <CommandInput placeholder="Search books and chapters…" />
        <CommandList>
          <CommandEmpty>No matches.</CommandEmpty>
          <CommandGroup heading="Books">
            {books.map((book) => (
              <CommandItem
                key={book.slug}
                value={`book ${book.title}`}
                onSelect={() => go(`/${book.slug}`)}
              >
                <BookOpen className="text-muted-foreground" />
                <span>{book.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          {chunksByBook.map(({ bookTitle, chunks }) => (
            <Fragment key={bookTitle}>
              <CommandSeparator />
              <CommandGroup heading={bookTitle}>
                {chunks.map((chunk) => (
                  <CommandItem
                    key={`${chunk.book}:${chunk.id}`}
                    value={`${chunk.title} ${bookTitle}`}
                    onSelect={() => go(`/${chunk.book}/${chunk.id}`)}
                  >
                    <FileText className="text-muted-foreground" />
                    <span>{chunk.title}</span>
                    {chunk.kind === "lesson" ? (
                      <span className="ml-auto text-xs text-muted-foreground">
                        Ch. {chunk.chapter} · Note {chunk.noteIndex}
                      </span>
                    ) : (
                      <span className="ml-auto text-xs text-muted-foreground">
                        Reference
                      </span>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
