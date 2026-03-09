import type { ContactChannel } from '../types';

export async function fetchContactChannels(): Promise<ContactChannel[]> {
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