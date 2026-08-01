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

      <h2>B</h2>

      <Concept label="Bottleneck Trap Antipattern">
        <p>
          An architect takes ownership of critical-path code (usually
          framework or the trickiest parts) and becomes a bottleneck for
          the team, since they aren't a full-time developer. Fix: delegate
          the critical path, code minor business functionality instead.{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/fundamentals-of-software-architecture/0008-business-drivers-and-staying-hands-on">
              Business Drivers &amp; Staying Hands-On
            </Link>
          </em>
        </p>
      </Concept>

      <h2>F</h2>

      <Concept label="Frozen Caveman Antipattern">
        <p>
          An architect who reverts to one pet irrational concern on every
          project, regardless of whether it's actually relevant to the
          situation at hand — usually the residue of being burned once by a
          real risk in the past.{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/fundamentals-of-software-architecture/0005-technical-breadth-and-the-knowledge-pyramid">
              Technical Breadth &amp; the Knowledge Pyramid
            </Link>
          </em>
        </p>
      </Concept>

      <h2>K</h2>

      <Concept label="Knowledge pyramid">
        <p>
          A model of all technical knowledge in three tiers: stuff you know
          (smallest), stuff you know you don't know (bigger), and stuff you
          don't know you don't know (largest). Architects work the top two
          tiers; developers focus mostly on the top.{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/fundamentals-of-software-architecture/0005-technical-breadth-and-the-knowledge-pyramid">
              Technical Breadth &amp; the Knowledge Pyramid
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

      <Concept label="Strategic vs. tactical decision">
        <p>
          A way to place a decision on the architecture/design spectrum:
          strategic decisions (long-term, lots of planning, many
          stakeholders) skew architectural; tactical decisions (short-term,
          quick, few people) skew design.{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/fundamentals-of-software-architecture/0004-architecture-versus-design">
              Architecture Versus Design
            </Link>
          </em>
        </p>
      </Concept>

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

      <Concept label="Technology radar">
        <p>
          A living document assessing technologies/techniques across four
          quadrants (Tools, Languages &amp; Frameworks, Techniques,
          Platforms) and four rings (Hold, Assess, Trial, Adopt), from
          Thoughtworks; kept personally as a tool for deliberately directing
          technical-breadth time.{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/fundamentals-of-software-architecture/0006-building-a-personal-technology-radar">
              Building a Personal Technology Radar
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
