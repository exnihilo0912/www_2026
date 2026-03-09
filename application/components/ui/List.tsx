import { Square3Stack3DIcon } from "@heroicons/react/24/solid";

type ItemWithId<T> = { id: string } & T;
interface ListProps<T> {
  items: ItemWithId<T>[];
  children: (item: ItemWithId<T>) => React.ReactNode;
}
export default function List<T>({ items, children }: ListProps<T>) {
  return <ul className="flex flex-col bg-list-container gap-2 p-1">
    {
      items.length
      ? items.map((item) => <ListItem key={item.id}>{children(item)}</ListItem>)
      : <div className="text-stone-600 text-center p-4 flex flex-col items-center gap-2">
          <Square3Stack3DIcon className="size-10 text-stone-400"/>
          <p className="text-stone-600">Nothing to see here</p>
        </div>
    }
  </ul>;
}
List.ListItem = ListItem;

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}
export function ListItem({ children, className = '', ...props }: ListItemProps) {
  return <li className={['bg-list-item p-2 rounded-md border border-base-border shadow-basic shadow-base-shadow', className].join(' ' )} {...props}>
    {children}
  </li>;
}