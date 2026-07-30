import { Link } from "react-router-dom"

import { Concept } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "glossary",
  book: "designing-data-intensive-applications",
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

      <h2>D</h2>

      <Concept label="Data-intensive (vs. compute-intensive)">
        <p>
          A category of application where the amount, complexity, and rate
          of change of data — not raw CPU power — is the limiting factor.
          This book's entire subject.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0001-data-systems-not-just-databases">
              Data Systems, Not Just Databases
            </Link>
          </em>
        </p>
      </Concept>

      <h2>E</h2>

      <Concept label="Evolvability">
        <p>
          How easy it is for engineers to change a data system in the future
          to handle unanticipated use cases, as requirements inevitably
          shift. Also called extensibility, modifiability, or plasticity —
          this book's word for "agility" applied at the scale of an entire
          data system rather than a single codebase.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0004-maintainability-three-design-principles">
              Maintainability
            </Link>
          </em>
        </p>
      </Concept>

      <h2>F</h2>

      <Concept label="Failure">
        <p>
          When the system <strong>as a whole</strong> stops providing the
          required service to the user — as opposed to a fault in one
          component. Fault tolerance is precisely the set of mechanisms that
          keep faults from becoming failures.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0002-reliability-faults-vs-failures">
              Reliability: Faults vs. Failures
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Fan-out">
        <p>
          In a data system, the number of downstream requests or writes
          triggered by one incoming request or event — e.g. one tweet
          triggering a write into every follower's cached timeline.
          Borrowed from electronic engineering.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0003-scalability-load-and-percentiles">
              Scalability: Load and Percentiles
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Fault">
        <p>
          One component of a system deviating from its spec — a disk
          crashing, a bug throwing. Distinct from a <em>failure</em>: a
          fault-tolerant system absorbs faults without the whole system
          failing.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0002-reliability-faults-vs-failures">
              Reliability: Faults vs. Failures
            </Link>
          </em>
        </p>
      </Concept>

      <h2>L</h2>

      <Concept label="Load parameters">
        <p>
          The small set of numbers used to describe the current load on a
          system — chosen based on the system's architecture (requests/sec,
          read/write ratio, active users, cache hit rate, etc.). The
          prerequisite for any meaningful scalability discussion.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0003-scalability-load-and-percentiles">
              Scalability: Load and Percentiles
            </Link>
          </em>
        </p>
      </Concept>

      <h2>M</h2>

      <Concept label="Maintainability">
        <p>
          One of the book's three core concerns: over a system's lifetime,
          many different people work on it, and they should all be able to
          do so productively. Broken down into operability, simplicity, and
          evolvability.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0004-maintainability-three-design-principles">
              Maintainability
            </Link>
          </em>
        </p>
      </Concept>

      <h2>O</h2>

      <Concept label="Operability">
        <p>
          How easy a system is for an operations team to keep running
          smoothly — good monitoring, no single-machine dependency,
          predictable behavior, clear documentation of "if I do X, Y will
          happen."{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0004-maintainability-three-design-principles">
              Maintainability
            </Link>
          </em>
        </p>
      </Concept>

      <h2>P</h2>

      <Concept label="Percentile (p50, p95, p99, p99.9)">
        <p>
          A response-time threshold below which a given fraction of requests
          fall. p50 (the median) is the halfway point; p95/p99/p99.9
          describe increasingly rare, slow outliers. Preferred over the mean
          because the mean hides how many users actually experience a given
          delay.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0003-scalability-load-and-percentiles">
              Scalability: Load and Percentiles
            </Link>
          </em>
        </p>
      </Concept>

      <h2>R</h2>

      <Concept label="Reliability">
        <p>
          One of the book's three core concerns: a system continuing to work
          correctly even when things go wrong — hardware faults, software
          bugs, or human error.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0002-reliability-faults-vs-failures">
              Reliability: Faults vs. Failures
            </Link>
          </em>
        </p>
      </Concept>

      <h2>S</h2>

      <Concept label="Scalability">
        <p>
          A system's ability to cope with increased load — not a
          one-dimensional label a system either has or lacks. Only
          meaningful relative to a specific kind of growth: "how do we cope
          if this load parameter grows this way?"{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0003-scalability-load-and-percentiles">
              Scalability: Load and Percentiles
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Shared-nothing architecture">
        <p>
          A horizontally scaled (scale-out) system, where load is
          distributed across many smaller, independent machines rather than
          concentrated on one large (scale-up) machine.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0003-scalability-load-and-percentiles">
              Scalability: Load and Percentiles
            </Link>
          </em>
        </p>
      </Concept>

      <Concept label="Simplicity (accidental complexity)">
        <p>
          Removing complexity that isn't inherent to the problem being
          solved but only arose from implementation choices —{" "}
          <em>not</em> the same as simplicity of the user interface. The
          main tool for achieving it is abstraction.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0004-maintainability-three-design-principles">
              Maintainability
            </Link>
          </em>
        </p>
      </Concept>

      <h2>T</h2>

      <Concept label="Tail latency (amplification)">
        <p>
          The high percentiles (p95+) of response time, which
          disproportionately affect a service's most active/valuable users.{" "}
          <em>Amplification</em> is the effect where a small percentage of
          slow parallel backend calls turns into a much larger percentage of
          slow end-user requests, since one request is only as fast as its
          slowest parallel call.{" "}
          <em>
            Ch. 1 →{" "}
            <Link to="/designing-data-intensive-applications/0003-scalability-load-and-percentiles">
              Scalability: Load and Percentiles
            </Link>
          </em>
        </p>
      </Concept>
    </>
  )
}
