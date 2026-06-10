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
import { GitBranch } from "lucide-react";

export default function MediatorPatternPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      {/* 1. PatternMeta */}
      <PatternMeta pattern="Behavioral" difficulty="Intermediate" />

      {/* 2. Title + GitHub button */}
      <div className="flex items-start justify-between mt-4 mb-2">
        <h1 className="text-3xl font-bold tracking-tight">Mediator Pattern</h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Mediator_Pattern"
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
        Stop objects from talking directly — route all communication through a
        single hub that knows everyone but is known by no one.
      </Tagline>

      <hr className="my-6" />

      {/* 5. The Problem */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The Problem</h2>
        <p className="mb-4 leading-relaxed">
          Imagine a group chat with three users: Rohan, Neha, and Mohan. Without
          any coordinator, every user needs a direct reference to every other
          user. That's fine for three people — but wire up ten and you have 45
          peer connections. Add a "mute" feature and every single{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            User
          </code>{" "}
          class has to carry mute logic. The objects are{" "}
          <strong>tightly coupled</strong> — each knows too much about the
          others.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// Without Mediator — each User holds references to ALL peers
class User {
    private List<User> peers;       // N-1 direct links per user
    private List<String> mutedUsers; // mute logic lives inside User

    public void addPeer(User u) { peers.add(u); }

    public void send(String msg) {
        for (User peer : peers) {
            if (!peer.isMuted(name)) peer.receive(name, msg);
        }
    }

    public void sendTo(User target, String msg) {
        if (!target.isMuted(name)) target.receive(name, msg);
    }
}

// Setup — O(N²) wiring every time you add a new user
user1.addPeer(user2); user2.addPeer(user1);
user1.addPeer(user3); user3.addPeer(user1);
user2.addPeer(user3); user3.addPeer(user2);`}</code>
        </pre>

        <Callout type="warning">
          With N participants, you need N×(N–1)/2 connections. Add a 4th user to
          the example above and you wire 6 pairs instead of 3. Every new chat
          feature — read receipts, typing indicators, admin roles — bleeds into
          the{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            User
          </code>{" "}
          class further.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 7. The Solution */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The Solution</h2>
        <p className="mb-4 leading-relaxed">
          The Mediator pattern inserts a <strong>central coordinator</strong>{" "}
          between all participants. Each object (called a <em>Colleague</em>)
          only knows the mediator — not each other. All messages, mutes, and
          routing logic live inside the mediator, not scattered across every
          participant. N objects now each have exactly <strong>one</strong>{" "}
          connection: to the hub.
        </p>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg px-4 py-3">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              «interface» IMediator
            </p>
            <p className="text-sm text-gray-700">
              Declares{" "}
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                registerColleague
              </code>
              ,{" "}
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                send
              </code>
              , and{" "}
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                sendPrivate
              </code>
              . Colleagues depend only on this abstraction.
            </p>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg px-4 py-3">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              ChatMediator
            </p>
            <p className="text-sm text-gray-700">
              Implements{" "}
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                IMediator
              </code>
              . Owns the colleague list, the mute list, and all broadcast / DM
              routing logic.
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              «abstract» Colleague
            </p>
            <p className="text-sm text-gray-700">
              Holds a reference to{" "}
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                IMediator
              </code>{" "}
              and registers itself on construction. Subclasses implement{" "}
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                send
              </code>
              ,{" "}
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                sendPrivate
              </code>
              , and{" "}
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                receive
              </code>
              .
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              User1 (ConcreteColleague)
            </p>
            <p className="text-sm text-gray-700">
              Delegates every outbound call straight to the mediator. Never
              touches another{" "}
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                User1
              </code>{" "}
              directly.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="mediator" />
      </section>

      <hr className="my-6" />

      {/* 9. Code */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Code</h2>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// ── Mediator contract ──────────────────────────────────────────
interface IMediator {
    void registerColleague(Colleague c);
    void send(String from, String msg);           // broadcast
    void sendPrivate(String from, String to, String msg); // DM
}

// ── Colleague base class ────────────────────────────────────────
abstract class Colleague {
    protected IMediator mediator;

    public Colleague(IMediator m) {
        mediator = m;
        mediator.registerColleague(this); // self-registers on construction
    }

    public abstract String getName();
    public abstract void send(String msg);
    public abstract void sendPrivate(String to, String msg);
    public abstract void receive(String from, String msg);
}`}</code>
        </pre>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// ── Concrete Mediator ──────────────────────────────────────────
class ChatMediator implements IMediator {
    private List<Colleague> colleagues = new ArrayList<>();
    private List<Pair<String, String>> mutes = new ArrayList<>(); // (muter, muted)

    public void registerColleague(Colleague c) { colleagues.add(c); }

    public void mute(String who, String whom) {
        mutes.add(new Pair<>(who, whom)); // "who" will not see messages from "whom"
    }

    public void send(String from, String msg) {
        System.out.println("[" + from + " broadcasts]: " + msg);
        for (Colleague c : colleagues) {
            if (c.getName().equals(from)) continue; // skip self
            boolean isMuted = mutes.stream()
                .anyMatch(p -> from.equals(p.second) && c.getName().equals(p.first));
            if (!isMuted) c.receive(from, msg);
        }
    }

    public void sendPrivate(String from, String to, String msg) {
        System.out.println("[" + from + "→" + to + "]: " + msg);
        for (Colleague c : colleagues) {
            if (!c.getName().equals(to)) continue;
            boolean isMuted = mutes.stream()
                .anyMatch(p -> from.equals(p.second) && to.equals(p.first));
            if (isMuted) { System.out.println("\n[Message is muted]\n"); return; }
            c.receive(from, msg);
            return;
        }
        System.out.println("[Mediator] User \"" + to + "\" not found]");
    }
}`}</code>
        </pre>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// ── Concrete Colleague ─────────────────────────────────────────
class User1 extends Colleague {
    private String name;

    public User1(String n, IMediator m) { super(m); name = n; }

    @Override public String getName() { return name; }

    @Override public void send(String msg) { mediator.send(name, msg); }

    @Override
    public void sendPrivate(String to, String msg) {
        mediator.sendPrivate(name, to, msg);
    }

    @Override
    public void receive(String from, String msg) {
        System.out.println("    " + name + " got from " + from + ": " + msg);
    }
}`}</code>
        </pre>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// ── Usage ──────────────────────────────────────────────────────
ChatMediator chatRoom = new ChatMediator();

User1 rohan = new User1("Rohan", chatRoom);  // auto-registers
User1 neha  = new User1("Neha",  chatRoom);
User1 mohan = new User1("Mohan", chatRoom);

chatRoom.mute("Mohan", "Rohan"); // Mohan won't see Rohan's messages

rohan.send("Hello Everyone!");
// [Rohan broadcasts]: Hello Everyone!
//     Neha got from Rohan: Hello Everyone!
//   ← Mohan is muted, so he gets nothing

mohan.sendPrivate("Neha", "Hey Neha!");
// [Mohan→Neha]: Hey Neha!
//     Neha got from Mohan: Hey Neha!`}</code>
        </pre>

        <Callout type="tip">
          Notice that{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            User1
          </code>{" "}
          never imports or references another{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            User1
          </code>
          . All knowledge of "who else exists" lives exclusively in{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            ChatMediator
          </code>
          .
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 11. Deep Dive — N² → N */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Connection complexity: N² → N
        </h2>
        <p className="mb-4 leading-relaxed">
          This is the single most important property of the pattern and worth
          making concrete. In a fully connected mesh, adding one new participant
          requires wiring them to every existing participant — that's O(N) new
          edges per addition, and O(N²) total edges in the graph. With a
          mediator, every participant has exactly <strong>one</strong>{" "}
          connection regardless of group size. Adding a fourth user to the chat
          is a single{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            new User1("Priya", chatRoom)
          </code>{" "}
          call — no peer-wiring needed.
        </p>
        <Callout type="info">
          This is why air-traffic control, chat servers, and UI event systems
          all converge on the mediator shape: the hub is the only place that
          scales gracefully as the number of participants grows.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 13. When to use / avoid */}
      <DoAndDont
        use={[
          "Many objects communicate in complex, hard-to-track ways and coupling is growing",
          "You want to add cross-cutting logic (mute, logging, rate-limiting) without touching every participant",
          "Reusing a component in a different context requires decoupling it from its current peers",
          "You're building an event bus, chat system, air-traffic controller, or UI form coordinator",
        ]}
        avoid={[
          "You only have two or three objects that interact simply — the mediator is overkill",
          "The 'mediator' ends up knowing everything and doing everything — this is a God Object, not a mediator",
          "Performance is critical and the extra indirection on every message is measurable overhead",
          "Colleagues need synchronous return values from each other — the mediator pattern fits fire-and-forget communication better",
        ]}
      />

      <hr className="my-6" />

      {/* 15. Real-world examples */}
      <RealWorldExamples
        examples={[
          {
            name: "Chat servers (Slack / Discord)",
            detail:
              "The server is the mediator. Clients never hold sockets to each other — every message goes through the server which handles routing, history, and permissions.",
          },
          {
            name: "Air Traffic Control",
            detail:
              "Aircraft don't communicate directly with each other. All coordination flows through the ATC tower (the mediator), which has global visibility and avoids N² radio chatter.",
          },
          {
            name: "UI Form Coordinators",
            detail:
              "A wizard or multi-field form uses a mediator component to decide which fields are enabled, disabled, or visible based on other fields — without each field directly watching every other.",
          },
          {
            name: "Event Bus / Message Broker",
            detail:
              "Kafka, RabbitMQ, and Redux's store are all mediators: producers and consumers are decoupled, and the broker handles topic routing, ordering, and delivery guarantees.",
          },
        ]}
      />

      <hr className="my-6" />

      {/* 17. Key Takeaway */}
      <KeyTakeaway>
        The Mediator pattern replaces an O(N²) web of direct references with a
        single hub that every participant knows and trusts. Colleagues become
        thin — they only know how to talk to the mediator, not to each other.
        All coordination logic (broadcast, DM, mute, logging) lives in one place
        and can evolve independently. The risk is the mediator becoming a God
        Object: keep it focused on <em>routing</em>, not on business logic that
        belongs in the colleagues themselves.
      </KeyTakeaway>

      {/* 18. PatternNav */}
      <PatternNav
        prev={{
          title: "State Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/state",
        }}
        next={{
          title: "Prototype Pattern",
          pattern: "Creational",
          href: "/lld/patterns/prototype",
        }}
      />
    </main>
  );
}
