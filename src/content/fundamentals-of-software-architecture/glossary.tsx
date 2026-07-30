import { Link } from "react-router-dom"

import { Concept } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "glossary",
  book: "fundamentals-of-software-architecture",
  title: "Glossary",
  kind: "reference",
  order: 1001,
}

export default function Chunk() {
  return (
    <>
      <p className="text-sm text-muted-foreground">
        Every term the book introduces, in the order it's useful to look
        them up. Each entry links back to the lesson where it was actually
        taught — read the lesson for the reasoning, use this page for the
        quick recall.
      </p>

      <h2>A</h2>

      <Concept label="Accidental architect">
        <p>
          Someone already making architecture decisions in practice, without
          holding the formal title "software architect" — yet. <em>Ch. 1</em>
        </p>
      </Concept>

      <Concept label='Architecture characteristics ("-ilities")'>
        <p>
          The capabilities and success criteria a system must have —
          availability, scalability, security, and so on. They define{" "}
          <strong>what the system should do</strong>, as distinct from its
          structure or components.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/fundamentals-of-software-architecture/0001-defining-software-architecture">
              Defining Software Architecture
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Architecture decisions">
        <p>
          The rules that constrain how a system is built — e.g. "only the
          Business and Services layers may access the database." They define
          what is and isn't allowed for development teams.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/fundamentals-of-software-architecture/0001-defining-software-architecture">
              Defining Software Architecture
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Architecture style">
        <p>
          The named topology a system's structure follows (layered,
          microservices, event-driven, etc.) — the starting scaffold chosen
          once characteristics and components are understood.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/fundamentals-of-software-architecture/0001-defining-software-architecture">
              Defining Software Architecture
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Architecture vitality">
        <p>
          An assessment of how viable an architecture defined years ago
          still is today, given how business and technology have moved on
          since.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/fundamentals-of-software-architecture/0003-expectations-of-a-software-architect">
              Expectations of a Software Architect
            </Link>
          </em>
        </p>
      </Concept>

      <h2>L</h2>

      <Concept label="Logical components">
        <p>
          The domains, entities, and workflows that structure a system's{" "}
          <strong>behavior</strong> — as distinct from the characteristics
          that define its capabilities.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/fundamentals-of-software-architecture/0001-defining-software-architecture">
              Defining Software Architecture
            </Link>
          </em>
        </p>
      </Concept>

      <h2>S</h2>

      <Concept label="Structural decay">
        <p>
          What happens when developers make coding or design changes that
          quietly erode the architectural characteristics (performance,
          availability, scalability...) the architecture was meant to
          guarantee.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/fundamentals-of-software-architecture/0003-expectations-of-a-software-architect">
              Expectations of a Software Architect
            </Link>
          </em>
        </p>
      </Concept>

      <h2>T</h2>

      <Concept label="Technical breadth">
        <p>
          Familiarity with the trade-offs of many technologies, without
          needing expert-level depth in all of them — the opposite skill
          profile from a senior engineer, who typically goes deep on few.
          The book's example: better to know the pros/cons of 10 caching
          products than be an expert in one.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/fundamentals-of-software-architecture/0003-expectations-of-a-software-architect">
              Expectations of a Software Architect
            </Link>
          </em>
        </p>
      </Concept>

      <h2>The Three Laws</h2>

      <Concept label="First Law of Software Architecture">
        <p>
          "Everything in software architecture is a trade-off." If you think
          you've found something that isn't a trade-off, you likely haven't
          identified the trade-off yet — and trade-off analysis isn't a
          one-time exercise.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/fundamentals-of-software-architecture/0002-laws-of-software-architecture">
              The Laws of Software Architecture
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Second Law of Software Architecture">
        <p>
          "Why is more important than how." The reasoning and trade-offs
          behind a decision matter more than the mechanics of the decision
          itself.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/fundamentals-of-software-architecture/0002-laws-of-software-architecture">
              The Laws of Software Architecture
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Third Law of Software Architecture">
        <p>
          "Most architecture decisions aren't binary but rather exist on a
          spectrum between extremes." New in the 2nd edition.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/fundamentals-of-software-architecture/0002-laws-of-software-architecture">
              The Laws of Software Architecture
            </Link>
          </em>
        </p>
      </Concept>
    </>
  )
}
