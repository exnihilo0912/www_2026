import List from "@/app/ui/components/List";
import Link from "next/link";


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

export default function Footer() {
  return (
    <footer className="w-full min-h-48 p-3 bg-panel rounded-[12] border border-panel">
      <div className="font-semibold uppercase">sns</div>
      <List items={socialMedias}>
        {(item) => {
          const { id, label, url, handle } = item as unknown as SocialMedia;
          return (
            <li key={id}>
              <Link href={url} target="_blank" className="flex flex-col gap-1">
                {handle && <span>@{handle}</span>}
                <span className="text-sm uppercase text-stone-500 font-medium tracking-wider">{label}</span>
              </Link>
            </li>
          )
        }}
      </List>
    </footer>
  );
}