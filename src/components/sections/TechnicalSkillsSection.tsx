import { Code, Microscope, Beaker, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface TechnicalSkillsContent {
  categories: {
    advancedOpticalSystems: SkillCategory;
    opticalPhysics: SkillCategory;
    technicalExpertise: SkillCategory;
    researchTools: SkillCategory;
  };
}

export default function TechnicalSkillsSection() {
  const content: TechnicalSkillsContent = {
    categories: {
      advancedOpticalSystems: {
        title: 'Advanced Optical Systems',
        skills: [
          '3D Imaging & Digital Holography',
          'Computational Imaging',
          'Integral Imaging (Lightfield)',
          'Two-Photon Direct Laser Writing'
        ]
      },
      opticalPhysics: {
        title: 'Optical Physics',
        skills: [
          'Fourier Optics',
          'Polarization Optics',
          'Experimental Optical Physics',
          'Computational Lithography'
        ]
      },
      technicalExpertise: {
        title: 'Technical Expertise',
        skills: [
          'Optical System Design',
          'Optical Microscopy',
          'Image Processing',
          'System Integration',
          'Data Analysis',
          'Advanced Metrology'
        ]
      },
      researchTools: {
        title: 'Research Tools',
        skills: [
          'Zemax OpticStudio',
          'MATLAB & Python',
          'LabVIEW',
          'Infrastructure as Code'
        ]
      }
    }
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Advanced Optical Systems */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Microscope className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold">{content.categories.advancedOpticalSystems.title}</h3>
            </div>
            <ul className="space-y-2">
              {content.categories.advancedOpticalSystems.skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Optical Physics */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Beaker className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold">{content.categories.opticalPhysics.title}</h3>
            </div>
            <ul className="space-y-2">
              {content.categories.opticalPhysics.skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Expertise */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold">{content.categories.technicalExpertise.title}</h3>
            </div>
            <ul className="space-y-2">
              {content.categories.technicalExpertise.skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Tools */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold">{content.categories.researchTools.title}</h3>
            </div>
            <ul className="space-y-2">
              {content.categories.researchTools.skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}