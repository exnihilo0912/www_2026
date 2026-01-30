import { fetchEntities, fetchWorkExperiences } from "@/app/lib/data";
import type { Entity, WorkExperience } from "@/app/lib/placeholder_data/index";
import List from "@/app/ui/components/List";


export default async function WorkExperienceList() {
  const workEntities = await fetchEntities();
  const workExperiences = await fetchWorkExperiences();

  return  <List items={workExperiences}>
    {(item) => {
      const { entity_id } = item as unknown as WorkExperience;
      const entity = workEntities.find(({ id }) => id === entity_id);

      return <WorkExperienceItem workExperience={item as unknown as WorkExperience} entity={entity}/>
    }}
  </List>
}

function WorkExperienceItem({ workExperience, entity }: { workExperience: WorkExperience, entity?: Entity }) {
  const { title } = workExperience;
  return <div className="flex gap-3 items-center">
    <div className="size-[30] bg-stone-200 rounded-full flex items-center justify-center">A</div>
    <div>
      {entity && <div>{entity.name}</div>}
      <div className="text-sm">{title}</div>
    </div>
  </div>;
}