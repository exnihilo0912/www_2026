import Timeline from "../ui/components/Timeline";

export default function ResumePage() {
  const items = [
    {id: 'a', title: 'Elem A'},
    {id: 'b', title: 'Elem B'},
    {id: 'c', title: 'Elem C'},
    {id: 'd', title: 'Elem D'},
  ];
      {/* <Timeline items={items} displayType="alternate">
        {(item) => <div>{item.title}</div>}
      </Timeline> */}
  return (
    <div className="w-full bg-panel rounded-[12] border border-panel p-3 flex justify-center">
      Academics
    </div>
  );
}
