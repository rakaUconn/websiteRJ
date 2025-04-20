import { Link } from 'react-router-dom';

export default function ThreeDImagingSystemsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">3D Imaging Systems Research</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Underwater Imaging Card */}
          <Link 
            to="/research/underwater-imaging"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img 
              src="/websiteRJ/images/research/fig1.jpg"
              alt="Underwater Imaging Research"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Underwater Imaging</h2>
              <p className="text-gray-600">
                Advanced integral imaging techniques for capturing and visualizing dynamic underwater 
                phenomena at high speeds. Explore our breakthroughs in underwater imaging technology.
              </p>
              <div className="mt-4 text-blue-600">Learn more →</div>
            </div>
          </Link>

          {/* Dynamic Polarimetric Card */}
          <Link 
            to="/research/dynamic-polarimetric-imaging"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img 
              src="/websiteRJ/images/research/fig2.jpg"
              alt="Dynamic Polarimetric Imaging Research"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Dynamic Polarimetric Imaging</h2>
              <p className="text-gray-600">
                Novel dynamic polarimetric 3D integral imaging profilometry technique for simultaneous 
                capture of depth and polarization information from moving objects.
              </p>
              <div className="mt-4 text-blue-600">Learn more →</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}