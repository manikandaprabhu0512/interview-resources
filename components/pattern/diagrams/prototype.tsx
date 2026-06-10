const prototype: React.ReactNode = (
  <svg
    viewBox="0 0 680 360"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-prototype"
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
        id="tri-prototype"
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

    {/* Cloneable */}
    <rect
      x="250"
      y="30"
      width="180"
      height="80"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <line x1="250" y1="65" x2="430" y2="65" stroke="#fbbf24" strokeWidth="2" />

    <text x="340" y="52" textAnchor="middle" fill="#374151" fontSize="14">
      «interface»
    </text>

    <text
      x="340"
      y="84"
      textAnchor="middle"
      fill="#111827"
      fontSize="16"
      fontWeight="600"
    >
      Cloneable
    </text>

    <text x="340" y="100" textAnchor="middle" fill="#4b5563" fontSize="13">
      clone()
    </text>

    {/* INPC */}
    <rect
      x="240"
      y="180"
      width="200"
      height="110"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <line
      x1="240"
      y1="215"
      x2="440"
      y2="215"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <text
      x="340"
      y="202"
      textAnchor="middle"
      fill="#111827"
      fontSize="16"
      fontWeight="600"
    >
      INPC
    </text>

    <text x="340" y="236" textAnchor="middle" fill="#4b5563" fontSize="13">
      name
    </text>

    <text x="340" y="255" textAnchor="middle" fill="#4b5563" fontSize="13">
      health
    </text>

    <text x="340" y="274" textAnchor="middle" fill="#4b5563" fontSize="13">
      clone()
    </text>

    {/* Client */}
    <rect
      x="40"
      y="180"
      width="120"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <text
      x="100"
      y="212"
      textAnchor="middle"
      fill="#111827"
      fontSize="16"
      fontWeight="600"
    >
      Client
    </text>

    <text x="100" y="235" textAnchor="middle" fill="#4b5563" fontSize="12">
      clone()
    </text>

    {/* Implements */}
    <line
      x1="340"
      y1="180"
      x2="340"
      y2="110"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeDasharray="6 4"
      markerEnd="url(#tri-prototype)"
    />

    {/* Client uses prototype */}
    <line
      x1="160"
      y1="220"
      x2="240"
      y2="220"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-prototype)"
    />

    {/* Clone result */}
    <rect
      x="520"
      y="180"
      width="120"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <text
      x="580"
      y="212"
      textAnchor="middle"
      fill="#111827"
      fontSize="16"
      fontWeight="600"
    >
      Clone
    </text>

    <text x="580" y="235" textAnchor="middle" fill="#4b5563" fontSize="12">
      copied NPC
    </text>

    <line
      x1="440"
      y1="220"
      x2="520"
      y2="220"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-prototype)"
    />

    <text x="340" y="338" textAnchor="middle" fill="#9ca3af" fontSize="13">
      Client clones an existing prototype instead of rebuilding objects
    </text>
  </svg>
);

export default prototype;
