import { SiteData } from '../types/content';

export const siteData: SiteData = {
  personalInfo: {
    name: 'Rakesh Joshi',
    title: 'OPTICAL RESEARCH ENGINEER',
    tagline: 'Optical systems that see <em>the eye more clearly.</em>',
    eyebrow: 'ADAPTIVE OPTICS · OPTICAL SYSTEM DESIGN · COMPUTATIONAL IMAGING · WAVEFRONT SENSING',
    description:
      'Optical Design Engineer with 6+ years of experience in optical system design and computational imaging. Expertise in using ZEMAX, MATLAB, and Python to develop advanced biophotonic optical systems.',
    email: 'rjoshi4@cougarnet.uh.edu',
    location: 'Houston, TX',
    linkedin: '-',
    github: 'github.com/rakaUconn',
    orcid: 'orcid.org/0000-0000-0000-0000',
    googleScholar: 'scholar.google.com/citations?user=example',
    stats: [
      { value: 'PhD', label: 'ECE, UConn' },
      { value: '5', label: 'active projects' },
      { value: 'Houston', label: 'TX' },
    ],
  },

  projects: [
    {
      id: 'adaptive-optics',
      title: 'Adaptive Optics and Wavefront Sensing for Ophthalmic Imaging',
      category: 'ADAPTIVE OPTICS',
      status: 'current',
      period: '2025 – Present',
      authors: 'R. Joshi, et al. (PI: G. Yoon)',
      institution: 'University of Houston College of Optometry — Visual Optics Laboratory',
      summary:
        'A compact, transmission-based adaptive optics visual simulator (AOVS) that replaces the conventional deformable mirror with a transmissive deformable lens (DL), enabling wavefront sensing, correction, and aberration simulation out into the peripheral field — not just the fovea. It is the first system to combine an open-view scanning wavefront sensor with transmissive AO correction at each peripheral angle.',
      approach:
        'A single conjugate pupil plane at the deformable lens ties together three channels: a 940 nm Hartmann–Shack sensing beacon, a visible OLED stimulus, and the shared relay backbone. The eye\'s 6 mm pupil is relayed through two 4f stages — L1 (125 mm) / L2 (200 mm) magnify 1.6× onto the DL\'s 10 mm clear aperture, and L3 (100 mm) / L4 (60 mm) demagnify 0.6× onto the wavefront sensor, for a net 0.96× pupil magnification. A motorized fixation target scans the eye through peripheral eccentricities while the DL runs one of three modes at each angle: Measurement (open loop, captures the eye\'s natural aberration profile), Correction (closed loop, drives the periphery toward diffraction-limited quality), and Simulation (open loop with a commanded Zernike profile, e.g. inducing peripheral myopic defocus). Off-axis pupil foreshortening (cos θ) is corrected before Zernike decomposition, and closed-loop control uses a standard integrator: v(k+1) = v(k) − g·C·s(k).',
      results:
        'On a diffraction-limited model eye, closed-loop correction reduced RMS wavefront error from 0.385λ to 0.048λ in a single-pass visible-light test (632.8 nm, 6.4 mm pupil) — a ~37× reduction, comfortably inside the Maréchal diffraction-limited criterion (λ/14 ≈ 0.071λ). In a double-pass test at the system\'s native 940 nm sensing wavelength (5.7 mm pupil), closed-loop correction reduced error from 1.287λ to 0.090λ — a ~14× reduction, landing just outside the diffraction limit due to the doubled optical path. The deformable lens can inject a known aberration on demand and erase it just as cleanly, supporting its use as both a corrector and a simulator. Human peripheral validation against a commercial scanning aberrometer is in progress.',
      applications: [
        { name: 'Myopia research', desc: 'Peripheral aberration correction and induced-defocus studies linking eye growth to peripheral optics.' },
        { name: 'Vision science', desc: 'Studying how peripheral — not just foveal — optical aberrations affect visual perception.' },
        { name: 'Pre-operative simulation', desc: 'Simulating wide-field ophthalmic corrections before surgery.' },
      ],
      tech: [
        'Adaptive Optics',
        'Transmissive Deformable Lens',
        'Hartmann–Shack Wavefront Sensing',
        'Zernike Polynomials',
        'Peripheral Scanning',
        'Closed-Loop Control',
      ],
      pubNote:
        'Visual Optics Laboratory, University of Houston College of Optometry (PI: Geunyoung Yoon), "Compact Transmission-Based Open-View Adaptive Optics Visual Simulator." Manuscript and system diagrams in preparation.',
      fig1Caption:
        'Optical layout of the compact transmission-based AOVS. Light from the eye passes through beam splitter BS and lens L1 into the first 4f relay (L1–L2), imaging the pupil onto the deformable lens (DL); a second relay (L3–L4) re-images the corrected pupil onto the Hartmann–Shack wavefront sensor, while L5 injects the visible stimulus from an OLED microdisplay through the same beam splitter.',
      fig2Caption:
        'Wavefront maps, single pass (632.8 nm, 6.4 mm pupil). The open-loop DL (center) intentionally introduces a large, well-characterized defocus term; closed-loop correction (right) flattens it to a near-uniform residual.',
      fig3Caption:
        'Wavefront maps, double pass (940 nm, 5.7 mm pupil). Native system aberration (left) is larger than in the single-pass visible test since it accumulates over the full round trip; closed-loop correction (right) brings it back down substantially.',
      fig1Src: 'images/research/adaptive-optics-fig1.jpg',
      fig2Src: 'images/research/adaptive-optics-fig2.jpg',
      fig3Src: 'images/research/adaptive-optics-fig3.jpg',
      hasCaseStudy: true,
    },
    {
      id: 'ocular-surface-phase',
      title: 'Phase Imaging and wavefront metrology',
      category: 'PHASE IMAGING',
      status: 'current',
      period: '2025 – Present',
      authors: 'R. Joshi, S. Nalam, G. Yoon',
      institution: 'University of Houston College of Optometry',
      summary:
        'Quantitative phase imaging of the tear film and ocular surface to characterize thickness dynamics and surface irregularities non-invasively. A related study used Quadriwave Lateral Shearing Interferometry (QWLSI) to quantitatively assess higher-order ocular aberrations, benchmarking its accuracy against conventional Shack-Hartmann (SH) wavefront sensing.',
      approach:
        'A quantitative phase imaging setup captures interferometric phase data across the corneal surface, from which tear-film thickness and surface topography are reconstructed without contact or dye. In a companion aberrometry study, a spatial light modulator (SLM) encoded controlled, high-spatial-frequency aberrations defined by Zernike polynomials — including a simulated trifocal intraocular lens (IOL) phase pattern — imaged in parallel by a QWLSI sensor (2.74 µm pixel pitch, 400×400 px) and a Shack-Hartmann sensor (6 µm pixel pitch, 400×400 px) for direct comparison.',
      results:
        "In the QWLSI vs. SH comparison, QWLSI reconstructed the encoded aberrations — including the fine modulation of the diffractive trifocal IOL phase profile — with substantially lower root-mean-square error (RMSE) than the Shack-Hartmann sensor, particularly at high spatial frequencies. QWLSI's higher resolution, greater number of measurement points, and distinct analysis method enable it to measure higher-spatial-frequency aberrations more accurately than Shack-Hartmann sensing, supporting phase imaging as a promising tool for quantitative ocular aberrometry.",
      applications: [
        { name: 'Dry eye diagnostics', desc: 'Objective, non-invasive tear-film assessment.' },
        { name: 'Contact lens fitting', desc: 'Surface topography for lens design.' },
        { name: 'Clinical research', desc: 'Quantifying surface dynamics over time.' },
        { name: 'Ocular aberrometry', desc: 'High-spatial-frequency aberration measurement for vision correction and adaptive optics.' },
      ],
      tech: [
        'Quantitative Phase Imaging',
        'Quadriwave Lateral Shearing Interferometry (QWLSI)',
        'Shack-Hartmann Sensing',
        'Spatial Light Modulator',
        'Zernike Polynomials',
        'Interferometry',
        'Image Processing',
      ],
      pubNote:
        'R. Joshi, S. Nalam, G. Yoon, "Quantitative Assessment of Ocular Aberrations Using Phase Imaging," University of Houston College of Optometry. Acknowledgments: the authors thank Dynamic Optics for providing the Shack-Hartmann wavefront sensor.',
      fig1Caption:
        'Phase-retrieval pipeline: captured interferogram → Fourier transform → sideband filtering → phase-gradient extraction (Arg Hx, Arg Hy) → integration to an optical path difference (OPD) map.',
      fig2Caption:
        'Reconstruction of a diffractive trifocal IOL phase pattern — input ground truth vs. Shack-Hartmann vs. QWLSI. QWLSI preserves the concentric ring structure that Shack-Hartmann smooths away, at the cost of more speckle noise.',
      fig1Src: 'images/research/ocular-surface-phase-fig1.jpg',
      fig2Src: 'images/research/ocular-surface-phase-fig2.jpg',
      hasCaseStudy: true,
    },
    {
      id: 'as-oct',
      title: 'Anterior Segment Optical Coherence Tomography',
      category: 'OCT',
      status: 'current',
      period: '2025 – Present',
      authors: 'R. Joshi, M. Singh, S. Nalam, G. Yoon',
      institution: 'University of Houston College of Optometry — Visual Optics Laboratory',
      summary:
        'A free-space, Fourier-domain visible-light OCT (VIS-OCT) platform paired with a 3D U-Net segmentation and viability-classification pipeline, built to resolve the corneal endothelium — a single, ~5 µm-thick, non-regenerating cell layer — directly in 3D and grade donor corneal tissue without touching it.',
      approach:
        "Axial resolution in OCT scales as 0.44·λ₀²/Δλ, so shifting the center wavelength into the visible band buys resolution without requiring an unreasonably wide bandwidth. A first-generation VIS-OCM prototype (650 nm center, 150 nm bandwidth) validated 1.87 µm axial and 4.4 µm lateral resolution on a USAF 1951 target and a 3.37 µm photoresist step. The second-generation platform rebuilt around a 585 nm-center supercontinuum source (95 nm bandwidth, ~1 mW at the sample) with a full free-space Michelson interferometer, MEMS scanning mirror, and 2048-pixel line-scan spectrometer at 125 kHz, acquiring 8×8 mm volumes (512×1600 A-scans) in ~13 s at ~1 µm axial resolution and −75 dB sensitivity. A three-stage pipeline then reads cell health from the volume: automated posterior-surface detection (graph-cuts) extracts a 50 µm slab around the Descemet membrane and endothelium; a five-level 3D U-Net with skip connections segments individual cells via watershed on the distance transform; and a gradient-boosted tree (XGBoost) classifies viability from ten features — three of which (axial backscattering intensity, cell-layer thickness, endothelial-to-Descemet reflectance ratio) are only visible because OCT is depth-resolved.",
      results:
        'Trained on 156 3D volumes from 12 porcine and 8 human donor corneas (hand-annotated by three experts, inter-annotator κ = 0.83 ± 0.04, labeled against specular microscopy using EBAA criteria), the pipeline reached a 0.87 ± 0.04 segmentation Dice score, 91.3% viability-classification accuracy, and 0.96 AUC, with GPU inference in 2.3 s per volume. Removing the three OCT-specific features dropped AUC to 0.90, confirming the depth-resolved signal carries independent diagnostic information beyond shape alone. Cell counting from segmentation came within 4.2% of manual annotation and 3.8% of the specular microscopy gold standard (mean IoU 0.79, 2 µm boundary F-score 0.84). In B-scans, the endothelium appears as a distinct hypoechogenic band separated from the bright Descemet membrane reflection — a separation conventional NIR OCT (~18 µm axial resolution) cannot resolve.',
      applications: [
        { name: 'Donor cornea evaluation', desc: 'Non-contact, quantitative viability grading for eye banks ahead of DMEK/DSAEK release.' },
        { name: 'Corneal diagnostics', desc: 'Depth-resolved thickness, curvature, and endothelial health mapping.' },
        { name: 'Surgical planning', desc: 'Anterior chamber biometry and endothelium assessment for refractive/cataract surgery.' },
      ],
      tech: ['Visible-Light OCT', 'Fourier-Domain OCT', '3D U-Net', 'Image Segmentation', 'Deep Learning', 'XGBoost'],
      pubNote:
        'Visual Optics Laboratory, University of Houston College of Optometry (Corresponding: Geunyoung Yoon), "Visible-Light OCT for 3D Corneal Endothelial Imaging with Deep Learning-Based Viability Assessment." Manuscript in preparation. Funding: Lions Foundation for Sight; NIH/NEI (R01EY014999, R01EY034151, P30EY007551); Meta, RxSight, CooperVision, Johnson & Johnson.',
      fig1Caption:
        "Experimental setup of the spectral-domain visible-light OCT system. Light from the broadband source splits at the fiber coupler between sample and reference arms; the sample arm routes through a collimator, polarization controller, scan lens, and galvano scanner to a focusing objective, with the return signal coupled through the spectrometer's diffraction grating onto the line-scan sensor.",
      fig2Caption:
        'Resolution characterization. Left: axial point-spread function from a mirror reflection, Gaussian-fit to FWHM = 2.16 px (2.59 µm in air; 1.87 µm in tissue, n=1.38), matching the 0.44λ₀²/(nΔλ) prediction. Right: lateral resolution from a USAF 1951 target en face image via peak-and-trough intensity detection, measuring 4.4 µm.',
      fig3Caption:
        "Thickness and target validation. Top: a 3.37 µm photoresist step spin-coated on a silica chip, shown as a 3D volume render and B-scan — the OCT-measured step height matches the known coating thickness. Bottom: a USAF 1951 resolution target's chrome bar pattern, reconstructed as a 3D isosurface directly from OCT volume data.",
      fig4Caption:
        'B-scan of the cornea. The bright arc marks the anterior corneal surface; the moderately scattering tissue beneath is the stroma, with a fainter second interface visible deeper in the scan. Speckle is characteristic of coherent OCT imaging, not a system artifact.',
      fig1Src: 'images/research/as-oct-fig1.jpg',
      fig2Src: 'images/research/as-oct-fig2.jpg',
      fig3Src: 'images/research/as-oct-fig3.jpg',
      fig4Src: 'images/research/as-oct-fig4.jpg',
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
      period: '2025 – Present',
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
