const polymorphism: React.ReactNode = (
  <svg
    viewBox="0 0 680 420"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="250"
      y="30"
      width="180"
      height="70"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text x="340" y="60" textAnchor="middle" fontWeight="700" fill="#374151">
      Polymorphism
    </text>

    <text x="340" y="82" textAnchor="middle" fill="#6b7280" fontSize="12">
      Many Forms
    </text>

    <line x1="340" y1="100" x2="340" y2="150" stroke="#9ca3af" />
    <line x1="180" y1="150" x2="500" y2="150" stroke="#9ca3af" />

    <line x1="180" y1="150" x2="180" y2="190" stroke="#9ca3af" />
    <line x1="500" y1="150" x2="500" y2="190" stroke="#9ca3af" />

    <rect
      x="80"
      y="190"
      width="200"
      height="120"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text x="180" y="225" textAnchor="middle" fontWeight="600" fill="#374151">
      Static Polymorphism
    </text>

    <text x="180" y="255" textAnchor="middle" fill="#6b7280" fontSize="12">
      Overloading
    </text>

    <text x="180" y="280" textAnchor="middle" fill="#6b7280" fontSize="12">
      Compile Time
    </text>

    <rect
      x="400"
      y="190"
      width="200"
      height="120"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text x="500" y="225" textAnchor="middle" fontWeight="600" fill="#374151">
      Dynamic Polymorphism
    </text>

    <text x="500" y="255" textAnchor="middle" fill="#6b7280" fontSize="12">
      Overriding
    </text>

    <text x="500" y="280" textAnchor="middle" fill="#6b7280" fontSize="12">
      Runtime
    </text>

    <text x="340" y="390" textAnchor="middle" fill="#9ca3af" fontSize="13">
      Same action, different behavior depending on context
    </text>
  </svg>
);

export default polymorphism;
