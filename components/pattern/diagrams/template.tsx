const template: React.ReactNode = (
  <svg
    viewBox="0 0 680 420"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Open arrow — has-a / association */}
      <marker
        id="arr-template"
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
      {/* Hollow triangle pointing UP — is-a / extends */}
      <marker
        id="tri-template"
        viewBox="0 0 10 10"
        refX="5"
        refY="10"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path
          d="M0 10L5 0L10 10Z"
          fill="white"
          stroke="#9ca3af"
          strokeWidth="1"
        />
      </marker>
    </defs>

    {/* ── Abstract class: ModelTrainer (top center) ── */}
    <rect
      x="220"
      y="30"
      width="240"
      height="130"
      rx="6"
      fill="#fefce8"
      stroke="#fbbf24"
      strokeWidth="1.5"
    />
    {/* header divider */}
    <line x1="220" y1="58" x2="460" y2="58" stroke="#fbbf24" strokeWidth="1" />
    {/* stereotype */}
    <text
      x="340"
      y="48"
      textAnchor="middle"
      fontSize="10"
      fill="#92400e"
      fontStyle="italic"
    >
      «abstract»
    </text>
    <text
      x="340"
      y="76"
      textAnchor="middle"
      fontSize="13"
      fontWeight="600"
      fill="#1c1917"
    >
      ModelTrainer
    </text>
    {/* methods */}
    <text x="235" y="98" textAnchor="start" fontSize="11" fill="#78716c">
      + trainPipeline(dataPath) «final»
    </text>
    <text x="235" y="114" textAnchor="start" fontSize="11" fill="#78716c">
      # loadData(path)
    </text>
    <text x="235" y="130" textAnchor="start" fontSize="11" fill="#78716c">
      # preprocessData()
    </text>
    <text
      x="235"
      y="146"
      textAnchor="start"
      fontSize="11"
      fill="#78716c"
      fontStyle="italic"
    >
      # trainModel() «abstract»
    </text>

    {/* ── Concrete A: NeuralNetworkTrainer (bottom left) ── */}
    <rect
      x="60"
      y="280"
      width="230"
      height="110"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line x1="60" y1="300" x2="290" y2="300" stroke="#d1d5db" strokeWidth="1" />
    <text
      x="175"
      y="294"
      textAnchor="middle"
      fontSize="12"
      fontWeight="600"
      fill="#1c1917"
    >
      NeuralNetworkTrainer
    </text>
    <text x="75" y="318" textAnchor="start" fontSize="11" fill="#6b7280">
      # trainModel()
    </text>
    <text x="75" y="334" textAnchor="start" fontSize="11" fill="#6b7280">
      # evaluateModel()
    </text>
    <text x="75" y="350" textAnchor="start" fontSize="11" fill="#6b7280">
      # saveModel() ← overrides default
    </text>
    <text
      x="75"
      y="370"
      textAnchor="start"
      fontSize="10"
      fill="#9ca3af"
      fontStyle="italic"
    >
      saves weights as .h5
    </text>

    {/* ── Concrete B: DecisionTreeTrainer (bottom right) ── */}
    <rect
      x="390"
      y="280"
      width="230"
      height="110"
      rx="6"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="1.5"
    />
    <line
      x1="390"
      y1="300"
      x2="620"
      y2="300"
      stroke="#d1d5db"
      strokeWidth="1"
    />
    <text
      x="505"
      y="294"
      textAnchor="middle"
      fontSize="12"
      fontWeight="600"
      fill="#1c1917"
    >
      DecisionTreeTrainer
    </text>
    <text x="405" y="318" textAnchor="start" fontSize="11" fill="#6b7280">
      # trainModel()
    </text>
    <text x="405" y="334" textAnchor="start" fontSize="11" fill="#6b7280">
      # evaluateModel()
    </text>
    <text
      x="405"
      y="354"
      textAnchor="start"
      fontSize="10"
      fill="#9ca3af"
      fontStyle="italic"
    >
      inherits loadData, preprocess,
    </text>
    <text
      x="405"
      y="370"
      textAnchor="start"
      fontSize="10"
      fill="#9ca3af"
      fontStyle="italic"
    >
      saveModel from ModelTrainer
    </text>

    {/* ── Inheritance arrows (dashed lines + hollow triangle) ── */}
    {/* NeuralNetworkTrainer → ModelTrainer */}
    <line
      x1="175"
      y1="280"
      x2="290"
      y2="162"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-template)"
    />

    {/* DecisionTreeTrainer → ModelTrainer */}
    <line
      x1="505"
      y1="280"
      x2="400"
      y2="162"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#tri-template)"
    />

    {/* ── Caption ── */}
    <text x="340" y="410" textAnchor="middle" fontSize="11" fill="#9ca3af">
      Subclasses extend ModelTrainer and override only the steps they need to
      change.
    </text>
  </svg>
);

export default template;
