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

export default function IteratorPatternPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      {/* 1. PatternMeta */}
      <PatternMeta pattern="Behavioral" difficulty="Intermediate" />

      {/* 2. Title + GitHub button */}
      <div className="flex items-start justify-between mt-4 mb-3">
        <h1 className="text-3xl font-bold tracking-tight">Iterator Pattern</h1>
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main/Patterns/Iterator_Pattern"
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
        Traverse any collection — linked list, tree, playlist — through the same
        two-method interface, without exposing how it's stored.
      </Tagline>

      <hr className="my-6" />

      {/* 5. The Problem */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The problem</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          You have three collections: a singly-linked list, a binary tree, and a
          playlist backed by an{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            ArrayList
          </code>
          . Each one stores data differently, so client code that walks them is
          forced to know those internals — pointer chasing for the list,
          stack-based inorder for the tree, index arithmetic for the playlist.
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// Client must know the internals of every collection it touches
LinkedList node = head;
while (node != null) { process(node.data); node = node.next; }   // pointer chase

// Completely different traversal for a tree
Deque<BinaryTree> stack = new ArrayDeque<>();
pushLefts(root, stack);
while (!stack.isEmpty()) { ... }                                   // stack-based

// Yet another approach for a list-backed playlist
for (int i = 0; i < playlist.songs.size(); i++) { ... }           // index-based`}</code>
        </pre>
        <Callout type="warning">
          Every new collection type forces client code to change. Swapping a
          linked list for a different data structure breaks every loop that
          traverses it — the traversal logic and the storage structure are fully
          coupled.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 7. The Solution */}
      <section>
        <h2 className="text-xl font-semibold mb-3">The solution</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Iterator encapsulates the traversal logic inside a dedicated object.
          Each collection produces its own iterator via{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            getIterator()
          </code>{" "}
          — the client drives all three with the same{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            hasNext()
          </code>{" "}
          /{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            next()
          </code>{" "}
          loop, completely unaware of whether it's chasing pointers, popping a
          stack, or incrementing an index.
        </p>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              Iterator interface
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                Iterator&lt;T&gt;
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Declares the universal traversal contract:{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                hasNext()
              </code>{" "}
              and{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                next()
              </code>
              . All client loops are written against this — never against a
              concrete collection.
            </p>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">
              Iterable interface
            </p>
            <p className="text-sm font-medium text-gray-800 mb-1">
              <code className="text-sm bg-gray-100 px-1 rounded text-gray-700">
                Iterable&lt;T&gt;
              </code>
            </p>
            <p className="text-xs text-gray-600">
              Marks a class as traversable. Any collection implementing{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                getIterator()
              </code>{" "}
              becomes a first-class citizen in the pattern — the factory for its
              own iterator.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              LinkedListIterator
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Holds a{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                current
              </code>{" "}
              node pointer. Each{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                next()
              </code>{" "}
              reads data and advances the pointer.
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              BinaryTreeInorderIterator
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Maintains a{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                Deque
              </code>{" "}
              stack. Pushes left spine eagerly; on{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                next()
              </code>{" "}
              pops, then pushes the right subtree's left spine.
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              PlaylistIterator
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Wraps an{" "}
              <code className="text-xs bg-gray-100 px-1 rounded text-gray-600">
                ArrayList
              </code>{" "}
              with a simple index. The simplest concrete iterator — but the
              client loop is identical to the other two.
            </p>
          </div>
        </div>

        <StructureDiagram pattern="iterator" />
      </section>

      <hr className="my-6" />

      {/* 9. Code */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Code</h2>

        {/* Interfaces */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          Interfaces
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`interface Iterator<T> {
    boolean hasNext();
    T next();
}

interface Iterable<T> {
    Iterator<T> getIterator(); // each collection is a factory for its own iterator
}`}</code>
        </pre>

        {/* Linked list */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          LinkedList + its iterator
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class LinkedList implements Iterable<Integer> {
    public int data;
    public LinkedList next;

    public LinkedList(int value) { data = value; next = null; }

    public Iterator<Integer> getIterator() {
        return new LinkedListIterator(this);
    }
}

class LinkedListIterator implements Iterator<Integer> {
    private LinkedList current;

    public LinkedListIterator(LinkedList head) { current = head; }

    public boolean hasNext() { return current != null; }

    public Integer next() {
        int val = current.data;
        current = current.next;   // advance the pointer
        return val;
    }
}`}</code>
        </pre>

        {/* Binary tree */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          BinaryTree + inorder iterator
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class BinaryTree implements Iterable<Integer> {
    public int data;
    public BinaryTree left, right;

    public BinaryTree(int value) { data = value; }

    public Iterator<Integer> getIterator() {
        return new BinaryTreeInorderIterator(this);
    }
}

class BinaryTreeInorderIterator implements Iterator<Integer> {
    private Deque<BinaryTree> stk = new ArrayDeque<>();

    // Push the entire left spine onto the stack upfront
    private void pushLefts(BinaryTree node) {
        while (node != null) { stk.push(node); node = node.left; }
    }

    public BinaryTreeInorderIterator(BinaryTree root) { pushLefts(root); }

    public boolean hasNext() { return !stk.isEmpty(); }

    public Integer next() {
        BinaryTree node = stk.pop();
        int val = node.data;
        if (node.right != null) pushLefts(node.right); // prepare right subtree
        return val;
    }
}`}</code>
        </pre>

        <Callout type="tip">
          The tree iterator's{" "}
          <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-800">
            pushLefts()
          </code>{" "}
          trick is the heart of lazy inorder traversal — it defers work until
          each{" "}
          <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-800">
            next()
          </code>{" "}
          call rather than pre-computing the entire traversal. The client sees
          none of this complexity — just{" "}
          <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-800">
            hasNext()
          </code>{" "}
          /{" "}
          <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-800">
            next()
          </code>
          .
        </Callout>

        {/* Playlist */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2 mt-4">
          Playlist + iterator
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`class Playlist implements Iterable<Song> {
    public List<Song> songs = new ArrayList<>();

    public void addSong(Song s) { songs.add(s); }

    public Iterator<Song> getIterator() {
        return new PlaylistIterator(songs);
    }
}

class PlaylistIterator implements Iterator<Song> {
    private List<Song> vec;
    private int index = 0;

    public PlaylistIterator(List<Song> v) { vec = v; }

    public boolean hasNext() { return index < vec.size(); }
    public Song next()       { return vec.get(index++); }
}`}</code>
        </pre>

        {/* Usage — the payoff */}
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          Usage — one loop, three structures
        </p>
        <pre className="bg-gray-950 text-gray-100 rounded-lg px-5 py-4 text-sm leading-relaxed overflow-x-auto mb-4">
          <code>{`// Build the linked list: 1 → 2 → 3
LinkedList list = new LinkedList(1);
list.next = new LinkedList(2);
list.next.next = new LinkedList(3);

Iterator<Integer> it1 = list.getIterator();
while (it1.hasNext()) System.out.print(it1.next() + " ");
// LinkedList contents: 1 2 3

// Build a BST: left=1, root=2, right=3
BinaryTree root = new BinaryTree(2);
root.left = new BinaryTree(1); root.right = new BinaryTree(3);

Iterator<Integer> it2 = root.getIterator();
while (it2.hasNext()) System.out.print(it2.next() + " ");
// BinaryTree inorder: 1 2 3

// Build a playlist
Playlist playlist = new Playlist();
playlist.addSong(new Song("Admirin You", "Karan Aujla"));
playlist.addSong(new Song("Husn", "Anuv Jain"));

Iterator<Song> it3 = playlist.getIterator();
while (it3.hasNext()) {
    Song s = it3.next();
    System.out.println("  " + s.title + " by " + s.artist);
}
// Playlist songs:
//   Admirin You by Karan Aujla
//   Husn by Anuv Jain`}</code>
        </pre>

        <Callout type="info">
          All three loops are <em>identical</em> in structure. Replacing the
          linked list with a skip list or the playlist with a priority queue
          means writing one new iterator class — the client loop doesn't change
          a character.
        </Callout>
      </section>

      <hr className="my-6" />

      {/* 11. Deep dive — internal vs external */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          External vs internal iterators
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          This implementation uses an <strong>external iterator</strong> — the
          client controls the loop, calling{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            hasNext()
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            next()
          </code>{" "}
          explicitly. Java's{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            for-each
          </code>{" "}
          loop uses this under the hood via{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            java.lang.Iterable
          </code>
          . An <strong>internal iterator</strong> inverts control — you pass a
          lambda or callback to the collection and it drives the traversal
          itself (e.g.{" "}
          <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
            list.forEach(x -&gt; ...)
          </code>
          ).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              External (this example)
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Client controls the pace. You can pause mid-traversal, interleave
              two iterators, or break early — full flexibility for complex
              traversal logic.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Internal (forEach / streams)
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Collection drives the loop. Simpler to write for the client but
              you lose fine-grained control — you can't pause, peek ahead, or
              interleave collections.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-6" />

      {/* 13. When to use / avoid */}
      <DoAndDont
        use={[
          "You want a uniform traversal API across collections with different internal structures",
          "You need to support multiple simultaneous traversals over the same collection (each iterator keeps its own state)",
          "You want to hide a collection's implementation details — clients shouldn't know if it's a list, tree, or graph",
          "You're implementing lazy traversal over a large or infinite sequence — compute elements only when requested",
        ]}
        avoid={[
          "The collection is simple and always accessed the same way — a plain for-loop is clearer",
          "You only ever need one traversal order — there's no reason to abstract it",
          "Performance is critical and the iterator indirection is measurable — consider direct index access instead",
          "The language already provides a built-in iteration protocol (Java Iterable, Python __iter__) — use it rather than rolling your own",
        ]}
      />

      <hr className="my-6" />

      {/* 15. Real-world examples */}
      <RealWorldExamples
        examples={[
          {
            name: "java.util.Iterator",
            detail:
              "Every Java collection — ArrayList, LinkedList, HashSet, TreeMap — implements this interface. The for-each loop desugars to exactly hasNext() / next() calls.",
          },
          {
            name: "Python __iter__ / __next__",
            detail:
              "Python's iteration protocol is the Iterator pattern baked into the language. Any object implementing both dunder methods works in a for loop, list comprehension, or generator chain.",
          },
          {
            name: "Database cursors",
            detail:
              "A SQL cursor is an external iterator over a result set — the client calls FETCH NEXT while the database streams rows lazily, never loading the full result into memory.",
          },
          {
            name: "React Server Components streaming",
            detail:
              "RSC uses an async iterator to stream UI chunks from server to client — the client renders each chunk as it arrives without waiting for the full response.",
          },
        ]}
      />

      <hr className="my-6" />

      {/* 17. Key takeaway */}
      <KeyTakeaway>
        The Iterator pattern reduces every traversal problem to two methods:{" "}
        <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-700">
          hasNext()
        </code>{" "}
        and{" "}
        <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-700">
          next()
        </code>
        . The collection encapsulates its own traversal logic inside a dedicated
        iterator object — pointer chasing, stack-based inorder, or index
        arithmetic — invisible to the client. The real power shows when you have
        structurally different collections:{" "}
        <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-700">
          LinkedListIterator
        </code>
        ,{" "}
        <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-700">
          BinaryTreeInorderIterator
        </code>
        , and{" "}
        <code className="text-sm bg-green-100 px-1.5 py-0.5 rounded text-green-700">
          PlaylistIterator
        </code>{" "}
        all produce the same loop — write the traversal once and swap the
        collection freely without touching a single client line.
      </KeyTakeaway>

      {/* 18. PatternNav */}
      <PatternNav
        prev={{
          title: "Builder Pattern",
          pattern: "Creational",
          href: "/lld/patterns/builder",
        }}
        next={{
          title: "FlyWeight Pattern",
          pattern: "Structural",
          href: "/lld/patterns/flyweight",
        }}
      />
    </main>
  );
}
