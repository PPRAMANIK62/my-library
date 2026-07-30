import type { ReactNode } from "react"

interface ConceptProps {
  label: string
  children: ReactNode
}

/** Labeled callout box for a book's named concept, term, or aside. */
export function Concept({ label, children }: ConceptProps) {
  return (
    <div className="my-6 rounded-lg border border-border bg-surface px-5 py-4">
      <span className="block font-sans text-xs font-semibold tracking-[0.1em] text-accent uppercase">
        {label}
      </span>
      <div className="mt-2 font-serif text-base leading-relaxed text-foreground [&_p]:my-2 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}
