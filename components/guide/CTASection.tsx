import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  href: string;
  buttonText: string;
}

export function CTASection({
  title,
  description,
  href,
  buttonText,
}: CTASectionProps) {
  return (
    <section className="py-24">
      <div className="rounded-4xl border border-gray-200 p-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        {description && (
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            {description}
          </p>
        )}

        <Link
          href={href}
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
        >
          {buttonText}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
