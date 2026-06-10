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
import { GitBranch, ArrowUpRight } from "lucide-react";

export default function StatePatternPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      {/* 1. PatternMeta */}
      <PatternMeta pattern="Behavioral" difficulty="Intermediate" />

      {/* 2. Title + GitHub */}
      <div className="flex items-start justify-between mt-4 mb-3">
        <h1 className="text-3xl font-bold tracking-tight">State Pattern</h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/State_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      {/* 3. Tagline */}
      <Tagline>
        Let an object rewrite its own behavior by swapping what's inside it —
        not by checking what it is.
      </Tagline>

      <hr className="my-8" />

      {/* 5. The Problem */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The problem</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          A vending machine has four distinct modes: waiting for a coin, coin
          inserted, dispensing an item, and sold out. Every operation —{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            insertCoin
          </code>
          ,{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            selectItem
          </code>
          ,{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            dispense
          </code>
          ,{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            returnCoin
          </code>{" "}
          — behaves differently depending on the current mode. The naive
          approach stuffs all of that logic into one class with a state enum and
          cascading conditionals:
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class VendingMachine {
    enum State { NO_COIN, HAS_COIN, DISPENSING, SOLD_OUT }
    State state = State.NO_COIN;

    void insertCoin(int coin) {
        if (state == State.NO_COIN) {
            insertedCoins = coin;
            state = State.HAS_COIN;
        } else if (state == State.HAS_COIN) {
            insertedCoins += coin;
        } else if (state == State.SOLD_OUT) {
            System.out.println("Sold out. Returning coin.");
        } else if (state == State.DISPENSING) {
            System.out.println("Dispensing. Please wait.");
        }
        // ...same sprawl for selectItem(), dispense(), returnCoin()
    }
}`}</code>
        </pre>

        <Callout type="warning">
          Every new state or new operation forces you to touch every method.
          Four states × five operations = 20 conditional branches — all in one
          class. Adding a "low stock" state means editing every single method
          again.
        </Callout>
      </section>

      <hr className="my-8" />

      {/* 7. The Solution */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The solution</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Extract each state into its own class that implements a common{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            VendingState
          </code>{" "}
          interface. The context —{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            VendingMachine
          </code>{" "}
          — holds a reference to the <em>current</em> state and delegates every
          operation to it. Each state decides its own response and which state
          to transition to next.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {[
            {
              name: "VendingState",
              role: "Interface",
              desc: "Declares all five operations: insertCoin, selectItem, dispense, returnCoin, refill.",
            },
            {
              name: "VendingMachine",
              role: "Context",
              desc: "Holds the current state. Delegates calls to it and updates itself with the returned next state.",
            },
            {
              name: "NoCoinState",
              role: "Concrete State",
              desc: "Only insertCoin() and refill() make sense here. All other calls print a prompt and stay put.",
            },
            {
              name: "HasCoinState",
              role: "Concrete State",
              desc: "Handles balance checks. selectItem() transitions to DispenseState when funds are sufficient.",
            },
            {
              name: "DispenseState",
              role: "Concrete State",
              desc: "dispense() decrements stock and transitions to NoCoinState or SoldOutState.",
            },
            {
              name: "SoldOutState",
              role: "Concrete State",
              desc: "All operations reject input except refill(), which restores NoCoinState.",
            },
          ].map(({ name, role, desc }) => (
            <div key={name} className="border border-gray-200 rounded-lg p-4">
              <div className="text-xs text-gray-400 mb-0.5">{role}</div>
              <div className="font-semibold text-sm mb-1">{name}</div>
              <div className="text-xs text-gray-600 leading-relaxed">
                {desc}
              </div>
            </div>
          ))}
        </div>

        <StructureDiagram pattern="state" />
      </section>

      <hr className="my-8" />

      {/* 9. Code */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Code</h2>

        <p className="text-sm text-gray-600 mb-2 font-medium">
          1. The State interface
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface VendingState {
    // Each method returns the NEXT state — the machine updates itself
    VendingState insertCoin(VendingMachine machine, int coin);
    VendingState selectItem(VendingMachine machine);
    VendingState dispense(VendingMachine machine);
    VendingState returnCoin(VendingMachine machine);
    VendingState refill(VendingMachine machine, int quantity);
    String getStateName();
}`}</code>
        </pre>

        <Callout type="tip">
          Returning the next state from every method is a clean trick: the
          machine just does{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            currentState = currentState.insertCoin(this, coin)
          </code>
          . No switch, no setter — the state machine drives itself.
        </Callout>

        <p className="text-sm text-gray-600 mb-2 mt-6 font-medium">
          2. The Context — VendingMachine
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class VendingMachine {
    private VendingState currentState;
    private int itemCount;
    private int itemPrice;
    private int insertedCoins;

    // All four concrete states created once and reused — no GC churn
    private VendingState noCoinState   = new NoCoinState();
    private VendingState hasCoinState  = new HasCoinState();
    private VendingState dispenseState = new DispenseState();
    private VendingState soldOutState  = new SoldOutState();

    public VendingMachine(int itemCount, int itemPrice) {
        this.itemCount  = itemCount;
        this.itemPrice  = itemPrice;
        currentState = (itemCount > 0) ? noCoinState : soldOutState;
    }

    // Every public method is just one line — pure delegation
    public void insertCoin(int coin) { currentState = currentState.insertCoin(this, coin); }
    public void selectItem()         { currentState = currentState.selectItem(this); }
    public void dispense()           { currentState = currentState.dispense(this); }
    public void returnCoin()         { currentState = currentState.returnCoin(this); }
    public void refill(int quantity) { currentState = currentState.refill(this, quantity); }
}`}</code>
        </pre>

        <p className="text-sm text-gray-600 mb-2 mt-6 font-medium">
          3. Concrete states
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// NoCoinState — machine is idle, waiting for payment
class NoCoinState implements VendingState {
    public VendingState insertCoin(VendingMachine machine, int coin) {
        machine.setInsertedCoin(coin);
        System.out.println("Coin inserted. Balance: Rs " + coin);
        return machine.getHasCoinState(); // → HasCoinState
    }
    public VendingState selectItem(VendingMachine machine) {
        System.out.println("Please insert coin first!");
        return machine.getNoCoinState(); // stay
    }
    public VendingState refill(VendingMachine machine, int quantity) {
        machine.incrementItemCount(quantity);
        System.out.println("Items refilled.");
        return machine.getNoCoinState(); // stay
    }
    // dispense() and returnCoin() also stay — nothing to act on
}

// HasCoinState — money is in, waiting for selection
class HasCoinState implements VendingState {
    public VendingState selectItem(VendingMachine machine) {
        if (machine.getInsertedCoin() >= machine.getPrice()) {
            int change = machine.getInsertedCoin() - machine.getPrice();
            if (change > 0) System.out.println("Change returned: Rs " + change);
            machine.setInsertedCoin(0);
            return machine.getDispenseState(); // → DispenseState
        }
        int needed = machine.getPrice() - machine.getInsertedCoin();
        System.out.println("Insufficient funds. Need Rs " + needed + " more.");
        return machine.getHasCoinState(); // stay
    }
    public VendingState returnCoin(VendingMachine machine) {
        System.out.println("Coin returned: Rs " + machine.getInsertedCoin());
        machine.setInsertedCoin(0);
        return machine.getNoCoinState(); // → NoCoinState
    }
}

// DispenseState — item is being vended, no interruptions
class DispenseState implements VendingState {
    public VendingState dispense(VendingMachine machine) {
        System.out.println("Item dispensed!");
        machine.decrementItemCount();
        if (machine.getItemCount() > 0) return machine.getNoCoinState(); // → NoCoinState
        System.out.println("Machine is now sold out!");
        return machine.getSoldOutState(); // → SoldOutState
    }
    // insertCoin(), selectItem(), returnCoin() all bounce back — machine is busy
}

// SoldOutState — locked until refilled
class SoldOutState implements VendingState {
    public VendingState insertCoin(VendingMachine machine, int coin) {
        System.out.println("Sold out. Coin returned: Rs " + coin);
        return machine.getSoldOutState(); // stay
    }
    public VendingState refill(VendingMachine machine, int quantity) {
        machine.incrementItemCount(quantity);
        System.out.println("Items refilled.");
        return machine.getNoCoinState(); // → NoCoinState
    }
    // All others stay in SoldOutState
}`}</code>
        </pre>

        <p className="text-sm text-gray-600 mb-2 mt-6 font-medium">
          4. Usage + output
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`VendingMachine machine = new VendingMachine(2, 20); // 2 items, Rs 20 each

machine.selectItem();   // "Please insert coin first!"
machine.insertCoin(10); // "Coin inserted. Balance: Rs 10"
machine.selectItem();   // "Insufficient funds. Need Rs 10 more."
machine.insertCoin(10); // "Additional coin inserted. Balance: Rs 20"
machine.selectItem();   // "Item selected. Dispensing..."
machine.dispense();     // "Item dispensed!"  — itemCount → 1

machine.insertCoin(20);
machine.selectItem();
machine.dispense();     // "Item dispensed!" → "Machine is now sold out!"

machine.insertCoin(5);  // "Sold out. Coin returned: Rs 5"
machine.refill(2);      // "Items refilled."  — back to NoCoinState`}</code>
        </pre>
      </section>

      <hr className="my-8" />

      {/* 11. Deep dive — State Transition Table */}
      <section>
        <h2 className="text-xl font-semibold mb-3">State transition table</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          One of the clearest ways to reason about a state machine is a
          transition table — rows are current states, columns are actions, and
          each cell is the resulting next state (or ✗ for a no-op).
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">
                  State ╲ Action
                </th>
                {[
                  "insertCoin",
                  "selectItem",
                  "dispense",
                  "returnCoin",
                  "refill",
                ].map((a) => (
                  <th
                    key={a}
                    className="border border-gray-200 px-3 py-2 text-center font-semibold text-gray-700"
                  >
                    {a}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "NoCoinState",
                  "HasCoinState",
                  "✗ (stay)",
                  "✗ (stay)",
                  "✗ (stay)",
                  "NoCoinState",
                ],
                [
                  "HasCoinState",
                  "HasCoinState",
                  "DispenseState",
                  "✗ (stay)",
                  "NoCoinState",
                  "✗ (stay)",
                ],
                [
                  "DispenseState",
                  "✗ (stay)",
                  "✗ (stay)",
                  "NoCoinState /\nSoldOutState",
                  "✗ (stay)",
                  "✗ (stay)",
                ],
                [
                  "SoldOutState",
                  "✗ (stay)",
                  "✗ (stay)",
                  "✗ (stay)",
                  "✗ (stay)",
                  "NoCoinState",
                ],
              ].map(([state, ...cells]) => (
                <tr key={state} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium text-gray-800">
                    {state}
                  </td>
                  {cells.map((cell, i) => (
                    <td
                      key={i}
                      className={`border border-gray-200 px-3 py-2 text-center whitespace-pre-line ${
                        cell.startsWith("✗")
                          ? "text-gray-400"
                          : "text-green-700 font-medium"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout type="info">
          This table is also the spec you'd write before coding. If you can fill
          every cell, you've fully defined the state machine — the code almost
          writes itself.
        </Callout>
      </section>

      <hr className="my-8" />

      {/* 13. When to use / avoid */}
      <DoAndDont
        use={[
          "An object's behavior depends entirely on its current state and must change at runtime",
          "You have many conditional branches checking the same state variable across multiple methods",
          "State transitions are well-defined and can be captured in a transition table",
          "You want to add new states later without modifying existing ones (Open/Closed Principle)",
          "The lifecycle of a workflow or process has clear, discrete phases (order status, traffic light, auth flow)",
        ]}
        avoid={[
          "The object has only two states and the logic is genuinely simple — an enum + one if/else is clearer",
          "States don't share any behavior overlap — you'll end up with mostly-empty interface implementations",
          "The state transitions are highly dynamic and data-driven — a state machine engine or table-driven approach scales better",
          "You need to serialize or persist state — concrete state objects require additional marshalling work",
        ]}
      />

      <hr className="my-8" />

      {/* 15. Real-world examples */}
      <RealWorldExamples
        examples={[
          {
            name: "TCP Connection",
            detail:
              "CLOSED → SYN_SENT → ESTABLISHED → FIN_WAIT → TIME_WAIT. Each state rejects invalid packets differently — textbook State pattern.",
          },
          {
            name: "React / Redux — UI state",
            detail:
              "Loading, Success, Error, and Empty states each render different components and handle user actions differently. Mapped directly to the State pattern.",
          },
          {
            name: "Order Management Systems",
            detail:
              "Placed → Confirmed → Shipped → Delivered → Returned. Each state allows only valid transitions (can't ship a returned order).",
          },
          {
            name: "Media Player",
            detail:
              "Playing, Paused, Stopped, and Buffering states each handle play/pause/seek differently. Android's MediaPlayer API models this explicitly.",
          },
          {
            name: "ATM Machine",
            detail:
              "Idle → CardInserted → PINEntered → SelectingTransaction → Dispensing. Almost identical structure to the vending machine — a classic interview example.",
          },
          {
            name: "Java Thread Lifecycle",
            detail:
              "NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED. The JVM manages thread state transitions, and behavior (e.g. interrupt()) varies per state.",
          },
        ]}
      />

      <hr className="my-8" />

      {/* 17. Key takeaway */}
      <KeyTakeaway>
        The State pattern replaces tangled conditionals with polymorphism — each
        state is a self-contained object that knows both how to behave and where
        to go next. The context stays thin, delegating everything to whatever
        state it currently holds. Adding a new state means adding a new class,
        not editing existing ones. Think of it as giving each mode of your
        object its own brain.
      </KeyTakeaway>

      {/* 18. PatternNav */}
      <PatternNav
        prev={{
          title: "Flyweight Pattern",
          pattern: "Structural",
          href: "/lld/patterns/flyweight",
        }}
        next={{
          title: "Mediator Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/mediator",
        }}
      />
    </main>
  );
}
