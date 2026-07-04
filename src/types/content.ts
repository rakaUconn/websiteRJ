// Content type definitions — "The Journal" portfolio

export interface Project {
  id: string;
  title: string;
  category: string;
  status: 'current' | 'past' | 'future';
  period: string;
  authors: string;
  institution?: string;
  summary: string;
  approach?: string;
  results?: string;
  applications: { name: string; desc: string }[];
  tech: string[];
  pubNote: string;
  fig1Caption: string;
  fig2Caption: string;
  fig3Caption?: string;
  fig4Caption?: string;
  fig1Src?: string;
  fig2Src?: string;
  fig3Src?: string;
  fig4Src?: string;
  hasCaseStudy: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  location: string;
  detail?: string;
}

export interface Experience {
  title: string;
  org: string;
  location: string;
  dates: string;
  points: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  pages: string;
  tags: string[];
}

export interface Patent {
  title: string;
  status: 'Applied' | 'Granted';
  applicationNo: string;
  date: string;
  inventors: string;
}

export interface BlogPost {
  date: string;
  title: string;
  blurb: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  orcid: string;
  googleScholar: string;
  eyebrow: string;
  stats: { label: string; value: string }[];
}

export interface SiteData {
  personalInfo: PersonalInfo;
  projects: Project[];
  education: Education[];
  experience: Experience[];
  publications: Publication[];
  patents: Patent[];
  blogPosts: BlogPost[];
}
