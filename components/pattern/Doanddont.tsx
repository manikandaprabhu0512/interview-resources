interface DoAndDontProps {
  use: string[];
  avoid: string[];
}

export function DoAndDont({ use, avoid }: DoAndDontProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-3">
          ✅ Use when
        </p>
        <ul className="space-y-2">
          {use.map((item, i) => (
            <li key={i} className="text-sm text-green-800 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-3">
          ❌ Avoid when
        </p>
        <ul className="space-y-2">
          {avoid.map((item, i) => (
            <li key={i} className="text-sm text-red-800 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
