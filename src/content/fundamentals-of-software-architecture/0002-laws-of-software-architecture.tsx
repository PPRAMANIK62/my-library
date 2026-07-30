import { Link } from "react-router-dom"

import {
  Concept,
  BookQuote,
  DiagramFigure,
  Recall,
  SourceBox,
} from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0002-laws-of-software-architecture",
  book: "fundamentals-of-software-architecture",
  title: "The Laws of Software Architecture",
  kind: "lesson",
  order: 2,
  chapter: 1,
  totalChapters: 27,
  noteIndex: 2,
  totalNotes: 3,
}

export default function Chunk() {
  return (
    <>
      <p>
        When the authors set out to write the first edition, they hoped to
        find maybe 10 or 15 universal truths about software architecture
        worth codifying as "laws." They found two. Writing the second
        edition, they found one more. That's the whole point: these aren't a
        checklist, they're the tiny residue left after trying hard to
        overgeneralize a genuinely context-dependent field — which is
        exactly why they're worth taking seriously.
      </p>

      <h2>First Law: Everything is a trade-off</h2>

      <BookQuote cite="First Law of Software Architecture, p. 6">
        <p>Everything in software architecture is a trade-off.</p>
      </BookQuote>

      <p>
        This sounds almost too simple to be a "law," until you notice how
        often people violate it in practice — arguing for a technology or
        pattern as if it were strictly, universally better, with no downside
        worth naming. The book's claim is stronger than "consider trade-offs
        when you can." It's that if a choice appears to have <em>no</em>{" "}
        downside, that's a sign you haven't looked hard enough yet, not a
        sign you found a free lunch.
      </p>

      <Concept label="Corollary 1">
        <p>
          "If you think you've discovered something that isn't a trade-off,
          more likely you just haven't <em>identified</em> the trade-off…yet."
          (p. 7)
        </p>
      </Concept>

      <Concept label="Corollary 2">
        <p>
          "You can't just do trade-off analysis once and be done with it."
          (p. 7) Teams want to pick defaults once — a standard style, a
          standard communication pattern — and reuse them everywhere. The
          book's example: teams that default to choreography for every
          distributed workflow, only to discover it works well sometimes and
          is a disaster in others. Every situation re-opens the analysis.
        </p>
      </Concept>

      <h2>Second Law: Why beats how</h2>

      <BookQuote cite="Second Law of Software Architecture, p. 7">
        <p>Why is more important than how.</p>
      </BookQuote>

      <p>
        The book frames this through an experienced architect's own
        limitation: looking at an unfamiliar architecture, understanding the
        mechanics (<em>how</em> it works) is usually straightforward.
        Reconstructing <em>why</em> the previous team made those specific
        decisions — what trade-offs they were weighing, under what
        constraints — is the hard part, and it's the part that actually
        transfers to your own decisions. This is why architecture decision
        records (Chapter 21) exist: to capture the "why" before it's lost the
        moment the original team moves on.
      </p>

      <h2>Third Law: Decisions live on a spectrum</h2>

      <BookQuote cite="Third Law of Software Architecture, p. 7 (new in the 2nd edition)">
        <p>
          Most architecture decisions aren't binary but rather exist on a
          spectrum between extremes.
        </p>
      </BookQuote>

      <p>
        This is the natural consequence of the First Law: if everything is a
        trade-off, few real choices reduce to a clean either/or. "Monolith or
        microservices?" sounds binary but isn't — Chapter 11 exists
        specifically because <em>modular monolith</em> occupies real
        territory between those two poles, and Chapter 9 discusses the
        monolith-vs-distributed question at length precisely because it's a
        spectrum, not a switch.
      </p>

      <DiagramFigure caption="Illustration of the Third Law using the &quot;how distributed should this system be?&quot; question — a spectrum the book fills in fully in Part II (Chapters 9–19), not a single binary choice.">
        <svg
          viewBox="0 0 700 190"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <defs>
            <linearGradient id="spectrum" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-accent)" />
              <stop offset="100%" stopColor="var(--color-accent-strong)" />
            </linearGradient>
          </defs>
          <rect
            x="40"
            y="70"
            width="620"
            height="20"
            rx="10"
            fill="url(#spectrum)"
          />
          <text x="40" y="55" fontSize="14" fontWeight="600" fill="var(--color-foreground)">
            Fully monolithic
          </text>
          <text
            x="660"
            y="55"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-foreground)"
            textAnchor="end"
          >
            Fully distributed (microservices)
          </text>

          {/* markers along the spectrum */}
          <g fontSize="12" fill="var(--color-foreground)">
            <circle cx="120" cy="80" r="6" fill="var(--color-background)" stroke="var(--color-foreground)" />
            <text x="120" y="120" textAnchor="middle">
              Layered monolith
            </text>

            <circle cx="290" cy="80" r="6" fill="var(--color-background)" stroke="var(--color-foreground)" />
            <text x="290" y="140" textAnchor="middle">
              Modular monolith
            </text>
            <text
              x="290"
              y="155"
              textAnchor="middle"
              fontSize="10"
              fill="var(--color-muted-foreground)"
            >
              (Ch. 11)
            </text>

            <circle cx="460" cy="80" r="6" fill="var(--color-background)" stroke="var(--color-foreground)" />
            <text x="460" y="120" textAnchor="middle">
              Service-based
            </text>

            <circle cx="600" cy="80" r="6" fill="var(--color-background)" stroke="var(--color-foreground)" />
            <text x="600" y="140" textAnchor="middle">
              Microservices
            </text>
            <text
              x="600"
              y="155"
              textAnchor="middle"
              fontSize="10"
              fill="var(--color-muted-foreground)"
            >
              (Ch. 18)
            </text>
          </g>
        </svg>
      </DiagramFigure>

      <h2>How the three laws chain together</h2>
      <p>
        Read in sequence, the laws form a small argument rather than three
        unrelated aphorisms:
      </p>

      <DiagramFigure caption="The three laws as one chain of reasoning, not three independent trivia facts.">
        <svg
          viewBox="0 0 700 130"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="13"
        >
          <g fill="var(--color-surface)" stroke="var(--color-accent)">
            <rect x="10" y="30" width="200" height="70" rx="8" />
            <rect x="250" y="30" width="200" height="70" rx="8" />
            <rect x="490" y="30" width="200" height="70" rx="8" />
          </g>
          <g fill="var(--color-foreground)" textAnchor="middle">
            <text x="110" y="58" fontWeight="600">
              Law 1
            </text>
            <text x="110" y="76">
              Every choice trades
            </text>
            <text x="110" y="92">
              something away
            </text>

            <text x="350" y="58" fontWeight="600">
              Law 2
            </text>
            <text x="350" y="76">
              so record WHY,
            </text>
            <text x="350" y="92">
              not just how
            </text>

            <text x="590" y="58" fontWeight="600">
              Law 3
            </text>
            <text x="590" y="76">
              because the choice sits on
            </text>
            <text x="590" y="92">
              a spectrum, never a switch
            </text>
          </g>
          <g
            stroke="var(--color-muted-foreground)"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arr)"
          >
            <path d="M212 65 L248 65" />
            <path d="M452 65 L488 65" />
          </g>
          <defs>
            <marker
              id="arr"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 z" fill="var(--color-muted-foreground)" />
            </marker>
          </defs>
        </svg>
      </DiagramFigure>

      <Recall
        question={
          <p>
            A colleague tells you "we should just always use event-driven
            architecture for every service — it's strictly better." Which
            law does this violate, and why?
          </p>
        }
      >
        <p>
          The First Law — claiming a pattern is "strictly better" with no
          trade-off is a sign the trade-off hasn't been identified yet, not
          that one doesn't exist (Corollary 1). It likely also violates the
          Third Law by treating "event-driven or not" as binary rather than a
          spectrum of how much of the system should be event-driven.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Richards &amp; Ford,{" "}
        <em>Fundamentals of Software Architecture</em>, 2nd ed., Chapter 1,
        "Laws of Software Architecture," pp. 6–8. Revisited with more
        examples in Chapter 27. See the{" "}
        <Link to="/fundamentals-of-software-architecture/glossary">
          glossary
        </Link>{" "}
        for the three laws at a glance.
      </SourceBox>
    </>
  )
}
