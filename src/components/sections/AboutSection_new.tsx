import { GraduationCap, Brain } from 'lucide-react';
import { contentService } from '../../services/contentService';

export default function AboutSection() {
  const education = contentService.getEducation();
  const personalInfo = contentService.getPersonalInfo();
  const stats = contentService.getStats();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {personalInfo.description}
          </p>
        </div>
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
              {stats.yearsOfExperience}+
            </div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
              {stats.totalProjects}
            </div>
            <div className="text-sm text-gray-600">Research Projects</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
              {stats.totalPublications}
            </div>
            <div className="text-sm text-gray-600">Publications</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
              {stats.completedProjects}
            </div>
            <div className="text-sm text-gray-600">Completed Projects</div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <GraduationCap className="mr-2 text-blue-600" size={24} />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 font-medium mb-2">
                      {edu.institution}
                      {edu.location && ` • ${edu.location}`}
                    </p>
                    {edu.specialization && (
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        {edu.specialization}
                      </p>
                    )}
                    <p className="text-gray-600">
                      {edu.description}
                    </p>
                  </div>
                  {edu.year && (
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Focus Areas */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Brain className="mr-2 text-blue-600" size={24} />
            Research Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Optical Signal Detection & Image Sensing',
              'Integral Imaging & Deep Neural Networks',
              '3D Imaging Systems & Computational Optics',
              'Polarization Imaging & Optical Microscopy',
              'High-Resolution Fiber Optic Systems',
              'Machine Learning in Optical Systems'
            ].map((focus, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">{focus}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
