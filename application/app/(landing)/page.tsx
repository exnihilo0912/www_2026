import Link from 'next/link';

import { BusinessCard,fetchContactChannels } from "@/features/myself";
import List from '@/components/ui/List';
import Section from "@/components/ui/Section";



export default async function Home() {
  const contactChannels = await fetchContactChannels();
  return (
    <>
      <BusinessCard />
      <Section title='SNS'>
        <List items={contactChannels}>
          {(item) => {
            const { label, url, handle } = item;
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
