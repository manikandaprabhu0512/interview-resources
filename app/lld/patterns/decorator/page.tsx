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
  title: "Decorator Pattern",
};

const data = {
  title: "Decorator Pattern",
  pattern: "Structural" as const,
  difficulty: "Intermediate" as const,
};

export default function DecoratorPatternPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <PatternMeta pattern={data.pattern} difficulty={data.difficulty} />

      {/* Title + GitHub */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          Decorator Pattern
        </h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Decorator_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      <Tagline>
        "Add responsibilities to an object dynamically — no subclass needed."
      </Tagline>

      <hr className="my-8 border-gray-100" />

      {/* The Problem */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The problem</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        You have a{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          Mario
        </code>{" "}
        character. He can pick up a HeightUp mushroom, a GunPower flower, a
        StarPower star — in any combination, in any order. If you used
        inheritance to model this, you'd need a subclass for every possible
        combination:
      </p>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Inheritance explosion — DON'T do this
class MarioWithHeightUp extends Mario { ... }
class MarioWithGunPower extends Mario { ... }
class MarioWithHeightUpAndGunPower extends Mario { ... }
class MarioWithHeightUpAndStarPower extends Mario { ... }
class MarioWithGunPowerAndStarPower extends Mario { ... }
class MarioWithHeightUpAndGunPowerAndStarPower extends Mario { ... }
// 3 powerups = 6 subclasses. 10 powerups = hundreds.`}</code>
      </pre>

      <Callout type="warning">
        Inheritance is static — you decide at compile time what a class can do.
        Decorator is dynamic — you wrap objects at runtime and stack behaviors
        freely.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* The Solution */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The solution</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Decorator wraps an object inside another object that adds behavior,
        while implementing the same interface. Since both the wrapper and the
        wrapped object share the same interface, you can keep wrapping —
        layering behaviors like onion rings. The object being decorated doesn't
        know it's being wrapped.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          {
            name: "Character (interface)",
            desc: "The shared contract. Both Mario and all decorators implement this.",
          },
          {
            name: "Mario (ConcreteComponent)",
            desc: "The base object being decorated. Has the core behavior.",
          },
          {
            name: "CharacterDecorator (abstract)",
            desc: "Holds a reference to a Character. The key — it's both a Character and wraps one.",
          },
        ].map((s) => (
          <div
            key={s.name}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          >
            <p className="text-sm font-semibold text-gray-800 mb-1">{s.name}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <StructureDiagram pattern="decorator" />

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Component interface — shared contract for all
interface Character {
    String getAblities();
}

// ConcreteComponent — the base object
class Mario implements Character {
    public String getAblities() {
        return "Mario";
    }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Abstract Decorator — is-a Character AND has-a Character
// This is the key structural piece
abstract class CharacterDecorator implements Character {
    protected Character character;  // has-a reference to wrap

    public CharacterDecorator(Character c) {
        this.character = c;
    }
    // getAblities() left to concrete decorators
}

// Concrete Decorators — each adds one behavior
class HeightUp extends CharacterDecorator {
    public HeightUp(Character c) { super(c); }

    public String getAblities() {
        return character.getAblities() + " with HeightUp";  // delegate + extend
    }
}

class GunPower extends CharacterDecorator {
    public GunPower(Character c) { super(c); }

    public String getAblities() {
        return character.getAblities() + " with GunPower";
    }
}

class StarPower extends CharacterDecorator {
    public StarPower(Character c) { super(c); }

    public String getAblities() {
        return character.getAblities() + " with StarPower";
    }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Usage — stack decorators at runtime, in any order
Character mario = new Mario();
System.out.println(mario.getAblities());
// → Mario

mario = new HeightUp(mario);
System.out.println(mario.getAblities());
// → Mario with HeightUp

mario = new GunPower(new StarPower(mario));
System.out.println(mario.getAblities());
// → Mario with HeightUp with StarPower with GunPower`}</code>
      </pre>

      <Callout type="tip">
        Read the wrapping inside-out —{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          new GunPower(new StarPower(mario))
        </code>{" "}
        means: take mario (already with HeightUp), wrap with StarPower, then
        wrap that with GunPower. Each layer calls the inner layer's{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          getAblities()
        </code>{" "}
        and appends its own behavior.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Deep dive — is-a and has-a */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Why both is-a and has-a?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        This is the clever part of Decorator. The abstract decorator does two
        things simultaneously:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
          <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide mb-2">
            is-a Character
          </p>
          <p className="text-sm text-violet-900 leading-relaxed">
            <code className="bg-violet-100 px-1 rounded">
              CharacterDecorator implements Character
            </code>{" "}
            — so a decorator can be used anywhere a Character is expected. You
            can wrap a decorator with another decorator.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
            has-a Character
          </p>
          <p className="text-sm text-blue-900 leading-relaxed">
            <code className="bg-blue-100 px-1 rounded">
              protected Character character
            </code>{" "}
            — holds a reference to the object it's wrapping. Calls its methods
            and adds behavior on top.
          </p>
        </div>
      </div>

      <hr className="my-8 border-gray-100" />

      {/* When to use / avoid */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        When to use / avoid
      </h2>
      <DoAndDont
        use={[
          "You need to add behavior to individual objects dynamically without affecting others",
          "Inheritance would lead to a class explosion — many combinations of features",
          "You want to stack behaviors in any order at runtime — like middleware or powerups",
        ]}
        avoid={[
          "The order of decorators matters and is hard to control — can lead to subtle bugs",
          "Too many small decorator classes can make the code hard to navigate and debug",
          "If you only need one fixed extension — a simple subclass is clearer",
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
            name: "Java I/O Streams",
            detail:
              "new BufferedReader(new FileReader(file)) — each wrapper adds a layer of behavior",
          },
          {
            name: "Spring Security",
            detail:
              "Filter chain — each filter decorates the request with auth, logging, CORS etc.",
          },
          {
            name: "HTTP Middleware",
            detail:
              "Express.js / Next.js middleware stack — each layer wraps the next",
          },
          {
            name: "Document Editor",
            detail:
              "Bold, Italic, Underline as decorators on plain text — stack any combination",
          },
          {
            name: "Coffee ordering",
            detail:
              "Classic GoF example — Espresso + Milk + Sugar each as a decorator",
          },
        ]}
      />

      <hr className="my-8 border-gray-100" />

      {/* Key takeaway */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Key takeaway</h2>
      <KeyTakeaway>
        Decorator adds behavior by wrapping, not inheriting. The trick is that
        the wrapper and the wrapped share the same interface — making them
        interchangeable and infinitely stackable. When you see inheritance
        exploding into too many subclasses for combinations of features,
        Decorator is almost always the answer. Java's entire I/O library is
        built on this pattern.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Observer Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/observer",
        }}
        next={{
          title: "Command Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/command",
        }}
      />
    </article>
  );
}
