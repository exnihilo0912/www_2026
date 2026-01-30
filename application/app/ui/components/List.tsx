type ListItem = { id: string } & unknown;

interface ListItemProps {
  children: React.ReactNode;
}
export function ListItem({ children }: ListItemProps) {
  return <li className="bg-list-item p-2 rounded-md">{children}</li>
}

interface ListProps {
  items: ListItem[];
  children: (item: unknown) => React.ReactNode;
}
export default function List({ items, children }: ListProps) {
  return <ul className="flex flex-col bg-list-container gap-2 p-1">
    {items.map(({ id, ...item}) => <ListItem key={id}>{children(item)}</ListItem>)}
  </ul>;
}
List.ListItem = ListItem;