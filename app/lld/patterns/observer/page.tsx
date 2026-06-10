import { GitBranch, ArrowUpRight } from "lucide-react";
import { PatternMeta } from "@/components/pattern/Patternmeta";
import { Tagline } from "@/components/pattern/Tagline";
import { Callout } from "@/components/pattern/Callout";
import { StructureDiagram } from "@/components/pattern/Struturediagram";
import { DoAndDont } from "@/components/pattern/Doanddont";
import { RealWorldExamples } from "@/components/pattern/Realworldexamples";
import { KeyTakeaway } from "@/components/pattern/Keytakeaway";
import { PatternNav } from "@/components/patternnav/PatternNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Observer Pattern",
};

const data = {
  title: "Observer Pattern",
  pattern: "Behavioral" as const,
  difficulty: "Beginner" as const,
};

export default function ObserverPatternPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <PatternMeta pattern={data.pattern} difficulty={data.difficulty} />

      {/* Title + GitHub */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          Observer Pattern
        </h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Observer_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      <Tagline>
        "When one changes, all who care are notified — automatically."
      </Tagline>

      <hr className="my-8 border-gray-100" />

      {/* The Problem */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The problem</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        You have a YouTube channel. When you upload a video, all your
        subscribers should be notified. The naive approach is{" "}
        <strong>polling</strong> — every subscriber keeps asking the channel
        "did you upload something new?" every few seconds. That's wasteful,
        slow, and doesn't scale.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">
            ❌ Polling
          </p>
          <p className="text-sm text-red-800 leading-relaxed">
            Observer keeps asking — "Any update? Any update? Any update?" Worst
            method. Time-consuming, burns resources, always delayed.
          </p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">
            ✅ Pushing (Observer Pattern)
          </p>
          <p className="text-sm text-green-800 leading-relaxed">
            Observable pushes to all observers the moment a value changes.
            Instant, efficient, decoupled.
          </p>
        </div>
      </div>

      <hr className="my-8 border-gray-100" />

      {/* The Solution */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The solution</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Observer defines a <strong>one-to-many</strong> relationship. One{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          Observable
        </code>{" "}
        (the subject) maintains a list of{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          Observers
        </code>
        . When the observable's state changes, it automatically notifies all
        registered observers. Observers can subscribe and unsubscribe at any
        time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          {
            name: "Observable (IChannel)",
            role: "The subject being watched",
            methods: [
              "addSubscriber()",
              "removeSubscriber()",
              "notifySubscribers()",
            ],
          },
          {
            name: "Observer (ISubscriber)",
            role: "The one who reacts to changes",
            methods: ["update() — called by observable on change"],
          },
        ].map((s) => (
          <div
            key={s.name}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          >
            <p className="text-sm font-semibold text-gray-800 mb-1">{s.name}</p>
            <p className="text-xs text-gray-500 mb-2 italic">{s.role}</p>
            <ul className="space-y-1">
              {s.methods.map((m) => (
                <li key={m} className="text-xs font-mono text-gray-600">
                  → {m}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <StructureDiagram pattern="observer" />

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Observer interface — anyone who wants to be notified implements this
interface ISubscriber {
    void update();
}

// Observable interface — the subject that others watch
interface IChannel {
    void addSubscriber(ISubscriber subscriber);
    void removeSubscriber(ISubscriber subscriber);
    void notifySubscribers();
}`}</code>
      </pre>

      <hr className="my-8 border-gray-100" />

      {/* Example */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Example</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Concrete Observable — the YouTube channel
class Channel implements IChannel {
    private List<ISubscriber> subscribers = new ArrayList<>();
    private String name;
    private String lastVideo;

    public Channel(String name) { this.name = name; }

    public void addSubscriber(ISubscriber subscriber) {
        if (!subscribers.contains(subscriber)) subscribers.add(subscriber);
    }

    public void removeSubscriber(ISubscriber subscriber) {
        subscribers.remove(subscriber);
    }

    public void notifySubscribers() {
        for (ISubscriber subscriber : subscribers) {
            subscriber.update();   // push notification to all
        }
    }

    public void uploadVideo(String lastVideo) {
        this.lastVideo = lastVideo;
        notifySubscribers();       // trigger on state change
    }

    public String getVideoData() {
        return "Checkout latest video: " + lastVideo;
    }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Concrete Observer — the subscriber
class Subscriber implements ISubscriber {
    private String name;
    private Channel channel;

    public Subscriber(String name, Channel channel) {
        this.name = name;
        this.channel = channel;
    }

    public void update() {
        System.out.println("Hey " + name + ", " + channel.getVideoData());
    }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Usage
Channel ch1 = new Channel("Manikanda's Channel");

Subscriber s1 = new Subscriber("Elan", ch1);
Subscriber s2 = new Subscriber("Nivi", ch1);

ch1.addSubscriber(s1);
ch1.addSubscriber(s2);

ch1.uploadVideo("Wheels on the bus go round and round!!");
// → Hey Elan, Checkout latest video: Wheels on the bus go round and round!!
// → Hey Nivi, Checkout latest video: Wheels on the bus go round and round!!

ch1.removeSubscriber(s2);  // Nivi unsubscribes

ch1.uploadVideo("Old M'cdonals E-I-E-I-O");
// → Hey Elan, Checkout latest video: Old M'cdonals E-I-E-I-O
// Nivi gets nothing — she unsubscribed`}</code>
      </pre>

      <Callout type="tip">
        Notice{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          Channel
        </code>{" "}
        doesn't know anything about{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          Subscriber
        </code>{" "}
        — it only talks to the{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          ISubscriber
        </code>{" "}
        interface. You could add a{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          EmailSubscriber
        </code>{" "}
        or{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          PushNotificationSubscriber
        </code>{" "}
        without changing a single line in{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          Channel
        </code>
        .
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* When to use / avoid */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        When to use / avoid
      </h2>
      <DoAndDont
        use={[
          "One object's change should trigger updates in many others — event systems, notifications, feeds",
          "You want loose coupling — the subject shouldn't need to know who's listening",
          "Observers can subscribe and unsubscribe dynamically at runtime",
        ]}
        avoid={[
          "The update chain is complex and unpredictable — observers triggering other observers can cause cascades",
          "Order of notification matters — Observer doesn't guarantee order of updates",
          "Very few, fixed dependents — a direct method call is simpler",
        ]}
      />

      <hr className="my-8 border-gray-100" />

      {/* Real world */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Real-world examples
      </h2>
      <RealWorldExamples
        examples={[
          {
            name: "Java EventListener",
            detail:
              "ActionListener on buttons — button is observable, listener is observer",
          },
          {
            name: "RxJava / Reactor",
            detail:
              "Entire reactive programming model is built on Observable + Observer",
          },
          {
            name: "Redux",
            detail:
              "Store notifies all subscribed components when state changes",
          },
          {
            name: "Spring Events",
            detail:
              "ApplicationEventPublisher pushes events, @EventListener handles them",
          },
          {
            name: "MQ Systems",
            detail:
              "Kafka/RabbitMQ — producers publish, consumers (observers) react",
          },
        ]}
      />

      <hr className="my-8 border-gray-100" />

      {/* Key takeaway */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Key takeaway</h2>
      <KeyTakeaway>
        Observer defines a one-to-many dependency so that when one object
        changes state, all its dependents are notified and updated
        automatically. The key insight is the direction of dependency —
        observers register themselves with the subject, so the subject never
        needs to know who's watching. Polling is always the wrong answer;
        pushing via Observer is how event-driven systems stay fast and
        decoupled.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Singleton Pattern",
          pattern: "Creational",
          href: "/lld/patterns/singleton",
        }}
        next={{
          title: "Decorator Pattern",
          pattern: "Structural",
          href: "/lld/patterns/decorator",
        }}
      />
    </article>
  );
}
