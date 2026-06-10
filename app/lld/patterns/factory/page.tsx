import Link from "next/link";
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
  title: "Factory Pattern",
};

const data = {
  title: "Factory Pattern",
  pattern: "Creational" as const,
  difficulty: "Beginner" as const,
};

export default function FactoryPatternPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <PatternMeta pattern={data.pattern} difficulty={data.difficulty} />

      {/* Title + GitHub */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          Factory Pattern
        </h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Factory_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      <Tagline>
        "Don't call new directly — let a factory decide what to create."
      </Tagline>

      <hr className="my-8 border-gray-100" />

      {/* Overview */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Overview</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The Factory pattern is not one pattern — it's a family of three related
        patterns, each solving object creation at a different level of
        complexity. Understanding all three tells you exactly when to use which.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          {
            name: "Simple Factory",
            desc: "One class decides which object to create. Not a GoF pattern but widely used.",
          },
          {
            name: "Factory Method",
            desc: "Defines an interface for creation. Subclasses decide which class to instantiate.",
          },
          {
            name: "Abstract Factory",
            desc: "Creates families of related objects without specifying their concrete classes.",
          },
        ].map((v) => (
          <div
            key={v.name}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          >
            <p className="text-sm font-semibold text-gray-800 mb-1">{v.name}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      <hr className="my-8 border-gray-100" />

      {/* Simple Factory */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        1. Simple Factory
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        You're running a burger joint. A customer orders a burger by type —
        basic, standard, or premium. Without a factory, the client code creates
        burgers directly with{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          new BasicBurger()
        </code>
        ,{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          new StandardBurger()
        </code>
        , and so on — scattering creation logic everywhere.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        A{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          BurgerFactory
        </code>{" "}
        centralizes this — the client just says "give me a basic burger" and the
        factory handles the rest.
      </p>

      <StructureDiagram pattern="simple-factory" />

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Product interface
interface Burger {
    void prepare();
}

// Concrete products
class BasicBurger implements Burger {
    public void prepare() {
        System.out.println("Preparing Basic Burger with bun, patty, and ketchup!");
    }
}

class StandardBurger implements Burger {
    public void prepare() {
        System.out.println("Preparing Standard Burger with bun, patty, cheese, and lettuce!");
    }
}

class PremiumBurger implements Burger {
    public void prepare() {
        System.out.println("Preparing Premium Burger with gourmet bun, premium patty, cheese, lettuce, and secret sauce!");
    }
}

// The factory — one class, one job: decide what to create
class BurgerFactory {
    public Burger createBurger(String type) {
        if (type.equalsIgnoreCase("basic"))    return new BasicBurger();
        if (type.equalsIgnoreCase("standard")) return new StandardBurger();
        if (type.equalsIgnoreCase("premium"))  return new PremiumBurger();
        System.out.println("Invalid burger type!");
        return null;
    }
}

// Usage
BurgerFactory factory = new BurgerFactory();
Burger burger = factory.createBurger("Premium");
if (burger != null) burger.prepare();
// → Preparing Premium Burger with gourmet bun...`}</code>
      </pre>

      <Callout type="warning">
        Simple Factory is not a GoF design pattern — it's more of a programming
        idiom. It doesn't follow Open/Closed Principle: adding a new burger type
        means modifying{" "}
        <code className="text-sm bg-amber-100 px-1.5 py-0.5 rounded">
          BurgerFactory
        </code>
        . That's the problem Factory Method solves.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Factory Method */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        2. Factory Method
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Now you're expanding. You have two burger chains —{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          SinghBurger
        </code>{" "}
        uses regular buns,{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          KingBurger
        </code>{" "}
        uses wheat buns. Both chains create burgers, but each creates them
        differently.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Factory Method defines a{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          FBurgerFactory
        </code>{" "}
        interface with a{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          createBurger()
        </code>{" "}
        method. Each chain implements it their own way — the client talks to the
        interface, never to a specific chain.
      </p>

      <StructureDiagram pattern="factory-method" />

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Factory interface — defines the contract
interface FBurgerFactory {
    Burger createBurger(String type);
}

// Concrete Factory 1 — regular buns
class SinghBurger implements FBurgerFactory {
    public Burger createBurger(String type) {
        System.out.println("This is SinghBurger");
        if (type.equalsIgnoreCase("basic"))    return new BasicBurger();
        if (type.equalsIgnoreCase("standard")) return new StandardBurger();
        if (type.equalsIgnoreCase("premium"))  return new PremiumBurger();
        return null;
    }
}

// Concrete Factory 2 — wheat buns
class KingBurger implements FBurgerFactory {
    public Burger createBurger(String type) {
        System.out.println("This is KingBurger");
        if (type.equalsIgnoreCase("basic"))    return new BasicWheatBurger();
        if (type.equalsIgnoreCase("standard")) return new StandardWheatBurger();
        if (type.equalsIgnoreCase("premium"))  return new PremiumWheatBurger();
        return null;
    }
}

// Usage — client talks to the interface only
FBurgerFactory myFactory = new SinghBurger();
Burger burger = myFactory.createBurger("basic");
if (burger != null) burger.prepare();
// → Preparing Basic Burger with bun, patty, and ketchup!`}</code>
      </pre>

      <Callout type="info">
        Adding a new chain like{" "}
        <code className="text-sm bg-blue-100 px-1.5 py-0.5 rounded">
          VeganBurger
        </code>
        ? Just implement{" "}
        <code className="text-sm bg-blue-100 px-1.5 py-0.5 rounded">
          FBurgerFactory
        </code>{" "}
        — no existing code changes. Open/Closed Principle in action.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Abstract Factory */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        3. Abstract Factory
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Now each chain serves a full meal — not just burgers but also garlic
        bread. The products come in families: SinghBurger serves regular burgers
        + regular garlic bread, KingBurger serves wheat burgers + wheat garlic
        bread. They must stay consistent — you can't mix a wheat burger with
        regular garlic bread from the wrong chain.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Abstract Factory provides a{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          MealFactory
        </code>{" "}
        interface that creates a whole family of related products. Each concrete
        factory guarantees consistency across the family.
      </p>

      <StructureDiagram pattern="abstract-factory" />

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Product family 1 — Burger
interface Burger     { void prepare(); }

// Product family 2 — GarlicBread
interface GarlicBread { void prepare(); }

// Abstract Factory — creates a whole family
interface MealFactory {
    Burger      createBurger(String type);
    GarlicBread createGarlicBread(String type);
}

// Concrete Factory 1 — regular products
class ASinghBurger implements MealFactory {
    public Burger createBurger(String type) {
        if (type.equalsIgnoreCase("basic"))    return new BasicBurger();
        if (type.equalsIgnoreCase("standard")) return new StandardBurger();
        if (type.equalsIgnoreCase("premium"))  return new PremiumBurger();
        return null;
    }
    public GarlicBread createGarlicBread(String type) {
        if (type.equalsIgnoreCase("basic"))  return new BasicGarlicBread();
        if (type.equalsIgnoreCase("cheese")) return new CheeseGarlicBread();
        return null;
    }
}

// Concrete Factory 2 — wheat products
class AKingBurger implements MealFactory {
    public Burger createBurger(String type) {
        if (type.equalsIgnoreCase("basic"))    return new BasicWheatBurger();
        if (type.equalsIgnoreCase("standard")) return new StandardWheatBurger();
        if (type.equalsIgnoreCase("premium"))  return new PremiumWheatBurger();
        return null;
    }
    public GarlicBread createGarlicBread(String type) {
        if (type.equalsIgnoreCase("basic"))  return new BasicWheatGarlicBread();
        if (type.equalsIgnoreCase("cheese")) return new CheeseWheatGarlicBread();
        return null;
    }
}

// Usage — entire meal from one consistent factory
MealFactory mealFactory = new ASinghBurger();
Burger      burger      = mealFactory.createBurger("basic");
GarlicBread garlicBread = mealFactory.createGarlicBread("cheese");

if (burger != null)      burger.prepare();
if (garlicBread != null) garlicBread.prepare();
// → Preparing Basic Burger with bun, patty, and ketchup!
// → Preparing Cheese Garlic Bread with extra cheese and butter!`}</code>
      </pre>

      <Callout type="tip">
        Swap{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          new ASinghBurger()
        </code>{" "}
        to{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          new AKingBurger()
        </code>{" "}
        and the entire meal switches to wheat — one line change, entire family
        stays consistent.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Comparison */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        How they compare
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          {
            name: "Simple Factory",
            q: "Who creates?",
            a: "One static/non-static factory class",
            ocp: "❌ Violates OCP",
            when: "Small apps, few types",
          },
          {
            name: "Factory Method",
            q: "Who creates?",
            a: "Subclasses via interface",
            ocp: "✅ Follows OCP",
            when: "One product, multiple variants",
          },
          {
            name: "Abstract Factory",
            q: "Who creates?",
            a: "Family of factories via interface",
            ocp: "✅ Follows OCP",
            when: "Multiple related products",
          },
        ].map((c) => (
          <div
            key={c.name}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3 space-y-2"
          >
            <p className="text-sm font-semibold text-gray-800">{c.name}</p>
            <p className="text-xs text-gray-500">{c.a}</p>
            <p className="text-xs font-medium text-gray-700">{c.ocp}</p>
            <p className="text-xs text-gray-400 italic">Use when: {c.when}</p>
          </div>
        ))}
      </div>

      <hr className="my-8 border-gray-100" />

      {/* When to use / avoid */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        When to use / avoid
      </h2>
      <DoAndDont
        use={[
          "You want to decouple object creation from the code that uses it",
          "You have multiple variants of a product that need to be swappable",
          "You need to create families of related objects that must stay consistent (Abstract Factory)",
        ]}
        avoid={[
          "You only ever create one type of object — a factory adds unnecessary abstraction",
          "The product hierarchy is simple and unlikely to grow — keep it simple with direct instantiation",
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
            name: "JDBC",
            detail:
              "DriverManager.getConnection() — factory decides which DB driver to return",
          },
          {
            name: "Spring Framework",
            detail:
              "BeanFactory and ApplicationContext create beans without exposing instantiation",
          },
          {
            name: "Loggers",
            detail:
              "LoggerFactory.getLogger() in SLF4J — returns the right logger impl",
          },
          {
            name: "UI Toolkits",
            detail:
              "Abstract Factory creates consistent UI families (buttons, dialogs) per OS theme",
          },
          {
            name: "Cloud SDKs",
            detail:
              "AWS/GCP SDK factories create clients per service without exposing internals",
          },
        ]}
      />

      <hr className="my-8 border-gray-100" />

      {/* Key takeaway */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Key takeaway</h2>
      <KeyTakeaway>
        All three patterns share one goal — hide the{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          new
        </code>{" "}
        keyword from client code. Simple Factory centralizes creation in one
        place. Factory Method lets subclasses decide. Abstract Factory ensures
        entire product families stay consistent. Start with Simple Factory,
        graduate to Factory Method when you need extensibility, and reach for
        Abstract Factory when products come in families.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Strategy Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/strategy",
        }}
        next={{
          title: "Singleton Pattern",
          pattern: "Creational",
          href: "/lld/patterns/singleton",
        }}
      />
    </article>
  );
}
