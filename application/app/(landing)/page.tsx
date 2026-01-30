import { Suspense } from 'react';

import IntroCard from "@/app/ui/components/IntroCard";
import Section from "@/app/ui/components/Section";
import WorkExperienceList from "@/app/ui/components/WorkExperienceList";

export default async function Home() {
  return (
    <>
    <IntroCard />
    <Section title='Work Experiences'>
      <Suspense fallback={<p>loading...</p>}>
        <WorkExperienceList />
      </Suspense>
    </Section>
    <Section title='Projects'>
      <div>project list...</div>
    </Section>
    <Section title='Skills'>
      <div>skill list...</div>
    </Section>
    </>
  );
}
