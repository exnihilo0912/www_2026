import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  content: string | React.ReactElement;
}

interface TimelineProps {
  icon?: React.ReactElement;
  name: string;
  items: TimelineItem[];
  renderItem?: (item: TimelineItem) => React.ReactElement;
}

function Timeline({ icon, name, items, renderItem }: TimelineProps) {
  return (
    <div className='ml-4'>
      <header className='flex items-center gap-3 relative -left-4 z-10 mb-2'>
        <div className='size-10 bg-stone-100 border border-stone-200 p-2 rounded-lg'>{icon || null}</div>
        <span className="text-2xl font-black">{name}</span>
      </header>
      <div className="">
        <ul className="pl-7">
          {items.map((item, index) => (
            <li key={item.id} className="">
              {
                renderItem
                  ? renderItem(item)
                  : (<TimelineItem {...item} isLast={index === items.length - 1}/>)
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface TimelineItemProps extends TimelineItem{
  isLast?: boolean;
}
function TimelineItem({ title, subtitle, content, isLast }: TimelineItemProps) {
  const beforeClasses = isLast ? '': 'before:absolute before:-top-5 before:-left-6 before:bg-stone-200 before:w-[1] before:h-[calc(100%+50px)]';
  const afterClasses = 'after:absolute after:top-2 after:-left-7 after:bg-stone-100 after:border after:border-stone-200 after:w-2 after:h-2 after:rounded-xl ';
  const classes = ['relative mb-5 pl-2 flex flex-col gap-0.5', beforeClasses, afterClasses].join(' ');
  return <div className={classes}>
    <header className="font-bold">{title}</header>
    {subtitle && <div className="font-light text-stone-700">{subtitle}</div>}
    <div className="">
      {content}
    </div>
  </div>;
}

Timeline.TimelineItem = TimelineItem;

export default Timeline;