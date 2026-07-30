import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0001-its-all-about-complexity",
  book: "a-philosophy-of-software-design",
  title: "It's All About Complexity",
  kind: "lesson",
  order: 1,
  chapter: 1,
  totalChapters: 21,
  noteIndex: 1,
  totalNotes: 2,
}

export default function Chunk() {
  return (
    <>
      <p>
        Ousterhout opens by pointing out something almost too obvious to
        notice: programming has no physical constraints. You aren't bound by
        the laws of physics the way an architect or a mechanical engineer is.
        Anything you can visualize, you can probably build. So what actually
        limits how good the software we write can be?
      </p>

      <BookQuote cite='Chapter 1, "Introduction," p. 1'>
        <p>
          The greatest limitation in writing software is our ability to
          understand the systems we are creating.
        </p>
      </BookQuote>

      <p>
        That's the whole thesis of the book in one sentence. As a program
        grows, subtle dependencies accumulate between its parts. Eventually a
        developer can't hold all the relevant factors in their head at once —
        and that's when development slows down and bugs creep in. Complexity
        isn't a side effect of software getting bigger; it's the actual
        bottleneck.
      </p>

      <h2>Two ways to fight complexity</h2>
      <p>
        Good tools (debuggers, version control, test frameworks) help, but
        they have a ceiling. Past that ceiling, the only lever left is making
        the software itself simpler. The book names two general strategies,
        and the rest of the book is really just an elaboration of these two:
      </p>

      <Concept label="The two strategies">
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            <strong>Eliminate complexity</strong> — make code simpler and
            more obvious. E.g. removing special cases, using identifiers
            consistently.
          </li>
          <li>
            <strong>Encapsulate complexity</strong> — hide it inside a{" "}
            <em>module</em> so a programmer can work on the system without
            being exposed to all of it at once. This is{" "}
            <strong>modular design</strong>.
          </li>
        </ol>
      </Concept>

      <BookQuote cite='Chapter 1, "Introduction," p. 1'>
        <p>
          The modules are designed to be relatively independent of each
          other, so that a programmer can work on one module without having
          to understand the details of other modules.
        </p>
      </BookQuote>

      <DiagramFigure caption="The book's two general strategies against complexity — everything from &quot;deep modules&quot; (Ch. 4) to &quot;define errors out of existence&quot; (Ch. 10) is one of these two moves.">
        <svg
          viewBox="0 0 700 260"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <text
            x="350"
            y="30"
            textAnchor="middle"
            fontSize="15"
            fontWeight="600"
            fill="var(--color-foreground)"
          >
            Two ways to fight the same enemy
          </text>

          <g>
            <rect
              x="30"
              y="60"
              width="290"
              height="160"
              rx="8"
              fill="var(--color-surface)"
              stroke="var(--color-accent)"
            />
            <text
              x="175"
              y="90"
              textAnchor="middle"
              fontSize="14"
              fontWeight="600"
              fill="var(--color-accent)"
            >
              1. Eliminate
            </text>
            <text x="175" y="112" textAnchor="middle" fontSize="12" fill="var(--color-foreground)">
              Make the code itself
            </text>
            <text x="175" y="128" textAnchor="middle" fontSize="12" fill="var(--color-foreground)">
              simpler and more obvious
            </text>
            <g stroke="var(--color-accent)" fill="none" strokeWidth="2">
              <path d="M60 160 L110 160" />
              <path d="M60 180 L150 180" />
            </g>
            <text x="170" y="164" fontSize="11" fill="var(--color-muted-foreground)">
              special case removed
            </text>
            <text x="170" y="184" fontSize="11" fill="var(--color-muted-foreground)">
              consistent naming
            </text>
          </g>

          <g>
            <rect
              x="380"
              y="60"
              width="290"
              height="160"
              rx="8"
              fill="var(--color-surface)"
              stroke="var(--color-accent)"
            />
            <text
              x="525"
              y="90"
              textAnchor="middle"
              fontSize="14"
              fontWeight="600"
              fill="var(--color-accent)"
            >
              2. Encapsulate
            </text>
            <text x="525" y="112" textAnchor="middle" fontSize="12" fill="var(--color-foreground)">
              Hide it inside an
            </text>
            <text x="525" y="128" textAnchor="middle" fontSize="12" fill="var(--color-foreground)">
              independent module
            </text>
            <g stroke="var(--color-accent)" fill="var(--color-background)">
              <rect x="410" y="150" width="60" height="40" rx="4" />
              <rect x="480" y="150" width="60" height="40" rx="4" />
              <rect x="550" y="150" width="60" height="40" rx="4" />
            </g>
            <text x="440" y="205" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
              module
            </text>
            <text x="510" y="205" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
              module
            </text>
            <text x="580" y="205" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
              module
            </text>
          </g>

          <text
            x="350"
            y="245"
            textAnchor="middle"
            fontSize="12"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            Every technique in this book is one or the other.
          </text>
        </svg>
      </DiagramFigure>

      <h2>Design is never finished</h2>
      <p>
        Physical engineering front-loads design: a bridge's design is frozen
        before construction starts, because changing the number of support
        towers mid-build isn't practical. Software has no such constraint —
        it's malleable enough to support major design changes{" "}
        <em>during</em> implementation. Ousterhout argues this is exactly why
        the old <strong>waterfall model</strong> (requirements → design →
        coding → testing → maintenance, each phase frozen before the next
        begins) fails for software: you genuinely can't foresee all the
        implications of a large design before you start building it.
      </p>

      <DiagramFigure caption="Waterfall freezes the design before problems can surface; incremental development discovers and fixes design problems while the system is still small, then repeats.">
        <svg
          viewBox="0 0 700 220"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="12"
        >
          <text x="20" y="30" fontSize="13" fontWeight="600" fill="var(--color-foreground)">
            Waterfall
          </text>
          <g fill="var(--color-surface)" stroke="var(--color-accent)">
            <rect x="20" y="45" width="110" height="34" rx="4" />
            <rect x="140" y="45" width="110" height="34" rx="4" />
            <rect x="260" y="45" width="110" height="34" rx="4" />
            <rect x="380" y="45" width="110" height="34" rx="4" />
          </g>
          <g fill="var(--color-foreground)" textAnchor="middle">
            <text x="75" y="66">Requirements</text>
            <text x="195" y="66">Design (frozen)</text>
            <text x="315" y="66">Coding</text>
            <text x="435" y="66">Testing</text>
          </g>
          <text x="510" y="66" fill="var(--color-destructive)" fontSize="18" fontWeight="700">
            ✕
          </text>
          <text x="20" y="100" fontSize="11" fill="var(--color-muted-foreground)">
            Problems surface here — but the design phase, and often its
            people, have already moved on.
          </text>

          <text x="20" y="140" fontSize="13" fontWeight="600" fill="var(--color-foreground)">
            Incremental / agile
          </text>
          <g fill="var(--color-surface)" stroke="var(--color-success)">
            <rect x="20" y="155" width="90" height="34" rx="4" />
            <rect x="130" y="155" width="90" height="34" rx="4" />
            <rect x="240" y="155" width="90" height="34" rx="4" />
            <rect x="350" y="155" width="90" height="34" rx="4" />
            <rect x="460" y="155" width="90" height="34" rx="4" />
          </g>
          <g fill="var(--color-foreground)" textAnchor="middle" fontSize="11">
            <text x="65" y="176">design→build</text>
            <text x="175" y="176">evaluate</text>
            <text x="285" y="176">redesign</text>
            <text x="395" y="176">design→build</text>
            <text x="505" y="176">evaluate…</text>
          </g>
          <g stroke="var(--color-success)" strokeWidth="2" fill="none" markerEnd="url(#arr2)">
            <path d="M110 172 L128 172" />
            <path d="M220 172 L238 172" />
            <path d="M330 172 L348 172" />
            <path d="M440 172 L458 172" />
          </g>
          <defs>
            <marker
              id="arr2"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 z" fill="var(--color-success)" />
            </marker>
          </defs>
        </svg>
      </DiagramFigure>

      <BookQuote cite='Chapter 1, "Introduction," p. 2'>
        <p>
          Incremental development means that software design is never done.
          Design happens continuously over the life of a system: developers
          should always be thinking about design issues.
        </p>
      </BookQuote>

      <p>
        This is a deliberately uncomfortable claim if you like the idea of
        "finishing" a design: the book is telling you the first design for
        anything is almost never the best one, and you should plan on
        spending some ongoing fraction of your time improving designs you
        already shipped.
      </p>

      <h2>What this book actually gives you</h2>
      <p>
        Ousterhout is explicit that there's no formula. The book's techniques
        — things like <em>"classes should be deep"</em> or{" "}
        <em>"define errors out of existence"</em> — are deliberately
        high-level and "border on the philosophical." They won't hand you the
        best design directly; they're tools for <em>comparing</em> design
        alternatives and steering exploration, which is also why the book
        leans so heavily on worked code examples rather than abstract rules
        alone.
      </p>

      <Recall
        question={
          <p>
            What are the two general strategies the book uses to fight
            complexity, and which one does "modular design" belong to?
          </p>
        }
      >
        <p>
          Eliminate complexity (make code simpler/more obvious) and
          encapsulate complexity (hide it behind independent modules).
          Modular design is the second strategy — it doesn't remove
          complexity, it isolates it so most developers never have to see
          it.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Ousterhout,{" "}
        <em>A Philosophy of Software Design</em>, 2nd ed., Chapter 1,
        "Introduction (It's All About Complexity)," pp. 1–2.
      </SourceBox>
    </>
  )
}
