export default function Section(props: { title: string, children: React.ReactNode }) {
  return (
    <div className="w-full bg-panel rounded-[12] border border-panel p-3">
      <div className="pl-2 relative font-semibold mb-2 before:absolute before:rounded-full before:top-[calc(50%-4px)] before:-left-1.5 before:block before:size-2 before:bg-stone-600">
        {props.title}
      </div>
      {props.children}
    </div>
  );
}