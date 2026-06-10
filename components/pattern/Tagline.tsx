interface TaglineProps {
  children: React.ReactNode;
}

export function Tagline({ children }: TaglineProps) {
  return (
    <p className="text-lg text-gray-500 font-serif border-l-2 border-emerald-500 pl-4 my-6 leading-relaxed italic">
      {children}
    </p>
  );
}
