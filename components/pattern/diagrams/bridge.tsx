const bridge: React.ReactNode = (
  <svg
    viewBox="0 0 680 480"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Open arrow — has-a / association (the bridge link) */}
      <marker
        id="arr-bridge"
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
        id="tri-bridge-up"
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
      {/* Hollow triangle pointing LEFT — implements interface */}
      <marker
        id="tri-bridge-left"
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

    {/* ════════════════ LEFT SIDE — Abstraction (HLP) ════════════════ */}

    {/* Abstract Car */}
    <rect
      x="30"
      y="30"
      width="200"
      height="110"
      rx="6"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1.5"
    />
    <line x1="30" y1="54" x2="230" y2="54" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="130"
      y="46"
      textAnchor="middle"
      fontSize="10"
      fill="#92400e"
      fontStyle="italic"
    >
      «abstract» HLP
    </text>
    <text
      x="130"
      y="72"
      textAnchor="middle"
      fontSize="13"
      fontWeight="600"
      fill="#1c1917"
    >
      Car
    </text>
    <text x="45" y="90" textAnchor="start" fontSize="11" fill="#78716c">
      # engine: Engine
    </text>
    <text
      x="45"
      y="106"
      textAnchor="start"
      fontSize="10"
      fill="#9ca3af"
      fontStyle="italic"
    >
      ← the bridge reference
    </text>
    <text
      x="45"
      y="124"
      textAnchor="start"
      fontSize="11"
      fill="#78716c"
      fontStyle="italic"
    >
      + drive() «abstract»
    </text>

    {/* Sedan */}
    <rect
      x="30"
      y="270"
      width="170"
      height="72"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line x1="30" y1="290" x2="200" y2="290" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="115"
      y="284"
      textAnchor="middle"
      fontSize="12"
      fontWeight="600"
      fill="#1c1917"
    >
      Sedan
    </text>
    <text x="44" y="308" textAnchor="start" fontSize="11" fill="#6b7280">
      + drive()
    </text>
    <text
      x="44"
      y="326"
      textAnchor="start"
      fontSize="10"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      engine.start() + highway
    </text>

    {/* SUV */}
    <rect
      x="220"
      y="270"
      width="140"
      height="72"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="220"
      y1="290"
      x2="360"
      y2="290"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="290"
      y="284"
      textAnchor="middle"
      fontSize="12"
      fontWeight="600"
      fill="#1c1917"
    >
      SUV
    </text>
    <text x="234" y="308" textAnchor="start" fontSize="11" fill="#6b7280">
      + drive()
    </text>
    <text
      x="234"
      y="326"
      textAnchor="start"
      fontSize="10"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      engine.start() + off-road
    </text>

    {/* Sedan extends Car */}
    <line
      x1="115"
      y1="270"
      x2="115"
      y2="142"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-bridge-up)"
    />

    {/* SUV extends Car */}
    <line
      x1="290"
      y1="270"
      x2="175"
      y2="142"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-bridge-up)"
    />

    {/* ════════════════ BRIDGE ARROW (center) ════════════════ */}
    <line
      x1="230"
      y1="82"
      x2="390"
      y2="82"
      stroke="#f59e0b"
      strokeWidth="2"
      markerEnd="url(#arr-bridge)"
    />
    <text
      x="310"
      y="72"
      textAnchor="middle"
      fontSize="10"
      fontWeight="600"
      fill="#d97706"
    >
      «bridge»
    </text>

    {/* ════════════════ RIGHT SIDE — Implementor (LLP) ════════════════ */}

    {/* Engine interface */}
    <rect
      x="390"
      y="30"
      width="200"
      height="84"
      rx="6"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1.5"
    />
    <line x1="390" y1="54" x2="590" y2="54" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="490"
      y="46"
      textAnchor="middle"
      fontSize="10"
      fill="#92400e"
      fontStyle="italic"
    >
      «interface» LLP
    </text>
    <text
      x="490"
      y="72"
      textAnchor="middle"
      fontSize="13"
      fontWeight="600"
      fill="#1c1917"
    >
      Engine
    </text>
    <text x="405" y="92" textAnchor="start" fontSize="11" fill="#78716c">
      + start()
    </text>

    {/* PetrolEngine */}
    <rect
      x="390"
      y="260"
      width="155"
      height="72"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="390"
      y1="280"
      x2="545"
      y2="280"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="468"
      y="274"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      PetrolEngine
    </text>
    <text x="404" y="296" textAnchor="start" fontSize="11" fill="#6b7280">
      + start()
    </text>
    <text
      x="404"
      y="314"
      textAnchor="start"
      fontSize="10"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      ignition!
    </text>

    {/* DieselEngine */}
    <rect
      x="390"
      y="360"
      width="155"
      height="72"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="390"
      y1="380"
      x2="545"
      y2="380"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="468"
      y="374"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      DieselEngine
    </text>
    <text x="404" y="396" textAnchor="start" fontSize="11" fill="#6b7280">
      + start()
    </text>
    <text
      x="404"
      y="414"
      textAnchor="start"
      fontSize="10"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      roaring to life!
    </text>

    {/* ElectricEngine */}
    <rect
      x="558"
      y="260"
      width="108"
      height="172"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="558"
      y1="280"
      x2="666"
      y2="280"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="612"
      y="274"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      ElectricEngine
    </text>
    <text x="568" y="296" textAnchor="start" fontSize="11" fill="#6b7280">
      + start()
    </text>
    <text
      x="568"
      y="314"
      textAnchor="start"
      fontSize="10"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      silently!
    </text>

    {/* Implements arrows: engines → Engine interface */}
    <line
      x1="468"
      y1="260"
      x2="468"
      y2="116"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-bridge-up)"
    />
    <line
      x1="468"
      y1="360"
      x2="468"
      y2="260"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4,3"
    />
    <line
      x1="612"
      y1="260"
      x2="530"
      y2="116"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-bridge-up)"
    />

    {/* ── M+N label ── */}
    <rect
      x="210"
      y="420"
      width="260"
      height="32"
      rx="5"
      fill="#f0fdf4"
      stroke="#bbf7d0"
      strokeWidth="1"
    />
    <text
      x="340"
      y="436"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#15803d"
    >
      2 bodies + 3 engines = 5 classes
    </text>
    <text x="340" y="450" textAnchor="middle" fontSize="10" fill="#4ade80">
      vs 2 × 3 = 6 with inheritance (grows fast)
    </text>

    {/* Caption */}
    <text x="340" y="475" textAnchor="middle" fontSize="11" fill="#9ca3af">
      Engine is injected into Car — both hierarchies extend independently.
    </text>
  </svg>
);

export default bridge;
