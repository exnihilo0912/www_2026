interface TagProps { children: React.ReactNode }
export default function Tag({ children }: TagProps) {
  return (
    <div className="w-fit flex items-center h-6 px-3 rounded-md text-xs text-center text-stone-800 bg-stone-100">
      {children}
    </div>
  );
}