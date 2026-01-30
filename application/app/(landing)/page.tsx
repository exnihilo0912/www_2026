import { Suspense } from 'react';

import IntroCard from "@/app/ui/components/IntroCard";
import WorkExperienceList from "@/app/ui/components/WorkExperienceList";

export default async function Home() {
  return (
    <>
    <IntroCard />
    <div className="w-full bg-panel rounded-[12] border border-panel p-3">
      <div className="font-semibold">Work Experiences</div>
      {/* Replace this with a proper skeleton */}
      <Suspense fallback={<p>loading...</p>}>
        <WorkExperienceList />
      </Suspense>
    </div>
    <div className="w-full h-48 bg-panel rounded-[12] border border-panel p-3">
      Projects
      <div>project list...</div>
    </div>
    <div className="w-full h-48 bg-panel rounded-[12] border border-panel p-3">
      Skills
      <div>skill list...</div>
    </div>
    </>
  );
}
