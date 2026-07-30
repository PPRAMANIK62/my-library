import { Concept, BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0003-scalability-load-and-percentiles",
  book: "designing-data-intensive-applications",
  title: "Scalability: Load and Percentiles",
  kind: "lesson",
  order: 3,
  chapter: 1,
  totalChapters: 12,
  noteIndex: 3,
  totalNotes: 4,
}

export default function Chunk() {
  return (
    <>
      <p>
        A system working reliably today doesn't mean it'll keep working
        reliably as load grows — 10,000 users becoming 100,000, or 1 million
        becoming 10 million. Kleppmann is careful to correct a sloppy habit
        here:
      </p>

      <BookQuote cite='Chapter 1, "Scalability," p. 10'>
        <p>
          Scalability is the term we use to describe a system's ability to
          cope with increased load. Note, however, that it is not a
          one-dimensional label that we can attach to a system: it is
          meaningless to say "X is scalable" or "Y doesn't scale."
        </p>
      </BookQuote>

      <p>
        "Scalable" is not a property a system has in isolation. The only
        meaningful version of the question is: <em>if this specific kind of
        load grows in this specific way, what are our options for coping?</em>{" "}
        That means scalability discussions need two ingredients first: a
        precise way to describe load, and a precise way to describe
        performance.
      </p>

      <h2>Describing load: load parameters</h2>
      <p>
        Load is described with a handful of numbers called{" "}
        <strong>load parameters</strong> — the right choice depends entirely
        on your system's architecture: requests/second to a web server, the
        read/write ratio in a database, active users in a chat room, cache
        hit rate, and so on.
      </p>

      <p>
        The book grounds this with Twitter's 2012 numbers. Two operations
        dominate: posting a tweet (~4.6k requests/sec average, 12k at peak)
        and reading a home timeline (~300k requests/sec). The interesting
        part isn't the raw write volume — 12k writes/sec is easy. It's{" "}
        <strong>fan-out</strong>: every user follows many people, and is
        followed by many people, so one of the two implementation strategies
        below has to pay for that fan-out somewhere.
      </p>

      <Concept label="Two ways to build a home timeline">
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            <strong>Query at read time.</strong> Store all tweets in one
            global collection. When a user requests their timeline, look up
            everyone they follow, fetch their tweets, and merge them — a
            join at read time.
          </li>
          <li>
            <strong>Fan out at write time.</strong> Maintain a precomputed
            timeline cache per user. When someone tweets, immediately insert
            that tweet into every follower's cached timeline. Reads become
            cheap lookups.
          </li>
        </ol>
      </Concept>

      <p>
        Twitter started with approach 1, but it couldn't keep up with
        home-timeline read load, so they moved to approach 2 — because the
        tweet-post rate is nearly two orders of magnitude lower than the
        timeline-read rate, so it's cheaper to push work onto the rarer
        operation (writes). The catch: a tweet from someone with 30 million
        followers means 30 million cache writes for <em>one</em> post.
        Twitter's actual answer today is a hybrid — fan out writes for most
        users, but fetch celebrity tweets separately at read time and merge
        them in, avoiding the worst case of both approaches.
      </p>

      <Recall
        question={
          <p>
            Why did Twitter switch from "query at read time" to "fan out at
            write time," given that fan-out clearly does <em>more</em> total
            writes?
          </p>
        }
      >
        <p>
          Because the two operations have wildly different rates: posting
          tweets happens ~2 orders of magnitude less often than reading home
          timelines. Doing more work on the rare operation (writing fan-out
          on post) to make the frequent operation (reading a timeline) cheap
          is a net win — even though fan-out means one post can trigger
          millions of writes for a user with many followers.
        </p>
      </Recall>

      <h2>Describing performance: percentiles beat averages</h2>
      <p>
        Once load is defined, you can ask what happens to performance as
        load parameters increase — and answering that needs a precise notion
        of "performance." Batch systems care about <strong>throughput</strong>{" "}
        (records processed per second); online systems care about{" "}
        <strong>response time</strong> — the time between a client sending a
        request and receiving a response, as seen by the client. That's
        distinct from <em>latency</em>, the time a request spends waiting to
        be handled before service starts.
      </p>

      <p>
        Even identical repeated requests don't take identical time — random
        jitter from context switches, GC pauses, network retransmission, and
        disk page faults means response time is a{" "}
        <strong>distribution</strong>, not a single number. This is why the
        book pushes back hard on reporting a single "average" response time:
      </p>

      <Concept label="Percentiles">
        <p>
          Sort response times fastest → slowest. The{" "}
          <strong>median (p50)</strong> is the halfway point — half of
          requests are faster, half slower. Higher percentiles like{" "}
          <strong>p95, p99, p99.9</strong> describe the outliers: a p99 of
          1.5s means 99 out of 100 requests are faster than that, and 1 in
          100 is slower. These slow outliers are called{" "}
          <strong>tail latencies</strong>, and they matter
          disproportionately — Amazon found that the slowest requests often
          belong to customers with the most data, i.e. the most valuable
          customers, so a fast p99.9 protects the users you can least afford
          to lose.
        </p>
      </Concept>

      <DiagramFigure caption="A handful of slow outliers barely move the mean, but they define the p95/p99 — and it's the p95/p99 that determines whether your most valuable users have a good experience.">
        <svg
          viewBox="0 0 700 220"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="11"
        >
          <text
            x="350"
            y="24"
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-foreground)"
          >
            Why the mean hides the story
          </text>
          <line x1="40" y1="180" x2="660" y2="180" stroke="var(--color-border)" />
          <g stroke="var(--color-accent)" strokeWidth="4">
            <line x1="60" y1="150" x2="60" y2="180" />
            <line x1="90" y1="160" x2="90" y2="180" />
            <line x1="120" y1="140" x2="120" y2="180" />
            <line x1="150" y1="165" x2="150" y2="180" />
            <line x1="180" y1="155" x2="180" y2="180" />
            <line x1="210" y1="145" x2="210" y2="180" />
            <line x1="240" y1="160" x2="240" y2="180" />
            <line x1="270" y1="150" x2="270" y2="180" />
            <line x1="300" y1="140" x2="300" y2="180" />
            <line x1="330" y1="158" x2="330" y2="180" />
            <line x1="360" y1="148" x2="360" y2="180" />
            <line x1="390" y1="152" x2="390" y2="180" />
            <line x1="420" y1="142" x2="420" y2="180" />
            <line x1="450" y1="160" x2="450" y2="180" />
            <line x1="480" y1="150" x2="480" y2="180" />
            <line x1="510" y1="90" x2="510" y2="180" />
            <line x1="540" y1="155" x2="540" y2="180" />
            <line x1="570" y1="40" x2="570" y2="180" />
            <line x1="600" y1="145" x2="600" y2="180" />
            <line x1="630" y1="152" x2="630" y2="180" />
          </g>
          <line x1="40" y1="153" x2="660" y2="153" stroke="var(--color-muted-foreground)" strokeDasharray="3 2" />
          <text x="665" y="157" fontSize="10" fill="var(--color-muted-foreground)">mean</text>
          <line x1="40" y1="90" x2="660" y2="90" stroke="var(--color-success)" strokeDasharray="3 2" />
          <text x="665" y="94" fontSize="10" fill="var(--color-success)">p95</text>
          <line x1="40" y1="40" x2="660" y2="40" stroke="var(--color-destructive)" strokeDasharray="3 2" />
          <text x="665" y="44" fontSize="10" fill="var(--color-destructive)">p99</text>
          <text
            x="350"
            y="205"
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted-foreground)"
            fontStyle="italic"
          >
            Most requests cluster near the mean — but the rare, very slow
            requests are invisible in that number.
          </text>
        </svg>
      </DiagramFigure>

      <p>
        Two practical traps worth flagging:{" "}
        <strong>tail latency amplification</strong> — if serving one
        end-user request requires several parallel backend calls, the whole
        request is only as fast as its <em>slowest</em> parallel call, so a
        small percentage of slow backend calls turns into a much larger
        percentage of slow end-user requests. And when load-testing a
        system, the client generating load must send requests independently
        of response time — waiting for each response before sending the next
        artificially shrinks the queues and understates how bad things get
        in reality.
      </p>

      <h2>Coping with load: scaling up vs. scaling out</h2>
      <p>
        An architecture sized for one order of magnitude of load is unlikely
        to survive the next order of magnitude — fast-growing services often
        need to rethink their architecture at every 10x. The book frames the
        classic choice as:
      </p>

      <Concept label="Vertical vs. horizontal scaling">
        <p>
          <strong>Scaling up</strong> (vertical) moves to a more powerful
          machine. <strong>Scaling out</strong> (horizontal, a{" "}
          <em>shared-nothing architecture</em>) distributes load across many
          smaller machines. A single powerful machine is often simpler to
          run, but gets expensive fast; very intensive workloads usually
          can't avoid scaling out eventually. Real architectures are usually
          a pragmatic mix — a few fairly powerful machines can beat both a
          single giant one and a swarm of tiny ones.
        </p>
      </Concept>

      <p>
        Distributing <em>stateless</em> services is fairly mechanical.
        Distributing <em>stateful</em> data systems — actually taking a
        database from one node to many — introduces real complexity, which
        is why conventional wisdom has long been "keep the database on one
        node until you're forced off it." Some systems are{" "}
        <strong>elastic</strong>, adding resources automatically when load
        spikes; others are scaled manually, which is simpler and has fewer
        operational surprises even though it's slower to react.
      </p>

      <p>
        Crucially, there's no such thing as a generic, one-size-fits-all
        scalable architecture — sometimes called, mockingly,{" "}
        <em>magic scaling sauce</em>. An architecture built for 100,000
        requests/sec of 1 KB records looks nothing like one built for 3
        requests/minute of 2 GB records, even though both move the same
        total bytes. A scalable architecture encodes assumptions about which
        operations are common and which are rare — and if those assumptions
        turn out wrong, the engineering effort spent scaling is wasted at
        best, counterproductive at worst. That's why an early-stage startup
        usually should prioritize iterating on features over scaling for a
        hypothetical future load.
      </p>

      <SourceBox>
        <strong>Primary source:</strong> Kleppmann,{" "}
        <em>Designing Data-Intensive Applications</em>, 1st ed., Chapter 1,
        "Scalability," pp. 10–18.
      </SourceBox>
    </>
  )
}
