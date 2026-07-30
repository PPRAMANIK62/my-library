import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0003-how-models-are-built-and-the-landscape",
  book: "generative-ai-design-patterns",
  title: "How Foundational Models Are Built and the Model Landscape",
  kind: "lesson",
  order: 3,
  chapter: 1,
  totalChapters: 10,
  noteIndex: 3,
  totalNotes: 8,
}

export default function Chunk() {
  return (
    <>
      <p>
        As an AI engineer you'll rarely train a model yourself — but the
        book covers how foundational models come to exist anyway, purely
        so the vocabulary (pretraining, SFT, RLHF) stops being a black box
        when it shows up in later chapters.
      </p>

      <h2>Three stages, using DeepSeek as the worked example</h2>
      <p>
        The authors use DeepSeek because, at the time of writing, it was
        the foundational model with the most publicly documented training
        process. OpenAI, Google, Anthropic, and Meta likely follow a
        broadly similar shape for GPT, Gemini, Claude, and Llama, even
        without publishing the details.
      </p>

      <DiagramFigure caption="The three stages behind most modern foundational models — DeepSeek-V3 (from stage 3) was then further refined into DeepSeek-R1 through an additional multi-step reasoning-focused process.">
        <svg
          viewBox="0 0 700 220"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <text x="350" y="24" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-foreground)">
            Building a foundational model (simplified from Figure 1-2)
          </text>

          <rect x="20" y="55" width="190" height="110" rx="8" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="115" y="78" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-accent)">
            1. Pretraining
          </text>
          <text x="115" y="98" textAnchor="middle" fontSize="10" fill="var(--color-foreground)">
            14.8T tokens,
          </text>
          <text x="115" y="112" textAnchor="middle" fontSize="10" fill="var(--color-foreground)">
            predict the next token
          </text>
          <text x="115" y="132" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            → general language
          </text>
          <text x="115" y="146" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            understanding
          </text>

          <rect x="255" y="55" width="190" height="110" rx="8" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="350" y="78" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-accent)">
            2. Supervised fine-tuning
          </text>
          <text x="350" y="98" textAnchor="middle" fontSize="10" fill="var(--color-foreground)">
            Curated human-written
          </text>
          <text x="350" y="112" textAnchor="middle" fontSize="10" fill="var(--color-foreground)">
            (prompt, response) pairs
          </text>
          <text x="350" y="132" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            → follows instructions
          </text>

          <rect x="490" y="55" width="190" height="110" rx="8" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="585" y="78" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-accent)">
            3. RLHF
          </text>
          <text x="585" y="98" textAnchor="middle" fontSize="10" fill="var(--color-foreground)">
            Humans rank pairs of
          </text>
          <text x="585" y="112" textAnchor="middle" fontSize="10" fill="var(--color-foreground)">
            outputs; RL from that
          </text>
          <text x="585" y="132" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            → aligns with human
          </text>
          <text x="585" y="146" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            preference
          </text>

          <g stroke="var(--color-accent)" fill="none" strokeWidth="1.5" markerEnd="url(#arr3)">
            <path d="M210 110 L253 110" />
            <path d="M445 110 L488 110" />
          </g>
          <defs>
            <marker id="arr3" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 z" fill="var(--color-accent)" />
            </marker>
          </defs>

          <text
            x="350"
            y="195"
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            DeepSeek-R1 adds a further 5-step cycle on top of this (cold start → pure RL → rejection sampling → SFT → final RL) to sharpen reasoning specifically.
          </text>
        </svg>
      </DiagramFigure>

      <p>
        A few details worth holding onto, because they explain vocabulary
        you'll see reused constantly:
      </p>

      <Concept label="Tokens, not words">
        <p>
          Modern LLMs train on <strong>tokens</strong> — short character
          sequences — rather than whole words. This lets them learn things
          outside a language's fixed vocabulary, like proper names.
          Next-token prediction during pretraining is why people casually
          call LLMs "next-token predictors," even though that's only stage
          1 of the pipeline.
        </p>
      </Concept>

      <BookQuote cite='Chapter 1, "How Foundational Models Are Created," p. 26'>
        <p>
          The reinforcement learning stage is where the models are further
          refined based on human preferences. This step involves
          reinforcement learning with human feedback (RLHF), which means
          showing human raters a pair of generated outputs and asking them
          which one they prefer.
        </p>
      </BookQuote>

      <p>
        One more term worth banking here: DeepSeek-V3 is a{" "}
        <strong>mixture of experts (MoE)</strong> model — 671 billion
        parameters total, but only 37 billion active per token, so
        different "expert" pathways handle different kinds of instructions
        without every parameter firing on every request.
      </p>

      <h2>The model landscape: four categories</h2>
      <p>
        Because academic benchmarks are easy to game, the book favors
        pairwise blind comparisons (LMArena) for ranking models by quality
        against cost. That ranking sorts models into four practical
        categories:
      </p>

      <DiagramFigure caption="Roughly: capability trades off against how much cost and data control you get back. Distilled and open-weight models exist precisely to buy some of that control back at a smaller capability cost.">
        <svg
          viewBox="0 0 700 240"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <text x="350" y="22" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-foreground)">
            The model landscape (Chapter 1)
          </text>

          <line x1="60" y1="55" x2="60" y2="200" stroke="var(--color-border)" />
          <line x1="60" y1="200" x2="670" y2="200" stroke="var(--color-border)" />
          <text
            x="30"
            y="60"
            fontSize="10"
            fill="var(--color-muted-foreground)"
            transform="rotate(-90 30 130)"
            textAnchor="middle"
          >
            capability →
          </text>
          <text x="670" y="215" fontSize="10" fill="var(--color-muted-foreground)" textAnchor="end">
            privacy / cost control →
          </text>

          <rect x="90" y="65" width="130" height="40" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" />
          <text x="155" y="89" textAnchor="middle" fontSize="11" fill="var(--color-accent)">
            Frontier
          </text>
          <text x="155" y="118" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            GPT-5, Gemini 2.5 Pro
          </text>

          <rect x="250" y="95" width="130" height="40" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="315" y="119" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            Distilled
          </text>
          <text x="315" y="148" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            Gemini Flash, GPT-4o-mini
          </text>

          <rect x="410" y="125" width="130" height="40" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="475" y="149" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            Open-weight
          </text>
          <text x="475" y="178" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            Llama, Mistral, Qwen
          </text>

          <rect x="530" y="155" width="130" height="40" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="595" y="179" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            Locally hostable
          </text>
          <text x="595" y="192" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            Llama 8B, Gemma 2B
          </text>
        </svg>
      </DiagramFigure>

      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Frontier models</strong> (GPT-5, Gemini 2.5 Pro) — state
          of the art, resource-intensive, proprietary, can't run locally.
          Best when reasoning quality matters more than latency or cost.
        </li>
        <li>
          <strong>Distilled models</strong> (Gemini Flash, Claude Sonnet,
          GPT-4o-mini) — a frontier model's cheaper, faster sibling; Flash
          runs about 20× cheaper than Gemini Pro on a logarithmic cost
          axis.
        </li>
        <li>
          <strong>Open-weight models</strong> (Llama, Mistral, DeepSeek,
          Qwen, Falcon) — publicly available parameters, fine-tunable, but
          generally lag frontier quality and need more hosting expertise
          (or a service like Together.ai to absorb that).
        </li>
        <li>
          <strong>Locally hostable models</strong> (Llama 8B, Gemma 2B) —
          run on your own hardware for full privacy and no ongoing API
          cost, at significantly reduced capability.
        </li>
      </ul>

      <Recall
        question={
          <p>
            Why does the book use DeepSeek, specifically, as the worked
            example for how foundational models get built?
          </p>
        }
      >
        <p>
          Because at the time of writing, DeepSeek was the foundational
          model with the most publicly available information about its
          actual training regimen — the authors don't claim OpenAI,
          Google, Anthropic, or Meta follow the exact same steps for GPT,
          Gemini, Claude, or Llama, only that their methods are "probably
          broadly similar." DeepSeek was chosen for transparency, not
          because it's uniquely representative.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Lakshmanan & Hapke,{" "}
        <em>Generative AI Design Patterns</em>, 1st ed., Chapter 1, "How
        Foundational Models Are Created" and "The Landscape of Foundational
        Models," pp. 23–30.
      </SourceBox>
    </>
  )
}
