import { Mail, Building2, GraduationCap, Users } from 'lucide-react';

interface ContactInfo {
  email: string;
  academicAffiliation: {
    college: string;
    university: string;
  };
  professionalMemberships: string[];
}

export default function ContactSection() {
  const content: ContactInfo = {
    email: 'rjoshi4@cougarnet.uh.edu',
    academicAffiliation: {
      college: 'UH College of Optometry',
      university: 'University of Houston'
    },
    professionalMemberships: [
      'OSA',
      'SPIE',
      'IEEE Photonics Society'
    ]
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
        <div className="max-w-3xl mx-auto grid gap-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href={`mailto:${content.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                {content.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Academic Affiliation</h3>
              <div className="space-y-1">
                <p className="text-gray-800">{content.academicAffiliation.college}</p>
                <p className="text-gray-600">{content.academicAffiliation.university}</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Professional Memberships</h3>
              <div className="flex flex-wrap gap-2">
                {content.professionalMemberships.map((membership, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                  >
                    {membership}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}