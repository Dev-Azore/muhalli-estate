export type ProjectCategory = 'Residential' | 'Commercial' | 'Plaza' | 'Redevelopment';

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  yearCompleted: string;
  durationMonths: number;
  client: string;
  scope: string;
  beforeImage: string;
  duringImage: string;
  afterImage: string;
  featured: boolean;
  summary: string;
  beforeAfterDescription: string;
  fullStory: string;
  specifications: {
    label: string;
    value: string;
  }[];
  leadEngineer: string;
}
