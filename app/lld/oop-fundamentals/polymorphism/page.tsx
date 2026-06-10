import {
  Tagline,
  Callout,
  StructureDiagram,
  RealWorldExamples,
  KeyTakeaway,
} from "@/components/pattern";
import { PatternNav } from "@/components/patternnav/PatternNav";
import Github from "@/components/icons/GithubIcon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polymorphism",
};

export default function PolymorphismPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold tracking-tight">Polymorphism</h1>

        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/OOPS/Polymorphism"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <Github size={13} />
          View code
        </a>
      </div>

      <Tagline>One interface. Multiple implementations.</Tagline>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">What is Polymorphism?</h2>

        <p className="text-gray-700 leading-8 mb-4">
          Polymorphism means "many forms". It allows the same action to produce
          different behavior depending on the object involved.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          A single method call can execute completely different logic depending
          on which implementation receives the request.
        </p>

        <Callout type="info">
          Polymorphism is the foundation of extensible software and many design
          patterns such as Strategy, Command, and Observer.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Types of Polymorphism</h2>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Static Polymorphism</h3>

            <p className="text-sm text-gray-600">
              Achieved through overloading. Resolved during compilation.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Dynamic Polymorphism</h3>

            <p className="text-sm text-gray-600">
              Achieved through overriding. Resolved during runtime.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="polymorphism" />
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Static Polymorphism (Overloading)
        </h2>

        <p className="text-gray-700 leading-8 mb-4">
          Static polymorphism is resolved by the compiler. The compiler
          determines which constructor or method to invoke based on the
          parameters provided.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`ManualCar car1 =
    new ManualCar("Suzuki", "WagonR");

ManualCar car2 =
    new ManualCar("Toyota", "Innova", 6);

/*
Displaying normal model of Manual Car
Displaying special model of Manual Car
*/`}</code>
        </pre>

        <Callout type="tip">
          Overloading means the same operation can behave differently depending
          on the input parameters.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Dynamic Polymorphism (Overriding)
        </h2>

        <p className="text-gray-700 leading-8 mb-4">
          Dynamic polymorphism is resolved at runtime. A parent reference can
          point to different child objects and invoke different implementations.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`DCar manualCar =
    new DManualCar("Suzuki", "WagonR");

DCar electricCar =
    new DElectricCar("Tesla", "Model S");

manualCar.accelerate();
electricCar.accelerate();

/*
Manual Car acceleration logic

Electric Car acceleration logic
*/`}</code>
        </pre>

        <Callout type="info">
          Same reference type. Different runtime behavior.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Static + Dynamic Together
        </h2>

        <p className="text-gray-700 leading-8 mb-4">
          Real applications often use both forms simultaneously.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`accelerate();
accelerate(int speed);

// Overloading

@Override
public void accelerate()

// Overriding`}</code>
        </pre>

        <Callout type="tip">
          Overloading and overriding are complementary rather than competing
          techniques.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Static vs Dynamic</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded text-center">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-3">Feature</th>
                <th className="border border-gray-200 p-3">Static</th>
                <th className="border border-gray-200 p-3">Dynamic</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-gray-200 p-3">Resolution</td>
                <td className="border border-gray-200 p-3">Compile Time</td>
                <td className="border border-gray-200 p-3">Runtime</td>
              </tr>

              <tr>
                <td className="border border-gray-200 p-3">Technique</td>
                <td className="border border-gray-200 p-3">Overloading</td>
                <td className="border border-gray-200 p-3">Overriding</td>
              </tr>

              <tr>
                <td className="border border-gray-200 p-3">Inheritance</td>
                <td className="border border-gray-200 p-3">Not Required</td>
                <td className="border border-gray-200 p-3">Required</td>
              </tr>

              <tr>
                <td className="border border-gray-200 p-3">Flexibility</td>
                <td className="border border-gray-200 p-3">Lower</td>
                <td className="border border-gray-200 p-3">Higher</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-8 text-gray-100" />

      <RealWorldExamples
        examples={[
          {
            name: "Payment Gateways",
            detail:
              "UPI, Credit Card, and PayPal all process payments differently.",
          },
          {
            name: "Notification Systems",
            detail:
              "Email, SMS, and Push notifications implement the same send action.",
          },
          {
            name: "Vehicles",
            detail: "Manual and Electric cars accelerate differently.",
          },
          {
            name: "Drawing Tools",
            detail: "Circle, Rectangle, and Triangle each implement draw().",
          },
        ]}
      />

      <hr className="my-8 text-gray-100" />

      <KeyTakeaway>
        Polymorphism enables a single interface to represent multiple
        implementations. Static polymorphism uses overloading and is resolved
        during compilation, while dynamic polymorphism uses overriding and is
        resolved during runtime. Together they make software flexible,
        extensible, and maintainable.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Inheritance",
          pattern: "OOP",
          href: "/lld/oop-fundamentals/inheritance",
        }}
        next={{
          title: "SOLID Principles",
          pattern: "SOLID",
          href: "/lld/solid-principles",
        }}
      />
    </div>
  );
}
