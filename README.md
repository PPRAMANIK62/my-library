# Purbayan's Library

A personal reading app for turning technical books into structured, browsable
notes — one lesson per chapter/section, plus reference material (glossaries,
reading-technique notes) per book. Built for retention over fluency: every
lesson quotes the source directly, ends with a retrieval-practice "recall"
prompt, and tracks read/unread progress per book.

Currently shelved:

- *A Philosophy of Software Design* — John Ousterhout
- *Designing Data-Intensive Applications* — Martin Kleppmann
- *Fundamentals of Software Architecture* — Mark Richards & Neal Ford

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with [shadcn](https://ui.shadcn.com)-derived UI primitives (Radix under the hood)
- [Zustand](https://zustand-demo.pmnd.rs) for reading-progress state, persisted to `localStorage`
- [Framer Motion](https://motion.dev) for the theme toggle and reveal transitions
- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (UI chrome), [Space Mono](https://fonts.google.com/specimen/Space+Mono) (display/headings), [Literata](https://fonts.google.com/specimen/Literata) (long-form reading)
- Theme: [Tokyo Night](https://github.com/enkia/tokyo-night-vscode-theme), light and dark, following system preference by default

## Getting started

```bash
bun install
bun run dev      # start the dev server
bun run build    # typecheck + production build
bun run lint     # oxlint
```

## Adding a book

Content is auto-discovered via `import.meta.glob` — see
`src/lib/content/registry.ts` for the exact convention. To add a new book:

```
src/content/<book-slug>/_meta.ts        → exports `meta: BookMeta`
src/content/<book-slug>/<chunk-id>.tsx  → exports `meta: ChunkMeta` + a default component
```

- `_meta.ts` holds the book's title, why-you're-reading-it framing, success
  criteria, and chapter count.
- Each chunk is either a `"lesson"` (chapter/section notes, read in order) or
  `"reference"` (glossary, standing lookup material, sorted after all
  lessons).
- Lesson components are built from the shared reader primitives in
  `src/components/reader` — `Concept`, `BookQuote`, `DiagramFigure`, `Recall`,
  `SourceBox` — so every book reads consistently regardless of source
  material.
- Diagrams are inline SVG using the app's CSS custom properties
  (`var(--color-accent)`, `var(--color-surface)`, etc.) rather than hardcoded
  hex, so they stay in sync with the active theme.
- Drop a cover image in `public/covers/<book-slug>.png` and reference it from
  `_meta.ts` as `coverImage`.

## Links

- [GitHub](https://github.com/PPRAMANIK62)
- [X](https://x.com/ppramanik62)
- [purbayan.me](https://purbayan.me)
