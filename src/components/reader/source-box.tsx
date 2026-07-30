import type { ReactNode } from "react"

interface SourceBoxProps {
  children: ReactNode
}

/** Small citation footer noting the primary source for a chunk's content. */
export function SourceBox({ children }: SourceBoxProps) {
  return (
    <div className="my-6 rounded-md bg-surface px-4 py-3 font-sans text-xs leading-relaxed text-muted-foreground [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2">
      {children}
    </div>
  )
}
