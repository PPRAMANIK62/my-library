import {
  Concept,
  BookQuote,
  DiagramFigure,
  Recall,
  SourceBox,
} from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0005-what-causes-complexity",
  book: "a-philosophy-of-software-design",
  title: "What Causes Complexity",
  kind: "lesson",
  order: 5,
  chapter: 2,
  totalChapters: 21,
  noteIndex: 3,
  totalNotes: 3,
}

export default function Chunk() {
  return (
    <>
      <p>
        Symptoms tell you complexity is present. This note covers what
        actually produces it — and closes out Chapter 2 with a claim that
        shapes how the book wants you to react day-to-day, not just how you
        diagnose after the fact.
      </p>

      <h2>Two causes, no more</h2>
      <BookQuote cite='Chapter 2, Section 2.3, "Causes of complexity," p. 8'>
        <p>Complexity is caused by two things: dependencies and obscurity.</p>
      </BookQuote>

      <Concept label="Dependency">
        <p>
          Exists when a piece of code cannot be understood and modified in
          isolation — some other code must also be considered or changed.
          Dependencies can't be eliminated entirely; every class you write
          creates one around its own API. The goal is fewer of them, and
          making the ones that remain simple and obvious.
        </p>
      </Concept>

      <p>
        The banner example from the previous note is also the book's example
        here: the old design (color hardcoded per page) had a nasty,
        implicit dependency between every page. The fix didn't remove the
        dependency — it made a <em>new</em> one (every page now depends on{" "}
        <code>bannerBg</code>) but a far better one: it's obvious, it's
        named, and a compiler will error if you get it wrong. The lesson
        generalizes: you often can't design dependencies away, only trade a
        bad one for a good one.
      </p>

      <Concept label="Obscurity">
        <p>
          Important information is not obvious. A variable named{" "}
          <code>time</code> with undocumented units; a hidden message table
          that has to be updated whenever a new error status is added, with
          no clue near the status declaration that the table exists.
          Inconsistency — reusing a name for two different things — is a
          major contributor.
        </p>
      </Concept>

      <BookQuote cite='Chapter 2, Section 2.3, "Causes of complexity," p. 9'>
        <p>
          The need for extensive documentation is often a red flag that the
          design isn't quite right. The best way to reduce obscurity is by
          simplifying the system design.
        </p>
      </BookQuote>
      <p>
        This is a sharper claim than "write better docs": obscurity is
        treated as a <em>design</em> problem first and a documentation
        problem second. Reaching for more comments to explain a confusing
        structure is treating the symptom.
      </p>

      <DiagramFigure caption="Dependencies → change amplification and cognitive load. Obscurity → unknown unknowns and cognitive load. Minimize the two causes and all three symptoms recede together.">
        <svg
          viewBox="0 0 700 240"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="12"
        >
          <text
            x="350"
            y="24"
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-foreground)"
          >
            How the two causes produce the three symptoms
          </text>

          <g fill="#f3e6df" stroke="#8a3b2f">
            <rect x="30" y="70" width="180" height="50" rx="6" />
            <rect x="30" y="150" width="180" height="50" rx="6" />
          </g>
          <g fill="#8a3b2f" textAnchor="middle" fontWeight="600">
            <text x="120" y="100">Dependencies</text>
            <text x="120" y="180">Obscurity</text>
          </g>

          <g fill="#f3e6df" stroke="var(--color-muted-foreground)">
            <rect x="460" y="35" width="210" height="42" rx="6" />
            <rect x="460" y="99" width="210" height="42" rx="6" />
            <rect x="460" y="163" width="210" height="42" rx="6" />
          </g>
          <g fill="var(--color-foreground)" textAnchor="middle" fontSize="11">
            <text x="565" y="60">Change amplification</text>
            <text x="565" y="124">Cognitive load</text>
            <text x="565" y="188">Unknown unknowns</text>
          </g>

          <g
            stroke="var(--color-muted-foreground)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrc)"
          >
            <path d="M210 90 C 320 60, 380 56, 458 56" />
            <path d="M210 95 C 320 110, 380 118, 458 120" />
            <path d="M210 170 C 320 130, 380 122, 458 122" />
            <path d="M210 175 C 320 185, 380 183, 458 184" />
          </g>
          <defs>
            <marker
              id="arrc"
              markerWidth="7"
              markerHeight="7"
              refX="3.5"
              refY="3.5"
              orient="auto"
            >
              <path d="M0,0 L7,3.5 L0,7 z" fill="var(--color-muted-foreground)" />
            </marker>
          </defs>
          <text
            x="350"
            y="225"
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            Cognitive load has two parents — it's fed by both causes.
          </text>
        </svg>
      </DiagramFigure>

      <h2>Complexity is incremental</h2>
      <BookQuote cite='Chapter 2, Section 2.4, "Complexity is incremental," p. 10'>
        <p>
          Complexity isn't caused by a single catastrophic error; it
          accumulates in lots of small chunks... hundreds or thousands of
          small dependencies and obscurities build up over time.
        </p>
      </BookQuote>
      <p>
        This reframes the two causes from a static list into something that
        behaves like a slow leak. No single dependency or obscurity you
        introduce today will noticeably hurt the system — which is exactly
        what makes it dangerous. It's easy to rationalize "just this one"
        shortcut, and every developer on a team can independently make that
        same reasonable-sounding call. Fixing it later is just as hard in
        reverse: removing one dependency from a codebase with a thousand of
        them won't be felt either.
      </p>
      <p>
        Ousterhout's stated response to this is a{" "}
        <strong>"zero tolerance" philosophy</strong> toward complexity — the
        subject of Chapter 3. This note is where that phrase gets its
        justification: if complexity only ever accumulates in small,
        individually-forgivable increments, then the only defense is
        refusing to add even the small ones, rather than waiting for a "big"
        complexity problem to justify pushing back.
      </p>

      <h2>Conclusion: the chain in one line</h2>
      <p>
        Chapter 2's whole argument compresses into one causal chain, and
        it's worth being able to say it in this order, cause to effect:
      </p>
      <Concept label="The chain">
        <p>
          Dependencies + obscurity accumulate → change amplification,
          cognitive load, and unknown unknowns appear → more code has to
          change per feature, more time goes into learning enough to change
          it safely, and in the worst case developers can't even find out
          what they need to know.
        </p>
      </Concept>

      <Recall
        question={
          <p>
            Why does the book insist complexity should be fought with a
            "zero tolerance" approach, rather than only addressing it once a
            module feels seriously complex?
          </p>
        }
      >
        <p>
          Because complexity is incremental — it builds from many
          individually-small dependencies and obscurities, none of which
          look worth blocking on their own. If every developer lets "just
          this one" through, complexity accumulates rapidly, and by the time
          it's serious, no single fix will make a noticeable dent either.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Ousterhout,{" "}
        <em>A Philosophy of Software Design</em>, 2nd ed., Chapter 2,
        Sections 2.3–2.5, "Causes of complexity" / "Complexity is
        incremental" / "Conclusion," pp. 8–11.
      </SourceBox>
    </>
  )
}
