'use client'

import {
  AcademicCapIcon,
  CommandLineIcon,
  HomeIcon,
  PaperAirplaneIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function Status() {
  // TODO add url-base logic
  const pathname = usePathname();
  const isLanding = !pathname.split('/').filter(Boolean).length;

  return <div>status</div>
}

const menuItems = [
  { id: 'home', label: 'Home', icon: <HomeIcon />, path: '/' },
  { id: 'resume', label: 'Resume', icon: <AcademicCapIcon />, path: '/resume' },
  { id: 'about', label: 'About', icon: <UserCircleIcon />, path: '/about' },
  { id: 'projects', label: 'Projects', icon: <CommandLineIcon />, path: '/projects' },
  { id: 'misc', label: 'Misc.', icon: <QuestionMarkCircleIcon />, path: '/misc' },
  // { id: 'contact', label: 'contact', icon: <PaperAirplaneIcon />, path: '/#contact' },
];
export default function Header() {
  const pathname = usePathname();
  const isLanding = !pathname.split('/').filter(Boolean).length;
  const headerWidth = isLanding ? 'w-96/100 md:w-45/100 left-[\'calc(50% - 96% / 2)\'] px-4 top-[8] md:top-[16]' : 'size-[60] overflow-hidden right-2 px-2 bottom-2 md-bottom-4'
  // TODO add open/close status
  return (
    <header className={["z-2 flex items-center justify-between h-[64] fixed rounded-[12] bg-base shadow-basic shadow-base-shadow", headerWidth].join(' ')}>
      {isLanding ? (
        <>
          <nav>
            <ul className="flex gap-4 md:gap-3">
              {menuItems.map(({ id, icon, path }) =>
                <li key={id} className="flex items-center justify-center size-[32] text-stone-500 hover:text-stone-800 hover:bg-panel hover:rounded-full">
                  <Link href={path}>
                    <div className="size-[24]">{icon}</div>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          {isLanding && <Status/>}
        </>
      )
      : (<span className='grow text-center'>o</span>)
      }
    </header>
  );
}