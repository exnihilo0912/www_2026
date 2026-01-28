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
  // TODO add url-base logic
  const pathname = usePathname();
  const segments = pathname.split('/');
  // if segments.length > 1, not root => shrink header

  return (
    <header className="flex items-center justify-between h-[64] fixed w-96/100 md:w-45/100 rounded-[12] top-[8] md:top-[16] left-['calc(50% - 96% / 2)'] pl-[16] pr-[16] bg-base shadow-basic shadow-base-shadow">
      <nav>
        <ul className="flex gap-6 md:gap-3">
          {menuItems.map(({ id, icon, path }) => 
            <li key={id} className="flex items-center justify-center size-[32] text-stone-500 hover:text-stone-800 hover:bg-panel hover:rounded-full">
              <Link href={path}>
                <div className="size-[24]">{icon}</div>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div>{pathname}</div>
    </header>
  );
}

// Simplified breadcrumbs logic
function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/')

  return (
    <nav>
      {segments.map((segment, index) => (
        <span key={index}>
          {' > '}
          {segment}
        </span>
      ))}
    </nav>
  )
}