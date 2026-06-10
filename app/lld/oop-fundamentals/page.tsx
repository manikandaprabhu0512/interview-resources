import Link from "next/link";
import {
  PatternMeta,
  Tagline,
  Callout,
  KeyTakeaway,
  StructureDiagram,
} from "@/components/pattern";
import { Metadata } from "next";
import { PatternNav } from "@/components/patternnav/PatternNav";

export const metadata: Metadata = {
  title: "OOPs Fundamentals",
};

export default function OOPPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Object-Oriented Programming
        </h1>
      </div>

      <Tagline>
        OOP organizes software around objects that combine data and behavior.
      </Tagline>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          What is Object-Oriented Programming?
        </h2>

        <p className="text-gray-700 leading-8 mb-4">
          Object-Oriented Programming (OOP) is a programming paradigm that
          models software as a collection of objects. Each object contains state
          (data) and behavior (methods).
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          Instead of writing programs as a sequence of functions, OOP groups
          related data and behavior together, making systems easier to design,
          extend, and maintain.
        </p>

        <Callout type="info">
          Nearly every major design pattern builds on one or more OOP
          principles.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Four Pillars of OOP</h2>

        <p className="text-gray-700 leading-8 mb-6">
          Every object-oriented system is built on four fundamental concepts:
          Abstraction, Encapsulation, Inheritance, and Polymorphism.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Abstraction</h3>
            <p className="text-sm text-gray-600">
              Hide implementation details and expose only what matters.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Encapsulation</h3>
            <p className="text-sm text-gray-600">
              Protect internal state through controlled access.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Inheritance</h3>
            <p className="text-sm text-gray-600">
              Reuse existing behavior through parent-child relationships.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Polymorphism</h3>
            <p className="text-sm text-gray-600">
              One interface, multiple implementations.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="oops" />
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Why OOP Matters</h2>

        <ul className="list-disc pl-5 space-y-3 text-gray-700">
          <li>Improves code organization.</li>
          <li>Promotes reusability.</li>
          <li>Reduces duplication.</li>
          <li>Simplifies maintenance.</li>
          <li>Enables scalable system design.</li>
        </ul>

        <Callout type="tip">
          Design patterns are practical applications of OOP principles.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Learning Path</h2>

        <div className="rounded-xl p-6">
          <ol className="space-y-4">
            <li>1. Abstraction</li>
            <li>2. Encapsulation</li>
            <li>3. Inheritance</li>
            <li>4. Polymorphism</li>
          </ol>
        </div>
      </section>

      <hr className="my-8 text-gray-100" />

      <KeyTakeaway>
        Object-Oriented Programming is built on four fundamental pillars:
        Abstraction, Encapsulation, Inheritance, and Polymorphism. These
        concepts provide the foundation for writing maintainable software and
        understanding modern design patterns.
      </KeyTakeaway>

      <PatternNav
        next={{
          title: "Abstraction",
          pattern: "OOPs",
          href: "/lld/oop-fundamentals/abstraction",
        }}
      />
    </div>
  );
}
