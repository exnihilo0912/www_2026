export interface WorkExperience {
  id: string;
  entity_id: string;
  title: string;
  contract_type: ContractType;
  location: Location;
  work_from: WorkLocation;
  individual_contributor_seniority: IndividualContributorSeniority;
  management_seniority?: ManagementSeniority;
  start_date: string;
  end_date?: string;
  skills: string[]; // TODO replace with "skill" type (name, type [library, language, software, framework, concept, ...])
  description: string; // TODO replace with "tasks/missions" type
}
export interface Entity {
  id: string;
  name: string;
  url: string;
  logo?: string;
}
export interface Location {
  country: string;
  city?: string;
}
export type ContractType = 'internship' | 'temporary_contract' | 'permanent_contract' | 'freelance';
export type WorkLocation = 'remote' | 'on_site' | 'hybrid';
export type IndividualContributorSeniority = 'intern' | 'junior' | 'mid_level' | 'senior' | 'staff' | 'senior_staff' | 'principal';
export type ManagementSeniority = 'manager' | 'senior_manager' | 'director' | 'senior_director' | 'vp' | 'cto';

export const entities: Entity[] = [
  {
    id: 'lemlist',
    name: 'Lemlist',
    url: 'https://www.lemlist.com',
  },
  {
    id: 'tridge',
    name: 'Tridge',
    url: 'https://www.tridge.com',
  },
  {
    id: 'custeed',
    name: 'Custeed',
    url: 'https://www.custeed.com',
  },
  {
    id: 'nexity',
    name: 'Nexity',
    url: 'https://www.nexity.fr',
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
  },
];

export interface PersonalProject {
  id: string;
  name: string;
  github_url: string;
  url?: string;
}
export const personalProjects: PersonalProject[] = [];