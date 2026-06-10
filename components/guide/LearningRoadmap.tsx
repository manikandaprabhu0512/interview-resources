interface LearningRoadmapProps {
  items: string[];
}

export function LearningRoadmap({ items }: LearningRoadmapProps) {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center">
        {items.map((item, index) => (
          <div key={item} className="flex flex-col items-center">
            <div className="rounded-2xl border border-gray-200 px-8 py-5 min-w-65 text-center bg-white">
              <p className="text-lg font-semibold text-gray-900">{item}</p>
            </div>

            {index < items.length - 1 && (
              <div className="h-12 flex items-center">
                <div className="w-px h-full bg-gray-300" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
