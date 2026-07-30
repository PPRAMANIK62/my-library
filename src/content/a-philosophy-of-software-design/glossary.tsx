import { Link } from "react-router-dom"

import { Concept } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "glossary",
  book: "a-philosophy-of-software-design",
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

      <h2>I</h2>

      <Concept label="Incremental development (agile development)">
        <p>
          Designing and building a small subset of a system, evaluating it,
          fixing problems, then repeating with more features — as opposed to
          freezing the whole design up front. The book's stated reason most
          real projects use it: software is malleable enough to support
          major design changes mid-build, unlike physical structures.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/a-philosophy-of-software-design/0001-its-all-about-complexity">
              It's All About Complexity
            </Link>
          </em>
        </p>
      </Concept>

      <h2>M</h2>

      <Concept label="Modular design">
        <p>
          Dividing a system into <strong>modules</strong> (e.g. classes) that
          are relatively independent of each other, so a programmer can work
          on one without understanding the details of the others. The book's
          second general strategy against complexity — encapsulating it
          rather than removing it.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/a-philosophy-of-software-design/0001-its-all-about-complexity">
              It's All About Complexity
            </Link>
          </em>
        </p>
      </Concept>

      <h2>R</h2>

      <Concept label="Red flag">
        <p>
          A sign that a piece of code is probably more complicated than it
          needs to be. Meant to be used as a stop-and-look-for-an-alternative
          trigger while coding, not just a label applied after the fact.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/a-philosophy-of-software-design/0002-how-to-use-this-book">
              How to Use This Book
            </Link>
          </em>
        </p>
      </Concept>

      <h2>W</h2>

      <Concept label="Waterfall model">
        <p>
          The traditional engineering approach of dividing a project into
          discrete, sequential phases (requirements → design → coding →
          testing → maintenance), with the design frozen before
          implementation begins. The book argues this fails for software
          because a large design's problems don't surface until
          implementation is underway.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/a-philosophy-of-software-design/0001-its-all-about-complexity">
              It's All About Complexity
            </Link>
          </em>
        </p>
      </Concept>
    </>
  )
}
