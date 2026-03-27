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
  work_experience_detail?: WorkExperienceDetail;
}
export type Specialty = 'frontend' | 'backend' | 'full_stack' | 'mobile' | 'devops' | 'data_engineer';
export type CompanySize = '1' | '2-10' | '10-50' | '50-100' | '100-500' | '500-1000' | '1000-5000' | '5000-10000' | '10000+';
export interface Location {
  country: string;
  city?: string;
}
export interface WorkExperienceDetail {
  title: string;
  description: string;
  technologies?: Technology[];
  skills?: Skill[];
  challenges?: string[];
  achievements?: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
  type: SkillType;
}
type SkillCategory = 'hard' | 'soft';
type SkillType = 'leadership' | 'engineering';

export interface Technology {
  name: string;
  category: string;
  type: string;
  specialty: TechnologySpecialty;
}

interface TechnologySpecialty {
  name: string;
  parentId?: string;
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