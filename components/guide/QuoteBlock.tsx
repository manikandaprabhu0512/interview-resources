interface QuoteBlockProps {
  quote: string;
  author?: string;
}

export function QuoteBlock({ quote, author }: QuoteBlockProps) {
  return (
    <section className="py-24">
      <blockquote className="max-w-4xl">
        <p className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900">
          "{quote}"
        </p>

        {author && (
          <footer className="mt-6 text-lg text-gray-500">— {author}</footer>
        )}
      </blockquote>
    </section>
  );
}
