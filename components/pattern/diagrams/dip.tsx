const dip: React.ReactNode = (
  <svg
    viewBox="0 0 680 440"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="tri-dip"
        viewBox="0 0 10 10"
        refX="1"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M2 1L8 5L2 9" fill="white" stroke="#9ca3af" strokeWidth="1" />
      </marker>

      <marker
        id="arr-dip"
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
    </defs>

    {/* High Level Module */}

    <rect
      x="250"
      y="40"
      width="180"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="340"
      y="72"
      textAnchor="middle"
      fontSize="16"
      fontWeight="600"
      fill="#111827"
    >
      DUserService
    </text>

    <text x="340" y="96" textAnchor="middle" fontSize="12" fill="#6b7280">
      storeUser()
    </text>

    {/* Abstraction */}

    <rect
      x="250"
      y="180"
      width="180"
      height="80"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text
      x="340"
      y="212"
      textAnchor="middle"
      fontSize="16"
      fontWeight="600"
      fill="#111827"
    >
      Database
    </text>

    <text x="340" y="236" textAnchor="middle" fontSize="12" fill="#6b7280">
      save(data)
    </text>

    {/* MySQL */}

    <rect
      x="90"
      y="330"
      width="180"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="180"
      y="375"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      DMySQLDatabase
    </text>

    {/* Mongo */}

    <rect
      x="410"
      y="330"
      width="180"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="500"
      y="375"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      DMongoDBDatabase
    </text>

    {/* Service -> Database */}

    <line
      x1="340"
      y1="120"
      x2="340"
      y2="180"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-dip)"
    />

    {/* MySQL -> Database */}

    <line
      x1="180"
      y1="330"
      x2="300"
      y2="270"
      stroke="#9ca3af"
      strokeDasharray="5 5"
      strokeWidth="2"
      markerEnd="url(#tri-dip)"
    />

    {/* Mongo -> Database */}

    <line
      x1="500"
      y1="330"
      x2="380"
      y2="270"
      stroke="#9ca3af"
      strokeDasharray="5 5"
      strokeWidth="2"
      markerEnd="url(#tri-dip)"
    />

    <text x="340" y="430" textAnchor="middle" fontSize="12" fill="#9ca3af">
      High-level and low-level modules should depend on abstractions, not on
      concrete implementations.
    </text>
  </svg>
);

export default dip;
