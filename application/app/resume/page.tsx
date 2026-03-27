import { AcademicCapIcon } from '@heroicons/react/24/outline';

import PageTitle from "@/components/ui/PageTitle";
import Timeline from "@/components/ui/Timeline";

import { fetchWorkExperiences } from "@/features/experiences/index";

export default async function Resume() {
  const workExperiences = await fetchWorkExperiences();
  const timelineWorkExperiences = workExperiences.map(({ id, title, start_date, end_date, description }) => ({
    id,
    title,
    subtitle: `${start_date.slice(0, 4)} - ${end_date?.slice(0, 4)}`,
    content: description,
  }));

  return (
    <section className="flex flex-col gap-8">
      <PageTitle>Resume</PageTitle>
      <Timeline icon={<AcademicCapIcon/>} name="Work Experiences" items={timelineWorkExperiences}/>
    </section>
  );
}