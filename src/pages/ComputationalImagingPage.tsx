export default function ComputationalImagingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Computational Imaging Research</h1>
        
        <div className="prose lg:prose-xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Advanced Computational Imaging Techniques</h2>
            <p className="text-gray-800 mb-6">
              Our research focuses on developing cutting-edge computational algorithms for image 
              enhancement in challenging environments. We leverage deep learning and advanced signal 
              processing techniques to push the boundaries of what's possible in computational imaging.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <img
                src="/websiteRJ/images/research/fig1.jpg"
                alt="Deep Learning Models"
                className="rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Key Research Areas</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Deep learning models for image reconstruction from degraded input</li>
                  <li>Multi-dimensional data processing pipelines for complex scene analysis</li>
                  <li>Real-time image processing techniques for embedded systems</li>
                  <li>Novel algorithms for image enhancement and restoration</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Current Projects</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Deep Learning-Based Image Reconstruction</h4>
                <p className="text-gray-700">
                  Developing neural network architectures specifically designed for handling 
                  degraded or incomplete image data, with applications in medical imaging 
                  and remote sensing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Real-Time Processing Systems</h4>
                <p className="text-gray-700">
                  Creating efficient algorithms and processing pipelines for real-time 
                  image enhancement on resource-constrained devices.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}