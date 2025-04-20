export default function DynamicPolarimetricImagingResearch() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Capturing the Dynamic World in 3D and Polarization
        </h1>

        {/* Introduction */}
        <section className="prose lg:prose-xl mx-auto mb-12">
          <p className="text-gray-800">
            The ability to perceive depth is fundamental for interacting with our surroundings, and in many critical applications, 
            understanding the polarization state of light can provide even richer information about the materials and surfaces we observe.
            While traditional 3D integral imaging has proven useful for depth reconstruction, it often falters in challenging environments.
          </p>
          <p className="text-gray-800">
            Our latest research, as detailed in "Dynamic polarimetric integral imaging v3.pdf", tackles this challenge, introducing a novel 
            dynamic polarimetric 3D integral imaging profilometry technique. This breakthrough allows for the simultaneous capture of both 
            depth and polarization information from moving objects.
          </p>
        </section>

        {/* The Challenge Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">The Bottleneck: Capturing Dynamic Polarization</h2>
          <div className="prose lg:prose-xl mx-auto">
            <p className="text-gray-800">
              Conventional polarimetric profilometry typically requires capturing multiple polarized elemental images sequentially 
              using a rotating polarizer. This sequential acquisition is problematic for dynamic scenes, as the objects may move 
              between captures, leading to inaccurate polarization measurements and hindering real-time analysis.
            </p>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Innovative Approach: Polarization Multiplexing</h2>
          <div className="prose lg:prose-xl mx-auto">
            <p className="text-gray-800">
              To overcome these limitations, we propose a dynamic polarimetric 3D integral imaging approach that leverages 
              a conventional camera array. The key innovation lies in strategically assigning distinct polarization filter 
              orientations (e.g., 0°, 45°, 90°, and 135°) to each individual image sensor within the array.
            </p>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">How It Works: A Glimpse into the Methodology</h2>
          <div className="prose lg:prose-xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Stokes Parameters</h3>
              <div className="space-y-4 font-mono">
                <p>S₀(xᵢⱼ, yᵢⱼ) = I₀°(xᵢⱼ, yᵢⱼ) + I₉₀°(xᵢⱼ, yᵢⱼ)</p>
                <p>S₁(xᵢⱼ, yᵢⱼ) = I₀°(xᵢⱼ, yᵢⱼ) − I₉₀°(xᵢⱼ, yᵢⱼ)</p>
                <p>S₂(xᵢⱼ, yᵢⱼ) = I₄₅°(xᵢⱼ, yᵢⱼ) − I₁₃₅°(xᵢⱼ, yᵢⱼ)</p>
                <p className="text-sm text-gray-600">where (i, j) are the sensor indices</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Degree of Linear Polarization (DoLP)</h3>
              <div className="font-mono">
                <p>DoLP(xᵢⱼ, yᵢⱼ) = √(S₁(xᵢⱼ, yᵢⱼ)² + S₂(xᵢⱼ, yᵢⱼ)²) / S₀(xᵢⱼ, yᵢⱼ)</p>
                <p className="text-sm text-gray-600 mt-2">DoLP values range from 0 (unpolarized) to 1 (fully polarized)</p>
              </div>
            </div>

            <ul className="list-disc pl-6 space-y-4">
              <li className="mb-4">
                <strong>Capturing Polarized Elemental Images:</strong> Using our camera array with assigned polarizer angles, 
                we simultaneously capture multiple views of the dynamic scene.
              </li>
              <li className="mb-4">
                <strong>Intensity Normalization:</strong> Polarized intensities are normalized based on the ray path length 
                from the lens to the object.
              </li>
              <li className="mb-4">
                <strong>Volumetric Reconstruction:</strong> By combining the normalized polarized elemental images from all perspectives, 
                we reconstruct a 3D polarimetric profile of the scene.
              </li>
            </ul>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Real-Time Results Under Natural Light</h2>
          <div className="prose lg:prose-xl mx-auto">
            <p className="text-gray-800">
              Our experiments with a dynamic scene containing both moving and static objects under natural illumination 
              demonstrated successful reconstruction of both depth maps and 3D polarimetric information at 10 frames per second.
            </p>
          </div>
        </section>

        {/* Future Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">The Future is Dynamic and Polarized</h2>
          <div className="prose lg:prose-xl mx-auto">
            <p className="text-gray-800">
              Our work demonstrates a significant advancement in the field of 3D imaging, providing a cost-effective 
              and practically implementable solution for real-time 3D polarimetric reconstruction in dynamic environments.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Potential Applications</h3>
            <ul className="list-disc pl-6">
              <li>Marine Environmental Monitoring</li>
              <li>Automotive Remote Sensing</li>
              <li>Defense and Security</li>
              <li>Surveillance</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}