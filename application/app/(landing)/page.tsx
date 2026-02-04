import { Suspense } from 'react';

import BusinessCard from "@/app/ui/components/BusinessCard";
import Section from "@/app/ui/components/Section";
import PersonalProjectList from "@/app/ui/components/PersonalProjectList";
import WorkExperienceList from "@/app/ui/components/WorkExperienceList";

export default async function Home() {
  return (
    <>
      <BusinessCard />
      <Section title='Work Experiences'>
        <Suspense fallback={<p>loading...</p>}>
          <WorkExperienceList />
        </Suspense>
      </Section>
      <Section title='Personal Projects'>
        <Suspense fallback={<p>loading...</p>}>
          <PersonalProjectList />
        </Suspense>
      </Section>
    </>
  );
}
