import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0008-post-training",
  book: "generative-ai-design-patterns",
  title: "Post-Training: Customizing a Foundational Model",
  kind: "lesson",
  order: 8,
  chapter: 1,
  totalChapters: 10,
  noteIndex: 8,
  totalNotes: 8,
}

const codeClass =
  "my-6 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm leading-relaxed text-foreground"

export default function Chunk() {
  return (
    <>
      <p>
        The previous lesson ended where in-context learning runs out. This
        lesson covers the fallback: changing the model's actual weights.
        It's the last concept in Chapter 1 — after this, the book moves
        into the 32 named patterns proper, starting with Chapter 2.
      </p>

      <Concept label="Post-training">
        <p>
          Modifying the weights of an already-pretrained model to
          customize it for a new task or domain. Unlike in-context
          learning, a post-trained model has to be deployed and served
          from a different endpoint than the original foundational model
          it started from.
        </p>
      </Concept>

      <h2>Which method fits which dataset</h2>
      <p>
        The book ties each post-training method directly to the shape of
        dataset you have available — this is the single most useful
        organizing fact in the section:
      </p>

      <DiagramFigure caption="The dataset you actually have on hand — not preference — is what determines which post-training method is even applicable.">
        <svg
          viewBox="0 0 700 300"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <text x="350" y="20" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-foreground)">
            Post-training methods, by dataset shape
          </text>

          <rect x="270" y="35" width="160" height="34" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" />
          <text x="350" y="57" textAnchor="middle" fontSize="11" fill="var(--color-accent)">
            Post-training
          </text>

          <g stroke="var(--color-accent)" fill="none" strokeWidth="1.5" markerEnd="url(#arr8)">
            <path d="M300 69 L110 105" />
            <path d="M350 69 L350 105" />
            <path d="M400 69 L590 105" />
          </g>
          <defs>
            <marker id="arr8" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 z" fill="var(--color-accent)" />
            </marker>
          </defs>

          <rect x="20" y="105" width="180" height="40" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="110" y="123" textAnchor="middle" fontSize="10" fill="var(--color-foreground)">
            Text completions only
          </text>
          <text x="110" y="137" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            → Continued pretraining (CPT)
          </text>

          <rect x="260" y="105" width="180" height="40" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="350" y="123" textAnchor="middle" fontSize="10" fill="var(--color-foreground)">
            (prompt, response) pairs
          </text>
          <text x="350" y="137" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            → SFT, or PEFT/LoRA
          </text>

          <rect x="500" y="105" width="180" height="40" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="590" y="123" textAnchor="middle" fontSize="10" fill="var(--color-foreground)">
            Two responses, ranked
          </text>
          <text x="590" y="137" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            → Preference tuning (RLHF/DPO/GRPO)
          </text>

          <rect x="20" y="165" width="180" height="55" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" />
          <text x="110" y="183" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            Rarely chosen since 2023 —
          </text>
          <text x="110" y="196" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            Bloomberg's finance-LLM lost
          </text>
          <text x="110" y="209" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            to general models within months
          </text>

          <rect x="260" y="165" width="180" height="55" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" />
          <text x="350" y="183" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            PEFT/LoRA: freeze base weights,
          </text>
          <text x="350" y="196" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            train small low-rank "adapter"
          </text>
          <text x="350" y="209" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            matrices instead (≤1/10,000th size)
          </text>

          <rect x="500" y="165" width="180" height="55" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" />
          <text x="590" y="183" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            DPO: efficient direct optimization.
          </text>
          <text x="590" y="196" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            GRPO (DeepSeek): scores multiple
          </text>
          <text x="590" y="209" textAnchor="middle" fontSize="9" fill="var(--color-muted-foreground)">
            responses vs. group average reward
          </text>

          <text
            x="350"
            y="260"
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            Any of these can also be done in a parameter-efficient way (PEFT) or on a quantized model — the axes are independent.
          </text>
        </svg>
      </DiagramFigure>

      <BookQuote cite='Chapter 1, "Post-Training Methods," p. 48'>
        <p>
          Low-rank adaptation (LoRA) … drastically reduces the number of
          trainable parameters (making them up to 10,000 times fewer) and
          reduces GPU memory requirements (making them up to 3 times
          fewer). It also does not add inference latency, and it often
          performs on par with full fine-tuning.
        </p>
      </BookQuote>

      <p>
        QLoRA extends LoRA by quantizing all the model's weights too —
        more memory-efficient to train (slower, though), and the
        resulting fine-tuned model is smaller and faster to serve than a
        plain-LoRA model.
      </p>

      <h2>Fine-tuning a frontier model vs. an open-weight model</h2>
      <p>
        Practically, the two paths look quite different. Frontier
        providers (OpenAI, Anthropic, and the hyperscalers) offer
        streamlined SFT: upload an input-output dataset, launch a job,
        get back an adapter-tuned endpoint — you never see the weights.
        For an open-weight model, you own the whole pipeline yourself; the
        book's example uses Unsloth to 4-bit-quantize and LoRA-fine-tune a
        Llama 3 model locally:
      </p>
      <pre className={codeClass}>
        <code>{`from unsloth import FastLanguageModel
model, tokenizer = FastLanguageModel.from_pretrained(
    model_name="unsloth/Meta-Llama-3.1-8B-bnb-4bit",
    max_seq_length=2048, load_in_4bit=True, dtype=None,
)
model = FastLanguageModel.get_peft_model(
    model, r=16,
    target_modules=["q_proj","k_proj","v_proj","up_proj","down_proj","o_proj","gate_proj"],
    use_gradient_checkpointing="unsloth"
)
trainer = SFTTrainer(model=model, tokenizer=tokenizer, train_dataset=dataset, dataset_text_field="text")
trainer.train()`}</code>
      </pre>

      <h2>Considerations: read this before reaching for fine-tuning</h2>
      <p>
        The book is candid that fine-tuning is a bigger commitment than it
        looks:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Data requirements</strong> — you need over a hundred
          curated samples collected <em>ahead of time</em>, versus a
          handful of in-context examples. Start with in-context learning,
          collect data as you go, and fine-tune later once you have
          enough.
        </li>
        <li>
          <strong>Catastrophic forgetting</strong> — over-fitting to the
          fine-tuning set can wipe out the model's general world
          knowledge, its main advantage. Mitigate with a small dataset,
          few epochs, and a learning rate near where pretraining left off
          (typically ~1e-5).
        </li>
        <li>
          <strong>Additional complexity</strong> — you must re-evaluate
          for bias, re-fine-tune every time the base model updates, and
          track training/validation data lineage. In-context learning
          needs none of this.
        </li>
        <li>
          <strong>Additional costs</strong> — providers charge more per
          token for fine-tuned model inference (to recover hosting
          overhead); for open-weight models, inference gets cheaper but
          GPU fine-tuning costs (a few dollars to hundreds per version)
          fall on you instead.
        </li>
      </ul>

      <Recall
        question={
          <p>
            Your dataset consists of pairs of responses to the same
            prompt, with a note on which response is preferred. Which
            post-training approach does this dataset shape point you
            toward, and what's the mitigation for the biggest risk of
            post-training in general?
          </p>
        }
      >
        <p>
          A dataset of paired, ranked responses points toward preference
          tuning — RLHF if the post-training is done via reinforcement
          learning from those human preferences, or the more efficient
          direct preference optimization (DPO), or DeepSeek's group
          relative policy optimization (GRPO) if scoring against a group's
          average reward. The biggest general risk of post-training is
          catastrophic forgetting — the model overfitting to the
          fine-tuning examples and losing its broader pretrained knowledge
          — mitigated by fine-tuning on a small dataset, for only a few
          epochs, at a learning rate close to where pretraining left off.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Lakshmanan & Hapke,{" "}
        <em>Generative AI Design Patterns</em>, 1st ed., Chapter 1,
        "Post-Training" (Post-Training Methods; Fine-Tuning a Frontier
        Model; Fine-Tuning an Open-Weight Model; Considerations), pp.
        47–55.
      </SourceBox>
    </>
  )
}
