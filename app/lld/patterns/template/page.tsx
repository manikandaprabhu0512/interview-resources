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
import { GitBranch } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Template Pattern",
};

export default function TemplatePatternPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      {/* 1. PatternMeta */}
      <PatternMeta pattern="Behavioral" difficulty="Beginner" />

      {/* 2. Title + GitHub button */}
      <div className="flex items-start justify-between mt-4 mb-3">
        <h1 className="text-3xl font-bold tracking-tight">Template Pattern</h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Template_Pattern"
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
        Define the skeleton of an algorithm once — let subclasses fill in the
        steps.
      </Tagline>

      <hr className="my-6" />

      {/* 5. The Problem */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The problem</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Imagine you're building a machine learning platform that supports
          multiple model types — neural networks, decision trees, SVMs. Every
          trainer follows the same high-level pipeline: load data → preprocess →
          train → evaluate → save. But if you let each team implement that
          sequence independently, you get subtle bugs: someone skips
          preprocessing, another forgets to save, a third evaluates before
          training completes.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Without the Template pattern, you'd either duplicate the orchestration
          logic everywhere or rely on convention and documentation — both break
          down at scale.
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// Each trainer reimplements the pipeline — order bugs creep in
class NeuralNetworkTrainer {
    void run(String path) {
        loadData(path);
        trainModel();       // forgot preprocessData()!
        saveModel();
        evaluateModel();    // evaluated AFTER saving — wrong order
    }
}

class DecisionTreeTrainer {
    void run(String path) {
        preprocessData();   // loadData() never called
        trainModel();
        evaluateModel();
        // saveModel() missing entirely
    }
}`}</code>
        </pre>
        <Callout type="warning">
          When the algorithm's <em>sequence</em> is as important as its steps,
          leaving order up to each subclass is a maintenance timebomb.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 7. The Solution */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The solution</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          The Template pattern locks the algorithm's sequence inside a{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            final
          </code>{" "}
          method on the abstract class — the <em>template method</em>.
          Subclasses override only the steps that vary; the scaffolding stays
          centrally owned and tamper-proof.
        </p>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              Abstract Class
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                ModelTrainer
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Owns{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                trainPipeline()
              </code>{" "}
              — the final template method that defines the invariant sequence.
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Concrete Class A
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                NeuralNetworkTrainer
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Overrides all three variant steps:{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                trainModel
              </code>
              ,{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                evaluateModel
              </code>
              , and{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                saveModel
              </code>
              .
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Concrete Class B
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                DecisionTreeTrainer
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Overrides only the abstract steps — inherits the default{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                saveModel()
              </code>{" "}
              from the parent.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="template" />
      </section>

      <hr className="my-6" />

      {/* 9. Code */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Code</h2>

        {/* Abstract class */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          Abstract class — the template
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`abstract class ModelTrainer {

    // Locked sequence — subclasses cannot reorder steps
    public final void trainPipeline(String dataPath) {
        loadData(dataPath);
        preprocessData();
        trainModel();    // abstract — must override
        evaluateModel(); // abstract — must override
        saveModel();
    }

    // Default implementations — subclasses may override
    protected void loadData(String path) {
        System.out.println("[Common] Loading dataset from " + path);
    }

    protected void preprocessData() {
        System.out.println("[Common] Splitting into train/test and normalizing");
    }

    protected void saveModel() {
        System.out.println("[Common] Saving model to disk as default format");
    }

    // Hook points — subclasses must provide these
    protected abstract void trainModel();
    protected abstract void evaluateModel();
}`}</code>
        </pre>

        {/* Concrete classes */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          Concrete classes
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class NeuralNetworkTrainer extends ModelTrainer {

    @Override
    protected void trainModel() {
        System.out.println("[NeuralNet] Training Neural Network for 100 epochs");
    }

    @Override
    protected void evaluateModel() {
        System.out.println("[NeuralNet] Evaluating accuracy and loss on validation set");
    }

    @Override
    protected void saveModel() {
        // Overrides the default — uses a model-specific format
        System.out.println("[NeuralNet] Serializing network weights to .h5 file");
    }
}

class DecisionTreeTrainer extends ModelTrainer {

    @Override
    protected void trainModel() {
        System.out.println("[DecisionTree] Building decision tree with max_depth=5");
    }

    @Override
    protected void evaluateModel() {
        System.out.println("[DecisionTree] Computing classification report (precision/recall)");
    }

    // saveModel() not overridden — inherits the common default
}`}</code>
        </pre>

        <Callout type="tip">
          <strong>Abstract vs default methods:</strong> Steps that <em>must</em>{" "}
          differ per subclass are{" "}
          <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-800">
            abstract
          </code>
          . Steps with a sensible default (like{" "}
          <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-800">
            saveModel
          </code>
          ) are concrete but overridable — subclasses opt in to customization
          only when needed.
        </Callout>

        {/* Usage + output */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2 mt-4">
          Usage
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`ModelTrainer nnTrainer = new NeuralNetworkTrainer();
nnTrainer.trainPipeline("data/images/");
// [Common] Loading dataset from data/images/
// [Common] Splitting into train/test and normalizing
// [NeuralNet] Training Neural Network for 100 epochs
// [NeuralNet] Evaluating accuracy and loss on validation set
// [NeuralNet] Serializing network weights to .h5 file

ModelTrainer dtTrainer = new DecisionTreeTrainer();
dtTrainer.trainPipeline("data/iris.csv");
// [Common] Loading dataset from data/iris.csv
// [Common] Splitting into train/test and normalizing
// [DecisionTree] Building decision tree with max_depth=5
// [DecisionTree] Computing classification report (precision/recall)
// [Common] Saving model to disk as default format  ← inherited default`}</code>
        </pre>
      </section>

      <hr className="my-6" />

      {/* 11. Deep dive — hook methods */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Hook methods vs abstract steps
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          The Template pattern distinguishes between two kinds of steps:{" "}
          <strong>abstract steps</strong> that subclasses <em>must</em>{" "}
          implement, and <strong>hook methods</strong> — concrete methods with
          an empty or default body that subclasses <em>may</em> override to
          inject optional behavior.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          In this example,{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            saveModel()
          </code>{" "}
          is effectively a hook — it ships with a working default, so{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            DecisionTreeTrainer
          </code>{" "}
          ignores it while{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            NeuralNetworkTrainer
          </code>{" "}
          overrides it to write a model-specific{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            .h5
          </code>{" "}
          file.
        </p>
        <Callout type="info">
          A common extension is adding an explicit <em>empty</em> hook like{" "}
          <code className="text-sm bg-blue-100 px-1.5 py-0.5 rounded text-blue-800">
            protected void onTrainingComplete() {"{}"}
          </code>{" "}
          inside the template method — a controlled extension point that
          subclasses opt into without changing the core algorithm.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 13. When to use / avoid */}
      <DoAndDont
        use={[
          "Multiple classes share the same algorithm structure but differ in specific steps",
          "You want to prevent subclasses from reordering or skipping critical pipeline steps",
          "You have default behavior for some steps that only a few subclasses need to override",
          "You're building frameworks or SDKs where users extend — not replace — core logic",
        ]}
        avoid={[
          "The algorithm structure itself varies between subclasses — use Strategy instead",
          "You only have one concrete implementation — abstract base class adds no value",
          "The step variations are runtime-configurable — composition beats inheritance here",
          "Deep inheritance hierarchies already exist — Template deepens coupling further",
        ]}
      />

      <hr className="my-6" />

      {/* 15. Real-world examples */}
      <RealWorldExamples
        examples={[
          {
            name: "JUnit lifecycle",
            detail:
              "setUp() → test() → tearDown() is a template method. Each test class overrides the steps; JUnit owns the sequence.",
          },
          {
            name: "Spring's JdbcTemplate",
            detail:
              "Handles connection acquisition, exception translation, and resource cleanup. You provide only the SQL and row-mapping logic.",
          },
          {
            name: "Android Activity lifecycle",
            detail:
              "onCreate → onStart → onResume → onPause → onStop → onDestroy is a fixed template. Apps override only the hooks they need.",
          },
          {
            name: "Webpack build pipeline",
            detail:
              "resolve → load → transform → bundle → emit is a template. Plugins override specific lifecycle hooks without touching the overall flow.",
          },
        ]}
      />

      <hr className="my-6" />

      {/* 17. Key takeaway */}
      <KeyTakeaway>
        The Template pattern inverts the usual relationship: the parent class
        calls the child, not the other way around — this is the{" "}
        <em>Hollywood Principle</em> ("Don't call us, we'll call you"). By
        marking the template method{" "}
        <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-700">
          final
        </code>
        , you guarantee the algorithm's invariant structure across every
        subclass while leaving precise extension points for variation. The key
        design decision is choosing which steps are abstract (mandatory
        overrides) versus hooks (optional overrides with defaults) — get that
        split right and the pattern is both rigid where it needs to be and
        flexible where it counts.
      </KeyTakeaway>

      {/* 18. PatternNav */}
      <PatternNav
        prev={{
          title: "Composite Pattern",
          pattern: "Structural",
          href: "/lld/patterns/composite",
        }}
        next={{
          title: "Proxy Pattern",
          pattern: "Structural",
          href: "/lld/patterns/proxy",
        }}
      />
    </main>
  );
}
