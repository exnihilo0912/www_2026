import { fetchPersonalProjects } from "@/app/lib/data";
import type { PersonalProject } from "@/app/lib/placeholder_data/index";
import List from "@/app/ui/components/List";


export default async function PersonalProjectList() {
  const personalProjects = await fetchPersonalProjects();

  return <List items={personalProjects}>
    {(item) => {
      return <PersonalProjectItem personalProject={item as unknown as PersonalProject} />
    }}
  </List>;
}

interface PersonalProjectItemProps { personalProject: PersonalProject }
function PersonalProjectItem({ personalProject }: PersonalProjectItemProps) {
  // TODO add avatar
  const { name } = personalProject;
  return <div className="flex flex-col md:flex-row gap-3 p-3">
    <div className="size-[50] bg-stone-100 rounded-sm flex items-center justify-center border-4 border-white shadow-basic shadow-base-shadow">A</div>
    <div className="flex flex-col gap-1">
      <div className="text-sm text-stone-600">{name}</div>
    </div>
  </div>;
}