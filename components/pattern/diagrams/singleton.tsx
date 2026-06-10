const singleton: React.ReactNode = (
  <svg
    viewBox="0 0 680 300"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-singleton"
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
        id="arr-singleton-rev"
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
    <rect x="420" y="40" width="220" height="30" rx="6" fill="#16a34a" />
    <text
      x="530"
      y="60"
      textAnchor="middle"
      fill="white"
      fontSize="13"
      fontWeight="600"
    >
      Singleton object
    </text>
    <rect
      x="420"
      y="70"
      width="220"
      height="140"
      rx="0"
      fill="#f0fdf4"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <rect
      x="420"
      y="40"
      width="220"
      height="170"
      rx="6"
      fill="none"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <text
      x="530"
      y="105"
      textAnchor="middle"
      fill="#065f46"
      fontSize="18"
      fontWeight="700"
    >
      Instance - 1
    </text>
    <text x="530" y="135" textAnchor="middle" fill="#6b7280" fontSize="11">
      - instance: Singleton
    </text>
    <text x="530" y="153" textAnchor="middle" fill="#6b7280" fontSize="11">
      - Singleton()
    </text>
    <text x="530" y="171" textAnchor="middle" fill="#6b7280" fontSize="11">
      + getInstance()
    </text>
    <rect
      x="40"
      y="40"
      width="160"
      height="52"
      rx="6"
      fill="#f0fdf4"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <text
      x="120"
      y="71"
      textAnchor="middle"
      fill="#065f46"
      fontSize="14"
      fontWeight="600"
    >
      Client - 1
    </text>
    <line
      x1="200"
      y1="58"
      x2="418"
      y2="100"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-singleton)"
    />
    <text
      x="330"
      y="68"
      textAnchor="middle"
      fill="#6b7280"
      fontSize="10"
      fontStyle="italic"
    >
      Request - 1
    </text>
    <line
      x1="418"
      y1="108"
      x2="200"
      y2="72"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-singleton-rev)"
    />
    <text
      x="310"
      y="100"
      textAnchor="middle"
      fill="#6b7280"
      fontSize="10"
      fontStyle="italic"
    >
      Instance - 1
    </text>
    <rect
      x="40"
      y="130"
      width="160"
      height="52"
      rx="6"
      fill="#f0fdf4"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <text
      x="120"
      y="161"
      textAnchor="middle"
      fill="#065f46"
      fontSize="14"
      fontWeight="600"
    >
      Client - 2
    </text>
    <line
      x1="200"
      y1="148"
      x2="418"
      y2="130"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-singleton)"
    />
    <text
      x="320"
      y="132"
      textAnchor="middle"
      fill="#6b7280"
      fontSize="10"
      fontStyle="italic"
    >
      Request - 2
    </text>
    <line
      x1="418"
      y1="138"
      x2="200"
      y2="158"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-singleton-rev)"
    />
    <text
      x="310"
      y="160"
      textAnchor="middle"
      fill="#6b7280"
      fontSize="10"
      fontStyle="italic"
    >
      Instance - 2
    </text>
    <rect
      x="40"
      y="220"
      width="160"
      height="52"
      rx="6"
      fill="#f0fdf4"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <text
      x="120"
      y="251"
      textAnchor="middle"
      fill="#065f46"
      fontSize="14"
      fontWeight="600"
    >
      Client - 3
    </text>
    <line
      x1="200"
      y1="238"
      x2="418"
      y2="168"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-singleton)"
    />
    <text
      x="330"
      y="218"
      textAnchor="middle"
      fill="#6b7280"
      fontSize="10"
      fontStyle="italic"
    >
      Request - 3
    </text>
    <line
      x1="418"
      y1="176"
      x2="200"
      y2="252"
      stroke="#9ca3af"
      strokeWidth="1"
      markerEnd="url(#arr-singleton-rev)"
    />
    <text
      x="300"
      y="236"
      textAnchor="middle"
      fill="#6b7280"
      fontSize="10"
      fontStyle="italic"
    >
      Instance - 3
    </text>
    <text x="340" y="290" textAnchor="middle" fill="#9ca3af" fontSize="11">
      All clients get the same Instance - 1. Only one object ever exists.
    </text>
  </svg>
);

export default singleton;
