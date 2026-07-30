import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0004-maintainability-three-design-principles",
  book: "designing-data-intensive-applications",
  title: "Maintainability: Three Design Principles",
  kind: "lesson",
  order: 4,
  chapter: 1,
  totalChapters: 12,
  noteIndex: 4,
  totalNotes: 4,
}

export default function Chunk() {
  return (
    <>
      <p>
        Most of the lifetime cost of software isn't building it — it's
        maintaining it: fixing bugs, keeping it operational, adapting it to
        new platforms and use cases, paying down technical debt. Yet
        maintenance work is widely disliked, often because it means fixing
        someone else's mistakes or working around a platform the system was
        never designed for. Kleppmann's response isn't "be more
        disciplined" — it's to design software so it doesn't{" "}
        <em>become</em> the legacy system future maintainers dread. Three
        design principles carry that goal through the rest of the book:
      </p>

      <BookQuote cite='Chapter 1, "Maintainability," p. 19'>
        <p>
          <strong>Operability</strong> — Make it easy for operations teams
          to keep the system running smoothly.
        </p>
        <p>
          <strong>Simplicity</strong> — Make it easy for new engineers to
          understand the system, by removing as much complexity as possible
          from the system. (Note this is not the same as simplicity of the
          user interface.)
        </p>
        <p>
          <strong>Evolvability</strong> — Make it easy for engineers to make
          changes to the system in the future, adapting it for unanticipated
          use cases as requirements change. Also known as extensibility,
          modifiability, or plasticity.
        </p>
      </BookQuote>

      <h2>Operability: making life easy for operations</h2>
      <p>
        "Good operations can often work around the limitations of bad or
        incomplete software, but good software cannot run reliably with bad
        operations." A good operations team monitors system health, tracks
        down the causes of problems, keeps software patched, plans capacity
        ahead of time, and — less obviously — preserves the organization's
        institutional knowledge about the system as people come and go. A
        data system helps its own operability when it gives good visibility
        into runtime behavior (monitoring), supports automation and standard
        tooling, avoids depending on any one specific machine, documents an
        easy-to-understand operational model ("if I do X, Y will happen"),
        and behaves predictably with minimal surprises.
      </p>

      <h2>Simplicity: managing complexity, not features</h2>
      <p>
        Small projects can be delightfully simple; large ones tend to
        calcify into what's sometimes called a{" "}
        <strong>big ball of mud</strong>. That complexity shows up as an
        exploding state space, tightly coupled modules, tangled
        dependencies, inconsistent naming, and hacky special-casing — and it
        slows down everyone who has to work in the system, which is exactly
        what erodes maintainability. Complex systems are also more
        bug-prone: hidden assumptions and unexpected interactions are easier
        to miss when nobody can hold the whole system in their head.
      </p>

      <Concept label="Accidental complexity">
        <p>
          Making a system simpler does <strong>not</strong> mean cutting
          functionality — it means removing complexity that isn't inherent
          to the problem being solved, but only arose from how it happens to
          be implemented. Moseley and Marks call this{" "}
          <strong>accidental complexity</strong>, as opposed to complexity
          the problem domain itself demands.
        </p>
      </Concept>

      <p>
        The best tool for removing accidental complexity is{" "}
        <strong>abstraction</strong>: hiding implementation detail behind a
        clean, well-defined façade. SQL is the book's example — it hides
        on-disk data structures, in-memory representations, concurrent
        access, and crash-recovery logic behind a declarative query
        language. A good abstraction isn't just easier to use once; it's
        reusable across many applications, so quality improvements to the
        abstraction benefit everyone who builds on it. The catch, especially
        in distributed systems, is that finding genuinely good abstractions
        is hard — there are plenty of good <em>algorithms</em>, but far
        fewer well-packaged, reusable abstractions built on top of them.
      </p>

      <h2>Evolvability: making change easy</h2>
      <p>
        Requirements are never static — new facts get learned, unanticipated
        use cases show up, business priorities shift, regulations change,
        growth forces architectural rework. Agile practices (TDD,
        refactoring) give a framework for handling this at the scale of a
        few source files in one codebase. The book is explicitly reaching
        further: it wants a word for the same kind of agility applied to an
        entire data system, possibly spanning several services with
        different characteristics — hence a distinct term,{" "}
        <strong>evolvability</strong>, rather than reusing "agility" at a
        scale it wasn't coined for. And because simple, well-abstracted
        systems are inherently easier to modify than complex ones,
        evolvability is closely tied to the simplicity principle above, not
        a separate, unrelated goal.
      </p>

      <DiagramFigure caption="All three principles point at the same underlying goal — they just target different people (operators, new engineers, future changers) and different moments in the system's life.">
        <svg
          viewBox="0 0 700 210"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="12"
        >
          <text
            x="350"
            y="26"
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-foreground)"
          >
            Three principles, one goal: work productively over time
          </text>
          <g fill="var(--color-surface)" stroke="var(--color-accent)">
            <rect x="30" y="50" width="190" height="120" rx="6" />
            <rect x="255" y="50" width="190" height="120" rx="6" />
            <rect x="480" y="50" width="190" height="120" rx="6" />
          </g>
          <g textAnchor="middle" fill="var(--color-foreground)">
            <text x="125" y="78" fontWeight="600">Operability</text>
            <text x="125" y="100" fontSize="11">easy for</text>
            <text x="125" y="115" fontSize="11">operations to</text>
            <text x="125" y="130" fontSize="11">keep running</text>

            <text x="350" y="78" fontWeight="600">Simplicity</text>
            <text x="350" y="100" fontSize="11">easy for new</text>
            <text x="350" y="115" fontSize="11">engineers to</text>
            <text x="350" y="130" fontSize="11">understand</text>

            <text x="575" y="78" fontWeight="600">Evolvability</text>
            <text x="575" y="100" fontSize="11">easy to change</text>
            <text x="575" y="115" fontSize="11">for unanticipated</text>
            <text x="575" y="130" fontSize="11">use cases</text>
          </g>
          <text
            x="350"
            y="192"
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            Maintainability = whichever people work on this system next can
            do so productively.
          </text>
        </svg>
      </DiagramFigure>

      <h2>Closing the chapter</h2>
      <p>
        The chapter's summary draws one more distinction worth keeping: an
        application has <strong>functional requirements</strong> (what it
        should do — store, retrieve, search, process data) and{" "}
        <strong>nonfunctional requirements</strong> (general properties like
        security, compliance, reliability, scalability, and
        maintainability). Reliability, scalability, and maintainability are
        all nonfunctional — and, per Kleppmann, there is no easy, universal
        fix for any of the three. What the rest of the book offers instead
        is a set of recurring patterns and techniques that keep showing up
        across different kinds of data systems, which the remaining chapters
        examine one layer of the stack at a time.
      </p>

      <Recall
        question={
          <p>
            Simplicity is about removing complexity from the system. What
            specific kind of complexity is it targeting — and what does the
            book explicitly say simplicity is <em>not</em> the same as?
          </p>
        }
      >
        <p>
          It targets accidental complexity — complexity that arises only
          from implementation choices, not from anything inherent in the
          problem the software solves. And the book is explicit that this is
          not the same as simplicity of the user interface; a system can
          have a very simple UI while being a nightmare of accidental
          complexity underneath, or vice versa.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Kleppmann,{" "}
        <em>Designing Data-Intensive Applications</em>, 1st ed., Chapter 1,
        "Maintainability" and "Summary," pp. 18–23.
      </SourceBox>
    </>
  )
}
