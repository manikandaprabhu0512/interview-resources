import {
  PatternMeta,
  Tagline,
  Callout,
  StructureDiagram,
  DoAndDont,
  RealWorldExamples,
  KeyTakeaway,
} from "@/components/pattern";
import { PatternNav } from "@/components/patternnav/PatternNav";
import { GitBranch, ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chain of Responsibility Pattern",
};

export default function ChainOfResponsibilityPatternPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      {/* 1. PatternMeta */}
      <PatternMeta pattern="Behavioral" difficulty="Intermediate" />

      {/* 2. Title + GitHub button */}
      <div className="flex items-start justify-between mt-4 mb-3">
        <h1 className="text-3xl font-bold tracking-tight">
          Chain of Responsibility
        </h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Chain_of_Responsibility_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      {/* 3. Tagline */}
      <Tagline>
        Pass a request down a chain of handlers — each one handles what it can
        and forwards the rest.
      </Tagline>

      <hr className="my-6" />

      {/* 5. The Problem */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The problem</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          An ATM needs to dispense cash using the largest notes possible —
          $1000s first, then $500s, $200s, $100s. The naive approach puts all
          that logic inside one monster method: a cascade of{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            if
          </code>{" "}
          blocks that's hard to extend when a new denomination is added and
          impossible to reorder without rewriting.
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// One method owns all denomination logic — adding $50 notes means editing here
void dispense(int amount) {
    int k = amount / 1000;
    amount -= k * 1000;
    // dispense k x $1000

    int f = amount / 500;
    amount -= f * 500;
    // dispense f x $500

    int tw = amount / 200;
    amount -= tw * 200;
    // dispense tw x $200

    // ... every denomination hardcoded in sequence
    // reordering or adding a denomination = rewriting this whole block
}`}</code>
        </pre>
        <Callout type="warning">
          When a single method owns the entire dispatch sequence, each new
          denomination (or changed priority) requires touching and retesting the
          whole function — a classic Open/Closed violation.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 7. The Solution */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The solution</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Chain of Responsibility gives each denomination its own handler. Every
          handler knows only two things: how many notes it has, and where to
          forward the remaining amount. The chain is assembled by the client —
          handlers are completely unaware of each other's existence.
        </p>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              Abstract Handler
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                MoneyHandler
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Holds the{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                nextHandler
              </code>{" "}
              reference and exposes{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                setNextHandler()
              </code>
              . Declares the abstract{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                dispense()
              </code>{" "}
              contract.
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Concrete Handlers
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                ThousandHandler
              </code>{" "}
              ·{" "}
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                FiveHundredHandler
              </code>{" "}
              · …
            </p>
            <p className="text-xs text-gray-600">
              Each dispenses as many of its own notes as it can, then forwards
              the remainder to the next handler in the chain.
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Client
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                COR.main()
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Assembles the chain with{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                setNextHandler()
              </code>{" "}
              and fires the request at the first handler — the chain does the
              rest.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="chainofresponsibility" />
      </section>

      <hr className="my-6" />

      {/* 9. Code */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Code</h2>

        {/* Abstract handler */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          Abstract handler
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`abstract class MoneyHandler {
    protected MoneyHandler nextHandler;  // the next link in the chain

    public void setNextHandler(MoneyHandler next) {
        this.nextHandler = next;
    }

    // Each concrete handler implements its own dispensing logic
    public abstract void dispense(int amount);
}`}</code>
        </pre>

        {/* Concrete handlers */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          Concrete handlers
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class ThousandHandler extends MoneyHandler {
    private int numNotes;

    public ThousandHandler(int numNotes) { this.numNotes = numNotes; }

    @Override
    public void dispense(int amount) {
        int notesNeeded = amount / 1000;

        // Dispense only what we have — cap at available stock
        if (notesNeeded > numNotes) {
            notesNeeded = numNotes;
            numNotes = 0;
        } else {
            numNotes -= notesNeeded;
        }

        if (notesNeeded > 0)
            System.out.println("Dispensing " + notesNeeded + " x $1000 notes.");

        // Forward whatever's left — we don't care who handles it
        int remaining = amount - (notesNeeded * 1000);
        if (remaining > 0) {
            if (nextHandler != null) nextHandler.dispense(remaining);
            else System.out.println("Remaining $" + remaining + " cannot be fulfilled.");
        }
    }
}

// FiveHundredHandler, TwoHundredHandler, HundredHandler follow
// the exact same structure — only the denomination changes.`}</code>
        </pre>

        <Callout type="tip">
          The pattern shines here: every handler is identical in shape. To add a{" "}
          <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-800">
            FiftyHandler
          </code>
          , you write one new class and insert it into the chain at the right
          position — zero changes to any existing handler.
        </Callout>

        {/* Chain assembly + output */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2 mt-4">
          Chain assembly &amp; usage
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`MoneyHandler thousandHandler    = new ThousandHandler(3);     // 3 x $1000
MoneyHandler fiveHundredHandler = new FiveHundredHandler(5);   // 5 x $500
MoneyHandler twoHundredHandler  = new TwoHundredHandler(10);   // 10 x $200
MoneyHandler hundredHandler     = new HundredHandler(20);      // 20 x $100

// Wire the chain: $1000 → $500 → $200 → $100
thousandHandler.setNextHandler(fiveHundredHandler);
fiveHundredHandler.setNextHandler(twoHundredHandler);
twoHundredHandler.setNextHandler(hundredHandler);

// Fire the request at the head — the chain handles the rest
thousandHandler.dispense(4000);
// Dispensing 3 x $1000 notes.   ← ThousandHandler: 3 notes, $1000 remaining
// Dispensing 2 x $500 notes.    ← FiveHundredHandler: 2 notes cover the rest
`}</code>
        </pre>

        <Callout type="info">
          Dispensing $4000 with only 3 × $1000 available leaves $1000 unhandled
          at that link. The{" "}
          <code className="text-sm bg-blue-100 px-1.5 py-0.5 rounded text-blue-800">
            FiveHundredHandler
          </code>{" "}
          picks up exactly $1000 with 2 notes — the chain resolves the full
          amount across two handlers with no coordination code in sight.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 11. Deep dive — chain variants */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Terminating vs passing chains
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          There are two behavioural variants worth knowing. In a{" "}
          <strong>passing chain</strong> (this ATM), every handler processes its
          portion and always forwards the remainder — the request travels the
          full chain. In a <strong>terminating chain</strong>, the first handler
          that can fully satisfy the request handles it and stops — nothing is
          forwarded.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Passing chain (this example)
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Each handler takes a slice and passes the rest. Used when the
              request can be partially fulfilled at each step — ATMs, logging
              pipelines, middleware.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Terminating chain
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              The first capable handler swallows the whole request. Used for
              authorization checks, exception handling, UI event propagation —
              one handler, full ownership.
            </p>
          </div>
        </div>
        <Callout type="warning">
          If no handler in a terminating chain can process the request and
          there's no fallback at the tail, the request silently drops. Always
          guard the end of the chain with a default handler or a loud failure.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 13. When to use / avoid */}
      <DoAndDont
        use={[
          "More than one object may handle a request and the handler isn't known at compile time",
          "You want to issue a request to one of several handlers without hardcoding which one",
          "The set of handlers should be configurable or reorderable at runtime",
          "You're building a middleware/pipeline where each stage processes and optionally passes on",
        ]}
        avoid={[
          "Exactly one handler always owns the request — just call it directly",
          "Chain links are so interdependent that reordering breaks correctness — consider a fixed pipeline instead",
          "Performance is critical — long chains add latency proportional to their length",
          "The chain grows unbounded with no fallback — unhandled requests will silently disappear",
        ]}
      />

      <hr className="my-6" />

      {/* 15. Real-world examples */}
      <RealWorldExamples
        examples={[
          {
            name: "Java Servlet filters",
            detail:
              "Each filter in the chain calls filterChain.doFilter() to pass the HTTP request to the next filter — a textbook passing chain.",
          },
          {
            name: "Express.js middleware",
            detail:
              "app.use() handlers call next() to pass control down the middleware stack. Any handler can short-circuit by not calling next().",
          },
          {
            name: "Windows UI event bubbling",
            detail:
              "A click event fires on the target element first; if unhandled, it bubbles up through parent elements — a terminating chain looking for the first interested listener.",
          },
          {
            name: "Log4j / SLF4J logger hierarchy",
            detail:
              "A log message propagates from child logger to parent loggers until a logger with an appender handles it — chain assembly driven by logger name hierarchy.",
          },
        ]}
      />

      <hr className="my-6" />

      {/* 17. Key takeaway */}
      <KeyTakeaway>
        Chain of Responsibility decouples the sender of a request from its
        receivers by giving multiple objects a chance to handle it — each
        handler knows only its own logic and where to forward what it can't
        resolve. The pattern comes in two flavours: passing chains (every
        handler takes a slice, like this ATM) and terminating chains (first
        capable handler wins, like middleware auth). Either way, the chain is
        assembled by the client, making it trivially reconfigurable without
        touching a single handler class.
      </KeyTakeaway>

      {/* 18. PatternNav */}
      <PatternNav
        prev={{
          title: "Proxy Pattern",
          pattern: "Structural",
          href: "/lld/patterns/proxy",
        }}
        next={{
          title: "Bridge Pattern",
          pattern: "Structural",
          href: "/lld/patterns/bridge",
        }}
      />
    </main>
  );
}
