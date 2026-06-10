import { Check } from "lucide-react";

interface ChecklistSectionProps {
  title: string;
  description?: string;
  items: string[];
}

export function ChecklistSection({
  title,
  description,
  items,
}: ChecklistSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-4xl">
        <h3 className="text-4xl font-bold tracking-tight text-gray-900">
          {title}
        </h3>

        {description && (
          <p className="mt-4 text-lg text-gray-600">{description}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50">
              <Check size={16} className="text-green-600" />
            </div>

            <span className="font-medium text-gray-800">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
