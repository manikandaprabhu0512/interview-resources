interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function HeroSection({ eyebrow, title, description }: HeroSectionProps) {
  return (
    <section className="py-24">
      {eyebrow && (
        <p className="text-sm font-medium text-green-600 mb-5">{eyebrow}</p>
      )}

      <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 max-w-4xl">
        {title}
      </h1>

      <p className="mt-8 text-xl leading-9 text-gray-600 max-w-3xl">
        {description}
      </p>
    </section>
  );
}
