import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Microscope, ExternalLink, Calendar, Users, Tag } from 'lucide-react';
import { contentService } from '../services/contentService';

export default function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const categories = contentService.getCategories();
  const allProjects = contentService.getProjects();
  const stats = contentService.getStats();

  const filteredProjects = activeCategory 
    ? contentService.getProjectsByCategory(activeCategory)
    : allProjects;

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      case 'planned': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Research Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Cutting-edge research in optical engineering, computational imaging, and advanced photonics systems
          </p>
          
          {/* Research Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{stats.totalProjects}</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-600">{stats.completedProjects}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{stats.ongoingProjects}</div>
              <div className="text-sm text-gray-600">Ongoing</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-purple-600">{stats.totalPublications}</div>
              <div className="text-sm text-gray-600">Publications</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Research Areas</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                !activeCategory 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border'
              }`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  activeCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border'
                }`}
              >
                <Microscope size={16} />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Project Image */}
              {project.images && project.images.length > 0 && (
                <img 
                  src={project.images.find(img => img.type === 'hero')?.url || project.images[0].url}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {project.startDate}
                    {project.endDate && ` - ${project.endDate}`}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                  >
                    <Microscope className="w-4 h-4 mr-1" />
                    {expandedProject === project.id ? "Hide Details" : "View Details"}
                  </button>
                  
                  {project.slug && (
                    <Link 
                      to={`/research/${project.slug}`}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Full Details
                    </Link>
                  )}
                </div>

                {/* Expanded Details */}
                {expandedProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    {project.detailedDescription && (
                      <p className="text-gray-700 mb-4">
                        {project.detailedDescription}
                      </p>
                    )}

                    {project.objectives && project.objectives.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Objectives:</h4>
                        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                          {project.objectives.map((objective, index) => (
                            <li key={index}>{objective}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.applications && project.applications.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.applications.map((app, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.relatedProjects && project.relatedProjects.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Related Projects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.relatedProjects.map((relatedId) => {
                            const relatedProject = contentService.getProjectById(relatedId);
                            return relatedProject ? (
                              <Link 
                                key={relatedId}
                                to={`/research/${relatedProject.slug}`}
                                className="text-blue-600 hover:text-blue-800 text-sm underline"
                              >
                                {relatedProject.title}
                              </Link>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Microscope className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try selecting a different category or view all projects.</p>
          </div>
        )}
      </div>
    </div>
  );
}
