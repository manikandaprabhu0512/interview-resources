import { GitBranch, ArrowUpRight } from "lucide-react";

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

export default function MementoPatternPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <PatternMeta pattern="Behavioral" difficulty="Intermediate" />

      <div className="flex items-center justify-between mt-3">
        <h1 className="text-4xl font-bold">Memento Pattern</h1>

        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Memento_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      <Tagline>
        "Capture an object's state so it can be restored later without exposing
        its internal details."
      </Tagline>

      <hr className="my-8" />

      {/* Problem */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">The problem</h2>

        <p className="text-gray-700 leading-7 mb-4">
          Imagine a database transaction. Multiple records are inserted,
          updated, or deleted. Halfway through the operation, something fails.
        </p>

        <p className="text-gray-700 leading-7 mb-4">
          How do you return the database to its exact previous state?
        </p>

        <p className="text-gray-700 leading-7 mb-4">
          Without a snapshot mechanism, every operation would need custom undo
          logic.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`db.insert("user3", "Saurav");
db.insert("user4", "Manish");
db.insert("user5", "Mani");

throw new RuntimeException();

/*
Now what?

Delete user5?
Delete user4?
Delete user3?

What if updates happened too?
*/`}</code>
        </pre>

        <Callout type="warning">
          Reversing individual operations becomes complicated and error-prone.
          Restoring a previously saved state is often much simpler.
        </Callout>
      </section>

      <hr className="my-8" />

      {/* Solution */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">The solution</h2>

        <p className="text-gray-700 leading-7 mb-6">
          The Memento Pattern captures an object's state before risky changes
          occur. If something goes wrong, the object restores itself from the
          saved snapshot.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Database</h3>
            <p className="text-sm text-gray-600">
              Originator that creates and restores snapshots.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">DatabaseMemento</h3>
            <p className="text-sm text-gray-600">
              Stores a snapshot of database state.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">TransactionManager</h3>
            <p className="text-sm text-gray-600">
              Caretaker that manages backups and rollback.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="memento" />
      </section>

      <hr className="my-8" />

      {/* Code */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">Code</h2>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class DatabaseMemento {

    private Map<String, String> data;

    public DatabaseMemento(
        Map<String, String> dbData
    ) {
        this.data =
            new HashMap<>(dbData);
    }

    public Map<String, String> getState() {
        return data;
    }
}`}</code>
        </pre>

        <Callout type="tip">
          The snapshot stores a copy of the database state. Future changes to
          the database do not affect previously saved backups.
        </Callout>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`public DatabaseMemento createMemento() {
    System.out.println(
      "Creating database backup..."
    );

    return new DatabaseMemento(
      records
    );
}

public void restoreFromMemento(
    DatabaseMemento memento
) {
    records =
      new HashMap<>(
        memento.getState()
      );

    System.out.println(
      "Database restored from backup!"
    );
}`}</code>
        </pre>

        <Callout type="info">
          The Originator is responsible for both creating and restoring
          snapshots.
        </Callout>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class TransactionManager {

    private DatabaseMemento backup;

    public void beginTransaction(
        Database db
    ) {
        backup =
          db.createMemento();
    }

    public void rollbackTransaction(
        Database db
    ) {
        db.restoreFromMemento(
          backup
        );
    }
}`}</code>
        </pre>

        <Callout type="tip">
          The Caretaker never modifies the snapshot. It simply stores and
          supplies it when needed.
        </Callout>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`txManager.beginTransaction(db);

db.insert("user5", "Mani");
db.insert("user6", "Elan");

System.out.println(
  "ERROR: Something went wrong!"
);

txManager.rollbackTransaction(db);

/*
Output

=== BEGIN TRANSACTION ===
Creating database backup...

Inserted: user5 = Mani
Inserted: user6 = Elan

ERROR: Something went wrong!

=== ROLLBACK TRANSACTION ===
Database restored from backup!
Transaction rolled back!
*/`}</code>
        </pre>
      </section>

      <hr className="my-8" />

      {/* Deep Dive */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Deep dive: Undo vs Rollback
        </h2>

        <p className="text-gray-700 leading-7 mb-4">
          Most tutorials explain Memento using a text editor.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`User types text
Save snapshot

User types more text

Undo

Restore snapshot`}</code>
        </pre>

        <p className="text-gray-700 leading-7 mb-4">
          Your implementation applies exactly the same concept to database
          transactions.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`Begin Transaction
Create Snapshot

Insert Records
Update Records

Failure Occurs

Rollback
Restore Snapshot`}</code>
        </pre>

        <Callout type="info">
          Undo systems, rollback mechanisms, save games, version history, and
          checkpoints are all applications of the Memento Pattern.
        </Callout>
      </section>

      <hr className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold mb-6">When to use / avoid</h2>

        <DoAndDont
          use={[
            "Undo functionality",
            "Transaction rollback",
            "Save game systems",
            "Version history",
            "State checkpoints",
          ]}
          avoid={[
            "Object state is extremely large",
            "Snapshot creation is expensive",
            "State rarely changes",
            "Simple recalculation is easier",
          ]}
        />
      </section>

      <hr className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold mb-6">Real-world examples</h2>

        <RealWorldExamples
          examples={[
            {
              name: "Database Transactions",
              detail:
                "Rollback failed operations to a previous consistent state.",
            },
            {
              name: "Text Editors",
              detail: "Undo and redo user edits using saved snapshots.",
            },
            {
              name: "Game Saves",
              detail: "Restore a player's progress from checkpoints.",
            },
            {
              name: "Version Control",
              detail: "Recover previous versions of files and documents.",
            },
          ]}
        />
      </section>

      <hr className="my-8" />

      <KeyTakeaway>
        The Memento Pattern captures and stores snapshots of an object's state
        without exposing its internals. The Originator creates and restores
        snapshots, the Memento stores state, and the Caretaker manages history.
        It shines in undo systems, rollback mechanisms, save points, and any
        workflow that requires safe recovery from failure.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Visitor Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/visitor",
        }}
        next={{
          title: "Pattern Index",
          pattern: "index",
          href: "/patterns",
        }}
      />
    </div>
  );
}
