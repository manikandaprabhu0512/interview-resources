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
  title: "DIP - Dependency Inversion Principle",
};

export default function DIPPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Dependency Inversion Principle (DIP)
        </h1>

        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/SOLID/DIP"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitHubIcon size={13} />
          View code
        </a>
      </div>

      <Tagline>
        High-level modules should not depend on low-level modules. Both should
        depend on abstractions.
      </Tagline>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>

        <p className="text-gray-700 leading-8 mb-4">
          Imagine building a user management system that stores users in
          different databases.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          A common approach is to let the business logic directly create and use
          database implementations.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class UserService {

    private final MySQLDatabase sqlDb =
        new MySQLDatabase();

    private final MongoDBDatabase mongoDb =
        new MongoDBDatabase();
}`}</code>
        </pre>

        <p className="text-gray-700 leading-8 mb-4">
          The business logic is now tightly coupled to specific database
          technologies.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          Every time a new database is introduced, the service must be modified.
        </p>

        <Callout type="warning">
          When high-level business logic directly depends on concrete
          implementations, changing infrastructure becomes difficult.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>

        <p className="text-gray-700 leading-8 mb-6">
          Introduce an abstraction that represents the behavior the application
          needs instead of depending on concrete database implementations.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Database</h3>
            <p className="text-sm text-gray-600">Common abstraction.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">DMySQLDatabase</h3>
            <p className="text-sm text-gray-600">MySQL implementation.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">DMongoDBDatabase</h3>
            <p className="text-sm text-gray-600">MongoDB implementation.</p>
          </div>
        </div>

        <StructureDiagram pattern="dip" />

        <Callout type="tip">
          The goal of DIP is not dependency injection. The goal is dependency on
          abstractions.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Code</h2>

        <h3 className="font-semibold mb-3">DIP Violation</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class UserService {

    private final MySQLDatabase sqlDb =
        new MySQLDatabase();

    private final MongoDBDatabase mongoDb =
        new MongoDBDatabase();

    public void storeUserToSQL(String user) {
        sqlDb.saveToSQL(user);
    }

    public void storeUserToMongo(String user) {
        mongoDb.saveToMongo(user);
    }
}`}</code>
        </pre>

        <Callout type="warning">
          UserService is tightly coupled to MySQL and MongoDB.
        </Callout>

        <h3 className="font-semibold mb-3">Abstraction</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface Database {
    void save(String data);
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3">Concrete Implementations</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class DMySQLDatabase
    implements Database {

    @Override
    public void save(String data) {
        System.out.println(
            "Executing SQL Query..."
        );
    }
}

class DMongoDBDatabase
    implements Database {

    @Override
    public void save(String data) {
        System.out.println(
            "Executing MongoDB Function..."
        );
    }
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3">High-Level Module</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class DUserService {

    private final Database db;

    public DUserService(
        Database database
    ) {
        this.db = database;
    }

    public void storeUser(String user) {
        db.save(user);
    }
}`}</code>
        </pre>

        <h3 className="font-semibold mb-3">Usage</h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`public class DIP_Followed {

    public static void main(String[] args) {

        Database mysql =
            new DMySQLDatabase();

        Database mongo =
            new DMongoDBDatabase();

        DUserService service1 =
            new DUserService(mysql);

        DUserService service2 =
            new DUserService(mongo);

        service1.storeUser("Aditya");
        service2.storeUser("Rohit");
    }
}

/*
Output:

Executing SQL Query:
INSERT INTO users VALUES('Aditya');

Executing MongoDB Function:
db.users.insert({name:'Rohit'})
*/
`}</code>
        </pre>

        <Callout type="info">
          DUserService works with any Database implementation without requiring
          modifications.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Real Meaning of DIP</h2>

        <p className="text-gray-700 leading-8 mb-4">
          Dependency Inversion Principle is often confused with Dependency
          Injection.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          Dependency Injection is simply one technique used to achieve DIP.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          The actual principle is that business logic should depend on stable
          abstractions rather than volatile implementation details.
        </p>

        <div className="rounded-lg border border-gray-200 p-5 bg-gray-50">
          <div className="space-y-3">
            <p className="font-medium text-center">High-Level Module</p>
            <p className="text-gray-500 text-center">↓</p>
            <p className="font-medium text-center">Abstraction</p>
            <p className="text-gray-500 text-center">↑</p>
            <p className="font-medium text-center">Low-Level Module</p>
          </div>
        </div>

        <Callout type="tip">
          DIP reverses the traditional dependency direction. Both layers depend
          on the same abstraction.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Relationship with OCP</h2>

        <p className="text-gray-700 leading-8 mb-4">
          Open/Closed Principle and Dependency Inversion Principle are closely
          related.
        </p>

        <p className="text-gray-700 leading-8 mb-4">
          OCP tells us that systems should be extensible without modifying
          existing code.
        </p>

        <p className="text-gray-700 leading-8">
          DIP provides the mechanism that makes OCP possible: abstractions.
        </p>

        <Callout type="info">
          Most OCP implementations rely on DIP underneath.
        </Callout>
      </section>

      <hr className="my-8 text-gray-100" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">When to Use / Avoid</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-green-200 bg-green-50 rounded-lg p-5">
            <h3 className="font-semibold text-green-700 mb-3">Use When</h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>Infrastructure may change over time.</li>
              <li>Multiple implementations exist.</li>
              <li>Unit testing is important.</li>
              <li>Business logic must remain independent.</li>
            </ul>
          </div>

          <div className="border border-red-200 bg-red-50 rounded-lg p-5">
            <h3 className="font-semibold text-red-700 mb-3">Avoid</h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>Creating abstractions for one-time code.</li>
              <li>Adding interfaces without a clear benefit.</li>
              <li>Over-engineering simple applications.</li>
              <li>Introducing unnecessary layers.</li>
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
              name: "Spring Boot",
              detail:
                "Services depend on repository interfaces instead of database implementations.",
            },
            {
              name: "Logging Frameworks",
              detail:
                "Applications depend on logging abstractions rather than specific loggers.",
            },
            {
              name: "Cloud Providers",
              detail:
                "Applications can switch between AWS, Azure, and GCP through common abstractions.",
            },
            {
              name: "Payment Gateways",
              detail:
                "Business logic depends on a PaymentGateway interface instead of Stripe or Razorpay directly.",
            },
          ]}
        />
      </section>

      <hr className="my-8 text-gray-100" />

      <KeyTakeaway>
        Dependency Inversion Principle reduces coupling by making both
        high-level and low-level modules depend on abstractions. Instead of
        hardcoding implementation details into business logic, stable contracts
        become the foundation of the system. This improves flexibility,
        testability, and maintainability.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Interface Segregation Principle",
          pattern: "ISP",
          href: "/lld/solid-principles/isp",
        }}
        next={{
          title: "Design Patterns",
          pattern: "Patterns",
          href: "/lld/patterns",
        }}
      />
    </div>
  );
}
