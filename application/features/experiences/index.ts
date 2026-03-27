// TODO Remove barrel files, not great for tree shacking
export type { Entity, WorkExperience } from './types';
export { fetchEntities, fetchWorkExperiences }  from "./services/experiencesService";