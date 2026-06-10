interface ComparisonColumn {
  title: string;
  description?: string;
  items: string[];
}

interface ComparisonGridProps {
  left: ComparisonColumn;
  right: ComparisonColumn;
}

export function ComparisonGrid({ left, right }: ComparisonGridProps) {
  return (
    <section className="grid md:grid-cols-2 gap-8 py-12">
      <div className="rounded-3xl border border-gray-200 p-8">
        <h3 className="text-3xl font-bold text-gray-900">{left.title}</h3>

        {left.description && (
          <p className="mt-3 text-gray-600">{left.description}</p>
        )}

        <ul className="mt-8 space-y-4">
          {left.items.map((item) => (
            <li key={item} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-gray-200 p-8">
        <h3 className="text-3xl font-bold text-gray-900">{right.title}</h3>

        {right.description && (
          <p className="mt-3 text-gray-600">{right.description}</p>
        )}

        <ul className="mt-8 space-y-4">
          {right.items.map((item) => (
            <li key={item} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
