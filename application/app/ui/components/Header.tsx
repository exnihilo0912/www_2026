'use client'

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
  { id: 'about', label: 'About', icon: <UserCircleIcon />, path: '/about' },
  { id: 'projects', label: 'Projects', icon: <CommandLineIcon />, path: '/projects' },
  { id: 'misc', label: 'Misc.', icon: <QuestionMarkCircleIcon />, path: '/misc' },
];

export default function Header() {
  const pathname = usePathname();
  const pageRoot = pathname.split('/').filter(Boolean).at(0);
  const isActive = (path: string) => path.split('/').filter(Boolean).at(0) === pageRoot;

  return (
    <header className="z-2 flex items-center justify-between h-[64] fixed rounded-[12] bg-base shadow-basic shadow-base-shadow w-96/100 md:w-45/100 left-[\'calc(50% - 96% / 2)\'] px-4 top-2 md:top-4">
          <nav>
            <ul className="flex gap-4 md:gap-3">
              {menuItems.map(({ id, icon, path }) =>
                <li key={id} className={
                  [
                    "flex items-center justify-center size-[32] text-stone-500 rounded-full hover:text-stone-800 hover:bg-panel",
                    isActive(path) ? "text-stone-800 bg-panel": ""
                  ].join(' ')
                }>
                  <Link href={path}>
                    <div className="size-[24]">{icon}</div>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          <Status/>
    </header>
  );
}

function Status() {
  const pathname = usePathname();
  const pageRoot = pathname.split('/').filter(Boolean).at(0);

  return <div>{pageRoot}</div>
}