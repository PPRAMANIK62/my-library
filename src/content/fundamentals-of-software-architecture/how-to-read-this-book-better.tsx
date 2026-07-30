import { Link } from "react-router-dom"

import { Concept } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "how-to-read-this-book-better",
  book: "fundamentals-of-software-architecture",
  title: "How to Read This Book Better",
  kind: "reference",
  order: 1002,
}

export default function Chunk() {
  return (
    <>
      <p className="text-sm text-muted-foreground">
        This isn't about <em>Fundamentals of Software Architecture</em>{" "}
        specifically — it's about how to get more out of any dense
        technical book, applied to the one sitting in this folder. Read this
        once, then mostly forget it and just read.
      </p>

      <h2>The core problem: fluency lies to you</h2>
      <p>
        When you read a paragraph and it makes sense, your brain reports "I
        know this." That feeling is <strong>fluency</strong> — smooth
        in-the-moment processing. It is not the same thing as being able to
        recall or use the idea next week, which is{" "}
        <strong>storage strength</strong>. Technical books are especially
        good at generating false fluency: the prose is clear, the diagrams
        are tidy, everything nods along — and three days later you couldn't
        explain "architectural quantum" to a colleague if your job depended
        on it.
      </p>

      <Concept label="The fix, in one sentence">
        <p>
          Spend less time re-reading and highlighting, more time closing the
          book and trying to reproduce the idea from memory — badly, at
          first.
        </p>
      </Concept>

      <h2>Five habits that actually move the needle</h2>

      <h3>1. Read a chapter, then close it and explain it out loud</h3>
      <p>
        Before checking your notes or this workspace's lessons, try
        explaining the chapter's main idea to an empty room (or write it
        down). The struggle to reconstruct it <em>is</em> the learning
        event. This is retrieval practice, and it's one of the most
        replicated findings in learning science: testing yourself beats
        re-reading, even though re-reading <em>feels</em> more productive.
      </p>

      <h3>2. Don't take notes while reading — take them after</h3>
      <p>
        Highlighting and copying sentences while you read keeps you in
        fluency mode. Instead, read a section with nothing in hand, then
        write from memory what it said. What you can't reconstruct is
        exactly what you didn't actually learn — that's useful signal, not a
        failure.
      </p>

      <h3>3. Interrogate the trade-offs, don't just collect the vocabulary</h3>
      <p>
        This particular book is explicitly built around trade-off analysis
        (see the{" "}
        <Link to="/fundamentals-of-software-architecture/0002-laws-of-software-architecture">
          First Law
        </Link>
        ). It's easy to read a chapter on an architecture style and walk
        away with a list of named boxes and arrows. The actual skill being
        taught is: for any two options, what do you give up to get the
        other? When reading a styles chapter, pause at every "when to use /
        when not to use" section and ask <em>why</em> before reading the
        book's answer.
      </p>

      <h3>4. Space it out — don't binge multiple chapters back to back</h3>
      <p>
        Spacing practice across days (rather than cramming it in one
        sitting) produces better long-term retention for the same total
        reading time — a robust finding known as the <em>spacing effect</em>.
        Practically: reading one chapter today and testing yourself on it
        again in three days beats reading three chapters today and never
        returning to them.
      </p>

      <h3>5. Use the book's own discussion questions</h3>
      <p>
        The book ends with an appendix of discussion questions, one set per
        chapter (p. 497). These are ready-made retrieval practice — resist
        the urge to skip them. Try answering from memory a day or two after
        finishing a chapter, not immediately after.
      </p>

      <h2>How this workspace is built to support that</h2>
      <ul>
        <li>
          Each chapter is broken into independently-grabbable notes (like
          this one) sized to what the chapter actually contains — not
          padded, not compressed past usefulness.
        </li>
        <li>
          Every note quotes the book directly rather than paraphrasing from
          memory, so you can always trace a claim back to its source.
        </li>
        <li>
          The <code>glossary</code> accumulates terminology across sessions
          — use it to self-test ("can I define this without looking?")
          before rereading a lesson.
        </li>
        <li>
          Come back and interrogate a note any time something doesn't click.
          That's live retrieval practice with immediate feedback — the
          tightest possible loop.
        </li>
      </ul>

      <h3>Further reading on the technique itself</h3>
      <p>
        If you want to go deeper on reading strategy as its own skill:
        Mortimer Adler &amp; Charles Van Doren's{" "}
        <em>How to Read a Book</em> is the classic text on reading
        nonfiction at different levels (inspectional → analytical →
        syntopical). For the cognitive-science side of retrieval practice
        and spacing, Peter Brown, Henry Roediger, and Mark McDaniel's{" "}
        <em>Make It Stick</em> is the most accessible summary of the
        research.
      </p>
    </>
  )
}
