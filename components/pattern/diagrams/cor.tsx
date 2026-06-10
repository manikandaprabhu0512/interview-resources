const cor: React.ReactNode = (
  <svg
    viewBox="0 0 680 460"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Open arrow — has-a / association / forward */}
      <marker
        id="arr-cor"
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
      {/* Hollow triangle pointing UP — extends */}
      <marker
        id="tri-cor"
        viewBox="0 0 10 10"
        refX="5"
        refY="10"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path
          d="M0 10L5 0L10 10Z"
          fill="white"
          stroke="#9ca3af"
          strokeWidth="1"
        />
      </marker>
    </defs>

    {/* ── Abstract Handler: MoneyHandler (top center) ── */}
    <rect
      x="220"
      y="24"
      width="240"
      height="100"
      rx="6"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1.5"
    />
    <line x1="220" y1="48" x2="460" y2="48" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="340"
      y="40"
      textAnchor="middle"
      fontSize="10"
      fill="#92400e"
      fontStyle="italic"
    >
      «abstract»
    </text>
    <text
      x="340"
      y="66"
      textAnchor="middle"
      fontSize="13"
      fontWeight="600"
      fill="#1c1917"
    >
      MoneyHandler
    </text>
    <text x="235" y="84" textAnchor="start" fontSize="11" fill="#78716c">
      # nextHandler: MoneyHandler
    </text>
    <text x="235" y="100" textAnchor="start" fontSize="11" fill="#78716c">
      + setNextHandler(next)
    </text>
    <text
      x="235"
      y="116"
      textAnchor="start"
      fontSize="11"
      fill="#78716c"
      fontStyle="italic"
    >
      + dispense(amount) «abstract»
    </text>

    {/* Self-referential "has-a next" loop on MoneyHandler */}
    <path
      d="M460 74 Q560 74 560 50 Q560 24 460 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="4,3"
      markerEnd="url(#arr-cor)"
    />
    <text x="568" y="52" textAnchor="start" fontSize="10" fill="#9ca3af">
      next
    </text>

    {/* ── Four concrete handlers in a row ── */}

    {/* ThousandHandler */}
    <rect
      x="20"
      y="240"
      width="148"
      height="86"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line x1="20" y1="260" x2="168" y2="260" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="94"
      y="254"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      ThousandHandler
    </text>
    <text x="32" y="276" textAnchor="start" fontSize="10" fill="#6b7280">
      - numNotes: int
    </text>
    <text x="32" y="292" textAnchor="start" fontSize="10" fill="#6b7280">
      + dispense(amount)
    </text>
    <text
      x="32"
      y="310"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      dispenses $1000 notes
    </text>

    {/* FiveHundredHandler */}
    <rect
      x="184"
      y="240"
      width="152"
      height="86"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="184"
      y1="260"
      x2="336"
      y2="260"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="260"
      y="254"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      FiveHundredHandler
    </text>
    <text x="196" y="276" textAnchor="start" fontSize="10" fill="#6b7280">
      - numNotes: int
    </text>
    <text x="196" y="292" textAnchor="start" fontSize="10" fill="#6b7280">
      + dispense(amount)
    </text>
    <text
      x="196"
      y="310"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      dispenses $500 notes
    </text>

    {/* TwoHundredHandler */}
    <rect
      x="352"
      y="240"
      width="150"
      height="86"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="352"
      y1="260"
      x2="502"
      y2="260"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="427"
      y="254"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      TwoHundredHandler
    </text>
    <text x="364" y="276" textAnchor="start" fontSize="10" fill="#6b7280">
      - numNotes: int
    </text>
    <text x="364" y="292" textAnchor="start" fontSize="10" fill="#6b7280">
      + dispense(amount)
    </text>
    <text
      x="364"
      y="310"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      dispenses $200 notes
    </text>

    {/* HundredHandler */}
    <rect
      x="518"
      y="240"
      width="144"
      height="86"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="518"
      y1="260"
      x2="662"
      y2="260"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="590"
      y="254"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      HundredHandler
    </text>
    <text x="530" y="276" textAnchor="start" fontSize="10" fill="#6b7280">
      - numNotes: int
    </text>
    <text x="530" y="292" textAnchor="start" fontSize="10" fill="#6b7280">
      + dispense(amount)
    </text>
    <text
      x="530"
      y="310"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      dispenses $100 notes
    </text>

    {/* ── Extends arrows (dashed + hollow tri) from each handler up to MoneyHandler ── */}
    <line
      x1="94"
      y1="240"
      x2="262"
      y2="126"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-cor)"
    />
    <line
      x1="260"
      y1="240"
      x2="308"
      y2="126"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-cor)"
    />
    <line
      x1="427"
      y1="240"
      x2="376"
      y2="126"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-cor)"
    />
    <line
      x1="590"
      y1="240"
      x2="422"
      y2="126"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-cor)"
    />

    {/* ── Chain forwarding arrows between concrete handlers ── */}
    <line
      x1="168"
      y1="278"
      x2="184"
      y2="278"
      stroke="#6b7280"
      strokeWidth="1.5"
      markerEnd="url(#arr-cor)"
    />
    <line
      x1="336"
      y1="278"
      x2="352"
      y2="278"
      stroke="#6b7280"
      strokeWidth="1.5"
      markerEnd="url(#arr-cor)"
    />
    <line
      x1="502"
      y1="278"
      x2="518"
      y2="278"
      stroke="#6b7280"
      strokeWidth="1.5"
      markerEnd="url(#arr-cor)"
    />

    {/* ── Chain labels ── */}
    <text x="176" y="272" textAnchor="middle" fontSize="9" fill="#9ca3af">
      next
    </text>
    <text x="344" y="272" textAnchor="middle" fontSize="9" fill="#9ca3af">
      next
    </text>
    <text x="510" y="272" textAnchor="middle" fontSize="9" fill="#9ca3af">
      next
    </text>

    {/* ── "remaining" flow label below handlers ── */}
    <text
      x="340"
      y="348"
      textAnchor="middle"
      fontSize="11"
      fill="#6b7280"
      fontStyle="italic"
    >
      dispense(remaining) →
    </text>

    {/* ── Caption ── */}
    <text x="340" y="390" textAnchor="middle" fontSize="11" fill="#9ca3af">
      Each handler dispenses what it can and forwards the remainder to the next
      link.
    </text>
    <text x="340" y="408" textAnchor="middle" fontSize="11" fill="#9ca3af">
      The chain is assembled by the client — handlers are oblivious to each
      other.
    </text>
  </svg>
);

export default cor;
