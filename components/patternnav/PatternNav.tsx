import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavPage {
  title: string;
  pattern?: string;
  href: string;
}

interface PatternNavProps {
  prev?: NavPage;
  next?: NavPage;
}

export function PatternNav({ prev, next }: PatternNavProps) {
  return (
    <div className="grid grid-cols-2 gap-3 pt-8 mt-8 border-t border-gray-100">
      {prev ? (
        <Link
          href={prev.href}
          className="flex flex-col gap-1 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
        >
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <ArrowLeft size={13} /> Previous
          </span>
          <span className="text-sm font-medium text-gray-900">
            {prev.title}
          </span>
          {prev.pattern && (
            <span className="text-xs text-gray-500">{prev.pattern}</span>
          )}
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="flex flex-col items-end gap-1 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
        >
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            Next <ArrowRight size={13} />
          </span>
          <span className="text-sm font-medium text-gray-900">
            {next.title}
          </span>
          <span className="text-xs text-gray-500">{next.pattern}</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
