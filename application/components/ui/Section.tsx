interface SectionProps {
  title: string;
  children: React.ReactNode;
}
export default function Section({ title, children }: SectionProps) {
  return (
    <div className="w-full bg-panel rounded-xl border border-panel p-3">
      <div className="pl-3 relative font-semibold mb-2 before:absolute before:rounded-full before:top-[calc(50%-4px)] before:left-0 before:block before:size-2 before:bg-stone-600">
        {title}
      </div>
      {children}
    </div>
  );
}