const state: React.ReactNode = (
  <svg
    viewBox="0 0 680 420"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Open arrow — has-a / association */}
      <marker
        id="arr-state"
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
      {/* Hollow triangle — is-a / implements */}
      <marker
        id="tri-state"
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

    {/* ── VendingMachine (Context) — left center ── */}
    <rect
      x="30"
      y="155"
      width="180"
      height="110"
      rx="4"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line x1="30" y1="175" x2="210" y2="175" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="120"
      y="169"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#374151"
    >
      VendingMachine
    </text>
    <text x="120" y="191" textAnchor="middle" fontSize="10" fill="#6b7280">
      - currentState: VendingState
    </text>
    <text x="120" y="205" textAnchor="middle" fontSize="10" fill="#6b7280">
      - itemCount: int
    </text>
    <text x="120" y="219" textAnchor="middle" fontSize="10" fill="#6b7280">
      - insertedCoins: int
    </text>
    <text x="120" y="233" textAnchor="middle" fontSize="10" fill="#6b7280">
      - itemPrice: int
    </text>
    <text x="120" y="249" textAnchor="middle" fontSize="10" fill="#6b7280">
      + insertCoin / selectItem / …
    </text>

    {/* ── VendingState (Interface) — top center ── */}
    <rect
      x="255"
      y="20"
      width="180"
      height="120"
      rx="4"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1.5"
    />
    <line x1="255" y1="40" x2="435" y2="40" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="345"
      y="34"
      textAnchor="middle"
      fontSize="9"
      fill="#92400e"
      fontStyle="italic"
    >
      «interface»
    </text>
    <text
      x="345"
      y="57"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#374151"
    >
      VendingState
    </text>
    <text x="345" y="73" textAnchor="middle" fontSize="10" fill="#6b7280">
      + insertCoin(machine, coin)
    </text>
    <text x="345" y="87" textAnchor="middle" fontSize="10" fill="#6b7280">
      + selectItem(machine)
    </text>
    <text x="345" y="101" textAnchor="middle" fontSize="10" fill="#6b7280">
      + dispense(machine)
    </text>
    <text x="345" y="115" textAnchor="middle" fontSize="10" fill="#6b7280">
      + returnCoin(machine)
    </text>
    <text x="345" y="129" textAnchor="middle" fontSize="10" fill="#6b7280">
      + refill(machine, qty)
    </text>

    {/* VendingMachine --(has-a)--> VendingState */}
    <line
      x1="210"
      y1="195"
      x2="254"
      y2="100"
      stroke="#9ca3af"
      strokeWidth="1.5"
      markerEnd="url(#arr-state)"
    />
    <text x="218" y="152" fontSize="9" fill="#9ca3af" fontStyle="italic">
      has-a
    </text>

    {/* ── NoCoinState ── bottom-left */}
    <rect
      x="30"
      y="320"
      width="145"
      height="70"
      rx="4"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line x1="30" y1="338" x2="175" y2="338" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="102"
      y="332"
      textAnchor="middle"
      fontSize="10.5"
      fontWeight="600"
      fill="#374151"
    >
      NoCoinState
    </text>
    <text x="102" y="352" textAnchor="middle" fontSize="9.5" fill="#6b7280">
      + insertCoin → HasCoinState
    </text>
    <text x="102" y="365" textAnchor="middle" fontSize="9.5" fill="#6b7280">
      + refill → NoCoinState
    </text>
    <text x="102" y="378" textAnchor="middle" fontSize="9.5" fill="#6b7280">
      + others → stay
    </text>

    {/* ── HasCoinState ── bottom-center-left */}
    <rect
      x="195"
      y="320"
      width="155"
      height="70"
      rx="4"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="195"
      y1="338"
      x2="350"
      y2="338"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="272"
      y="332"
      textAnchor="middle"
      fontSize="10.5"
      fontWeight="600"
      fill="#374151"
    >
      HasCoinState
    </text>
    <text x="272" y="352" textAnchor="middle" fontSize="9.5" fill="#6b7280">
      + selectItem → DispenseState
    </text>
    <text x="272" y="365" textAnchor="middle" fontSize="9.5" fill="#6b7280">
      + returnCoin → NoCoinState
    </text>
    <text x="272" y="378" textAnchor="middle" fontSize="9.5" fill="#6b7280">
      + others → stay
    </text>

    {/* ── DispenseState ── bottom-center-right */}
    <rect
      x="370"
      y="320"
      width="150"
      height="70"
      rx="4"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="370"
      y1="338"
      x2="520"
      y2="338"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="445"
      y="332"
      textAnchor="middle"
      fontSize="10.5"
      fontWeight="600"
      fill="#374151"
    >
      DispenseState
    </text>
    <text x="445" y="352" textAnchor="middle" fontSize="9.5" fill="#6b7280">
      + dispense → NoCoinState
    </text>
    <text x="445" y="365" textAnchor="middle" fontSize="9.5" fill="#6b7280">
      {" "}
      or SoldOutState
    </text>
    <text x="445" y="378" textAnchor="middle" fontSize="9.5" fill="#6b7280">
      + others → stay
    </text>

    {/* ── SoldOutState ── bottom-right */}
    <rect
      x="535"
      y="320"
      width="120"
      height="70"
      rx="4"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="535"
      y1="338"
      x2="655"
      y2="338"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="595"
      y="332"
      textAnchor="middle"
      fontSize="10.5"
      fontWeight="600"
      fill="#374151"
    >
      SoldOutState
    </text>
    <text x="595" y="352" textAnchor="middle" fontSize="9.5" fill="#6b7280">
      + refill → NoCoinState
    </text>
    <text x="595" y="365" textAnchor="middle" fontSize="9.5" fill="#6b7280">
      + others → stay
    </text>

    {/* Implements lines (dashed) from each concrete state up to VendingState */}
    {/* NoCoinState → VendingState */}
    <line
      x1="102"
      y1="320"
      x2="300"
      y2="140"
      stroke="#9ca3af"
      strokeWidth="1.2"
      strokeDasharray="5 3"
      markerEnd="url(#tri-state)"
    />
    {/* HasCoinState → VendingState */}
    <line
      x1="272"
      y1="320"
      x2="330"
      y2="140"
      stroke="#9ca3af"
      strokeWidth="1.2"
      strokeDasharray="5 3"
      markerEnd="url(#tri-state)"
    />
    {/* DispenseState → VendingState */}
    <line
      x1="445"
      y1="320"
      x2="370"
      y2="140"
      stroke="#9ca3af"
      strokeWidth="1.2"
      strokeDasharray="5 3"
      markerEnd="url(#tri-state)"
    />
    {/* SoldOutState → VendingState */}
    <line
      x1="595"
      y1="320"
      x2="400"
      y2="140"
      stroke="#9ca3af"
      strokeWidth="1.2"
      strokeDasharray="5 3"
      markerEnd="url(#tri-state)"
    />

    {/* Caption */}
    <text x="340" y="412" textAnchor="middle" fontSize="10" fill="#9ca3af">
      VendingMachine delegates to currentState — each state controls its own
      transitions
    </text>
  </svg>
);

export default state;
