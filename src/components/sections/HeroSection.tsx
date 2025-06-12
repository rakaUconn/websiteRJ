import { Link } from 'react-router-dom';
import { contentService } from '../../services/contentService';

interface HeroSectionProps {
  customContent?: {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
  };
}

export default function HeroSection({ customContent }: HeroSectionProps) {
  const personalInfo = contentService.getPersonalInfo();
  
  const content = {
    title: customContent?.title || personalInfo.name,
    subtitle: customContent?.subtitle || personalInfo.title,
    description: customContent?.description || personalInfo.description,
    image: customContent?.image || personalInfo.profileImage,
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {content.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-200 mb-6">
              {content.subtitle}
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              {content.description}
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Contact Me
              </a>
              <Link 
                to="/research" 
                className="border border-white hover:bg-white hover:text-blue-900 text-white px-6 py-2 rounded-lg transition-colors"
              >
                View Research
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={content.image}
              alt={`${content.title} - ${content.subtitle}`}
              className="rounded-lg shadow-xl max-w-sm w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}