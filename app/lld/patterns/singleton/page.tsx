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
  title: "Singleton Pattern",
};

const data = {
  title: "Singleton Pattern",
  pattern: "Creational" as const,
  difficulty: "Beginner" as const,
};

export default function SingletonPatternPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <PatternMeta pattern={data.pattern} difficulty={data.difficulty} />

      {/* Title + GitHub */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          Singleton Pattern
        </h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/SingleTon_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      <Tagline>
        "One class, one instance — no matter how many times you ask."
      </Tagline>

      <hr className="my-8 border-gray-100" />

      {/* The Problem */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The problem</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Some things in a system should exist exactly once — a database
        connection pool, a config manager, a logger. If every part of your code
        does{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          new DatabaseConnection()
        </code>
        , you end up with multiple instances, wasted resources, and inconsistent
        state.
      </p>

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`public class NoSingleTon {
    public NoSingleTon() {
        System.out.println("New Instance is Created.");
    }

    public static void main(String[] args) {
        NoSingleTon s1 = new NoSingleTon(); // New Instance is Created.
        NoSingleTon s2 = new NoSingleTon(); // New Instance is Created.

        System.out.println(s1 == s2); // false — two different objects!
    }
}`}</code>
      </pre>

      <Callout type="warning">
        Every{" "}
        <code className="text-sm bg-amber-100 px-1.5 py-0.5 rounded">new</code>{" "}
        call creates a brand new object.{" "}
        <code className="text-sm bg-amber-100 px-1.5 py-0.5 rounded">
          s1 == s2
        </code>{" "}
        is <strong>false</strong> — they're different instances in memory.
        Singleton fixes this.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* The Solution */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The solution</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Singleton ensures only one instance ever exists by doing three things:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          {
            step: "1",
            title: "Private constructor",
            desc: "Prevents anyone outside the class from calling new directly.",
          },
          {
            step: "2",
            title: "Private static instance",
            desc: "Holds the one and only instance inside the class itself.",
          },
          {
            step: "3",
            title: "Public static method",
            desc: "The only way to get the instance — creates it if it doesn't exist yet.",
          },
        ].map((s) => (
          <div
            key={s.step}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          >
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 rounded px-1.5 py-0.5 mb-2 inline-block">
              Step {s.step}
            </span>
            <p className="text-sm font-semibold text-gray-800 mb-1">
              {s.title}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <StructureDiagram pattern="singleton" />

      <hr className="my-8 border-gray-100" />

      {/* Overview of variants */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Overview — 4 variants
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Singleton isn't one-size-fits-all. Depending on your performance and
        thread-safety needs, there are four ways to implement it — each making a
        different tradeoff.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          {
            name: "Simple Singleton",
            thread: "❌ Not thread-safe",
            perf: "✅ Lazy — creates only when needed",
          },
          {
            name: "Thread Safe (Locking)",
            thread: "✅ Thread-safe",
            perf: "⚠️ Slow — locks every time",
          },
          {
            name: "Thread Safe (Eager)",
            thread: "✅ Thread-safe",
            perf: "⚠️ Eager — creates at startup",
          },
          {
            name: "Double Check Locking",
            thread: "✅ Thread-safe",
            perf: "✅ Fast — locks only once",
          },
        ].map((v) => (
          <div
            key={v.name}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          >
            <p className="text-sm font-semibold text-gray-800 mb-2">{v.name}</p>
            <p className="text-xs text-gray-600">{v.thread}</p>
            <p className="text-xs text-gray-600">{v.perf}</p>
          </div>
        ))}
      </div>

      <hr className="my-8 border-gray-100" />

      {/* Variant 1 — Simple */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        1. Simple Singleton
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The most basic implementation. The instance is created lazily — only
        when{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          createInstance()
        </code>{" "}
        is called for the first time. Works perfectly in single-threaded
        environments.
      </p>

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`public class SimpleSingleTon {
    // Step 2: private static instance
    private static SimpleSingleTon simpleSingleTon = null;

    // Step 1: private constructor
    private SimpleSingleTon() {
        System.out.println("SingleTon Constructor Called...");
    }

    // Step 3: public static method — lazy creation
    public static SimpleSingleTon createInstance() {
        if (simpleSingleTon == null) {
            simpleSingleTon = new SimpleSingleTon(); // created only once
        }
        return simpleSingleTon;
    }

    public static void main(String[] args) {
        SimpleSingleTon s1 = SimpleSingleTon.createInstance();
        SimpleSingleTon s2 = SimpleSingleTon.createInstance();

        System.out.println(s1 == s2); // true — same instance!
    }
}`}</code>
      </pre>

      <Callout type="warning">
        Not thread-safe. If two threads call{" "}
        <code className="text-sm bg-amber-100 px-1.5 py-0.5 rounded">
          createInstance()
        </code>{" "}
        simultaneously and both see{" "}
        <code className="text-sm bg-amber-100 px-1.5 py-0.5 rounded">null</code>
        , they'll both create a new instance — breaking the Singleton guarantee.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Variant 2 — Thread Safe Locking */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        2. Thread Safe — Synchronized Locking
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Wraps the entire method in a{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          synchronized
        </code>{" "}
        block — only one thread can enter at a time. Solves the thread-safety
        problem but at a cost: every single call to{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          getInstance()
        </code>{" "}
        acquires a lock, even after the instance already exists. This makes it
        slow under high concurrency.
      </p>

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`public class ThreadSafeLocking {
    private static ThreadSafeLocking instance = null;

    private ThreadSafeLocking() {
        System.out.println("SingleTon Constructor Called!");
    }

    public static ThreadSafeLocking getInstance() {
        synchronized (ThreadSafeLocking.class) { // lock every time — expensive!
            if (instance == null) {
                instance = new ThreadSafeLocking();
            }
        }
        return instance;
    }

    public static void main(String[] args) {
        ThreadSafeLocking t1 = ThreadSafeLocking.getInstance();
        ThreadSafeLocking t2 = ThreadSafeLocking.getInstance();

        System.out.println(t1 == t2); // true
    }
}`}</code>
      </pre>

      <Callout type="warning">
        Thread-safe but slow. The{" "}
        <code className="text-sm bg-amber-100 px-1.5 py-0.5 rounded">
          synchronized
        </code>{" "}
        block is a bottleneck — 99% of calls don't need a lock (instance already
        exists), but they pay the lock cost anyway. Use Double Check Locking
        instead.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Variant 3 — Eager */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        3. Thread Safe — Eager Initialization
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The instance is created when the class loads — before anyone calls{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          getInstance()
        </code>
        . The JVM guarantees class loading is thread-safe, so no synchronization
        is needed at all. Simple and clean — but wastes memory if the instance
        is never actually used.
      </p>

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`public class ThreadSafeEager {
    // Created immediately at class load — no lazy, no lock needed
    private static final ThreadSafeEager instance = new ThreadSafeEager();

    private ThreadSafeEager() {
        System.out.println("Constructor called...");
    }

    public static ThreadSafeEager getInstance() {
        return instance; // just return — no check, no lock
    }

    public static void main(String[] args) {
        ThreadSafeEager e1 = ThreadSafeEager.getInstance();
        ThreadSafeEager e2 = ThreadSafeEager.getInstance();

        System.out.println(e1 == e2); // true
    }
}`}</code>
      </pre>

      <Callout type="info">
        Best when you're <strong>certain</strong> the instance will always be
        needed. The{" "}
        <code className="text-sm bg-blue-100 px-1.5 py-0.5 rounded">final</code>{" "}
        keyword guarantees the reference never changes after assignment.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Variant 4 — Double Check */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        4. Thread Safe — Double Check Locking
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The best of both worlds — lazy creation <em>and</em> thread-safe{" "}
        <em>and</em> fast. It checks if the instance is null{" "}
        <strong>twice</strong>: once without a lock (fast path), and once inside
        the lock (safe path). The lock is only acquired when the instance
        doesn't exist yet — which happens exactly once.
      </p>

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`public class ThreadSafeDoubleLocking {
    private static ThreadSafeDoubleLocking instance = null;

    private ThreadSafeDoubleLocking() {
        System.out.println("Singleton Constructor Called!");
    }

    public static ThreadSafeDoubleLocking getInstance() {
        if (instance == null) {                              // 1st check — no lock, fast
            synchronized (ThreadSafeDoubleLocking.class) {  // lock only if needed
                if (instance == null) {                      // 2nd check — inside lock, safe
                    instance = new ThreadSafeDoubleLocking();
                }
            }
        }
        return instance;
    }

    public static void main(String[] args) {
        ThreadSafeDoubleLocking s1 = ThreadSafeDoubleLocking.getInstance();
        ThreadSafeDoubleLocking s2 = ThreadSafeDoubleLocking.getInstance();

        System.out.println(s1 == s2); // true
    }
}`}</code>
      </pre>

      <Callout type="tip">
        Why two checks? The first check avoids locking once the instance exists
        — making every call after the first one fast. The second check handles
        the race condition where two threads both pass the first check
        simultaneously — only one creates the instance.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Comparison */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        All 4 compared
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Variant
              </th>
              <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Thread Safe
              </th>
              <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Lazy
              </th>
              <th className="text-left py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Performance
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              {
                name: "Simple Singleton",
                thread: "❌",
                lazy: "✅",
                perf: "✅ Fast",
              },
              {
                name: "Synchronized Locking",
                thread: "✅",
                lazy: "✅",
                perf: "⚠️ Slow",
              },
              {
                name: "Eager Initialization",
                thread: "✅",
                lazy: "❌",
                perf: "✅ Fast",
              },
              {
                name: "Double Check Locking",
                thread: "✅",
                lazy: "✅",
                perf: "✅ Fast",
              },
            ].map((r) => (
              <tr key={r.name}>
                <td className="py-2 pr-4 text-gray-800 font-medium">
                  {r.name}
                </td>
                <td className="py-2 pr-4 text-gray-600">{r.thread}</td>
                <td className="py-2 pr-4 text-gray-600">{r.lazy}</td>
                <td className="py-2 text-gray-600">{r.perf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="my-8 border-gray-100" />

      {/* When to use / avoid */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        When to use / avoid
      </h2>
      <DoAndDont
        use={[
          "Exactly one instance must exist — database connection, config manager, logger, thread pool",
          "Global access point is needed but uncontrolled global variables are too risky",
          "The instance is expensive to create and should be reused across the app",
        ]}
        avoid={[
          "You're using it just for convenience as a global variable — that's an anti-pattern",
          "It makes unit testing hard — Singletons carry state between tests and are difficult to mock",
          "In highly concurrent systems without careful thread-safe implementation",
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
            name: "Java Runtime",
            detail:
              "Runtime.getRuntime() — one JVM runtime instance per application",
          },
          {
            name: "Spring Beans",
            detail: "Beans are Singleton-scoped by default in Spring container",
          },
          {
            name: "Logger",
            detail:
              "Logger.getLogger() in Log4j — same logger instance throughout the app",
          },
          {
            name: "DB Connection Pool",
            detail: "HikariCP pool is created once and reused for all queries",
          },
          {
            name: "Config Manager",
            detail: "App config loaded once at startup, accessed everywhere",
          },
        ]}
      />

      <hr className="my-8 border-gray-100" />

      {/* Key takeaway */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Key takeaway</h2>
      <KeyTakeaway>
        Singleton guarantees one instance, but the <em>how</em> matters. Use{" "}
        <strong>Simple Singleton</strong> for single-threaded apps,{" "}
        <strong>Eager</strong> when the instance is always needed, and{" "}
        <strong>Double Check Locking</strong> for multi-threaded production
        code. Avoid Synchronized Locking — it's thread-safe but unnecessarily
        slow. And never use Singleton as a disguised global variable.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Factory Pattern",
          pattern: "Creational",
          href: "/lld/patterns/factory",
        }}
        next={{
          title: "Observer Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/observer",
        }}
      />
    </article>
  );
}
