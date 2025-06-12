import HeaderSection from './components/sections/HeaderSection';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import TechnicalSkillsSection from './components/sections/TechnicalSkillsSection';
import ProfessionalExperienceSection from './components/sections/ProfessionalExperienceSection';
import ContactSection from './components/sections/ContactSection';
import VisitCounter from './components/ui/VisitCounter';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <TechnicalSkillsSection />
      <ProfessionalExperienceSection />
      <ContactSection />
      
      {/* Visit counter in footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2025 Rakesh Joshi. All rights reserved.
          </div>
          <VisitCounter className="text-gray-400" />
        </div>
      </footer>
    </div>
  );
}

export default App;