import Link from "next/link";
import {
  Tagline,
  Callout,
  KeyTakeaway,
  StructureDiagram,
} from "@/components/pattern";
import { PatternNav } from "@/components/patternnav/PatternNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOLID Principles",
};

export default function SOLIDPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold tracking-tight">SOLID Principles</h1>
      </div>

      <Tagline>
        SOLID principles help developers build software that is maintainable,
        extensible, and resilient to change.
      </Tagline>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          What are SOLID Principles?
        </h2>

        <p className="text-gray-700 leading-8 mb-4">
          SOLID is a collection of five object-oriented design principles
          introduced by Robert C. Martin (Uncle Bob). These principles guide
          developers toward building systems that are easier to understand,
          modify, test, and extend.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          While OOP provides the building blocks, SOLID teaches how to combine
          those blocks into software that remains flexible as requirements
          evolve.
        </p>

        <Callout type="info">
          Most design patterns exist to solve problems that arise when one or
          more SOLID principles are violated.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          The Five SOLID Principles
        </h2>

        <p className="text-gray-700 leading-8 mb-6">
          Each principle addresses a different aspect of software design. When
          combined, they help create loosely coupled and highly maintainable
          systems.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link
            href="/lld/solid-principles/srp"
            className="border rounded-lg p-4 border-gray-200 hover:border-gray-400 transition-colors"
          >
            <h3 className="font-semibold mb-2">
              S — Single Responsibility Principle
            </h3>
            <p className="text-sm text-gray-600">
              A class should have only one reason to change.
            </p>
          </Link>

          <Link
            href="/lld/solid-principles/ocp"
            className="border rounded-lg p-4 border-gray-200 hover:border-gray-400 transition-colors"
          >
            <h3 className="font-semibold mb-2">O — Open/Closed Principle</h3>
            <p className="text-sm text-gray-600">
              Open for extension, closed for modification.
            </p>
          </Link>

          <Link
            href="/lld/solid-principles/lsp"
            className="border rounded-lg p-4 border-gray-200 hover:border-gray-400 transition-colors"
          >
            <h3 className="font-semibold mb-2">
              L — Liskov Substitution Principle
            </h3>
            <p className="text-sm text-gray-600">
              Derived types must be replaceable with their base types.
            </p>
          </Link>

          <Link
            href="/lld/solid-principles/isp"
            className="border rounded-lg p-4 border-gray-200 hover:border-gray-400 transition-colors"
          >
            <h3 className="font-semibold mb-2">
              I — Interface Segregation Principle
            </h3>
            <p className="text-sm text-gray-600">
              Clients should not depend on methods they do not use.
            </p>
          </Link>

          <Link
            href="/lld/solid-principles/dip"
            className="border rounded-lg p-4 border-gray-200 hover:border-gray-400 transition-colors md:col-span-2"
          >
            <h3 className="font-semibold mb-2">
              D — Dependency Inversion Principle
            </h3>
            <p className="text-sm text-gray-600">
              Depend on abstractions, not concrete implementations.
            </p>
          </Link>
        </div>

        <StructureDiagram pattern="solid" />
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Why SOLID Matters</h2>

        <ul className="list-disc pl-5 space-y-3 text-gray-700">
          <li>Reduces tight coupling between classes.</li>
          <li>Makes systems easier to extend safely.</li>
          <li>Improves testability and maintainability.</li>
          <li>Encourages modular architecture.</li>
          <li>Helps prevent fragile and rigid codebases.</li>
        </ul>

        <Callout type="tip">
          SOLID is less about writing more code and more about managing change
          effectively.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          SOLID and Design Patterns
        </h2>

        <p className="text-gray-700 leading-8 mb-4">
          Many popular design patterns are practical implementations of SOLID
          principles.
        </p>

        <div className="rounded-xl border border-gray-200 p-6">
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Strategy</strong> → Open/Closed Principle
            </li>
            <li>
              <strong>Decorator</strong> → Open/Closed Principle
            </li>
            <li>
              <strong>Observer</strong> → Dependency Inversion Principle
            </li>
            <li>
              <strong>Factory Method</strong> → Dependency Inversion Principle
            </li>
            <li>
              <strong>Facade</strong> → Single Responsibility Principle
            </li>
          </ul>
        </div>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Learning Path</h2>

        <div className="rounded-xl border border-gray-200 p-6">
          <ol className="space-y-4">
            <li>1. Single Responsibility Principle (SRP)</li>
            <li>2. Open/Closed Principle (OCP)</li>
            <li>3. Liskov Substitution Principle (LSP)</li>
            <li>4. Interface Segregation Principle (ISP)</li>
            <li>5. Dependency Inversion Principle (DIP)</li>
          </ol>
        </div>
      </section>

      <hr className="my-8 text-gray-100" />

      <KeyTakeaway>
        SOLID principles provide the foundation for professional software
        design. They help developers create systems that are easier to extend,
        easier to test, and easier to maintain. Mastering SOLID makes design
        patterns easier to understand because many patterns are simply practical
        applications of these principles.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Polymorphism",
          pattern: "OOP",
          href: "/lld/oop-fundamentals/polymorphism",
        }}
        next={{
          title: "Single Responsibility Principle",
          pattern: "SRP",
          href: "/lld/solid-principles/srp",
        }}
      />
    </div>
  );
}
