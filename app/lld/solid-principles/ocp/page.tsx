import GitHubIcon from "@/components/icons/GithubIcon";
import {
  Tagline,
  Callout,
  StructureDiagram,
  RealWorldExamples,
  KeyTakeaway,
} from "@/components/pattern";
import { PatternNav } from "@/components/patternnav/PatternNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OCP - Open/Closed Principle",
};

export default function OCPPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Open/Closed Principle (OCP)
        </h1>

        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/SOLID/OCP"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitHubIcon size={13} />
          View code
        </a>
      </div>

      <Tagline>
        Software entities should be open for extension but closed for
        modification.
      </Tagline>

      <hr className="my-8 text-gray-100" />

      {/* Problem */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>

        <p className="text-gray-700 leading-8 mb-4">
          Imagine an e-commerce application where a shopping cart can be saved
          to different storage systems. Initially, only SQL support exists.
          Later, MongoDB support is required. Then file storage. Then Redis.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          A common approach is continuously modifying the existing storage class
          whenever a new persistence mechanism is introduced.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class ShoppingCartStorage {

    void saveToSQLDatabase() {
        ...
    }

    void saveToMongoDatabase() {
        ...
    }

    void saveToFile() {
        ...
    }
}`}</code>
        </pre>

        <p className="text-gray-700 leading-8 mb-4">
          Every new storage type forces modification of an existing class. This
          increases risk because working code must be changed whenever a new
          requirement arrives.
        </p>

        <Callout type="warning">
          If adding a feature requires modifying an existing class, you're
          probably violating the Open/Closed Principle.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Solution */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>

        <p className="text-gray-700 leading-8 mb-6">
          Instead of hardcoding storage implementations into a single class,
          define an abstraction and allow new implementations to extend the
          system without modifying existing code.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Persistence</h3>
            <p className="text-sm text-gray-600">Common abstraction.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">SQLPersistence</h3>
            <p className="text-sm text-gray-600">SQL implementation.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">MongoPersistence</h3>
            <p className="text-sm text-gray-600">MongoDB implementation.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">FilePersistence</h3>
            <p className="text-sm text-gray-600">File-based implementation.</p>
          </div>
        </div>

        <StructureDiagram pattern="ocp" />

        <Callout type="tip">
          New behavior should be added through extension, not by modifying
          existing code.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Code */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">Code</h2>

        <h3 className="font-semibold mb-3">Abstraction</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface Persistence {
    void save(ShoppingCart cart);
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3">Concrete Implementations</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class SQLPersistence implements Persistence {

    @Override
    public void save(ShoppingCart cart) {
        System.out.println(
            "Saving shopping cart to SQL DB..."
        );
    }
}

class MongoPersistence implements Persistence {

    @Override
    public void save(ShoppingCart cart) {
        System.out.println(
            "Saving shopping cart to MongoDB..."
        );
    }
}

class FilePersistence implements Persistence {

    @Override
    public void save(ShoppingCart cart) {
        System.out.println(
            "Saving shopping cart to a file..."
        );
    }
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3">Usage</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`public class OCP_Followed {

    public static void main(String[] args) {

        ShoppingCart cart = new ShoppingCart();

        Persistence sql =
            new SQLPersistence();

        Persistence mongo =
            new MongoPersistence();

        Persistence file =
            new FilePersistence();

        sql.save(cart);
        mongo.save(cart);
        file.save(cart);
    }
}

/*
Output:

Saving shopping cart to SQL DB...
Saving shopping cart to MongoDB...
Saving shopping cart to a file...
*/
`}</code>
        </pre>

        <Callout type="info">
          Adding RedisPersistence tomorrow requires creating a new class—not
          modifying any existing class.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Deep Dive */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Real Meaning of OCP</h2>

        <p className="text-gray-700 leading-8 mb-4">
          Many developers mistakenly associate OCP with inheritance.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          In reality, OCP is primarily achieved through abstraction. The key
          idea is that client code depends on a stable contract rather than
          concrete implementations.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface Persistence {
    void save(ShoppingCart cart);
}`}</code>
        </pre>

        <p className="text-gray-700 leading-8 mb-4">
          Because clients depend on the interface, new implementations can be
          introduced without changing existing business logic.
        </p>

        <Callout type="tip">
          OCP is the bridge between SRP and Dependency Inversion Principle
          (DIP). Abstractions make extensibility possible.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Use / Avoid */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">When to Use / Avoid</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-green-200 bg-green-50 rounded-lg p-5">
            <h3 className="font-semibold text-green-700 mb-3">Use When</h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>New features are added frequently.</li>
              <li>Multiple implementations are expected.</li>
              <li>Business rules evolve over time.</li>
              <li>Plugins or extensions may be introduced.</li>
            </ul>
          </div>

          <div className="border border-red-200 bg-red-50 rounded-lg p-5">
            <h3 className="font-semibold text-red-700 mb-3">Avoid When</h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>Requirements are trivial and stable.</li>
              <li>Only one implementation will ever exist.</li>
              <li>Abstractions add unnecessary complexity.</li>
              <li>You're solving hypothetical future problems.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Real World Examples */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">Real-World Examples</h2>

        <RealWorldExamples
          examples={[
            {
              name: "Payment Gateways",
              detail:
                "Add Razorpay, Stripe, or PayPal implementations without changing checkout logic.",
            },
            {
              name: "Logging Frameworks",
              detail:
                "Add FileLogger or DatabaseLogger implementations without modifying application code.",
            },
            {
              name: "Notification Systems",
              detail:
                "Extend Email, SMS, or Push notification providers through implementations.",
            },
            {
              name: "Cloud Storage",
              detail:
                "Support AWS S3, Azure Blob, or Google Cloud Storage through adapters.",
            },
          ]}
        />
      </section>

      <hr className="my-8 text-gray-100" />

      <KeyTakeaway>
        Open/Closed Principle encourages designing software around abstractions.
        Existing code should remain stable while new behavior is introduced
        through extensions. This reduces risk, improves maintainability, and
        makes systems easier to evolve as requirements grow.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Single Responsibility Principle",
          pattern: "SRP",
          href: "/lld/solid-principles/srp",
        }}
        next={{
          title: "Liskov Substitution Principle",
          pattern: "LSP",
          href: "/lld/solid-principles/lsp",
        }}
      />
    </div>
  );
}
