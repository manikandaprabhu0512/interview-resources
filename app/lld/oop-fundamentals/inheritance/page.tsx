import {
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
  title: "Inheritance",
};

export default function InheritancePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold tracking-tight">Inheritance</h1>

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

      <Tagline>
        Build specialized classes on top of shared behavior instead of rewriting
        the same code repeatedly.
      </Tagline>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>

        <p className="text-gray-700 leading-8 mb-4">
          Imagine building multiple car types: Manual Cars, Electric Cars,
          Hybrid Cars, Sports Cars, and SUVs.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          Every vehicle needs common functionality such as:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
          <li>Starting the engine</li>
          <li>Stopping the engine</li>
          <li>Accelerating</li>
          <li>Braking</li>
        </ul>

        <p className="text-gray-700 leading-8 mb-4">
          Without inheritance, these methods would be duplicated in every car
          class.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class ManualCar {
   startEngine();
   stopEngine();
   accelerate();
   brake();
}

class ElectricCar {
   startEngine();
   stopEngine();
   accelerate();
   brake();
}`}</code>
        </pre>

        <Callout type="warning">
          Duplicate code increases maintenance cost because every change must be
          repeated across multiple classes.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>

        <p className="text-gray-700 leading-8 mb-6">
          Inheritance extracts common functionality into a parent class. Child
          classes inherit those capabilities and add behavior specific to
          themselves.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-2">ICar</h3>
            <p className="text-sm text-gray-600">
              Contains behavior shared by all vehicles.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-2">ManualCar</h3>
            <p className="text-sm text-gray-600">
              Adds gear shifting functionality.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-2">ElectricCar</h3>
            <p className="text-sm text-gray-600">
              Adds battery management functionality.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="inheritance" />
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Code</h2>

        <h3 className="font-semibold mb-3">Parent Class</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class ICar {
    protected String brand;
    protected String model;
    protected boolean isEngineOn;
    protected int currentSpeed;

    public void startEngine() { ... }

    public void stopEngine() { ... }

    public void accelerate() { ... }

    public void brake() { ... }
}`}</code>
        </pre>

        <Callout type="info">
          Protected members are accessible inside child classes while remaining
          hidden from external consumers.
        </Callout>

        <h3 className="font-semibold mb-3 mt-8">ManualCar</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class ManualCar extends ICar {

    private int currentGear;

    public void shiftGear(int gear) {
        this.currentGear = gear;
    }
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3 mt-8">ElectricCar</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class ElectricCar extends ICar {

    private int batteryLevel;

    public void chargeBattery() {
        batteryLevel = 100;
    }
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3 mt-8">Usage</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`ManualCar myManualCar =
    new ManualCar("Suzuki", "WagonR");

myManualCar.startEngine();
myManualCar.shiftGear(1);
myManualCar.accelerate();

ElectricCar myElectricCar =
    new ElectricCar("Tesla", "Model S");

myElectricCar.chargeBattery();
myElectricCar.startEngine();
myElectricCar.accelerate();

/*
Output:

Suzuki WagonR : Engine started.
Suzuki WagonR : Shifted to gear 1
Suzuki WagonR : Accelerating to 20 km/h

Tesla Model S : Battery is charged to 100%
Tesla Model S : Engine started.
Tesla Model S : Accelerating to 20 km/h
*/`}</code>
        </pre>

        <Callout type="tip">
          Inheritance models an "is-a" relationship. A ManualCar is a Car. An
          ElectricCar is also a Car.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Composition vs Inheritance
        </h2>

        <p className="text-gray-700 leading-8 mb-4">
          Inheritance is powerful, but it should only be used when a genuine
          "is-a" relationship exists.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-center">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-3">Use Inheritance</th>
                <th className="border border-gray-200 p-3">Use Composition</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-gray-200 p-3">
                  ManualCar is a Car
                </td>
                <td className="border border-gray-200 p-3">
                  Car has an Engine
                </td>
              </tr>

              <tr>
                <td className="border border-gray-200 p-3">
                  ElectricCar is a Car
                </td>
                <td className="border border-gray-200 p-3">
                  Car has a Battery
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="warning">
          Prefer composition when classes are connected through ownership rather
          than specialization.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <DoAndDont
        use={[
          "Share common behavior",
          "Model is-a relationships",
          "Reduce code duplication",
          "Create clear class hierarchies",
        ]}
        avoid={[
          "Deep inheritance chains",
          "Forcing unrelated classes together",
          "Using inheritance for code reuse alone",
          "Replacing composition unnecessarily",
        ]}
      />

      <hr className="my-8 text-gray-100" />

      <RealWorldExamples
        examples={[
          {
            name: "Vehicle Hierarchy",
            detail:
              "Car, Truck, and Bike inherit common vehicle functionality.",
          },
          {
            name: "UI Components",
            detail:
              "Button and TextField inherit behavior from a common UI component.",
          },
          {
            name: "Game Characters",
            detail: "Warrior and Mage inherit shared character capabilities.",
          },
          {
            name: "Employee Systems",
            detail: "Manager and Developer inherit from Employee.",
          },
        ]}
      />

      <hr className="my-8 text-gray-100" />

      <KeyTakeaway>
        Inheritance enables child classes to reuse and extend behavior from a
        parent class. It reduces duplication and establishes natural "is-a"
        relationships, but should be used carefully. Modern software often
        favors composition over deep inheritance hierarchies.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Encapsulation",
          pattern: "OOP",
          href: "/lld/oop-fundamentals/encapsulation",
        }}
        next={{
          title: "Polymorphism",
          pattern: "OOP",
          href: "/lld/oop-fundamentals/polymorphism",
        }}
      />
    </div>
  );
}
