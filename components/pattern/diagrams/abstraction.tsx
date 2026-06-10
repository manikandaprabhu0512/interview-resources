const abstraction: React.ReactNode = (
  <svg
    viewBox="0 0 680 340"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="tri-abstraction"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="10"
        markerHeight="10"
        orient="auto"
      >
        <path d="M2 1L8 5L2 9" fill="white" stroke="#9ca3af" strokeWidth="1" />
      </marker>
    </defs>

    <rect
      x="240"
      y="40"
      width="200"
      height="110"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text x="340" y="68" textAnchor="middle" fontWeight="700" fill="#374151">
      Car
    </text>

    <text x="340" y="88" textAnchor="middle" fill="#6b7280" fontSize="13">
      &lt;&lt;interface&gt;&gt;
    </text>

    <line x1="250" y1="100" x2="430" y2="100" stroke="#d1d5db" />

    <text x="340" y="122" textAnchor="middle" fill="#374151" fontSize="13">
      startEngine()
    </text>

    <text x="340" y="142" textAnchor="middle" fill="#374151" fontSize="13">
      accelerate()
    </text>

    <line
      x1="340"
      y1="240"
      x2="340"
      y2="150"
      stroke="#9ca3af"
      strokeDasharray="6 4"
      markerEnd="url(#tri-abstraction)"
    />

    <rect
      x="240"
      y="240"
      width="200"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text x="340" y="275" textAnchor="middle" fontWeight="600" fill="#374151">
      SportsCar
    </text>

    <text x="340" y="330" textAnchor="middle" fill="#9ca3af" fontSize="13">
      SportsCar implements the Car abstraction
    </text>
  </svg>
);

export default abstraction;
