const iterator: React.ReactNode = (
  <svg
    viewBox="0 0 680 520"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Open arrow — has-a / returns */}
      <marker
        id="arr-iter"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto"
      >
        <path
          d="M2 1L8 5L2 9"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </marker>
      {/* Hollow triangle pointing UP — implements / extends */}
      <marker
        id="tri-iter"
        viewBox="0 0 10 10"
        refX="5"
        refY="10"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path
          d="M0 10L5 0L10 10Z"
          fill="white"
          stroke="#9ca3af"
          strokeWidth="1"
        />
      </marker>
      {/* Hollow triangle pointing LEFT — implements (horizontal) */}
      <marker
        id="tri-iter-left"
        viewBox="0 0 10 10"
        refX="1"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path
          d="M10 0L0 5L10 10Z"
          fill="white"
          stroke="#9ca3af"
          strokeWidth="1"
        />
      </marker>
    </defs>

    {/* ══════════════════════════════════════════════════════════
        TOP ROW: Two interfaces side by side
    ══════════════════════════════════════════════════════════ */}

    {/* Iterator<T> interface */}
    <rect
      x="60"
      y="20"
      width="200"
      height="86"
      rx="6"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1.5"
    />
    <line x1="60" y1="44" x2="260" y2="44" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="160"
      y="36"
      textAnchor="middle"
      fontSize="10"
      fill="#92400e"
      fontStyle="italic"
    >
      «interface»
    </text>
    <text
      x="160"
      y="62"
      textAnchor="middle"
      fontSize="13"
      fontWeight="600"
      fill="#1c1917"
    >
      Iterator&lt;T&gt;
    </text>
    <text x="75" y="80" textAnchor="start" fontSize="11" fill="#78716c">
      + hasNext(): boolean
    </text>
    <text x="75" y="96" textAnchor="start" fontSize="11" fill="#78716c">
      + next(): T
    </text>

    {/* Iterable<T> interface */}
    <rect
      x="420"
      y="20"
      width="210"
      height="86"
      rx="6"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1.5"
    />
    <line x1="420" y1="44" x2="630" y2="44" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="525"
      y="36"
      textAnchor="middle"
      fontSize="10"
      fill="#92400e"
      fontStyle="italic"
    >
      «interface»
    </text>
    <text
      x="525"
      y="62"
      textAnchor="middle"
      fontSize="13"
      fontWeight="600"
      fill="#1c1917"
    >
      Iterable&lt;T&gt;
    </text>
    <text x="435" y="80" textAnchor="start" fontSize="11" fill="#78716c">
      + getIterator(): Iterator&lt;T&gt;
    </text>

    {/* Iterable returns an Iterator — dashed arrow left */}
    <line
      x1="420"
      y1="62"
      x2="260"
      y2="62"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-iter-left)"
    />
    <text x="340" y="54" textAnchor="middle" fontSize="10" fill="#9ca3af">
      returns
    </text>

    {/* ══════════════════════════════════════════════════════════
        MIDDLE ROW: Three concrete iterators (left) + Three collections (right)
    ══════════════════════════════════════════════════════════ */}

    {/* ── Concrete Iterators ── */}

    {/* LinkedListIterator */}
    <rect
      x="20"
      y="200"
      width="178"
      height="80"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line x1="20" y1="220" x2="198" y2="220" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="109"
      y="214"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      LinkedListIterator
    </text>
    <text x="34" y="236" textAnchor="start" fontSize="10" fill="#6b7280">
      - current: LinkedList
    </text>
    <text x="34" y="252" textAnchor="start" fontSize="10" fill="#6b7280">
      + hasNext(), next()
    </text>
    <text
      x="34"
      y="268"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      pointer advance
    </text>

    {/* BinaryTreeInorderIterator */}
    <rect
      x="20"
      y="306"
      width="178"
      height="80"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line x1="20" y1="326" x2="198" y2="326" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="109"
      y="320"
      textAnchor="middle"
      fontSize="10"
      fontWeight="600"
      fill="#1c1917"
    >
      BinaryTreeInorderIterator
    </text>
    <text x="34" y="340" textAnchor="start" fontSize="10" fill="#6b7280">
      - stk: Deque&lt;BinaryTree&gt;
    </text>
    <text x="34" y="356" textAnchor="start" fontSize="10" fill="#6b7280">
      + hasNext(), next()
    </text>
    <text
      x="34"
      y="372"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      pushLefts() on right subtree
    </text>

    {/* PlaylistIterator */}
    <rect
      x="20"
      y="412"
      width="178"
      height="80"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line x1="20" y1="432" x2="198" y2="432" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="109"
      y="426"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      PlaylistIterator
    </text>
    <text x="34" y="446" textAnchor="start" fontSize="10" fill="#6b7280">
      - vec: List&lt;Song&gt;
    </text>
    <text x="34" y="462" textAnchor="start" fontSize="10" fill="#6b7280">
      - index: int
    </text>
    <text
      x="34"
      y="478"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      index increment
    </text>

    {/* All three iterators implement Iterator<T> */}
    <line
      x1="109"
      y1="200"
      x2="140"
      y2="108"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-iter)"
    />
    <line
      x1="109"
      y1="306"
      x2="120"
      y2="108"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-iter)"
    />
    <line
      x1="109"
      y1="412"
      x2="100"
      y2="108"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-iter)"
    />

    {/* ── Concrete Collections ── */}

    {/* LinkedList */}
    <rect
      x="452"
      y="200"
      width="186"
      height="80"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="452"
      y1="220"
      x2="638"
      y2="220"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="545"
      y="214"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      LinkedList
    </text>
    <text x="466" y="236" textAnchor="start" fontSize="10" fill="#6b7280">
      + data: int
    </text>
    <text x="466" y="252" textAnchor="start" fontSize="10" fill="#6b7280">
      + next: LinkedList
    </text>
    <text x="466" y="268" textAnchor="start" fontSize="10" fill="#6b7280">
      + getIterator()
    </text>

    {/* BinaryTree */}
    <rect
      x="452"
      y="306"
      width="186"
      height="90"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="452"
      y1="326"
      x2="638"
      y2="326"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="545"
      y="320"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      BinaryTree
    </text>
    <text x="466" y="340" textAnchor="start" fontSize="10" fill="#6b7280">
      + data: int
    </text>
    <text x="466" y="356" textAnchor="start" fontSize="10" fill="#6b7280">
      + left, right: BinaryTree
    </text>
    <text x="466" y="372" textAnchor="start" fontSize="10" fill="#6b7280">
      + getIterator()
    </text>

    {/* Playlist */}
    <rect
      x="452"
      y="422"
      width="186"
      height="70"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="452"
      y1="442"
      x2="638"
      y2="442"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="545"
      y="436"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      Playlist
    </text>
    <text x="466" y="456" textAnchor="start" fontSize="10" fill="#6b7280">
      + songs: List&lt;Song&gt;
    </text>
    <text x="466" y="472" textAnchor="start" fontSize="10" fill="#6b7280">
      + getIterator()
    </text>

    {/* All three collections implement Iterable<T> */}
    <line
      x1="545"
      y1="200"
      x2="545"
      y2="108"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-iter)"
    />
    <line
      x1="545"
      y1="306"
      x2="545"
      y2="200"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4,3"
    />
    <line
      x1="545"
      y1="422"
      x2="545"
      y2="396"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4,3"
    />

    {/* getIterator() arrows: collection → its iterator */}
    <line
      x1="452"
      y1="238"
      x2="198"
      y2="238"
      stroke="#6b7280"
      strokeWidth="1.5"
      strokeDasharray="4,2"
      markerEnd="url(#arr-iter)"
    />
    <line
      x1="452"
      y1="346"
      x2="198"
      y2="346"
      stroke="#6b7280"
      strokeWidth="1.5"
      strokeDasharray="4,2"
      markerEnd="url(#arr-iter)"
    />
    <line
      x1="452"
      y1="452"
      x2="198"
      y2="452"
      stroke="#6b7280"
      strokeWidth="1.5"
      strokeDasharray="4,2"
      markerEnd="url(#arr-iter)"
    />

    {/* Labels on getIterator arrows */}
    <text x="325" y="232" textAnchor="middle" fontSize="9" fill="#9ca3af">
      getIterator()
    </text>
    <text x="325" y="340" textAnchor="middle" fontSize="9" fill="#9ca3af">
      getIterator()
    </text>
    <text x="325" y="446" textAnchor="middle" fontSize="9" fill="#9ca3af">
      getIterator()
    </text>

    {/* Caption */}
    <text x="340" y="508" textAnchor="middle" fontSize="11" fill="#9ca3af">
      Three different structures, one traversal contract — the client loop never
      changes.
    </text>
  </svg>
);

export default iterator;
