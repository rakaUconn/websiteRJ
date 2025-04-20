export default function OpticalMicroscopyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Optical Microscopy Research</h1>
        
        <div className="prose lg:prose-xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">High-Resolution Optical Microscopy Systems</h2>
            <p className="text-gray-800 mb-6">
              Our research focuses on developing specialized optical microscopy techniques for biological 
              and material science applications. We combine advanced optics with innovative methodologies 
              to achieve unprecedented resolution and clarity in microscopic imaging.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <img
                src="/websiteRJ/images/research/fig2.jpg"
                alt="Advanced Microscopy Setup"
                className="rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Core Technologies</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Phase contrast and polarization microscopy for transparent specimens</li>
                  <li>Fluorescence imaging with specialized filter sets</li>
                  <li>Integration of computational techniques for super-resolution imaging</li>
                  <li>Advanced optical system design for improved resolution</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Research Focus Areas</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Super-Resolution Techniques</h4>
                <p className="text-gray-700">
                  Development of novel super-resolution microscopy methods that break the 
                  diffraction limit while maintaining high temporal resolution for live-cell imaging.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Multi-Modal Microscopy</h4>
                <p className="text-gray-700">
                  Integration of multiple imaging modalities (brightfield, fluorescence, 
                  phase contrast) in a single platform for comprehensive sample analysis.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Advanced Polarization Microscopy</h4>
                <p className="text-gray-700">
                  Utilizing polarization-based techniques for enhanced contrast and 
                  material characterization in biological and material samples.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}