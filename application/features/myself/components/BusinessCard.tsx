'use client';

import { useState } from "react";

import Avatar from "@/components/ui/Avatar";
import Tag from "@/components/ui/Tag";

// TODO Add to myselfService/fetcher
const presentation = {
  title: 'Fullstack TS/React',
  fullname: 'Adam Emmanuel',
  status: 'available',
  skills: ['html/css', 'js', 'ts', 'react', 'node', 'next.js', 'tailwind'],
  avatar: '/images/avatar.webp',
};

export default function BusinessCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { title, fullname, status, skills, avatar } = presentation;
  function toggleIsOpen() {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  }
  const businessCardClasses = 'relative flex flex-col items-center md:max-h-full overflow-hidden w-full md:w-auto p-4 md:p-5 gap-4 md:gap-6 shadow-basic shadow-base-shadow rounded-2xl bg-white shrink-0 border border-stone-200';
  const foldedBusinessCardClasses = isOpen ? 'max-h-[90]' : 'max-h-full';
  return (
    <div className={[businessCardClasses, foldedBusinessCardClasses].join(' ')}>
      <div className="flex md:flex-col md:items-center gap-4 md:gap-2 w-full">
        <Avatar src={avatar} />
        <div className="flex flex-col md:items-center gap-1">
          <span className="text-xl md:text-2xl font-semibold">{fullname}</span>
          <span className="text-sm">{title}</span>
        </div>
      </div>
      <button className="absolute top-0 right-0 size-8 bg-stone-100 border border-stone-200 md:hidden p-2" onClick={toggleIsOpen}>
      </button>
      <ul className="p-0 m-0 w-full md:flex md:flex-col md:gap-4">
        <li>
          <div className="flex gap-2 items-center">
            <div className="size-7 bg-stone-200 rounded"></div>
            <div>
              <div className="uppercase font-semibold text-sm text-stone-500 tracking-">email</div>
              <div className="text-sm">adam.emmanuel.pro@gmail.com</div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex gap-2 items-center">
            <div className="size-7 bg-stone-200 rounded"></div>
            <div>
              <div className="uppercase font-semibold text-sm text-stone-500 tracking-">birthday</div>
              <div className="text-sm">August 9th, 1992</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export { BusinessCard };