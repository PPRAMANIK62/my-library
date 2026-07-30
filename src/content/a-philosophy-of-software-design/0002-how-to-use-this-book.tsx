import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0002-how-to-use-this-book",
  book: "a-philosophy-of-software-design",
  title: "How to Use This Book",
  kind: "lesson",
  order: 2,
  chapter: 1,
  totalChapters: 21,
  noteIndex: 2,
  totalNotes: 2,
}

export default function Chunk() {
  return (
    <>
      <p>
        Before diving into specific design principles, Ousterhout pauses to
        say how the book is meant to be read — and it's worth taking
        seriously, because the advice here shapes how every later chapter
        should actually be used, not just read.
      </p>

      <h2>Pair it with code reviews</h2>
      <BookQuote cite="Chapter 1, Section 1.1, p. 2">
        <p>
          The best way to use this book is in conjunction with code
          reviews... It's easier to see design problems in someone else's
          code than your own.
        </p>
      </BookQuote>
      <p>
        This is a specific, falsifiable claim about how learning design
        actually happens: reading the principles alone won't build the
        skill. You need to be looking at real code — ideally someone else's,
        where your judgment isn't clouded by having written it — and asking
        whether it conforms to the concepts. Reviewing other people's code is
        also how you get exposed to design approaches you wouldn't have
        generated yourself, good or bad.
      </p>

      <h2>Learn to spot red flags</h2>
      <Concept label="Red flag">
        <p>
          A sign that a piece of code is probably more complicated than it
          needs to be. The book calls one out for each major design issue as
          it goes, and summarizes all of them at the back.
        </p>
      </Concept>

      <p>The workflow the book prescribes for a red flag is specific:</p>

      <DiagramFigure caption="The red-flag loop (p. 2): you may need several failed alternatives before one actually removes the flag — and each attempt is where the real learning happens.">
        <svg
          viewBox="0 0 700 160"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="12"
        >
          <g fill="var(--color-surface)" stroke="var(--color-accent)">
            <rect x="10" y="50" width="150" height="60" rx="8" />
            <rect x="200" y="50" width="150" height="60" rx="8" />
            <rect x="390" y="50" width="150" height="60" rx="8" />
            <rect x="580" y="50" width="110" height="60" rx="8" />
          </g>
          <g fill="var(--color-foreground)" textAnchor="middle" fontWeight="600">
            <text x="85" y="76">Spot a</text>
            <text x="85" y="92">red flag</text>
            <text x="275" y="76">Try an</text>
            <text x="275" y="92">alternate design</text>
            <text x="465" y="76">Still flagged?</text>
            <text x="465" y="92">Try again</text>
            <text x="635" y="82">Cleaner</text>
            <text x="635" y="98">design</text>
          </g>
          <g stroke="var(--color-muted-foreground)" strokeWidth="2" fill="none" markerEnd="url(#arr3)">
            <path d="M162 80 L198 80" />
            <path d="M352 80 L388 80" />
            <path d="M542 80 L578 80" />
          </g>
          <path
            d="M465 50 C465 15, 300 15, 275 48"
            stroke="var(--color-muted-foreground)"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arr3)"
          />
          <text x="370" y="20" textAnchor="middle" fontSize="10" fill="var(--color-muted-foreground)">
            loop back — don't give up after one try
          </text>
          <defs>
            <marker
              id="arr3"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 z" fill="var(--color-muted-foreground)" />
            </marker>
          </defs>
        </svg>
      </DiagramFigure>

      <BookQuote cite="Chapter 1, Section 1.1, p. 2">
        <p>
          Don't give up easily: the more alternatives you try before fixing
          the problem, the more you will learn.
        </p>
      </BookQuote>

      <h2>Every principle has a limit</h2>
      <BookQuote cite="Chapter 1, Section 1.1, p. 3">
        <p>
          If you take any design idea to its extreme, you will probably end
          up in a bad place. Beautiful designs reflect a balance between
          competing ideas and approaches.
        </p>
      </BookQuote>
      <p>
        This is a direct warning against turning any single technique from
        this book into dogma — including the ones that will feel most
        persuasive once you've read them (deep modules, define errors out of
        existence). Several later chapters literally have a section titled{" "}
        <strong>"Taking it too far"</strong> for exactly this reason — worth
        watching for as a recurring pattern rather than a one-off caveat.
      </p>

      <h2>The examples are Java/C++, the ideas aren't</h2>
      <p>
        Most of the book's code is Java or C++, and most of the discussion is
        framed around designing <em>classes</em>. Ousterhout is explicit that
        this is just the most convenient vocabulary, not a scope limit:
      </p>
      <Concept label="Generalizes beyond OO classes">
        <p>
          Ideas about <em>methods</em> apply to functions in non-OO languages
          (e.g. C). Ideas about <em>modules</em> apply to units other than
          classes — a subsystem, or a network service, is a module too.
        </p>
      </Concept>

      <Recall
        question={
          <p>
            Why does the book recommend pairing it with code reviews
            specifically, rather than just re-reading your own code with the
            principles in mind?
          </p>
        }
      >
        <p>
          Because it's easier to see design problems in someone else's code
          than your own — reviewing other people's code also exposes you to
          design approaches (good and bad) you wouldn't have generated
          yourself.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Ousterhout,{" "}
        <em>A Philosophy of Software Design</em>, 2nd ed., Chapter 1, Section
        1.1, "How to use this book," pp. 2–3. The red flags referenced here
        are collected in full in the book's back-matter "Summary of Red
        Flags" — worth building out as its own reference document once more
        chapters are covered.
      </SourceBox>
    </>
  )
}
