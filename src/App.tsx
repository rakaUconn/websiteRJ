import HeaderSection from './components/sections/HeaderSection';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import TechnicalSkillsSection from './components/sections/TechnicalSkillsSection';
import ProfessionalExperienceSection from './components/sections/ProfessionalExperienceSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <TechnicalSkillsSection />
      <ProfessionalExperienceSection />
      <ContactSection />
    </div>
  );
}

export default App;