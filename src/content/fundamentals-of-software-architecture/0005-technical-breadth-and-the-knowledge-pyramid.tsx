import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import { Link } from "react-router-dom"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0005-technical-breadth-and-the-knowledge-pyramid",
  book: "fundamentals-of-software-architecture",
  title: "Technical Breadth & the Knowledge Pyramid",
  kind: "lesson",
  order: 5,
  chapter: 2,
  totalChapters: 27,
  noteIndex: 2,
  totalNotes: 5,
}

export default function Chunk() {
  return (
    <>
      <p>
        Developers are rewarded for depth: being the person who really
        knows Java, or Postgres, or Kubernetes internals. Architects need
        the opposite skill profile. Not because depth stops mattering, but
        because an architect's job is to match capabilities to constraints
        across a wide range of possible solutions — and you can't do that if
        you've only ever looked closely at one.
      </p>

      <Concept label="Depth vs. breadth">
        <p>
          <strong>Technical depth</strong> — deep knowledge of one language,
          platform, framework, or product.
          <br />
          <strong>Technical breadth</strong> — knowing a little about a lot
          of things.
        </p>
      </Concept>

      <h2>The knowledge pyramid</h2>
      <p>The book frames all technical knowledge in the world as three tiers:</p>
      <Concept label="Three tiers">
        <ol className="my-0 list-decimal pl-5">
          <li>
            <strong>Stuff you know</strong> — what you're good, even expert,
            at. The smallest tier: nobody can be expert at everything.
          </li>
          <li>
            <strong>Stuff you know you don't know</strong> — things you've
            heard of, have a rough sense of, but couldn't actually use (e.g.
            most technologists know Clojure is a Lisp-based language but
            couldn't write it). Bigger than the top tier.
          </li>
          <li>
            <strong>Stuff you don't know you don't know</strong> — the
            perfect solution to your current problem, that you have no idea
            exists. By far the largest tier.
          </li>
        </ol>
      </Concept>

      <DiagramFigure caption="Reconstruction of Figure 2-2 — the knowledge pyramid. The goal for any career: move things down-to-up, from &quot;don't know you don't know&quot; toward &quot;know.&quot;">
        <svg
          viewBox="0 0 500 340"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="13"
        >
          <polygon
            points="250,20 90,300 410,300"
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="1.5"
          />
          <line x1="180" y1="160" x2="320" y2="160" stroke="var(--color-border)" />
          <line x1="130" y1="240" x2="370" y2="240" stroke="var(--color-border)" />

          <polygon points="250,20 210,90 290,90" fill="#8a3b2f" opacity="0.85" />
          <text
            x="250"
            y="115"
            textAnchor="middle"
            fill="var(--color-foreground)"
            fontWeight="600"
          >
            Stuff you know
          </text>

          <polygon
            points="210,90 290,90 320,160 180,160"
            fill="#c96b56"
            opacity="0.55"
          />
          <text
            x="250"
            y="200"
            textAnchor="middle"
            fill="var(--color-foreground)"
            fontWeight="600"
          >
            Stuff you know
          </text>
          <text
            x="250"
            y="216"
            textAnchor="middle"
            fill="var(--color-foreground)"
            fontWeight="600"
          >
            you don't know
          </text>

          <polygon
            points="180,160 320,160 370,240 130,240"
            fill="#e6a893"
            opacity="0.4"
          />
          <polygon
            points="130,240 370,240 410,300 90,300"
            fill="#e6a893"
            opacity="0.25"
          />
          <text
            x="250"
            y="280"
            textAnchor="middle"
            fill="var(--color-foreground)"
            fontWeight="600"
          >
            Stuff you don't know
          </text>
          <text
            x="250"
            y="296"
            textAnchor="middle"
            fill="var(--color-foreground)"
            fontWeight="600"
          >
            you don't know
          </text>
        </svg>
      </DiagramFigure>

      <h2>The shift when you become an architect</h2>
      <p>
        Early in a developer's career, expanding the top tier — becoming an
        expert — is the goal, and it requires ongoing maintenance (expertise
        decays if you stop using it). But the value an architect brings is
        different: it's better to know that five solutions to a problem
        exist than to be the world's leading expert in just one of them. For
        an architect, the two tiers that matter most are the top and the
        middle — and specifically <em>how far the middle tier reaches into
        the bottom one</em> is what "technical breadth" means.
      </p>

      <BookQuote cite='Chapter 2, "Technical Breadth," p. 22'>
        <p>For an architect, breadth is more important than depth.</p>
      </BookQuote>

      <p>
        The practical consequence is uncomfortable: architects should
        deliberately let some hard-won expertise atrophy in order to spend
        that time broadening their portfolio. A few areas of depth will
        remain — usually the ones you genuinely enjoy — but the shape of the
        pyramid should change on purpose, not by accident.
      </p>

      <Concept label="Frozen Caveman Antipattern">
        <p>
          An architect who reverts to one pet irrational concern on every
          project, regardless of whether it's actually relevant. The book's
          example: a team once lost communication with its Italy stores due
          to a freak outage — years later, every proposal from that client's
          architects still got met with "but what if we lose Italy?", no
          matter how unlikely a repeat was. Being burned once by a real risk
          doesn't mean that risk deserves permanent veto power over every
          future decision.
        </p>
      </Concept>

      <p>
        This antipattern is really a breadth failure in disguise: the
        architect is running every new problem through the one lens they
        know deeply, instead of seeing the wider set of solutions their role
        is supposed to give them access to.
      </p>

      <Recall
        question={
          <p>
            Which two tiers of the knowledge pyramid matter most for an
            architect, and what does "technical breadth" specifically
            measure?
          </p>
        }
      >
        <p>
          The top tier ("stuff you know") and the middle tier ("stuff you
          know you don't know") matter most. Technical breadth measures how
          far the middle tier extends into the bottom tier — how much of
          "what you don't know you don't know" you've at least surfaced into
          awareness.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Richards &amp; Ford,{" "}
        <em>Fundamentals of Software Architecture</em>, 2nd ed., Chapter 2,
        "Technical Breadth," pp. 20–24 (includes "Frozen Caveman
        Antipattern," p. 24). See the{" "}
        <Link to="/fundamentals-of-software-architecture/glossary">
          glossary
        </Link>{" "}
        for these terms at a glance.
      </SourceBox>
    </>
  )
}
