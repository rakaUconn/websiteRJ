import { Briefcase, GraduationCap, School } from 'lucide-react';

interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  responsibilities?: string[];
  techniquesUsed?: string[];
  challengesAddressed?: string[];
}

interface ProfessionalExperienceContent {
  experiences: Experience[];
}

export default function ProfessionalExperienceSection() {
  const content: ProfessionalExperienceContent = {
    experiences: [
      {
        title: 'Postdoctoral Researcher',
        organization: 'University of Houston',
        period: 'Sep 2024-PRESENT',
        description: 'Developing advanced optical tomography techniques with applications from underwater exploration to medical diagnostics.'
      },
      {
        title: 'Teaching Assistant',
        organization: 'University of Connecticut',
        period: '2021-2023',
        description: 'Courses: Digital image processing, Electrical Circuits, and Electrical and Computer Engineering Principles',
        responsibilities: [
          'Prepare reading materials and resources for courses',
          'Lead tutorial or lab sessions under the supervision of the professor',
          'Demonstrate experiments or problem-solving techniques in lab settings',
          'Hold regular office hours to assist students with course material',
          'Occasionally deliver guest lectures if qualified and when necessary'
        ]
      },
      {
        title: 'Research Assistant',
        organization: 'University of Connecticut',
        period: 'Jan 2019-PRESENT',
        description: 'Development Focus: Crafting an optical signal detection system',
        techniquesUsed: [
          '3D integral imaging',
          'Polarimetric Imaging',
          'Deep Learning'
        ],
        challengesAddressed: [
          'Occlusion: Objects blocking the line of sight to the signal',
          'Turbidity: Cloudy or unclear environments, such as turbid water, that scatter light'
        ]
      }
    ]
  };

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          {content.experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start">
              <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow border-2 border-blue-600">
                {exp.title.includes('Research') ? (
                  <School className="text-blue-600" size={20} />
                ) : exp.title.includes('Teaching') ? (
                  <GraduationCap className="text-blue-600" size={20} />
                ) : (
                  <Briefcase className="text-blue-600" size={20} />
                )}
              </div>
              <div className="ml-12 bg-white rounded-lg p-6 shadow-sm w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-600">{exp.organization}</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                
                {exp.responsibilities && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.techniquesUsed && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Techniques Utilized:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {exp.techniquesUsed.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.challengesAddressed && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Challenges Addressed:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {exp.challengesAddressed.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}