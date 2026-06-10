interface KeyTakeawayProps {
  children: React.ReactNode;
}

export function KeyTakeaway({ children }: KeyTakeawayProps) {
  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-5 py-4 my-4">
      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">
        Key takeaway
      </p>
      <p className="text-sm text-emerald-900 leading-relaxed">{children}</p>
    </div>
  );
}
