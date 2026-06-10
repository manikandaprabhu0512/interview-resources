const solid: React.ReactNode = (
  <svg
    viewBox="0 0 680 420"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-solid"
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

    {/* Center */}
    <rect
      x="250"
      y="150"
      width="180"
      height="80"
      rx="10"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text
      x="340"
      y="185"
      textAnchor="middle"
      fontSize="28"
      fontWeight="700"
      fill="#111827"
    >
      SOLID
    </text>

    <text x="340" y="208" textAnchor="middle" fontSize="12" fill="#6b7280">
      Design Principles
    </text>

    {/* SRP */}
    <rect
      x="260"
      y="20"
      width="160"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="340"
      y="45"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      SRP
    </text>

    <text x="340" y="63" textAnchor="middle" fontSize="11" fill="#6b7280">
      Single Responsibility
    </text>

    {/* OCP */}
    <rect
      x="40"
      y="160"
      width="170"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="125"
      y="185"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      OCP
    </text>

    <text x="125" y="203" textAnchor="middle" fontSize="11" fill="#6b7280">
      Open / Closed
    </text>

    {/* LSP */}
    <rect
      x="470"
      y="160"
      width="170"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="555"
      y="185"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      LSP
    </text>

    <text x="555" y="203" textAnchor="middle" fontSize="11" fill="#6b7280">
      Liskov Substitution
    </text>

    {/* ISP */}
    <rect
      x="90"
      y="310"
      width="190"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="185"
      y="335"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      ISP
    </text>

    <text x="185" y="353" textAnchor="middle" fontSize="11" fill="#6b7280">
      Interface Segregation
    </text>

    {/* DIP */}
    <rect
      x="400"
      y="310"
      width="190"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="495"
      y="335"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      DIP
    </text>

    <text x="495" y="353" textAnchor="middle" fontSize="11" fill="#6b7280">
      Dependency Inversion
    </text>

    {/* Connections */}
    <line
      x1="340"
      y1="150"
      x2="340"
      y2="80"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-solid)"
    />

    <line
      x1="250"
      y1="190"
      x2="210"
      y2="190"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-solid)"
    />

    <line
      x1="430"
      y1="190"
      x2="470"
      y2="190"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-solid)"
    />

    <line
      x1="300"
      y1="230"
      x2="220"
      y2="310"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-solid)"
    />

    <line
      x1="380"
      y1="230"
      x2="460"
      y2="310"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-solid)"
    />

    {/* Caption */}
    <text x="340" y="405" textAnchor="middle" fontSize="12" fill="#9ca3af">
      SOLID consists of five principles that improve maintainability,
      flexibility, and extensibility.
    </text>
  </svg>
);

export default solid;
