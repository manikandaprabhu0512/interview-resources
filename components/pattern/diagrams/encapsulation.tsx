const encapsulation: React.ReactNode = (
  <svg
    viewBox="0 0 680 380"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="180"
      y="60"
      width="320"
      height="300"
      rx="8"
      fill="#f9fafb"
      stroke="#d1d5db"
      strokeWidth="2"
    />

    <text x="340" y="90" textAnchor="middle" fontWeight="700" fill="#374151">
      SportsCar1
    </text>

    <line x1="180" y1="110" x2="500" y2="110" stroke="#d1d5db" />

    <text x="220" y="140" fill="#dc2626" fontSize="13">
      - brand : String
    </text>

    <text x="220" y="165" fill="#dc2626" fontSize="13">
      - model : String
    </text>

    <text x="220" y="190" fill="#dc2626" fontSize="13">
      - currentSpeed : int
    </text>

    <text x="220" y="215" fill="#dc2626" fontSize="13">
      - currentGear : int
    </text>

    <text x="220" y="240" fill="#dc2626" fontSize="13">
      - tyreCompany : String
    </text>

    <line x1="180" y1="260" x2="500" y2="260" stroke="#d1d5db" />

    <text x="220" y="290" fill="#16a34a" fontSize="13">
      + getSpeed()
    </text>

    <text x="220" y="315" fill="#16a34a" fontSize="13">
      + getTyreCompany()
    </text>

    <text x="220" y="340" fill="#16a34a" fontSize="13">
      + setTyreCompany()
    </text>

    <text x="340" y="25" textAnchor="middle" fill="#9ca3af" fontSize="13">
      Private data is protected through controlled access methods
    </text>
  </svg>
);

export default encapsulation;
