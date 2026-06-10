const composite: React.ReactNode = (
  <svg
    viewBox="0 0 680 300"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-comp"
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
      <marker
        id="tri-comp"
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

    {/* FileSystemItem interface — top center */}
    <text x="340" y="18" textAnchor="middle" fill="#6b7280" fontSize="11">
      {"<<abstract>>"}
    </text>
    <rect
      x="230"
      y="26"
      width="220"
      height="100"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="230" y1="50" x2="450" y2="50" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="340"
      y="43"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      FileSystemItem
    </text>
    <text x="340" y="68" textAnchor="middle" fill="#78350f" fontSize="11">
      ls(indent)
    </text>
    <text x="340" y="84" textAnchor="middle" fill="#78350f" fontSize="11">
      openAll(indent)
    </text>
    <text x="340" y="100" textAnchor="middle" fill="#78350f" fontSize="11">
      getSize()
    </text>
    <text x="340" y="116" textAnchor="middle" fill="#78350f" fontSize="11">
      cd(name) | getName() | isFolder()
    </text>

    {/* dashed lines down from FileSystemItem */}
    <line
      x1="290"
      y1="126"
      x2="160"
      y2="175"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-comp)"
    />
    <line
      x1="390"
      y1="126"
      x2="520"
      y2="175"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-comp)"
    />
    <text x="190" y="158" textAnchor="middle" fill="#9ca3af" fontSize="10">
      is-a
    </text>
    <text x="490" y="158" textAnchor="middle" fill="#9ca3af" fontSize="10">
      is-a
    </text>

    {/* File — bottom left (Leaf) */}
    <rect
      x="40"
      y="175"
      width="240"
      height="100"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line x1="40" y1="197" x2="280" y2="197" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="160"
      y="190"
      textAnchor="middle"
      fill="#374151"
      fontSize="13"
      fontWeight="600"
    >
      File
    </text>
    <text x="160" y="214" textAnchor="middle" fill="#6b7280" fontSize="11">
      String name | int size
    </text>
    <text x="160" y="230" textAnchor="middle" fill="#6b7280" fontSize="11">
      ls(){"{}"} openAll(){"{}"}
    </text>
    <text x="160" y="246" textAnchor="middle" fill="#6b7280" fontSize="11">
      getSize(){"{}"} // returns size
    </text>
    <text x="160" y="262" textAnchor="middle" fill="#6b7280" fontSize="11">
      cd() → null | isFolder() → false
    </text>
    <text
      x="160"
      y="276"
      textAnchor="middle"
      fill="#6b7280"
      fontSize="10"
      fontStyle="italic"
    >
      Leaf — no children
    </text>

    {/* Folder — bottom right (Composite) */}
    <rect
      x="400"
      y="175"
      width="260"
      height="100"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line
      x1="400"
      y1="197"
      x2="660"
      y2="197"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="530"
      y="190"
      textAnchor="middle"
      fill="#374151"
      fontSize="13"
      fontWeight="600"
    >
      Folder
    </text>
    <text x="530" y="214" textAnchor="middle" fill="#6b7280" fontSize="11">
      {"String name  |  List<FileSystemItem>"}
    </text>
    <text x="530" y="230" textAnchor="middle" fill="#6b7280" fontSize="11">
      ls(){"{}"} openAll(){"{}"} // recurse children
    </text>
    <text x="530" y="246" textAnchor="middle" fill="#6b7280" fontSize="11">
      getSize(){"{}"} // sum children sizes
    </text>
    <text x="530" y="262" textAnchor="middle" fill="#6b7280" fontSize="11">
      cd(){"{}"} | isFolder() → true
    </text>
    <text
      x="530"
      y="276"
      textAnchor="middle"
      fill="#6b7280"
      fontSize="10"
      fontStyle="italic"
    >
      Composite — delegates to children
    </text>

    {/* self-referencing arrow — Folder has-a FileSystemItem (1..*) */}
    <path
      d="M660 225 Q690 160 450 126"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-comp)"
      strokeDasharray="0"
    />
    <text x="672" y="185" textAnchor="middle" fill="#6b7280" fontSize="10">
      (1..*)
    </text>

    {/* caption */}
    <text x="340" y="295" textAnchor="middle" fill="#9ca3af" fontSize="11">
      File and Folder share the same interface — client never needs to check
      types.
    </text>
  </svg>
);

export default composite;
