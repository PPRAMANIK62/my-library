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
  id: "0001-defining-software-architecture",
  book: "fundamentals-of-software-architecture",
  title: "Defining Software Architecture",
  kind: "lesson",
  order: 1,
  chapter: 1,
  totalChapters: 27,
  noteIndex: 1,
  totalNotes: 3,
}

export default function Chunk() {
  return (
    <>
      <p>
        Ask five architects to define "software architecture" and you'll get
        five answers, most of them vague ("the stuff that's hard to change
        later" was the old joke). Richards and Ford resolve this by refusing
        to give a one-line definition at all. Instead they say architecture
        is the sum of <strong>four dimensions</strong>, and a system's
        architecture is only fully described once all four are pinned down.
      </p>

      <Concept label="The four dimensions">
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            <strong>Architecture style</strong> — the overall topology/shape
            (layered, microservices, event-driven…)
          </li>
          <li>
            <strong>Architecture characteristics</strong> — the "-ilities"
            the system must support (what it should <em>do</em>)
          </li>
          <li>
            <strong>Logical components</strong> — the domains, entities and
            workflows that structure its <em>behavior</em>
          </li>
          <li>
            <strong>Architecture decisions</strong> — the rules constraining
            how it's built
          </li>
        </ol>
      </Concept>

      <BookQuote cite='Chapter 1, "Defining Software Architecture," p. 2'>
        <p>
          The software architecture of a system consists of an{" "}
          <em>architecture style</em> as the starting point, combined with
          the <em>architecture characteristics</em> it must support, the{" "}
          <em>logical components</em> to implement its behavior, and finally
          the <em>architecture decisions</em> justifying it all.
        </p>
      </BookQuote>

      <p>
        The book builds this up visually as a building under construction —
        one dimension at a time — and it's worth reconstructing that
        sequence, because the <em>order</em> is the point: you don't choose a
        style first. You figure out what the system needs to do and what
        it's made of, <em>then</em> the style falls out as the easiest way to
        build that.
      </p>

      <DiagramFigure caption="Reconstruction of Figures 1-1–1-4: architecture as a building — characteristics are the roof (capability), components fill the frame (behavior), decisions and style are the supporting pillars (constraints and shape).">
        <svg
          viewBox="0 0 720 420"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          {/* roof */}
          <rect
            x="60"
            y="40"
            width="600"
            height="34"
            rx="4"
            fill="var(--color-accent)"
            opacity="0.85"
          />
          <text
            x="360"
            y="62"
            textAnchor="middle"
            fill="var(--color-background)"
            fontSize="15"
            fontWeight="600"
          >
            1. Architectural characteristics (the roof — what it must DO)
          </text>

          {/* left pillar */}
          <rect
            x="60"
            y="74"
            width="34"
            height="300"
            fill="var(--color-muted-foreground)"
            opacity="0.85"
          />
          <text
            x="77"
            y="230"
            textAnchor="middle"
            fill="var(--color-background)"
            fontSize="12"
            fontWeight="600"
            transform="rotate(-90 77 230)"
          >
            4. Architecture decisions
          </text>

          {/* right pillar */}
          <rect
            x="626"
            y="74"
            width="34"
            height="300"
            fill="var(--color-muted-foreground)"
            opacity="0.85"
          />
          <text
            x="643"
            y="230"
            textAnchor="middle"
            fill="var(--color-background)"
            fontSize="12"
            fontWeight="600"
            transform="rotate(-90 643 230)"
          >
            1. Architectural style
          </text>

          {/* component grid (logical components living inside) */}
          <g fontSize="11" fill="var(--color-foreground)">
            {/* row of small "code" boxes representing components */}
            <g transform="translate(120,100)">
              <rect
                width="470"
                height="220"
                fill="none"
                stroke="var(--color-border)"
                strokeDasharray="4 3"
              />
            </g>
            {/* 4x3 grid of component icons */}
            <g stroke="var(--color-accent)" fill="var(--color-surface)">
              <rect x="140" y="115" width="90" height="40" rx="4" />
              <rect x="250" y="115" width="90" height="40" rx="4" />
              <rect x="360" y="115" width="90" height="40" rx="4" />
              <rect x="470" y="115" width="90" height="40" rx="4" />

              <rect x="140" y="170" width="90" height="40" rx="4" />
              <rect x="250" y="170" width="90" height="40" rx="4" />
              <rect x="360" y="170" width="90" height="40" rx="4" />
              <rect x="470" y="170" width="90" height="40" rx="4" />

              <rect x="140" y="225" width="90" height="40" rx="4" />
              <rect x="250" y="225" width="90" height="40" rx="4" />
              <rect x="360" y="225" width="90" height="40" rx="4" />
              <rect x="470" y="225" width="90" height="40" rx="4" />
            </g>
            <text
              x="360"
              y="290"
              textAnchor="middle"
              fontSize="13"
              fontWeight="600"
              fill="var(--color-foreground)"
            >
              3. Logical components (the domains &amp; entities filling the
              frame)
            </text>
          </g>

          {/* floor */}
          <rect
            x="60"
            y="374"
            width="600"
            height="30"
            fill="var(--color-accent)"
            opacity="0.85"
          />
          <rect
            x="120"
            y="404"
            width="60"
            height="16"
            fill="var(--color-accent)"
            opacity="0.6"
          />
          <rect
            x="330"
            y="404"
            width="60"
            height="16"
            fill="var(--color-accent)"
            opacity="0.6"
          />
          <rect
            x="540"
            y="404"
            width="60"
            height="16"
            fill="var(--color-accent)"
            opacity="0.6"
          />
          <text
            x="360"
            y="394"
            textAnchor="middle"
            fill="var(--color-background)"
            fontSize="13"
            fontWeight="600"
          >
            structure supports everything above
          </text>
        </svg>
      </DiagramFigure>

      <h2>Why this ordering matters</h2>
      <p>
        Note the numbering in the diagram: <strong>characteristics and
        components come first</strong>, decisions and style follow from
        them. This is the opposite of how architecture often gets done badly
        in practice — picking "we'll use microservices" on day one because
        it's fashionable, before anyone has agreed what the system actually
        needs to be good at. The book's ordering forces the question "what
        must this system <em>do</em> well?" before "what should this system{" "}
        <em>look like</em>?"
      </p>

      <h2>Architecture decisions are rules, not preferences</h2>
      <p>
        The fourth dimension — decisions — is easy to underrate because it
        sounds administrative. The book's example is concrete: in a layered
        architecture, an architect might decide that <strong>only</strong>{" "}
        the Business and Services layers can talk to the database, cutting
        the Presentation layer off from direct database access.
      </p>

      <DiagramFigure caption="Reconstruction of Figure 1-5: an architecture decision as an enforced rule — Presentation may not reach Persistence directly, even though nothing in the code itself prevents it.">
        <svg
          viewBox="0 0 640 300"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="13"
        >
          <g stroke="var(--color-border)" fill="none">
            <rect
              x="40"
              y="20"
              width="560"
              height="46"
              rx="4"
              fill="var(--color-surface)"
              stroke="var(--color-accent)"
            />
            <rect
              x="40"
              y="76"
              width="560"
              height="46"
              rx="4"
              fill="var(--color-surface)"
              stroke="var(--color-accent)"
            />
            <rect
              x="40"
              y="132"
              width="560"
              height="46"
              rx="4"
              fill="var(--color-surface)"
              stroke="var(--color-accent)"
            />
            <rect
              x="40"
              y="188"
              width="560"
              height="46"
              rx="4"
              fill="var(--color-surface)"
              stroke="var(--color-accent)"
            />
            <rect
              x="40"
              y="244"
              width="560"
              height="46"
              rx="4"
              fill="var(--color-surface)"
              stroke="var(--color-accent)"
            />
          </g>
          <g fill="var(--color-foreground)" fontWeight="600">
            <text x="60" y="48">
              Presentation layer
            </text>
            <text x="60" y="104">
              Business layer
            </text>
            <text x="60" y="160">
              Services layer
            </text>
            <text x="60" y="216">
              Persistence layer
            </text>
            <text x="60" y="272">
              Database layer
            </text>
          </g>
          <g fill="var(--color-muted-foreground)" fontSize="11">
            <text x="560" y="48" textAnchor="end">
              closed
            </text>
            <text x="560" y="104" textAnchor="end">
              closed
            </text>
            <text x="560" y="160" textAnchor="end">
              open
            </text>
            <text x="560" y="216" textAnchor="end">
              closed
            </text>
            <text x="560" y="272" textAnchor="end">
              closed
            </text>
          </g>
          {/* allowed path: services -> persistence */}
          <path
            d="M 320 178 L 320 188"
            stroke="var(--color-success)"
            strokeWidth="3"
            markerEnd="url(#arrowGreen)"
          />
          {/* disallowed: presentation -> persistence, big X */}
          <path
            d="M 100 66 C 60 130, 60 160, 100 188"
            stroke="var(--color-destructive)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5 4"
          />
          <text x="20" y="130" fill="var(--color-destructive)" fontSize="20" fontWeight="700">
            ✕
          </text>
          <defs>
            <marker
              id="arrowGreen"
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

      <BookQuote cite='Chapter 1, "Defining Software Architecture," p. 5'>
        <p>
          Architecture decisions form the constraints of the system and
          direct the development teams on what is and what isn't allowed.
        </p>
      </BookQuote>

      <p>
        Nothing about Java, C#, or any framework <em>stops</em> a
        Presentation-layer class from importing a database driver directly.
        The rule only exists because an architect declared it and the team
        enforces it — by convention, code review, or (as Chapter 6 covers
        later) automated fitness functions. This is a preview of a theme
        that recurs constantly in this book: architecture is as much about{" "}
        <em>governance</em> of decisions as it is about the diagrams that
        describe them.
      </p>

      <Recall
        question={
          <p>
            Put these four dimensions in the order the book analyzes them:{" "}
            <em>
              architecture decisions, architecture style, architectural
              characteristics, logical components.
            </em>
          </p>
        }
      >
        <p>
          Architectural characteristics → logical components → architecture
          style → architecture decisions. Characteristics and components are
          analyzed first (they define what the system must do and what it's
          made of); style and decisions follow as the implementation
          consequence.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Richards &amp; Ford,{" "}
        <em>Fundamentals of Software Architecture</em>, 2nd ed., Chapter 1,
        "Defining Software Architecture," pp. 2–6. See also the{" "}
        <Link to="/fundamentals-of-software-architecture/glossary">
          glossary
        </Link>{" "}
        for quick lookup of these four terms later.
      </SourceBox>
    </>
  )
}
