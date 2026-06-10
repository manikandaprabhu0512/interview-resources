const inheritance: React.ReactNode = (
  <svg
    viewBox="0 0 680 380"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="tri-inheritance"
        viewBox="0 0 10 10"
        refX="1"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M2 1L8 5L2 9" fill="white" stroke="#9ca3af" strokeWidth="1" />
      </marker>
    </defs>

    {/* Parent */}

    <rect
      x="240"
      y="40"
      width="200"
      height="125"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text x="340" y="65" textAnchor="middle" fontWeight="700" fill="#374151">
      ICar
    </text>

    <line x1="240" y1="75" x2="440" y2="75" stroke="#d1d5db" />

    <text x="310" y="100" fill="#374151" fontSize="13">
      # brand
    </text>

    <text x="310" y="125" fill="#374151" fontSize="13">
      # model
    </text>

    <text x="290" y="150" fill="#374151" fontSize="13">
      # currentSpeed
    </text>

    <line
      x1="340"
      y1="230"
      x2="340"
      y2="170"
      stroke="#9ca3af"
      strokeDasharray="6 4"
      markerEnd="url(#tri-inheritance)"
    />

    <line x1="180" y1="230" x2="340" y2="230" stroke="#9ca3af" />

    <line x1="500" y1="230" x2="340" y2="230" stroke="#9ca3af" />

    <line x1="180" y1="230" x2="180" y2="270" stroke="#9ca3af" />

    <line x1="500" y1="230" x2="500" y2="270" stroke="#9ca3af" />

    {/* ManualCar */}

    <rect
      x="80"
      y="260"
      width="200"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text x="180" y="295" textAnchor="middle" fontWeight="600" fill="#374151">
      ManualCar
    </text>

    <text x="180" y="320" textAnchor="middle" fill="#6b7280" fontSize="12">
      + shiftGear()
    </text>

    {/* ElectricCar */}

    <rect
      x="400"
      y="260"
      width="200"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text x="500" y="295" textAnchor="middle" fontWeight="600" fill="#374151">
      ElectricCar
    </text>

    <text x="500" y="320" textAnchor="middle" fill="#6b7280" fontSize="12">
      + chargeBattery()
    </text>

    <text x="340" y="25" textAnchor="middle" fill="#9ca3af" fontSize="13">
      Child classes inherit common behavior from ICar and add specialized
      functionality
    </text>
  </svg>
);

export default inheritance;
