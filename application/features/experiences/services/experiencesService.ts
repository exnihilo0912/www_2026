import  { Specialty, CompanySize, Entity, WorkExperience } from '../types';

export const specialties: { id: Specialty; label: string; }[] = [
  { id: 'frontend', label: 'Frontend Engineer' },
  { id: 'backend', label: 'Backend Engineer' },
  { id: 'full_stack', label: 'Full Stack Engineer' },
  { id: 'mobile', label: 'Mobile Developer' },
  { id: 'devops', label: 'DevOps Engineer' },
  { id: 'data_engineer', label: 'Data Engineer' },
];

export const companySizes: { id: CompanySize; label: string; }[] = [
  { id: '1', label: 'Solo Founder' },
  { id: '2-10', label: 'Micro Startup' },
  { id: '10-50', label: 'Early Stage Startup' },
  { id: '50-100', label: 'Scale-Up' },
  { id: '100-500', label: 'Mid Sized Company' },
  { id: '500-1000', label: 'Large Company' },
  { id: '1000-5000', label: 'Enterprise' },
  { id: '5000-10000', label: 'Large Enterprise' },
  { id: '10000+', label: 'Multinational Corporation' },
];

export const entities: Entity[] = [
  {
    id: 'tridge',
    name: 'Tridge',
    url: 'https://www.tridge.com',
    industry: 'AgroTech',
    size: '100-500',
    project_types: ['B2B SaaS', 'Back Office'],
  },
  {
    id: 'custeed',
    name: 'Custeed',
    url: 'https://www.custeed.com',
    industry: 'AutoTech',
    size: '10-50',
    project_types: ['B2B SaaS', 'Back Office'],
  },
  {
    id: 'nexity',
    name: 'Nexity',
    url: 'https://www.nexity.fr',
    industry: 'Real Estate',
    size: '1000-5000',
    project_types: ['Front Office'],
  },
];

export const workExperiences: WorkExperience[] = [
  {
    id: 'two',
    entity_id: entities[1].id,
    title: 'Data Engineer',
    contract_type: 'permanent_contract',
    location: { city: 'seoul', country: 'KR' },
    work_from: 'on_site',
    start_date: '2025-08-04',
    end_date: '2025-12-12',
    skills: ['JavaScript', 'TypeScript', 'React', 'Meteor'],
    description: 'blabla',
    individual_contributor_seniority: 'mid_level',
    specialties: ['data_engineer', 'full_stack'],
  },
  {
    id: 'three',
    entity_id: entities[2].id,
    title: 'Frontend Developer',
    contract_type: 'permanent_contract',
    location: { city: 'paris', country: 'FR' },
    work_from: 'remote',
    start_date: '2025-08-04',
    end_date: '2025-12-12',
    skills: ['JavaScript', 'TypeScript', 'React', 'Meteor'],
    description: 'blabla',
    individual_contributor_seniority: 'mid_level',
    specialties: ['frontend'],
  },
  {
    id: 'four',
    entity_id: entities[1].id,
    title: 'Frontend Developer',
    contract_type: 'permanent_contract',
    location: { city: 'seoul', country: 'KR' },
    work_from: 'on_site',
    start_date: '2025-08-04',
    end_date: '2025-12-12',
    skills: ['JavaScript', 'TypeScript', 'React', 'Meteor'],
    description: 'blabla',
    individual_contributor_seniority: 'mid_level',
    specialties: ['frontend'],
  },
];

// TODO Replace by API call
export async function fetchWorkExperiences(): Promise<WorkExperience[]> {
  return workExperiences;
}

export async function fetchEntities(): Promise<Entity[]> {
  return entities;
}
