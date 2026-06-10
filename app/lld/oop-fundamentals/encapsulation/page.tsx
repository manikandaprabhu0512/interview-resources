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
import { ArrowUpRight } from "lucide-react";
import Github from "@/components/icons/GithubIcon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encapsulation",
};

export default function EncapsulationPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold tracking-tight">Encapsulation</h1>

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
        Keep data safe by controlling how it can be accessed and modified.
      </Tagline>

      <hr className="my-8 text-gray-100" />

      {/* Problem */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>

        <p className="text-gray-700 leading-8 mb-4">
          Imagine if anyone could directly modify the speed of a sports car. A
          developer could accidentally set the speed to 500 km/h or a negative
          value, leaving the object in an invalid state.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// Dangerous

mySportsCar.currentSpeed = 500;
mySportsCar.currentSpeed = -100;`}</code>
        </pre>

        <p className="text-gray-700 leading-8 mb-4">
          When internal state is exposed, every consumer becomes responsible for
          maintaining object correctness.
        </p>

        <Callout type="warning">
          Public mutable fields make objects fragile and difficult to maintain
          because anyone can put them into an invalid state.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Solution */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>

        <p className="text-gray-700 leading-8 mb-6">
          Encapsulation bundles data and behavior together while hiding internal
          state behind a controlled public interface.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Private State</h3>

            <p className="text-sm text-gray-600">
              Fields such as speed, gear, and engine state are hidden from
              external consumers.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Controlled Access</h3>

            <p className="text-sm text-gray-600">
              Getters and setters provide safe access while preserving object
              integrity.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="encapsulation" />
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Code */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">Code</h2>

        <h3 className="font-semibold mb-3">Private Fields</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class SportsCar1 {
    private String brand;
    private String model;
    private boolean isEngineOn;
    private int currentSpeed;
    private int currentGear;
    private String tyreCompany;
}`}</code>
        </pre>

        <Callout type="info">
          The private keyword prevents external code from directly modifying
          internal state.
        </Callout>

        <h3 className="font-semibold mb-3 mt-8">Controlled Access</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`public int getSpeed() {
    return currentSpeed;
}

public String getTyreCompany() {
    return tyreCompany;
}

public void setTyreCompany(String tyreCompany) {
    this.tyreCompany = tyreCompany;
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3 mt-8">Usage</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`SportsCar1 mySportsCar =
    new SportsCar1("Ford", "Mustang");

mySportsCar.startEngine();
mySportsCar.accelerate();

System.out.println(
    mySportsCar.getSpeed()
);

mySportsCar.setTyreCompany("CEAT");

/*
Output:

Ford Mustang : Engine starts with a roar!
Ford Mustang : Accelerating to 20 km/h
20
*/`}</code>
        </pre>

        <Callout type="tip">
          Expose behavior instead of data. Let objects manage their own state.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Deep Dive */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Data Hiding vs Encapsulation
        </h2>

        <p className="text-gray-700 leading-8 mb-4">
          These terms are often used interchangeably, but they are not exactly
          the same.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-center">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-3">Concept</th>
                <th className="border border-gray-200 p-3">Meaning</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-gray-200 p-3">Encapsulation</td>
                <td className="border border-gray-200 p-3">
                  Bundling data and behavior together.
                </td>
              </tr>

              <tr>
                <td className="border border-gray-200 p-3">Data Hiding</td>
                <td className="border border-gray-200 p-3">
                  Restricting direct access to internal state.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="info">
          Data hiding is a technique used to achieve encapsulation.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <DoAndDont
        use={[
          "Hide mutable state",
          "Expose behavior through methods",
          "Validate updates before changing state",
          "Protect object invariants",
        ]}
        avoid={[
          "Public mutable fields",
          "Direct state manipulation",
          "Leaking internal implementation",
          "Large numbers of unnecessary setters",
        ]}
      />

      <hr className="my-8 text-gray-100" />

      <RealWorldExamples
        examples={[
          {
            name: "Bank Account",
            detail:
              "Balance cannot be modified directly. Deposits and withdrawals go through controlled methods.",
          },
          {
            name: "Car Dashboard",
            detail:
              "Drivers can view speed but cannot directly modify engine internals.",
          },
          {
            name: "Authentication Systems",
            detail:
              "Passwords are hidden and accessed only through verification methods.",
          },
          {
            name: "E-Commerce Cart",
            detail:
              "Items are added through APIs rather than modifying internal collections directly.",
          },
        ]}
      />

      <hr className="my-8 text-gray-100" />

      <KeyTakeaway>
        Encapsulation protects an object's internal state by hiding data and
        exposing controlled operations. Instead of allowing consumers to
        manipulate fields directly, the object manages its own data through
        well-defined methods, improving safety, maintainability, and
        correctness.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Abstraction",
          pattern: "OOP",
          href: "/lld/oop-fundamentals/abstraction",
        }}
        next={{
          title: "Inheritance",
          pattern: "OOP",
          href: "/lld/oop-fundamentals/inheritance",
        }}
      />
    </div>
  );
}
