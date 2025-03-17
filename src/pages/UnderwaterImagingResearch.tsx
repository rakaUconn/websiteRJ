import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UnderwaterImagingResearch() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <Link 
            to="/research" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Research
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">High-speed 3D Integral Imaging for Sensing and Visualization of Dynamic Underwater Events</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Research Overview</h2>
            <p className="text-gray-700 mb-4">
              Our research focuses on developing cutting-edge 3D integral imaging systems for underwater environments. 
              This innovative technology enables high-speed capture and visualization of dynamic underwater phenomena, 
              overcoming traditional limitations in underwater imaging.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Imaging System</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Custom-designed microlens array system</li>
                  <li>High-speed camera (&gt;500 fps)</li>
                  <li>Specialized underwater housing</li>
                  <li>LED-based illumination system</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Processing Capabilities</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Real-time 3D reconstruction</li>
                  <li>Advanced denoising algorithms</li>
                  <li>Turbidity compensation</li>
                  <li>Motion tracking capabilities</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Innovations</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Underwater Optimization</h3>
                <p className="text-gray-700">
                  Our microlens arrays are specifically optimized for underwater light propagation, 
                  taking into account the unique challenges of underwater imaging such as scattering 
                  and absorption.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">High-Speed Acquisition</h3>
                <p className="text-gray-700">
                  The system achieves synchronized image acquisition at over 500 frames per second, 
                  enabling the capture of rapid underwater phenomena with unprecedented detail.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Advanced Algorithms</h3>
                <p className="text-gray-700">
                  Novel computational reconstruction algorithms compensate for water-induced distortions 
                  and provide real-time 3D visualization capabilities.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Applications</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border p-4 rounded-lg">
                <h3 className="font-medium mb-2">Marine Biology</h3>
                <p className="text-gray-700">
                  Study of marine life behavior and interactions in their natural habitat.
                </p>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-medium mb-2">Underwater Robotics</h3>
                <p className="text-gray-700">
                  Enhanced navigation and object detection for autonomous underwater vehicles.
                </p>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-medium mb-2">Environmental Monitoring</h3>
                <p className="text-gray-700">
                  Real-time monitoring of underwater ecosystems and environmental changes.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}