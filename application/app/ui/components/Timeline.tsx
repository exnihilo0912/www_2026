type TimelineItem = { id: string; content?: React.ReactNode } & Record<string, string>;

interface TimelineProps {
  items: TimelineItem[];
  children?: (item: TimelineItem) => React.ReactNode;
  displayType?: 'left' | 'right' | 'alternate';
}
export default function Timeline({ items, children, displayType = 'left' }: TimelineProps) {
// TODO fix vertical bar height issue
  return (
    <ul className="container flex flex-col flex-wrap gap-2 w-full md:w-[320] p-2 bg-stone-200 relative">
        { displayType === 'alternate' && <div className="absolute h-full w-[6] bg-stone-400 left-[calc(50%-3px)] rounded-full"></div>}
        {items.map((item) => <TimelineBlock key={item.id}>
          {typeof children === 'function' ? children(item) : item.content}
          </TimelineBlock>
        )}
    </ul>
  );
}

interface TimelineBlockProps {
  children: React.ReactNode;
}
function TimelineBlock({ children }: TimelineBlockProps) {
  const afterPseudoElementClasses = 'after:size-3 after:block after:bg-stone-600 hover:after:bg-stone-800 after:absolute after:right-[calc(50%-6px)] after:rounded-full';

  return <li className={["w-[calc(50%-12px)] h-20 bg-stone-300 odd:self-end z-1 p-2 rounded-md hover:bg-stone-400", afterPseudoElementClasses].join(' ')}>
    {children}
  </li>;
}