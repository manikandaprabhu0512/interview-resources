import { GitBranch, ArrowUpRight } from "lucide-react";
import { PatternMeta } from "@/components/pattern/Patternmeta";
import { Tagline } from "@/components/pattern/Tagline";
import { Callout } from "@/components/pattern/Callout";
import { StructureDiagram } from "@/components/pattern/Struturediagram";
import { DoAndDont } from "@/components/pattern/Doanddont";
import { RealWorldExamples } from "@/components/pattern/Realworldexamples";
import { KeyTakeaway } from "@/components/pattern/Keytakeaway";
import { PatternNav } from "@/components/patternnav/PatternNav";

const metadata = {
  title: "Command Pattern",
  pattern: "Behavioral" as const,
  difficulty: "Intermediate" as const,
};

export default function CommandPatternPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <PatternMeta
        pattern={metadata.pattern}
        difficulty={metadata.difficulty}
      />

      {/* Title + GitHub */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          Command Pattern
        </h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Command_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      <Tagline>
        "Turn a request into an object — queue it, log it, undo it."
      </Tagline>

      <hr className="my-8 border-gray-100" />

      {/* The Problem */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The problem</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        You're building a remote controller for smart home devices — lights,
        fans, AC. The naive approach: the controller directly calls{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          light.on()
        </code>
        ,{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          fan.off()
        </code>{" "}
        etc. Now try adding undo, or scheduling commands, or logging history —
        you're now tangling the controller with every device's internals.
      </p>

      <Callout type="warning">
        The controller (invoker) should not know how a light turns on or a fan
        turns off. It should just say "execute" — and the command handles the
        rest.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* The Solution */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The solution</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Command encapsulates a request as an object. Four roles work together:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          {
            name: "Command (interface)",
            role: "ICommand",
            desc: "Declares execute() and undo(). The contract every command implements.",
          },
          {
            name: "ConcreteCommand",
            role: "LightCommand, FanCommand",
            desc: "Implements Command. Holds a reference to the receiver and calls its methods.",
          },
          {
            name: "Receiver",
            role: "Light, Fan",
            desc: "The actual object that does the work — knows how to perform the operation.",
          },
          {
            name: "Invoker",
            role: "RemoteController",
            desc: "Holds commands and calls execute()/undo(). Never talks to the receiver directly.",
          },
        ].map((s) => (
          <div
            key={s.name}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          >
            <p className="text-sm font-semibold text-gray-800 mb-0.5">
              {s.name}
            </p>
            <p className="text-xs font-mono text-emerald-600 mb-1">{s.role}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <StructureDiagram pattern="command" />

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Command interface — every command must support execute and undo
interface Command {
    void execute();
    void undo();
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Receivers — the actual devices that know how to do things
class Light {
    public void on()  { System.out.println("Light is on!");  }
    public void off() { System.out.println("Light is off!"); }
}

class Fan {
    public void on()  { System.out.println("Fan is on!");  }
    public void off() { System.out.println("Fan is off!"); }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// ConcreteCommands — encapsulate the receiver + action as an object
class LightCommand implements Command {
    private Light light;

    public LightCommand(Light light) { this.light = light; }

    public void execute() { light.on();  }  // forward to receiver
    public void undo()    { light.off(); }  // reverse the action
}

class FanCommand implements Command {
    private Fan fan;

    public FanCommand(Fan fan) { this.fan = fan; }

    public void execute() { fan.on();  }
    public void undo()    { fan.off(); }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Invoker — holds commands, never talks to devices directly
class RemoteController {
    private static final int NUM_BUTTONS = 4;
    private Command[] buttons;
    private boolean[] buttonsPressed;

    public RemoteController() {
        buttons       = new Command[NUM_BUTTONS];
        buttonsPressed = new boolean[NUM_BUTTONS];
    }

    public void setCommand(int idx, Command cmd) {
        if (idx >= 0 && idx < NUM_BUTTONS) {
            buttons[idx]       = cmd;
            buttonsPressed[idx] = false;
        }
    }

    // Toggle — first press executes, second press undoes
    public void pressButton(int idx) {
        if (idx >= 0 && idx < NUM_BUTTONS && buttons[idx] != null) {
            if (!buttonsPressed[idx]) {
                buttons[idx].execute();
            } else {
                buttons[idx].undo();
            }
            buttonsPressed[idx] = !buttonsPressed[idx];
        } else {
            System.out.println("No command assigned at button " + idx);
        }
    }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Usage
Light light = new Light();
Fan   fan   = new Fan();

RemoteController controller = new RemoteController();
controller.setCommand(0, new LightCommand(light));
controller.setCommand(1, new FanCommand(fan));

System.out.println("Toggling Light Button");
controller.pressButton(0);  // Light is on!
controller.pressButton(0);  // Light is off!  ← undo

System.out.println("Toggling Fan Button");
controller.pressButton(1);  // Fan is on!
controller.pressButton(1);  // Fan is off!    ← undo

System.out.println("Pressing wrong button");
controller.pressButton(2);  // No command assigned at button 2`}</code>
      </pre>

      <Callout type="tip">
        Notice{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          RemoteController
        </code>{" "}
        has zero knowledge of{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          Light
        </code>{" "}
        or{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          Fan
        </code>
        . You could add an AC, TV, or any new device by creating a new Command
        class — the controller never changes. That's Open/Closed Principle in
        action.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Undo deep dive */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        How undo works
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The toggle logic in{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          pressButton()
        </code>{" "}
        is a simple undo implementation — it tracks whether a button was pressed
        and calls{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          undo()
        </code>{" "}
        on the second press. In real systems, undo is typically implemented with
        a stack:
      </p>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Stack-based undo — production approach
class RemoteWithHistory {
    private Stack<Command> history = new Stack<>();

    public void execute(Command cmd) {
        cmd.execute();
        history.push(cmd);   // remember every command
    }

    public void undo() {
        if (!history.isEmpty()) {
            history.pop().undo();  // reverse the last command
        }
    }
}`}</code>
      </pre>

      <Callout type="info">
        This stack-based approach is exactly how text editors implement Ctrl+Z —
        every keystroke/action is a Command object pushed onto a stack. Undo
        pops and reverses. Redo pushes again.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* When to use / avoid */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        When to use / avoid
      </h2>
      <DoAndDont
        use={[
          "You need undo/redo — encapsulate each action as a reversible command object",
          "You want to queue, schedule, or log operations — commands are just objects, easy to store",
          "You need to decouple the sender (invoker) from the receiver — invoker doesn't know what it's triggering",
        ]}
        avoid={[
          "Simple one-shot actions with no undo, queuing, or logging needs — direct calls are cleaner",
          "Too many tiny commands can bloat the codebase — group related actions where possible",
        ]}
      />

      <hr className="my-8 border-gray-100" />

      {/* Real world */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Real-world examples
      </h2>
      <RealWorldExamples
        examples={[
          {
            name: "Text Editors",
            detail:
              "Every keystroke is a Command — Ctrl+Z pops the stack, Ctrl+Y re-executes",
          },
          {
            name: "GUI Buttons",
            detail:
              "Button click handlers are commands — same button can trigger different actions",
          },
          {
            name: "Job Queues",
            detail:
              "Tasks in Celery, RabbitMQ are serialized Command objects scheduled for execution",
          },
          {
            name: "DB Transactions",
            detail:
              "Each DB operation is a command — rollback is the undo, commit is the execute",
          },
          {
            name: "Game Actions",
            detail:
              "Player moves stored as commands — replay, rewind, undo all become trivial",
          },
        ]}
      />

      <hr className="my-8 border-gray-100" />

      {/* Key takeaway */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Key takeaway</h2>
      <KeyTakeaway>
        Command turns a request into a first-class object. That one move unlocks
        undo/redo, queuing, scheduling, and logging for free — because objects
        can be stored, passed around, and executed later. The invoker stays
        completely decoupled from the receiver. Any time you need "do this, and
        be able to undo it" — Command is the pattern.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Decorator Pattern",
          pattern: "Structural",
          href: "/lld/patterns/decorator",
        }}
        next={{
          title: "Facade Pattern",
          pattern: "Structural",
          href: "/lld/patterns/facade",
        }}
      />
    </article>
  );
}
