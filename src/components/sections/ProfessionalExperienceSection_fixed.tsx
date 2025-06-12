import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { contentService } from '../../services/contentService';

export default function ProfessionalExperienceSection() {
  const experiences = contentService.getExperience();
  const currentExperience = contentService.getCurrentExperience();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional journey in optical research, engineering, and academic collaboration
          </p>
        </div>

        {/* Current Position Highlight */}
        {currentExperience.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Current Position</h3>
            {currentExperience.map((exp, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-1">{exp.title}</h4>
                    <p className="text-blue-700 font-medium text-lg">{exp.company}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-blue-600 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    Since {formatDate(exp.startDate)}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Key Responsibilities:</h5>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-8 flex items-center">
            <Briefcase className="mr-2 text-blue-600" size={24} />
            Career Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16">
                  {/* Timeline marker */}
                  <div className="absolute left-4 top-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <Briefcase size={16} className="text-white" />
                  </div>
                  
                  {/* Experience card */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-blue-600 font-medium mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar size={14} />
                          {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2">Key Responsibilities:</h5>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          {exp.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Technologies & Tools:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Experience Summary</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {contentService.getStats().yearsOfExperience}+
              </div>
              <div className="text-sm text-gray-600">Years in Research</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {experiences.length}
              </div>
              <div className="text-sm text-gray-600">Professional Roles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {currentExperience.length > 0 ? 'Active' : 'Available'}
              </div>
              <div className="text-sm text-gray-600">Current Status</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
