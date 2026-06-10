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
  title: "SRP - Single Responsibility Principle",
};

export default function SRPPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Single Responsibility Principle (SRP)
        </h1>

        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/SOLID/SRP"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitHubIcon size={13} />
          View code
        </a>
      </div>

      <Tagline>A class should have only one reason to change.</Tagline>

      <hr className="my-8 text-gray-100" />

      {/* Problem */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>

        <p className="text-gray-700 leading-8 mb-4">
          Imagine you're building an e-commerce application. A{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            ShoppingCart
          </code>{" "}
          class initially calculates totals. Over time, requirements grow and
          the same class starts printing invoices and saving data to a database.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          The class now has multiple responsibilities and multiple reasons to
          change:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
          <li>Business rules change → update cart calculations.</li>
          <li>Invoice format changes → update printing logic.</li>
          <li>Database changes → update persistence logic.</li>
        </ul>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class ShoppingCart {

    public double calculateTotal() {
        ...
    }

    public void printInvoice() {
        ...
    }

    public void saveToDatabase() {
        ...
    }
}`}</code>
        </pre>

        <Callout type="warning">
          Multiple responsibilities create tight coupling. A change in one area
          can unintentionally affect unrelated functionality.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Solution */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>

        <p className="text-gray-700 leading-8 mb-6">
          SRP suggests separating responsibilities into dedicated classes. Each
          class should focus on a single concern and therefore have only one
          reason to change.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">ShoppingCart</h3>
            <p className="text-sm text-gray-600">
              Handles cart operations and business rules.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">ShoppingCartPrinter</h3>
            <p className="text-sm text-gray-600">
              Responsible only for invoice generation.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">ShoppingCartStorage</h3>
            <p className="text-sm text-gray-600">
              Responsible only for persistence.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="srp" />

        <Callout type="tip">
          Responsibilities don't mean methods. They mean reasons for change.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Code */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Code</h2>

        <h3 className="font-semibold mb-3">Domain Model</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class Product {
    public String name;
    public double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3">Business Logic</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class ShoppingCart {
    private List<Product> products = new ArrayList<>();

    public void addProduct(Product p) {
        products.add(p);
    }

    public double calculateTotal() {
        double total = 0;

        for (Product p : products) {
            total += p.price;
        }

        return total;
    }
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3">Presentation Logic</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class ShoppingCartPrinter {

    private ShoppingCart cart;

    public ShoppingCartPrinter(ShoppingCart cart) {
        this.cart = cart;
    }

    public void printInvoice() {
        System.out.println("Shopping Cart Invoice:");
        System.out.println("Total: Rs " + cart.calculateTotal());
    }
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3">Persistence Logic</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class ShoppingCartStorage {

    private ShoppingCart cart;

    public ShoppingCartStorage(ShoppingCart cart) {
        this.cart = cart;
    }

    public void saveToDatabase() {
        System.out.println(
            "Saving shopping cart to database..."
        );
    }
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3">Usage</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`public class SRP_Followed {

    public static void main(String[] args) {

        ShoppingCart cart = new ShoppingCart();

        cart.addProduct(
            new Product("Laptop", 50000)
        );

        cart.addProduct(
            new Product("Mouse", 2000)
        );

        ShoppingCartPrinter printer =
            new ShoppingCartPrinter(cart);

        printer.printInvoice();

        ShoppingCartStorage db =
            new ShoppingCartStorage(cart);

        db.saveToDatabase();
    }
}

/*
Output:

Shopping Cart Invoice:
Laptop - Rs 50000.0
Mouse - Rs 2000.0
Total: Rs 52000.0

Saving shopping cart to database...
*/
`}</code>
        </pre>

        <Callout type="info">
          The cart logic remains untouched even if invoice formatting or
          database technology changes.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Deep Dive */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          The Most Common Misunderstanding
        </h2>

        <p className="text-gray-700 leading-8 mb-4">
          Many developers interpret SRP as:
        </p>

        <blockquote className="border-l-4 border-red-400 pl-4 italic text-gray-600 mb-4">
          "A class should do only one thing."
        </blockquote>

        <p className="text-gray-700 leading-8 mb-4">
          That's not the actual principle.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          A class can have many methods and still follow SRP if those methods
          support the same responsibility.
        </p>

        <p className="text-gray-700 leading-8">The real definition is:</p>

        <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 mt-4">
          A class should have only one reason to change.
        </blockquote>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Use / Avoid */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">When SRP Helps Most</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-green-200 bg-green-50 rounded-lg p-5">
            <h3 className="font-semibold text-green-700 mb-3">
              Apply SRP When
            </h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>Business logic and infrastructure mix together.</li>
              <li>Classes grow continuously over time.</li>
              <li>Code becomes difficult to test.</li>
              <li>Different teams own different concerns.</li>
            </ul>
          </div>

          <div className="border border-red-200 bg-red-50 rounded-lg p-5">
            <h3 className="font-semibold text-red-700 mb-3">
              Avoid Overdoing It
            </h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>Creating dozens of tiny classes unnecessarily.</li>
              <li>Splitting logic with the same reason to change.</li>
              <li>Adding abstraction without real complexity.</li>
              <li>Turning simple code into class explosions.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-8 text-gray-100" />

      {/* Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Real-World Examples</h2>

        <RealWorldExamples
          examples={[
            {
              name: "Spring Boot",
              detail:
                "Controllers, Services, and Repositories each handle a separate responsibility.",
            },
            {
              name: "React Applications",
              detail:
                "UI components are separated from API services and state management.",
            },
            {
              name: "Logging Systems",
              detail:
                "Logging is extracted into dedicated logger classes instead of being embedded everywhere.",
            },
            {
              name: "Notification Platforms",
              detail:
                "Email, SMS, and Push notifications are managed by specialized services.",
            },
          ]}
        />
      </section>

      <hr className="my-8 text-gray-100" />

      <KeyTakeaway>
        Single Responsibility Principle is about managing change, not counting
        methods. A class should have only one reason to change. By separating
        business logic, presentation logic, and persistence logic into dedicated
        classes, software becomes easier to maintain, test, and extend.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "SOLID Principles",
          pattern: "SOLID",
          href: "/lld/solid-principles",
        }}
        next={{
          title: "Open/Closed Principle",
          pattern: "OCP",
          href: "/lld/solid-principles/ocp",
        }}
      />
    </div>
  );
}
