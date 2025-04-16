
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  label: string;
  onClick: () => void;
}

const NavLink = ({ href, label, onClick }: NavLinkProps) => (
  <a
    href={href}
    onClick={onClick}
    className="block py-2 px-4 hover:text-nbs-purple-light transition duration-200"
  >
    {label}
  </a>
);

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "ar" : "fr");
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img 
              src="/lovable-uploads/0c45ca39-654e-441b-af5a-f643cb000a1f.png" 
              alt="NBS School" 
              className="h-12 mr-2" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="#home" label={t("nav.home")} onClick={closeMobileMenu} />
            <NavLink href="#about" label={t("nav.about")} onClick={closeMobileMenu} />
            <NavLink href="#services" label={t("nav.services")} onClick={closeMobileMenu} />
            <NavLink href="#contact" label={t("nav.contact")} onClick={closeMobileMenu} />
            
            {/* Language Toggle */}
            <Button 
              onClick={toggleLanguage} 
              variant="outline" 
              className="ml-4 border-nbs-purple"
            >
              {language === "fr" ? "العربية" : "Français"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              onClick={toggleLanguage} 
              variant="outline" 
              className="mr-4 border-nbs-purple"
              size="sm"
            >
              {language === "fr" ? "العربية" : "Français"}
            </Button>
            
            <button 
              onClick={toggleMobileMenu} 
              className="text-nbs-purple"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
            <div className="flex flex-col py-2">
              <NavLink href="#home" label={t("nav.home")} onClick={closeMobileMenu} />
              <NavLink href="#about" label={t("nav.about")} onClick={closeMobileMenu} />
              <NavLink href="#services" label={t("nav.services")} onClick={closeMobileMenu} />
              <NavLink href="#contact" label={t("nav.contact")} onClick={closeMobileMenu} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
