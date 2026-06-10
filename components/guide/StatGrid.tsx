interface Stat {
  value: string;
  label: string;
}

interface StatGridProps {
  stats: Stat[];
}

export function StatGrid({ stats }: StatGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-gray-200 p-8"
        >
          <div className="text-4xl font-bold text-gray-900">{stat.value}</div>

          <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
