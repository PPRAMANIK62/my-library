import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0004-agentic-ai",
  book: "generative-ai-design-patterns",
  title: "Agentic AI: Autonomy and the Characteristics of Agents",
  kind: "lesson",
  order: 4,
  chapter: 1,
  totalChapters: 10,
  noteIndex: 4,
  totalNotes: 8,
}

export default function Chunk() {
  return (
    <>
      <p>
        Lesson 2 noted, in passing, that the PydanticAI class for invoking
        a model is literally called <code>Agent</code>. This lesson
        unpacks why that's not an arbitrary name — and what has to be true
        of a piece of software before the book is willing to call it an
        agent.
      </p>

      <h2>Agent, in the computer-science sense</h2>
      <Concept label="Agent">
        <p>
          A software entity that acts on behalf of a user or another
          program. When you invoke a foundational model with a role, some
          context, and an instruction, the LLM is acting as your agent in
          exactly this long-standing computer-science sense.
        </p>
      </Concept>

      <h2>Autonomy is the key differentiator</h2>
      <p>
        The book's running example is an inventory-management agent:
        given each item's stock level, recent weekly sales, and delivery
        lead time, the agent decides what to reorder and how much —
        without being told the reorder formula.
      </p>

      <BookQuote cite='Chapter 1, "Autonomy," p. 32'>
        <p>
          Compare this to traditional programming, where you'd have to
          write code to explicitly manage inventory. Such autonomy—which
          means the ability to operate independently without constant
          human guidance or being explicitly programmed to do so—is the
          key differentiator between traditional software and AI agents.
        </p>
      </BookQuote>

      <p>
        Nobody wrote a reorder-quantity formula into the agent's code.
        Given the raw data and the goal ("order just in time"), the LLM
        worked out on its own that item B's 100 units on hand wouldn't
        cover a 2-week delivery window against 70–90 units/week of demand,
        and proposed ordering 300.
      </p>

      <h2>Four characteristics, beyond autonomy</h2>
      <DiagramFigure caption="None of these four steps was explicitly programmed for the inventory example — the LLM supplied all of them from the goal and the raw data alone.">
        <svg
          viewBox="0 0 640 460"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <text x="320" y="24" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-foreground)">
            The agent loop, via the inventory-manager example
          </text>

          <circle cx="320" cy="240" r="185" fill="none" stroke="var(--color-border)" strokeDasharray="4 3" />

          <rect x="240" y="45" width="160" height="60" rx="8" fill="var(--color-surface)" stroke="var(--color-accent)" />
          <text x="320" y="68" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-accent)">
            Goal orientation
          </text>
          <text x="320" y="86" textAnchor="middle" fontSize="9" fill="var(--color-foreground)">
            "order just in time"
          </text>
          <text x="320" y="98" textAnchor="middle" fontSize="9" fill="var(--color-foreground)">
            (set in system prompt)
          </text>

          <rect x="440" y="180" width="170" height="60" rx="8" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="525" y="203" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-foreground)">
            Planning &amp; reasoning
          </text>
          <text x="525" y="221" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            projects demand over the
          </text>
          <text x="525" y="233" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            delivery window, unprompted
          </text>

          <rect x="310" y="345" width="170" height="60" rx="8" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="395" y="368" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-foreground)">
            Perception &amp; action
          </text>
          <text x="395" y="386" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            reads stock/sales data,
          </text>
          <text x="395" y="398" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            can call an order API
          </text>

          <rect x="30" y="180" width="170" height="60" rx="8" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="115" y="203" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-foreground)">
            Adaptability &amp; learning
          </text>
          <text x="115" y="221" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            Reflection / Self-Check
          </text>
          <text x="115" y="233" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            evaluate &amp; self-correct
          </text>

          <g stroke="var(--color-accent)" fill="none" strokeWidth="1.5" markerEnd="url(#arr4)">
            <path d="M380 100 C 440 130, 480 150, 500 180" />
            <path d="M480 235 C 440 300, 420 320, 400 343" />
            <path d="M310 400 C 220 400, 160 320, 130 242" />
            <path d="M140 182 C 180 130, 220 105, 260 95" />
          </g>
          <defs>
            <marker id="arr4" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 z" fill="var(--color-accent)" />
            </marker>
          </defs>
        </svg>
      </DiagramFigure>

      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Goal orientation</strong> — works toward an objective set
          in the system prompt, not just reacting to whatever's in the
          latest message.
        </li>
        <li>
          <strong>Planning and reasoning</strong> — chained several
          implicit steps (find recent sales range → project demand over the
          lead time → compute the shortfall → decide a reorder quantity)
          without being told the formula.
        </li>
        <li>
          <strong>Perception and action</strong> — can gather data it
          needs and act on its environment, typically via Tool Calling
          (Pattern 21, Chapter 7) — calling backend databases or even a
          vendor's ordering API directly.
        </li>
        <li>
          <strong>Adaptability and learning</strong> — can evaluate its own
          output and self-correct, which Reflection (Pattern 18) and
          Self-Check (Pattern 31) formalize later in the book.
        </li>
      </ul>

      <h2>A stated caveat, not a marketing claim</h2>
      <p>The book is explicit that this is aspirational, not solved:</p>
      <BookQuote cite='Chapter 1, "Characteristics of Agents," p. 33'>
        <p>
          At the time of writing, agentic behavior remains an aspirational
          goal for applications built on foundational models—nondeterminism,
          hallucinations, and various other failure modes pose challenges
          to building fully autonomous AI applications.
        </p>
      </BookQuote>
      <p>
        Run the exact same inventory prompt twice and you may get two
        different reorder quantities — planning "works in simple cases,
        but not in hard ones." Much of the rest of the book (Chain of
        Thought in Chapter 5, Reflection and Self-Check later) exists
        specifically to push that boundary further out.
      </p>

      <Recall
        question={
          <p>
            Of the four characteristics of agents, which one is
            illustrated by the agent working out, unprompted, how much of
            item B to reorder from raw sales and delivery data — and which
            is illustrated by giving the agent the ability to call a real
            ordering API instead of just reporting a number back to you?
          </p>
        }
      >
        <p>
          Working out the reorder quantity from raw data without an
          explicit formula is planning and reasoning. Giving the agent the
          ability to call a real ordering API (rather than just returning
          a recommended number) is perception and action — specifically
          the "action" half, typically implemented via Tool Calling.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Lakshmanan & Hapke,{" "}
        <em>Generative AI Design Patterns</em>, 1st ed., Chapter 1,
        "Agentic AI" (Autonomy; Characteristics of Agents), pp. 30–34.
      </SourceBox>
    </>
  )
}
