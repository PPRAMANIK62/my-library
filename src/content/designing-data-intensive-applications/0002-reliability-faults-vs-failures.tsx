import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0002-reliability-faults-vs-failures",
  book: "designing-data-intensive-applications",
  title: "Reliability: Faults vs. Failures",
  kind: "lesson",
  order: 2,
  chapter: 1,
  totalChapters: 12,
  noteIndex: 2,
  totalNotes: 4,
}

export default function Chunk() {
  return (
    <>
      <p>
        Everyone has an intuitive sense of "reliable." Kleppmann sharpens it
        into a working definition built from four expectations: the
        application does what the user expects, it tolerates user mistakes,
        it performs well enough for the expected load, and it prevents
        unauthorized access. Put together:
      </p>

      <BookQuote cite='Chapter 1, "Reliability," p. 6'>
        <p>
          Reliability [means], roughly, "continuing to work correctly, even
          when things go wrong."
        </p>
      </BookQuote>

      <h2>A fault is not the same as a failure</h2>
      <p>
        This is the load-bearing distinction of the whole section, and it's
        easy to blur in casual conversation.
      </p>

      <Concept label="Fault vs. failure">
        <p>
          A <strong>fault</strong> is one component of the system deviating
          from its spec — a disk crashing, a bug throwing an exception. A{" "}
          <strong>failure</strong> is when the <em>system as a whole</em>{" "}
          stops providing the required service to the user. A fault-tolerant
          system is designed to keep faults from turning into failures.
        </p>
      </Concept>

      <p>
        It's impossible to reduce the probability of a fault to zero —
        hardware breaks, software has bugs, humans err. So fault-tolerant
        systems aren't built by preventing every possible fault; they're
        built by assuming faults will happen and designing so that
        individual faults don't cascade into a system-wide failure. It's
        also not worth chasing tolerance of every conceivable fault — "if
        the entire planet Earth were swallowed by a black hole, tolerance of
        that fault would require web hosting in space," as Kleppmann puts
        it. Only certain classes of fault are worth engineering for.
      </p>

      <p>
        One counterintuitive consequence: in a genuinely fault-tolerant
        system, it can make sense to <em>increase</em> the rate of faults on
        purpose — for example by randomly killing processes without
        warning, the way Netflix's <strong>Chaos Monkey</strong> does.
        Continually exercising the fault-tolerance machinery is what gives
        you confidence it will actually work when a fault happens for real,
        rather than only in the untested path.
      </p>

      <h2>Three sources of faults</h2>

      <Concept label="Hardware faults">
        <p>
          Disks crash, RAM goes bad, someone unplugs the wrong cable. Hard
          disks have a mean time to failure (MTTF) of roughly 10–50 years —
          so on a cluster of 10,000 disks, expect about one disk to die{" "}
          <em>per day</em>. These faults are typically{" "}
          <strong>random and largely independent</strong> of each other. The
          traditional fix is redundancy (RAID, dual power supplies, backup
          generators); the newer trend, as data volumes and machine counts
          grow, is software fault-tolerance that tolerates the loss of an
          entire machine — which also brings an operational bonus: nodes can
          be patched one at a time (a <em>rolling upgrade</em>) instead of
          requiring downtime.
        </p>
      </Concept>

      <Concept label="Software errors">
        <p>
          A <strong>systematic</strong> fault inside the system itself — a
          bug that crashes every instance of a service given the same bad
          input (the 2012 leap-second bug that hung many Linux servers
          simultaneously is the book's example), a runaway process consuming
          shared resources, or a <strong>cascading failure</strong> where
          one component's fault triggers another's. Unlike hardware faults,
          these are <strong>correlated across nodes</strong> — which is
          exactly what makes them harder to anticipate and capable of
          causing much bigger outages. They often lie dormant until an
          unusual set of circumstances reveals an assumption about the
          environment that was true once but silently stopped being true.
        </p>
      </Concept>

      <Concept label="Human errors">
        <p>
          Humans design, build, and operate every system — and humans are
          unreliable too. One study cited in the book found{" "}
          <strong>configuration errors by operators</strong> to be the
          leading cause of outages, with hardware faults responsible for
          only 10–25%. The book's approach isn't "hire more careful people"
          — it's designing the system to minimize the blast radius of
          inevitable mistakes: well-designed APIs and admin interfaces that
          make the right thing easy and the wrong thing hard, sandbox
          environments decoupled from production, thorough testing at all
          levels, fast rollback and gradual rollout, and detailed monitoring
          (<em>telemetry</em>) so problems surface early.
        </p>
      </Concept>

      <DiagramFigure caption="All three feed into &quot;faults&quot; — but they differ in how correlated they are across the system, which is why they need different countermeasures.">
        <svg
          viewBox="0 0 700 200"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="12"
        >
          <text
            x="350"
            y="24"
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-foreground)"
          >
            Where faults come from — and how they behave
          </text>

          <g fill="var(--color-surface)" stroke="var(--color-accent)">
            <rect x="30" y="50" width="190" height="110" rx="6" />
            <rect x="255" y="50" width="190" height="110" rx="6" />
            <rect x="480" y="50" width="190" height="110" rx="6" />
          </g>
          <g textAnchor="middle" fill="var(--color-foreground)">
            <text x="125" y="75" fontWeight="600">Hardware</text>
            <text x="125" y="95" fontSize="11">random,</text>
            <text x="125" y="110" fontSize="11">independent</text>
            <text x="125" y="135" fontSize="10" fill="var(--color-muted-foreground)">
              fix: redundancy
            </text>

            <text x="350" y="75" fontWeight="600">Software bugs</text>
            <text x="350" y="95" fontSize="11">correlated,</text>
            <text x="350" y="110" fontSize="11">hard to anticipate</text>
            <text x="350" y="135" fontSize="10" fill="var(--color-muted-foreground)">
              fix: testing, isolation,
            </text>
            <text x="350" y="148" fontSize="10" fill="var(--color-muted-foreground)">
              self-checking
            </text>

            <text x="575" y="75" fontWeight="600">Human error</text>
            <text x="575" y="95" fontSize="11">leading cause</text>
            <text x="575" y="110" fontSize="11">of real outages</text>
            <text x="575" y="135" fontSize="10" fill="var(--color-muted-foreground)">
              fix: safe APIs, sandboxes,
            </text>
            <text x="575" y="148" fontSize="10" fill="var(--color-muted-foreground)">
              fast rollback, telemetry
            </text>
          </g>
        </svg>
      </DiagramFigure>

      <h2>How important is reliability, really?</h2>
      <p>
        Reliability isn't just for nuclear power stations and air-traffic
        control. Bugs in ordinary business software cause lost productivity
        and legal risk; outages of ecommerce sites cost revenue and
        reputation. Even in "noncritical" software, there's a responsibility
        to users — Kleppmann's example is a parent who stores every photo of
        their children in your app: how would they feel if that database
        silently corrupted? That said, the book is explicit that reliability
        can be a deliberate trade-off — a prototype for an unproven market,
        or a service with razor-thin margins, may reasonably sacrifice some
        reliability to cut cost. The point isn't that reliability is always
        paramount; it's that you should be <em>conscious</em> of when you're
        cutting that corner, rather than doing it by accident.
      </p>

      <Recall
        question={
          <p>
            A disk in your cluster crashes, but a RAID mirror keeps the
            service running with no user-visible interruption. Was that a
            fault, a failure, both, or neither?
          </p>
        }
      >
        <p>
          A fault only — the disk (one component) deviated from spec, but
          the system as a whole kept providing the required service, so
          there was no failure. This is exactly what "fault-tolerant" means:
          faults happen, but they're absorbed before they become a
          user-visible failure.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Kleppmann,{" "}
        <em>Designing Data-Intensive Applications</em>, 1st ed., Chapter 1,
        "Reliability," pp. 6–10.
      </SourceBox>
    </>
  )
}
