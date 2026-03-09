interface TagProps { children: React.ReactNode }
export default function Tag({ children }: TagProps) {
  // TODO Add status base color and bg-color in wrapper "status tag"
  return (
    <div className="flex gap-1.5 items-center bg-green-300 rounded pl-2 pr-3 h-5 text-xs uppercase text-center font-semibold text-green-800 tracking-wide">
      {/* replace by "before" */}
      <i className="block size-1.5 rounded-full bg-green-800" />
      {children}
    </div>
  );
}