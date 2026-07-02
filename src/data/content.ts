import { SiteData } from '../types/content';

export const siteData: SiteData = {
  personalInfo: {
    name: 'Rakesh Joshi',
    title: 'OPTICAL RESEARCH ENGINEER',
    tagline: 'Optical systems that see <em>the eye more clearly.</em>',
    eyebrow: 'ADAPTIVE OPTICS · OCULAR IMAGING · WAVEFRONT SENSING',
    description:
      'I design and build imaging and correction systems for the eye — adaptive optics, ocular surface phase imaging, anterior segment OCT, and eye tracking — bridging optical engineering and vision science.',
    email: 'rakesh.joshi@uconn.edu',
    location: 'Storrs, CT',
    linkedin: 'linkedin.com/in/rakesh-joshi',
    github: 'github.com/rakaUconn',
    orcid: 'orcid.org/0000-0000-0000-0000',
    googleScholar: 'scholar.google.com/citations?user=example',
    stats: [
      { value: 'PhD', label: 'ECE, UConn' },
      { value: '5', label: 'active projects' },
      { value: 'Storrs', label: 'CT' },
    ],
  },

  projects: [
    {
      id: 'adaptive-optics',
      title: 'Adaptive Optics and Wavefront Sensing for Ophthalmic Imaging',
      category: 'ADAPTIVE OPTICS',
      status: 'current',
      period: '2024 – Present',
      authors: 'R. Joshi, et al.',
      summary:
        'Real-time correction of higher-order ocular aberrations using Shack–Hartmann wavefront sensing and a deformable mirror, enabling cellular-resolution imaging of the living retina.',
      approach:
        'A closed-loop adaptive optics system measures wavefront aberrations from a probe beam reflected off the retina and drives a deformable mirror at video rate, compensating for aberrations unique to each eye before they reach the imaging sensor.',
      results:
        'Early bench testing shows consistent Strehl-ratio improvement across a range of induced aberrations; integration with a scanning imaging channel is underway.',
      applications: [
        { name: 'Retinal imaging', desc: 'Cellular-resolution visualization of photoreceptors and vasculature.' },
        { name: 'Vision science', desc: 'Studying how optical aberrations affect visual perception.' },
        { name: 'Myopia research', desc: 'Linking peripheral aberrations to refractive-error progression.' },
      ],
      tech: ['Wavefront Sensing', 'Adaptive Optics', 'Deformable Mirrors', 'MATLAB'],
      pubNote: 'Manuscript in preparation.',
      fig1Caption: 'Adaptive optics bench with Shack–Hartmann sensor and deformable mirror in the imaging path.',
      fig2Caption: 'Closed-loop schematic: wavefront sensing drives real-time mirror correction.',
      hasCaseStudy: true,
    },
    {
      id: 'ocular-surface-phase',
      title: 'Phase Imaging of the Ocular Surface',
      category: 'PHASE IMAGING',
      status: 'current',
      period: '2023 – Present',
      authors: 'R. Joshi, et al.',
      summary:
        'Quantitative phase imaging of the tear film and ocular surface to characterize thickness dynamics and surface irregularities non-invasively.',
      approach:
        'A quantitative phase imaging setup captures interferometric phase data across the corneal surface, from which tear-film thickness and surface topography are reconstructed without contact or dye.',
      results:
        'Initial measurements show sensitivity to sub-micron tear-film thickness changes across a blink cycle.',
      applications: [
        { name: 'Dry eye diagnostics', desc: 'Objective, non-invasive tear-film assessment.' },
        { name: 'Contact lens fitting', desc: 'Surface topography for lens design.' },
        { name: 'Clinical research', desc: 'Quantifying surface dynamics over time.' },
      ],
      tech: ['Quantitative Phase Imaging', 'Interferometry', 'Image Processing'],
      pubNote: 'Manuscript in preparation.',
      fig1Caption: 'Quantitative phase imaging setup for the ocular surface.',
      fig2Caption: 'Reconstruction pipeline from interferometric phase to tear-film thickness map.',
      hasCaseStudy: true,
    },
    {
      id: 'as-oct',
      title: 'Anterior Segment Optical Coherence Tomography',
      category: 'OCT',
      status: 'current',
      period: '2023 – Present',
      authors: 'R. Joshi, et al.',
      summary:
        'High-resolution OCT imaging of the cornea and anterior chamber to support diagnostics and refractive/surgical planning.',
      approach:
        'A custom anterior-segment OCT system acquires cross-sectional images of the cornea, iris, and anterior chamber at high axial resolution, paired with segmentation algorithms for automated biometry.',
      results:
        'Automated segmentation achieves reliable corneal and anterior-chamber boundary detection across pilot scans.',
      applications: [
        { name: 'Corneal diagnostics', desc: 'Thickness and curvature mapping.' },
        { name: 'Surgical planning', desc: 'Anterior chamber biometry for refractive/cataract surgery.' },
        { name: 'Disease monitoring', desc: 'Longitudinal tracking of corneal pathology.' },
      ],
      tech: ['OCT', 'Image Segmentation', 'Optical Design'],
      pubNote: 'Manuscript in preparation.',
      fig1Caption: 'Anterior segment OCT bench with the sample and reference arms.',
      fig2Caption: 'Segmentation pipeline for automated corneal biometry.',
      hasCaseStudy: true,
    },
    {
      id: 'eye-tracking',
      title: 'Eye Tracking Systems and Algorithms',
      category: 'EYE TRACKING',
      status: 'current',
      period: '2022 – Present',
      authors: 'R. Joshi, et al.',
      summary:
        'Development of camera-based eye-tracking systems and gaze-estimation algorithms for research and clinical applications.',
      approach:
        'Combines corneal-reflection and pupil-detection methods with calibration models to estimate gaze direction robustly across head movement and lighting conditions.',
      results:
        'The current pipeline maintains sub-degree gaze accuracy under moderate head motion in bench testing.',
      applications: [
        { name: 'Vision research', desc: 'Fixation and saccade analysis.' },
        { name: 'Human factors', desc: 'Attention and usability studies.' },
        { name: 'Assistive technology', desc: 'Gaze-based interaction.' },
      ],
      tech: ['Computer Vision', 'Gaze Estimation', 'Python'],
      pubNote: 'Manuscript in preparation.',
      fig1Caption: 'Camera-based eye-tracking rig used for calibration and testing.',
      fig2Caption: 'Gaze-estimation pipeline from corneal reflection and pupil detection to gaze vector.',
      hasCaseStudy: true,
    },
    {
      id: 'femtosecond-ri-modification',
      title: 'Femtosecond Laser-Based Refractive Index Modification and Wavefront Metrology',
      category: 'FEMTOSECOND LASER OPTICS',
      status: 'current',
      period: '2024 – Present',
      authors: 'R. Joshi, et al.',
      summary:
        'Using femtosecond laser writing to locally modify refractive index within optical materials, with wavefront metrology to characterize and validate the resulting gradient-index structures.',
      approach:
        'Tightly focused femtosecond pulses are scanned through a substrate to induce controlled, localized refractive-index changes. The resulting structures are characterized with interferometric wavefront metrology to map induced phase profiles and validate designs against target gradient-index optics.',
      results:
        'Demonstrated repeatable, spatially controlled refractive-index modification with wavefront measurements confirming the intended phase profiles; work on process optimization and larger-scale structures is ongoing.',
      applications: [
        { name: 'Gradient-index optics', desc: 'Custom intraocular and freeform lens fabrication.' },
        { name: 'Vision correction', desc: 'Direct refractive-index writing for personalized correction.' },
        { name: 'Photonic devices', desc: 'Embedded waveguides and optical components.' },
      ],
      tech: ['Femtosecond Laser Writing', 'Wavefront Metrology', 'Interferometry', 'Optical Design'],
      pubNote: 'Manuscript in preparation.',
      fig1Caption: 'Femtosecond laser writing setup with beam-scanning optics over the substrate.',
      fig2Caption: 'Wavefront metrology pipeline: interferometric measurement to reconstructed phase profile.',
      hasCaseStudy: true,
    },
    {
      id: 'underwater-imaging',
      title: '3D Underwater Imaging Systems',
      category: '3D IMAGING',
      status: 'past',
      period: '2020 – 2023',
      authors: 'R. Joshi, M. Cho, B. Javidi',
      summary:
        'Advanced integral imaging techniques for capturing and visualizing dynamic underwater phenomena at high speeds, overcoming scattering and absorption limits of underwater environments.',
      approach:
        'Custom-designed microlens arrays, optimized for underwater light propagation, were paired with a high-speed synchronized acquisition system (>500 fps) and novel computational reconstruction algorithms for real-time 3D visualization.',
      results:
        'Demonstrated real-time 3D visualization underwater with significant image-quality improvement through scattering media, and robust algorithms for reconstructing dynamic scenes.',
      applications: [
        { name: 'Marine biology', desc: 'Study of marine life behavior in natural habitat.' },
        { name: 'Underwater robotics', desc: 'Navigation and object detection for AUVs.' },
        { name: 'Environmental monitoring', desc: 'Real-time ecosystem monitoring.' },
      ],
      tech: ['Integral Imaging', 'Machine Learning', 'Optical Design', 'MATLAB'],
      pubNote:
        'R. Joshi, M. Cho, B. Javidi — "Deep learning enhanced integral imaging for underwater object detection," Optics Express 31, 15234–15247 (2023).',
      fig1Caption: 'Experimental setup for high-speed underwater 3D integral imaging.',
      fig2Caption: 'Reconstructed 3D images of dynamic underwater scenes.',
      hasCaseStudy: true,
    },
    {
      id: 'polarimetric-imaging',
      title: 'Dynamic Polarimetric Imaging',
      category: 'POLARIMETRIC',
      status: 'past',
      period: '2021 – 2024',
      authors: 'R. Joshi, A. Carnicer, B. Javidi',
      summary:
        'Development of dynamic polarimetric imaging systems for enhanced object detection and characterization through scattering media.',
      approach:
        'A tunable liquid-crystal analyzer swept polarization states faster than the scene changed, with a lightweight estimator computing per-pixel Stokes parameters to select the configuration maximizing target–background contrast.',
      results:
        'Recovered targets at higher scattering densities than fixed-polarizer and raw-intensity baselines while running the full control loop at video rate.',
      applications: [
        { name: 'Medical imaging', desc: 'Tissue characterization through turbid layers.' },
        { name: 'Remote sensing', desc: 'Target detection in haze and atmosphere.' },
        { name: 'Security & defense', desc: 'Camouflaged-object discrimination.' },
      ],
      tech: ['Polarimetric Imaging', 'Signal Processing', 'Optical Design'],
      pubNote:
        'R. Joshi, A. Carnicer, B. Javidi — "Polarimetric integral imaging for enhanced visualization through scattering media," J. Display Technology 18, 892–901 (2022).',
      fig1Caption: 'Dynamic polarimetric imaging bench with tunable analyzer stage.',
      fig2Caption: 'Adaptive feedback loop: Stokes estimation drives analyzer selection.',
      hasCaseStudy: true,
    },
    {
      id: 'computational-imaging',
      title: 'Computational Imaging Techniques',
      category: 'COMPUTATIONAL',
      status: 'past',
      period: '2019 – 2023',
      authors: 'R. Joshi, et al.',
      summary:
        'Implementation of computational imaging techniques, including deep-learning reconstruction, for enhanced image recovery and analysis.',
      approach:
        'Neural reconstruction pipelines were trained to recover scene detail lost to noise, blur, and scattering, integrated with conventional optical acquisition hardware.',
      results:
        'Achieved measurable gains in reconstruction fidelity over classical deconvolution baselines across several imaging modalities.',
      applications: [
        { name: 'Medical diagnostics', desc: 'Enhanced clinical image recovery.' },
        { name: 'Scientific research', desc: 'Recovering detail in low-SNR data.' },
        { name: 'Industrial inspection', desc: 'Defect detection under noisy imaging.' },
      ],
      tech: ['Machine Learning', 'Image Processing', 'Python', 'TensorFlow'],
      pubNote: 'Findings incorporated into the underwater and polarimetric imaging publications above.',
      fig1Caption: 'Computational imaging reconstruction pipeline.',
      fig2Caption: 'Comparison of raw and reconstructed image quality.',
      hasCaseStudy: true,
    },
    {
      id: 'optical-microscopy',
      title: 'Advanced Optical Microscopy',
      category: 'MICROSCOPY',
      status: 'past',
      period: '2018 – 2022',
      authors: 'R. Joshi, et al.',
      summary:
        'Design and optimization of optical microscopy systems for high-resolution imaging and characterization, including a wide-field fiber-optic micro-endoscope.',
      approach:
        'A high-resolution wide-field fiber-optic micro-endoscopic system was developed and optimized, balancing field of view, resolution, and fiber-bundle constraints.',
      results:
        'Delivered a working wide-field micro-endoscopic prototype with improved resolution over comparable fiber-bundle systems.',
      applications: [
        { name: 'Biological research', desc: 'High-resolution tissue imaging.' },
        { name: 'Material science', desc: 'Microstructure characterization.' },
        { name: 'Quality control', desc: 'Micro-scale inspection.' },
      ],
      tech: ['Optical Design', 'Microscopy', 'Image Analysis'],
      pubNote: 'Developed as part of graduate dissertation work at IIT Delhi.',
      fig1Caption: 'High-resolution wide-field optical microscopy setup.',
      fig2Caption: 'Fiber-optic micro-endoscope design schematic.',
      hasCaseStudy: true,
    },
    {
      id: 'personalized-optics',
      title: 'Optical System Design for Personalization, Wavefront Correction, and Myopia Control',
      category: 'OPTICAL DESIGN',
      status: 'future',
      period: 'Planned',
      authors: 'R. Joshi',
      summary:
        'A proposed research direction combining individualized wavefront correction with optical designs aimed at controlling myopia progression.',
      applications: [
        { name: 'Personalized eyewear', desc: 'Aberration-corrected lens design per patient.' },
        { name: 'Myopia control', desc: 'Optical strategies to slow refractive-error progression.' },
      ],
      tech: ['Optical Design', 'Wavefront Correction'],
      pubNote: 'Proposal stage — no publications yet.',
      fig1Caption: 'Concept: personalized optical correction integrated with myopia-control design.',
      fig2Caption: '',
      hasCaseStudy: false,
    },
  ],

  education: [
    {
      degree: 'Doctor of Philosophy (PhD), Electrical and Computer Engineering',
      institution: 'University of Connecticut, USA',
      year: '2024',
      location: 'Storrs, CT',
      detail:
        'Dissertation: "Optical signal detection and image sensing in scattering medium using Integral Imaging and Deep neural networks." Specialization: Photonics.',
    },
    {
      degree: 'Master of Science, Electrical and Computer Engineering',
      institution: 'University of Connecticut, USA',
      year: '2020',
      location: 'Storrs, CT',
      detail: 'Focus: Optical imaging, polarization imaging, computational optics, 3D imaging.',
    },
    {
      degree: 'Master of Technology, Applied Optics',
      institution: 'Indian Institute of Technology Delhi, India',
      year: '2018',
      location: 'New Delhi, India',
      detail: 'Dissertation: "Development of high-resolution wide-field fiber optic micro-endoscopic system."',
    },
    {
      degree: 'Master of Science, Physics',
      institution: 'GBPUA&T Pantnagar, India',
      year: '2016',
      location: 'Uttarakhand, India',
      detail: 'Dissertation: "Quantum computation using teleportation and single-qubit gates."',
    },
    {
      degree: 'Bachelor of Science, Physics / Mathematics / Chemistry',
      institution: 'LSM PG College, Kumaon University Pithoragarh, India',
      year: '2014',
      location: 'Uttarakhand, India',
    },
  ],

  experience: [
    {
      title: 'Postdoctoral Research Associate',
      org: 'University of Connecticut',
      location: 'Storrs, CT',
      dates: '2024 – Present',
      points: [
        'Develop novel optical imaging and correction systems for ocular research',
        'Implement machine learning algorithms for image and signal processing',
        'Publish research findings in peer-reviewed journals',
        'Mentor graduate students in optical engineering',
      ],
    },
    {
      title: 'Graduate Research Assistant',
      org: 'University of Connecticut',
      location: 'Storrs, CT',
      dates: '2018 – 2024',
      points: [
        'Designed and built optical systems for underwater and polarimetric imaging',
        'Developed algorithms for 3D image reconstruction',
        'Published research papers and presented at conferences',
        'Collaborated with interdisciplinary research teams',
      ],
    },
  ],

  publications: [
    {
      id: 'pub1',
      title: 'Deep learning enhanced integral imaging for underwater object detection',
      authors: 'R. Joshi, M. Cho, B. Javidi',
      venue: 'Optics Express',
      year: '2023',
      pages: '31, 15234–15247',
      tags: ['Integral Imaging', 'Deep Learning', 'Underwater Imaging'],
    },
    {
      id: 'pub2',
      title: 'Polarimetric integral imaging for enhanced visualization through scattering media',
      authors: 'R. Joshi, A. Carnicer, B. Javidi',
      venue: 'Journal of Display Technology',
      year: '2022',
      pages: '18, 892–901',
      tags: ['Polarimetric Imaging', 'Integral Imaging', 'Scattering Media'],
    },
  ],

  blogPosts: [
    {
      date: 'March 2024',
      title: 'Starting a new line of work: adaptive optics for ophthalmic imaging',
      blurb:
        'Kicking off a project on real-time wavefront correction for retinal imaging — first update on the bench build coming soon.',
    },
    {
      date: 'January 2024',
      title: 'Joined UConn as a Postdoctoral Research Associate',
      blurb:
        'Continuing research in optical imaging and computational optics, now focused on ocular applications.',
    },
    {
      date: 'November 2023',
      title: 'Paper published in Optics Express',
      blurb:
        '"Deep learning enhanced integral imaging for underwater object detection" is now out — see the Publications page.',
    },
    {
      date: 'August 2022',
      title: 'Presented polarimetric imaging work at an Optica conference',
      blurb: 'Shared early results on dynamic polarimetric imaging for detection through scattering media.',
    },
  ],
};
