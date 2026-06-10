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
  title: "Bridge Pattern",
};

export default function BridgePatternPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      {/* 1. PatternMeta */}
      <PatternMeta pattern="Structural" difficulty="Intermediate" />

      {/* 2. Title + GitHub button */}
      <div className="flex items-start justify-between mt-4 mb-3">
        <h1 className="text-3xl font-bold tracking-tight">Bridge Pattern</h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Bridge_Pattern"
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
        Split what a thing <em>is</em> from what it <em>does</em> — so both
        sides can grow independently.
      </Tagline>

      <hr className="my-6" />

      {/* 5. The Problem */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The problem</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          You're modelling cars. You have two body styles — Sedan and SUV — and
          three engine types — Petrol, Diesel, Electric. If you use inheritance
          to combine them, you need a class for every possible pairing:{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            PetrolSedan
          </code>
          ,{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            DieselSedan
          </code>
          ,{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            ElectricSedan
          </code>
          ,{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            PetrolSUV
          </code>
          … and so on. Two new body styles × four engine types = 8 more classes
          overnight.
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// 2 body styles × 3 engines = 6 classes. Add HybridEngine → 8. Add Truck → 12.
class PetrolSedan   extends Sedan { ... }
class DieselSedan   extends Sedan { ... }
class ElectricSedan extends Sedan { ... }
class PetrolSUV     extends SUV   { ... }
class DieselSUV     extends SUV   { ... }
class ElectricSUV   extends SUV   { ... }
// M body styles × N engines = M×N classes — a combinatorial explosion`}</code>
        </pre>
        <Callout type="warning">
          Inheritance couples two independent dimensions into a single class
          hierarchy. Every new variant in either dimension multiplies the number
          of classes you must write, test, and maintain.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 7. The Solution */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The solution</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Bridge separates the two dimensions into independent hierarchies and
          connects them with a <em>has-a</em> reference instead of <em>is-a</em>{" "}
          inheritance. The <strong>Abstraction</strong> (car body) holds a
          reference to the <strong>Implementor</strong> (engine) and delegates
          the varying behaviour to it. Adding a new engine never touches the car
          hierarchy, and vice versa.
        </p>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              Abstraction (HLP)
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                Car
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Abstract class that holds an{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                Engine
              </code>{" "}
              reference. Declares{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                drive()
              </code>{" "}
              — implemented by concrete car classes.
            </p>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              Implementor (LLP)
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                Engine
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Interface that declares{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                start()
              </code>
              . Concrete engines implement it without knowing anything about car
              bodies.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Refined Abstractions
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                Sedan
              </code>{" "}
              ·{" "}
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                SUV
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Extend{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                Car
              </code>{" "}
              and implement{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                drive()
              </code>{" "}
              — calls{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                engine.start()
              </code>{" "}
              then adds body-specific behaviour.
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Concrete Implementors
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                PetrolEngine
              </code>{" "}
              ·{" "}
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                DieselEngine
              </code>{" "}
              ·{" "}
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                ElectricEngine
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Each implements{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                start()
              </code>{" "}
              differently — petrol ignites, diesel roars, electric powers up
              silently.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="bridge" />
      </section>

      <hr className="my-6" />

      {/* 9. Code */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Code</h2>

        {/* Implementor side */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          Implementor — the Engine hierarchy
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface Engine {
    void start();
}

class PetrolEngine implements Engine {
    @Override
    public void start() {
        System.out.println("Petrol engine starting with ignition!");
    }
}

class DieselEngine implements Engine {
    @Override
    public void start() {
        System.out.println("Diesel engine roaring to life!");
    }
}

class ElectricEngine implements Engine {
    @Override
    public void start() {
        System.out.println("Electric engine powering up silently!");
    }
}`}</code>
        </pre>

        {/* Abstraction side */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          Abstraction — the Car hierarchy
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`abstract class Car {
    protected Engine engine;  // ← the bridge: holds an Implementor reference

    public Car(Engine e) {
        this.engine = e;      // injected at construction — easy to swap
    }

    public abstract void drive();
}

class Sedan extends Car {
    public Sedan(Engine e) { super(e); }

    @Override
    public void drive() {
        engine.start();                                   // delegate to implementor
        System.out.println("Driving a Sedan on the highway.");
    }
}

class SUV extends Car {
    public SUV(Engine e) { super(e); }

    @Override
    public void drive() {
        engine.start();                                   // same delegation pattern
        System.out.println("Driving an SUV off-road.");
    }
}`}</code>
        </pre>

        <Callout type="tip">
          The bridge is just that one line:{" "}
          <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-800">
            protected Engine engine
          </code>
          . Composition replaces the entire M×N inheritance lattice — any car
          body paired with any engine, at runtime, with zero extra classes.
        </Callout>

        {/* Usage */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2 mt-4">
          Usage
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// Mix and match freely — no new class needed per combination
Car mySedan = new Sedan(new PetrolEngine());
Car mySUV   = new SUV(new ElectricEngine());
Car yourSUV = new SUV(new DieselEngine());

mySedan.drive();
// Petrol engine starting with ignition!
// Driving a Sedan on the highway.

mySUV.drive();
// Electric engine powering up silently!
// Driving an SUV off-road.

yourSUV.drive();
// Diesel engine roaring to life!
// Driving an SUV off-road.`}</code>
        </pre>

        <Callout type="info">
          Adding a{" "}
          <code className="text-sm bg-blue-100 px-1.5 py-0.5 rounded text-blue-800">
            HybridEngine
          </code>{" "}
          means writing exactly one new class that implements{" "}
          <code className="text-sm bg-blue-100 px-1.5 py-0.5 rounded text-blue-800">
            Engine
          </code>
          . Adding a{" "}
          <code className="text-sm bg-blue-100 px-1.5 py-0.5 rounded text-blue-800">
            Truck
          </code>{" "}
          means writing exactly one new class that extends{" "}
          <code className="text-sm bg-blue-100 px-1.5 py-0.5 rounded text-blue-800">
            Car
          </code>
          . Neither change touches the other hierarchy — M + N instead of M × N.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 11. Deep dive */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Bridge vs Strategy — the easy confusion
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Both patterns involve an object holding a reference to an interface
          and delegating behaviour to it. The difference is purely one of{" "}
          <em>intent</em> and <em>design time vs runtime</em>:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Bridge</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Solves a <em>structural</em> problem — preventing class explosion
              when two independent dimensions need to vary. Both hierarchies are
              designed up front to grow independently. The implementor is
              typically set at construction and rarely swapped at runtime.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Strategy</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Solves a <em>behavioural</em> problem — swapping an algorithm at
              runtime. There's one context class and multiple interchangeable
              strategies. The focus is on <em>changing behaviour</em>, not on
              managing two parallel hierarchies.
            </p>
          </div>
        </div>
        <Callout type="tip">
          Rule of thumb: if you're thinking "I need M × N classes without the
          pattern" — it's Bridge. If you're thinking "I need to swap this
          algorithm based on a condition" — it's Strategy.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 13. When to use / avoid */}
      <DoAndDont
        use={[
          "You have two independent dimensions that both need to vary — body style vs engine, shape vs colour, UI vs platform",
          "You want to avoid a combinatorial explosion of subclasses (M bodies × N engines = M×N classes)",
          "You want to switch the implementor at runtime without changing the abstraction",
          "You're building a cross-platform abstraction where the same high-level API must work over different low-level implementations",
        ]}
        avoid={[
          "Only one dimension varies — a simple strategy or subclass is cleaner",
          "The abstraction and implementation are tightly coupled by nature and never vary independently",
          "You're early in design and the two dimensions aren't clearly identified yet — premature bridging adds indirection for no gain",
          "The number of combinations is small and fixed — a few explicit subclasses are more readable than the indirection",
        ]}
      />

      <hr className="my-6" />

      {/* 15. Real-world examples */}
      <RealWorldExamples
        examples={[
          {
            name: "Java AWT / Swing peers",
            detail:
              "The Window abstraction holds a platform-specific WindowPeer. The same Window API runs on Windows, macOS, and Linux by swapping the peer implementation — a classic bridge.",
          },
          {
            name: "JDBC drivers",
            detail:
              "Your code talks to the Connection / Statement abstraction. The concrete driver (MySQL, PostgreSQL, Oracle) is the implementor — swappable via a connection string with zero changes to application code.",
          },
          {
            name: "Logging frameworks (SLF4J)",
            detail:
              "SLF4J is the abstraction; Log4j, Logback, java.util.logging are the implementors. Applications log through the bridge and the backend is swapped at deployment.",
          },
          {
            name: "Remote APIs over multiple transports",
            detail:
              "An API client abstraction can bridge over HTTP, gRPC, or WebSocket implementors — same high-level calls, different wire formats, independently extensible.",
          },
        ]}
      />

      <hr className="my-6" />

      {/* 17. Key takeaway */}
      <KeyTakeaway>
        Bridge replaces an M×N inheritance explosion with M + N independent
        classes connected by a single composition reference — the bridge itself.
        The Abstraction (Car) defines the high-level interface and delegates to
        the Implementor (Engine) for the varying behaviour; neither hierarchy
        knows the internals of the other. The key insight from your diagram is
        that HLP and LLP are genuinely orthogonal axes: adding to one axis costs
        exactly one new class, regardless of how many classes exist in the
        other. When you find yourself sketching a grid of subclasses, that grid
        is the signal to reach for Bridge.
      </KeyTakeaway>

      {/* 18. PatternNav */}
      <PatternNav
        prev={{
          title: "Chain of Responsibility Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/cor",
        }}
        next={{
          title: "Builder Pattern",
          pattern: "Creational",
          href: "/lld/patterns/builder",
        }}
      />
    </main>
  );
}
