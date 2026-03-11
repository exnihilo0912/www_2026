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
      type: 'code',
      url: 'https://github.com/exnihilo0912',
      handle: 'exnihilo0912',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      type: 'cv',
      url: 'https://www.linkedin.com/in/adam-emmanuel-118281102/',
      handle: 'adam-emmanuel-118281102',
    },
  ];
}


export async function fetchActivities(): Promise<Activity[]> {
  return [
    {
      id: 'web-dev-frontend',
      icon: 'window',
      title: 'Frontend Web development',
      content: 'Development of High-quality website at the professional level, with special care for UI/UX.',
    },
    {
      id: 'web-dev-backend',
      icon: 'code',
      title: 'Backend Web development',
      content: 'Development of robust and efficient backends and APIs.',
    },
    {
      id: 'data-engineering',
      icon: 'globe-alt',
      title: 'Web crawling',
      content: 'Crawling & cleansing data from sources of various type, size and scale.',
    },
    {
      id: 'dev-teaching',
      icon: 'academic-cap',
      title: 'Teaching & Mentoring',
      content: 'Experiences as Teaching Assistant and Academic Advisor, but also mentoring junior in different specialties.',
    }
  ];
}