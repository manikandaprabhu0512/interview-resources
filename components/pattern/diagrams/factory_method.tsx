const factorymethod: React.ReactNode = (
  <svg
    viewBox="0 0 680 300"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-fm"
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
    {/* Burger interface */}
    <rect
      x="60"
      y="60"
      width="180"
      height="64"
      rx="8"
      fill="#ede9fe"
      stroke="#c4b5fd"
      strokeWidth="1"
    />
    <text x="150" y="84" textAnchor="middle" fill="#5b21b6" fontSize="11">
      «interface»
    </text>
    <text
      x="150"
      y="102"
      textAnchor="middle"
      fill="#5b21b6"
      fontSize="13"
      fontWeight="500"
    >
      Burger
    </text>
    <text x="150" y="118" textAnchor="middle" fill="#7c3aed" fontSize="11">
      + prepare()
    </text>
    {/* FBurgerFactory interface */}
    <rect
      x="420"
      y="60"
      width="200"
      height="64"
      rx="8"
      fill="#f0fdf4"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <text x="520" y="84" textAnchor="middle" fill="#065f46" fontSize="11">
      «interface»
    </text>
    <text
      x="520"
      y="102"
      textAnchor="middle"
      fill="#065f46"
      fontSize="13"
      fontWeight="500"
    >
      FBurgerFactory
    </text>
    <text x="520" y="118" textAnchor="middle" fill="#0f6e56" fontSize="11">
      + createBurger(type)
    </text>
    {/* has-a */}
    <line
      x1="420"
      y1="92"
      x2="242"
      y2="92"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-fm)"
    />
    <text x="331" y="84" textAnchor="middle" fill="#9ca3af" fontSize="10">
      has-a
    </text>
    {/* Burger concretes */}
    <line
      x1="150"
      y1="124"
      x2="150"
      y2="164"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    <line x1="90" y1="164" x2="230" y2="164" stroke="#9ca3af" strokeWidth="1" />
    <line
      x1="90"
      y1="164"
      x2="90"
      y2="184"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    <line
      x1="230"
      y1="164"
      x2="230"
      y2="184"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    <rect
      x="20"
      y="184"
      width="140"
      height="36"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="90"
      y="206"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="500"
    >
      BasicBurger
    </text>
    <rect
      x="160"
      y="184"
      width="140"
      height="36"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="230"
      y="206"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="500"
    >
      BasicWheatBurger
    </text>
    {/* Factory concretes */}
    <line
      x1="520"
      y1="124"
      x2="520"
      y2="164"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    <line
      x1="450"
      y1="164"
      x2="600"
      y2="164"
      stroke="#9ca3af"
      strokeWidth="1"
    />
    <line
      x1="450"
      y1="164"
      x2="450"
      y2="184"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    <line
      x1="600"
      y1="164"
      x2="600"
      y2="184"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    <rect
      x="380"
      y="184"
      width="140"
      height="36"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="450"
      y="206"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="500"
    >
      SinghBurger
    </text>
    <rect
      x="530"
      y="184"
      width="140"
      height="36"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="600"
      y="206"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="500"
    >
      KingBurger
    </text>
    {/* is-a connector between factory and product concretes */}
    <line
      x1="450"
      y1="220"
      x2="160"
      y2="220"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="3 2"
    />
    <line
      x1="160"
      y1="220"
      x2="160"
      y2="202"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-fm)"
    />
    <text x="305" y="236" textAnchor="middle" fill="#9ca3af" fontSize="10">
      is-a
    </text>
    <text x="340" y="270" textAnchor="middle" fill="#9ca3af" fontSize="11">
      Subclasses decide which concrete class to instantiate.
    </text>
  </svg>
);

export default factorymethod;
