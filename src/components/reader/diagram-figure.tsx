import type { ReactNode } from "react"

interface DiagramFigureProps {
  caption: string
  children: ReactNode
}

/** Wraps an inline SVG diagram with a bordered frame and a caption. */
export function DiagramFigure({ caption, children }: DiagramFigureProps) {
  return (
    <figure className="my-6 rounded-lg border border-border bg-surface p-4">
      <div className="flex justify-center overflow-x-auto">{children}</div>
      <figcaption className="mt-3 text-center font-sans text-xs text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}
