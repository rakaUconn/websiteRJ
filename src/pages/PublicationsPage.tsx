import { FileText } from 'lucide-react';

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Publications & Patents</h1>
        
        {/* Journal Publications */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FileText className="text-blue-600" />
            Journal Publications
          </h2>
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
          </div>
        </div>
        
        {/* Conference Papers */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FileText className="text-blue-600" />
            Conference Papers
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-800 mb-2">[2023] Joshi, R., & Javidi, B. (2023, August). Three-dimensional Integral Imaging Visualization in Scattering Medium with Active Polarization Descattering. In <span className="italic">Computational Optical Sensing and Imaging</span> (pp. JTu4A-39).</p>
            </div>
          </div>
        </div>

        {/* Patents */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FileText className="text-blue-600" />
            Patents
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-800 mb-2">[2024] METHOD FOR OPTICAL SIGNAL DETECTION IN A LIQUID AND ARTICLES COMPRISING THE SAME. U.S. Provisional Application No. 63/617,353, filed January 03, 2024; Patent pending.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}