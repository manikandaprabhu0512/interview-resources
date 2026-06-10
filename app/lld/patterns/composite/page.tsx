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
  title: "Composite Pattern",
  pattern: "Structural" as const,
  difficulty: "Intermediate" as const,
};

export const metadata: Metadata = {
  title: "Composite Pattern",
};

export default function CompositePatternPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <PatternMeta pattern={data.pattern} difficulty={data.difficulty} />

      {/* Title + GitHub */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          Composite Pattern
        </h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Composite_Pattern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md px-2.5 py-1.5 transition-colors"
        >
          <GitBranch size={13} />
          View code
        </a>
      </div>

      <Tagline>
        "Treat individual objects and compositions of objects uniformly — a file
        and a folder, same interface."
      </Tagline>

      <hr className="my-8 border-gray-100" />

      {/* The Problem */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The problem</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        You're building a file system. A{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          Folder
        </code>{" "}
        can contain{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          File
        </code>
        s and other{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          Folder
        </code>
        s. You want to call{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          getSize()
        </code>{" "}
        on anything — a single file or an entire folder tree — and get the right
        answer. Without Composite, the client has to check types everywhere:
      </p>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Without Composite — type-checking hell
int getTotalSize(Object item) {
    if (item instanceof File) {
        return ((File) item).getSize();
    } else if (item instanceof Folder) {
        int total = 0;
        for (Object child : ((Folder) item).getChildren()) {
            total += getTotalSize(child); // recursive but messy
        }
        return total;
    }
    return 0;
}`}</code>
      </pre>

      <Callout type="warning">
        Every operation — ls, openAll, getSize — needs its own type-checking
        logic. Adding a new item type (e.g. Symlink) means touching every
        switch/if-else. Composite eliminates all of this.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* The Solution */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">The solution</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Composite defines a common{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          FileSystemItem
        </code>{" "}
        interface that both{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          File
        </code>{" "}
        (leaf) and{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          Folder
        </code>{" "}
        (composite) implement. The client calls the same method on both — the
        difference is handled internally. Folder delegates to its children
        recursively; File just returns its own value.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          {
            name: "FileSystemItem",
            role: "Component (interface)",
            desc: "ls(), openAll(), getSize(), cd(), getName(), isFolder() — shared contract for both File and Folder.",
          },
          {
            name: "File",
            role: "Leaf",
            desc: "Has no children. Returns its own size, prints its own name. cd() returns null.",
          },
          {
            name: "Folder",
            role: "Composite",
            desc: "Holds a List<FileSystemItem>. Delegates every operation to children recursively.",
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

      <StructureDiagram pattern="composite" />

      <hr className="my-8 border-gray-100" />

      {/* Code */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Code</h2>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Component interface — same contract for File and Folder
interface FileSystemItem {
    void ls(int indent);             // list immediate children
    void openAll(int indent);        // recursively print entire tree
    int getSize();                   // total size (recursive for folders)
    FileSystemItem cd(String name);  // navigate into a subfolder
    String getName();
    boolean isFolder();
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Leaf — File has no children, no recursion needed
class File implements FileSystemItem {
    private String name;
    private int size;

    public File(String n, int s) { name = n; size = s; }

    public void ls(int indent) {
        System.out.println(" ".repeat(indent) + name);
    }

    public void openAll(int indent) {
        System.out.println(" ".repeat(indent) + name);
    }

    public int getSize()                    { return size; }
    public FileSystemItem cd(String name)   { return null; } // no children
    public String getName()                 { return name; }
    public boolean isFolder()               { return false; }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Composite — Folder delegates to children recursively
class Folder implements FileSystemItem {
    private String name;
    private List<FileSystemItem> children = new ArrayList<>();

    public Folder(String n) { name = n; }

    public void add(FileSystemItem item) { children.add(item); }

    public void ls(int indent) {
        String pad = " ".repeat(indent);
        for (FileSystemItem child : children) {
            // prefix folders with + to distinguish from files
            System.out.println(pad + (child.isFolder() ? "+ " : "") + child.getName());
        }
    }

    public void openAll(int indent) {
        System.out.println(" ".repeat(indent) + "+ " + name);
        for (FileSystemItem child : children) {
            child.openAll(indent + 4); // recurse with extra indent
        }
    }

    public int getSize() {
        int total = 0;
        for (FileSystemItem child : children) {
            total += child.getSize(); // recurse — folders sum their children
        }
        return total;
    }

    public FileSystemItem cd(String target) {
        for (FileSystemItem child : children) {
            if (child.isFolder() && child.getName().equals(target)) return child;
        }
        return null; // not found
    }

    public String getName()  { return name; }
    public boolean isFolder() { return true; }
}`}</code>
      </pre>

      <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
        <code>{`// Build the file system tree
Folder root = new Folder("root");
root.add(new File("file1.txt", 1));
root.add(new File("file2.txt", 1));

Folder docs = new Folder("docs");
docs.add(new File("resume.pdf", 1));
docs.add(new File("notes.txt", 1));
root.add(docs);

Folder images = new Folder("images");
images.add(new File("photo.jpg", 1));
root.add(images);

// ls — list immediate children of root
root.ls(0);
// file1.txt
// file2.txt
// + docs
// + images

// ls — list immediate children of docs
docs.ls(0);
// resume.pdf
// notes.txt

// openAll — recursively print entire tree from root
root.openAll(0);
// + root
//     file1.txt
//     file2.txt
//     + docs
//         resume.pdf
//         notes.txt
//     + images
//         photo.jpg

// cd — navigate into docs and ls
FileSystemItem cwd = root.cd("docs");
if (cwd != null) cwd.ls(0);
// resume.pdf
// notes.txt

// getSize — total size of root tree (5 files × size 1)
System.out.println(root.getSize()); // 5`}</code>
      </pre>

      <Callout type="tip">
        The power is in{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          openAll()
        </code>{" "}
        and{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          getSize()
        </code>{" "}
        — call them on a single file or the entire root folder, the interface is
        identical. The recursion lives inside{" "}
        <code className="text-sm bg-emerald-100 px-1.5 py-0.5 rounded">
          Folder
        </code>
        , invisible to the caller.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* Deep dive — recursion */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        How the recursion works
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The recursive elegance of Composite is that each node handles itself —
        no central orchestrator needed. When you call{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
          root.getSize()
        </code>
        :
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 font-mono text-xs text-gray-700 leading-relaxed">
        <p>root.getSize()</p>
        <p className="ml-4">→ file1.getSize() = 1</p>
        <p className="ml-4">→ file2.getSize() = 1</p>
        <p className="ml-4">→ docs.getSize()</p>
        <p className="ml-8">→ resume.getSize() = 1</p>
        <p className="ml-8">→ notes.getSize() = 1</p>
        <p className="ml-4">→ images.getSize()</p>
        <p className="ml-8">→ photo.getSize() = 1</p>
        <p className="mt-2 text-emerald-700 font-semibold">= 5</p>
      </div>

      <Callout type="info">
        Each{" "}
        <code className="text-sm bg-blue-100 px-1.5 py-0.5 rounded">
          Folder
        </code>{" "}
        sums its children — which may themselves be Folders that do the same.
        The base case is always a{" "}
        <code className="text-sm bg-blue-100 px-1.5 py-0.5 rounded">File</code>{" "}
        which just returns its own size. No type checks anywhere.
      </Callout>

      <hr className="my-8 border-gray-100" />

      {/* When to use / avoid */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        When to use / avoid
      </h2>
      <DoAndDont
        use={[
          "You have a part-whole hierarchy — things that contain other things of the same type (files/folders, menus/submenus, org charts)",
          "You want to treat individual objects and compositions uniformly — same method call, different behavior",
          "Recursive tree structures where operations need to propagate down the tree",
        ]}
        avoid={[
          "The hierarchy is flat — if there's no nesting, Composite adds complexity without value",
          "Leaf and Composite have very different interfaces — forcing a common interface can lead to meaningless methods (cd() returning null on File feels like a design smell)",
          "Performance-critical systems — recursive traversal of deep trees can be expensive",
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
            name: "File Systems",
            detail:
              "Exact use case — files and folders share the same interface for size, listing, traversal",
          },
          {
            name: "UI Component Trees",
            detail:
              "React/DOM — a div contains other divs and text nodes, all are Nodes with the same interface",
          },
          {
            name: "Org Charts",
            detail:
              "Employee can be an individual contributor or a manager who has direct reports",
          },
          {
            name: "Menu Systems",
            detail:
              "MenuItem can be a leaf action or a submenu that contains more MenuItems",
          },
          {
            name: "Expression Trees",
            detail:
              "Math expressions — a leaf is a number, a composite is an operator with child expressions",
          },
        ]}
      />

      <hr className="my-8 border-gray-100" />

      {/* Key takeaway */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Key takeaway</h2>
      <KeyTakeaway>
        Composite lets you build tree structures where individual objects and
        groups of objects are treated the same way. The client never needs to
        ask "is this a file or a folder?" — it just calls the method and the
        object handles it. The recursive delegation in Folder is the pattern's
        core mechanism: each node manages its own subtree, and the whole tree
        takes care of itself.
      </KeyTakeaway>

      <PatternNav
        prev={{
          title: "Facade Pattern",
          pattern: "Structural",
          href: "/lld/patterns/facade",
        }}
        next={{
          title: "Template Pattern",
          pattern: "Behavioral",
          href: "/lld/patterns/template",
        }}
      />
    </article>
  );
}
