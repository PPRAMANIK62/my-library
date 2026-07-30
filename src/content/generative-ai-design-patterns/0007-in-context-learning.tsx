import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0007-in-context-learning",
  book: "generative-ai-design-patterns",
  title: "In-Context Learning: Zero-Shot and Few-Shot Prompting",
  kind: "lesson",
  order: 7,
  chapter: 1,
  totalChapters: 10,
  noteIndex: 7,
  totalNotes: 8,
}

export default function Chunk() {
  return (
    <>
      <p>
        Traditional ML adapts a model to a new task by retraining it.
        Foundational models can adapt to a new task purely from what's
        inside the prompt itself — no weight changes at all. This lesson
        covers that capability and its two main flavors.
      </p>

      <Concept label="In-context learning">
        <p>
          A foundational model's ability to adapt to a new task based
          solely on examples or instructions given in the prompt, without
          any change to the model's weights. It emerges from pretraining
          on diverse task formats — the model recognizes the pattern
          implied by the prompt and applies it.
        </p>
      </Concept>

      <h2>Zero-shot: no examples, just instructions</h2>
      <Concept label="Zero-shot learning">
        <p>
          Instructing a model to perform a task with no examples at all,
          relying purely on its pretrained knowledge and its ability to
          parse natural-language instructions.
        </p>
      </Concept>
      <p>
        The book's example: asking Gemini-Flash to "analyze the use of
        light in Claude Monet's <em>Impression, Sunrise</em> and explain
        how it exemplifies impressionist techniques" — no example answer
        provided, just the instruction. The model draws entirely on what
        it already knows about Monet, Impressionism, and art criticism.
      </p>

      <h2>Few-shot: instructions plus worked examples</h2>
      <Concept label="Few-shot learning">
        <p>
          Extending zero-shot by including a small number of examples in
          the prompt. The examples demonstrate the task's structure and
          expected output format; the model applies that structure to a
          new instance. Since the examples live in the prompt's context,
          this is also a form of in-context learning.
        </p>
      </Concept>

      <DiagramFigure caption="Same underlying capability (in-context learning) — few-shot just gives the model more to pattern-match against before it has to generate.">
        <svg
          viewBox="0 0 700 260"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <text x="350" y="20" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-foreground)">
            What's inside the prompt, zero-shot vs. few-shot
          </text>

          <g>
            <text x="165" y="42" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--color-muted-foreground)">
              Zero-shot
            </text>
            <rect x="50" y="55" width="230" height="50" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" />
            <text x="165" y="76" textAnchor="middle" fontSize="10" fill="var(--color-accent)">
              Instruction
            </text>
            <text x="165" y="92" textAnchor="middle" fontSize="9" fill="var(--color-foreground)">
              "Analyze the use of light in…"
            </text>
            <rect
              x="50"
              y="115"
              width="230"
              height="30"
              rx="6"
              fill="var(--color-background)"
              stroke="var(--color-border)"
              strokeDasharray="3 2"
            />
            <text x="165" y="134" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
              (no worked example given)
            </text>
          </g>

          <g>
            <text x="535" y="42" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--color-muted-foreground)">
              Few-shot
            </text>
            <rect x="420" y="55" width="230" height="42" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" />
            <text x="535" y="72" textAnchor="middle" fontSize="10" fill="var(--color-accent)">
              Instruction / role
            </text>
            <text x="535" y="87" textAnchor="middle" fontSize="9" fill="var(--color-foreground)">
              "You are an art history expert…"
            </text>
            <rect x="420" y="103" width="230" height="42" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
            <text x="535" y="120" textAnchor="middle" fontSize="10" fill="var(--color-foreground)">
              Example 1 (Monet)
            </text>
            <text x="535" y="135" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
              description → filled-in answer
            </text>
            <rect x="420" y="151" width="230" height="34" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
            <text x="535" y="172" textAnchor="middle" fontSize="10" fill="var(--color-foreground)">
              New query (Renoir)
            </text>
          </g>

          <text
            x="350"
            y="220"
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            The model applies the structure demonstrated in Example 1 to the new, unlabeled query — no retraining, just pattern-matching within the prompt.
          </text>
        </svg>
      </DiagramFigure>

      <p>
        The book's worked example asks an agent, given one filled-in
        example (a description of Monet's <em>Impression, Sunrise</em>{" "}
        paired with its identification), to identify an unlabeled painting
        description. The model correctly infers it's Renoir's{" "}
        <em>Luncheon of the Boating Party</em> and fills in the same
        structure — painting, artist, year, significance — from just that
        single demonstration.
      </p>

      <h2>Where in-context learning runs out</h2>
      <p>
        In-context learning is attractive precisely because it skips the
        data-curation and retraining loop entirely — but it has real
        limits:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          It only works when the foundational model already has the
          necessary knowledge and capability somewhere in its pretraining.
        </li>
        <li>Examples consume context-window tokens and slow inference.</li>
        <li>
          Models sometimes fail to generalize more complex problems from
          just a few examples.
        </li>
      </ul>
      <BookQuote cite='Chapter 1, "In-Context Learning," p. 47'>
        <p>In these scenarios, post-training might offer a better approach.</p>
      </BookQuote>
      <p>
        That's the exact handoff to the next lesson: when adding examples
        to the prompt stops being enough, the next lever is changing the
        model's weights.
      </p>

      <Recall
        question={
          <p>
            What, precisely, changes inside the model between a zero-shot
            prompt and a few-shot prompt — and what stays exactly the
            same?
          </p>
        }
      >
        <p>
          Nothing changes inside the model's weights in either case —
          that's the defining feature of in-context learning. What changes
          is only the content of the prompt itself: a few-shot prompt adds
          one or more worked examples demonstrating the task's structure
          before the new query, giving the model more to pattern-match
          against. The model's parameters are identical before and after;
          only the context it's conditioned on differs.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Lakshmanan & Hapke,{" "}
        <em>Generative AI Design Patterns</em>, 1st ed., Chapter 1,
        "In-Context Learning" (Zero-Shot Learning; Few-Shot Learning), pp.
        43–47.
      </SourceBox>
    </>
  )
}
