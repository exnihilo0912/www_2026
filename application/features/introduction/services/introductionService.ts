import type { Activity, Profile, SocialMediaService, Skill } from '../types';

export async function fetchProfile(): Promise<Profile> {
  return {
    title: 'Fullstack TS/React',
    firstName: 'Adam',
    lastName: 'Emmanuel',
    availability: 'active',
    avatar: '/images/avatar.webp',
    email: 'adam.emmanuel.pro@gmail.com',
    birthDate: '1992-08-09',
    location: 'Etampes (91), France', // TODO update with proper address data
  };
}

export async function fetchSkills(): Promise<Skill[]> {
  return ['html/css', 'js', 'ts', 'react', 'node', 'next.js', 'tailwind'];
}

export async function fetchSocialMediaServices(): Promise<SocialMediaService[]> {
  return [
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
}


export async function fetchActivities(): Promise<Activity[]> {
  return [
    {
      id: 'web-dev-frontend',
      icon: 'paint',
      title: 'Frontend Web development',
      content: 'High-quality development of sites at the professional level.',
    },
    {
      id: 'web-dev-backend',
      icon: 'website',
      title: 'Backend Web development',
      content: 'High-quality development of sites at the professional level.',
    },
    {
      id: 'data-engineering',
      icon: 'spider',
      title: 'Web crawling',
      content: 'High-quality development of sites at the professional level.',
    },
    {
      id: 'dev-teaching',
      icon: 'code',
      title: 'Teaching & Mentoring',
      content: 'High-quality development of sites at the professional level.',
    }
  ];
}