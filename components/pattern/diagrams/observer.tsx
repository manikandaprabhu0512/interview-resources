const observer: React.ReactNode = (
  <svg
    viewBox="0 0 680 340"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-obs"
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
        id="tri-obs"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path
          d="M0 0L10 5L0 10Z"
          fill="white"
          stroke="#9ca3af"
          strokeWidth="1"
        />
      </marker>
    </defs>

    {/* IChannel interface — top left */}
    <text x="130" y="22" textAnchor="middle" fill="#6b7280" fontSize="11">
      {"<<interface>>"}
    </text>
    <rect
      x="20"
      y="30"
      width="220"
      height="110"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="20" y1="55" x2="240" y2="55" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="130"
      y="47"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      IChannel
    </text>
    <text x="130" y="74" textAnchor="middle" fill="#78350f" fontSize="11">
      List{"<ISubscriber>"} subscribers
    </text>
    <text x="130" y="92" textAnchor="middle" fill="#78350f" fontSize="11">
      addSubscriber(ISubscriber)
    </text>
    <text x="130" y="108" textAnchor="middle" fill="#78350f" fontSize="11">
      removeSubscriber(ISubscriber)
    </text>
    <text x="130" y="124" textAnchor="middle" fill="#78350f" fontSize="11">
      notifySubscribers()
    </text>

    {/* ISubscriber interface — top right */}
    <text x="530" y="22" textAnchor="middle" fill="#6b7280" fontSize="11">
      {"<<interface>>"}
    </text>
    <rect
      x="430"
      y="30"
      width="220"
      height="80"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="430" y1="55" x2="650" y2="55" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="540"
      y="47"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      ISubscriber
    </text>
    <text x="540" y="74" textAnchor="middle" fill="#78350f" fontSize="11">
      IChannel channel
    </text>
    <text x="540" y="92" textAnchor="middle" fill="#78350f" fontSize="11">
      update()
    </text>

    {/* has-a arrow — IChannel to ISubscriber (1..*) */}
    <line
      x1="240"
      y1="80"
      x2="428"
      y2="70"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-obs)"
    />
    <text x="320" y="62" textAnchor="middle" fill="#6b7280" fontSize="10">
      (1..*)
    </text>
    <text x="320" y="76" textAnchor="middle" fill="#6b7280" fontSize="10">
      has-a
    </text>

    {/* vertical dashed — IChannel to Channel */}
    <line
      x1="130"
      y1="140"
      x2="130"
      y2="210"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-obs)"
    />
    <text x="110" y="178" textAnchor="end" fill="#9ca3af" fontSize="10">
      is-a
    </text>

    {/* vertical dashed — ISubscriber to Subscriber */}
    <line
      x1="540"
      y1="110"
      x2="540"
      y2="210"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-obs)"
    />
    <text x="520" y="163" textAnchor="end" fill="#9ca3af" fontSize="10">
      is-a
    </text>

    {/* Channel — bottom left */}
    <rect
      x="20"
      y="210"
      width="220"
      height="110"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="20" y1="235" x2="240" y2="235" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="130"
      y="227"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      Channel
    </text>
    <text x="130" y="252" textAnchor="middle" fill="#78350f" fontSize="11">
      List{"<ISubscriber>"} subscribers
    </text>
    <text x="130" y="270" textAnchor="middle" fill="#78350f" fontSize="11">
      addSubscriber(s){"{}"}
    </text>
    <text x="130" y="286" textAnchor="middle" fill="#78350f" fontSize="11">
      removeSubscriber(s){"{}"}
    </text>
    <text x="130" y="302" textAnchor="middle" fill="#78350f" fontSize="11">
      notifySubscribers(){"{}"}
    </text>

    {/* Subscriber — bottom right */}
    <rect
      x="430"
      y="210"
      width="220"
      height="80"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line
      x1="430"
      y1="235"
      x2="650"
      y2="235"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <text
      x="540"
      y="227"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      Subscriber
    </text>
    <text x="540" y="252" textAnchor="middle" fill="#78350f" fontSize="11">
      Channel channel
    </text>
    <text x="540" y="270" textAnchor="middle" fill="#78350f" fontSize="11">
      update(){"{}"}
    </text>

    {/* has-a arrow — Subscriber to Channel (bottom) */}
    <line
      x1="430"
      y1="258"
      x2="242"
      y2="272"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-obs)"
    />
    <text x="336" y="258" textAnchor="middle" fill="#6b7280" fontSize="10">
      has-a
    </text>

    {/* caption */}
    <text x="340" y="328" textAnchor="middle" fill="#9ca3af" fontSize="11">
      Defines a one-to-many relationship — when observable changes, all
      observers are notified.
    </text>
  </svg>
);

export default observer;
