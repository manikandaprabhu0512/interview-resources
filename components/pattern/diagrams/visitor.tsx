const visitor: React.ReactNode = (
  <svg
    viewBox="0 0 680 470"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-visitor"
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
        id="tri-visitor"
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

    {/* FileSystemItem */}

    <rect
      x="240"
      y="30"
      width="200"
      height="90"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <line x1="240" y1="65" x2="440" y2="65" stroke="#fbbf24" strokeWidth="2" />

    <text x="340" y="50" textAnchor="middle" fill="#374151" fontSize="14">
      «abstract»
    </text>

    <text
      x="340"
      y="86"
      textAnchor="middle"
      fill="#111827"
      fontSize="16"
      fontWeight="600"
    >
      FileSystemItem
    </text>

    <text x="340" y="105" textAnchor="middle" fill="#4b5563" fontSize="13">
      accept(visitor)
    </text>

    {/* FileSystemVisitor */}

    <rect
      x="470"
      y="30"
      width="180"
      height="100"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <line x1="470" y1="65" x2="650" y2="65" stroke="#fbbf24" strokeWidth="2" />

    <text x="560" y="50" textAnchor="middle" fill="#374151" fontSize="14">
      «interface»
    </text>

    <text
      x="560"
      y="86"
      textAnchor="middle"
      fill="#111827"
      fontSize="16"
      fontWeight="600"
    >
      FileSystemVisitor
    </text>

    <text x="560" y="105" textAnchor="middle" fill="#4b5563" fontSize="12">
      visit(TextFile)
    </text>

    <text x="560" y="120" textAnchor="middle" fill="#4b5563" fontSize="12">
      visit(ImageFile)
    </text>

    {/* TextFile */}

    <rect
      x="40"
      y="200"
      width="160"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <text x="120" y="245" textAnchor="middle" fill="#111827" fontWeight="600">
      TextFile
    </text>

    {/* ImageFile */}

    <rect
      x="260"
      y="200"
      width="160"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <text x="340" y="245" textAnchor="middle" fill="#111827" fontWeight="600">
      ImageFile
    </text>

    {/* VideoFile */}

    <rect
      x="480"
      y="200"
      width="160"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <text x="560" y="245" textAnchor="middle" fill="#111827" fontWeight="600">
      VideoFile
    </text>

    {/* Inheritance */}

    <line
      x1="120"
      y1="200"
      x2="290"
      y2="120"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeDasharray="6 4"
      markerEnd="url(#tri-visitor)"
    />

    <line
      x1="340"
      y1="200"
      x2="340"
      y2="120"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeDasharray="6 4"
      markerEnd="url(#tri-visitor)"
    />

    <line
      x1="560"
      y1="200"
      x2="390"
      y2="120"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeDasharray="6 4"
      markerEnd="url(#tri-visitor)"
    />

    {/* Visitors */}

    <rect
      x="70"
      y="350"
      width="160"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <text x="150" y="395" textAnchor="middle" fill="#111827" fontWeight="600">
      SizeCalculationVisitor
    </text>

    <rect
      x="260"
      y="350"
      width="160"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <text x="340" y="395" textAnchor="middle" fill="#111827" fontWeight="600">
      CompressionVisitor
    </text>

    <rect
      x="450"
      y="350"
      width="180"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <text x="540" y="395" textAnchor="middle" fill="#111827" fontWeight="600">
      VirusScanningVisitor
    </text>

    {/* Visitor inheritance */}

    <line
      x1="150"
      y1="350"
      x2="520"
      y2="130"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeDasharray="6 4"
      markerEnd="url(#tri-visitor)"
    />

    <line
      x1="340"
      y1="350"
      x2="560"
      y2="130"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeDasharray="6 4"
      markerEnd="url(#tri-visitor)"
    />

    <line
      x1="540"
      y1="350"
      x2="600"
      y2="130"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeDasharray="6 4"
      markerEnd="url(#tri-visitor)"
    />

    {/* Double dispatch */}

    <line
      x1="420"
      y1="75"
      x2="470"
      y2="75"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-visitor)"
    />

    <text x="340" y="458" textAnchor="middle" fill="#9ca3af" fontSize="13">
      Double Dispatch: element.accept(visitor) → visitor.visit(concreteElement)
    </text>
  </svg>
);

export default visitor;
