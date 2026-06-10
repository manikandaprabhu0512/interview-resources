interface Example {
  name: string;
  detail: string;
}

interface RealWorldExamplesProps {
  examples: Example[];
}

export function RealWorldExamples({ examples }: RealWorldExamplesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
      {examples.map((ex) => (
        <div
          key={ex.name}
          className="bg-gray-50 border border-gray-200 rounded-lg p-3"
        >
          <p className="text-sm font-medium text-gray-800 mb-1">{ex.name}</p>
          <p className="text-xs text-gray-500 leading-relaxed">{ex.detail}</p>
        </div>
      ))}
    </div>
  );
}
