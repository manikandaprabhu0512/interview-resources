interface PatternMetaProps {
  pattern: "Behavioral" | "Creational" | "Structural";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const difficultyColor = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

const patternColor = {
  Behavioral: "bg-blue-100 text-blue-700",
  Creational: "bg-purple-100 text-purple-700",
  Structural: "bg-pink-100 text-pink-700",
};

export function PatternMeta({ pattern, difficulty }: PatternMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <span
        className={`text-xs font-medium ${patternColor[pattern]} rounded px-2 py-0.5`}
      >
        {pattern}
      </span>
      <span
        className={`text-xs font-medium rounded px-2 py-0.5 ${difficultyColor[difficulty]}`}
      >
        {difficulty}
      </span>
    </div>
  );
}
