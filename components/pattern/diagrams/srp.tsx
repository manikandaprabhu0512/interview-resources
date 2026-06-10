const srp: React.ReactNode = (
  <svg
    viewBox="0 0 680 420"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="arr-srp"
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

    {/* ShoppingCart */}
    <rect
      x="250"
      y="40"
      width="180"
      height="100"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text
      x="340"
      y="70"
      textAnchor="middle"
      fontSize="16"
      fontWeight="600"
      fill="#111827"
    >
      ShoppingCart
    </text>

    <text x="340" y="95" textAnchor="middle" fontSize="12" fill="#6b7280">
      addProduct()
    </text>

    <text x="340" y="115" textAnchor="middle" fontSize="12" fill="#6b7280">
      calculateTotal()
    </text>

    {/* Printer */}
    <rect
      x="70"
      y="240"
      width="180"
      height="90"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="160"
      y="275"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      ShoppingCartPrinter
    </text>

    <text x="160" y="300" textAnchor="middle" fontSize="12" fill="#6b7280">
      printInvoice()
    </text>

    {/* Storage */}
    <rect
      x="430"
      y="240"
      width="180"
      height="90"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="520"
      y="275"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      ShoppingCartStorage
    </text>

    <text x="520" y="300" textAnchor="middle" fontSize="12" fill="#6b7280">
      saveToDatabase()
    </text>

    {/* Associations */}
    <line
      x1="300"
      y1="140"
      x2="200"
      y2="240"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-srp)"
    />

    <line
      x1="380"
      y1="140"
      x2="480"
      y2="240"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-srp)"
    />

    <text x="340" y="390" textAnchor="middle" fontSize="12" fill="#9ca3af">
      Each class has one responsibility and one reason to change.
    </text>
  </svg>
);

export default srp;
