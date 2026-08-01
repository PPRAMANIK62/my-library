import {
  Concept,
  BookQuote,
  DiagramFigure,
  Recall,
  SourceBox,
} from "@/components/reader"
import { Link } from "react-router-dom"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0003-complexity-defined",
  book: "a-philosophy-of-software-design",
  title: "Complexity Defined",
  kind: "lesson",
  order: 3,
  chapter: 2,
  totalChapters: 21,
  noteIndex: 1,
  totalNotes: 3,
}

export default function Chunk() {
  return (
    <>
      <p>
        Chapter 1 used "complexity" as if everyone already agrees what it
        means. Chapter 2 stops to actually define it — and the definition is
        more specific, and more useful, than "the code is big" or "the code
        is hard to read."
      </p>

      <Concept label="Complexity">
        <p>
          Anything related to the structure of a software system that makes
          it hard to <strong>understand</strong> and <strong>modify</strong>{" "}
          the system. If a system is hard to understand and modify, it's
          complex. If it's easy, it's simple.
        </p>
      </Concept>

      <BookQuote cite='Chapter 2, Section 2.1, "Complexity defined," p. 4'>
        <p>
          You can also think of complexity in terms of cost and benefit. In a
          complex system, it takes a lot of work to implement even small
          improvements. In a simple system, larger improvements can be
          implemented with less effort.
        </p>
      </BookQuote>

      <h2>Complexity is a moment, not a size</h2>
      <p>
        This is the part of the definition worth sitting with: complexity is{" "}
        <strong>
          what a developer experiences at a particular point in time when
          trying to achieve a particular goal
        </strong>
        . It has nothing to do with how big or sophisticated the system is
        overall.
      </p>
      <p>
        A large, feature-rich system that's still easy to work on is{" "}
        <em>not</em> complex by this definition — even though people would
        casually call it "complex" in conversation. Ousterhout concedes most
        large sophisticated systems <em>are</em> in fact hard to work on, so
        they usually meet both definitions at once. But the two ideas
        (size/sophistication vs. complexity) are logically separate, and a
        small, unsophisticated system can absolutely be complex if it's
        confusing to change.
      </p>

      <h2>Complexity is weighted by where developers actually spend time</h2>
      <p>The book gives a crude formula for the complexity of a whole system:</p>

      <DiagramFigure caption="C = Σ (cp × tp) — a module's contribution to overall complexity is its own complexity weighted by how much time developers spend in it. A messy corner nobody visits barely counts.">
        <svg
          viewBox="0 0 700 230"
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
            Same total mess, very different overall complexity
          </text>

          <g>
            <rect
              x="30"
              y="60"
              width="290"
              height="140"
              rx="8"
              fill="#f3e6df"
              stroke="#8a3b2f"
            />
            <text
              x="175"
              y="88"
              textAnchor="middle"
              fontSize="13"
              fontWeight="600"
              fill="#8a3b2f"
            >
              Payment gateway internals
            </text>
            <path
              d="M60 110 q15 -15 30 0 t30 0 t30 0 t30 0 t30 0 t30 0"
              stroke="#b23b3b"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M60 130 q10 20 25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0"
              stroke="#b23b3b"
              strokeWidth="2"
              fill="none"
            />
            <text
              x="175"
              y="165"
              textAnchor="middle"
              fontSize="12"
              fill="var(--color-foreground)"
              fontWeight="600"
            >
              very complex (c high)
            </text>
            <text
              x="175"
              y="184"
              textAnchor="middle"
              fontSize="11"
              fill="var(--color-muted-foreground)"
            >
              touched twice a year (t low)
            </text>
          </g>

          <g>
            <rect
              x="380"
              y="60"
              width="290"
              height="140"
              rx="8"
              fill="#f3e6df"
              stroke="#8a3b2f"
            />
            <text
              x="525"
              y="88"
              textAnchor="middle"
              fontSize="13"
              fontWeight="600"
              fill="#8a3b2f"
            >
              Config loader
            </text>
            <path
              d="M410 120 q8 -8 16 0 t16 0 t16 0"
              stroke="#b23b3b"
              strokeWidth="2"
              fill="none"
            />
            <text
              x="525"
              y="165"
              textAnchor="middle"
              fontSize="12"
              fill="var(--color-foreground)"
              fontWeight="600"
            >
              mildly complex (c low)
            </text>
            <text
              x="525"
              y="184"
              textAnchor="middle"
              fontSize="11"
              fill="var(--color-muted-foreground)"
            >
              touched every sprint (t high)
            </text>
          </g>

          <text
            x="350"
            y="220"
            textAnchor="middle"
            fontSize="12"
            fill="var(--color-accent)"
            fontWeight="600"
          >
            The config loader dominates the complexity developers actually
            feel.
          </text>
        </svg>
      </DiagramFigure>

      <BookQuote cite='Chapter 2, Section 2.1, "Complexity defined," p. 4'>
        <p>
          Isolating complexity in a place where it will never be seen is
          almost as good as eliminating the complexity entirely.
        </p>
      </BookQuote>

      <p>
        This is the theoretical justification for Chapter 1's "encapsulate"
        strategy: hiding an ugly implementation behind a rarely-touched,
        well-defined boundary isn't a cop-out — by this formula, it genuinely
        reduces the complexity the system's other developers experience,
        even if the ugliness itself never gets cleaned up.
      </p>

      <h2>Complexity is more visible to readers than to writers</h2>
      <BookQuote cite='Chapter 2, Section 2.1, "Complexity defined," p. 4'>
        <p>
          If you write a piece of code and it seems simple to you, but other
          people think it is complex, then it is complex.
        </p>
      </BookQuote>
      <p>
        This is a humility check with a concrete process attached: the book
        doesn't just say "trust others' judgment," it tells you what to do
        about a disagreement — <em>probe the other developer for why the code
        seems complex to them</em>. The gap between your opinion and theirs
        is usually where the real lesson is. This is also the theoretical
        backbone for Chapter 1's advice to pair the book with code reviews:
        reviewers are, structurally, in the better position to judge
        complexity than the author is.
      </p>

      <Recall
        question={
          <p>
            A module is genuinely tangled inside, but developers only touch
            it once a year. According to the book's formula, does it
            contribute a lot or a little to the system's overall complexity —
            and why?
          </p>
        }
      >
        <p>
          A little. Overall complexity is each part's complexity weighted by
          the fraction of time developers spend working on it, so a highly
          complex part that's rarely touched contributes almost nothing —
          isolating complexity somewhere it won't be seen is nearly as good
          as removing it.
        </p>
      </Recall>

      <p>
        This chapter's model — the definition, the three symptoms it
        produces, and the two root causes behind it — is dense enough to be
        worth its own quick-reference page:{" "}
        <Link to="/a-philosophy-of-software-design/complexity-model">
          Reference: The Complexity Model
        </Link>
        .
      </p>

      <SourceBox>
        <strong>Primary source:</strong> Ousterhout,{" "}
        <em>A Philosophy of Software Design</em>, 2nd ed., Chapter 2, Section
        2.1, "Complexity defined," p. 4.
      </SourceBox>
    </>
  )
}
