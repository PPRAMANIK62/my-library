import type { ReactNode } from "react"

import { READER_CONTAINER } from "@/lib/layout"

interface ReaderArticleProps {
  children: ReactNode
}

/**
 * Outer wrapper each chunk's content renders inside. Shares its width and
 * horizontal padding with the reader's breadcrumb/prev-next nav (both use
 * READER_CONTAINER) so all three line up at the same left edge, and sets
 * the serif reading font, generous line height, and vertical rhythm
 * between block elements.
 */
export function ReaderArticle({ children }: ReaderArticleProps) {
  return (
    <article
      className={`${READER_CONTAINER} font-serif text-base leading-[1.7] text-foreground
        [&_p]:my-4
        [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground
        [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-foreground
        [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6
        [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6
        [&_li]:my-1.5
        [&_strong]:font-semibold
        [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2`}
    >
      {children}
    </article>
  )
}
