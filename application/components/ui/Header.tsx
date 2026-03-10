'use client';

import {
  AcademicCapIcon,
  CommandLineIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { id: 'home', label: 'Home', icon: <HomeIcon />, path: '/' },
  { id: 'resume', label: 'Resume', icon: <AcademicCapIcon />, path: '/resume' },
  { id: 'projects', label: 'Projects', icon: <CommandLineIcon />, path: '/projects' },
  { id: 'misc', label: 'Misc.', icon: <QuestionMarkCircleIcon />, path: '/other' },
];

export default function Header() {
  const pathname= usePathname();
  const pageRoot = pathname.split('/').filter(Boolean).at(0);
  const isActive = (path: string) => path.split('/').filter(Boolean).at(0) === pageRoot;

  return (
    <header className="fixed md:absolute z-2 flex items-center justify-between bg-stone-50/75 h-[64] md:h-[48] rounded-[12] w-full md:w-fit px-4 md:px-8 bottom-0 left-0 md:top-0 md:right-0 md:left-auto border border-stone-200 md:border-t-0 md:border-r-0 md:rounded-tl-none md:rounded-br-none backdrop-blur-md">
          <nav>
            <ul className="flex gap-4 md:gap-3">
              {menuItems.map(({ id, icon, label, path }) =>
                <li key={id} className={
                  [
                    "flex items-center justify-center font-semibold text-stone-500 rounded hover:text-stone-800 px-2 py-1",
                    isActive(path) ? "text-stone-800": ""
                  ].join(' ')
                }>
                  <Link href={path}>
                    <div>{label}</div>
                    {/* <div className="size-[24]">{icon}</div> */}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
    </header>
  );
}