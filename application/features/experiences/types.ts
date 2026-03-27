export type ContractType = 'internship' | 'temporary_contract' | 'permanent_contract' | 'freelance';
export type WorkLocation = 'remote' | 'on_site' | 'hybrid';
export type IndividualContributorSeniority = 'intern' | 'junior' | 'mid_level' | 'senior' | 'staff' | 'senior_staff' | 'principal';
export type ManagementSeniority = 'manager' | 'senior_manager' | 'director' | 'senior_director' | 'vp' | 'cto';
export interface WorkExperience {
  id: string;
  entity: Entity;
  title: string;
  contract_type: ContractType;
  location: Location;
  work_from: WorkLocation;
  individual_contributor_seniority: IndividualContributorSeniority;
  management_seniority?: ManagementSeniority;
  specialties?: Specialty[];
  start_date: string;
  end_date?: string;
  skills: string[]; // TODO replace with "skill" type (name, type [library, language, software, framework, concept, ...])
  description: string; // TODO replace with "tasks/missions" type
  challenges?: string[]; // Notable challenges I faced and overcame
  outcomes?: string[]; // What did I learn from this experience
}
export type Specialty = 'frontend' | 'backend' | 'full_stack' | 'mobile' | 'devops' | 'data_engineer';
export type CompanySize = '1' | '2-10' | '10-50' | '50-100' | '100-500' | '500-1000' | '1000-5000' | '5000-10000' | '10000+';
export interface Location {
  country: string;
  city?: string;
}
export interface Entity {
  id: string;
  name: string;
  url: string;
  logo?: string;
  industry?: string;
  size?: CompanySize;
  project_types?: string[];
}