import GitHubIcon from "@/components/icons/GithubIcon";
import {
  PatternMeta,
  Tagline,
  Callout,
  StructureDiagram,
  RealWorldExamples,
  KeyTakeaway,
} from "@/components/pattern";
import { PatternNav } from "@/components/patternnav/PatternNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISP - Interface Segregation Principle",
};

export default function ISPPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Interface Segregation Principle (ISP)
        </h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/SOLID/ISP"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitHubIcon size={13} />
          View code
        </a>
      </div>

      <Tagline>
        Clients should not be forced to depend on methods they do not use.
      </Tagline>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>

        <p className="text-gray-700 leading-8 mb-4">
          Consider a shape library that uses a single interface for both 2D and
          3D shapes.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface Shape {
    double area();
    double volume();
}`}</code>
        </pre>

        <p className="text-gray-700 leading-8 mb-4">
          While a Cube has both area and volume, shapes like Square and
          Rectangle only have area.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class Square implements Shape {

    @Override
    public double area() {
        return side * side;
    }

    @Override
    public double volume() {
        throw new UnsupportedOperationException(
            "Volume not applicable"
        );
    }
}`}</code>
        </pre>

        <p className="text-gray-700 leading-8 mb-4">
          The interface is forcing clients to implement methods they don't need.
        </p>

        <Callout type="warning">
          Fat interfaces often lead to empty implementations, unsupported
          operations, and unnecessary coupling.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>

        <p className="text-gray-700 leading-8 mb-6">
          Instead of creating one large interface, split it into smaller,
          focused interfaces based on client needs.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">TwoDimensionalShape</h3>

            <p className="text-sm text-gray-600">
              Defines behavior required by 2D shapes.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">ThreeDimensionalShape</h3>

            <p className="text-sm text-gray-600">
              Defines behavior required by 3D shapes.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="isp" />

        <Callout type="tip">
          Design interfaces around client needs, not around implementation
          convenience.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Code</h2>

        <h3 className="font-semibold mb-3">ISP Violation</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface Shape {
    double area();
    double volume();
}`}</code>
        </pre>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class Square implements Shape {

    @Override
    public double area() {
        return side * side;
    }

    @Override
    public double volume() {
        throw new UnsupportedOperationException(
            "Volume not applicable"
        );
    }
}`}</code>
        </pre>

        <Callout type="warning">
          Square is forced to implement a method that makes no sense for it.
        </Callout>

        <h3 className="font-semibold mb-3">ISP-Compliant Design</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface TwoDimensionalShape {
    double area();
}

interface ThreeDimensionalShape {
    double area();
    double volume();
}`}</code>
        </pre>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class ISquare
    implements TwoDimensionalShape {}

class IRectangle
    implements TwoDimensionalShape {}

class ICube
    implements ThreeDimensionalShape {}
`}</code>
        </pre>

        <h3 className="font-semibold mb-3">Usage</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`public class ISP_Followed {

    public static void main(String[] args) {

        TwoDimensionalShape square =
            new ISquare(5);

        TwoDimensionalShape rectangle =
            new IRectangle(4, 6);

        ThreeDimensionalShape cube =
            new ICube(3);

        System.out.println(
            "Square Area: " +
            square.area()
        );

        System.out.println(
            "Rectangle Area: " +
            rectangle.area()
        );

        System.out.println(
            "Cube Area: " +
            cube.area()
        );

        System.out.println(
            "Cube Volume: " +
            cube.volume()
        );
    }
}`}</code>
        </pre>

        <Callout type="info">
          Each class now depends only on the operations it actually needs.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Real Meaning of ISP</h2>

        <p className="text-gray-700 leading-8 mb-4">
          ISP is often described as:
        </p>

        <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 mb-4">
          Clients should not be forced to depend upon interfaces they do not
          use.
        </blockquote>

        <p className="text-gray-700 leading-8 mb-4">
          The focus is not on reducing the number of methods. The focus is on
          reducing unnecessary dependencies.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          Large interfaces create ripple effects. A change to one method can
          force unrelated implementations to change even when they don't use
          that behavior.
        </p>

        <Callout type="tip">
          Many ISP violations eventually lead to LSP violations through
          UnsupportedOperationException.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">When to Use / Avoid</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-green-200 bg-green-50 rounded-lg p-5">
            <h3 className="font-semibold text-green-700 mb-3">Use When</h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>Different clients use different methods.</li>
              <li>Interfaces are growing continuously.</li>
              <li>Multiple implementations exist.</li>
              <li>Some implementations ignore certain methods.</li>
            </ul>
          </div>

          <div className="border border-red-200 bg-red-50 rounded-lg p-5">
            <h3 className="font-semibold text-red-700 mb-3">Avoid</h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>Creating tiny interfaces without purpose.</li>
              <li>Splitting interfaces prematurely.</li>
              <li>Over-engineering simple applications.</li>
              <li>Creating abstractions without clients.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Real-World Examples</h2>

        <RealWorldExamples
          examples={[
            {
              name: "Java Collections",
              detail:
                "List, Set, Queue, and Deque expose specialized contracts instead of one giant collection interface.",
            },
            {
              name: "Spring Data",
              detail:
                "CrudRepository, PagingAndSortingRepository, and JpaRepository provide layered capabilities.",
            },
            {
              name: "Payment Systems",
              detail:
                "Refundable payments and recurring payments often belong to separate interfaces.",
            },
            {
              name: "Cloud Services",
              detail:
                "Storage, Messaging, and Compute services expose independent APIs rather than one universal contract.",
            },
          ]}
        />
      </section>

      <hr className="my-8 text-gray-100" />

      <KeyTakeaway>
        Interface Segregation Principle encourages small, focused interfaces
        tailored to client needs. Instead of forcing classes to implement
        irrelevant behavior, split contracts into meaningful abstractions. This
        reduces coupling, improves maintainability, and often prevents future
        LSP violations.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Liskov Substitution Principle",
          pattern: "LSP",
          href: "/lld/solid-principles/lsp",
        }}
        next={{
          title: "Dependency Inversion Principle",
          pattern: "DIP",
          href: "/lld/solid-principles/dip",
        }}
      />
    </div>
  );
}
