import diagrams from "./diagrams/diagram";

interface StructureDiagramProps {
  pattern: string;
}

export function StructureDiagram({ pattern }: StructureDiagramProps) {
  const diagram = diagrams[pattern.toLowerCase()];

  if (!diagram) {
    return (
      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-8 text-center text-sm text-gray-400 my-4">
        Diagram for <strong>{pattern}</strong> coming soon.
      </div>
    );
  }

  return (
    <div className="bg-black/90 border border-gray-700 rounded-lg p-4 my-4 overflow-x-auto">
      {diagram}
    </div>
  );
}
