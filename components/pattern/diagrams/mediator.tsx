const mediator: React.ReactNode = (
  <svg
    viewBox="0 0 680 420"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Open arrow — has-a / association */}
      <marker
        id="arr-mediator"
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
      {/* Hollow triangle — is-a / implements (points left) */}
      <marker
        id="tri-mediator"
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

    {/* ── IMediator (interface / abstract) — top centre ── */}
    <rect
      x="230"
      y="20"
      width="220"
      height="90"
      rx="4"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1.5"
    />
    <text
      x="340"
      y="40"
      textAnchor="middle"
      fontSize="10"
      fill="#92400e"
      fontStyle="italic"
    >
      «interface»
    </text>
    <text
      x="340"
      y="56"
      textAnchor="middle"
      fontSize="13"
      fontWeight="600"
      fill="#1f2937"
    >
      IMediator
    </text>
    <line x1="230" y1="63" x2="450" y2="63" stroke="#fbbf24" strokeWidth="1" />
    <text x="340" y="78" textAnchor="middle" fontSize="10.5" fill="#374151">
      registerColleague(c)
    </text>
    <text x="340" y="94" textAnchor="middle" fontSize="10.5" fill="#374151">
      send(from, msg)
    </text>
    <text x="340" y="110" textAnchor="middle" fontSize="10.5" fill="#374151">
      sendPrivate(from, to, msg)
    </text>

    {/* ── ChatMediator (concrete) — bottom left ── */}
    <rect
      x="40"
      y="250"
      width="220"
      height="110"
      rx="4"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <text
      x="150"
      y="272"
      textAnchor="middle"
      fontSize="13"
      fontWeight="600"
      fill="#1f2937"
    >
      ChatMediator
    </text>
    <line x1="40" y1="279" x2="260" y2="279" stroke="#d1d5db" strokeWidth="1" />
    <text x="150" y="295" textAnchor="middle" fontSize="10.5" fill="#374151">
      List&lt;Colleague&gt; colleagues
    </text>
    <text x="150" y="311" textAnchor="middle" fontSize="10.5" fill="#374151">
      List&lt;Pair&gt; mutes
    </text>
    <line x1="40" y1="318" x2="260" y2="318" stroke="#d1d5db" strokeWidth="1" />
    <text x="150" y="334" textAnchor="middle" fontSize="10.5" fill="#374151">
      registerColleague(c)
    </text>
    <text x="150" y="350" textAnchor="middle" fontSize="10.5" fill="#374151">
      send(from, msg)
    </text>
    <text x="150" y="366" textAnchor="middle" fontSize="10.5" fill="#374151">
      sendPrivate(from, to, msg)
    </text>

    {/* ── Colleague (abstract) — top right ── */}
    <rect
      x="420"
      y="20"
      width="220"
      height="90"
      rx="4"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1.5"
    />
    <text
      x="530"
      y="40"
      textAnchor="middle"
      fontSize="10"
      fill="#92400e"
      fontStyle="italic"
    >
      «abstract»
    </text>
    <text
      x="530"
      y="56"
      textAnchor="middle"
      fontSize="13"
      fontWeight="600"
      fill="#1f2937"
    >
      Colleague
    </text>
    <line x1="420" y1="63" x2="640" y2="63" stroke="#fbbf24" strokeWidth="1" />
    <text x="530" y="78" textAnchor="middle" fontSize="10.5" fill="#374151">
      IMediator mediator
    </text>
    <text x="530" y="94" textAnchor="middle" fontSize="10.5" fill="#374151">
      getName() / send() / receive()
    </text>

    {/* ── User1 (concrete colleague) — bottom right ── */}
    <rect
      x="420"
      y="250"
      width="220"
      height="110"
      rx="4"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <text
      x="530"
      y="272"
      textAnchor="middle"
      fontSize="13"
      fontWeight="600"
      fill="#1f2937"
    >
      User1
    </text>
    <line
      x1="420"
      y1="279"
      x2="640"
      y2="279"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text x="530" y="295" textAnchor="middle" fontSize="10.5" fill="#374151">
      String name
    </text>
    <line
      x1="420"
      y1="302"
      x2="640"
      y2="302"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text x="530" y="318" textAnchor="middle" fontSize="10.5" fill="#374151">
      getName()
    </text>
    <text x="530" y="334" textAnchor="middle" fontSize="10.5" fill="#374151">
      send(msg)
    </text>
    <text x="530" y="350" textAnchor="middle" fontSize="10.5" fill="#374151">
      sendPrivate(to, msg)
    </text>
    <text x="530" y="366" textAnchor="middle" fontSize="10.5" fill="#374151">
      receive(from, msg)
    </text>

    {/* ── ChatMediator implements IMediator (dashed + hollow triangle) ── */}
    {/* line from top of ChatMediator up to bottom of IMediator */}
    <line
      x1="150"
      y1="250"
      x2="150"
      y2="160"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
    />
    <line
      x1="150"
      y1="160"
      x2="290"
      y2="115"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-mediator)"
    />

    {/* ── User1 implements Colleague (dashed + hollow triangle) ── */}
    <line
      x1="530"
      y1="250"
      x2="530"
      y2="115"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-mediator)"
    />

    {/* ── Colleague has-a IMediator (open arrow, right to left) ── */}
    <line
      x1="420"
      y1="65"
      x2="450"
      y2="65"
      stroke="#9ca3af"
      strokeWidth="1.5"
      markerEnd="url(#arr-mediator)"
    />

    {/* ── ChatMediator has-a Colleagues (1..*) ── */}
    <line
      x1="260"
      y1="305"
      x2="420"
      y2="305"
      stroke="#9ca3af"
      strokeWidth="1.5"
      markerEnd="url(#arr-mediator)"
    />
    <text x="330" y="298" textAnchor="middle" fontSize="10" fill="#9ca3af">
      1
    </text>
    <text x="400" y="298" textAnchor="middle" fontSize="10" fill="#9ca3af">
      1..*
    </text>

    {/* ── Caption ── */}
    <text x="340" y="410" textAnchor="middle" fontSize="10.5" fill="#9ca3af">
      Colleagues communicate only via IMediator — never directly with each other
    </text>
  </svg>
);

export default mediator;
