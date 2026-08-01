import { BookQuote, DiagramFigure, Recall, SourceBox } from "@/components/reader"
import { Link } from "react-router-dom"
import type { ChunkMeta } from "@/lib/content/types"

export const meta: ChunkMeta = {
  id: "0007-analyzing-trade-offs-the-auction-system",
  book: "fundamentals-of-software-architecture",
  title: "Analyzing Trade-Offs: The Auction System",
  kind: "lesson",
  order: 7,
  chapter: 2,
  totalChapters: 27,
  noteIndex: 4,
  totalNotes: 5,
}

export default function Chunk() {
  return (
    <>
      <BookQuote cite='Mark Richards, quoted in Chapter 2, "Analyzing Trade-Offs," p. 30'>
        <p>Architecture is the stuff you can't Google or ask an LLM about.</p>
      </BookQuote>

      <p>
        The reason that quote is true, not just clever: whether REST or
        messaging is "better," or whether microservices is "the right"
        style, depends on your deployment environment, business drivers,
        company culture, budget, timeframe, and developer skill set — none
        of which a search engine or LLM knows about your specific system.
        This note walks through the book's worked example of what trade-off
        analysis actually looks like in practice, because "everything is a
        trade-off" (the{" "}
        <Link to="/fundamentals-of-software-architecture/0002-laws-of-software-architecture">
          First Law
        </Link>
        ) is easy to nod along to and much harder to actually do.
      </p>

      <h2>The scenario</h2>
      <p>
        An online auction system: a <strong>Bid Producer</strong> service
        generates each bid, which needs to reach three downstream services —{" "}
        <strong>Bid Capture</strong>, <strong>Bid Tracking</strong>, and{" "}
        <strong>Bid Analytics</strong>. The architectural question: should
        that fan-out use point-to-point <strong>queues</strong>, or a
        publish-and-subscribe <strong>topic</strong>?
      </p>

      <DiagramFigure caption="Reconstruction of Figure 2-9 — publish-and-subscribe: Bid Producer publishes once to a topic, all three services subscribe.">
        <svg
          viewBox="0 0 700 200"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="12"
        >
          <g fill="#f3e6df" stroke="#8a3b2f">
            <rect x="20" y="80" width="130" height="40" rx="6" />
            <rect x="290" y="80" width="120" height="40" rx="6" />
            <rect x="540" y="20" width="140" height="34" rx="6" />
            <rect x="540" y="83" width="140" height="34" rx="6" />
            <rect x="540" y="146" width="140" height="34" rx="6" />
          </g>
          <g fill="var(--color-foreground)" textAnchor="middle" fontWeight="600">
            <text x="85" y="104">Bid Producer</text>
            <text x="350" y="104">Topic</text>
            <text x="610" y="41">Bid Capture</text>
            <text x="610" y="104">Bid Tracking</text>
            <text x="610" y="167">Bid Analytics</text>
          </g>
          <g stroke="#2f7a4f" strokeWidth="2" fill="none" markerEnd="url(#arrTopic)">
            <path d="M150 100 L288 100" />
            <path d="M410 95 C 470 70, 500 55, 538 40" />
            <path d="M410 100 L538 100" />
            <path d="M410 105 C 470 130, 500 145, 538 160" />
          </g>
          <defs>
            <marker id="arrTopic" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 z" fill="#2f7a4f" />
            </marker>
          </defs>
          <text
            x="350"
            y="180"
            textAnchor="middle"
            fontSize="12"
            fill="var(--color-muted-foreground)"
          >
            One connection out of Bid Producer; subscribers can be added with
            zero changes upstream.
          </text>
        </svg>
      </DiagramFigure>

      <DiagramFigure caption="Reconstruction of Figure 2-10 — point-to-point: Bid Producer connects to three separate queues, one per consumer.">
        <svg
          viewBox="0 0 700 200"
          xmlns="http://www.w3.org/2000/svg"
          fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          fontSize="12"
        >
          <g fill="#f3e6df" stroke="#8a3b2f">
            <rect x="20" y="80" width="130" height="40" rx="6" />
            <rect x="290" y="20" width="100" height="34" rx="6" />
            <rect x="290" y="83" width="100" height="34" rx="6" />
            <rect x="290" y="146" width="100" height="34" rx="6" />
            <rect x="540" y="20" width="140" height="34" rx="6" />
            <rect x="540" y="83" width="140" height="34" rx="6" />
            <rect x="540" y="146" width="140" height="34" rx="6" />
          </g>
          <g fill="var(--color-foreground)" textAnchor="middle" fontWeight="600">
            <text x="85" y="104">Bid Producer</text>
            <text x="340" y="41">Queue 1</text>
            <text x="340" y="104">Queue 2</text>
            <text x="340" y="167">Queue 3</text>
            <text x="610" y="41">Bid Capture</text>
            <text x="610" y="104">Bid Tracking</text>
            <text x="610" y="167">Bid Analytics</text>
          </g>
          <g stroke="#b23b3b" strokeWidth="2" fill="none" markerEnd="url(#arrQueue)">
            <path d="M150 90 C 200 60, 250 45, 288 38" />
            <path d="M150 100 L288 100" />
            <path d="M150 110 C 200 140, 250 155, 288 163" />
            <path d="M390 38 L538 38" />
            <path d="M390 100 L538 100" />
            <path d="M390 163 L538 163" />
          </g>
          <defs>
            <marker id="arrQueue" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 z" fill="#b23b3b" />
            </marker>
          </defs>
          <text
            x="350"
            y="185"
            textAnchor="middle"
            fontSize="12"
            fill="var(--color-muted-foreground)"
          >
            Three explicit connections out of Bid Producer, one per queue.
          </text>
        </svg>
      </DiagramFigure>

      <h2>The obvious-looking answer — and why it's incomplete</h2>
      <p>
        The topic looks like the clear winner: adding a new "Bid History"
        service later means it just subscribes to the existing topic — zero
        changes to Bid Producer or the infrastructure. With queues, that
        same addition means a new queue <em>and</em> modifying Bid Producer
        to add another connection. The topic also decouples Bid Producer
        from its consumers: it doesn't know or care who's listening. That
        reads like a done deal — until you apply the actual skill this
        chapter is teaching.
      </p>

      <BookQuote cite="Rich Hickey, quoted in Chapter 2, p. 32">
        <p>
          Programmers know the benefits of everything and the trade-offs of
          nothing. Architects need to understand both.
        </p>
      </BookQuote>

      <h2>The trade-offs the "obvious" answer skips</h2>
      <p>
        Push further and the topic's downsides surface. It's easy to
        wiretap a topic — anyone can subscribe, which is a real
        data-security concern; a queue can only be read by its intended
        consumer, and a rogue listener stealing messages would visibly
        break the intended consumer's flow (an implicit tripwire the topic
        doesn't have). A topic also forces a single{" "}
        <strong>homogeneous contract</strong>: every subscriber gets the
        same shape of data, so adding "Bid History" needing one extra field
        means changing the contract for every existing subscriber too.
        Queues let each consumer have its own contract. And a topic (in the
        general case) can't be monitored message-by-message for
        autoscaling the way individual queues can — though the book notes
        this specific trade-off is technology-dependent, since protocols
        like AMQP support monitoring and load-balancing per queue via the
        exchange/queue separation.
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border p-4">
        <p className="mb-2 font-sans text-sm font-semibold text-foreground">
          Table 2-1. Trade-offs for topics
        </p>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-3 py-2 font-sans font-semibold text-foreground">
                Topic advantages
              </th>
              <th className="px-3 py-2 font-sans font-semibold text-foreground">
                Topic disadvantages
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2">Architectural extensibility</td>
              <td className="px-3 py-2">Data access and data security concerns</td>
            </tr>
            <tr>
              <td className="px-3 py-2">Service decoupling</td>
              <td className="px-3 py-2">No heterogeneous contracts</td>
            </tr>
            <tr>
              <td className="px-3 py-2"></td>
              <td className="px-3 py-2">Monitoring and programmatic scalability</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        So which is better? <strong>It depends</strong> — the book's
        genuinely intended answer, not a cop-out. The real skill is
        reframing the question: not "which is better," but "which matters
        more here, extensibility or security?" That answer changes with the
        business drivers, and it's the architect's job to ask it explicitly
        rather than default to whichever option looked good on first
        glance.
      </p>

      <Recall
        question={
          <p>
            Name one advantage and one disadvantage of the topic
            (publish-subscribe) approach in the auction system, from the
            trade-off analysis above.
          </p>
        }
      >
        <p>
          Advantages: architectural extensibility (new subscribers need no
          upstream changes) and service decoupling (producer doesn't know
          its consumers). Disadvantages: weaker data access/security (easy
          to "wiretap"), forced homogeneous contracts across all
          subscribers, and (technology-dependent) weaker per-consumer
          monitoring/autoscaling than queues.
        </p>
      </Recall>

      <SourceBox>
        <strong>Primary source:</strong> Richards &amp; Ford,{" "}
        <em>Fundamentals of Software Architecture</em>, 2nd ed., Chapter 2,
        "Analyzing Trade-Offs," pp. 30–33, including Table 2-1.
      </SourceBox>
    </>
  )
}
