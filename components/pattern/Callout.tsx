interface CalloutProps {
  type: "info" | "warning" | "tip";
  children: React.ReactNode;
}

const styles = {
  info: {
    wrapper: "bg-blue-50 border-blue-200 text-blue-800",
    icon: "ℹ️",
  },
  warning: {
    wrapper: "bg-amber-50 border-amber-200 text-amber-800",
    icon: "⚠️",
  },
  tip: {
    wrapper: "bg-emerald-50 border-emerald-200 text-emerald-800",
    icon: "💡",
  },
};

export function Callout({ type, children }: CalloutProps) {
  const { wrapper, icon } = styles[type];

  return (
    <div
      className={`flex gap-3 border rounded-lg px-4 py-3 my-4 text-sm leading-relaxed ${wrapper}`}
    >
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div>{children}</div>
    </div>
  );
}
