import { Suspense } from 'react';

import Link from 'next/link';

import BusinessCard from "@/app/ui/components/BusinessCard";
import List from '@/app/ui/components/List';
import PersonalProjectList from "@/app/ui/components/PersonalProjectList";
import Section from "@/app/ui/components/Section";
import WorkExperienceList from "@/app/ui/components/WorkExperienceList";

interface SocialMedia {
  id: string;
  label: string;
  url: string;
  handle?: string;
}
const socialMedias: SocialMedia[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/exnihilo0912',
    handle: 'exnihilo0912',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adam-emmanuel-118281102/',
    handle: 'adam-emmanuel-118281102',
  },
];

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
      <Section title='SNS'>
        <List items={socialMedias}>
          {(item) => {
            const { label, url, handle } = item as unknown as SocialMedia;
            return (
              <Link href={url} target="_blank" className="flex flex-col gap-1">
                {handle && <span>@{handle}</span>}
                <span className="text-sm uppercase text-stone-500 tracking-wider">{label}</span>
              </Link>
            )
          }}
        </List>
      </Section>
    </>
  );
}
