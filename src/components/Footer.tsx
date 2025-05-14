
import { useLanguage } from "./LanguageContext";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  const { language, t } = useLanguage();
  
  return (
    <footer className={`bg-nbs-purple-dark text-white ${language === "ar" ? "rtl" : "ltr"}`}>
      {/* Map Section */}
      <div className="w-full h-[400px] relative">
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-nbs-purple-dark to-transparent h-20 z-10" />
        
        {/* Embed Google Maps iframe - Replace with actual location */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.692938372494!2d3.2427390241305813!3d36.72993517165726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e4fc2c8a93dc9%3A0xc98103e573355f0f!2zVHJhaW5pbmcgU2Nob29sIC0gTmJzIFNjaG9vbCDZhdiv2LHYs9ipINin2YTYqtiv2LHZitioINmI2KrYudmE2YrZhSDYp9mE2YTYutin2Ko!5e0!3m2!1sar!2sdz!4v1744890559747!5m2!1sar!2sdz"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="NBS School Location"
          
        ></iframe>
        
        {/* Location Overlay Card */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-nbs-purple p-6 rounded-xl shadow-xl z-20 max-w-sm w-full">
          <h3 className="text-xl font-bold mb-3 text-white">
            {t("footer.location")}
          </h3>
          <p className="mb-4">
              Hamiz, Alger
          </p>
          <a 
            href="https://www.google.com/maps/place/Training+School+-+Nbs+School+%D9%85%D8%AF%D8%B1%D8%B3%D8%A9+%D8%A7%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8+%D9%88%D8%AA%D8%B9%D9%84%D9%8A%D9%85+%D8%A7%D9%84%D9%84%D8%BA%D8%A7%D8%AA%E2%80%AD/@36.7299352,3.242739,17z/data=!3m1!4b1!4m6!3m5!1s0x128e4fc2c8a93dc9:0xc98103e573355f0f!8m2!3d36.7299309!4d3.2401641!16s%2Fg%2F11f2wltryg?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-nbs-purple px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition duration-300"
          >
            {language === "fr" ? "Voir sur Google Maps" : "عرض على خرائط جوجل"}
          </a>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-6">
            <div>
              <a href="#home" className="flex items-center">
                <img 
                  src="/lovable-uploads/0c45ca39-654e-441b-af5a-f643cb000a1f.png" 
                  alt="NBS School" 
                  className="h-16 bg-white rounded-full p-2" 
                />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              {language === "fr" 
                ? "NBS School, votre partenaire de confiance pour une éducation de qualité et un avenir brillant." 
                : "مدرسة NBS، شريكك الموثوق للتعليم الجيد ومستقبل مشرق."}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/nbsschoolalgerie" className="text-white hover:text-nbs-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} /> 
              </a>
              <span >Facebook</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-2">
              {language === "fr" ? "Liens Rapides" : "روابط سريعة"}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-2">
              {t("services.title")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("service.prescolaire")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("service.soutien")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("service.langues")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("service.tot")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("service.soroban")}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-2">
              {t("contact.title")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-nbs-gold mr-3">
                  {language === "fr" ? "Tél:" : "هاتف:"}
                </span>
                <span>0778 55 49 22</span>
              </li>
              <li className="flex items-start">
                <span className="text-nbs-gold mr-3">
                  {language === "fr" ? "Email:" : "بريد إلكتروني:"}
                </span>
                <span>nbs.school.admi@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-nbs-gold mr-3">
                  {language === "fr" ? "Adresse:" : "عنوان:"}
                </span>
                <span>Centre ville Hamiz , El Hamiz, Algeria</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};
