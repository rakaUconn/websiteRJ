import { contentDatabase } from '../data/content';
import { 
  PersonalInfo, 
  Education, 
  Experience, 
  Skill, 
  Publication, 
  ResearchProject, 
  ResearchCategory,
  PageContent,
  ContactInfo 
} from '../types/content';

/**
 * Content Management Service
 * Provides centralized access to all website content
 * Makes it easy to fetch and update content from a single source
 */
class ContentService {
  // Personal Information
  getPersonalInfo(): PersonalInfo {
    return contentDatabase.personalInfo;
  }

  // Education
  getEducation(): Education[] {
    return contentDatabase.education;
  }

  getEducationById(index: number): Education | undefined {
    return contentDatabase.education[index];
  }

  // Experience
  getExperience(): Experience[] {
    return contentDatabase.experience;
  }

  getCurrentExperience(): Experience[] {
    return contentDatabase.experience.filter(exp => !exp.endDate);
  }

  // Skills
  getSkills(): Skill[] {
    return contentDatabase.skills;
  }

  getSkillsByCategory(category: string): Skill[] {
    return contentDatabase.skills.filter(skill => skill.category === category);
  }

  getSkillCategories(): string[] {
    const categories = contentDatabase.skills.map(skill => skill.category);
    return [...new Set(categories)];
  }

  // Publications
  getPublications(): Publication[] {
    return contentDatabase.publications.sort((a, b) => b.year - a.year);
  }

  getPublicationById(id: string): Publication | undefined {
    return contentDatabase.publications.find(pub => pub.id === id);
  }

  getPublicationsByType(type: string): Publication[] {
    return contentDatabase.publications.filter(pub => pub.type === type);
  }

  getPublicationsByYear(year: number): Publication[] {
    return contentDatabase.publications.filter(pub => pub.year === year);
  }

  getPublicationsByTag(tag: string): Publication[] {
    return contentDatabase.publications.filter(pub => pub.tags.includes(tag));
  }

  // Research Projects
  getProjects(): ResearchProject[] {
    return contentDatabase.projects;
  }

  getProjectById(id: string): ResearchProject | undefined {
    return contentDatabase.projects.find(project => project.id === id);
  }

  getProjectBySlug(slug: string): ResearchProject | undefined {
    return contentDatabase.projects.find(project => project.slug === slug);
  }

  getProjectsByCategory(categoryId: string): ResearchProject[] {
    return contentDatabase.projects.filter(project => project.category === categoryId);
  }

  getProjectsByStatus(status: string): ResearchProject[] {
    return contentDatabase.projects.filter(project => project.status === status);
  }

  getRelatedProjects(projectId: string): ResearchProject[] {
    const project = this.getProjectById(projectId);
    if (!project || !project.relatedProjects) return [];
    
    return project.relatedProjects
      .map(id => this.getProjectById(id))
      .filter(p => p !== undefined) as ResearchProject[];
  }

  // Research Categories
  getCategories(): ResearchCategory[] {
    return contentDatabase.categories;
  }

  getCategoryById(id: string): ResearchCategory | undefined {
    return contentDatabase.categories.find(cat => cat.id === id);
  }

  getProjectsInCategory(categoryId: string): ResearchProject[] {
    const category = this.getCategoryById(categoryId);
    if (!category) return [];
    
    return category.projects
      .map(id => this.getProjectById(id))
      .filter(p => p !== undefined) as ResearchProject[];
  }

  // Pages
  getPageContent(pageId: string): PageContent | undefined {
    return contentDatabase.pages[pageId];
  }

  // Contact Information
  getContactInfo(): ContactInfo {
    const personal = this.getPersonalInfo();
    return {
      email: personal.email,
      phone: personal.phone,
      address: personal.location
    };
  }

  // Search functionality
  searchProjects(query: string): ResearchProject[] {
    const lowercaseQuery = query.toLowerCase();
    return contentDatabase.projects.filter(project => 
      project.title.toLowerCase().includes(lowercaseQuery) ||
      project.description.toLowerCase().includes(lowercaseQuery) ||
      project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery)) ||
      project.applications.some(app => app.toLowerCase().includes(lowercaseQuery))
    );
  }

  searchPublications(query: string): Publication[] {
    const lowercaseQuery = query.toLowerCase();
    return contentDatabase.publications.filter(pub => 
      pub.title.toLowerCase().includes(lowercaseQuery) ||
      pub.authors.some(author => author.toLowerCase().includes(lowercaseQuery)) ||
      pub.journal.toLowerCase().includes(lowercaseQuery) ||
      pub.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  // Statistics
  getStats() {
    return {
      totalProjects: contentDatabase.projects.length,
      completedProjects: contentDatabase.projects.filter(p => p.status === 'completed').length,
      ongoingProjects: contentDatabase.projects.filter(p => p.status === 'ongoing').length,
      totalPublications: contentDatabase.publications.length,
      totalSkills: contentDatabase.skills.length,
      yearsOfExperience: this.calculateYearsOfExperience()
    };
  }

  private calculateYearsOfExperience(): number {
    if (contentDatabase.experience.length === 0) return 0;
    
    const earliestStart = contentDatabase.experience
      .map(exp => new Date(exp.startDate))
      .sort((a, b) => a.getTime() - b.getTime())[0];
    
    const now = new Date();
    return Math.floor((now.getTime() - earliestStart.getTime()) / (1000 * 60 * 60 * 24 * 365));
  }
}

// Export singleton instance
export const contentService = new ContentService();

// Export individual getter functions for convenience
export const {
  getPersonalInfo,
  getEducation,
  getExperience,
  getSkills,
  getSkillsByCategory,
  getSkillCategories,
  getPublications,
  getPublicationById,
  getProjects,
  getProjectById,
  getProjectBySlug,
  getProjectsByCategory,
  getCategories,
  getCategoryById,
  getPageContent,
  getContactInfo,
  searchProjects,
  searchPublications,
  getStats
} = contentService;
