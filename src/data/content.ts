import { ContentDatabase } from '../types/content';

// Centralized content database - easily editable for future updates
export const contentDatabase: ContentDatabase = {
  personalInfo: {
    name: "Rakesh Joshi",
    title: "Optical Research Engineer & Photonics Specialist",
    subtitle: "PhD in Electrical and Computer Engineering",
    description: "Experienced researcher specializing in 3D imaging, computational imaging, optical microscopy, and optical metrology with a focus on advanced optical system design.",
    profileImage: "/websiteRJ/profile.jpg",
    email: "rakesh.joshi@example.com",
    location: "Connecticut, USA",
    linkedin: "https://linkedin.com/in/rakesh-joshi",
    github: "https://github.com/rakaUconn",
    orcid: "https://orcid.org/0000-0000-0000-0000",
    googleScholar: "https://scholar.google.com/citations?user=example",
  },

  education: [
    {
      degree: 'Doctor of Philosophy (PhD) in Electrical and Computer Engineering',
      institution: 'University of Connecticut, USA',
      year: '2024',
      description: 'Dissertation: "Optical signal detection and image sensing in scattering medium using Integral Imaging and Deep neural networks"',
      specialization: 'Specialization: Photonics',
      location: 'Storrs, CT'
    },
    {
      degree: 'Master of Science in Electrical and Computer Engineering',
      institution: 'University of Connecticut, USA',
      year: '2020',
      description: 'Focus: Optical imaging, Polarization imaging, Computational Optics, 3D Imaging',
      location: 'Storrs, CT'
    },
    {
      degree: 'Master of Technology in Applied Optics',
      institution: 'Indian Institute of Technology Delhi, India',
      year: '2018',
      description: 'Dissertation: "Development of high-resolution wide-field fiber optic micro-endoscopic system"',
      location: 'New Delhi, India'
    },
    {
      degree: 'Master of Science in Physics',
      institution: 'GBPUA&T Pantnagar, India',
      year: '2016',
      description: 'Dissertation: "Quantum computation using teleportation and single-qubit gates"',
      location: 'Uttarakhand, India'
    },
    {
      degree: 'Bachelor of Science',
      institution: 'LSM PG college, Kumaon University Pithoragarh, India',
      year: '2014',
      description: 'Physics, Mathematics, Chemistry',
      location: 'Uttarakhand, India'
    }
  ],

  experience: [
    {
      title: 'Postdoctoral Research Associate',
      company: 'University of Connecticut',
      location: 'Storrs, CT',
      startDate: '2024-01',
      description: 'Leading advanced research in optical imaging and computational optics',
      responsibilities: [
        'Develop novel optical imaging systems',
        'Implement machine learning algorithms for image processing',
        'Publish research findings in peer-reviewed journals',
        'Mentor graduate students in optical engineering'
      ],
      technologies: ['MATLAB', 'Python', 'LabVIEW', 'Zemax', 'Deep Learning']
    },
    {
      title: 'Graduate Research Assistant',
      company: 'University of Connecticut',
      location: 'Storrs, CT',
      startDate: '2018-08',
      endDate: '2024-01',
      description: 'Conducted research in integral imaging and computational optics',
      responsibilities: [
        'Designed and built optical systems for underwater imaging',
        'Developed algorithms for 3D image reconstruction',
        'Published research papers and presented at conferences',
        'Collaborated with interdisciplinary research teams'
      ],
      technologies: ['MATLAB', 'Python', 'OpenCV', 'TensorFlow', 'Optical Design']
    }
  ],

  skills: [
    { name: 'Optical System Design', category: 'Optics', level: 5 },
    { name: 'Zemax OpticStudio', category: 'Software', level: 5 },
    { name: 'MATLAB', category: 'Programming', level: 5 },
    { name: 'Python', category: 'Programming', level: 4 },
    { name: 'LabVIEW', category: 'Software', level: 4 },
    { name: 'Machine Learning', category: 'AI/ML', level: 4 },
    { name: 'TensorFlow/PyTorch', category: 'AI/ML', level: 4 },
    { name: 'Integral Imaging', category: 'Imaging', level: 5 },
    { name: 'Polarimetric Imaging', category: 'Imaging', level: 4 },
    { name: 'Optical Microscopy', category: 'Imaging', level: 4 },
    { name: 'Image Processing', category: 'Signal Processing', level: 5 },
    { name: 'Computer Vision', category: 'AI/ML', level: 4 }
  ],

  publications: [
    {
      id: 'pub1',
      title: 'Deep learning enhanced integral imaging for underwater object detection',
      authors: ['R. Joshi', 'M. Cho', 'B. Javidi'],
      journal: 'Optics Express',
      year: 2023,
      volume: '31',
      pages: '15234-15247',
      doi: '10.1364/OE.489234',
      type: 'journal',
      tags: ['integral imaging', 'deep learning', 'underwater imaging'],
      abstract: 'We present a novel approach combining integral imaging with deep neural networks for enhanced underwater object detection capabilities.'
    },
    {
      id: 'pub2',
      title: 'Polarimetric integral imaging for enhanced visualization through scattering media',
      authors: ['R. Joshi', 'A. Carnicer', 'B. Javidi'],
      journal: 'Journal of Display Technology',
      year: 2022,
      volume: '18',
      pages: '892-901',
      type: 'journal',
      tags: ['polarimetric imaging', 'integral imaging', 'scattering media']
    }
  ],

  projects: [
    {
      id: 'underwater-imaging',
      title: '3D Underwater Imaging Systems',
      slug: 'underwater-imaging',
      category: '3d-imaging',
      description: 'Advanced integral imaging techniques for capturing and visualizing dynamic underwater phenomena at high speeds.',
      detailedDescription: 'This research explores advanced integral imaging techniques for capturing and visualizing dynamic underwater phenomena at high speeds. The system combines specialized optical arrays with computational reconstruction algorithms to achieve real-time 3D visualization of rapidly changing underwater scenes.',
      objectives: [
        'Develop high-speed 3D imaging systems for underwater applications',
        'Overcome traditional limitations of underwater imaging such as scattering and absorption',
        'Create real-time visualization capabilities for dynamic monitoring'
      ],
      methodology: [
        'Custom-designed microlens arrays optimized for underwater light propagation',
        'High-speed synchronized image acquisition system (>500 fps)',
        'Novel computational reconstruction algorithms'
      ],
      results: [
        'Successfully demonstrated real-time 3D visualization underwater',
        'Achieved significant improvement in image quality through scattering media',
        'Developed robust algorithms for dynamic scene reconstruction'
      ],
      applications: [
        'Marine biology research',
        'Underwater robotics',
        'Environmental monitoring systems',
        'Underwater archaeology'
      ],
      technologies: ['Integral Imaging', 'Machine Learning', 'Optical Design', 'MATLAB', 'Python'],
      startDate: '2020-01',
      endDate: '2023-12',
      status: 'completed',
      images: [
        {
          url: '/websiteRJ/images/research/fig1.jpg',
          alt: 'Underwater imaging system setup',
          caption: 'Experimental setup for underwater 3D imaging',
          type: 'setup'
        },
        {
          url: '/websiteRJ/images/research/fig2.jpg',
          alt: 'Reconstructed 3D images',
          caption: 'Examples of 3D reconstructed underwater scenes',
          type: 'result'
        }
      ],
      publications: ['pub1'],
      relatedProjects: ['polarimetric-imaging']
    },
    {
      id: 'polarimetric-imaging',
      title: 'Dynamic Polarimetric Imaging',
      slug: 'dynamic-polarimetric-imaging',
      category: 'polarimetric',
      description: 'Development of dynamic polarimetric imaging systems for enhanced object detection and characterization.',
      detailedDescription: 'Research focused on developing advanced polarimetric imaging techniques that can dynamically adapt to varying environmental conditions and target properties.',
      objectives: [
        'Develop adaptive polarimetric imaging systems',
        'Enhance object detection in challenging environments',
        'Create robust algorithms for polarization analysis'
      ],
      applications: [
        'Medical imaging',
        'Remote sensing',
        'Security applications',
        'Material characterization'
      ],
      technologies: ['Polarimetric Imaging', 'Signal Processing', 'Optical Design'],
      startDate: '2021-06',
      endDate: '2024-01',
      status: 'completed',
      images: [
        {
          url: '/websiteRJ/images/research/fig3.jpg',
          alt: 'Polarimetric imaging setup',
          caption: 'Dynamic polarimetric imaging system',
          type: 'setup'
        }
      ],
      publications: ['pub2'],
      relatedProjects: ['underwater-imaging']
    },
    {
      id: 'computational-imaging',
      title: 'Computational Imaging Techniques',
      slug: 'computational-imaging',
      category: 'computational',
      description: 'Implementation of innovative computational imaging techniques for enhanced image reconstruction and analysis.',
      applications: [
        'Medical diagnostics',
        'Scientific research',
        'Industrial inspection',
        'Astronomical imaging'
      ],
      technologies: ['Machine Learning', 'Image Processing', 'Python', 'TensorFlow'],
      startDate: '2019-01',
      status: 'ongoing',
      images: [
        {
          url: '/websiteRJ/images/research/fig4.jpg',
          alt: 'Computational imaging results',
          caption: 'Enhanced images using computational techniques',
          type: 'result'
        }
      ]
    },
    {
      id: 'optical-microscopy',
      title: 'Advanced Optical Microscopy',
      slug: 'optical-microscopy',
      category: 'microscopy',
      description: 'Design and optimization of optical microscopy systems for high-resolution imaging and characterization.',
      applications: [
        'Biological research',
        'Material science',
        'Nanotechnology',
        'Quality control'
      ],
      technologies: ['Optical Design', 'Microscopy', 'Image Analysis'],
      startDate: '2018-08',
      status: 'ongoing',
      images: [
        {
          url: '/websiteRJ/images/research/fig5.jpg',
          alt: 'Microscopy system',
          caption: 'High-resolution optical microscopy setup',
          type: 'setup'
        }
      ]
    },
    {
      id: '3d-imaging-systems',
      title: '3D Imaging Systems Development',
      slug: '3d-imaging-systems',
      category: '3d-imaging',
      description: 'Comprehensive development of 3D imaging systems for various applications.',
      applications: [
        'Metrology',
        'Quality inspection',
        '3D visualization',
        'Augmented reality'
      ],
      technologies: ['3D Imaging', 'Stereo Vision', 'Point Cloud Processing'],
      startDate: '2020-01',
      status: 'ongoing',
      images: [
        {
          url: '/websiteRJ/images/research/fig6.jpg',
          alt: '3D imaging results',
          caption: '3D reconstructed objects and scenes',
          type: 'result'
        }
      ]
    }
  ],

  categories: [
    {
      id: '3d-imaging',
      name: '3D Imaging Systems',
      description: 'Advanced 3D imaging and visualization technologies',
      icon: 'Cube',
      color: 'blue',
      projects: ['underwater-imaging', '3d-imaging-systems']
    },
    {
      id: 'polarimetric',
      name: 'Polarimetric Imaging',
      description: 'Polarization-based imaging and analysis',
      icon: 'Zap',
      color: 'purple',
      projects: ['polarimetric-imaging']
    },
    {
      id: 'computational',
      name: 'Computational Imaging',
      description: 'AI and ML enhanced imaging techniques',
      icon: 'Brain',
      color: 'green',
      projects: ['computational-imaging']
    },
    {
      id: 'microscopy',
      name: 'Optical Microscopy',
      description: 'High-resolution microscopy systems and techniques',
      icon: 'Microscope',
      color: 'orange',
      projects: ['optical-microscopy']
    }
  ],

  pages: {
    home: {
      title: 'Home',
      description: 'Research portfolio of Rakesh Joshi',
      sections: [
        { id: 'hero', type: 'hero', content: {} },
        { id: 'about', type: 'about', content: {} },
        { id: 'skills', type: 'skills', content: {} },
        { id: 'experience', type: 'experience', content: {} },
        { id: 'contact', type: 'contact', content: {} }
      ]
    },
    research: {
      title: 'Research',
      description: 'Optical research projects and innovations',
      sections: [
        { id: 'research-overview', type: 'research-overview', content: {} },
        { id: 'project-grid', type: 'project-grid', content: {} }
      ]
    },
    publications: {
      title: 'Publications',
      description: 'Academic publications and research papers',
      sections: [
        { id: 'publications-list', type: 'publications-list', content: {} }
      ]
    }
  }
};
