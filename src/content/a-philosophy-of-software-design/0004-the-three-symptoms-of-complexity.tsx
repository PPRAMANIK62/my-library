import {
  Concept,
  BookQuote,
  DiagramFigure,
  Recall,
  SourceBox,
} from "@/components/reader"
import { Link } from "react-router-dom"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0004-the-three-symptoms-of-complexity",
  book: "a-philosophy-of-software-design",
  title: "The Three Symptoms of Complexity",
  kind: "lesson",
  order: 4,
  chapter: 2,
  totalChapters: 21,
  noteIndex: 2,
  totalNotes: 3,
}

export default function Chunk() {
  return (
    <>
      <p>
        Now that complexity has a definition, the book gets diagnostic: what
        does it actually look like when you run into it? There are exactly
        three symptoms, and every complaint you've ever had about a codebase
        fits under one of them.
      </p>

      <p>
        Ousterhout walks through all three with one running example: a web
        site where every page shows a colored banner.
      </p>

      <DiagramFigure caption='Same site, three designs. (a) is easy to reason about but painful to change. (b) fixes that — until (c) shows how a single unnoticed exception reintroduces the worst symptom of all.'>
        <svg
          viewBox="0 0 720 420"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="11"
        >
          <text
            x="360"
            y="24"
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-foreground)"
          >
            Figure 2.1 — one banner color, three designs
          </text>

          <text x="20" y="55" fontSize="12" fontWeight="600" fill="#8a3b2f">
            (a) color hardcoded on every page
          </text>
          <g stroke="#8a3b2f" fill="#fff">
            <rect x="20" y="65" width="90" height="60" rx="4" />
            <rect x="130" y="65" width="90" height="60" rx="4" />
            <rect x="240" y="65" width="90" height="60" rx="4" />
          </g>
          <g fill="#c96b4a">
            <rect x="28" y="73" width="74" height="16" />
            <rect x="138" y="73" width="74" height="16" />
            <rect x="248" y="73" width="74" height="16" />
          </g>
          <text x="65" y="105" textAnchor="middle" fill="var(--color-muted-foreground)">
            page 1
          </text>
          <text x="175" y="105" textAnchor="middle" fill="var(--color-muted-foreground)">
            page 2
          </text>
          <text x="285" y="105" textAnchor="middle" fill="var(--color-muted-foreground)">
            page 3
          </text>
          <text x="20" y="145" fill="#b23b3b" fontWeight="600">
            Change the color → edit every page by hand.
          </text>
          <text x="20" y="160" fill="#b23b3b">
            = change amplification
          </text>

          <text x="20" y="200" fontSize="12" fontWeight="600" fill="#8a3b2f">
            (b) one shared bannerBg variable
          </text>
          <g stroke="#8a3b2f" fill="#fff">
            <rect x="20" y="210" width="90" height="60" rx="4" />
            <rect x="130" y="210" width="90" height="60" rx="4" />
            <rect x="240" y="210" width="90" height="60" rx="4" />
            <rect x="150" y="290" width="50" height="30" rx="4" fill="#f3e6df" />
          </g>
          <g fill="#c96b4a">
            <rect x="28" y="218" width="74" height="16" />
            <rect x="138" y="218" width="74" height="16" />
            <rect x="248" y="218" width="74" height="16" />
          </g>
          <text
            x="175"
            y="309"
            textAnchor="middle"
            fontSize="10"
            fill="var(--color-accent)"
          >
            bannerBg
          </text>
          <g
            stroke="var(--color-muted-foreground)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrb)"
          >
            <path d="M175 290 L65 271" />
            <path d="M175 290 L175 271" />
            <path d="M175 290 L285 271" />
          </g>
          <defs>
            <marker
              id="arrb"
              markerWidth="7"
              markerHeight="7"
              refX="3.5"
              refY="3.5"
              orient="auto"
            >
              <path d="M0,0 L7,3.5 L0,7 z" fill="var(--color-muted-foreground)" />
            </marker>
          </defs>
          <text x="20" y="345" fill="#2f7a4f" fontWeight="600">
            Change the color → edit bannerBg once. Every page updates.
          </text>

          <text x="400" y="200" fontSize="12" fontWeight="600" fill="#8a3b2f">
            (c) …but page 3 also hardcodes an "emphasis" shade
          </text>
          <g stroke="#8a3b2f" fill="#fff">
            <rect x="400" y="210" width="90" height="60" rx="4" />
            <rect x="510" y="210" width="90" height="60" rx="4" />
            <rect x="620" y="210" width="90" height="60" rx="4" />
            <rect x="530" y="290" width="50" height="30" rx="4" fill="#f3e6df" />
          </g>
          <g fill="#c96b4a">
            <rect x="408" y="218" width="74" height="16" />
            <rect x="518" y="218" width="74" height="16" />
            <rect x="628" y="218" width="74" height="16" />
          </g>
          <rect x="628" y="238" width="74" height="10" fill="#8a3b2f" />
          <text x="665" y="257" textAnchor="middle" fontSize="9" fill="#8a3b2f">
            emphasis (hardcoded!)
          </text>
          <text
            x="555"
            y="309"
            textAnchor="middle"
            fontSize="10"
            fill="var(--color-accent)"
          >
            bannerBg
          </text>
          <g
            stroke="var(--color-muted-foreground)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrb)"
          >
            <path d="M555 290 L445 271" />
            <path d="M555 290 L555 271" />
            <path d="M555 290 L665 271" />
          </g>
          <text x="400" y="345" fill="#b23b3b" fontWeight="600">
            Change bannerBg → page 3's emphasis shade silently goes stale.
          </text>
          <text x="400" y="360" fill="#b23b3b">
            Nothing tells you page 3 needs a matching edit.
          </text>
          <text x="400" y="375" fill="#b23b3b">
            = unknown unknowns
          </text>
        </svg>
      </DiagramFigure>

      <h2>1. Change amplification</h2>
      <Concept label="Change amplification">
        <p>
          A seemingly simple change requires modifications in many different
          places. Design (a) above is the textbook case: one conceptual
          change (the banner color) forces edits across every page.
        </p>
      </Concept>
      <p>
        The fix in (b) — one shared value, everything else references it — is
        a direct instance of Chapter 1's "encapsulate complexity" strategy. A
        core goal of good design, stated plainly here, is to shrink the
        amount of code touched by each design decision.
      </p>

      <h2>2. Cognitive load</h2>
      <Concept label="Cognitive load">
        <p>
          How much a developer needs to know in order to complete a task
          safely. More required knowledge means more time spent learning it,
          and more risk of a bug from missing something.
        </p>
      </Concept>
      <BookQuote cite='Chapter 2, Section 2.2, "Symptoms of complexity," p. 6'>
        <p>
          Suppose a function in C allocates memory, returns a pointer to that
          memory, and assumes that the caller will free the memory. This adds
          to the cognitive load of developers using the function; if a
          developer fails to free the memory, there will be a memory leak.
        </p>
      </BookQuote>
      <p>
        The book explicitly warns against a common shortcut: assuming fewer
        lines of code means less complexity. A framework that lets you write
        a feature in three lines, where nobody can explain what those three
        lines actually do, has <em>higher</em> cognitive load than a
        slightly longer, more explicit version — even though it "looks"
        simpler by a line count. Sometimes more code is the simpler design.
      </p>

      <h2>3. Unknown unknowns</h2>
      <Concept label="Unknown unknowns">
        <p>
          It isn't obvious which code needs to change, or what a developer
          needs to know, to complete a task correctly. Design (c) above is
          the example: there is no signal anywhere that changing{" "}
          <code>bannerBg</code> also requires updating the emphasis color on
          page 3.
        </p>
      </Concept>
      <BookQuote cite='Chapter 2, Section 2.2, "Symptoms of complexity," p. 7'>
        <p>
          Of the three manifestations of complexity, unknown unknowns are
          the worst.
        </p>
      </BookQuote>
      <p>
        The reasoning for why it's worst is precise, not just a vibe: with
        change amplification, you at least know <em>where</em> to make
        changes — it's just tedious. With cognitive load, you at least know{" "}
        <em>what</em> to go read — it's just costly. With unknown unknowns,
        you don't know that there's anything to find out at all, and the
        only guaranteed fix — reading every line of the system — doesn't
        scale and still might miss an undocumented design decision.
      </p>

      <h2>The opposite of all three: an obvious system</h2>
      <BookQuote cite='Chapter 2, Section 2.2, "Symptoms of complexity," p. 7'>
        <p>
          In an obvious system, a developer can quickly understand how the
          existing code works and what is required to make a change...
          without thinking very hard, and yet be confident that the guess is
          correct.
        </p>
      </BookQuote>
      <p>
        This is the positive target the rest of the book aims at — Chapter
        18 comes back to techniques for obviousness specifically, but every
        design idea between here and there is implicitly trying to push a
        system toward this state.
      </p>

      <Recall
        question={
          <p>
            Two designs both require touching 10 files to add a feature. In
            one, a comment and a consistent naming convention make it
            obvious which 10 files. In the other, there's no way to know
            until you ship it and something breaks. Which symptom does the
            second design have that the first one doesn't?
          </p>
        }
      >
        <p>
          Unknown unknowns. Both designs suffer change amplification (10
          files for one feature), but the first is merely tedious — you know
          where to look. The second is worse: nothing tells you what needs to
          change, so you find out only when it breaks.
        </p>
      </Recall>

      <p>
        These three terms recur constantly for the rest of the book — worth
        bookmarking:{" "}
        <Link to="/a-philosophy-of-software-design/complexity-model">
          Reference: The Complexity Model
        </Link>
        .
      </p>

      <SourceBox>
        <strong>Primary source:</strong> Ousterhout,{" "}
        <em>A Philosophy of Software Design</em>, 2nd ed., Chapter 2, Section
        2.2, "Symptoms of complexity," pp. 5–7, including Figure 2.1.
      </SourceBox>
    </>
  )
}
