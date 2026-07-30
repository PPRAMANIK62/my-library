import type { ReactNode } from "react"

interface BookQuoteProps {
  cite: string
  children: ReactNode
}

/** Blockquote styling for a direct quotation from the book being read. */
export function BookQuote({ cite, children }: BookQuoteProps) {
  return (
    <blockquote className="my-6 border-l-2 border-accent pl-5">
      <div className="font-serif text-lg leading-relaxed text-foreground italic [&_p]:my-0">
        {children}
      </div>
      <cite className="mt-2 block font-sans text-xs text-muted-foreground not-italic">
        — {cite}
      </cite>
    </blockquote>
  )
}
