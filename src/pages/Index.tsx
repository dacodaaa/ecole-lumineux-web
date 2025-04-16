import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroCarousel />
        <AboutSection />
        <ServicesCarousel />
        <ContactSection />
        <Footer />
        
        {/* Back to Top Button */}
        <a 
          href="#home" 
          className="fixed bottom-8 right-8 bg-nbs-purple text-white p-3 rounded-full shadow-lg hover:bg-nbs-purple-dark transition-colors duration-300 z-40"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </a>
      </div>
    </LanguageProvider>
  );
};

export default Index;
