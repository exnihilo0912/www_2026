import type { Entity, PersonalProject, WorkExperience } from './placeholder_data/index';

import  { entities, personalProjects, workExperiences } from './placeholder_data/index';

export async function fetchWorkExperiences(): Promise<WorkExperience[]> {
  return workExperiences;
}

export async function fetchEntities(): Promise<Entity[]> {
  return entities;
}

export async function fetchPersonalProjects(): Promise<PersonalProject[]> {
  return personalProjects;
}