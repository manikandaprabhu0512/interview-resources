import { GitBranch } from "lucide-react";

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

export default function PrototypePatternPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <PatternMeta pattern="Creational" difficulty="Intermediate" />

      <div className="flex items-center justify-between mt-3">
        <h1 className="text-4xl font-bold">Prototype Pattern</h1>

        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Prototype_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      <Tagline>
        "Create new objects by cloning an existing object instead of rebuilding
        them from scratch."
      </Tagline>

      <hr className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The problem</h2>

        <p className="mb-4 text-gray-700 leading-7">
          Imagine a game server that creates hundreds of NPCs. Every NPC
          requires expensive setup work: database calls, calculations, loading
          stats, and initializing state.
        </p>

        <p className="mb-4 text-gray-700 leading-7">
          Without a prototype, every variation must call the heavy constructor
          again even when most fields are identical.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`NPC alien = new NPC("Alien", 30, 5, 2);

NPC alien2 = new NPC(
  "Powerful Alien",
  30,
  5,
  5
);`}</code>
        </pre>

        <Callout type="warning">
          When object creation is expensive, repeatedly calling constructors can
          become wasteful and difficult to maintain.
        </Callout>
      </section>

      <hr className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The solution</h2>

        <p className="mb-6 text-gray-700 leading-7">
          The Prototype Pattern creates one fully configured object and then
          duplicates it through cloning. New objects start as copies of the
          prototype and only modify the fields that differ.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Cloneable</h3>
            <p className="text-sm text-gray-600">Defines the clone contract.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">INPC</h3>
            <p className="text-sm text-gray-600">
              Concrete prototype that knows how to clone itself.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Client</h3>
            <p className="text-sm text-gray-600">
              Creates copies instead of rebuilding objects.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="prototype" />
      </section>

      <hr className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Code</h2>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface Cloneable {
   Cloneable clone();
}`}</code>
        </pre>

        <Callout type="tip">
          The interface separates cloning behavior from concrete
          implementations.
        </Callout>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class INPC implements Cloneable {

   public INPC(
      String name,
      int health,
      int attack,
      int defense
   ) {
      // expensive setup
   }

   public INPC(INPC other) {
      name = other.name;
      health = other.health;
      attack = other.attack;
      defense = other.defense;
   }

   public Cloneable clone() {
      return new INPC(this);
   }
}`}</code>
        </pre>

        <Callout type="info">
          This implementation uses a copy constructor. The clone operation
          delegates object duplication to that constructor.
        </Callout>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`INPC alien = new INPC(
   "Alien",
   30,
   5,
   2
);

INPC alienCopied1 = (INPC) alien.clone();
alienCopied1.describe();

INPC alienCopied2 = (INPC) alien.clone();
alienCopied2.setName("Powerful Alien");
alienCopied2.setHealth(50);
alienCopied2.describe();

/*
Output

Setting up template NPC 'Alien'

Cloning NPC 'Alien'
NPC Alien [HP=30 ATK=5 DEF=2]

Cloning NPC 'Alien'
NPC Powerful Alien [HP=50 ATK=5 DEF=2]
*/`}</code>
        </pre>
      </section>

      <hr className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Deep dive: Shallow vs Deep Copy
        </h2>

        <p className="mb-4 text-gray-700 leading-7">
          Cloning becomes more interesting when objects contain references to
          other objects.
        </p>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Shallow Copy</h3>
            <p className="text-sm text-gray-600">
              Copies primitive fields but shares referenced objects.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Deep Copy</h3>
            <p className="text-sm text-gray-600">
              Creates entirely new referenced objects so changes do not leak
              between clones.
            </p>
          </div>
        </div>

        <Callout type="warning">
          Deep copying may be necessary when mutable child objects exist. A
          shallow copy can accidentally share state.
        </Callout>
      </section>

      <hr className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold mb-6">When to use / avoid</h2>

        <DoAndDont
          use={[
            "Object creation is expensive",
            "Many objects share the same initial configuration",
            "You want runtime-generated templates",
            "Copying is cheaper than rebuilding",
          ]}
          avoid={[
            "Objects are trivial to create",
            "Deep-copy logic is extremely complex",
            "Cloning would expose invalid state",
            "Simple constructors already solve the problem",
          ]}
        />
      </section>

      <hr className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold mb-6">Real-world examples</h2>

        <RealWorldExamples
          examples={[
            {
              name: "Game NPC Templates",
              detail:
                "Clone base enemies and customize only stats or equipment.",
            },
            {
              name: "Document Editors",
              detail: "Duplicate shapes, slides, and design elements.",
            },
            {
              name: "UI Builders",
              detail: "Create components from preconfigured templates.",
            },
            {
              name: "ORM Entity Templates",
              detail:
                "Create variations of existing objects without rerunning setup.",
            },
          ]}
        />
      </section>

      <hr className="my-8" />

      <KeyTakeaway>
        The Prototype Pattern replaces expensive construction with object
        cloning. A fully configured prototype acts as a template from which new
        objects are copied. This reduces setup cost, centralizes configuration,
        and makes creating variations simple. Always consider whether shallow or
        deep copying is required before implementing cloning.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Mediator Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/mediator",
        }}
        next={{
          title: "Visitor Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/visitor",
        }}
      />
    </main>
  );
}
