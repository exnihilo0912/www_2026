interface TagProps { children: React.ReactNode }

export default function Tag({ children }: TagProps) {
  // TODO Add status base color and bg-color
  return (
    <div className="flex gap-1.5 items-center bg-stone-300 rounded-full pl-2 pr-3 h-5 text-xs uppercase text-center font-semibold text-stone-700 tracking-wide">
      {/* replace by "before" */}
      <i className="block size-1.5 rounded-full bg-stone-700" />
      {children}
    </div>
  );
}