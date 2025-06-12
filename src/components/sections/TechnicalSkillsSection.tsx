import { Code, Zap, Microscope, Brain } from 'lucide-react';
import { contentService } from '../../services/contentService';

const categoryIcons = {
  'Optics': Microscope,
  'Programming': Code,
  'Software': Code,
  'AI/ML': Brain,
  'Imaging': Microscope,
  'Signal Processing': Zap
};

const categoryColors = {
  'Optics': 'bg-blue-100 text-blue-800 border-blue-200',
  'Programming': 'bg-green-100 text-green-800 border-green-200',
  'Software': 'bg-purple-100 text-purple-800 border-purple-200',
  'AI/ML': 'bg-orange-100 text-orange-800 border-orange-200',
  'Imaging': 'bg-teal-100 text-teal-800 border-teal-200',
  'Signal Processing': 'bg-pink-100 text-pink-800 border-pink-200'
};

export default function TechnicalSkillsSection() {
  const skillCategories = contentService.getSkillCategories();
  
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across optical engineering, software development, and research methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const skills = contentService.getSkillsByCategory(category);
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Code;
            const colorClass = categoryColors[category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800 border-gray-200';

            return (
              <div key={category} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg ${colorClass} border mr-3`}>
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                </div>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      {skill.level && (
                        <div className="flex items-center">
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div
                                key={level}
                                className={`w-2 h-2 rounded-full ${
                                  level <= skill.level 
                                    ? 'bg-blue-500' 
                                    : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Overview */}
        <div className="mt-12 bg-white rounded-lg shadow-md border border-gray-200 p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-sm text-gray-600">Years in Optical Research</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Programming Languages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Software Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-sm text-gray-600">Research Areas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
