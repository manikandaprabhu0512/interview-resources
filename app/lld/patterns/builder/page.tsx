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

export const metadata: Metadata = {
  title: "Builder Pattern",
};

const data = {
  title: "Builder Pattern",
  pattern: "Creational" as const,
  difficulty: "Intermediate" as const,
};

export default function BuilderPatternPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <PatternMeta pattern={data.pattern} difficulty={data.difficulty} />

      {/* Title + GitHub */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          Builder Pattern
        </h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Builder_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      <Tagline>
        "Construct complex objects step by step — separate what to build from
        how to build it."
      </Tagline>

      <hr className="my-8 border-gray-100" />

      {/* Overview */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Overview</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Builder isn't one pattern — it comes in three flavours, each solving a
        different level of the same problem. Understanding all three tells you
        exactly when to reach for which.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          {
            name: "Simple Builder",
            desc: "Fluent method chaining. Replaces telescoping constructors and mutable setters.",
          },
          {
            name: "Builder + Director",
            desc: "Adds a Director class with pre-packaged build recipes on top of the builder.",
          },
          {
            name: "Step Builder",
            desc: "Interfaces enforce required steps at compile time. Cannot skip required fields.",
          },
        ].map((v) => (
          <div
            key={v.name}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          >
            <p className="text-sm font-semibold text-gray-800 mb-1">{v.name}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      <hr className="my-8 border-gray-100" />

      {/* The Problem */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The problem</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        You're building an{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          HttpRequest
        </code>{" "}
        object. It has 6 fields — some required, some optional. The two naive
        approaches both fall apart quickly.
      </p>

      <p className="text-sm font-medium text-gray-700 mb-2">
        Approach 1 — Telescoping constructors
      </p>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// 6 fields = 6 constructors. Add one field = rewrite everything.
public HttpRequest(String url) { ... }
public HttpRequest(String url, String method) { ... }
public HttpRequest(String url, String method, int timeout) { ... }
public HttpRequest(String url, String method, int timeout, Map<String,String> headers) { ... }
public HttpRequest(String url, String method, int timeout,
                   Map<String,String> headers, Map<String,String> queryParams) { ... }
public HttpRequest(String url, String method, int timeout,
                   Map<String,String> headers, Map<String,String> queryParams, String body) { ... }

// At the call site — which null is which?
new HttpRequest("https://api.example.com", "POST", 60, null, null, "{\"name\":\"Aditya\"}")`}</code>
      </pre>

      <p className="text-sm font-medium text-gray-700 mb-2 mt-6">
        Approach 2 — Mutable setters
      </p>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`HttpRequest request = new HttpRequest("https://api.example.com");
request.setMethod("POST");
request.addHeader("Content-Type", "application/json");
// Forgot to set body — object is in inconsistent state right here
request.execute(); // no error, but body is missing — silent bug`}</code>
      </pre>

      <Callout type="warning">
        Telescoping constructors are unreadable — positional arguments with no
        labels. Setters make the object mutable — anyone can change any field at
        any time, and there's no guarantee all required fields are set before
        use. Builder fixes both.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Variant 1 — Simple Builder */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        1. Simple Builder
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        A static inner{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          HttpRequestBuilder
        </code>{" "}
        class builds the object step by step via method chaining. Each{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          with*()
        </code>{" "}
        method sets a field and returns{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          this
        </code>{" "}
        — enabling a fluent API.{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          build()
        </code>{" "}
        validates and returns the fully constructed, effectively immutable
        object.
      </p>

      <StructureDiagram pattern="simple-builder" />

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`public class HttpRequest {
    private String url;
    private String method;
    private Map<String, String> headers;
    private Map<String, String> queryParams;
    private String body;
    private int timeout;

    // Package-private — only HttpRequestBuilder can instantiate
    HttpRequest() {
        headers = new HashMap<>();
        queryParams = new HashMap<>();
        body = "";
    }

    public static class HttpRequestBuilder {
        private HttpRequest req;

        public HttpRequestBuilder() { req = new HttpRequest(); }

        // Each method sets a field and returns this — method chaining
        public HttpRequestBuilder withUrl(String u)              { req.url = u;                      return this; }
        public HttpRequestBuilder withMethod(String method)      { req.method = method;              return this; }
        public HttpRequestBuilder withHeader(String k, String v) { req.headers.put(k, v);            return this; }
        public HttpRequestBuilder withQueryParams(String k, String v) { req.queryParams.put(k, v);   return this; }
        public HttpRequestBuilder withBody(String body)          { req.body = body;                  return this; }
        public HttpRequestBuilder withTimeout(int timeout)       { req.timeout = timeout;            return this; }

        public HttpRequest build() {
            if (req.url == null || req.url.isEmpty()) {
                throw new RuntimeException("URL cannot be empty"); // validation at build time
            }
            return req; // fully constructed, no more mutations expected
        }
    }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Usage — clean, readable, self-documenting
HttpRequest request = new HttpRequest.HttpRequestBuilder()
    .withUrl("https://api.example.com")
    .withMethod("POST")
    .withHeader("Content-Type", "application/json")
    .withHeader("Accept", "application/json")
    .withQueryParams("key", "12345")
    .withBody("{\\"name\\": \\"Aditya\\"}")
    .withTimeout(60)
    .build(); // validated here — guaranteed consistent state

request.execute();`}</code>
      </pre>

      <Callout type="tip">
        The{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          build()
        </code>{" "}
        method is the single point of validation. Miss a required field? It
        throws immediately — not silently during{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          execute()
        </code>{" "}
        three calls later. This is the key advantage over setters.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Variant 2 — Builder with Director */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        2. Builder with Director
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The Simple Builder gives flexibility — but if you build the same
        configuration repeatedly (a JSON POST request, a standard GET), you're
        duplicating the chain every time. A{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          Director
        </code>{" "}
        encapsulates these common recipes as static methods — pre-packaged
        builds on top of the same builder.
      </p>

      <StructureDiagram pattern="builder-director" />

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Director — pre-packaged build recipes using the same builder internally
public class HttpRequestDirector {

    // Recipe 1: standard GET request
    public static HttpRequest createGetRequest(String url) {
        return new HttpRequest.HttpRequestBuilder()
            .withUrl(url)
            .withMethod("GET")
            .build();
    }

    // Recipe 2: JSON POST with standard headers pre-wired
    public static HttpRequest createJsonPostRequest(String url, String jsonBody) {
        return new HttpRequest.HttpRequestBuilder()
            .withUrl(url)
            .withMethod("POST")
            .withHeader("Content-Type", "application/json")
            .withHeader("Accept", "application/json")
            .withBody(jsonBody)
            .build();
    }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Three ways to build — all valid, pick what fits
// 1. Raw builder — full control
HttpRequest custom = new HttpRequest.HttpRequestBuilder()
    .withUrl("https://api.example.com")
    .withMethod("POST")
    .withQueryParams("key", "12345")
    .withTimeout(60)
    .build();

// 2. Director — one line GET
HttpRequest getReq = HttpRequestDirector.createGetRequest("https://api.example.com/users");

// 3. Director — one line JSON POST
HttpRequest postReq = HttpRequestDirector.createJsonPostRequest(
    "https://api.example.com/users",
    "{\\"name\\": \\"Aditya\\", \\"email\\": \\"aditya@example.com\\"}"
);`}</code>
      </pre>

      <Callout type="info">
        Director uses Builder internally — it doesn't replace it. You can always
        bypass the Director and use the Builder directly for custom
        configurations. Director is purely a convenience layer.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Variant 3 — Step Builder */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        3. Step Builder
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Simple Builder validates required fields at <em>runtime</em> in{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          build()
        </code>
        . Step Builder enforces required fields at <em>compile time</em> using a
        chain of interfaces. Each interface exposes only the next valid method —
        the type system itself prevents skipping required steps.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 font-mono text-xs text-gray-700 leading-relaxed">
        <p className="font-semibold text-gray-800 mb-2 font-sans text-sm">
          Interface chain — each step returns the next
        </p>
        <p>
          <span className="text-emerald-600">UrlStep</span> →{" "}
          <span className="text-blue-600">withUrl()</span> → returns{" "}
          <span className="text-emerald-600">MethodStep</span>
        </p>
        <p>
          <span className="text-emerald-600">MethodStep</span> →{" "}
          <span className="text-blue-600">withMethod()</span> → returns{" "}
          <span className="text-emerald-600">HeaderStep</span>
        </p>
        <p>
          <span className="text-emerald-600">HeaderStep</span> →{" "}
          <span className="text-blue-600">withHeader()</span> → returns{" "}
          <span className="text-emerald-600">OptionalStep</span>
        </p>
        <p>
          <span className="text-emerald-600">OptionalStep</span> →{" "}
          <span className="text-blue-600">
            withBody() | withTimeout() | build()
          </span>
        </p>
        <p className="mt-2 text-gray-500">
          // build() is unreachable until all required steps are done
        </p>
      </div>

      <StructureDiagram pattern="step-builder" />

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Step interfaces — each exposes only the next valid method
interface UrlStep    { MethodStep withUrl(String url);            }
interface MethodStep { HeaderStep withMethod(String method);      }
interface HeaderStep { OptionalStep withHeader(String k, String v); }
interface OptionalStep {
    OptionalStep withBody(String body);
    OptionalStep withTimeout(int timeout);
    HttpRequest build(); // only reachable after UrlStep + MethodStep + HeaderStep
}

// Concrete builder implements all four — but client only sees the interface
static class HttpRequestStepBuilder implements UrlStep, MethodStep, HeaderStep, OptionalStep {
    private HttpRequest req;

    private HttpRequestStepBuilder() { req = new HttpRequest(); }

    public MethodStep  withUrl(String url)          { req.url = url;              return this; }
    public HeaderStep  withMethod(String method)     { req.method = method;        return this; }
    public OptionalStep withHeader(String k, String v) { req.headers.put(k, v);   return this; }
    public OptionalStep withBody(String body)        { req.body = body;            return this; }
    public OptionalStep withTimeout(int timeout)     { req.timeout = timeout;      return this; }

    public HttpRequest build() {
        if (req.url == null || req.url.isEmpty()) throw new RuntimeException("URL cannot be empty");
        return req;
    }

    // Entry point — returns UrlStep, so withUrl() is the ONLY option
    public static UrlStep getBuilder() { return new HttpRequestStepBuilder(); }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Usage — compiler guides you through required steps
HttpRequest request = HttpRequest.HttpRequestStepBuilder.getBuilder()
    .withUrl("https://api.example.com/products")   // UrlStep    — only option here
    .withMethod("POST")                             // MethodStep — only option here
    .withHeader("Content-Type", "application/json") // HeaderStep — only option here
    .withBody("{\\"product\\": \\"Laptop\\"}")      // OptionalStep — now free to pick
    .withTimeout(45)                                // OptionalStep
    .build();

// Can't call .build() before .withHeader() — won't compile!
// Can't call .withTimeout() before .withUrl() — won't compile!`}</code>
      </pre>

      <Callout type="tip">
        The concrete{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          HttpRequestStepBuilder
        </code>{" "}
        implements all four interfaces — but the client never sees it. They only
        see the interface returned at each step. This is what makes{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          build()
        </code>{" "}
        unreachable until required steps are done — it's not on{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          UrlStep
        </code>
        ,{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          MethodStep
        </code>
        , or{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          HeaderStep
        </code>
        .
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Comparison */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        All 3 compared
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Variant
              </th>
              <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Required field safety
              </th>
              <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Pre-packaged recipes
              </th>
              <th className="text-left py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Complexity
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              {
                name: "Simple Builder",
                safety: "Runtime (build())",
                recipes: "❌",
                complexity: "Low",
              },
              {
                name: "Builder + Director",
                safety: "Runtime (build())",
                recipes: "✅",
                complexity: "Medium",
              },
              {
                name: "Step Builder",
                safety: "✅ Compile time",
                recipes: "❌",
                complexity: "High",
              },
            ].map((r) => (
              <tr key={r.name}>
                <td className="py-2 pr-4 text-gray-800 font-medium">
                  {r.name}
                </td>
                <td className="py-2 pr-4 text-gray-600">{r.safety}</td>
                <td className="py-2 pr-4 text-gray-600">{r.recipes}</td>
                <td className="py-2 text-gray-600">{r.complexity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="my-8 border-gray-100" />

      {/* When to use / avoid */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        When to use / avoid
      </h2>
      <DoAndDont
        use={[
          "Object has many fields — especially optional ones — and telescoping constructors are growing unmanageably",
          "You want an immutable object with validation at construction time, not scattered across setters",
          "Use Step Builder when required fields must be enforced at compile time — APIs used by many teams",
          "Use Director when the same builder configurations repeat across the codebase",
        ]}
        avoid={[
          "Simple objects with 2-3 fields — a constructor is cleaner and Builder adds unnecessary boilerplate",
          "Step Builder for small objects — the interface chain overhead isn't worth it unless required-field safety matters",
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
            name: "OkHttp",
            detail:
              "Request.Builder().url().method().addHeader().build() — exact same pattern",
          },
          {
            name: "Retrofit",
            detail:
              "Retrofit.Builder().baseUrl().addConverterFactory().build()",
          },
          {
            name: "Lombok @Builder",
            detail:
              "Generates the entire Builder pattern for any class with one annotation",
          },
          {
            name: "StringBuilder",
            detail:
              "Java's own builder — append().append().toString() is method chaining",
          },
          {
            name: "AlertDialog (Android)",
            detail:
              "AlertDialog.Builder().setTitle().setMessage().setPositiveButton().create()",
          },
        ]}
      />

      <hr className="my-8 border-gray-100" />

      {/* Key takeaway */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Key takeaway</h2>
      <KeyTakeaway>
        Builder solves the telescoping constructor problem and the mutable
        setter problem in one move — a fluent API that constructs objects step
        by step and validates at the end. Use Simple Builder for most cases, add
        a Director when recipes repeat, and reach for Step Builder when
        required-field enforcement at compile time matters more than simplicity.
        If you've ever used OkHttp or Retrofit, you've used Builder.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Bridge Pattern",
          pattern: "Structural",
          href: "/lld/patterns/bridge",
        }}
        next={{
          title: "Iterator Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/iterator",
        }}
      />
    </article>
  );
}
