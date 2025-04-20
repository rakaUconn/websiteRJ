import { useState } from 'react';
import { Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResearchPage() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  
  const toggleProject = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">Research</h1>
        
        {/* 3D Imaging Systems */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Microscope className="mr-2 text-blue-600" size={24} />
            
              Optics
            
          </h2>

          {/* Project cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500"
                alt="Quantum Optics Research"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link to="/research/3d-imaging-systems" className="hover:text-blue-600 transition-colors">
                    3D Imaging Systems
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced integral imaging techniques for capturing and visualizing dynamic underwater phenomena at high speeds.
                </p>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => toggleProject(0)}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Microscope className="w-5 h-5 mr-2" />
                    <span>{expandedProject === 0 ? "Hide Details" : "View Project Details"}</span>
                  </button>
                  <div className="flex gap-2">
                    <Link 
                      to="/research/underwater-imaging"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>Underwater Imaging</span>
                      <span className="text-sm ml-1">→</span>
                    </Link>
                    <Link 
                      to="/research/dynamic-polarimetric-imaging"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>Dynamic Polarimetric</span>
                      <span className="text-sm ml-1">→</span>
                    </Link>
                  </div>
                </div>
                
                {expandedProject === 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-700 mb-4">
                      This research explores advanced integral imaging techniques for capturing and visualizing dynamic underwater phenomena at high speeds. 
                      The system combines specialized optical arrays with computational reconstruction algorithms to achieve real-time 3D visualization 
                      of rapidly changing underwater scenes, overcoming traditional limitations of underwater imaging such as scattering and absorption.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Key innovations include:
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-700">
                      <li>Custom-designed microlens arrays optimized for underwater light propagation</li>
                      <li>High-speed synchronized image acquisition system (&gt;500 fps)</li>
                      <li>Novel computational reconstruction algorithms that compensate for water-induced distortions</li>
                      <li>Real-time 3D visualization capabilities for dynamic monitoring applications</li>
                    </ul>
                    <p className="text-gray-700">
                      This technology has significant applications in marine biology research, underwater robotics, and environmental monitoring systems.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500"
                alt="Computational Imaging"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link to="/research/computational-imaging" className="hover:text-blue-600 transition-colors">
                    Computational Imaging
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Implemented innovative computational imaging techniques for enhanced image reconstruction and analysis.
                </p>
                <button 
                  onClick={() => toggleProject(1)}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Microscope className="w-5 h-5 mr-2" />
                  <span>{expandedProject === 1 ? "Hide Details" : "View Project Details"}</span>
                </button>
                
                {expandedProject === 1 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-medium mb-2">Advanced Computational Imaging Techniques</h4>
                    <p className="text-gray-700 mb-4">
                      Research focused on developing computational algorithms for image enhancement in challenging environments.
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-700">
                      <li>Deep learning models for image reconstruction from degraded input</li>
                      <li>Multi-dimensional data processing pipelines for complex scene analysis</li>
                      <li>Real-time image processing techniques for embedded systems</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500"
                alt="Optical Microscopy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link to="/research/optical-microscopy" className="hover:text-blue-600 transition-colors">
                    Optical Microscopy
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Designed and optimized optical microscopy systems for high-resolution imaging and characterization.
                </p>
                <button 
                  onClick={() => toggleProject(2)}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Microscope className="w-5 h-5 mr-2" />
                  <span>{expandedProject === 2 ? "Hide Details" : "View Project Details"}</span>
                </button>
                
                {expandedProject === 2 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-medium mb-2">High-Resolution Optical Microscopy Systems</h4>
                    <p className="text-gray-700 mb-4">
                      Development of specialized optical microscopy techniques for biological and material science applications.
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-700">
                      <li>Phase contrast and polarization microscopy for transparent specimens</li>
                      <li>Fluorescence imaging with specialized filter sets</li>
                      <li>Integration of computational techniques for super-resolution imaging</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}