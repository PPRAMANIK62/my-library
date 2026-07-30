import { Concept, Recall, SourceBox, DiagramFigure } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0005-logits-and-temperature",
  book: "generative-ai-design-patterns",
  title: "Shaping the Distribution: Logits and Temperature",
  kind: "lesson",
  order: 5,
  chapter: 1,
  totalChapters: 10,
  noteIndex: 5,
  totalNotes: 8,
}

const codeClass =
  "my-6 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm leading-relaxed text-foreground"

export default function Chunk() {
  return (
    <>
      <p>
        A model's last layer doesn't output one next word — it outputs a
        whole distribution over every token in its vocabulary, ranked by
        how likely each one is to come next. Everything in
        "fine-grained control" is about how that raw distribution gets
        shaped and then sampled from. This lesson covers the shaping step:
        logits and temperature.
      </p>

      <h2>Logits: the raw, unnormalized scores</h2>
      <Concept label="Logits">
        <p>
          The raw, unnormalized outputs from a language model's final
          layer, before conversion into probabilities. Higher logit →
          model thinks that token is more likely to come next.
        </p>
      </Concept>

      <p>
        Logits become probabilities via the <strong>softmax</strong>{" "}
        function:
      </p>
      <pre className={codeClass}>
        <code>{`P(token_i) = e^(logit_i) / Σ_j e^(logit_j)`}</code>
      </pre>
      <p>
        Softmax doesn't just normalize — it <em>accentuates the peaks and
        dampens the tails</em>. A token with a modestly higher logit than
        its neighbors ends up with a disproportionately higher probability.
      </p>

      <Concept label="Greedy sampling">
        <p>
          Always picking the single highest-probability token. Simple,
          but produces repetitive, uninteresting text — which is exactly
          why real sampling strategies deliberately leave some probability
          on every token.
        </p>
      </Concept>

      <h2>Temperature: turning the peaks up or down</h2>
      <p>
        Temperature (T) scales the logits <em>before</em> softmax is
        applied:
      </p>
      <pre className={codeClass}>
        <code>{`P(token_i) = e^(logit_i / T) / Σ_j e^(logit_j / T)`}</code>
      </pre>

      <DiagramFigure caption="T = 0 collapses softmax into greedy sampling. As T rises, probability mass spreads toward less-likely tokens — more creative, less predictable output.">
        <svg
          viewBox="0 0 700 300"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <text x="350" y="20" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-foreground)">
            Same 5 candidate tokens, three temperatures (after Figures 1-4 &amp; 1-6)
          </text>

          <g>
            <text x="115" y="42" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--color-muted-foreground)">
              T = 0 (greedy)
            </text>
            <line x1="30" y1="230" x2="200" y2="230" stroke="var(--color-border)" />
            <rect x="40" y="60" width="20" height="170" fill="var(--color-accent)" />
            <rect x="70" y="205" width="20" height="25" fill="var(--color-accent)" opacity="0.4" />
            <rect x="100" y="222" width="20" height="8" fill="var(--color-accent)" opacity="0.4" />
            <rect x="130" y="226" width="20" height="4" fill="var(--color-accent)" opacity="0.4" />
            <rect x="160" y="228" width="20" height="2" fill="var(--color-accent)" opacity="0.4" />
            <text x="115" y="248" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
              "the" wins outright
            </text>
          </g>

          <g>
            <text x="350" y="42" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--color-muted-foreground)">
              T = 1 (default softmax)
            </text>
            <line x1="265" y1="230" x2="435" y2="230" stroke="var(--color-border)" />
            <rect x="275" y="115" width="20" height="115" fill="var(--color-accent)" />
            <rect x="305" y="150" width="20" height="80" fill="var(--color-accent)" opacity="0.7" />
            <rect x="335" y="180" width="20" height="50" fill="var(--color-accent)" opacity="0.4" />
            <rect x="365" y="200" width="20" height="30" fill="var(--color-accent)" opacity="0.4" />
            <rect x="395" y="215" width="20" height="15" fill="var(--color-accent)" opacity="0.4" />
            <text x="350" y="248" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
              peaked, but tail is live
            </text>
          </g>

          <g>
            <text x="585" y="42" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--color-muted-foreground)">
              T = 1.5 (high)
            </text>
            <line x1="500" y1="230" x2="670" y2="230" stroke="var(--color-border)" />
            <rect x="510" y="165" width="20" height="65" fill="var(--color-accent)" />
            <rect x="540" y="175" width="20" height="55" fill="var(--color-accent)" opacity="0.7" />
            <rect x="570" y="185" width="20" height="45" fill="var(--color-accent)" opacity="0.4" />
            <rect x="600" y="195" width="20" height="35" fill="var(--color-accent)" opacity="0.4" />
            <rect x="630" y="205" width="20" height="25" fill="var(--color-accent)" opacity="0.4" />
            <text x="585" y="248" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
              flattened, more "tail" risk
            </text>
          </g>

          <text
            x="350"
            y="278"
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            Same underlying logits throughout — only T changes. Higher T raises the odds a less-likely ("tail") token gets picked.
          </text>
        </svg>
      </DiagramFigure>

      <p>
        Setting the API's <code>temperature</code> parameter is the same
        one line regardless of which invocation path you use:
      </p>
      <pre className={codeClass}>
        <code>{`agent = Agent('anthropic:claude-3-7-sonnet-latest',
              model_settings={"temperature": 0.5},
              system_prompt="Complete the sentence.")`}</code>
      </pre>

      <p>
        The book's own example — completing "The trade war caused…" —
        shows the effect directly: at T=0.0 the output is a single flat,
        generic sentence; by T=0.8 it has grown into several sentences
        with more specific, varied detail (manufacturers reconsidering
        strategy, tariff retaliation, market volatility). Higher
        temperature reads as more creative because it literally is
        sampling further into the tail of the distribution.
      </p>

      <Concept label="When to reach for which setting">
        <p>
          Low or zero temperature suits tasks needing consistency and
          factual precision — the book flags RAG (Chapter 3) and
          LLM-as-Judge (Chapter 6) as places where near-zero temperature
          matters. Higher temperature suits open-ended, creative generation
          where variety is the point.
        </p>
      </Concept>

      <Recall
        question={
          <p>
            What does temperature actually operate on — the probabilities
            directly, or something upstream of the probabilities? And what
            happens at T = 0?
          </p>
        }
      >
        <p>
          Temperature scales the logits before they're passed through the
          softmax function — it operates upstream of the probabilities,
          not on them directly. At T = 0, this scaling effectively
          collapses the distribution onto the single highest-logit token,
          which is exactly greedy sampling.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Lakshmanan & Hapke,{" "}
        <em>Generative AI Design Patterns</em>, 1st ed., Chapter 1,
        "Fine-Grained Control" (Logits; Temperature), pp. 34–40.
      </SourceBox>
    </>
  )
}
