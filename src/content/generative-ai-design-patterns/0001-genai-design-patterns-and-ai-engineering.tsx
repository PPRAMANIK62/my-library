import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0001-genai-design-patterns-and-ai-engineering",
  book: "generative-ai-design-patterns",
  title: "GenAI Design Patterns and AI Engineering",
  kind: "lesson",
  order: 1,
  chapter: 1,
  totalChapters: 10,
  noteIndex: 1,
  totalNotes: 8,
}

export default function Chunk() {
  return (
    <>
      <p>
        Lakshmanan and Hapke open with the gap every GenAI builder
        eventually hits: foundational models make it trivially easy to
        build an impressive demo, but turning that demo into a reliable
        production system is a different problem entirely. Models
        hallucinate, return different answers to the same input, and have
        surprising blind spots baked in by how they were trained. This book
        is a catalog of 32 proven fixes for exactly that class of problem.
      </p>

      <h2>What a "design pattern" is, here</h2>
      <p>
        The term is borrowed, by way of software engineering, from
        architecture. Christopher Alexander introduced patterns for
        buildings and towns in <em>A Pattern Language</em> (1977); the Gang
        of Four (Gamma, Helm, Johnson, Vlissides) adapted the idea to
        object-oriented software design. This book extends the lineage one
        step further, into GenAI.
      </p>

      <Concept label="Design pattern">
        <p>
          A proven, reusable solution to a problem that recurs across many
          different projects — not a specific piece of code, but a named,
          communicable shape for a solution. Patterns give developers a
          shared vocabulary and encode the collective experience of people
          who already hit the problem.
        </p>
      </Concept>

      <p>
        Each pattern chapter in this book follows the same shape: a{" "}
        <strong>problem</strong> statement, a <strong>solution</strong>, a
        worked <strong>example</strong>, and a discussion of{" "}
        <strong>considerations</strong> (trade-offs, alternatives, when not
        to use it). That structure is worth internalizing now — every
        pattern from here on will slot into it.
      </p>

      <h2>Why GenAI needed its own pattern catalog</h2>
      <p>
        The book draws a sharp line between how "traditional" supervised ML
        works and how most GenAI applications are actually built today:
      </p>

      <BookQuote cite="Preface">
        <p>
          Supervised machine learning (ML) involves training a
          problem-specific model on a large training dataset of example
          inputs and outputs—but GenAI applications rarely include a
          training phase. Instead, they commonly use general-purpose
          foundational models.
        </p>
      </BookQuote>

      <DiagramFigure caption="The book's premise: GenAI applications skip the training step almost entirely, so the recurring problems — and the patterns that fix them — are different from classic ML's.">
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
            Two ways to get a working model
          </text>

          <rect
            x="20"
            y="50"
            width="300"
            height="175"
            rx="8"
            fill="none"
            stroke="var(--color-border)"
            strokeDasharray="4 3"
          />
          <text
            x="170"
            y="72"
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill="var(--color-muted-foreground)"
          >
            Supervised ML (traditional)
          </text>
          <rect x="55" y="90" width="230" height="34" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="170" y="112" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            Curate a large, task-specific dataset
          </text>
          <rect x="55" y="140" width="230" height="34" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="170" y="162" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            Train a problem-specific model
          </text>
          <rect x="55" y="190" width="230" height="24" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" />
          <text x="170" y="206" textAnchor="middle" fontSize="11" fill="var(--color-accent)">
            One model, one problem
          </text>

          <rect
            x="380"
            y="50"
            width="300"
            height="175"
            rx="8"
            fill="none"
            stroke="var(--color-border)"
            strokeDasharray="4 3"
          />
          <text
            x="530"
            y="72"
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill="var(--color-muted-foreground)"
          >
            AI engineering (this book)
          </text>
          <rect x="415" y="90" width="230" height="34" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="530" y="112" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            Take a general-purpose foundational model
          </text>
          <rect x="415" y="140" width="230" height="34" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="530" y="162" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            Send it a prompt (+ patterns as needed)
          </text>
          <rect x="415" y="190" width="230" height="24" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" />
          <text x="530" y="206" textAnchor="middle" fontSize="11" fill="var(--color-accent)">
            One model, many problems
          </text>

          <path
            d="M320 137 L380 137"
            stroke="var(--color-muted-foreground)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arr0)"
          />
          <text x="350" y="130" textAnchor="middle" fontSize="16" fill="var(--color-muted-foreground)">
            vs.
          </text>
          <defs>
            <marker id="arr0" markerWidth="0" markerHeight="0" />
          </defs>
        </svg>
      </DiagramFigure>

      <p>
        The book follows Chip Huyen's <em>AI Engineering</em> in calling
        this build-on-a-foundational-model approach{" "}
        <strong>AI engineering</strong>, and its practitioners{" "}
        <strong>AI engineers</strong>. Because there's no training phase to
        lean on, the recurring failure modes are different from classic
        ML's — hallucination, inconsistent outputs, knowledge gaps, and
        unreliable behavior — and that's exactly the territory this book's
        32 patterns cover.
      </p>

      <h2>A first look at agents</h2>
      <p>
        The book also introduces, in passing, two terms that recur
        constantly from here on:
      </p>

      <Concept label="Agent / Agentic">
        <p>
          An <strong>agent</strong> is a small software component that uses
          a foundational model to accomplish part of a task too complex
          for one model call to handle alone. An application built by
          orchestrating several such agents is called{" "}
          <strong>agentic</strong>. Later chapters (5, 6, 7) return to this
          repeatedly — planning, self-correction, and tool use are all
          ways of making an application more agentic.
        </p>
      </Concept>

      <Recall
        question={
          <p>
            What's the core structural difference between how a supervised
            ML model is typically built and how a GenAI application is
            typically built, according to this section?
          </p>
        }
      >
        <p>
          Supervised ML trains a problem-specific model from scratch on a
          large, curated dataset of example inputs and outputs for that one
          problem. GenAI applications usually skip that training phase
          entirely and instead build on a general-purpose foundational
          model that was already pretrained on a broad, application-agnostic
          dataset — the "training" work has already been done by the model
          provider, and the application-builder's job is to prompt (and,
          where needed, apply patterns to) that existing model.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Lakshmanan & Hapke,{" "}
        <em>Generative AI Design Patterns</em>, 1st ed., Preface and Chapter
        1, "Introduction" / "GenAI Design Patterns," pp. 13–16.
      </SourceBox>
    </>
  )
}
