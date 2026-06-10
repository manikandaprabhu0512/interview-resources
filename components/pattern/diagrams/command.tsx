const command: React.ReactNode = (
  <svg
    viewBox="0 0 680 320"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-cmd"
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
        id="tri-cmd"
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

    {/* Invoker — RemoteController top left */}
    <rect
      x="20"
      y="40"
      width="190"
      height="90"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="20" y1="64" x2="210" y2="64" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="115"
      y="57"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      RemoteController
    </text>
    <text x="115" y="82" textAnchor="middle" fill="#78350f" fontSize="11">
      {"Command[] buttons"}
    </text>
    <text x="115" y="98" textAnchor="middle" fill="#78350f" fontSize="11">
      setCommand(idx, cmd)
    </text>
    <text x="115" y="114" textAnchor="middle" fill="#78350f" fontSize="11">
      pressButton(idx)
    </text>

    {/* ICommand interface — top center */}
    <text x="420" y="22" textAnchor="middle" fill="#6b7280" fontSize="11">
      {"<<abstract>>"}
    </text>
    <rect
      x="330"
      y="30"
      width="180"
      height="72"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1"
    />
    <line x1="330" y1="54" x2="510" y2="54" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="420"
      y="47"
      textAnchor="middle"
      fill="#92400e"
      fontSize="13"
      fontWeight="600"
    >
      Command
    </text>
    <text x="420" y="72" textAnchor="middle" fill="#78350f" fontSize="11">
      execute()
    </text>
    <text x="420" y="88" textAnchor="middle" fill="#78350f" fontSize="11">
      undo()
    </text>

    {/* has-a arrow — Invoker to Command (1..*) */}
    <line
      x1="210"
      y1="72"
      x2="328"
      y2="66"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-cmd)"
    />
    <text x="268" y="60" textAnchor="middle" fill="#6b7280" fontSize="10">
      (1..*)
    </text>

    {/* vertical dashed — Command to concretes */}
    <line
      x1="420"
      y1="102"
      x2="420"
      y2="150"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    <line
      x1="310"
      y1="150"
      x2="560"
      y2="150"
      stroke="#9ca3af"
      strokeWidth="1"
    />
    <line
      x1="310"
      y1="150"
      x2="310"
      y2="170"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-cmd)"
    />
    <line
      x1="560"
      y1="150"
      x2="560"
      y2="170"
      stroke="#9ca3af"
      strokeWidth="1"
      strokeDasharray="4 3"
      markerEnd="url(#tri-cmd)"
    />

    {/* LightCommand */}
    <rect
      x="220"
      y="170"
      width="180"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line
      x1="220"
      y1="192"
      x2="400"
      y2="192"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="310"
      y="185"
      textAnchor="middle"
      fill="#374151"
      fontSize="12"
      fontWeight="600"
    >
      LightCommand
    </text>
    <text x="310" y="208" textAnchor="middle" fill="#6b7280" fontSize="11">
      Light light
    </text>
    <text x="310" y="224" textAnchor="middle" fill="#6b7280" fontSize="11">
      execute(){"{}"} // light.on()
    </text>
    <text x="310" y="240" textAnchor="middle" fill="#6b7280" fontSize="11">
      undo(){"{}"} // light.off()
    </text>

    {/* FanCommand */}
    <rect
      x="460"
      y="170"
      width="180"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line
      x1="460"
      y1="192"
      x2="640"
      y2="192"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="550"
      y="185"
      textAnchor="middle"
      fill="#374151"
      fontSize="12"
      fontWeight="600"
    >
      FanCommand
    </text>
    <text x="550" y="208" textAnchor="middle" fill="#6b7280" fontSize="11">
      Fan fan
    </text>
    <text x="550" y="224" textAnchor="middle" fill="#6b7280" fontSize="11">
      execute(){"{}"} // fan.on()
    </text>
    <text x="550" y="240" textAnchor="middle" fill="#6b7280" fontSize="11">
      undo(){"{}"} // fan.off()
    </text>

    {/* Receivers — Light and Fan */}
    <rect
      x="20"
      y="200"
      width="140"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line x1="20" y1="220" x2="160" y2="220" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="90"
      y="213"
      textAnchor="middle"
      fill="#374151"
      fontSize="12"
      fontWeight="600"
    >
      Light
    </text>
    <text x="90" y="235" textAnchor="middle" fill="#6b7280" fontSize="11">
      on(){"{}"}
    </text>
    <text x="90" y="251" textAnchor="middle" fill="#6b7280" fontSize="11">
      off(){"{}"}
    </text>

    {/* has-a arrow — LightCommand to Light */}
    <line
      x1="220"
      y1="218"
      x2="162"
      y2="228"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-cmd)"
    />

    {/* Fan receiver */}
    <rect
      x="20"
      y="278"
      width="140"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <line x1="20" y1="298" x2="160" y2="298" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="90"
      y="291"
      textAnchor="middle"
      fill="#374151"
      fontSize="12"
      fontWeight="600"
    >
      Fan
    </text>
    <text x="90" y="313" textAnchor="middle" fill="#6b7280" fontSize="11">
      on(){"{}"}
    </text>
    <text x="90" y="329" textAnchor="middle" fill="#6b7280" fontSize="11">
      off(){"{}"}
    </text>

    {/* has-a arrow — FanCommand to Fan */}
    <line
      x1="460"
      y1="235"
      x2="162"
      y2="302"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-cmd)"
    />

    {/* caption */}
    <text x="340" y="310" textAnchor="middle" fill="#9ca3af" fontSize="11">
      Invoker never talks to receivers — only through Command interface.
    </text>
  </svg>
);

export default command;
