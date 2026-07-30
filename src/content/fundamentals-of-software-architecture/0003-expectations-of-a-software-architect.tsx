import {
  Concept,
  BookQuote,
  DiagramFigure,
  Recall,
  SourceBox,
} from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0003-expectations-of-a-software-architect",
  book: "fundamentals-of-software-architecture",
  title: "Expectations of a Software Architect",
  kind: "lesson",
  order: 3,
  chapter: 1,
  totalChapters: 27,
  noteIndex: 3,
  totalNotes: 3,
}

export default function Chunk() {
  return (
    <>
      <p>
        The job title "software architect" varies wildly between companies —
        expert programmer at one, strategic technical director at another.
        Rather than fight that variance, the book sidesteps the definition
        problem entirely and asks a more answerable question:{" "}
        <em>regardless of title, what is any software architect expected to
        do?</em> Their answer is eight expectations.
      </p>

      <BookQuote cite='Chapter 1, "Expectations of an Architect," p. 8'>
        <p>
          The role of a software architect can range from acting as an
          expert programmer to defining an entire company's strategic
          technical direction. This makes trying to define it a fool's
          errand, but what we can tell you more readily is what's{" "}
          <em>expected</em> of a software architect.
        </p>
      </BookQuote>

      <DiagramFigure caption="The eight core expectations — irrespective of title, role, or job description (p. 8).">
        <svg
          viewBox="0 0 700 440"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="12"
        >
          <circle
            cx="350"
            cy="220"
            r="150"
            fill="none"
            stroke="var(--color-border)"
            strokeDasharray="3 3"
          />
          <circle cx="350" cy="220" r="55" fill="var(--color-accent)" />
          <text
            x="350"
            y="216"
            textAnchor="middle"
            fill="var(--color-background)"
            fontWeight="600"
            fontSize="13"
          >
            The
          </text>
          <text
            x="350"
            y="232"
            textAnchor="middle"
            fill="var(--color-background)"
            fontWeight="600"
            fontSize="13"
          >
            Architect
          </text>

          <g stroke="var(--color-muted-foreground)" strokeWidth="1">
            <line x1="350" y1="220" x2="500" y2="220" />
            <line x1="350" y1="220" x2="456" y2="114" />
            <line x1="350" y1="220" x2="350" y2="70" />
            <line x1="350" y1="220" x2="244" y2="114" />
            <line x1="350" y1="220" x2="200" y2="220" />
            <line x1="350" y1="220" x2="244" y2="326" />
            <line x1="350" y1="220" x2="350" y2="370" />
            <line x1="350" y1="220" x2="456" y2="326" />
          </g>

          <g fill="var(--color-surface)" stroke="var(--color-accent)">
            <rect x="440" y="198" width="120" height="44" rx="6" />
            <rect x="400" y="90" width="130" height="44" rx="6" />
            <rect x="285" y="46" width="130" height="44" rx="6" />
            <rect x="160" y="90" width="130" height="44" rx="6" />
            <rect x="130" y="198" width="130" height="44" rx="6" />
            <rect x="150" y="304" width="150" height="44" rx="6" />
            <rect x="285" y="348" width="130" height="44" rx="6" />
            <rect x="410" y="304" width="140" height="44" rx="6" />
          </g>
          <g fill="var(--color-foreground)" textAnchor="middle" fontWeight="600">
            <text x="500" y="216">
              Understand
            </text>
            <text x="500" y="230">
              diverse tech
            </text>

            <text x="465" y="108">
              Know the
            </text>
            <text x="465" y="122">
              business domain
            </text>

            <text x="350" y="64">
              Possess
            </text>
            <text x="350" y="78">
              interpersonal skills
            </text>

            <text x="225" y="108">
              Navigate
            </text>
            <text x="225" y="122">
              org. politics
            </text>

            <text x="195" y="216">
              Make architecture
            </text>
            <text x="195" y="230">
              decisions
            </text>

            <text x="225" y="322">
              Continually analyze
            </text>
            <text x="225" y="336">
              the architecture
            </text>

            <text x="350" y="366">
              Keep current
            </text>
            <text x="350" y="380">
              with trends
            </text>

            <text x="480" y="322">
              Ensure compliance
            </text>
            <text x="480" y="336">
              with decisions
            </text>
          </g>
        </svg>
      </DiagramFigure>

      <h2>The eight, one at a time</h2>

      <Concept label="1 · Make architecture decisions">
        <BookQuote cite="p. 8">
          <p>
            An architect is expected to define the architecture decisions
            and design principles used to guide technology decisions within
            the team, within the department, or across the enterprise.
          </p>
        </BookQuote>
        <p>
          The key word is <em>guide</em>, not <em>specify</em>. Choosing
          React.js for the frontend is a technical decision; deciding the
          team must use "a reactive-based framework" is the architectural one
          — it constrains without picking the specific tool.
        </p>
      </Concept>

      <Concept label="2 · Continually analyze the architecture">
        <BookQuote cite="p. 9">
          <p>
            An architect is expected to continually analyze the architecture
            and the current technology environment and recommend solutions
            for improvement.
          </p>
        </BookQuote>
        <p>
          This is where architecture vitality and structural decay live — an
          architecture that was sound three years ago erodes as developers
          make small coding/design changes that quietly undercut
          performance, availability, or scalability. Testing and release
          speed count here too: code that's easy to change but takes months
          to release isn't actually agile.
        </p>
      </Concept>

      <Concept label="3 · Keep current with latest trends">
        <BookQuote cite="p. 9">
          <p>
            An architect is expected to keep current with the latest
            technology and industry trends.
          </p>
        </BookQuote>
        <p>
          Architecture decisions are long-lasting and hard to reverse, which
          is exactly why staying current matters more here than for a
          developer — a wrong long-term bet costs more than a wrong
          short-term one. The book's own example: cloud-based
          storage/deployment a decade ago, generative AI now.
        </p>
      </Concept>

      <Concept label="4 · Ensure compliance with decisions">
        <BookQuote cite="p. 10">
          <p>
            An architect is expected to ensure compliance with architecture
            decisions and design principles.
          </p>
        </BookQuote>
        <p>
          A decision nobody enforces isn't really a decision. The book's
          example: you restrict the Presentation layer from touching the
          database directly, a UI developer bypasses it "for performance,"
          and the very characteristic the rule was protecting (isolating the
          DB from Presentation-layer changes) silently breaks. Chapter 6
          covers automated <em>fitness functions</em> as the scalable way to
          catch this instead of relying on code review vigilance.
        </p>
      </Concept>

      <Concept label="5 · Understand diverse technologies">
        <BookQuote cite="p. 10">
          <p>
            An architect is expected to have exposure to multiple and
            diverse technologies, frameworks, platforms, and environments.
          </p>
        </BookQuote>
        <p>
          This is explicitly <strong>breadth over depth</strong> — the
          opposite skill profile from a strong senior developer. The book's
          example: knowing the pros and cons of 10 caching products beats
          deep expertise in just one.
        </p>
      </Concept>

      <Concept label="6 · Know the business domain">
        <BookQuote cite="p. 11">
          <p>
            An architect is expected to have a certain level of
            business-domain expertise.
          </p>
        </BookQuote>
        <p>
          You can't design an effective architecture for a problem you don't
          understand. The book's test case: an architect at a bank who
          doesn't know what an <em>average directional index</em> or{" "}
          <em>nonpriority debt</em> is will lose credibility with
          stakeholders fast, no matter how strong their technical skills
          are.
        </p>
      </Concept>

      <Concept label="7 · Possess interpersonal skills">
        <BookQuote cite="p. 11">
          <p>
            An architect is expected to possess exceptional interpersonal
            skills, including teamwork, facilitation, and leadership.
          </p>
        </BookQuote>
        <p>
          Quoting Gerald Weinberg: <em>
            "No matter what they tell you, it's always a people problem."
          </em>{" "}
          The book is blunt here — leadership skills are{" "}
          <strong>at least half</strong> of what makes an architect
          effective, and strong technologists who can't lead or mentor a
          team struggle to hold the role down, regardless of technical
          chops.
        </p>
      </Concept>

      <Concept label="8 · Understand and navigate politics">
        <BookQuote cite="p. 12">
          <p>
            An architect is expected to understand the political climate of
            the enterprise and be able to navigate its politics.
          </p>
        </BookQuote>
        <p>
          A developer's local design-pattern choice needs no one's approval.
          An architect's decision to wall off a CRM database into an
          "application silo" affects every other team that used to query it
          directly — and <em>almost every decision an architect makes will
          be challenged</em>. Negotiation isn't optional politics-avoidance;
          Chapter 25 treats it as a core skill because of exactly this
          dynamic.
        </p>
      </Concept>

      <Recall
        question={
          <p>
            Which of the eight expectations is about{" "}
            <em>breadth over depth</em> of technical knowledge, and what's
            the book's own example for it?
          </p>
        }
      >
        <p>
          "Understand diverse technologies" (#5) — the example given is
          knowing the pros and cons of 10 caching products rather than being
          a deep expert in just one.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Richards &amp; Ford,{" "}
        <em>Fundamentals of Software Architecture</em>, 2nd ed., Chapter 1,
        "Expectations of an Architect," pp. 8–13. Each expectation gets its
        own deep-dive chapter later: decisions (Ch. 21),
        compliance/fitness functions (Ch. 6), trends (Ch. 2), teams (Ch. 24),
        negotiation (Ch. 25).
      </SourceBox>
    </>
  )
}
