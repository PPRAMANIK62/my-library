import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import { Link } from "react-router-dom"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0006-building-a-personal-technology-radar",
  book: "fundamentals-of-software-architecture",
  title: "Building a Personal Technology Radar",
  kind: "lesson",
  order: 6,
  chapter: 2,
  totalChapters: 27,
  noteIndex: 3,
  totalNotes: 5,
}

export default function Chunk() {
  return (
    <>
      <p>
        The{" "}
        <Link to="/fundamentals-of-software-architecture/0005-technical-breadth-and-the-knowledge-pyramid">
          previous note
        </Link>{" "}
        established that architects need breadth over depth. This one
        covers the book's two concrete techniques for actually building it:
        a small daily habit, and a tool for structuring what you do with
        that time.
      </p>

      <h2>The 20-minute rule</h2>
      <BookQuote cite='Chapter 2, "The 20-Minute Rule," p. 24'>
        <p>
          Devote at least 20 minutes a day to learning something new or
          diving deeper into a specific topic.
        </p>
      </BookQuote>
      <p>
        The specific advice on <em>when</em> is the part people usually get
        wrong: lunch gets eaten by catching up on work, and evenings lose to
        family and social plans. The book's recommendation is to take the 20
        minutes first thing in the morning, right after coffee or tea — and
        crucially, <strong>before checking email</strong>. Once the inbox is
        open, the day has effectively started and the window closes.
      </p>
      <p>
        This is deliberately a small, sustainable habit rather than a big
        initiative — the point is that 20 minutes a day compounds, while
        "I'll do a deep dive this weekend" reliably doesn't happen.
      </p>

      <h2>The personal radar</h2>
      <p>
        The 20-minute rule tells you to spend the time; a radar tells you
        where to spend it. The concept originates from Thoughtworks'
        Technology Advisory Board, a group of senior technologists who help
        set the company's technology direction and who began publishing a
        biannual public{" "}
        <a href="https://radar.thoughtworks.com/">Technology Radar</a> to
        keep that thinking current and shared.
      </p>

      <Concept label="Four quadrants (what kind of thing)">
        <ul className="my-0 list-disc pl-5">
          <li><strong>Tools</strong> — from IDEs to enterprise integration tools</li>
          <li><strong>Languages and frameworks</strong> — computer languages, libraries, frameworks</li>
          <li><strong>Techniques</strong> — practices, processes, engineering advice</li>
          <li><strong>Platforms</strong> — databases, cloud vendors, operating systems</li>
        </ul>
      </Concept>

      <Concept label="Four rings (how mature/worth pursuing), outer → inner">
        <ul className="my-0 list-disc pl-5">
          <li><strong>Hold</strong> — don't start anything new with it (fine on existing projects)</li>
          <li><strong>Assess</strong> — worth exploring via a spike or research project</li>
          <li><strong>Trial</strong> — worth pursuing; pilot a low-risk project</li>
          <li><strong>Adopt</strong> — the industry should be using this</li>
        </ul>
      </Concept>

      <DiagramFigure caption="Reconstruction of Figure 2-7 — four quadrants crossed with four rings; each dot (&quot;blip&quot;) is one technology or technique placed by maturity and category.">
        <svg
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="12"
        >
          <g fill="none" stroke="var(--color-border)">
            <circle cx="240" cy="240" r="210" />
            <circle cx="240" cy="240" r="155" />
            <circle cx="240" cy="240" r="100" />
            <circle cx="240" cy="240" r="45" />
            <line x1="30" y1="240" x2="450" y2="240" />
            <line x1="240" y1="30" x2="240" y2="450" />
          </g>
          <g fill="var(--color-muted-foreground)" fontWeight="600">
            <text x="240" y="55" textAnchor="middle">Hold</text>
            <text x="240" y="105" textAnchor="middle">Assess</text>
            <text x="240" y="155" textAnchor="middle">Trial</text>
            <text x="240" y="228" textAnchor="middle">Adopt</text>
          </g>
          <g fill="var(--color-accent)" fontWeight="600">
            <text x="450" y="235" textAnchor="end">Tools</text>
            <text x="440" y="75" textAnchor="end">Languages &amp; frameworks</text>
            <text x="40" y="75">Techniques</text>
            <text x="40" y="235">Platforms</text>
          </g>
          <g fill="#8a3b2f">
            <circle cx="330" cy="200" r="5" />
            <circle cx="150" cy="180" r="5" />
            <circle cx="280" cy="330" r="5" />
            <circle cx="180" cy="300" r="5" />
            <circle cx="360" cy="260" r="5" />
          </g>
        </svg>
      </DiagramFigure>

      <p>
        For personal use, the book suggests repurposing the four rings
        slightly: <strong>Hold</strong> becomes habits or low-value
        information streams you're trying to break, not just technologies
        to avoid. <strong>Assess</strong> is a staging area for things
        you've heard good things about but haven't looked into yet.{" "}
        <strong>Trial</strong> is active spike/research territory.{" "}
        <strong>Adopt</strong> is what you're currently excited about and
        using as a default solution.
      </p>

      <BookQuote cite='Chapter 2, "Developing a Personal Radar," p. 29'>
        <p>
          It's dangerous to your career to adopt a laissez-faire attitude
          toward your technology portfolio. […] Treat your technology
          portfolio like a financial portfolio: diversify!
        </p>
      </BookQuote>

      <p>
        The book is candid that the visualization itself is secondary —{" "}
        <strong>the exercise of building it is the actual value</strong>,
        because it forces periodic, deliberate reflection on your technology
        portfolio instead of picking things ad hoc based on what's currently
        fashionable. Thoughtworks' own{" "}
        <a href="https://www.thoughtworks.com/radar/byor">
          Build Your Own Radar
        </a>{" "}
        tool (feed it a spreadsheet, get a radar visualization) is the
        suggested way to actually produce one.
      </p>

      <Recall
        question={
          <p>
            Name the four rings of a technology radar, outer to inner, and
            what each one means for personal use.
          </p>
        }
      >
        <p>
          Hold (habits/streams to break), Assess (heard good things, not yet
          explored), Trial (actively spiking/researching), Adopt (currently
          excited about, using as default).
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Richards &amp; Ford,{" "}
        <em>Fundamentals of Software Architecture</em>, 2nd ed., Chapter 2,
        "The 20-Minute Rule" and "Developing a Personal Radar," pp. 24–29.
        See the official{" "}
        <a href="https://radar.thoughtworks.com/">
          Thoughtworks Technology Radar
        </a>{" "}
        and{" "}
        <a href="https://www.thoughtworks.com/radar/byor">
          Build Your Own Radar
        </a>{" "}
        tool referenced directly in this section.
      </SourceBox>
    </>
  )
}
