interface SkillLevel {
  title: string;
  description?: string;
  patterns: string[];
}

interface SkillTreeProps {
  levels: SkillLevel[];
}

export function SkillTree({ levels }: SkillTreeProps) {
  return (
    <section className="py-24">
      <div className="space-y-8">
        {levels.map((level, index) => (
          <div key={level.title}>
            <div className="rounded-3xl border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-medium text-green-600">
                    {level.title}
                  </p>

                  {level.description && (
                    <p className="text-gray-600 mt-2">{level.description}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {level.patterns.map((pattern) => (
                  <span
                    key={pattern}
                    className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium"
                  >
                    {pattern}
                  </span>
                ))}
              </div>
            </div>

            {index < levels.length - 1 && (
              <div className="flex justify-center py-6">
                <div className="h-12 w-px bg-gray-300" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
