import type { Entity, WorkExperience } from './placeholder_data/index';

import  { entities, workExperiences } from './placeholder_data/index';

export async function fetchWorkExperiences(): Promise<WorkExperience[]> {
  return workExperiences;
}

export async function fetchEntities(): Promise<Entity[]> {
  return entities;
}