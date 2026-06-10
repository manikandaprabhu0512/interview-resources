const facade: React.ReactNode = (
  <svg
    viewBox="0 0 680 320"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-fac"
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

    {/* Client */}
    <rect
      x="20"
      y="60"
      width="140"
      height="72"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="20" y1="82" x2="160" y2="82" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="90"
      y="75"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      Client
    </text>
    <text x="90" y="100" textAnchor="middle" fill="#78350f" fontSize="11">
      ComputerFacade
    </text>
    <text x="90" y="116" textAnchor="middle" fill="#78350f" fontSize="11">
      facade
    </text>
    <text x="90" y="124" textAnchor="middle" fill="#78350f" fontSize="10">
      startComputer(){"{}"}
    </text>

    {/* arrow Client to Facade */}
    <line
      x1="160"
      y1="96"
      x2="238"
      y2="96"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-fac)"
    />

    {/* ComputerFacade */}
    <text x="350" y="30" textAnchor="middle" fill="#6b7280" fontSize="11">
      {"<<abstract>>"}
    </text>
    <rect
      x="240"
      y="38"
      width="220"
      height="130"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="240" y1="62" x2="460" y2="62" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="350"
      y="55"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      ComputerFacade
    </text>
    <text x="350" y="80" textAnchor="middle" fill="#78350f" fontSize="11">
      PowerSupply power
    </text>
    <text x="350" y="96" textAnchor="middle" fill="#78350f" fontSize="11">
      CoolingSystem cool
    </text>
    <text x="350" y="112" textAnchor="middle" fill="#78350f" fontSize="11">
      CPU cpu | Memory memory
    </text>
    <text x="350" y="128" textAnchor="middle" fill="#78350f" fontSize="11">
      HardDrive hd | BIOS bios
    </text>
    <text x="350" y="144" textAnchor="middle" fill="#78350f" fontSize="11">
      OperatingSystem os
    </text>
    <text x="350" y="160" textAnchor="middle" fill="#78350f" fontSize="11">
      startComputer(){"{}"}
    </text>

    {/* dashed subsystem boundary box */}
    <rect
      x="20"
      y="210"
      width="640"
      height="100"
      rx="8"
      fill="none"
      stroke="#ef4444"
      strokeWidth="1"
      strokeDasharray="6 3"
    />
    <text
      x="620"
      y="206"
      textAnchor="end"
      fill="#ef4444"
      fontSize="10"
      fontWeight="500"
    >
      subsystem
    </text>

    {/* arrows from Facade down to subsystems */}
    <line
      x1="280"
      y1="168"
      x2="90"
      y2="208"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-fac)"
    />
    <line
      x1="310"
      y1="168"
      x2="210"
      y2="208"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-fac)"
    />
    <line
      x1="350"
      y1="168"
      x2="330"
      y2="208"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-fac)"
    />
    <line
      x1="390"
      y1="168"
      x2="450"
      y2="208"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-fac)"
    />
    <line
      x1="420"
      y1="168"
      x2="560"
      y2="208"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-fac)"
    />

    {/* Subsystem boxes */}
    <rect
      x="30"
      y="218"
      width="110"
      height="44"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="85"
      y="236"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="500"
    >
      PowerSupply
    </text>
    <text x="85" y="253" textAnchor="middle" fill="#6b7280" fontSize="10">
      providePower(){"{}"}
    </text>

    <rect
      x="150"
      y="218"
      width="120"
      height="44"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="210"
      y="236"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="500"
    >
      CoolingSystem
    </text>
    <text x="210" y="253" textAnchor="middle" fill="#6b7280" fontSize="10">
      startFans(){"{}"}
    </text>

    <rect
      x="280"
      y="218"
      width="100"
      height="44"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="330"
      y="236"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="500"
    >
      CPU
    </text>
    <text x="330" y="253" textAnchor="middle" fill="#6b7280" fontSize="10">
      initialize(){"{}"}
    </text>

    <rect
      x="390"
      y="218"
      width="100"
      height="44"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="440"
      y="236"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="500"
    >
      Memory
    </text>
    <text x="440" y="253" textAnchor="middle" fill="#6b7280" fontSize="10">
      selfTest(){"{}"}
    </text>

    <rect
      x="500"
      y="218"
      width="148"
      height="44"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="574"
      y="236"
      textAnchor="middle"
      fill="#374151"
      fontSize="11"
      fontWeight="500"
    >
      BIOS + OS + HDD
    </text>
    <text x="574" y="253" textAnchor="middle" fill="#6b7280" fontSize="10">
      boot() | load() | spinUp()
    </text>

    {/* caption */}
    <text x="340" y="308" textAnchor="middle" fill="#9ca3af" fontSize="11">
      Client calls one method — Facade orchestrates the entire subsystem.
    </text>
  </svg>
);

export default facade;
