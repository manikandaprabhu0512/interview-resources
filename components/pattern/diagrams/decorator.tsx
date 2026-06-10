const dectorator: React.ReactNode = (
  <svg
    viewBox="0 0 680 320"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-dec"
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
        id="tri-dec"
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

    {/* Character interface — top left */}
    <text x="140" y="18" textAnchor="middle" fill="#6b7280" fontSize="11">
      {"<<abstract>>"}
    </text>
    <rect
      x="30"
      y="26"
      width="220"
      height="72"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="30" y1="50" x2="250" y2="50" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="140"
      y="43"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      Character
    </text>
    <text x="140" y="68" textAnchor="middle" fill="#78350f" fontSize="11">
      getAblities()
    </text>
    <text x="140" y="86" textAnchor="middle" fill="#78350f" fontSize="11">
      ...
    </text>

    {/* CharacterDecorator — top right */}
    <text x="530" y="18" textAnchor="middle" fill="#6b7280" fontSize="11">
      {"<<abstract>>"}
    </text>
    <rect
      x="420"
      y="26"
      width="230"
      height="72"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="420" y1="50" x2="650" y2="50" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="535"
      y="43"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      CharacterDecorator
    </text>
    <text x="535" y="68" textAnchor="middle" fill="#78350f" fontSize="11">
      Character character
    </text>
    <text x="535" y="86" textAnchor="middle" fill="#78350f" fontSize="11">
      CharacterDecorator(Character c)
    </text>

    {/* is-a arrow — CharacterDecorator to Character */}
    <line
      x1="420"
      y1="52"
      x2="252"
      y2="52"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#tri-dec)"
    />
    <text x="336" y="44" textAnchor="middle" fill="#6b7280" fontSize="10">
      is-a
    </text>

    {/* has-a arrow — CharacterDecorator to Character */}
    <line
      x1="420"
      y1="70"
      x2="252"
      y2="70"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-dec)"
    />
    <text x="336" y="82" textAnchor="middle" fill="#6b7280" fontSize="10">
      has-a
    </text>

    {/* vertical dashed — Character to Mario */}
    <line
      x1="140"
      y1="98"
      x2="140"
      y2="180"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-dec)"
    />
    <text x="122" y="142" textAnchor="end" fill="#9ca3af" fontSize="10">
      is-a
    </text>

    {/* Mario — bottom left */}
    <rect
      x="30"
      y="180"
      width="220"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line x1="30" y1="200" x2="250" y2="200" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="140"
      y="194"
      textAnchor="middle"
      fill="#374151"
      fontSize="13"
      fontWeight="600"
    >
      Mario
    </text>
    <text x="140" y="218" textAnchor="middle" fill="#6b7280" fontSize="11">
      getAblities(){"{}"} // "Mario"
    </text>
    <text x="140" y="234" textAnchor="middle" fill="#6b7280" fontSize="10">
      ConcreteComponent
    </text>

    {/* vertical dashed — CharacterDecorator to concretes */}
    <line
      x1="535"
      y1="98"
      x2="535"
      y2="145"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    <line
      x1="390"
      y1="145"
      x2="660"
      y2="145"
      stroke="#9ca3af"
      strokeWidth="1"
    />
    <line
      x1="390"
      y1="145"
      x2="390"
      y2="165"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-dec)"
    />
    <line
      x1="535"
      y1="145"
      x2="535"
      y2="165"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-dec)"
    />
    <line
      x1="660"
      y1="145"
      x2="660"
      y2="165"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-dec)"
    />

    {/* HeightUp */}
    <rect
      x="310"
      y="165"
      width="160"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line
      x1="310"
      y1="185"
      x2="470"
      y2="185"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="390"
      y="179"
      textAnchor="middle"
      fill="#374151"
      fontSize="12"
      fontWeight="600"
    >
      HeightUp
    </text>
    <text x="390" y="202" textAnchor="middle" fill="#6b7280" fontSize="11">
      getAblities(){"{}"};
    </text>
    <text x="390" y="218" textAnchor="middle" fill="#6b7280" fontSize="10">
      + " with HeightUp"
    </text>

    {/* GunPower */}
    <rect
      x="455"
      y="165"
      width="160"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line
      x1="455"
      y1="185"
      x2="615"
      y2="185"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="535"
      y="179"
      textAnchor="middle"
      fill="#374151"
      fontSize="12"
      fontWeight="600"
    >
      GunPower
    </text>
    <text x="535" y="202" textAnchor="middle" fill="#6b7280" fontSize="11">
      getAblities(){"{}"};
    </text>
    <text x="535" y="218" textAnchor="middle" fill="#6b7280" fontSize="10">
      + " with GunPower"
    </text>

    {/* StarPower */}
    <rect
      x="590"
      y="165"
      width="160"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line
      x1="590"
      y1="185"
      x2="750"
      y2="185"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="660"
      y="179"
      textAnchor="middle"
      fill="#374151"
      fontSize="12"
      fontWeight="600"
    >
      StarPower
    </text>
    <text x="660" y="202" textAnchor="middle" fill="#6b7280" fontSize="11">
      getAblities(){"{}"};
    </text>
    <text x="660" y="218" textAnchor="middle" fill="#6b7280" fontSize="10">
      + " with StarPower"
    </text>

    {/* caption */}
    <text x="340" y="305" textAnchor="middle" fill="#9ca3af" fontSize="11">
      Adds responsibilities dynamically — a flexible alternative to subclassing.
    </text>
  </svg>
);

export default dectorator;
