// Content type definitions for the research portfolio website

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  profileImage: string;
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  orcid?: string;
  googleScholar?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year?: string;
  description: string;
  specialization?: string;
  location?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface Skill {
  name: string;
  category: string;
  level?: number; // 1-5 scale
  description?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  abstract?: string;
  type: 'journal' | 'conference' | 'preprint' | 'thesis';
  tags: string[];
  url?: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  detailedDescription?: string;
  objectives: string[];
  methodology?: string[];
  results?: string[];
  applications: string[];
  technologies: string[];
  collaborators?: string[];
  funding?: string;
  startDate: string;
  endDate?: string;
  status: 'completed' | 'ongoing' | 'planned';
  images: ProjectImage[];
  publications?: string[]; // Publication IDs
  relatedProjects?: string[]; // Project IDs
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  type: 'hero' | 'diagram' | 'result' | 'setup';
}

export interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  office?: string;
  availability?: string;
}

export interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
  baseUrl: string;
  author: PersonalInfo;
  navigation: NavigationItem[];
  socialLinks: SocialLink[];
  contact: ContactInfo;
  features: {
    showPublications: boolean;
    showResearch: boolean;
    showExperience: boolean;
    showSkills: boolean;
    showEducation: boolean;
  };
}

export interface PageContent {
  title: string;
  description: string;
  sections: PageSection[];
}

export interface PageSection {
  id: string;
  type: string;
  title?: string;
  content: any; // Generic content object
  config?: any; // Section-specific configuration
}

// Research category configuration
export interface ResearchCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
  color?: string;
  projects: string[]; // Project IDs
}

// Content management interfaces
export interface ContentDatabase {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  publications: Publication[];
  projects: ResearchProject[];
  categories: ResearchCategory[];
  pages: Record<string, PageContent>;
}
