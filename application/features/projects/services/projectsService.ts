import  { PersonalProject } from '../types';

export const personalProjects: PersonalProject[] = [];

export async function fetchPersonalProjects(): Promise<PersonalProject[]> {
  return personalProjects;
}