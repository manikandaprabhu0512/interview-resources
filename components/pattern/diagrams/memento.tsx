const memento: React.ReactNode = (
  <svg
    viewBox="0 0 680 380"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-memento"
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
        id="tri-memento"
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

    {/* Database */}

    <rect
      x="40"
      y="70"
      width="180"
      height="120"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <line x1="40" y1="105" x2="220" y2="105" stroke="#d1d5db" strokeWidth="2" />

    <text
      x="130"
      y="92"
      textAnchor="middle"
      fill="#111827"
      fontSize="16"
      fontWeight="600"
    >
      Database
    </text>

    <text x="130" y="128" textAnchor="middle" fill="#4b5563" fontSize="13">
      records
    </text>

    <text x="130" y="148" textAnchor="middle" fill="#4b5563" fontSize="13">
      createMemento()
    </text>

    <text x="130" y="168" textAnchor="middle" fill="#4b5563" fontSize="13">
      restoreFromMemento()
    </text>

    {/* Memento */}

    <rect
      x="280"
      y="70"
      width="180"
      height="120"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <line
      x1="280"
      y1="105"
      x2="460"
      y2="105"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text
      x="370"
      y="92"
      textAnchor="middle"
      fill="#111827"
      fontSize="16"
      fontWeight="600"
    >
      DatabaseMemento
    </text>

    <text x="370" y="128" textAnchor="middle" fill="#4b5563" fontSize="13">
      snapshot state
    </text>

    <text x="370" y="148" textAnchor="middle" fill="#4b5563" fontSize="13">
      getState()
    </text>

    {/* TransactionManager */}

    <rect
      x="520"
      y="50"
      width="140"
      height="160"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <line x1="520" y1="85" x2="660" y2="85" stroke="#d1d5db" strokeWidth="2" />

    <text
      x="590"
      y="72"
      textAnchor="middle"
      fill="#111827"
      fontSize="16"
      fontWeight="600"
    >
      TransactionManager
    </text>

    <text x="590" y="110" textAnchor="middle" fill="#4b5563" fontSize="13">
      backup
    </text>

    <text x="590" y="130" textAnchor="middle" fill="#4b5563" fontSize="13">
      beginTransaction()
    </text>

    <text x="590" y="150" textAnchor="middle" fill="#4b5563" fontSize="13">
      commitTransaction()
    </text>

    <text x="590" y="170" textAnchor="middle" fill="#4b5563" fontSize="13">
      rollbackTransaction()
    </text>

    {/* Relations */}

    <line
      x1="220"
      y1="130"
      x2="280"
      y2="130"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-memento)"
    />

    <line
      x1="520"
      y1="130"
      x2="460"
      y2="130"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-memento)"
    />

    {/* Flow */}

    <rect
      x="120"
      y="280"
      width="440"
      height="50"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />

    <text x="340" y="310" textAnchor="middle" fill="#6b7280" fontSize="13">
      beginTransaction → createMemento → modify state → rollback → restore
    </text>

    <text x="340" y="360" textAnchor="middle" fill="#9ca3af" fontSize="13">
      Originator creates snapshots. Caretaker stores them for undo/rollback.
    </text>
  </svg>
);

export default memento;
