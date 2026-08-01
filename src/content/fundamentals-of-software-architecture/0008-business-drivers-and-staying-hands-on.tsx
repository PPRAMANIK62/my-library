import { Concept, Recall, SourceBox } from "@/components/reader"
import { Link } from "react-router-dom"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0008-business-drivers-and-staying-hands-on",
  book: "fundamentals-of-software-architecture",
  title: "Business Drivers & Staying Hands-On",
  kind: "lesson",
  order: 8,
  chapter: 2,
  totalChapters: 27,
  noteIndex: 5,
  totalNotes: 5,
}

export default function Chunk() {
  return (
    <>
      <p>
        Chapter 2 closes with two more pieces of "thinking like an
        architect," and they're connected by the same thread: an
        architect's decisions only work if they stay grounded — grounded in
        what the business actually needs, and grounded in what the code
        actually does.
      </p>

      <h2>Understanding business drivers</h2>
      <p>
        Thinking architecturally means translating business requirements
        into architecture characteristics — scalability, performance,
        availability — not just implementing whatever's asked for
        literally. The book treats this as substantial enough to earn four
        dedicated chapters rather than a page here:
      </p>
      <Concept label="Where this gets covered in depth">
        <ul className="my-0 list-disc pl-5">
          <li><strong>Chapter 4</strong> — defining architecture characteristics</li>
          <li><strong>Chapter 5</strong> — identifying and qualifying them from domain concerns</li>
          <li><strong>Chapter 6</strong> — measuring each one so the business need is actually met</li>
          <li><strong>Chapter 7</strong> — their scope, and how they relate to coupling</li>
        </ul>
      </Concept>
      <p>
        This note doesn't re-teach those chapters — flagging the pointer
        now is the point, since business-domain understanding was already
        named as expectation #6 back in{" "}
        <Link to="/fundamentals-of-software-architecture/0003-expectations-of-a-software-architect">
          Chapter 1
        </Link>
        .
      </p>

      <h2>Balancing architecture and hands-on coding</h2>
      <p>
        Every architect should keep coding — the book is unambiguous about
        this — but doing it well is harder than it sounds, because an
        architect is never a full-time developer. The most common failure
        mode has a name:
      </p>

      <Concept label="Bottleneck Trap Antipattern">
        <p>
          An architect takes ownership of code on the system's critical
          path — usually the underlying framework or the trickiest parts —
          and becomes a bottleneck, because they can't give it full-time
          developer attention while also drawing diagrams, running
          meetings, and doing the rest of the role.
        </p>
      </Concept>

      <p>
        The fix isn't "code less," it's{" "}
        <strong>delegate the critical path, code somewhere else</strong>:
        hand the framework/critical-path code to the development team
        (where ownership belongs anyway) and have the architect write a
        minor piece of business functionality — a service, a UI screen —
        one to three iterations out. This gets the architect real
        production-code experience, gives the team ownership of the hard
        parts they'll actually live with, and — probably the most valuable
        side effect — puts the architect through the same day-to-day pain
        (tooling, process, environment friction) the team feels, which
        makes them more likely to actually fix it.
      </p>

      <p>
        When pairing with the team directly isn't possible, the book lists
        five other ways an architect stays hands-on:
      </p>

      <Concept label="1 · Frequent proofs-of-concept">
        <p>
          Stuck choosing between two caching products? Build a working
          example in each and compare. Write POCs at production quality,
          not throwaway quality — "temporary" POC code has a way of
          becoming the reference example everyone copies, for better or
          worse.
        </p>
      </Concept>
      <Concept label="2 · Tackle technical debt">
        <p>
          Usually low priority, so if an iteration runs short, nothing
          breaks — low-risk hands-on time that also frees the team to focus
          on user stories.
        </p>
      </Concept>
      <Concept label="3 · Fix bugs">
        <p>
          Not glamorous, but it's direct exposure to weaknesses in the code
          base — and sometimes in the architecture itself.
        </p>
      </Concept>
      <Concept label="4 · Automate">
        <p>
          Build the small command-line tools, validators, and checklists
          the team needs repeatedly. This also covers fitness functions and
          architectural compliance tooling (e.g. ArchUnit) — automation
          that simultaneously builds hands-on skill and enforces the
          architecture, a technique Chapter 6 develops further.
        </p>
      </Concept>
      <Concept label="5 · Do code reviews">
        <p>
          Not writing code, but staying inside it — and a natural point to
          catch architecture-compliance drift and spot mentoring
          opportunities at the same time.
        </p>
      </Concept>

      <h2>There's more to architectural thinking</h2>
      <p>
        The book is explicit that this chapter is a foundation, not the
        whole picture. Three threads it opens here get picked up later:
        understanding a system's overall structure (Chapter 3, next),
        translating business concerns into architecture characteristics
        (the four chapters just referenced above), and seeing a system
        through its logical components — its building blocks (Chapter 8).
      </p>

      <Recall
        question={
          <p>
            What is the Bottleneck Trap, and what's the book's recommended
            fix for it?
          </p>
        }
      >
        <p>
          An architect owns critical-path code (framework/complex
          internals) but, not being full-time on development, becomes a
          bottleneck for the team. Fix: delegate the critical path to the
          team, and have the architect code a minor piece of business
          functionality a few iterations out instead.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Richards &amp; Ford,{" "}
        <em>Fundamentals of Software Architecture</em>, 2nd ed., Chapter 2,
        "Understanding Business Drivers," "Balancing Architecture and
        Hands-On Coding," and "There's More to Architectural Thinking," pp.
        33–36.
      </SourceBox>
    </>
  )
}
