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
  description: string; // global description
  product?: Product;
  work_experience_details?: WorkExperienceDetail[]; // detail breakdown (different role/ horizontal tasks)
}
export type Specialty = 'frontend' | 'backend' | 'full_stack' | 'mobile' | 'devops' | 'data_engineer';
export type CompanySize = '1' | '2-10' | '10-50' | '50-100' | '100-500' | '500-1000' | '1000-5000' | '5000-10000' | '10000+';
export interface Location {
  country: string;
  city?: string;
}
export interface WorkExperienceDetail {
  id: string;
  title: string;
  description: string;
  technologies?: Technology[];
  skills?: Skill[];
  challenges?: string[];
  achievements?: string[];
  product?: Product;
}

export interface Product {
  id: string;
  name: string;
  types: ProductType[];
  product_specifications: ProductSpec;
}
export type ProductType = 'SaaS' | 'SaaS B2B' | 'SaaS B2C'; // TODO complete the list

export interface ProductSpec {
  id: string;
  infrastructure: InfrastructureType;
  app_model: ApplicationModelType;
  rendering_strategy: RenderingStrategyType;
  frontend_architecture: FrontendArchitectureType;
  backend_architecture: BackendArchitectureType;
  state_management: StateManagementType;
  ui_pattern: UIPatternType;
  api_type: APIType;
}
type InfrastructureType = 'monolith' | 'micro-services'; // TODO finish list
type ApplicationModelType = 'SPA' | 'MPA';
type RenderingStrategyType = 'CSR' | 'SSR' | 'SSG' | 'ISR' | 'SSR - hybrid';
type UIPatternType = 'MVC' | 'Flux-Redux' | 'MVVM' | 'VIPER'; // TODO finish list
type FrontendArchitectureType = 'feature-based' | 'type-base' | 'feature-sliced' | 'page-based'; // TODO finish list
type BackendArchitectureType = 'hexagonal' | 'layered'; // TODO finish list
type StateManagementType = ''; // TODO
type APIType = 'REST' | 'GraphQL' | 'SOAP' | 'gRPC'; // TODO

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