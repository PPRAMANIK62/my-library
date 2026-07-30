import { Link } from "react-router-dom"

import { Concept } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "glossary",
  book: "generative-ai-design-patterns",
  title: "Glossary",
  kind: "reference",
  order: 1001,
}

export default function Chunk() {
  return (
    <>
      <p className="text-sm text-muted-foreground">
        Every term the book introduces, in the order it's useful to look
        them up. Each entry links back to the lesson where it was actually
        taught — read the lesson for the reasoning, use this page for the
        quick recall.
      </p>

      <h2>A</h2>

      <Concept label="Agent">
        <p>
          A software entity that acts on behalf of a user or program. In
          this book, a foundational model invoked with a role, context,
          and an instruction is acting as your agent — the term predates
          GenAI and comes straight from computer science.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0004-agentic-ai">
              Agentic AI
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Agentic">
        <p>
          Describes an application built by orchestrating one or more
          agents. Agentic behavior is still an aspirational goal for
          foundational-model applications — nondeterminism and
          hallucination remain real obstacles.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0004-agentic-ai">
              Agentic AI
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="AI engineering / AI engineer">
        <p>
          Building applications on top of general-purpose foundational
          models (rather than training bespoke ML models from scratch),
          and the practitioners who do it. Term adopted from Chip Huyen's{" "}
          <em>AI Engineering</em>.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0001-genai-design-patterns-and-ai-engineering">
              GenAI Design Patterns and AI Engineering
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Autonomy">
        <p>
          The ability of an agent to operate independently — reaching a
          goal without being told the exact steps or explicitly programmed
          for the task. The book calls this the key differentiator between
          traditional software and AI agents.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0004-agentic-ai">
              Agentic AI
            </Link>
          </em>
        </p>
      </Concept>

      <h2>B</h2>

      <Concept label="Beam search">
        <p>
          A deterministic search algorithm that explores several candidate
          token sequences in parallel, scoring by the probability of the
          whole sequence rather than one token at a time. Beam width
          controls how many sequences survive at each step.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0006-sampling-strategies">
              Choosing From the Distribution: Top-K, Nucleus, and Beam Search
            </Link>
          </em>
        </p>
      </Concept>

      <h2>C</h2>

      <Concept label="Catastrophic forgetting">
        <p>
          A risk of fine-tuning where the model overemphasizes
          fine-tuning examples and loses previously acquired world
          knowledge — its primary advantage. Mitigated with a small
          dataset, few epochs, and a low learning rate.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0008-post-training">
              Post-Training: Customizing a Foundational Model
            </Link>
          </em>
        </p>
      </Concept>

      <h2>D</h2>

      <Concept label="Design pattern">
        <p>
          A proven, reusable, named solution to a problem that recurs
          across many projects — a shared vocabulary for a solution shape,
          not a specific piece of code. Traced from Christopher
          Alexander's architecture patterns through the Gang of Four to
          this book's 32 GenAI patterns.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0001-genai-design-patterns-and-ai-engineering">
              GenAI Design Patterns and AI Engineering
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Distilled model">
        <p>
          A smaller, cheaper, faster sibling of a frontier model (e.g.
          Gemini Flash, GPT-4o-mini) that balances performance against
          cost — good enough for common tasks at a fraction of frontier
          pricing.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0003-how-models-are-built-and-the-landscape">
              How Foundational Models Are Built and the Model Landscape
            </Link>
          </em>
        </p>
      </Concept>

      <h2>F</h2>

      <Concept label="Few-shot learning">
        <p>
          In-context learning extended with a small number of worked
          examples in the prompt, demonstrating the task's structure
          before the model handles a new instance.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0007-in-context-learning">
              In-Context Learning: Zero-Shot and Few-Shot
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Frontier model">
        <p>
          The current state-of-the-art models (e.g. GPT-5, Gemini 2.5
          Pro) — highest capability, but resource-intensive, costly, and
          proprietary; you can't run them locally.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0003-how-models-are-built-and-the-landscape">
              How Foundational Models Are Built and the Model Landscape
            </Link>
          </em>
        </p>
      </Concept>

      <h2>G</h2>

      <Concept label="Greedy sampling">
        <p>
          Always selecting the single highest-probability next token.
          Equivalent to setting temperature to zero. Produces repetitive,
          uninteresting text, which is why real sampling strategies leave
          the tail alive.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0005-logits-and-temperature">
              Shaping the Distribution: Logits and Temperature
            </Link>
          </em>
        </p>
      </Concept>

      <h2>I</h2>

      <Concept label="In-context learning">
        <p>
          A foundational model's ability to adapt to a new task from
          examples or instructions inside the prompt alone, with no
          change to the model's weights. Zero-shot and few-shot learning
          are both forms of it.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0007-in-context-learning">
              In-Context Learning: Zero-Shot and Few-Shot
            </Link>
          </em>
        </p>
      </Concept>

      <h2>L</h2>

      <Concept label="Logits">
        <p>
          The raw, unnormalized scores a language model's final layer
          produces for each candidate next token, before the softmax
          function converts them into probabilities.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0005-logits-and-temperature">
              Shaping the Distribution: Logits and Temperature
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="LoRA (low-rank adaptation) / PEFT">
        <p>
          A parameter-efficient fine-tuning (PEFT) technique that freezes
          the base model's weights and trains small, low-rank "adapter"
          matrices instead — up to 10,000× fewer trainable parameters, no
          added inference latency, performance often on par with full
          fine-tuning. QLoRA extends this by also quantizing the base
          weights.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0008-post-training">
              Post-Training: Customizing a Foundational Model
            </Link>
          </em>
        </p>
      </Concept>

      <h2>M</h2>

      <Concept label="Mixture of experts (MoE)">
        <p>
          A model architecture that activates only a fraction of its
          total parameters for any given token, allowing very large total
          parameter counts (e.g. DeepSeek-V3's 671B total / 37B active per
          token) without a proportional inference cost.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0003-how-models-are-built-and-the-landscape">
              How Foundational Models Are Built and the Model Landscape
            </Link>
          </em>
        </p>
      </Concept>

      <h2>N</h2>

      <Concept label="Nucleus sampling (top-P)">
        <p>
          Dynamically includes the smallest set of tokens whose
          cumulative probability exceeds a threshold P, instead of a
          fixed count. Adapts to model confidence — few tokens when the
          model is sure, more when it's not.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0006-sampling-strategies">
              Choosing From the Distribution: Top-K, Nucleus, and Beam Search
            </Link>
          </em>
        </p>
      </Concept>

      <h2>O</h2>

      <Concept label="Open-weight model">
        <p>
          A model whose parameters are publicly available (e.g. Llama,
          Mistral, Qwen, Falcon) — transparent and fine-tunable, generally
          behind frontier models in raw quality, and requiring more
          hosting expertise.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0003-how-models-are-built-and-the-landscape">
              How Foundational Models Are Built and the Model Landscape
            </Link>
          </em>
        </p>
      </Concept>

      <h2>P</h2>

      <Concept label="Post-training">
        <p>
          Modifying a pretrained model's weights to customize it for a
          new task or domain — the fallback once in-context learning's
          limits are reached. Includes continued pretraining (CPT),
          supervised fine-tuning (SFT), PEFT/LoRA, and preference tuning
          (RLHF/DPO/GRPO), chosen based on dataset shape.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0008-post-training">
              Post-Training: Customizing a Foundational Model
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Preference tuning (RLHF, DPO, GRPO)">
        <p>
          Post-training on datasets of ranked response pairs. RLHF uses
          reinforcement learning from human-ranked preferences; DPO
          (direct preference optimization) is a more efficient
          alternative; GRPO (group relative policy optimization, from
          DeepSeek) scores responses against a group's average reward.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0008-post-training">
              Post-Training: Customizing a Foundational Model
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Prompt (system / user)">
        <p>
          The instruction and context sent to a foundational model to get
          a response. In an API call this splits into a developer-set
          system prompt (overall behavior) and a dynamic user prompt (the
          specific task).{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0002-prompts-apis-and-frameworks">
              Prompting a Foundational Model
            </Link>
          </em>
        </p>
      </Concept>

      <h2>S</h2>

      <Concept label="Softmax">
        <p>
          The function that converts logits into probabilities:{" "}
          <code>P(token_i) = e^logit_i / Σ_j e^logit_j</code>. It
          accentuates peaks and dampens tails relative to the raw logits.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0005-logits-and-temperature">
              Shaping the Distribution: Logits and Temperature
            </Link>
          </em>
        </p>
      </Concept>

      <h2>T</h2>

      <Concept label="Temperature">
        <p>
          A hyperparameter (T) that scales logits before softmax is
          applied. T = 0 collapses sampling to greedy; higher T flattens
          the distribution, raising the odds of sampling less-likely
          ("tail") tokens.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0005-logits-and-temperature">
              Shaping the Distribution: Logits and Temperature
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Top-K sampling">
        <p>
          Restricts token selection to the K most likely tokens,
          truncating the rest of the distribution regardless of how much
          probability mass they carried.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0006-sampling-strategies">
              Choosing From the Distribution: Top-K, Nucleus, and Beam Search
            </Link>
          </em>
        </p>
      </Concept>

      <h2>Z</h2>

      <Concept label="Zero-shot learning">
        <p>
          Instructing a model to perform a task with no examples at all,
          relying purely on pretrained knowledge and
          natural-language instruction-following.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/generative-ai-design-patterns/0007-in-context-learning">
              In-Context Learning: Zero-Shot and Few-Shot
            </Link>
          </em>
        </p>
      </Concept>
    </>
  )
}
