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

      <h2>C</h2>

      <Concept label="Change amplification">
        <p>
          A symptom of complexity: a seemingly simple change requires
          modifications in many different places. The fix is to shrink the
          amount of code touched by each design decision (e.g. a single
          shared value instead of the same value hardcoded everywhere).{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/a-philosophy-of-software-design/0004-the-three-symptoms-of-complexity">
              The Three Symptoms of Complexity
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Cognitive load">
        <p>
          A symptom of complexity: how much a developer needs to know to
          complete a task safely. More lines of code isn't automatically
          simpler — a short implementation nobody can explain has higher
          cognitive load than a longer, more explicit one.{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/a-philosophy-of-software-design/0004-the-three-symptoms-of-complexity">
              The Three Symptoms of Complexity
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Complexity">
        <p>
          Anything related to a system's structure that makes it hard to
          understand and modify. Experienced at a point in time for a
          specific goal, not a property of overall size — weighted by where
          developers actually spend time (a messy part that's never touched
          barely counts). More visible to readers than to the person who
          wrote the code.{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/a-philosophy-of-software-design/0003-complexity-defined">
              Complexity Defined
            </Link>
          </em>
        </p>
      </Concept>

      <h2>D</h2>

      <Concept label="Dependency">
        <p>
          Exists when a piece of code can't be understood or modified in
          isolation — other code must also be considered or changed. One of
          the two root causes of complexity (with obscurity). Can't be
          eliminated entirely, only made fewer and more obvious.{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/a-philosophy-of-software-design/0005-what-causes-complexity">
              What Causes Complexity
            </Link>
          </em>
        </p>
      </Concept>

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

      <h2>O</h2>

      <Concept label="Obscurity">
        <p>
          Important information is not obvious — e.g. a generic variable
          name like <code>time</code>, undocumented units, or a hidden table
          that must be updated but isn't visible near the code that needs
          the update. The other root cause of complexity (with dependency).
          Best fixed by simplifying the design, not by adding
          documentation.{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/a-philosophy-of-software-design/0005-what-causes-complexity">
              What Causes Complexity
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Obvious system">
        <p>
          The target state opposite of high cognitive load and unknown
          unknowns: a developer can guess what to do without thinking hard,
          and be confident the guess is correct.{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/a-philosophy-of-software-design/0004-the-three-symptoms-of-complexity">
              The Three Symptoms of Complexity
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

      <h2>U</h2>

      <Concept label="Unknown unknowns">
        <p>
          A symptom of complexity, and the worst of the three: it isn't
          obvious which code must change or what a developer needs to know
          to do a task correctly. Unlike change amplification (tedious, but
          you know where to look) or cognitive load (costly, but you know
          what to read), here you don't even know there's something to find
          out — until a bug appears.{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/a-philosophy-of-software-design/0004-the-three-symptoms-of-complexity">
              The Three Symptoms of Complexity
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

      <h2>Z</h2>

      <Concept label="Zero tolerance (philosophy)">
        <p>
          The book's prescribed response to complexity being incremental:
          since no single dependency or obscurity does noticeable damage on
          its own, the only real defense is refusing to add even the small
          ones, rather than waiting until a module feels seriously complex.
          Named here, developed fully in Chapter 3.{" "}
          <em>
            Ch. 2 →{" "}
            <Link to="/a-philosophy-of-software-design/0005-what-causes-complexity">
              What Causes Complexity
            </Link>
          </em>
        </p>
      </Concept>
    </>
  )
}
