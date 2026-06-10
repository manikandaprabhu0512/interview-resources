const ocp: React.ReactNode = (
  <svg
    viewBox="0 0 680 430"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="tri-ocp"
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
        id="arr-ocp"
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

    {/* Interface */}

    <rect
      x="250"
      y="40"
      width="180"
      height="70"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text
      x="340"
      y="68"
      textAnchor="middle"
      fontSize="16"
      fontWeight="600"
      fill="#111827"
    >
      Persistence
    </text>

    <text x="340" y="92" textAnchor="middle" fontSize="12" fill="#6b7280">
      save(cart)
    </text>

    {/* SQL */}

    <rect
      x="40"
      y="220"
      width="170"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="125"
      y="265"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      SQLPersistence
    </text>

    {/* Mongo */}

    <rect
      x="255"
      y="220"
      width="170"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="340"
      y="265"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      MongoPersistence
    </text>

    {/* File */}

    <rect
      x="470"
      y="220"
      width="170"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="555"
      y="265"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      FilePersistence
    </text>

    {/* Inheritance */}

    <line
      x1="125"
      y1="220"
      x2="295"
      y2="120"
      stroke="#9ca3af"
      strokeDasharray="5 5"
      strokeWidth="2"
      markerEnd="url(#tri-ocp)"
    />

    <line
      x1="340"
      y1="220"
      x2="340"
      y2="120"
      stroke="#9ca3af"
      strokeDasharray="5 5"
      strokeWidth="2"
      markerEnd="url(#tri-ocp)"
    />

    <line
      x1="555"
      y1="220"
      x2="385"
      y2="120"
      stroke="#9ca3af"
      strokeDasharray="5 5"
      strokeWidth="2"
      markerEnd="url(#tri-ocp)"
    />

    {/* Shopping Cart */}

    <rect
      x="250"
      y="340"
      width="180"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="340"
      y="375"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      ShoppingCart
    </text>

    <line
      x1="340"
      y1="340"
      x2="340"
      y2="300"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-ocp)"
    />

    <text x="340" y="420" textAnchor="middle" fontSize="12" fill="#9ca3af">
      New storage types can be added without modifying existing code.
    </text>
  </svg>
);

export default ocp;
