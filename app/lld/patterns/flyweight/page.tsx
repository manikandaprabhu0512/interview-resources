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

export default function FlyweightPatternPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      {/* 1. PatternMeta */}
      <PatternMeta pattern="Structural" difficulty="Intermediate" />

      {/* 2. Title + GitHub button */}
      <div className="flex items-start justify-between mt-4 mb-3">
        <h1 className="text-3xl font-bold tracking-tight">Flyweight Pattern</h1>
        <a
          href="https://github.com/your-username/your-repo/blob/main/src/Patterns/FlyWeight_Pattern/"
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
        Share what's common across a million objects — store only what's unique
        per instance.
      </Tagline>

      <hr className="my-6" />

      {/* 5. The Problem */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The problem</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          You're building a space game that spawns one million asteroids. Each{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            Asteroid
          </code>{" "}
          object carries six fields describing what kind of asteroid it is —
          length, width, weight, color, texture, material — plus four fields for
          where it is and how fast it moves. But there are only three asteroid
          types. The intrinsic fields are identical across 333,333 objects each,
          yet every object allocates its own copy.
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class Asteroid {
    // INTRINSIC — same values repeated across 333,333 objects of the same type
    private int length, width, weight;
    private String color, texture, material;

    // EXTRINSIC — truly unique per asteroid
    private int posX, posY, velocityX, velocityY;
}

// 1,000,000 objects × 148 bytes each ≈ 141 MB
// Yet only 3 distinct "types" of data actually exist`}</code>
        </pre>

        {/* Memory comparison callout */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="border border-red-200 bg-red-50 rounded-lg p-4 text-center">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">
              Without Flyweight
            </p>
            <p className="text-2xl font-bold text-red-700">~141 MB</p>
            <p className="text-xs text-red-500 mt-1">1M objects × 148 bytes</p>
          </div>
          <div className="border border-green-200 bg-green-50 rounded-lg p-4 text-center">
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
              With Flyweight
            </p>
            <p className="text-2xl font-bold text-green-700">~24 MB</p>
            <p className="text-xs text-green-500 mt-1">
              1M contexts × 24 bytes + 3 flyweights
            </p>
          </div>
        </div>

        <Callout type="warning">
          When thousands of objects share the same intrinsic data and you store
          that data per-instance, you're paying the memory cost of a unique
          object for what is effectively a shared value. The more instances, the
          worse it scales.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 7. The Solution */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The solution</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Flyweight splits each object's state into two categories.{" "}
          <strong>Intrinsic state</strong> — the shared, immutable data that's
          identical across many instances — lives in a single flyweight object.{" "}
          <strong>Extrinsic state</strong> — the unique, per-instance data —
          lives in a lightweight context object that merely holds a reference to
          the shared flyweight.
        </p>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              Flyweight
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                AsteroidFlyweight
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Stores intrinsic state: length, width, weight, color, texture,
              material. Immutable — shared safely across any number of contexts.
              Exposes{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                render(posX, posY, velX, velY)
              </code>{" "}
              which accepts extrinsic state as parameters.
            </p>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              Factory
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                AsteroidFactory
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Maintains a{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                HashMap
              </code>{" "}
              keyed by intrinsic properties. Returns an existing flyweight on
              cache hit; creates and stores a new one on miss. The sharing
              mechanism lives entirely here.
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Context
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                AsteroidContext
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Stores only extrinsic state: posX, posY, velocityX, velocityY —
              plus a reference to its flyweight. One context per asteroid in the
              world; one flyweight per asteroid <em>type</em>.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="flyweight" />
      </section>

      <hr className="my-6" />

      {/* 9. Code */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Code</h2>

        {/* Without */}
        <h3 className="text-base font-semibold text-gray-700 mb-2">
          Without Flyweight — the naive approach
        </h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-6">
          <code>{`class Asteroid {
    // Intrinsic — DUPLICATED in every object of the same type
    private int length, width, weight;
    private String color, texture, material;

    // Extrinsic — correctly unique per object
    private int posX, posY, velocityX, velocityY;

    // All 10 fields packed into every instance
    public Asteroid(int l, int w, int wt, String col, String tex,
                    String mat, int posX, int posY, int velX, int velY) { ... }
}

// 1,000,000 × (7 ints × 4 bytes + 3 strings × ~40 bytes) ≈ 141 MB
long perObject = Asteroid.getMemoryUsage(); // 148 bytes
long total     = ASTEROID_COUNT * perObject; // ~141 MB`}</code>
        </pre>

        {/* With — Flyweight */}
        <h3 className="text-base font-semibold text-gray-700 mb-2">
          With Flyweight — shared intrinsic state
        </h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// Flyweight — holds only intrinsic state, shared across all same-type asteroids
class AsteroidFlyweight {
    private int length, width, weight;         // intrinsic — never changes
    private String color, texture, material;   // intrinsic — never changes

    // Extrinsic state passed in at call time — not stored here
    public void render(int posX, int posY, int velocityX, int velocityY) {
        System.out.println("Rendering " + color + " " + material
            + " asteroid at (" + posX + "," + posY + ")...");
    }
}`}</code>
        </pre>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// Factory — the sharing mechanism. Returns existing flyweight or creates one.
class AsteroidFactory {
    private static Map<String, AsteroidFlyweight> flyweights = new HashMap<>();

    public static AsteroidFlyweight getAsteroid(
            int length, int width, int weight,
            String color, String texture, String material) {

        String key = length + "_" + width + "_" + weight
                   + "_" + color + "_" + texture + "_" + material;

        if (!flyweights.containsKey(key)) {
            flyweights.put(key, new AsteroidFlyweight(
                length, width, weight, color, texture, material));
        }

        return flyweights.get(key); // same object returned for same key
    }
}`}</code>
        </pre>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// Context — lightweight. Holds only extrinsic state + reference to flyweight.
class AsteroidContext {
    private AsteroidFlyweight flyweight; // pointer to shared object (~8 bytes)
    private int posX, posY;             // unique position
    private int velocityX, velocityY;   // unique velocity

    public void render() {
        flyweight.render(posX, posY, velocityX, velocityY);
    }
}

// Spawning 1,000,000 asteroids of 3 types
// → 1,000,000 AsteroidContext objects × 24 bytes  = ~24 MB
// → 3 AsteroidFlyweight objects  × 132 bytes      ≈ negligible
// Total: ~24 MB vs ~141 MB without the pattern`}</code>
        </pre>

        <Callout type="tip">
          The key line is{" "}
          <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-800">
            render(int posX, int posY, int velX, int velY)
          </code>{" "}
          — extrinsic state is <em>passed in</em>, never stored on the
          flyweight. The flyweight is stateless with respect to position, so
          it's safe to share across any number of contexts simultaneously.
        </Callout>

        {/* Usage output */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2 mt-4">
          Output (first 5 asteroids)
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`=== Spawning 1000000 asteroids ===
Created 1000000 asteroid contexts
Total flyweight objects: 3          ← only 3 shared objects for 1M asteroids

--- Rendering first 5 asteroids ---
Rendering Red, Rocky, Iron asteroid at (100,200) Size: 25x25 Weight: 250 Velocity: (1, 2)
Rendering Blue, Metallic, Stone asteroid at (150,230) Size: 35x35 Weight: 350 Velocity: (1, 2)
Rendering Gray, Icy, Ice asteroid at (200,260) Size: 45x45 Weight: 450 Velocity: (1, 2)
Rendering Red, Rocky, Iron asteroid at (250,290) Size: 25x25 Weight: 250 Velocity: (1, 2)
Rendering Blue, Metallic, Stone asteroid at (300,320) Size: 35x35 Weight: 350 Velocity: (1, 2)

=== MEMORY USAGE ===
Total asteroids:    1,000,000
Memory per context: 24 bytes
Total memory used:  ~24 MB`}</code>
        </pre>
      </section>

      <hr className="my-6" />

      {/* 11. Deep dive — intrinsic vs extrinsic */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Identifying intrinsic vs extrinsic state
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          The hardest part of applying Flyweight is drawing the line. The rule
          is strict: intrinsic state must be <em>immutable</em> and{" "}
          <em>context-independent</em> — it cannot vary based on where or how
          the flyweight is used. Extrinsic state is everything that changes
          per-use.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wide">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">State</th>
                <th className="text-left px-4 py-2 font-semibold">Stored in</th>
                <th className="text-left px-4 py-2 font-semibold">
                  This example
                </th>
                <th className="text-left px-4 py-2 font-semibold">Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-2 font-medium text-yellow-700">
                  Intrinsic
                </td>
                <td className="px-4 py-2 text-gray-600">Flyweight</td>
                <td className="px-4 py-2 text-gray-600">
                  length, color, texture
                </td>
                <td className="px-4 py-2 text-gray-600">
                  Same regardless of context. Immutable.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 font-medium text-gray-700">
                  Extrinsic
                </td>
                <td className="px-4 py-2 text-gray-600">Context / passed in</td>
                <td className="px-4 py-2 text-gray-600">
                  posX, posY, velocity
                </td>
                <td className="px-4 py-2 text-gray-600">
                  Varies per instance. Never stored on flyweight.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Callout type="warning">
          If you accidentally store extrinsic state on the flyweight — say, the
          asteroid's current position — the flyweight is no longer shareable.
          All instances of that "type" would show the last position written,
          causing rendering bugs that are very difficult to trace.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 13. When to use / avoid */}
      <DoAndDont
        use={[
          "Your application creates a very large number of similar objects (thousands to millions)",
          "Object creation is causing memory pressure and most object state is duplicated across instances",
          "You can cleanly separate intrinsic (shared, immutable) state from extrinsic (per-instance) state",
          "The extrinsic state can be computed or passed in at operation time rather than stored per-object",
        ]}
        avoid={[
          "The number of objects is small — the factory overhead and indirection add complexity for no gain",
          "Objects have mostly unique state — there's little intrinsic data worth sharing",
          "The flyweight state is mutable — shared mutable state causes race conditions and subtle bugs",
          "Passing extrinsic state as parameters makes the API awkward or forces callers to track too much context",
        ]}
      />

      <hr className="my-6" />

      {/* 15. Real-world examples */}
      <RealWorldExamples
        examples={[
          {
            name: "Character rendering in text editors",
            detail:
              "A glyph object for the letter 'A' is shared across every occurrence in a document. Only the position and style on the page (extrinsic) differ per character.",
          },
          {
            name: "Java String pool",
            detail:
              "String literals are interned — the JVM keeps one object per unique string value and returns the same reference to all code that uses it. String.intern() is explicit flyweight opt-in.",
          },
          {
            name: "Game particle systems",
            detail:
              "Engines like Unity share a single particle definition (mesh, texture, shader) across thousands of active particles. Each particle context stores only position, velocity, and lifetime.",
          },
          {
            name: "Icon / image assets in UI frameworks",
            detail:
              "A toolbar icon bitmap is loaded once and shared across every button instance that uses it. The button context stores position and state; the image object is the flyweight.",
          },
        ]}
      />

      <hr className="my-6" />

      {/* 17. Key takeaway */}
      <KeyTakeaway>
        Flyweight is a targeted memory optimisation — it only makes sense when
        you have a large number of nearly-identical objects and can cleanly
        split their state into intrinsic (shared, immutable) and extrinsic
        (per-instance, passed at call time). The pattern trades a small amount
        of complexity — a factory, a context wrapper, and the discipline of
        never storing extrinsic state on the flyweight — for dramatic memory
        savings. In this example, one million asteroids of three types drop from
        141 MB to ~24 MB by sharing just three flyweight objects. When your
        profiler shows object duplication at scale, that's the signal to reach
        for Flyweight.
      </KeyTakeaway>

      {/* 18. PatternNav */}
      <PatternNav
        prev={{
          title: "Iterator Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/iterator",
        }}
        next={{
          title: "State Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/state",
        }}
      />
    </main>
  );
}
