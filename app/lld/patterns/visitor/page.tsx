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

export default function VisitorPatternPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <PatternMeta pattern="Behavioral" difficulty="Advanced" />

      <div className="flex items-center justify-between mt-3">
        <h1 className="text-4xl font-bold">Visitor Pattern</h1>

        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Visitor_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      <Tagline>
        "Add new operations to existing object structures without modifying the
        objects themselves."
      </Tagline>

      <hr className="my-8" />

      {/* Problem */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">The problem</h2>

        <p className="text-gray-700 leading-7 mb-4">
          Imagine a file management system containing text files, images, and
          videos. Initially you only need one operation: calculating size.
        </p>

        <p className="text-gray-700 leading-7 mb-4">
          Later requirements arrive:
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
          <li>Compress files</li>
          <li>Scan files for viruses</li>
          <li>Generate reports</li>
          <li>Export metadata</li>
        </ul>

        <p className="text-gray-700 leading-7 mb-4">
          Without Visitor, every new operation forces modifications to every
          file class.
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class TextFile {
   void calculateSize() {}
   void compress() {}
   void scanVirus() {}
}

class ImageFile {
   void calculateSize() {}
   void compress() {}
   void scanVirus() {}
}

class VideoFile {
   void calculateSize() {}
   void compress() {}
   void scanVirus() {}
}`}</code>
        </pre>

        <Callout type="warning">
          Every new operation requires editing all file classes. The system
          becomes harder to maintain as operations grow.
        </Callout>
      </section>

      <hr className="my-8" />

      {/* Solution */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">The solution</h2>

        <p className="text-gray-700 leading-7 mb-6">
          The Visitor Pattern moves operations into dedicated visitor classes.
          File objects only expose an
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700 mx-1">
            accept()
          </code>
          method, while visitors implement behavior such as compression,
          scanning, or size calculation.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">FileSystemItem</h3>
            <p className="text-sm text-gray-600">Element abstraction.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Text/Image/Video</h3>
            <p className="text-sm text-gray-600">Concrete elements.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">FileSystemVisitor</h3>
            <p className="text-sm text-gray-600">Visitor interface.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Visitors</h3>
            <p className="text-sm text-gray-600">Encapsulated operations.</p>
          </div>
        </div>

        <StructureDiagram pattern="visitor" />
      </section>

      <hr className="my-8" />

      {/* Code */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">Code</h2>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface FileSystemVisitor {
    void visit(TextFile file);
    void visit(ImageFile file);
    void visit(VideoFile file);
}`}</code>
        </pre>

        <Callout type="tip">
          Each file type gets its own overloaded visit method.
        </Callout>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`abstract class FileSystemItem {

    protected String name;

    public FileSystemItem(String itemName) {
        this.name = itemName;
    }

    public abstract void accept(
        FileSystemVisitor visitor
    );
}`}</code>
        </pre>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class TextFile extends FileSystemItem {

    @Override
    public void accept(
        FileSystemVisitor visitor
    ) {
        visitor.visit(this);
    }
}

class ImageFile extends FileSystemItem {

    @Override
    public void accept(
        FileSystemVisitor visitor
    ) {
        visitor.visit(this);
    }
}`}</code>
        </pre>

        <Callout type="info">
          Notice that elements do not perform the operation themselves. They
          simply hand control to the visitor.
        </Callout>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class SizeCalculationVisitor
implements FileSystemVisitor {

    public void visit(TextFile file) {
        System.out.println(
          "Calculating size for TEXT file"
        );
    }

    public void visit(ImageFile file) {
        System.out.println(
          "Calculating size for IMAGE file"
        );
    }

    public void visit(VideoFile file) {
        System.out.println(
          "Calculating size for VIDEO file"
        );
    }
}`}</code>
        </pre>

        <Callout type="tip">
          Adding a new operation means creating a new visitor instead of editing
          existing file classes.
        </Callout>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`FileSystemItem img1 =
    new ImageFile("sample.jpg");

img1.accept(
    new SizeCalculationVisitor()
);

img1.accept(
    new CompressionVisitor()
);

img1.accept(
    new VirusScanningVisitor()
);

FileSystemItem vid1 =
    new VideoFile("test.mp4");

vid1.accept(
    new CompressionVisitor()
);

/*
Output

Calculating size for IMAGE file: sample.jpg
Compressing IMAGE file: sample.jpg
Scanning IMAGE file: sample.jpg
Compressing VIDEO file: test.mp4
*/`}</code>
        </pre>
      </section>

      <hr className="my-8" />

      {/* Deep Dive */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Deep dive: Double Dispatch
        </h2>

        <p className="text-gray-700 leading-7 mb-4">
          Visitor relies on a technique called Double Dispatch.
        </p>

        <p className="text-gray-700 leading-7 mb-4">
          The first dispatch happens when the client calls
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700 mx-1">
            accept(visitor)
          </code>
          on an element.
        </p>

        <p className="text-gray-700 leading-7 mb-4">
          The second dispatch happens when the element calls
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700 mx-1">
            visitor.visit(this)
          </code>
          .
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`client
  -> element.accept(visitor)

element
  -> visitor.visit(this)

TextFile
  -> visit(TextFile)

ImageFile
  -> visit(ImageFile)

VideoFile
  -> visit(VideoFile)`}</code>
        </pre>

        <Callout type="info">
          Double Dispatch allows Java to select the correct overloaded visit()
          method based on the concrete element type.
        </Callout>
      </section>

      <hr className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold mb-6">When to use / avoid</h2>

        <DoAndDont
          use={[
            "Object structure changes rarely",
            "New operations are added frequently",
            "You need reporting, exporting, analysis, validation",
            "Behavior should stay separate from data structures",
          ]}
          avoid={[
            "New element types are added frequently",
            "Object hierarchy changes often",
            "Simple polymorphism already solves the problem",
            "The visitor interface would become too large",
          ]}
        />
      </section>

      <hr className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold mb-6">Real-world examples</h2>

        <RealWorldExamples
          examples={[
            {
              name: "Compilers",
              detail:
                "AST visitors perform optimization, validation, and code generation.",
            },
            {
              name: "File Systems",
              detail:
                "Calculate size, compress files, generate reports, or scan for threats.",
            },
            {
              name: "IDE Tools",
              detail: "Traverse syntax trees for linting and refactoring.",
            },
            {
              name: "Document Processing",
              detail: "Export documents to PDF, HTML, Markdown, or XML.",
            },
          ]}
        />
      </section>

      <hr className="my-8" />

      <KeyTakeaway>
        Visitor separates operations from the objects they operate on. Instead
        of continuously modifying existing classes whenever new behavior is
        needed, new functionality is added through visitor implementations. Its
        greatest strength is extensibility of operations, achieved through
        Double Dispatch. The tradeoff is that adding new element types becomes
        more expensive because every visitor must be updated.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Prototype Pattern",
          pattern: "Creational",
          href: "/lld/patterns/prototype",
        }}
        next={{
          title: "Memento Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/memento",
        }}
      />
    </main>
  );
}
