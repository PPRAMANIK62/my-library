import { Link } from "react-router-dom"

import { Concept, DiagramFigure } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "complexity-model",
  book: "a-philosophy-of-software-design",
  title: "The Complexity Model",
  kind: "reference",
  order: 1002,
}

export default function Chunk() {
  return (
    <>
      <p className="text-sm text-muted-foreground">
        Chapter 2 built one model of complexity that the book keeps
        referencing — e.g. Chapter 13 revisits the three symptoms directly,
        and Chapter 19 traces a "change amplification problem described in
        Chapter 2." This page is the compressed version to check against
        later, without re-reading the chapter. Full reasoning:{" "}
        <Link to="/a-philosophy-of-software-design/0003-complexity-defined">
          Complexity Defined
        </Link>
        ,{" "}
        <Link to="/a-philosophy-of-software-design/0004-the-three-symptoms-of-complexity">
          The Three Symptoms of Complexity
        </Link>
        ,{" "}
        <Link to="/a-philosophy-of-software-design/0005-what-causes-complexity">
          What Causes Complexity
        </Link>
        .
      </p>

      <h2>Definition</h2>
      <Concept label="Complexity">
        <p>
          Anything about a system's structure that makes it hard to
          understand or modify. It's experienced{" "}
          <strong>at a point in time, for a specific goal</strong> — not a
          property of overall size or sophistication. Weighted by where
          developers actually spend time: C = Σ (c<sub>p</sub> × t
          <sub>p</sub>). More visible to readers than to the person who
          wrote the code.
        </p>
      </Concept>

      <h2>Two causes → three symptoms</h2>
      <DiagramFigure caption="Dependencies feed change amplification and cognitive load. Obscurity feeds unknown unknowns and cognitive load.">
        <svg
          viewBox="0 0 700 240"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="12"
        >
          <g fill="#f3e6df" stroke="#8a3b2f">
            <rect x="30" y="70" width="180" height="50" rx="6" />
            <rect x="30" y="150" width="180" height="50" rx="6" />
          </g>
          <g fill="#8a3b2f" textAnchor="middle" fontWeight="600">
            <text x="120" y="100">Dependencies</text>
            <text x="120" y="180">Obscurity</text>
          </g>

          <g fill="#f3e6df" stroke="var(--color-muted-foreground)">
            <rect x="460" y="35" width="210" height="42" rx="6" />
            <rect x="460" y="99" width="210" height="42" rx="6" />
            <rect x="460" y="163" width="210" height="42" rx="6" />
          </g>
          <g fill="var(--color-foreground)" textAnchor="middle" fontSize="11">
            <text x="565" y="60">Change amplification</text>
            <text x="565" y="124">Cognitive load</text>
            <text x="565" y="188">Unknown unknowns</text>
          </g>

          <g
            stroke="var(--color-muted-foreground)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrd)"
          >
            <path d="M210 90 C 320 60, 380 56, 458 56" />
            <path d="M210 95 C 320 110, 380 118, 458 120" />
            <path d="M210 170 C 320 130, 380 122, 458 122" />
            <path d="M210 175 C 320 185, 380 183, 458 184" />
          </g>
          <defs>
            <marker
              id="arrd"
              markerWidth="7"
              markerHeight="7"
              refX="3.5"
              refY="3.5"
              orient="auto"
            >
              <path d="M0,0 L7,3.5 L0,7 z" fill="var(--color-muted-foreground)" />
            </marker>
          </defs>
        </svg>
      </DiagramFigure>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-border text-left">
              <th className="px-3 py-2 font-sans font-semibold text-foreground">
                Symptom
              </th>
              <th className="px-3 py-2 font-sans font-semibold text-foreground">
                What it feels like
              </th>
              <th className="px-3 py-2 font-sans font-semibold text-foreground">
                Severity
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-3 py-2 font-semibold">Change amplification</td>
              <td className="px-3 py-2">
                One conceptual change forces edits in many places.
              </td>
              <td className="px-3 py-2 text-muted-foreground">
                Tedious — but you know where to look.
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-3 py-2 font-semibold">Cognitive load</td>
              <td className="px-3 py-2">
                Too much you must know to change something safely.
              </td>
              <td className="px-3 py-2 text-muted-foreground">
                Costly — but you know what to go read.
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Unknown unknowns</td>
              <td className="px-3 py-2">
                Not obvious what to change or what you need to know.
              </td>
              <td className="px-3 py-2 font-semibold text-accent">
                Worst — you don't know there's anything to find out.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Complexity is incremental</h2>
      <Concept label="Rule of thumb">
        <p>
          No single dependency or obscurity does noticeable damage —
          complexity comes from hundreds of small ones accumulating. This is
          why the book argues for a <strong>zero tolerance</strong> stance
          (Ch. 3), not a "fix it once it's bad" stance.
        </p>
      </Concept>

      <h2>The target state</h2>
      <Concept label="Obvious system">
        <p>
          The opposite of high cognitive load and unknown unknowns: a
          developer can guess what to do without thinking hard, and be
          confident the guess is right. (Ch. 18 returns to this directly.)
        </p>
      </Concept>
    </>
  )
}
