import { BookOpen, Microscope, Mail, Award, GraduationCap, FileText, Brain, Lightbulb } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Rakesh Joshi</h1>
              <h2 className="text-xl md:text-2xl text-blue-200 mb-6">Optical Research Engineer & Photonics Specialist</h2>
              <p className="text-lg text-gray-200 mb-8">
                Experienced researcher specializing in 3D imaging, computational imaging, optical microscopy, and optical metrology with a focus on advanced optical system design.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Contact Me
                </a>
                <a href="#research" className="border border-white hover:bg-white hover:text-blue-900 text-white px-6 py-2 rounded-lg transition-colors">
                  View Research
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500"
                alt="Optical Research"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="text-blue-600" />
                Academic Background
              </h3>
              <ul className="space-y-6">
                <li>
                  <p className="font-medium text-lg">Doctor of Philosophy (PhD) in Electrical and Computer Engineering</p>
                  <p className="text-blue-600">University of Connecticut, USA</p>
                  <p className="text-gray-700 mt-2">Dissertation: "Optical signal detection and image sensing in scattering medium using Integral Imaging and Deep neural networks"</p>
                  <p className="text-gray-600 mt-1">Specialization: Photonics</p>
                </li>
                <li>
                  <p className="font-medium text-lg">Master of Science in Electrical and Computer Engineering</p>
                  <p className="text-blue-600">University of Connecticut, USA</p>
                  <p className="text-gray-700 mt-2">Focus: Optical imaging, Polarization imaging, Computational Optics, 3D Imaging</p>
                </li>
                <li>
                  <p className="font-medium text-lg">Master of Technology in Applied Optics</p>
                  <p className="text-blue-600">Indian Institute of Technology Delhi, India</p>
                  <p className="text-gray-700 mt-2">Dissertation: "Development of high-resolution wide-field fiber optic micro-endoscopic system"</p>
                </li>
                <li>
                  <p className="font-medium text-lg">Master of Science in Physics</p>
                  <p className="text-blue-600">GBPUA&T Pantnagar, India</p>
                  <p className="text-gray-700 mt-2">Dissertation: "Quantum computation using teleportation and single-qubit gates"</p>
                </li>
                <li>
                  <p className="font-medium text-lg">Bachelor of Science</p>
                  <p className="text-blue-600">LSM PG college, Kumaon University Pithoragarh, India</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Brain className="text-blue-600" />
                Research Focus
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Optical Signal Detection & Image Sensing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Integral Imaging & Deep Neural Networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>3D Imaging Systems & Computational Optics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Polarization Imaging & Optical Microscopy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>High-Resolution Fiber Optic Systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Quantum Computing & Teleportation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Portfolio */}
      <section id="research" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Research Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500"
                alt="Quantum Optics Research"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">3D Imaging Systems</h3>
                <p className="text-gray-600 mb-4">
                  Developed advanced 3D imaging systems for high-precision measurements and analysis.
                </p>
                <div className="flex items-center text-blue-600">
                  <Microscope className="w-5 h-5 mr-2" />
                  <span>View Project Details</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500"
                alt="Optical Microscopy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Computational Imaging</h3>
                <p className="text-gray-600 mb-4">
                  Implemented innovative computational imaging techniques for enhanced image reconstruction and analysis.
                </p>
                <div className="flex items-center text-blue-600">
                  <Microscope className="w-5 h-5 mr-2" />
                  <span>View Project Details</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500"
                alt="Photonic Devices"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Optical Microscopy</h3>
                <p className="text-gray-600 mb-4">
                  Designed and optimized optical microscopy systems for high-resolution imaging and characterization.
                </p>
                <div className="flex items-center text-blue-600">
                  <Microscope className="w-5 h-5 mr-2" />
                  <span>View Project Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Publications & Patents</h2>
          
          {/* Journal Publications */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="text-blue-600" />
              Journal Publications
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-2">[2024] Joshi, R., Usmani, K., Krishnan, G., Blackmon, F., & Javidi, B. (2024). Underwater object detection and temporal signal detection in turbid water using 3D-integral imaging and deep learning. <span className="italic">Optics Express</span>, 32(2), 1789-1801.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-2">[2021] Krishnan, G., Joshi, R., O'Connor, T., & Javidi, B. (2021). Optical signal detection in turbid water using multidimensional integral imaging with deep learning. <span className="italic">Optics Express</span>, 29(22), 35691-35701.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-2">[2021] Krishnan, G., Huang, Y., Joshi, R., O'Connor, T., & Javidi, B. (2021). Spatio-temporal continuous gesture recognition under degraded environments: performance comparison between 3D integral imaging (InIm) and RGB-D sensors. <span className="italic">Optics Express</span>, 29(19), 30937-30951.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-2">[2020] Joshi, R., Krishnan, G., O'Connor, T., & Javidi, B. (2020). Signal detection in turbid water using temporally encoded polarimetric integral imaging. <span className="italic">Optics Express</span>, 28(24), 36033-36045.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-2">[2020] Krishnan, G., Joshi, R., O'Connor, T., Pla, F., & Javidi, B. (2020). Human gesture recognition under degraded environments using 3D-integral imaging and deep learning. <span className="italic">Optics Express</span>, 28(13), 19711-19725.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-2">[2020] Joshi, R., O'Connor, T., Shen, X., Wardlaw, M., & Javidi, B. (2020). Optical 4D signal detection in turbid water by multi-dimensional integral imaging using spatially distributed and temporally encoded multiple light sources. <span className="italic">Optics Express</span>, 28(7), 10477-10490.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-2">[2019] Singh, V., Joshi, R., Tayal, S., & Mehta, D. S. (2019). Speckle-free common-path quantitative phase imaging with high temporal phase stability using a partially spatially coherent multi-spectral light source. <span className="italic">Laser Physics Letters</span>, 16(2), 025601.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-2">[2019] Usmani, K., Ahmad, A., Joshi, R., Dubey, V., Butola, A., & Mehta, D. S. (2019). Relationship between the source size at the diffuser plane and the longitudinal spatial coherence function of the optical coherence microscopy system. <span className="italic">JOSA A</span>, 36(12), D41-D46.</p>
              </div>
            </div>
          </div>

          {/* Conference Papers */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Lightbulb className="text-blue-600" />
              Conference Papers
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-2">[2023] Joshi, R., & Javidi, B. (2023, August). Three-dimensional Integral Imaging Visualization in Scattering Medium with Active Polarization Descattering. In <span className="italic">Computational Optical Sensing and Imaging</span> (pp. JTu4A-39).</p>
              </div>
            </div>
          </div>

          {/* Patents */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="text-blue-600" />
              Patents
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-2">[2024] METHOD FOR OPTICAL SIGNAL DETECTION IN A LIQUID AND ARTICLES COMPRISING THE SAME. U.S. Provisional Application No. 63/617,353, filed January 03, 2024; Patent pending.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Lightbulb className="text-blue-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Advanced Optical Systems</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 3D Imaging & Digital Holography</li>
                <li>• Computational Imaging</li>
                <li>• Integral Imaging (Lightfield)</li>
                <li>• Two-Photon Direct Laser Writing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileText className="text-blue-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Optical Physics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fourier Optics</li>
                <li>• Polarization Optics</li>
                <li>• Experimental Optical Physics</li>
                <li>• Computational Lithography</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="text-blue-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Optical System Design</li>
                <li>• Optical Microscopy</li>
                <li>• Optical Imaging</li>
                <li>• Advanced Metrology</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileText className="text-blue-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Optical System Design</li>
                <li>• Image Processing</li>
                <li>• System Integration</li>
                <li>• Data Analysis</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="text-blue-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Research Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Zemax OpticStudio</li>
                <li>• MATLAB & Python</li>
                <li>• LabVIEW</li>
                <li>• Infrastructure as Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {/* Postdoctoral Researcher */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold">Postdoctoral Researcher</h3>
                <div className="text-blue-600">University of Houston (Sep 2024-PRESENT)</div>
              </div>
              <p className="text-gray-700">Developing advanced optical tomography techniques with applications from underwater exploration to medical diagnostics.</p>
            </div>

            {/* Teaching Assistant */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold">Teaching Assistant</h3>
                <div className="text-blue-600">University of Connecticut (2021-2023)</div>
              </div>
              <p className="text-gray-700 mb-4">Courses: Digital image processing, Electrical Circuits, and Electrical and Computer Engineering Principles</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Prepare reading materials and resources for courses</li>
                <li>Lead tutorial or lab sessions under the supervision of the professor</li>
                <li>Demonstrate experiments or problem-solving techniques in lab settings</li>
                <li>Hold regular office hours to assist students with course material</li>
                <li>Occasionally deliver guest lectures if qualified and when necessary</li>
              </ul>
            </div>

            {/* Research Assistant UConn */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold">Research Assistant</h3>
                <div className="text-blue-600">University of Connecticut (Jan 2019-PRESENT)</div>
              </div>
              <p className="text-gray-700 mb-4">Development Focus: Crafting an optical signal detection system</p>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Technique Utilized:</p>
                  <p className="text-gray-700">3D integral imaging, Polarimetric Imaging, and Deep Learning</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Challenges Addressed:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Occlusion: Objects blocking the line of sight to the signal</li>
                    <li>Turbidity: Cloudy or unclear environments, such as turbid water, that scatter light</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600 w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">rjoshi4@cougarnet.uh.edu</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <GraduationCap className="text-blue-600 w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Academic Affiliation</h3>
                  <p className="text-gray-600">UH College of Optometry</p>
                  <p className="text-gray-600">University of Houston</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Award className="text-blue-600 w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Professional Memberships</h3>
                  <p className="text-gray-600">OSA, SPIE, IEEE Photonics Society</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Dr. Rakesh Joshi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;