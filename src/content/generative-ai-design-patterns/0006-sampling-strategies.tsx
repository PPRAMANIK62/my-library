import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0006-sampling-strategies",
  book: "generative-ai-design-patterns",
  title: "Choosing From the Distribution: Top-K, Nucleus, and Beam Search",
  kind: "lesson",
  order: 6,
  chapter: 1,
  totalChapters: 10,
  noteIndex: 6,
  totalNotes: 8,
}

export default function Chunk() {
  return (
    <>
      <p>
        The previous lesson covered <em>shaping</em> the probability
        distribution (logits, temperature). This lesson covers{" "}
        <em>truncating</em> it — deciding which of the reshaped candidates
        are even eligible to be picked — plus a different strategy
        entirely, beam search, which looks further ahead than one token at
        a time.
      </p>

      <h2>Top-K sampling: a fixed cutoff</h2>
      <Concept label="Top-K sampling">
        <p>
          Restrict token selection to only the K most likely tokens,
          truncating the long tail entirely — regardless of how much
          probability mass those truncated tokens actually carried.
        </p>
      </Concept>
      <p>
        The book's example continues "The spaceship…" at K=1, 10, and 100:
        at K=1 the output reads like a stock phrase pulled straight from
        existing sci-fi; by K=100 it's noticeably more varied and
        original. Low K keeps output safe and predictable; high K risks
        the same "off-the-wall" continuations high temperature can
        produce.
      </p>

      <h2>Nucleus (top-P) sampling: an adaptive cutoff</h2>
      <Concept label="Nucleus sampling (top-P)">
        <p>
          Instead of a fixed count, dynamically include the smallest set
          of tokens whose cumulative probability exceeds a threshold P —
          the "nucleus" of the distribution. The number of tokens included
          varies step to step.
        </p>
      </Concept>

      <DiagramFigure caption="Nucleus sampling adapts to model confidence: a peaked distribution needs few tokens to hit P; a flat one needs many — which is why it tends to read more naturally than a fixed top-K.">
        <svg
          viewBox="0 0 700 260"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <text x="350" y="20" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-foreground)">
            Two ways to draw the cutoff line
          </text>

          <g>
            <text x="175" y="42" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--color-muted-foreground)">
              Top-K (fixed count, e.g. K=3)
            </text>
            <line x1="40" y1="200" x2="310" y2="200" stroke="var(--color-border)" />
            <rect x="50" y="80" width="30" height="120" fill="var(--color-accent)" />
            <rect x="90" y="120" width="30" height="80" fill="var(--color-accent)" />
            <rect x="130" y="150" width="30" height="50" fill="var(--color-accent)" />
            <rect x="170" y="175" width="30" height="25" fill="var(--color-surface)" stroke="var(--color-border)" />
            <rect x="210" y="188" width="30" height="12" fill="var(--color-surface)" stroke="var(--color-border)" />
            <rect x="250" y="195" width="30" height="5" fill="var(--color-surface)" stroke="var(--color-border)" />
            <line
              x1="165"
              y1="70"
              x2="165"
              y2="200"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
            <text x="165" y="65" textAnchor="middle" fontSize="9" fill="var(--color-accent)">
              cut after 3 tokens, always
            </text>
          </g>

          <g>
            <text x="525" y="42" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--color-muted-foreground)">
              Nucleus (cumulative P, e.g. P=0.9)
            </text>
            <line x1="390" y1="200" x2="660" y2="200" stroke="var(--color-border)" />
            <rect x="400" y="80" width="30" height="120" fill="var(--color-accent)" />
            <rect x="440" y="120" width="30" height="80" fill="var(--color-accent)" />
            <rect x="480" y="150" width="30" height="50" fill="var(--color-accent)" />
            <rect x="520" y="170" width="30" height="30" fill="var(--color-accent)" />
            <rect x="560" y="188" width="30" height="12" fill="var(--color-surface)" stroke="var(--color-border)" />
            <rect x="600" y="195" width="30" height="5" fill="var(--color-surface)" stroke="var(--color-border)" />
            <line
              x1="555"
              y1="70"
              x2="555"
              y2="200"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
            <text x="555" y="65" textAnchor="middle" fontSize="9" fill="var(--color-accent)">
              cut once mass exceeds 0.9
            </text>
          </g>

          <text
            x="350"
            y="235"
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            Same distribution — top-K always keeps exactly 3 bars; nucleus kept 4, because it stops on cumulative probability, not a fixed count.
          </text>
        </svg>
      </DiagramFigure>

      <BookQuote cite='Chapter 1, "Nucleus Sampling," p. 42'>
        <p>
          Nucleus sampling adapts to the model's confidence at each step.
          When the model is very confident, few tokens are considered (as
          with low top-K), and when the model is uncertain, more tokens
          are considered (as with high top-K). Therefore, it generally
          produces more natural text than fixed top-K sampling does.
        </p>
      </BookQuote>

      <h2>Beam search: looking beyond one token at a time</h2>
      <p>
        Top-K, nucleus, and temperature all decide <em>one token at a
        time</em>. Beam search instead explores several candidate
        continuations in parallel, so it can weigh the probability of an
        entire sequence, not just the next token.
      </p>

      <DiagramFigure caption="Beam width controls how many parallel sequences survive at each step. A wider beam explores more of the space but costs more compute.">
        <svg
          viewBox="0 0 700 220"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <text x="350" y="20" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-foreground)">
            Beam search with beam width 2
          </text>

          <circle cx="40" cy="110" r="6" fill="var(--color-accent)" />
          <g stroke="var(--color-accent)" strokeWidth="1.5" fill="none">
            <path d="M40 110 L220 60" />
            <path d="M40 110 L220 160" />
            <path d="M220 60 L400 40" />
            <path d="M220 60 L400 80" />
            <path d="M220 160 L400 140" />
            <path d="M220 160 L400 180" />
          </g>
          <circle cx="220" cy="60" r="5" fill="var(--color-accent)" />
          <circle cx="220" cy="160" r="5" fill="var(--color-accent)" />
          <circle cx="400" cy="40" r="5" fill="var(--color-accent)" />
          <circle cx="400" cy="80" r="5" fill="var(--color-surface)" stroke="var(--color-border)" />
          <circle cx="400" cy="140" r="5" fill="var(--color-surface)" stroke="var(--color-border)" />
          <circle cx="400" cy="180" r="5" fill="var(--color-accent)" />

          <path d="M40 110 L220 60 L400 40" stroke="var(--color-accent)" strokeWidth="3" fill="none" opacity="0.35" />
          <path d="M40 110 L220 160 L400 180" stroke="var(--color-accent)" strokeWidth="3" fill="none" opacity="0.35" />

          <text x="500" y="45" fontSize="10" fill="var(--color-muted-foreground)">
            kept: highest sequence
          </text>
          <text x="500" y="185" fontSize="10" fill="var(--color-muted-foreground)">
            kept: 2nd-highest sequence
          </text>
          <text x="500" y="85" fontSize="10" fill="var(--color-border)">
            dropped
          </text>
          <text x="500" y="145" fontSize="10" fill="var(--color-border)">
            dropped
          </text>

          <text
            x="350"
            y="205"
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            At each step, only the top-2 sequences (by whole-sequence probability) survive — not just the top-2 next tokens.
          </text>
        </svg>
      </DiagramFigure>

      <p>
        Beam search also exposes its own knobs: <strong>repetition
        penalties</strong> (frequency and presence penalties, discouraging
        already-used tokens from reappearing) and <strong>length
        penalties</strong> (minimum/maximum length, and length
        normalization to stop the search from being biased toward short
        sequences). At the time of writing, OpenAI and Gemini support
        repetition penalties but Anthropic does not; Hugging Face's
        Transformers library supports length penalties and beam width,
        but no hosted model API does.
      </p>

      <Recall
        question={
          <p>
            Top-K and nucleus sampling both truncate the distribution
            before picking a token — what's the one structural difference
            between them? And what does beam search do differently from
            both?
          </p>
        }
      >
        <p>
          Top-K always keeps a fixed number of candidate tokens (say,
          always exactly 10), regardless of how the probability mass is
          actually distributed among them. Nucleus (top-P) sampling
          instead keeps however many tokens are needed for their
          cumulative probability to cross a threshold P — so the count
          varies step to step based on the model's confidence. Beam
          search is different in kind from both: rather than truncating
          and sampling one token at a time, it's a deterministic search
          that tracks several whole candidate sequences in parallel,
          scoring by the probability of the entire sequence rather than
          the next token alone.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Lakshmanan & Hapke,{" "}
        <em>Generative AI Design Patterns</em>, 1st ed., Chapter 1,
        "Fine-Grained Control" (Top-K Sampling; Nucleus Sampling; Beam
        Search), pp. 40–43.
      </SourceBox>
    </>
  )
}
