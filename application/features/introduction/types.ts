export interface Activity {
  id: string;
  title: string;
  icon: string;
  content: string;
}
export type AvailabilityStatus = 'active' | 'passive' | 'unavailable';
export interface Profile {
  title: string;
  firstName: string;
  lastName: string;
  availability: AvailabilityStatus;
  avatar: string;
  email: string;
  birthDate: string;
  location: string;
}
export type Skill = string;
export interface SocialMediaService {
  id: string;
  label: string;
  url: string;
  handle?: string;
}