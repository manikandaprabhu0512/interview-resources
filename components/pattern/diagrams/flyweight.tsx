const flyweight: React.ReactNode = (
  <svg
    viewBox="0 0 680 420"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Open arrow — has-a / holds reference */}
      <marker
        id="arr-fly"
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
      {/* Open arrow pointing left — factory returns flyweight */}
      <marker
        id="arr-fly-left"
        viewBox="0 0 10 10"
        refX="2"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto"
      >
        <path
          d="M8 1L2 5L8 9"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </marker>
    </defs>

    {/* ══════════════════════════════════════════════
        CENTER: AsteroidFlyweight
    ══════════════════════════════════════════════ */}
    <rect
      x="240"
      y="60"
      width="200"
      height="148"
      rx="6"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1.5"
    />
    <line x1="240" y1="82" x2="440" y2="82" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="340"
      y="74"
      textAnchor="middle"
      fontSize="10"
      fill="#92400e"
      fontStyle="italic"
    >
      «flyweight»
    </text>
    <text
      x="340"
      y="100"
      textAnchor="middle"
      fontSize="13"
      fontWeight="600"
      fill="#1c1917"
    >
      AsteroidFlyweight
    </text>
    <text x="254" y="118" textAnchor="start" fontSize="10" fill="#78716c">
      — length, width, weight
    </text>
    <text x="254" y="134" textAnchor="start" fontSize="10" fill="#78716c">
      — color, texture, material
    </text>
    <text
      x="254"
      y="152"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      ↑ intrinsic state (shared)
    </text>
    <text x="254" y="172" textAnchor="start" fontSize="10" fill="#78716c">
      + render(posX, posY, velX, velY)
    </text>
    <text
      x="254"
      y="188"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      ↑ extrinsic passed as params
    </text>

    {/* ══════════════════════════════════════════════
        LEFT: AsteroidContext (holds flyweight ref)
    ══════════════════════════════════════════════ */}
    <rect
      x="20"
      y="60"
      width="192"
      height="148"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line x1="20" y1="82" x2="212" y2="82" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="116"
      y="74"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      AsteroidContext
    </text>
    <text x="34" y="100" textAnchor="start" fontSize="10" fill="#6b7280">
      - flyweight: AsteroidFlyweight
    </text>
    <text
      x="34"
      y="116"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      ↑ pointer to shared object
    </text>
    <text x="34" y="134" textAnchor="start" fontSize="10" fill="#6b7280">
      - posX, posY
    </text>
    <text x="34" y="150" textAnchor="start" fontSize="10" fill="#6b7280">
      - velocityX, velocityY
    </text>
    <text
      x="34"
      y="166"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      ↑ extrinsic state (unique)
    </text>
    <text x="34" y="188" textAnchor="start" fontSize="10" fill="#6b7280">
      + render()
    </text>

    {/* Context → Flyweight arrow */}
    <line
      x1="212"
      y1="116"
      x2="240"
      y2="116"
      stroke="#9ca3af"
      strokeWidth="1.5"
      markerEnd="url(#arr-fly)"
    />
    <text x="226" y="110" textAnchor="middle" fontSize="9" fill="#9ca3af">
      has-a
    </text>

    {/* ══════════════════════════════════════════════
        RIGHT: AsteroidFactory
    ══════════════════════════════════════════════ */}
    <rect
      x="468"
      y="60"
      width="192"
      height="148"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line x1="468" y1="82" x2="660" y2="82" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="564"
      y="74"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#1c1917"
    >
      AsteroidFactory
    </text>
    <text x="482" y="100" textAnchor="start" fontSize="10" fill="#6b7280">
      - flyweights: Map&lt;String, Flyweight&gt;
    </text>
    <text
      x="482"
      y="118"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      ↑ the flyweight cache / pool
    </text>
    <text x="482" y="138" textAnchor="start" fontSize="10" fill="#6b7280">
      + getAsteroid(...): Flyweight
    </text>
    <text
      x="482"
      y="154"
      textAnchor="start"
      fontSize="9"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      returns existing or creates new
    </text>
    <text x="482" y="172" textAnchor="start" fontSize="10" fill="#6b7280">
      + getFlyweightCount(): int
    </text>

    {/* Factory → Flyweight arrow (factory returns flyweight) */}
    <line
      x1="468"
      y1="116"
      x2="440"
      y2="116"
      stroke="#9ca3af"
      strokeWidth="1.5"
      markerEnd="url(#arr-fly-left)"
    />
    <text x="454" y="110" textAnchor="middle" fontSize="9" fill="#9ca3af">
      returns
    </text>

    {/* ══════════════════════════════════════════════
        BOTTOM: 1M contexts → 3 flyweights visual
    ══════════════════════════════════════════════ */}

    {/* Context stack (many) */}
    <rect
      x="30"
      y="272"
      width="120"
      height="32"
      rx="4"
      fill="#e5e7eb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <rect
      x="22"
      y="264"
      width="120"
      height="32"
      rx="4"
      fill="#f3f4f6"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <rect
      x="14"
      y="256"
      width="120"
      height="32"
      rx="4"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <text
      x="74"
      y="276"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#374151"
    >
      AsteroidContext
    </text>
    <text x="74" y="290" textAnchor="middle" fontSize="10" fill="#6b7280">
      × 1,000,000
    </text>

    {/* Flyweight stack (few) */}
    <rect
      x="532"
      y="272"
      width="120"
      height="32"
      rx="4"
      fill="#fef9c3"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <rect
      x="524"
      y="264"
      width="120"
      height="32"
      rx="4"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1.5"
    />
    <text
      x="584"
      y="279"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#92400e"
    >
      AsteroidFlyweight
    </text>
    <text x="584" y="293" textAnchor="middle" fontSize="10" fill="#78716c">
      × 3 only
    </text>

    {/* Arrow from many contexts to few flyweights */}
    <line
      x1="134"
      y1="272"
      x2="524"
      y2="272"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#arr-fly)"
    />
    <text
      x="329"
      y="262"
      textAnchor="middle"
      fontSize="10"
      fontWeight="600"
      fill="#6b7280"
    >
      1M contexts share 3 flyweights
    </text>

    {/* Memory savings badge */}
    <rect
      x="210"
      y="330"
      width="260"
      height="44"
      rx="6"
      fill="#f0fdf4"
      stroke="#bbf7d0"
      strokeWidth="1"
    />
    <text
      x="340"
      y="348"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#15803d"
    >
      141 MB → ~24 MB
    </text>
    <text x="340" y="366" textAnchor="middle" fontSize="10" fill="#4ade80">
      ~83% memory reduction at 1M objects
    </text>

    {/* Caption */}
    <text x="340" y="408" textAnchor="middle" fontSize="11" fill="#9ca3af">
      Intrinsic state lives once in the flyweight. Extrinsic state is passed at
      call time.
    </text>
  </svg>
);

export default flyweight;
