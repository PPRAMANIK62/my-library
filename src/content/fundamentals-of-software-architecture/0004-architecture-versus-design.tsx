import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import { Link } from "react-router-dom"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0004-architecture-versus-design",
  book: "fundamentals-of-software-architecture",
  title: "Architecture Versus Design",
  kind: "lesson",
  order: 4,
  chapter: 2,
  totalChapters: 27,
  noteIndex: 1,
  totalNotes: 5,
}

export default function Chunk() {
  return (
    <>
      <p>
        Picture your dream house. How many floors, is the roof flat or
        peaked, how many bedrooms — that's <strong>architecture</strong>: the
        overall structure and shape. Now picture the inside: carpeting or
        hardwood, wall color, floor lamps or hanging lights — that's{" "}
        <strong>design</strong>: appearance, not structure. The book opens
        Chapter 2 with exactly this analogy because the software version of
        the distinction is genuinely hard to see in the moment, even though
        it's easy to see in a house.
      </p>

      <BookQuote cite='Chapter 2, "Architecture Versus Design," p. 17'>
        <p>
          Software architecture is less about a system's appearance and more
          about its structure, whereas design is more about a system's
          appearance and less about its structure.
        </p>
      </BookQuote>

      <p>
        Choosing microservices defines the structure and shape of a system —
        that's architecture. The look and feel of a UI screen — that's
        design. But most real decisions (should this service be split into
        two? which UI framework?) don't sit cleanly at either end. The book
        gives three criteria to locate a decision on the spectrum, rather
        than a hard rule for sorting it into a box.
      </p>

      <DiagramFigure caption="Reconstruction of Figure 2-1 — the spectrum between architecture and design, with the three placement criteria this lesson covers.">
        <svg
          viewBox="0 0 700 170"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <defs>
            <linearGradient id="ad-spectrum" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b6e8a" />
              <stop offset="100%" stopColor="#8a3b2f" />
            </linearGradient>
          </defs>
          <rect
            x="40"
            y="60"
            width="620"
            height="20"
            rx="10"
            fill="url(#ad-spectrum)"
          />
          <text
            x="40"
            y="45"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-foreground)"
          >
            Design
          </text>
          <text
            x="660"
            y="45"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-foreground)"
            textAnchor="end"
          >
            Architecture
          </text>
          <g
            fontSize="12"
            fill="var(--color-muted-foreground)"
            textAnchor="middle"
          >
            <text x="130" y="110">Rearrange fields</text>
            <text x="130" y="125">on a screen</text>

            <text x="350" y="110">Split a class</text>
            <text x="350" y="125">into two files</text>

            <text x="580" y="110">Monolith →</text>
            <text x="580" y="125">microservices</text>
          </g>
          <g fill="var(--color-accent)">
            <circle cx="130" cy="80" r="5" />
            <circle cx="350" cy="80" r="5" />
            <circle cx="580" cy="80" r="5" />
          </g>
          <text
            x="350"
            y="155"
            textAnchor="middle"
            fontSize="12"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            Located by: how strategic? how much effort to change? how
            significant are the trade-offs?
          </text>
        </svg>
      </DiagramFigure>

      <h2>Criterion 1 — Strategic versus tactical</h2>
      <p>
        The more strategic a decision, the more architectural it is; the
        more tactical, the more it's design. The book offers three questions
        to tell them apart:
      </p>
      <Concept label="Three questions for strategic vs. tactical">
        <ol className="my-0 list-decimal pl-5">
          <li>
            How much thought and planning is involved? (Minutes → design.
            Weeks → architecture.)
          </li>
          <li>
            How many people are involved? (Just you or a colleague → design.
            Many stakeholders and meetings → architecture.)
          </li>
          <li>
            Is it a long-term vision or a short-term action? (Likely to
            change soon → design. Will last a long time → architecture.)
          </li>
        </ol>
      </Concept>
      <p>
        The book is upfront that these questions are "a bit subjective" —
        this isn't a formula that outputs a clean answer, it's a way to
        reason about a fuzzy line.
      </p>

      <h2>Criterion 2 — Level of effort</h2>
      <BookQuote cite='Martin Fowler, quoted in Chapter 2, "Level of Effort," p. 19'>
        <p>Architecture is "the stuff that's hard to change."</p>
      </BookQuote>
      <p>
        Moving from a monolithic layered architecture to microservices
        takes significant effort — architecture. Rearranging fields on a
        screen takes minimal effort — design. This criterion is really a
        proxy for the first: things that are strategic tend to be hard to
        undo precisely because so much else gets built on top of them.
      </p>

      <h2>Criterion 3 — The significance of trade-offs</h2>
      <p>
        The more significant the trade-offs, the more architectural the
        decision. Microservices buy scalability, agility, elasticity, and
        fault tolerance — at the cost of complexity, expense, weaker data
        consistency, and slower performance from service coupling. Those are
        large trade-offs on both sides, which is why the decision sits
        firmly on the architecture end. Splitting a class into two files
        also has a trade-off (better readability and maintainability, at the
        cost of managing one more file) — but it's a small one, so the
        decision sits on the design end.
      </p>

      <Recall
        question={
          <p>
            Name the three criteria the book uses to locate a decision on
            the architecture/design spectrum.
          </p>
        }
      >
        <p>
          (1) Strategic vs. tactical — how much thought/planning, how many
          people, long-term vision or short-term action. (2) Level of effort
          to change or construct. (3) How significant the trade-offs are.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Richards &amp; Ford,{" "}
        <em>Fundamentals of Software Architecture</em>, 2nd ed., Chapter 2,
        "Architectural Thinking" — "Architecture Versus Design," "Strategic
        Versus Tactical Decisions," "Level of Effort," "The Significance of
        Trade-Offs," pp. 17–19. Martin Fowler's original essay is worth
        reading directly:{" "}
        <a href="https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf">
          "Who Needs an Architect?", IEEE Software, 2003
        </a>
        . See also the{" "}
        <Link to="/fundamentals-of-software-architecture/glossary">
          glossary
        </Link>
        .
      </SourceBox>
    </>
  )
}
