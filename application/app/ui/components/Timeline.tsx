type TimelineItem = { id: string; content?: React.ReactNode } & Record<string, string>;

function TimelineBlock(props: { children: React.ReactNode }) {
  const afterPseudoElementClasses = 'after:size-[12px] after:block after:bg-stone-600 hover:after:bg-stone-800 after:absolute after:right-[calc(50%-6px)] after:rounded-full';

  return <li className={["w-[calc(50%-12px)] h-[80] bg-stone-300 odd:self-end z-1 p-2 rounded-[6] hover:bg-stone-400", afterPseudoElementClasses].join(' ')}>
    {props.children}
  </li>;
}

export default function Timeline(props: { items: TimelineItem[], children?: (item: TimelineItem) => React.ReactNode, displayType: 'left' | 'right' | 'alternate' }) {
  const { items, children, displayType } = props;
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