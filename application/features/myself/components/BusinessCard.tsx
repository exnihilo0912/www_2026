'use client';

import { useState } from "react";

import Avatar from "@/components/ui/Avatar";
import Tag from "@/components/ui/Tag";
import Link from "next/link";

// TODO Add to myselfService/fetcher
const presentation = {
  title: 'Fullstack TS/React',
  fullname: 'Adam Emmanuel',
  status: 'available',
  skills: ['html/css', 'js', 'ts', 'react', 'node', 'next.js', 'tailwind'],
  avatar: '/images/avatar.webp',
  infoList: [
    { id: 'email', label: 'email', value: 'adam.emmanuel.pro@gmail.com' },
    { id: 'dob', label: 'birthday', value: 'August 9th, 1992' }, //TODO replace with iso & toLocalDate
    { id: 'location', label: 'location', value: 'Etampes (91), France' },
  ],
  sns: [
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
  ]
};

export default function BusinessCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { title, fullname, status, skills, avatar } = presentation;
  function toggleIsOpen() {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  }
  const businessCardClasses = 'relative md:sticky md:top-15 flex flex-col items-center md:max-h-full overflow-hidden w-full md:w-auto p-5 md:p-5 gap-4 md:gap-6 shadow-basic shadow-base-shadow rounded-2xl bg-white shrink-0 border border-stone-200 transition-all duration-500';
  const foldedBusinessCardClasses = isOpen ? 'max-h-[500]' : 'max-h-[98]';

  return (
    <div className={[businessCardClasses, foldedBusinessCardClasses].join(' ')}>
      <button className="absolute top-0 right-0 size-8 rounded-bl-xl bg-stone-100 border-l border-b border-stone-200 md:hidden p-2" onClick={toggleIsOpen}>
      </button>
      <div className="flex md:flex-col md:items-center gap-4 md:gap-2 w-full">
        <Avatar src={avatar} />
        <div className="flex flex-col md:items-center gap-1 md:gap-2">
          <span className="text-lg md:text-2xl font-semibold">{fullname}</span>
          <Tag>{title}</Tag>
        </div>
      </div>
      <ul className="flex flex-col gap-2 md:gap-4 w-full border-t border-stone-400 pt-4 md:pt-8">
        {presentation.infoList.map((info) => (
          <li key={info.id}>
            <div className="flex gap-2 md:gap-4 items-center">
              <div className="size-7 md:size-9 bg-stone-200 rounded"></div>
              <div className="flex flex-col">
                <div className="uppercase text-xs text-stone-500">{info.label}</div>
                <div className="text-sm">{info.value}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-2 md:gap-4 w-full border-t border-stone-400 pt-4 md:pt-8">
        {presentation.sns.map((sns) => (
          <li key={sns.id}>
            <div className="flex gap-2 md:gap-4 items-center">
              <div className="size-7 md:size-9 bg-stone-200 rounded"></div>
              <Link href={sns.url} target="_blank">
                <div className="flex flex-col">
                  <div className="uppercase text-xs text-stone-500">{sns.label}</div>
                  <div className="text-sm">{sns.handle}</div>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { BusinessCard };