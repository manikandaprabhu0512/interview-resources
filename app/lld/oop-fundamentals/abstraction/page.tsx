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
import Github from "@/components/icons/GithubIcon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abstraction",
};

export default function AbstractionPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold tracking-tight">Abstraction</h1>

        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/OOPS"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <Github size={13} />
          View code
        </a>
      </div>

      <Tagline>Show what an object can do, not how it does it.</Tagline>

      <hr className="my-8 text-gray-100" />

      {/* Problem */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>

        <p className="text-gray-700 leading-8 mb-4">
          Imagine driving a sports car. You can start the engine, shift gears,
          accelerate, brake, and stop the engine. As a driver, you use these
          capabilities every day.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          What you do not need to know is how fuel is injected, how spark plugs
          ignite combustion, or how the transmission moves gears internally.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          Without abstraction, every consumer of a class would need to
          understand implementation details. Systems become tightly coupled and
          difficult to evolve.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// Driver only cares about available actions

car.startEngine();
car.shiftGear(2);
car.accelerate();
car.brake();
car.stopEngine();`}</code>
        </pre>

        <Callout type="warning">
          If consumers depend on implementation details instead of capabilities,
          even small internal changes can break large portions of the system.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Solution */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>

        <p className="text-gray-700 leading-8 mb-6">
          Abstraction exposes only the behavior that users need. In this
          example, the{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            Car
          </code>{" "}
          interface defines what a car can do while hiding how those operations
          are implemented.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Car Interface</h3>

            <p className="text-sm text-gray-600">
              Defines available operations such as starting the engine, shifting
              gears, accelerating and braking.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-2">SportsCar</h3>

            <p className="text-sm text-gray-600">
              Implements the behavior while hiding all internal implementation
              details.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="abstraction" />
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Code */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">Code</h2>

        <h3 className="font-semibold mb-3">Interface</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface Car {
    void startEngine();
    void shiftGear(int gear);
    void accelerate();
    void brake();
    void stopEngine();
}`}</code>
        </pre>

        <Callout type="info">
          The interface defines capabilities. It does not define implementation
          details.
        </Callout>

        <h3 className="font-semibold mb-3 mt-8">Concrete Implementation</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class SportsCar implements Car {

    @Override
    public void startEngine() {
        System.out.println("Engine started");
    }

    @Override
    public void shiftGear(int gear) {
        System.out.println("Gear shifted to " + gear);
    }

    @Override
    public void accelerate() {
        System.out.println("Accelerating...");
    }

    @Override
    public void brake() {
        System.out.println("Braking...");
    }

    @Override
    public void stopEngine() {
        System.out.println("Engine stopped");
    }
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3 mt-8">Usage</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`SportsCar car = new SportsCar();

car.startEngine();
car.shiftGear(2);
car.accelerate();
car.brake();
car.stopEngine();

/*
Output:
Engine started
Gear shifted to 2
Accelerating...
Braking...
Engine stopped
*/`}</code>
        </pre>

        <Callout type="tip">
          Good abstractions are stable. Internal implementations can change
          without affecting users of the abstraction.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Deep Dive */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Interface vs Implementation
        </h2>

        <p className="text-gray-700 leading-8 mb-4">
          The key idea behind abstraction is separating contract from
          implementation.
        </p>

        <div className="rounded-xl border border-gray-200 p-5">
          <ul className="space-y-3 text-gray-700">
            <li>Interface → What operations are available.</li>
            <li>Implementation → How those operations work internally.</li>
            <li>Users depend on the contract, not the implementation.</li>
          </ul>
        </div>
      </section>

      <hr className="my-8 text-gray-100" />

      <DoAndDont
        use={[
          "Hide implementation details",
          "Expose only required behavior",
          "Design stable APIs",
          "Reduce coupling between modules",
        ]}
        avoid={[
          "Exposing internal state",
          "Leaking implementation details",
          "Creating overly complex interfaces",
          "Forcing consumers to know internals",
        ]}
      />

      <hr className="my-8 text-gray-100" />

      <RealWorldExamples
        examples={[
          {
            name: "Car Dashboard",
            detail:
              "Drivers interact with pedals and steering without knowing engine internals.",
          },
          {
            name: "ATM Machine",
            detail:
              "Customers withdraw money without understanding banking infrastructure.",
          },
          {
            name: "Database Drivers",
            detail:
              "Applications execute queries without knowing low-level communication protocols.",
          },
          {
            name: "Cloud SDKs",
            detail:
              "Developers call APIs without managing distributed infrastructure.",
          },
        ]}
      />

      <hr className="my-8 text-gray-100" />

      <KeyTakeaway>
        Abstraction focuses on exposing behavior while hiding implementation
        details. The Car interface defines what a car can do, while SportsCar
        decides how those operations work. This separation reduces coupling,
        improves maintainability, and creates systems that are easier to evolve.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "OOP Overview",
          pattern: "Overview",
          href: "/lld/oop-fundamentals",
        }}
        next={{
          title: "Encapsulation",
          pattern: "OOP",
          href: "/lld/oop-fundamentals/encapsulation",
        }}
      />
    </div>
  );
}
