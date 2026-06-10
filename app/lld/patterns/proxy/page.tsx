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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proxy Pattern",
};

export default function ProxyPatternPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      {/* 1. PatternMeta */}
      <PatternMeta pattern="Structural" difficulty="Intermediate" />

      {/* 2. Title + GitHub button */}
      <div className="flex items-start justify-between mt-4 mb-3">
        <h1 className="text-3xl font-bold tracking-tight">Proxy Pattern</h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Proxy_Pattern"
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
        A stand-in that controls access to the real object — intercepting calls
        to add lazy loading, access checks, or remote delegation.
      </Tagline>

      <hr className="my-6" />

      {/* 5. The Problem */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The problem</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          You have an object that's expensive to create, lives behind a network
          boundary, or shouldn't be freely accessible to everyone. The client
          code just calls methods on it — but you need to intercept those calls
          to delay initialization, check permissions, or abstract away a remote
          connection.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Without a proxy, all three concerns bleed into the client:
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// Client is now responsible for lazy init, auth, AND business logic
class Client {
    void showDocument(User user, String path) {
        if (!user.premiumMembership) {          // access control leak
            System.out.println("Access denied");
            return;
        }
        if (reader == null) {                   // lazy init leak
            reader = new RealDocumentReader();
        }
        reader.unlockPDF(path, password);       // finally, the actual work
    }
}`}</code>
        </pre>
        <Callout type="warning">
          When clients manage initialization, access control, or remote
          connection details themselves, every call site duplicates that logic —
          and any change to the policy must be hunted down across the codebase.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 7. The Solution */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The solution</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          The Proxy pattern inserts an intermediary that implements the same
          interface as the real object. The client talks to the proxy exactly as
          it would to the real thing — the proxy decides whether, when, and how
          to forward the call. There are three distinct flavors, each solving a
          different interception problem.
        </p>

        {/* Variant cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              Virtual Proxy
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                ImageProxy
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Defers creation of{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                RealImage
              </code>{" "}
              until the first{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                display()
              </code>{" "}
              call. Nothing loads from disk until it's actually needed.
            </p>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              Protection Proxy
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                DocumentProxy
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Guards{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                RealDocumentReader
              </code>{" "}
              behind a membership check. Non-premium users are blocked before
              the real object is ever touched.
            </p>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              Remote Proxy
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                DataServiceProxy
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Represents{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                RealDataService
              </code>{" "}
              as if it were local. Handles connection setup so the client never
              knows it's talking to a remote resource.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="proxy" />
      </section>

      <hr className="my-8 border-gray-800" />

      {/* 9. Code — Virtual Proxy */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Code</h2>

        {/* Virtual Proxy */}
        <h3 className="text-base font-semibold text-gray-700 mb-2">
          Virtual Proxy — lazy image loading
        </h3>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface IImage {
    void display();
}

class RealImage implements IImage {
    private String filename;

    public RealImage(String file) {
        this.filename = file;
        // Expensive — disk I/O happens at construction time
        System.out.println("[RealImage] Loading image from disk: " + filename);
    }

    @Override
    public void display() {
        System.out.println("[RealImage] Displaying " + filename);
    }
}

class ImageProxy implements IImage {
    private RealImage realImage;   // null until first access
    private String filename;

    public ImageProxy(String file) {
        this.filename = file;
        this.realImage = null;     // no disk I/O yet
    }

    @Override
    public void display() {
        if (realImage == null) {
            realImage = new RealImage(filename); // load only on first call
        }
        realImage.display();
    }
}`}</code>
        </pre>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-6">
          <code>{`IImage image1 = new ImageProxy("sample.jpg"); // nothing loaded yet
image1.display();
// [RealImage] Loading image from disk: sample.jpg   ← triggered here
// [RealImage] Displaying sample.jpg`}</code>
        </pre>

        <hr className="my-8 border-gray-100" />
        {/* Protection Proxy */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Protection Proxy — membership gate
        </h3>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface IDocumentReader {
    void unlockPDF(String filePath, String password);
}

class RealDocumentReader implements IDocumentReader {
    @Override
    public void unlockPDF(String filePath, String password) {
        System.out.println("[RealDocumentReader] Unlocking PDF at: " + filePath);
        System.out.println("[RealDocumentReader] PDF unlocked successfully");
        System.out.println("[RealDocumentReader] Displaying PDF content...");
    }
}

class DocumentProxy implements IDocumentReader {
    private RealDocumentReader realReader;  // lazy + gated
    private User user;

    public DocumentProxy(User user) {
        this.realReader = null;
        this.user = user;
    }

    @Override
    public void unlockPDF(String filePath, String password) {
        // Lazy init — only create the real reader if we might need it
        if (realReader == null) {
            System.out.println("Creating Object...");
            realReader = new RealDocumentReader();
        }
        // Access control — block before forwarding
        if (!user.premiumMembership) {
            System.out.println("[DocumentProxy] Access denied. Premium members only.");
            return;
        }
        realReader.unlockPDF(filePath, password);
    }
}`}</code>
        </pre>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`User user1 = new User("Rohan", false);
IDocumentReader docReader = new DocumentProxy(user1);
docReader.unlockPDF("protected_document.pdf", "secret123");
// Creating Object...
// [DocumentProxy] Access denied. Premium members only.

User user2 = new User("Rashmi", true);
docReader = new DocumentProxy(user2);
docReader.unlockPDF("protected_document.pdf", "secret123");
// Creating Object...
// [RealDocumentReader] Unlocking PDF at: protected_document.pdf
// [RealDocumentReader] PDF unlocked successfully
// [RealDocumentReader] Displaying PDF content...`}</code>
        </pre>

        <Callout type="tip">
          Notice that even the denied user triggers{" "}
          <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-800">
            new RealDocumentReader()
          </code>
          . In a stricter implementation, you'd move the null-check{" "}
          <em>after</em> the access check — so the real object is never
          constructed for unauthorized users at all.
        </Callout>

        <hr className="my-8 border-gray-100" />

        {/* Remote Proxy */}
        <h3 className="text-base font-semibold text-gray-700 mb-2 mt-6">
          Remote Proxy — hiding network complexity
        </h3>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface IDataService {
    String fetchData();
}

class RealDataService implements IDataService {
    public RealDataService() {
        System.out.println("[RealDataService] Initialized (simulating remote setup)");
    }

    @Override
    public String fetchData() {
        return "[RealDataService] Data from server";
    }
}

// Proxy abstracts away connection management
class DataServiceProxy implements IDataService {
    private RealDataService realService;

    public DataServiceProxy() {
        realService = new RealDataService(); // connection setup hidden here
    }

    @Override
    public String fetchData() {
        System.out.println("[DataServiceProxy] Connecting to remote service...");
        return realService.fetchData();
    }
}`}</code>
        </pre>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`IDataService dataService = new DataServiceProxy();
System.out.println(dataService.fetchData());
// [RealDataService] Initialized (simulating remote setup)
// [DataServiceProxy] Connecting to remote service...
// [RealDataService] Data from server`}</code>
        </pre>
        <Callout type="info">
          Real-world remote proxies handle serialization, retries, and error
          translation — the client sees a clean local interface while all
          network concerns stay inside the proxy. This is exactly how Java RMI
          stubs and gRPC client stubs work.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 11. Deep dive — Proxy vs Decorator */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Proxy vs Decorator — the easy confusion
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Both patterns wrap an object behind the same interface. The difference
          is in <em>intent</em>
          and <em>who controls the real object</em>:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Proxy</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Controls <em>access</em> to the real object. Often manages the
              real object's lifecycle (lazy init, remote connection). Client
              typically doesn't know or care that a proxy is involved.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Decorator
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Adds <em>behavior</em> to the real object. The real object is
              always created externally and passed in. Decorators are meant to
              be stacked; proxies typically aren't.
            </p>
          </div>
        </div>
        <Callout type="tip">
          Rule of thumb: if you're asking "should this request reach the real
          object at all?" — that's a Proxy. If you're asking "what should happen
          before/after the real object handles it?" — that's a Decorator.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 13. When to use / avoid */}
      <DoAndDont
        use={[
          "You have an expensive object that should only be created when first accessed (Virtual Proxy)",
          "You need to gate access to an object based on roles, permissions, or membership (Protection Proxy)",
          "You want to hide the complexity of a remote or external resource behind a local interface (Remote Proxy)",
          "You need to add logging, caching, or rate-limiting around an existing object without modifying it",
        ]}
        avoid={[
          "You want to add behavior rather than control access — use Decorator instead",
          "The real object is cheap to construct and freely accessible — proxy adds indirection with no payoff",
          "You need to intercept multiple unrelated objects — consider AOP (Aspect-Oriented Programming) instead",
          "The proxy logic grows complex enough to need its own tests — it may be taking on too much responsibility",
        ]}
      />

      <hr className="my-6" />

      {/* 15. Real-world examples */}
      <RealWorldExamples
        examples={[
          {
            name: "Java RMI stubs",
            detail:
              "The client-side stub is a remote proxy — it looks like a local object but serializes calls over a network to the real JVM.",
          },
          {
            name: "Hibernate lazy loading",
            detail:
              "Hibernate returns a proxy object for associations. The real database query fires only when you access the proxy's fields — a textbook virtual proxy.",
          },
          {
            name: "Spring Security method security",
            detail:
              "Spring wraps your service beans in CGLIB proxies that check @PreAuthorize annotations before forwarding the call — protection proxy at the framework level.",
          },
          {
            name: "CDN edge caches",
            detail:
              "An edge node is a remote proxy for your origin server. Clients talk to the nearest edge; the edge forwards cache misses to the real origin.",
          },
        ]}
      />

      <hr className="my-6" />

      {/* 17. Key takeaway */}
      <KeyTakeaway>
        The Proxy pattern gives you a controlled chokepoint in front of any
        object — without the client ever changing. Virtual Proxy defers
        expensive work until it's actually needed; Protection Proxy enforces
        access policy in one place instead of every call site; Remote Proxy
        hides network or process boundaries behind a familiar local interface.
        All three share the same structural shape: same interface, proxy holds a
        reference to the real object, and the client is none the wiser. Choose
        the variant based on <em>what</em> you're intercepting — cost,
        permission, or location.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Template Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/template",
        }}
        next={{
          title: "Chain of Responsibility Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/cor",
        }}
      />
    </main>
  );
}
