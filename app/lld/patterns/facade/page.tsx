import { GitBranch, ArrowUpRight } from "lucide-react";
import { PatternMeta } from "@/components/pattern/Patternmeta";
import { Tagline } from "@/components/pattern/Tagline";
import { Callout } from "@/components/pattern/Callout";
import { StructureDiagram } from "@/components/pattern/Struturediagram";
import { DoAndDont } from "@/components/pattern/Doanddont";
import { RealWorldExamples } from "@/components/pattern/Realworldexamples";
import { KeyTakeaway } from "@/components/pattern/Keytakeaway";
import { PatternNav } from "@/components/patternnav/PatternNav";
import { Metadata } from "next";

const data = {
  title: "Facade Pattern",
  pattern: "Structural" as const,
  difficulty: "Beginner" as const,
};

export const metadata: Metadata = {
  title: "Facade Pattern",
};

export default function FacadePatternPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <PatternMeta pattern={data.pattern} difficulty={data.difficulty} />

      {/* Title + GitHub */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <h1 className="text-3xl font-semibold text-gray-900">Facade Pattern</h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Facade_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      <Tagline>
        "One simple interface over a complex subsystem — hide the mess, expose
        the essentials."
      </Tagline>

      <hr className="my-8 border-gray-100" />

      {/* The Problem */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The problem</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Think about turning on a computer. Behind the scenes it has to: provide
        power, start the cooling fans, initialize the CPU, run a memory
        self-test, spin up the hard drive, boot the BIOS, and load the OS — in
        the right order. If the client had to orchestrate all of this manually
        every time, the code would be complex, fragile, and impossible to reuse.
      </p>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Without Facade — client knows too much
powerSupply.providePower();
coolingSystem.startFans();
bios.boot(cpu, memory);   // client must know BIOS needs CPU + Memory
hardDrive.spinUp();
os.load();
// Client is tightly coupled to every subsystem class`}</code>
      </pre>

      <Callout type="warning">
        The client shouldn't need to know the boot sequence or that BIOS needs
        both CPU and Memory references. That's internal complexity — it belongs
        behind a facade.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* The Solution */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The solution</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Facade provides a single simplified interface over a group of complex
        subsystem classes. The client only talks to the facade — it doesn't know
        or care what happens inside. The subsystem classes still exist and do
        their work, they're just hidden behind the facade.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          {
            name: "Client",
            desc: "Only calls facade.startComputer() — knows nothing about subsystems.",
          },
          {
            name: "ComputerFacade",
            desc: "Holds references to all subsystems. Orchestrates them in the right order.",
          },
          {
            name: "Subsystems",
            desc: "PowerSupply, CPU, Memory, BIOS etc. Still work independently — facade just coordinates.",
          },
        ].map((s) => (
          <div
            key={s.name}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          >
            <p className="text-sm font-semibold text-gray-800 mb-1">{s.name}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <StructureDiagram pattern="facade" />

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Subsystem classes — each does one thing, knows nothing about each other
class PowerSupply {
    public void providePower() {
        System.out.println("Power Supply: Providing power...");
    }
}

class CoolingSystem {
    public void startFans() {
        System.out.println("Cooling System: Fans started...");
    }
}

class CPU {
    public void initialize() {
        System.out.println("CPU: Initialization started...");
    }
}

class Memory {
    public void selfTest() {
        System.out.println("Memory: Self-test passed...");
    }
}

class HardDrive {
    public void spinUp() {
        System.out.println("Hard Drive: Spinning up...");
    }
}

class BIOS {
    public void boot(CPU cpu, Memory memory) {
        System.out.println("BIOS: Booting CPU and Memory checks...");
        cpu.initialize();
        memory.selfTest();
    }
}

class OperatingSystem {
    public void load() {
        System.out.println("Operating System: Loading into memory...");
    }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Facade — hides all subsystem complexity behind one simple method
class ComputerFacade {
    private PowerSupply    powerSupply   = new PowerSupply();
    private CoolingSystem  coolingSystem = new CoolingSystem();
    private CPU            cpu           = new CPU();
    private Memory         memory        = new Memory();
    private HardDrive      hardDrive     = new HardDrive();
    private BIOS           bios          = new BIOS();
    private OperatingSystem os           = new OperatingSystem();

    public void startComputer() {
        System.out.println("----- Starting Computer -----");
        powerSupply.providePower();    // step 1
        coolingSystem.startFans();     // step 2
        bios.boot(cpu, memory);        // step 3 — BIOS handles CPU + Memory internally
        hardDrive.spinUp();            // step 4
        os.load();                     // step 5
        System.out.println("Computer Booted Successfully!");
    }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Client — one line. Knows nothing about the boot sequence.
public class FacadePattern {
    public static void main(String[] args) {
        ComputerFacade computer = new ComputerFacade();
        computer.startComputer();
    }
}

// Output:
// ----- Starting Computer -----
// Power Supply: Providing power...
// Cooling System: Fans started...
// BIOS: Booting CPU and Memory checks...
// CPU: Initialization started...
// Memory: Self-test passed...
// Hard Drive: Spinning up...
// Operating System: Loading into memory...
// Computer Booted Successfully!`}</code>
      </pre>

      <Callout type="tip">
        The subsystem classes didn't change at all — Facade just sits in front
        of them. If you later need to access a subsystem directly (say for
        testing), you still can. Facade adds a simplified entry point without
        removing flexibility.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Facade vs other patterns */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Facade vs related patterns
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          {
            name: "Facade",
            point:
              "Simplifies a complex subsystem with a new interface. Subsystems still exist.",
          },
          {
            name: "Adapter",
            point:
              "Converts an existing interface to another expected interface. Changes the shape.",
          },
          {
            name: "Mediator",
            point:
              "Centralizes communication between objects. Objects don't talk to each other at all.",
          },
        ].map((c) => (
          <div
            key={c.name}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          >
            <p className="text-sm font-semibold text-gray-800 mb-1">{c.name}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{c.point}</p>
          </div>
        ))}
      </div>

      <hr className="my-8 border-gray-100" />

      {/* When to use / avoid */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        When to use / avoid
      </h2>
      <DoAndDont
        use={[
          "A subsystem has grown complex and clients only need a small part of it",
          "You want to layer your architecture — clients talk to facade, facade talks to subsystem",
          "You want to decouple client code from internal implementation details",
        ]}
        avoid={[
          "The subsystem is simple — a facade just adds an unnecessary wrapper",
          "Every client needs full access to all subsystem features — facade would be too leaky anyway",
          "Don't make the facade a god object — if it grows too large, it becomes the problem it was solving",
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
            name: "JDBC",
            detail:
              "DriverManager.getConnection() hides driver loading, URL parsing, auth — one call",
          },
          {
            name: "Spring JPA",
            detail:
              "Repository.save() hides EntityManager, transactions, SQL generation",
          },
          {
            name: "AWS SDK",
            detail:
              "S3Client.putObject() hides chunking, signing, retry logic, multipart uploads",
          },
          {
            name: "Hotel Reception",
            detail:
              "Classic analogy — one desk coordinates housekeeping, kitchen, concierge",
          },
          {
            name: "npm install",
            detail:
              "One command hides dependency resolution, registry fetching, symlink creation",
          },
        ]}
      />

      <hr className="my-8 border-gray-100" />

      {/* Key takeaway */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Key takeaway</h2>
      <KeyTakeaway>
        Facade is about simplicity — not hiding things forever, but giving the
        client a clean entry point so it doesn't have to understand the
        internals to get things done. The subsystems are still there, still
        accessible, still independent. The facade just says: "you don't need to
        know all this — just call me." If you've ever called a library's
        high-level API without caring about its internals, you've used a Facade.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Command Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/command",
        }}
        next={{
          title: "Composite Pattern",
          pattern: "Structural",
          href: "/lld/patterns/composite",
        }}
      />
    </article>
  );
}
