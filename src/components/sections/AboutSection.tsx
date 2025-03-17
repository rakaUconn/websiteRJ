import { useState } from 'react';
import { GraduationCap, Brain } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  description: string;
  specialization?: string;
}

interface AboutContent {
  education: Education[];
  researchFocus: string[];
}

export default function AboutSection() {
  const content: AboutContent = {
    education: [
      {
        degree: 'Doctor of Philosophy (PhD) in Electrical and Computer Engineering',
        institution: 'University of Connecticut, USA',
        description: 'Dissertation: "Optical signal detection and image sensing in scattering medium using Integral Imaging and Deep neural networks"',
        specialization: 'Specialization: Photonics'
      },
      {
        degree: 'Master of Science in Electrical and Computer Engineering',
        institution: 'University of Connecticut, USA',
        description: 'Focus: Optical imaging, Polarization imaging, Computational Optics, 3D Imaging'
      },
      {
        degree: 'Master of Technology in Applied Optics',
        institution: 'Indian Institute of Technology Delhi, India',
        description: 'Dissertation: "Development of high-resolution wide-field fiber optic micro-endoscopic system"'
      },
      {
        degree: 'Master of Science in Physics',
        institution: 'GBPUA&T Pantnagar, India',
        description: 'Dissertation: "Quantum computation using teleportation and single-qubit gates"'
      },
      {
        degree: 'Bachelor of Science',
        institution: 'LSM PG college, Kumaon University Pithoragarh, India',
        description: ''
      }
    ],
    researchFocus: [
      'Optical Signal Detection & Image Sensing',
      'Integral Imaging & Deep Neural Networks',
      '3D Imaging Systems & Computational Optics',
      'Polarization Imaging & Optical Microscopy',
      'High-Resolution Fiber Optic Systems',
      'Quantum Computing & Teleportation'
    ]
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="text-blue-600" />
              Academic Background
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200"></div>
              <ul className="space-y-8 relative">
                {content.education.map((edu, index) => (
                  <li key={index} className="relative pl-12">
                    <div className="absolute left-0 top-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <p className="font-medium text-lg">{edu.degree}</p>
                    <p className="text-blue-600">{edu.institution}</p>
                    {edu.description && (
                      <p className="text-gray-700 mt-2">{edu.description}</p>
                    )}
                    {edu.specialization && (
                      <p className="text-gray-600 mt-1">{edu.specialization}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Brain className="text-blue-600" />
              Research Focus
            </h3>
            <ul className="space-y-3 text-gray-700">
              {content.researchFocus.map((focus, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}