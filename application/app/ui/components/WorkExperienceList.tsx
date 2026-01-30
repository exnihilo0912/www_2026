import { fetchEntities, fetchWorkExperiences } from "@/app/lib/data";
import type { Entity, WorkExperience } from "@/app/lib/placeholder_data/index";
import List from "@/app/ui/components/List";


export default async function WorkExperienceList() {
  const workEntities = await fetchEntities();
  const workExperiences = await fetchWorkExperiences();

  return <List items={workExperiences}>
    {(item) => {
      const { entity_id } = item as unknown as WorkExperience;
      const entity = workEntities.find(({ id }) => id === entity_id);

      return <WorkExperienceItem workExperience={item as unknown as WorkExperience} entity={entity}/>
    }}
  </List>;
}

interface WorkExperienceItemProps { workExperience: WorkExperience; entity?: Entity; }
function WorkExperienceItem({ workExperience, entity }: WorkExperienceItemProps) {
  const { title } = workExperience;
  return <div className="flex flex-col md:flex-row gap-3 p-3">
    <div className="size-[50] bg-stone-100 rounded-sm flex items-center justify-center border-4 border-white shadow-basic shadow-base-shadow">A</div>
    <div className="flex flex-col gap-1">
      {entity && <div className="font-medium">{entity.name}</div>}
      <div className="text-sm text-stone-600">{title}</div>
    </div>
  </div>;
}