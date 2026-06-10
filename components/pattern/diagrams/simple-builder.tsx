const simpleBuilder: React.ReactNode = (
  <svg
    viewBox="0 0 680 160"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-sb"
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
      x="20"
      y="40"
      width="160"
      height="72"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="20" y1="62" x2="180" y2="62" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="100"
      y="55"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      Client
    </text>
    <text x="100" y="80" textAnchor="middle" fill="#78350f" fontSize="11">
      HttpRequestBuilder
    </text>
    <text x="100" y="96" textAnchor="middle" fill="#78350f" fontSize="11">
      builder
    </text>
    <text x="100" y="108" textAnchor="middle" fill="#78350f" fontSize="10">
      builder.build(){"{}"}
    </text>

    {/* Arrow Client to Builder */}
    <line
      x1="180"
      y1="76"
      x2="258"
      y2="76"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-sb)"
    />

    {/* Builder */}
    <rect
      x="260"
      y="40"
      width="180"
      height="72"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="260" y1="62" x2="440" y2="62" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="350"
      y="55"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      HttpRequestBuilder
    </text>
    <text x="350" y="80" textAnchor="middle" fill="#78350f" fontSize="11">
      withUrl() withMethod()
    </text>
    <text x="350" y="96" textAnchor="middle" fill="#78350f" fontSize="11">
      withHeader() withBody()
    </text>
    <text x="350" y="108" textAnchor="middle" fill="#78350f" fontSize="10">
      build() → HttpRequest
    </text>

    {/* Arrow Builder to Target */}
    <line
      x1="440"
      y1="76"
      x2="518"
      y2="76"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-sb)"
    />

    {/* Target */}
    <rect
      x="520"
      y="40"
      width="140"
      height="72"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line x1="520" y1="62" x2="660" y2="62" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="590"
      y="55"
      textAnchor="middle"
      fill="#374151"
      fontSize="13"
      fontWeight="600"
    >
      HttpRequest
    </text>
    <text x="590" y="80" textAnchor="middle" fill="#6b7280" fontSize="11">
      url, method
    </text>
    <text x="590" y="96" textAnchor="middle" fill="#6b7280" fontSize="11">
      headers, body
    </text>
    <text x="590" y="108" textAnchor="middle" fill="#6b7280" fontSize="11">
      execute(){"{}"}
    </text>

    <text x="340" y="148" textAnchor="middle" fill="#9ca3af" fontSize="11">
      Client builds via fluent chain — validated and immutable after build().
    </text>
  </svg>
);

export default simpleBuilder;
