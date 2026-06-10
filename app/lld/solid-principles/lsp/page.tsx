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
  title: "LSP - Liskov Substitution Principle",
};

export default function LSPPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-gray-800">
      <PatternMeta pattern="Behavioral" difficulty="Intermediate" />

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Liskov Substitution Principle (LSP)
        </h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/SOLID/LSP"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitHubIcon size={13} />
          View code
        </a>
      </div>

      <Tagline>
        Objects of a subtype should be replaceable with objects of their base
        type without altering the correctness of the program.
      </Tagline>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>

        <p className="text-gray-700 leading-8 mb-4">
          Imagine a banking application where every account is represented using
          a common{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            Account
          </code>{" "}
          abstraction.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          The client assumes every account supports both deposits and
          withdrawals.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface Account {
    void deposit(double amount);
    void withdraw(double amount);
}`}</code>
        </pre>

        <p className="text-gray-700 leading-8 mb-4">
          The problem appears when a{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            FixedTermAccount
          </code>{" "}
          is introduced.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class FixedTermAccount implements Account {

    @Override
    public void withdraw(double amount) {
        throw new UnsupportedOperationException(
            "Withdrawal not allowed!"
        );
    }
}`}</code>
        </pre>

        <p className="text-gray-700 leading-8 mb-4">
          Even though the class implements the interface, it cannot honor the
          contract expected by clients.
        </p>

        <Callout type="warning">
          If a subtype requires special handling, exceptions, or type checks to
          work correctly, LSP has likely been violated.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Wrong Fix</h2>

        <p className="text-gray-700 leading-8 mb-4">
          A common attempt is adding conditional logic in the client.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`if (account instanceof FixedTermAccount) {
    System.out.println(
        "Skipping withdrawal"
    );
}`}</code>
        </pre>

        <p className="text-gray-700 leading-8 mb-4">
          The application now runs, but the substitution problem still exists.
          The client must know concrete types and treat them differently.
        </p>

        <Callout type="warning">
          Replacing polymorphism with instanceof checks is usually a symptom of
          a broken abstraction.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>

        <p className="text-gray-700 leading-8 mb-6">
          Instead of forcing all accounts into the same contract, split the
          abstraction according to actual behavior.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-center">
              DepositOnlyAccount
            </h3>
            <p className="text-sm text-center text-gray-600">
              Supports deposits only.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-center">
              WithdrawableAccount
            </h3>
            <p className="text-sm text-center text-gray-600">
              Supports both deposits and withdrawals.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="lsp" />

        <Callout type="tip">
          The best way to satisfy LSP is often redesigning the abstraction
          rather than patching the implementation.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Code</h2>

        <h3 className="font-semibold mb-3">Violated</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface Account {
    void deposit(double amount);
    void withdraw(double amount);
}

class FixedTermAccount implements Account {

    @Override
    public void withdraw(double amount) {
        throw new UnsupportedOperationException(
            "Withdrawal not allowed"
        );
    }
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3">Wrong Fix</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`if (account instanceof FixedTermAccount) {
    System.out.println(
        "Skipping withdrawal"
    );
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3">Correct Design</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface DepositOnlyAccount {
    void deposit(double amount);
}

interface WithdrawableAccount
    extends DepositOnlyAccount {

    void withdraw(double amount);
}`}</code>
        </pre>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class SavingAccount
    implements WithdrawableAccount {}

class CurrentAccount
    implements WithdrawableAccount {}

class FixedTermAccount
    implements DepositOnlyAccount {}
`}</code>
        </pre>

        <Callout type="info">
          Client code no longer needs exceptions, type checks, or special
          handling.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Understanding Behavioral Contracts
        </h2>

        <p className="text-gray-700 leading-8 mb-4">
          LSP is not about inheritance. It is about preserving behavioral
          contracts.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          A subtype must fulfill all promises made by its parent type.
        </p>

        <p className="text-gray-700 leading-8">
          To achieve this, three important rules must be respected:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Method Rules</h3>
            <p className="text-sm text-gray-600">
              Respect preconditions and postconditions.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Property Rules</h3>
            <p className="text-sm text-gray-600">
              Preserve invariants and state consistency.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Signature Rules</h3>
            <p className="text-sm text-gray-600">
              Respect method arguments, return types, and exceptions.
            </p>
          </div>
        </div>

        <Callout type="tip">
          These rules are what make substitution safe in real-world software.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">When to Use / Avoid</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-green-200 bg-green-50 rounded-lg p-5">
            <h3 className="font-semibold text-green-700 mb-3">Use When</h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>Building inheritance hierarchies.</li>
              <li>Designing interfaces and contracts.</li>
              <li>Using polymorphism extensively.</li>
              <li>Creating reusable frameworks.</li>
            </ul>
          </div>

          <div className="border border-red-200 bg-red-50 rounded-lg p-5">
            <h3 className="font-semibold text-red-700 mb-3">Avoid</h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>Throwing UnsupportedOperationException.</li>
              <li>Using instanceof to bypass behavior.</li>
              <li>Creating fake implementations.</li>
              <li>Forcing incompatible types into one abstraction.</li>
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
                "List implementations can replace one another without changing client code.",
            },
            {
              name: "Payment Providers",
              detail:
                "Stripe, Razorpay, and PayPal should honor the same payment contract.",
            },
            {
              name: "Database Drivers",
              detail:
                "Different JDBC drivers can substitute one another safely.",
            },
            {
              name: "Cloud Storage APIs",
              detail:
                "S3, Azure Blob, and GCS implementations should behave consistently.",
            },
          ]}
        />
      </section>

      <hr className="my-8 text-gray-100" />

      <KeyTakeaway>
        Liskov Substitution Principle ensures that subtypes remain true
        substitutes for their parent types. If client code must detect concrete
        implementations, handle special cases, or expect exceptions, the
        abstraction is likely flawed. Good abstractions make substitution
        invisible.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Open/Closed Principle",
          pattern: "OCP",
          href: "/lld/solid-principles/ocp",
        }}
        next={{
          title: "Interface Segregation Principle",
          pattern: "ISP",
          href: "/lld/solid-principles/isp",
        }}
      />
    </div>
  );
}
