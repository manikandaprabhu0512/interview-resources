const stepBuilder: React.ReactNode = (
  <svg
    viewBox="0 0 680 220"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-step"
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
        id="tri-step"
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

    {/* Step interfaces row */}
    <rect
      x="180"
      y="20"
      width="90"
      height="40"
      rx="6"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <text
      x="225"
      y="37"
      textAnchor="middle"
      fill="#92400e"
      fontSize="11"
      fontWeight="600"
    >
      UrlStep
    </text>
    <text x="225" y="52" textAnchor="middle" fill="#78350f" fontSize="10">
      withUrl()
    </text>

    <line
      x1="270"
      y1="40"
      x2="308"
      y2="40"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-step)"
    />

    <rect
      x="310"
      y="20"
      width="100"
      height="40"
      rx="6"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <text
      x="360"
      y="37"
      textAnchor="middle"
      fill="#92400e"
      fontSize="11"
      fontWeight="600"
    >
      MethodStep
    </text>
    <text x="360" y="52" textAnchor="middle" fill="#78350f" fontSize="10">
      withMethod()
    </text>

    <line
      x1="410"
      y1="40"
      x2="448"
      y2="40"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-step)"
    />

    <rect
      x="450"
      y="20"
      width="100"
      height="40"
      rx="6"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <text
      x="500"
      y="37"
      textAnchor="middle"
      fill="#92400e"
      fontSize="11"
      fontWeight="600"
    >
      HeaderStep
    </text>
    <text x="500" y="52" textAnchor="middle" fill="#78350f" fontSize="10">
      withHeader()
    </text>

    <line
      x1="550"
      y1="40"
      x2="588"
      y2="40"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-step)"
    />

    <rect
      x="590"
      y="20"
      width="84"
      height="52"
      rx="6"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <text
      x="632"
      y="37"
      textAnchor="middle"
      fill="#92400e"
      fontSize="11"
      fontWeight="600"
    >
      OptionalStep
    </text>
    <text x="632" y="51" textAnchor="middle" fill="#78350f" fontSize="10">
      withBody()
    </text>
    <text x="632" y="63" textAnchor="middle" fill="#78350f" fontSize="10">
      build()
    </text>

    {/* Client */}
    <rect
      x="20"
      y="110"
      width="130"
      height="60"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="20" y1="130" x2="150" y2="130" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="85"
      y="123"
      textAnchor="middle"
      fill="#92400e"
      fontSize="12"
      fontWeight="600"
    >
      Client
    </text>
    <text x="85" y="148" textAnchor="middle" fill="#78350f" fontSize="10">
      StepBuilder.getBuilder()
    </text>
    <text x="85" y="162" textAnchor="middle" fill="#78350f" fontSize="10">
      .withUrl().withMethod()...
    </text>

    {/* Arrow Client to StepBuilder */}
    <line
      x1="150"
      y1="140"
      x2="218"
      y2="140"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-step)"
    />

    {/* StepBuilder */}
    <rect
      x="220"
      y="110"
      width="200"
      height="72"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line
      x1="220"
      y1="130"
      x2="420"
      y2="130"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="320"
      y="123"
      textAnchor="middle"
      fill="#374151"
      fontSize="12"
      fontWeight="600"
    >
      HttpRequestStepBuilder
    </text>
    <text x="320" y="148" textAnchor="middle" fill="#6b7280" fontSize="10">
      implements all 4 interfaces
    </text>
    <text x="320" y="162" textAnchor="middle" fill="#6b7280" fontSize="10">
      getBuilder() → UrlStep
    </text>
    <text x="320" y="174" textAnchor="middle" fill="#6b7280" fontSize="10">
      build() → HttpRequest
    </text>

    {/* dashed arrows — StepBuilder implements interfaces */}
    <line
      x1="280"
      y1="110"
      x2="240"
      y2="72"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-step)"
    />
    <line
      x1="300"
      y1="110"
      x2="370"
      y2="72"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-step)"
    />
    <line
      x1="330"
      y1="110"
      x2="500"
      y2="72"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-step)"
    />
    <line
      x1="360"
      y1="110"
      x2="620"
      y2="72"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-step)"
    />

    {/* Arrow StepBuilder to Target */}
    <line
      x1="420"
      y1="146"
      x2="498"
      y2="146"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-step)"
    />

    {/* Target */}
    <rect
      x="500"
      y="110"
      width="160"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line
      x1="500"
      y1="130"
      x2="660"
      y2="130"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="580"
      y="123"
      textAnchor="middle"
      fill="#374151"
      fontSize="12"
      fontWeight="600"
    >
      HttpRequest
    </text>
    <text x="580" y="148" textAnchor="middle" fill="#6b7280" fontSize="11">
      url, method, headers
    </text>
    <text x="580" y="162" textAnchor="middle" fill="#6b7280" fontSize="11">
      execute(){"{}"}
    </text>

    <text x="340" y="210" textAnchor="middle" fill="#9ca3af" fontSize="11">
      Step interfaces enforce required fields at compile time — build()
      unreachable until all steps done.
    </text>
  </svg>
);

export default stepBuilder;
