const isp: React.ReactNode = (
  <svg
    viewBox="0 0 680 430"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="tri-isp"
        viewBox="0 0 10 10"
        refX="1"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M2 1L8 5L2 9" fill="white" stroke="#9ca3af" strokeWidth="1" />
      </marker>
    </defs>

    {/* 2D Interface */}

    <rect
      x="120"
      y="40"
      width="190"
      height="80"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text
      x="215"
      y="70"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      TwoDimensionalShape
    </text>

    <text x="215" y="95" textAnchor="middle" fontSize="12" fill="#6b7280">
      area()
    </text>

    {/* 3D Interface */}

    <rect
      x="370"
      y="40"
      width="190"
      height="95"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text
      x="465"
      y="70"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      ThreeDimensionalShape
    </text>

    <text x="465" y="95" textAnchor="middle" fontSize="12" fill="#6b7280">
      area()
    </text>

    <text x="465" y="115" textAnchor="middle" fontSize="12" fill="#6b7280">
      volume()
    </text>

    {/* Square */}

    <rect
      x="40"
      y="260"
      width="170"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="125"
      y="305"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      ISquare
    </text>

    {/* Rectangle */}

    <rect
      x="260"
      y="260"
      width="170"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="345"
      y="305"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      IRectangle
    </text>

    {/* Cube */}

    <rect
      x="480"
      y="260"
      width="170"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="565"
      y="305"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      ICube
    </text>

    {/* Square -> 2D */}

    <line
      x1="125"
      y1="260"
      x2="185"
      y2="130"
      stroke="#9ca3af"
      strokeDasharray="5 5"
      strokeWidth="2"
      markerEnd="url(#tri-isp)"
    />

    {/* Rectangle -> 2D */}

    <line
      x1="345"
      y1="260"
      x2="245"
      y2="130"
      stroke="#9ca3af"
      strokeDasharray="5 5"
      strokeWidth="2"
      markerEnd="url(#tri-isp)"
    />

    {/* Cube -> 3D */}

    <line
      x1="565"
      y1="260"
      x2="500"
      y2="145"
      stroke="#9ca3af"
      strokeDasharray="5 5"
      strokeWidth="2"
      markerEnd="url(#tri-isp)"
    />

    <text x="340" y="400" textAnchor="middle" fontSize="12" fill="#9ca3af">
      Clients should not be forced to depend on methods they do not use.
    </text>
  </svg>
);

export default isp;
