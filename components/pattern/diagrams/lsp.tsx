const lsp: React.ReactNode = (
  <svg
    viewBox="0 0 680 500"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="tri-lsp"
        viewBox="0 0 10 10"
        refX="1"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M2 1L8 5L2 9" fill="white" stroke="#9ca3af" strokeWidth="1" />
      </marker>

      <marker
        id="arr-lsp"
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

    {/* DepositOnlyAccount */}

    <rect
      x="250"
      y="30"
      width="180"
      height="80"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text
      x="340"
      y="60"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      DepositOnlyAccount
    </text>

    <text x="340" y="85" textAnchor="middle" fontSize="12" fill="#6b7280">
      deposit(amount)
    </text>

    {/* WithdrawableAccount */}

    <rect
      x="250"
      y="180"
      width="180"
      height="90"
      rx="8"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="2"
    />

    <text
      x="340"
      y="210"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      WithdrawableAccount
    </text>

    <text x="340" y="235" textAnchor="middle" fontSize="12" fill="#6b7280">
      deposit(amount)
    </text>

    <text x="340" y="255" textAnchor="middle" fontSize="12" fill="#6b7280">
      withdraw(amount)
    </text>

    {/* Saving Account */}

    <rect
      x="60"
      y="350"
      width="170"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="145"
      y="395"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      SavingAccount
    </text>

    {/* Current Account */}

    <rect
      x="450"
      y="350"
      width="170"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="535"
      y="395"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      CurrentAccount
    </text>

    {/* Fixed Term */}

    <rect
      x="450"
      y="30"
      width="170"
      height="80"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="535"
      y="75"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      FixedTermAccount
    </text>

    {/* DepositOnly -> Withdrawable */}

    <line
      x1="340"
      y1="180"
      x2="340"
      y2="120"
      stroke="#9ca3af"
      strokeDasharray="5 5"
      strokeWidth="2"
      markerEnd="url(#tri-lsp)"
    />

    {/* Saving -> Withdrawable */}

    <line
      x1="145"
      y1="350"
      x2="300"
      y2="275"
      stroke="#9ca3af"
      strokeDasharray="5 5"
      strokeWidth="2"
      markerEnd="url(#tri-lsp)"
    />

    {/* Current -> Withdrawable */}

    <line
      x1="535"
      y1="350"
      x2="360"
      y2="275"
      stroke="#9ca3af"
      strokeDasharray="5 5"
      strokeWidth="2"
      markerEnd="url(#tri-lsp)"
    />

    {/* Fixed -> DepositOnly */}

    <line
      x1="450"
      y1="70"
      x2="440"
      y2="70"
      stroke="#9ca3af"
      strokeDasharray="5 5"
      strokeWidth="2"
      markerEnd="url(#tri-lsp)"
    />

    {/* Client */}

    <rect
      x="20"
      y="180"
      width="130"
      height="70"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
    />

    <text
      x="85"
      y="220"
      textAnchor="middle"
      fontSize="15"
      fontWeight="600"
      fill="#111827"
    >
      BankClient
    </text>

    <line
      x1="150"
      y1="215"
      x2="250"
      y2="215"
      stroke="#9ca3af"
      strokeWidth="2"
      markerEnd="url(#arr-lsp)"
    />

    <text x="340" y="480" textAnchor="middle" fontSize="12" fill="#9ca3af">
      Subtypes must be replaceable with their parent types without changing
      client behavior.
    </text>
  </svg>
);

export default lsp;
