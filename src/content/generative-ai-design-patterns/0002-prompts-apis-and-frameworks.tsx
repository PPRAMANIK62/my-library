import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0002-prompts-apis-and-frameworks",
  book: "generative-ai-design-patterns",
  title: "Prompting a Foundational Model: APIs, Frameworks, and Local Runs",
  kind: "lesson",
  order: 2,
  chapter: 1,
  totalChapters: 10,
  noteIndex: 2,
  totalNotes: 8,
}

const codeClass =
  "my-6 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm leading-relaxed text-foreground"

export default function Chunk() {
  return (
    <>
      <p>
        Every pattern in this book eventually comes down to one basic move:
        sending a foundational model a <strong>prompt</strong> and getting
        back a <strong>response</strong>. This lesson covers the vocabulary
        around that move, and the three practical ways to actually make the
        call.
      </p>

      <h2>Prompt and context</h2>
      <Concept label="Prompt">
        <p>
          The instruction (and, optionally, supporting context) you send a
          foundational model to get a response. Both prompts and responses
          can be multimodal — text, images, video, or audio.
        </p>
      </Concept>

      <p>
        A prompt can be as simple as a single instruction, like asking
        ChatGPT for a pencil sketch in a given style. A more complete
        prompt adds <strong>context</strong>: information the model should
        use, or a role you want it to adopt. Once an API is involved, that
        structure becomes explicit — the prompt splits into two parts:
      </p>

      <BookQuote cite='Chapter 1, "Using the Model Provider&rsquo;s API," p. 21'>
        <p>
          In this API call, the prompt has been broken into two parts—a
          system prompt and a user prompt. The system prompt is set by the
          developer and guides the model's overall behavior, while the user
          prompt is more dynamic and provides specific instructions for a
          specific task you want the model to perform.
        </p>
      </BookQuote>

      <h2>Three ways to invoke a model</h2>
      <p>
        The book demonstrates the same task — asking Claude Sonnet to write
        code that finds a median — three different ways.
      </p>

      <DiagramFigure caption='The book runs the identical "write code to find a median" prompt through all three paths — the mechanics differ, the prompt structure doesn&rsquo;t.'>
        <svg
          viewBox="0 0 700 300"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        >
          <text x="350" y="24" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-foreground)">
            Three ways to reach a foundational model
          </text>

          <rect x="260" y="40" width="180" height="36" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" />
          <text x="350" y="63" textAnchor="middle" fontSize="12" fill="var(--color-accent)">
            Your application code
          </text>

          <g stroke="var(--color-accent)" fill="none" strokeWidth="1.5">
            <path d="M300 76 L110 130" />
            <path d="M350 76 L350 130" />
            <path d="M400 76 L590 130" />
          </g>

          <rect x="30" y="130" width="160" height="40" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="110" y="150" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            Provider's own API
          </text>
          <text x="110" y="164" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            e.g. anthropic.Anthropic()
          </text>

          <rect x="270" y="130" width="160" height="40" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="350" y="150" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            Agnostic framework
          </text>
          <text x="350" y="164" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            e.g. PydanticAI Agent
          </text>

          <rect x="510" y="130" width="160" height="40" rx="6" fill="var(--color-background)" stroke="var(--color-accent)" />
          <text x="590" y="150" textAnchor="middle" fontSize="11" fill="var(--color-foreground)">
            Local runtime
          </text>
          <text x="590" y="164" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            e.g. Ollama
          </text>

          <g stroke="var(--color-muted-foreground)" fill="none" strokeWidth="1.5">
            <path d="M110 170 L110 210" />
            <path d="M350 170 L350 210" />
            <path d="M590 170 L590 210" />
          </g>

          <text x="110" y="230" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            Hosted model,
          </text>
          <text x="110" y="243" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            one vendor
          </text>

          <text x="350" y="230" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            Hosted model,
          </text>
          <text x="350" y="243" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            swap by string
          </text>

          <text x="590" y="230" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            Open-weight model,
          </text>
          <text x="590" y="243" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            on your hardware
          </text>

          <text
            x="350"
            y="280"
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            Same prompt, same system/user split — the only thing that changes is who owns the endpoint.
          </text>
        </svg>
      </DiagramFigure>

      <h3>1. The provider's own API</h3>
      <p>
        Calling Anthropic directly gives you the vendor's full feature
        surface, at the cost of being tied to that vendor's SDK and model
        names:
      </p>
      <pre className={codeClass}>
        <code>{`import anthropic
client = anthropic.Anthropic(api_key="YOUR_ANTHROPIC_API_KEY")

completion = client.messages.create(
    model="claude-3-7-sonnet-latest",
    system="You are an expert Python programmer.",
    messages=[{"role": "user", "content": [
        {"type": "text", "text": "Write code to find the median value of a list of integers."}
    ]}]
)
print(completion.content[0].text)`}</code>
      </pre>

      <h3>2. An LLM-agnostic framework</h3>
      <p>
        PydanticAI wraps the same call behind a model string, so switching
        providers is a one-line change (<code>openai:gpt-4o-mini</code>,{" "}
        <code>google-vertex:gemini-2.0-flash</code>, and so on):
      </p>
      <pre className={codeClass}>
        <code>{`from pydantic_ai import Agent
agent = Agent('anthropic:claude-3-7-sonnet-latest',
              system_prompt="You are an expert Python programmer.")
result = agent.run_sync("Write code to find the median value of a list of integers.")
print(result.data)`}</code>
      </pre>
      <p>
        Note the class name: <code>Agent</code>. The next lesson picks up
        exactly here — what the book means by "agent," and why that's more
        than a naming choice.
      </p>

      <h3>3. A local runtime</h3>
      <p>
        Running an open-weights model like Llama 3 on your own hardware,
        via Ollama, which exposes an OpenAI-compatible endpoint you can
        point any OpenAI-shaped client at:
      </p>
      <pre className={codeClass}>
        <code>{`ollama run llama3.2`}</code>
      </pre>
      <pre className={codeClass}>
        <code>{`from pydantic_ai.models.openai import OpenAIModel
from pydantic_ai.providers.openai import OpenAIProvider
model = OpenAIModel(
    model_name='llama3.2',
    provider=OpenAIProvider(base_url='http://localhost:11434/v1')
)`}</code>
      </pre>

      <Recall
        question={
          <p>
            What is the practical advantage of using an LLM-agnostic
            framework like PydanticAI over calling a provider's API
            directly — and what stays exactly the same either way?
          </p>
        }
      >
        <p>
          The advantage is portability: switching model providers is a
          one-line change to a model string (e.g. from{" "}
          <code>anthropic:claude-3-7-sonnet-latest</code> to{" "}
          <code>openai:gpt-4o-mini</code>) rather than rewriting the call
          against a different vendor SDK. What stays the same is the
          underlying prompt structure — you still separate a system prompt
          (developer-set, guides overall behavior) from a user prompt
          (dynamic, task-specific instructions) regardless of which of the
          three invocation paths you use.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Lakshmanan & Hapke,{" "}
        <em>Generative AI Design Patterns</em>, 1st ed., Chapter 1,
        "Building on Foundational Models" (Prompt and Context; Using the
        Model Provider's API; Using an LLM-Agnostic Framework; Running
        Your Model Locally), pp. 16–23.
      </SourceBox>
    </>
  )
}
