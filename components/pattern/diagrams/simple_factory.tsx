const simplefactoy: React.ReactNode = (
  <svg
    viewBox="0 0 680 240"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-sf"
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
        id="triangle-sf"
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
    {/* BurgerFactory */}
    <rect
      x="380"
      y="50"
      width="200"
      height="64"
      rx="8"
      fill="#f0fdf4"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <text
      x="480"
      y="75"
      textAnchor="middle"
      fill="#065f46"
      fontSize="13"
      fontWeight="500"
    >
      BurgerFactory
    </text>
    <text x="480" y="100" textAnchor="middle" fill="#6b7280" fontSize="11">
      + createBurger(type)
    </text>
    {/* Burger interface */}
    <rect
      x="100"
      y="50"
      width="180"
      height="64"
      rx="8"
      fill="#ede9fe"
      stroke="#c4b5fd"
      strokeWidth="1"
    />
    <text x="190" y="70" textAnchor="middle" fill="#5b21b6" fontSize="11">
      «interface»
    </text>
    <text
      x="190"
      y="90"
      textAnchor="middle"
      fill="#5b21b6"
      fontSize="13"
      fontWeight="500"
    >
      Burger
    </text>
    <text x="190" y="105" textAnchor="middle" fill="#7c3aed" fontSize="11">
      + prepare()
    </text>
    {/* has-a arrow */}
    <line
      x1="380"
      y1="80"
      x2="282"
      y2="80"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-sf)"
    />
    <text x="331" y="90" textAnchor="middle" fill="#9ca3af" fontSize="10">
      has-a
    </text>
    {/* vertical from Burger down */}
    <line
      x1="190"
      y1="156"
      x2="190"
      y2="114"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#triangle-sf)"
    />
    <line
      x1="100"
      y1="156"
      x2="340"
      y2="156"
      stroke="#9ca3af"
      strokeWidth="1"
    />
    <line
      x1="100"
      y1="156"
      x2="100"
      y2="176"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    <line
      x1="200"
      y1="156"
      x2="200"
      y2="176"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    <line
      x1="340"
      y1="156"
      x2="340"
      y2="176"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    {/* concrete */}
    <rect
      x="30"
      y="176"
      width="100"
      height="36"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="80"
      y="198"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="500"
    >
      BasicBurger
    </text>
    <rect
      x="150"
      y="176"
      width="100"
      height="36"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="200"
      y="198"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="500"
    >
      StandardBurger
    </text>
    <rect
      x="270"
      y="176"
      width="140"
      height="36"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="340"
      y="198"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="500"
    >
      PremiumBurger
    </text>
    {/* label */}
    <text x="340" y="30" textAnchor="middle" fill="#9ca3af" fontSize="11">
      A factory class decides which concrete class to instantiate.
    </text>
  </svg>
);

export default simplefactoy;
