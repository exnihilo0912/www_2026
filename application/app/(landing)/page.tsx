import {
  AcademicCapIcon,
  CommandLineIcon,
  GlobeAltIcon,
  QuestionMarkCircleIcon,
  WindowIcon,
} from '@heroicons/react/24/solid';

import PageTitle from "@/components/ui/PageTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import { fetchActivities } from '@/features/introduction';

export default async function Home() {
  const activities = await fetchActivities();
  const iconByIconName: Record<string,React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
  } & React.RefAttributes<SVGSVGElement>>> = {
    'academic-cap': AcademicCapIcon,
    'code': CommandLineIcon,
    'window': WindowIcon,
    'globe-alt': GlobeAltIcon,
  };

  return (
    <section className="flex flex-col gap-8">
      <PageTitle>About Me</PageTitle>
      <div className="flex flex-col gap-4">
        <p>
          I'm a Fullstack Software Engineer from Paris, France, working in web development.<br/> I enjoy solving complex challenges and implement simple & efficient solutions to complex problems.
        </p>
        <p>
          I take pride in doing my job with care and with my best effort, both in the resulting product and its implementation code-wise.
          I had the opportunity over the years to work in a wide-range of position and specialties, in different industries and company sizes.<br/>
        </p>
        <p>
          My aim is to be part of a long term adventure, where I could participate and witness the growth of a company, its vision and products, through successes and challenges.
        </p>
      </div>
      <section className="flex flex-col gap-4 md:gap-3">
        <SectionTitle>What I&apos;m Doing</SectionTitle>
        <ul className="flex flex-col gap-5 lg:flex-row md:flex-wrap w-full">
          {activities.map((activity) => {
            const Icon = iconByIconName[activity.icon] || QuestionMarkCircleIcon;
            return (
              <li key={activity.id} className="md:w-[45%] grow">
                {/* TODO align rounded value across app */}
                <article className="flex flex-col md:flex-row items-center md:items-start min-h-[200] md:min-h-[180] gap-2 md:gap-4 border border-stone-300 rounded-xl p-5 md:p-8">
                  <header>
                      <Icon className="size-10 text-stone-300" />
                  </header>
                  <div className="flex flex-col gap-1 items-center md:items-start">
                    <div className="text-lg font-semibold">{activity.title}</div>
                    <p className="text-center md:text-left text-stone-600">{activity.content}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}