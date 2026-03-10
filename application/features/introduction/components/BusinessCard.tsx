'use client';

import {
  EnvelopeIcon,
  CakeIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  CommandLineIcon,
  BuildingOfficeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { useState } from "react";
import Link from "next/link";

import Avatar from "@/components/ui/Avatar";
import Tag from "@/components/ui/Tag";
import type { Profile, SocialMediaService } from "@/features/introduction/index";

interface BusinessCardProps {
  profile: Profile;
  snsList: SocialMediaService[];
}
export default function BusinessCard({ profile, snsList }: BusinessCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    title,
    firstName,
    lastName,
    availability, // TODO Add
    avatar,
    email,
    birthDate,
    location,
  } = profile;

  const infoList = [
    { id: 'email', label: 'Email', icon: EnvelopeIcon, value: email },
    { id: 'location', label: 'Location', icon: MapPinIcon, value: location },
    { id: 'dob', label: 'Date of Birth', icon: CakeIcon, value: birthDate },
  ];
  function toggleIsOpen() {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  }
  const businessCardClasses = 'relative md:sticky md:top-15 flex flex-col items-center md:max-h-full overflow-hidden w-full md:w-auto p-5 md:p-5 gap-4 md:gap-6 shadow-basic shadow-base-shadow rounded-2xl bg-white shrink-0 border border-stone-200 transition-all duration-500';
  const foldedBusinessCardClasses = isOpen ? 'max-h-[500]' : 'max-h-[98]';
  const iconByIconName: Record<string,React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
  } & React.RefAttributes<SVGSVGElement>>> = {
    'code': CommandLineIcon,
    'cv': BuildingOfficeIcon,
  };

  return (
    <div className={[businessCardClasses, foldedBusinessCardClasses].join(' ')}>
      <button className="absolute top-0 right-0 size-8 rounded-bl-xl bg-stone-100 border-l border-b border-stone-200 md:hidden p-2" onClick={toggleIsOpen}>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      <div className="flex md:flex-col md:items-center gap-4 md:gap-2 w-full">
        <Avatar src={avatar} />
        <div className="flex flex-col md:items-center gap-1 md:gap-2">
          <span className="text-lg md:text-2xl font-semibold">{firstName} {lastName}</span>
          <Tag>{title}</Tag>
        </div>
      </div>
      <ul className="flex flex-col gap-2 md:gap-4 w-full border-t border-stone-400 pt-4 md:pt-8">
        {infoList.map((info) => {
          // TODO refactor icon to be IconBox + handle value to icon better
          const Icon = info.icon || QuestionMarkCircleIcon;
          return (
            <li key={info.id}>
              <div className="flex gap-2 md:gap-4 items-center">
                <div className='flex items-center justify-center size-7 md:size-9 border border-stone-200/60 rounded-lg shadow-sm shadow-stone-200/50'>
                  <Icon className='size-5 md:size-7 text-stone-300' />
                </div>
                <div className="flex flex-col">
                  <div className="uppercase text-xs text-stone-500">{info.label}</div>
                  <div className="text-sm">{info.value}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col gap-2 md:gap-4 w-full border-t border-stone-400 pt-4 md:pt-8">
        {snsList.map((sns) => {
          const Icon = iconByIconName[sns.type] || QuestionMarkCircleIcon;
          return (
            <li key={sns.id}>
              <div className="flex gap-2 md:gap-4 items-center">
                <div className='flex items-center justify-center size-7 md:size-9 border border-stone-200/60 rounded-lg shadow-sm shadow-stone-200/50'>
                  <Icon className='size-5 md:size-7 text-stone-300' />
                </div>
                <Link href={sns.url} target="_blank">
                  <div className="flex flex-col">
                    <div className="uppercase text-xs text-stone-500">{sns.label}</div>
                    <div className="text-sm">{sns.handle}</div>
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { BusinessCard };