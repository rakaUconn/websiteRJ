// Content Templates for Easy Copy-Paste
// Copy these templates and paste them into src/data/content.ts

// ========== RESEARCH PROJECT TEMPLATE ==========
/*
{
  id: 'unique-project-id',
  title: 'Project Title',
  slug: 'project-url-slug',
  category: 'category-id', // Use existing: '3d-imaging', 'polarimetric', 'computational', 'microscopy'
  description: 'Brief project description (1-2 sentences)',
  detailedDescription: 'Longer detailed description explaining the project in depth',
  objectives: [
    'Primary objective of the project',
    'Secondary objective',
    'Additional goals'
  ],
  methodology: [
    'Research method 1',
    'Research method 2',
    'Experimental approach'
  ],
  results: [
    'Key finding 1',
    'Key finding 2',
    'Important outcome'
  ],
  applications: [
    'Real-world application 1',
    'Industry use case',
    'Research application'
  ],
  technologies: ['Technology 1', 'Tool 2', 'Method 3'],
  collaborators: ['Collaborator 1', 'Institution 2'],
  funding: 'Funding source (optional)',
  startDate: '2024-01',
  endDate: '2024-12', // Optional, leave empty for ongoing
  status: 'ongoing', // 'completed', 'ongoing', 'planned'
  images: [
    {
      url: '/websiteRJ/images/research/project-hero.jpg',
      alt: 'Project hero image description',
      caption: 'Brief image caption',
      type: 'hero' // 'hero', 'diagram', 'result', 'setup'
    }
  ],
  publications: ['pub-id-1', 'pub-id-2'], // Optional, reference publication IDs
  relatedProjects: ['related-project-id'] // Optional
}
*/

// ========== PUBLICATION TEMPLATE ==========
/*
{
  id: 'unique-pub-id',
  title: 'Full Publication Title',
  authors: ['First Author', 'Second Author', 'Your Name', 'Last Author'],
  journal: 'Journal Name or Conference Proceedings',
  year: 2024,
  volume: '32', // Optional
  pages: '1234-1245', // Optional
  doi: '10.1000/example.doi', // Optional but recommended
  abstract: 'Publication abstract or summary. Provide a brief overview of the research, methodology, and key findings.',
  type: 'journal', // 'journal', 'conference', 'preprint', 'thesis'
  tags: ['keyword1', 'keyword2', 'research-area'],
  url: 'https://direct-link-to-paper.com' // Optional
}
*/

// ========== EDUCATION TEMPLATE ==========
/*
{
  degree: 'Full Degree Name (Ph.D., M.S., B.S., etc.)',
  institution: 'University or Institution Name',
  year: '2024',
  description: 'Dissertation title, focus area, or brief description',
  specialization: 'Specialization: Area of focus', // Optional
  location: 'City, State/Country'
}
*/

// ========== EXPERIENCE TEMPLATE ==========
/*
{
  title: 'Job Title',
  company: 'Company or Institution Name',
  location: 'City, State',
  startDate: '2024-01', // YYYY-MM format
  endDate: '2024-12', // Optional, leave empty for current position
  description: 'Brief description of the role and main focus',
  responsibilities: [
    'Key responsibility 1',
    'Important duty or task',
    'Major contribution or role'
  ],
  technologies: ['Tool 1', 'Software 2', 'Method 3'] // Optional
}
*/

// ========== SKILL TEMPLATE ==========
/*
{ 
  name: 'Skill Name', 
  category: 'Category', // Use existing: 'Optics', 'Programming', 'Software', 'AI/ML', 'Imaging', 'Signal Processing'
  level: 4, // 1-5 scale, optional
  description: 'Brief description of proficiency' // Optional
}
*/

// ========== RESEARCH CATEGORY TEMPLATE ==========
/*
{
  id: 'category-id',
  name: 'Category Display Name',
  description: 'Brief description of this research area',
  icon: 'IconName', // Lucide icon name: 'Microscope', 'Brain', 'Zap', 'Code'
  color: 'blue', // Color theme
  projects: ['project-id-1', 'project-id-2'] // Project IDs in this category
}
*/

// ========== QUICK UPDATE CHECKLIST ==========
/*
When adding new content:

1. ✅ Use unique IDs (no spaces, use dashes)
2. ✅ Follow date format YYYY-MM or YYYY-MM-DD
3. ✅ Add images to public/websiteRJ/images/research/
4. ✅ Reference image paths as /websiteRJ/images/research/filename.jpg
5. ✅ Use existing categories when possible
6. ✅ Keep descriptions clear and concise
7. ✅ Test the build: npm run build
8. ✅ Preview locally: npm run dev

Common Categories:
- '3d-imaging': 3D Imaging Systems
- 'polarimetric': Polarimetric Imaging  
- 'computational': Computational Imaging
- 'microscopy': Optical Microscopy

Common Skills Categories:
- 'Optics': Optical engineering skills
- 'Programming': Programming languages
- 'Software': Software tools
- 'AI/ML': Machine learning and AI
- 'Imaging': Imaging techniques
- 'Signal Processing': Signal processing methods
*/
