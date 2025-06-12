# Content Management Guide

This document explains how to easily update and manage content for the research portfolio website.

## Content Architecture

The website now uses a **modular, data-driven architecture** that separates content from presentation. This makes it extremely easy to update information without touching the code.

## Key Files for Content Updates

### 1. Main Content Database: `src/data/content.ts`
This is the **primary file** you'll edit to update website content. It contains:

- **Personal Information** - Name, title, description, contact info
- **Education** - All educational background
- **Experience** - Professional work history
- **Skills** - Technical skills organized by category
- **Publications** - Research papers and publications
- **Research Projects** - Detailed project information
- **Research Categories** - Project categorization

### 2. Content Service: `src/services/contentService.ts`
This file provides functions to access the content. **You typically won't need to edit this.**

## How to Update Content

### Adding a New Research Project

1. Open `src/data/content.ts`
2. Find the `projects` array
3. Add a new project object:

```typescript
{
  id: 'unique-project-id',
  title: 'Your Project Title',
  slug: 'url-friendly-slug',
  category: 'existing-category-id',
  description: 'Brief description',
  detailedDescription: 'Longer description',
  objectives: ['Objective 1', 'Objective 2'],
  applications: ['Application 1', 'Application 2'],
  technologies: ['Technology 1', 'Technology 2'],
  startDate: '2024-01',
  status: 'ongoing', // 'completed', 'ongoing', or 'planned'
  images: [
    {
      url: '/websiteRJ/images/research/your-image.jpg',
      alt: 'Image description',
      caption: 'Image caption',
      type: 'hero' // 'hero', 'diagram', 'result', or 'setup'
    }
  ]
}
```

### Adding a New Publication

1. Open `src/data/content.ts`
2. Find the `publications` array
3. Add a new publication:

```typescript
{
  id: 'unique-pub-id',
  title: 'Publication Title',
  authors: ['Author 1', 'Author 2'],
  journal: 'Journal Name',
  year: 2024,
  volume: '32',
  pages: '1-10',
  doi: '10.1000/example',
  type: 'journal', // 'journal', 'conference', 'preprint', 'thesis'
  tags: ['tag1', 'tag2'],
  abstract: 'Publication abstract...'
}
```

### Updating Personal Information

1. Open `src/data/content.ts`
2. Find the `personalInfo` object
3. Update any field:

```typescript
personalInfo: {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  email: "your.email@example.com",
  // ... other fields
}
```

### Adding New Skills

1. Open `src/data/content.ts`
2. Find the `skills` array
3. Add new skills:

```typescript
{ name: 'New Skill', category: 'Existing Category', level: 4 }
```

### Adding Education

1. Open `src/data/content.ts`
2. Find the `education` array
3. Add new education entry:

```typescript
{
  degree: 'Degree Name',
  institution: 'Institution Name',
  year: '2024',
  description: 'Description',
  location: 'Location'
}
```

### Adding Work Experience

1. Open `src/data/content.ts`
2. Find the `experience` array
3. Add new experience:

```typescript
{
  title: 'Job Title',
  company: 'Company Name',
  location: 'Location',
  startDate: '2024-01',
  endDate: '2024-12', // Leave empty for current position
  description: 'Job description',
  responsibilities: ['Responsibility 1', 'Responsibility 2'],
  technologies: ['Tech 1', 'Tech 2']
}
```

## Easy Content Updates

### To Add a New Research Category:

1. Add to `categories` array in `src/data/content.ts`
2. Reference the category ID in your projects

### To Update Site Navigation:

The navigation is automatically generated from your categories and pages. No manual updates needed.

### To Add Images:

1. Place images in `public/websiteRJ/images/research/`
2. Reference them as `/websiteRJ/images/research/filename.jpg`

## Modular Components

The website uses modular components that automatically update when you change the content:

- **HeroSection** - Uses personalInfo
- **AboutSection** - Uses personalInfo, education, stats
- **TechnicalSkillsSection** - Uses skills data
- **ProfessionalExperienceSection** - Uses experience data
- **ResearchPage** - Uses projects and categories
- **PublicationsPage** - Uses publications data

## Building and Deployment

After making content changes:

1. Test locally: `npm run dev`
2. Build for production: `npm run build`
3. Deploy: `npm run deploy`

## Content Validation

The TypeScript types in `src/types/content.ts` ensure your content follows the correct structure. If you make a mistake, TypeScript will show an error.

## Best Practices

1. **Always use unique IDs** for projects and publications
2. **Use consistent date formats** (YYYY-MM or YYYY-MM-DD)
3. **Optimize images** before adding them
4. **Use descriptive slugs** for projects (used in URLs)
5. **Keep descriptions concise** but informative
6. **Tag projects and publications** appropriately for filtering

## Future Enhancements

This modular architecture makes it easy to add:
- Blog posts
- News/announcements
- Photo galleries
- Interactive project demos
- Contact forms
- Social media integration

The content management system is designed to grow with your needs while keeping updates simple and safe.
