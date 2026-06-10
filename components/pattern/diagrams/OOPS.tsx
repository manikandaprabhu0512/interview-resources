const oops: React.ReactNode = (
  <svg
    viewBox="0 0 680 360"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-oop"
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

    <rect
      x="280"
      y="40"
      width="120"
      height="60"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text x="340" y="75" textAnchor="middle" fontWeight="600" fill="#374151">
      OOP
    </text>

    <line x1="340" y1="100" x2="340" y2="150" stroke="#9ca3af" />

    <line x1="180" y1="150" x2="500" y2="150" stroke="#9ca3af" />

    <line
      x1="180"
      y1="150"
      x2="180"
      y2="200"
      stroke="#9ca3af"
      markerEnd="url(#arr-oop)"
    />
    <line
      x1="340"
      y1="150"
      x2="340"
      y2="200"
      stroke="#9ca3af"
      markerEnd="url(#arr-oop)"
    />
    <line
      x1="500"
      y1="150"
      x2="500"
      y2="200"
      stroke="#9ca3af"
      markerEnd="url(#arr-oop)"
    />

    <rect
      x="110"
      y="200"
      width="140"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text x="180" y="235" textAnchor="middle" fill="#374151" fontWeight="500">
      Abstraction
    </text>

    <rect
      x="270"
      y="200"
      width="140"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text x="340" y="235" textAnchor="middle" fill="#374151" fontWeight="500">
      Encapsulation
    </text>

    <rect
      x="430"
      y="200"
      width="140"
      height="60"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text x="500" y="235" textAnchor="middle" fill="#374151" fontWeight="500">
      Inheritance
    </text>

    <line
      x1="500"
      y1="260"
      x2="500"
      y2="300"
      stroke="#9ca3af"
      markerEnd="url(#arr-oop)"
    />

    <rect
      x="430"
      y="300"
      width="140"
      height="50"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text x="500" y="330" textAnchor="middle" fill="#374151" fontWeight="500">
      Polymorphism
    </text>

    <text x="340" y="23" textAnchor="middle" fill="#9ca3af" fontSize="13">
      The four fundamental pillars of Object-Oriented Programming
    </text>
  </svg>
);

export default oops;
