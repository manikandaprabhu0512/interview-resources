const proxy: React.ReactNode = (
  <svg
    viewBox="0 0 680 500"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Open arrow — has-a / association */}
      <marker
        id="arr-proxy"
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
      {/* Hollow triangle pointing LEFT — implements interface */}
      <marker
        id="tri-proxy"
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

    {/* ── Interface (top center) ── */}
    <rect
      x="240"
      y="20"
      width="200"
      height="64"
      rx="6"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1.5"
    />
    <line x1="240" y1="44" x2="440" y2="44" stroke="#fbbf24" strokeWidth="1" />
    <text
      x="340"
      y="36"
      textAnchor="middle"
      fontSize="10"
      fill="#92400e"
      fontStyle="italic"
    >
      «interface»
    </text>
    <text
      x="340"
      y="60"
      textAnchor="middle"
      fontSize="13"
      fontWeight="600"
      fill="#1c1917"
    >
      Subject
    </text>
    <text x="340" y="76" textAnchor="middle" fontSize="11" fill="#78716c">
      + request()
    </text>

    {/* ── Proxy (middle left) ── */}
    <rect
      x="60"
      y="180"
      width="210"
      height="100"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line x1="60" y1="202" x2="270" y2="202" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="165"
      y="196"
      textAnchor="middle"
      fontSize="12"
      fontWeight="600"
      fill="#1c1917"
    >
      Proxy
    </text>
    <text x="75" y="220" textAnchor="start" fontSize="11" fill="#6b7280">
      - realSubject: RealSubject
    </text>
    <text x="75" y="238" textAnchor="start" fontSize="11" fill="#6b7280">
      + request()
    </text>
    <text
      x="75"
      y="256"
      textAnchor="start"
      fontSize="10"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      checks, then delegates
    </text>
    <text
      x="75"
      y="270"
      textAnchor="start"
      fontSize="10"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      to realSubject
    </text>

    {/* ── RealSubject (middle right) ── */}
    <rect
      x="410"
      y="180"
      width="210"
      height="80"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="410"
      y1="202"
      x2="620"
      y2="202"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="515"
      y="196"
      textAnchor="middle"
      fontSize="12"
      fontWeight="600"
      fill="#1c1917"
    >
      RealSubject
    </text>
    <text x="425" y="220" textAnchor="start" fontSize="11" fill="#6b7280">
      + request()
    </text>
    <text
      x="425"
      y="238"
      textAnchor="start"
      fontSize="10"
      fill="#9ca3af"
      fontStyle="italic"
    >
      {" "}
      does the actual work
    </text>

    {/* ── Client (far left) ── */}
    <rect
      x="60"
      y="360"
      width="160"
      height="54"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line x1="60" y1="380" x2="220" y2="380" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="140"
      y="374"
      textAnchor="middle"
      fontSize="12"
      fontWeight="600"
      fill="#1c1917"
    >
      Client
    </text>
    <text x="75" y="396" textAnchor="start" fontSize="11" fill="#6b7280">
      uses Subject interface
    </text>

    {/* ── Three variant labels (bottom) ── */}
    {/* Virtual */}
    <rect
      x="60"
      y="438"
      width="160"
      height="42"
      rx="5"
      fill="#eff6ff"
      stroke="#bfdbfe"
      strokeWidth="1"
    />
    <text
      x="140"
      y="455"
      textAnchor="middle"
      fontSize="10"
      fontWeight="600"
      fill="#1d4ed8"
    >
      Virtual Proxy
    </text>
    <text x="140" y="470" textAnchor="middle" fontSize="10" fill="#3b82f6">
      ImageProxy → RealImage
    </text>

    {/* Protection */}
    <rect
      x="258"
      y="438"
      width="164"
      height="42"
      rx="5"
      fill="#fdf4ff"
      stroke="#e9d5ff"
      strokeWidth="1"
    />
    <text
      x="340"
      y="455"
      textAnchor="middle"
      fontSize="10"
      fontWeight="600"
      fill="#7e22ce"
    >
      Protection Proxy
    </text>
    <text x="340" y="470" textAnchor="middle" fontSize="10" fill="#a855f7">
      DocumentProxy → Reader
    </text>

    {/* Remote */}
    <rect
      x="456"
      y="438"
      width="164"
      height="42"
      rx="5"
      fill="#f0fdf4"
      stroke="#bbf7d0"
      strokeWidth="1"
    />
    <text
      x="538"
      y="455"
      textAnchor="middle"
      fontSize="10"
      fontWeight="600"
      fill="#15803d"
    >
      Remote Proxy
    </text>
    <text x="538" y="470" textAnchor="middle" fontSize="10" fill="#22c55e">
      DataServiceProxy → Service
    </text>

    {/* ── Arrows ── */}
    {/* Proxy implements Subject (dashed + hollow triangle) */}
    <line
      x1="165"
      y1="180"
      x2="270"
      y2="86"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-proxy)"
    />

    {/* RealSubject implements Subject (dashed + hollow triangle) */}
    <line
      x1="515"
      y1="180"
      x2="415"
      y2="86"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-proxy)"
    />

    {/* Proxy has-a RealSubject (solid + open arrow) */}
    <line
      x1="270"
      y1="220"
      x2="410"
      y2="220"
      stroke="#9ca3af"
      strokeWidth="1.5"
      markerEnd="url(#arr-proxy)"
    />

    {/* Client uses Proxy (solid + open arrow) */}
    <line
      x1="165"
      y1="360"
      x2="165"
      y2="282"
      stroke="#9ca3af"
      strokeWidth="1.5"
      markerEnd="url(#arr-proxy)"
    />

    {/* Caption */}
    <text x="340" y="495" textAnchor="middle" fontSize="11" fill="#9ca3af">
      Proxy and RealSubject share the same interface — the client never needs to
      change.
    </text>
  </svg>
);

export default proxy;
