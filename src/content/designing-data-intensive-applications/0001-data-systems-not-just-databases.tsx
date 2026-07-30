import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0001-data-systems-not-just-databases",
  book: "designing-data-intensive-applications",
  title: "Data Systems, Not Just Databases",
  kind: "lesson",
  order: 1,
  chapter: 1,
  totalChapters: 12,
  noteIndex: 1,
  totalNotes: 4,
}

export default function Chunk() {
  return (
    <>
      <p>
        Kleppmann opens by naming the category this whole book lives in:{" "}
        <strong>data-intensive</strong> applications, as opposed to{" "}
        <strong>compute-intensive</strong> ones. For most applications today,
        raw CPU power isn't the bottleneck — the amount of data, the
        complexity of that data, and how fast it's changing is.
      </p>

      <p>
        A data-intensive application is usually assembled from standard
        building blocks, each solving one recurring problem:
      </p>

      <Concept label="The five building blocks">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Databases</strong> — store data so it (or another
            application) can find it again later.
          </li>
          <li>
            <strong>Caches</strong> — remember the result of an expensive
            operation, to speed up reads.
          </li>
          <li>
            <strong>Search indexes</strong> — let users search data by
            keyword or filter it in various ways.
          </li>
          <li>
            <strong>Stream processing</strong> — send a message to another
            process, to be handled asynchronously.
          </li>
          <li>
            <strong>Batch processing</strong> — periodically crunch a large
            amount of accumulated data.
          </li>
        </ul>
      </Concept>

      <p>
        These abstractions are so successful that most engineers use them all
        the time without thinking hard about them — nobody dreams of writing
        a new storage engine from scratch when a database is a perfectly good
        tool for the job. But reality gets messier once you're actually
        building something: there are many databases with different
        characteristics, several ways to build a search index, and it's
        often hard to combine tools when a single one can't do the whole job
        alone.
      </p>

      <h2>Why lump them together as "data systems"?</h2>
      <p>
        A database and a message queue look very different on the surface —
        but the line between categories has been blurring. There are
        datastores that double as message queues (Redis), and message queues
        with database-like durability guarantees (Apache Kafka).
        Increasingly, a single application's requirements are wide enough
        that no single tool can meet them all, so the work gets split across
        several tools stitched together by application code.
      </p>

      <DiagramFigure caption="When you combine several tools behind one API, you've built a new, special-purpose data system — and taken on the job of a data system designer, not just an application developer.">
        <svg
          viewBox="0 0 700 260"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <text
            x="350"
            y="26"
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-foreground)"
          >
            A composite data system (Figure 1-1, simplified)
          </text>

          <rect
            x="30"
            y="45"
            width="640"
            height="190"
            rx="8"
            fill="none"
            stroke="var(--color-border)"
            strokeDasharray="4 3"
          />

          <rect
            x="290"
            y="65"
            width="120"
            height="40"
            rx="6"
            fill="var(--color-surface)"
            stroke="var(--color-accent)"
          />
          <text x="350" y="90" textAnchor="middle" fontSize="12" fill="var(--color-accent)">
            Application code
          </text>

          <rect
            x="110"
            y="150"
            width="120"
            height="40"
            rx="6"
            fill="var(--color-background)"
            stroke="var(--color-accent)"
          />
          <text x="170" y="175" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            In-memory cache
          </text>

          <rect
            x="290"
            y="150"
            width="120"
            height="40"
            rx="6"
            fill="var(--color-background)"
            stroke="var(--color-accent)"
          />
          <text x="350" y="175" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            Primary database
          </text>

          <rect
            x="470"
            y="150"
            width="120"
            height="40"
            rx="6"
            fill="var(--color-background)"
            stroke="var(--color-accent)"
          />
          <text x="530" y="175" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            Full-text index
          </text>

          <g stroke="var(--color-accent)" fill="none" strokeWidth="1.5" markerEnd="url(#arr1)">
            <path d="M310 105 L200 148" />
            <path d="M350 105 L350 148" />
            <path d="M390 105 L500 148" />
          </g>
          <defs>
            <marker
              id="arr1"
              markerWidth="7"
              markerHeight="7"
              refX="3.5"
              refY="3.5"
              orient="auto"
            >
              <path d="M0,0 L7,3.5 L0,7 z" fill="var(--color-accent)" />
            </marker>
          </defs>

          <text
            x="350"
            y="215"
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            The API hides all three tools behind one interface — clients see
            a single, new data system.
          </text>
        </svg>
      </DiagramFigure>

      <p>
        When you wrap several tools behind one service interface, you've
        created a new composite data system — one that may promise its own
        guarantees (e.g. "the cache is always correctly invalidated on
        writes"). At that point you're not just an application developer;
        you're a <strong>data system designer</strong>, and questions like
        "how do I keep data correct when parts of the system fail?" and "how
        do I scale this?" become your problem.
      </p>

      <h2>Three concerns, for the whole book</h2>
      <p>
        Rather than exploring every possible property a system could have,
        Kleppmann narrows the book to three concerns that matter for almost
        every software system:
      </p>

      <BookQuote cite='Chapter 1, "Thinking About Data Systems," pp. 5–6'>
        <p>
          <strong>Reliability</strong> — The system should continue to work
          correctly (performing the correct function at the desired level of
          performance) even in the face of adversity (hardware or software
          faults, and even human error).
        </p>
        <p>
          <strong>Scalability</strong> — As the system grows (in data
          volume, traffic volume, or complexity), there should be reasonable
          ways of dealing with that growth.
        </p>
        <p>
          <strong>Maintainability</strong> — Over time, many different
          people will work on the system (engineering and operations, both
          maintaining current behavior and adapting the system to new use
          cases), and they should all be able to work on it productively.
        </p>
      </BookQuote>

      <p>
        These three words get thrown around loosely in everyday engineering
        talk. The whole point of this chapter — and the frame for the rest
        of the book — is to pin down exactly what each one means, before
        looking at the specific techniques and architectures used to achieve
        them.
      </p>

      <Recall
        question={
          <p>
            What's the difference between an application developer and a
            "data system designer," according to this section — and what
            triggers the shift from one to the other?
          </p>
        }
      >
        <p>
          An application developer uses existing data tools (databases,
          caches, search indexes) as-is. A data system designer combines
          several such tools behind a single service API — at which point
          they've effectively built a new, special-purpose data system and
          are on the hook for its guarantees (correctness, performance under
          failure, scaling), not just for calling the underlying tools
          correctly.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Kleppmann,{" "}
        <em>Designing Data-Intensive Applications</em>, 1st ed., Chapter 1,
        "Thinking About Data Systems," pp. 3–6.
      </SourceBox>
    </>
  )
}
