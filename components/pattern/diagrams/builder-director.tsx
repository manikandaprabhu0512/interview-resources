const builderDirector: React.ReactNode = (
  <svg
    viewBox="0 0 680 180"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-bd"
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

    {/* Client */}
    <rect
      x="10"
      y="30"
      width="130"
      height="72"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="10" y1="52" x2="140" y2="52" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="75"
      y="45"
      textAnchor="middle"
      fill="#92400e"
      fontSize="12"
      fontWeight="600"
    >
      Client
    </text>
    <text x="75" y="70" textAnchor="middle" fill="#78350f" fontSize="10">
      uses Director
    </text>
    <text x="75" y="86" textAnchor="middle" fill="#78350f" fontSize="10">
      or Builder directly
    </text>

    {/* Arrow Client to Director */}
    <line
      x1="140"
      y1="60"
      x2="198"
      y2="60"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-bd)"
    />

    {/* Director */}
    <rect
      x="200"
      y="30"
      width="160"
      height="72"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="200" y1="52" x2="360" y2="52" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="280"
      y="45"
      textAnchor="middle"
      fill="#92400e"
      fontSize="12"
      fontWeight="600"
    >
      HttpRequestDirector
    </text>
    <text x="280" y="68" textAnchor="middle" fill="#78350f" fontSize="10">
      createGetRequest()
    </text>
    <text x="280" y="82" textAnchor="middle" fill="#78350f" fontSize="10">
      createJsonPostRequest()
    </text>
    <text x="295" y="30" textAnchor="middle" fill="#6b7280" fontSize="10">
      (1..*)
    </text>

    {/* Arrow Director to Builder */}
    <line
      x1="360"
      y1="66"
      x2="418"
      y2="66"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-bd)"
    />

    {/* Builder */}
    <rect
      x="420"
      y="30"
      width="120"
      height="72"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="420" y1="52" x2="540" y2="52" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="480"
      y="45"
      textAnchor="middle"
      fill="#92400e"
      fontSize="12"
      fontWeight="600"
    >
      HttpRequestBuilder
    </text>
    <text x="480" y="68" textAnchor="middle" fill="#78350f" fontSize="10">
      with*() methods
    </text>
    <text x="480" y="82" textAnchor="middle" fill="#78350f" fontSize="10">
      build()
    </text>

    {/* Arrow Builder to Target */}
    <line
      x1="540"
      y1="66"
      x2="598"
      y2="66"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-bd)"
    />

    {/* Target */}
    <rect
      x="600"
      y="30"
      width="70"
      height="72"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line x1="600" y1="52" x2="670" y2="52" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="635"
      y="45"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="600"
    >
      HttpRequest
    </text>
    <text x="635" y="68" textAnchor="middle" fill="#6b7280" fontSize="10">
      url method
    </text>
    <text x="635" y="82" textAnchor="middle" fill="#6b7280" fontSize="10">
      headers body
    </text>

    {/* Arrow Client also directly to Builder (bypass Director) */}
    <path
      d="M75 102 Q75 140 480 140 Q540 140 540 102"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#arr-bd)"
    />
    <text x="310" y="155" textAnchor="middle" fill="#9ca3af" fontSize="10">
      client can also use builder directly
    </text>

    <text x="340" y="175" textAnchor="middle" fill="#9ca3af" fontSize="11">
      Director provides pre-packaged recipes — Builder still accessible
      directly.
    </text>
  </svg>
);

export default builderDirector;
