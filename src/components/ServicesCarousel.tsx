
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface Service {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

export const ServicesCarousel = () => {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [openService, setOpenService] = useState<Service | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const services: Service[] = [
    {
      id: "prescolaire",
      name: t("service.prescolaire"),
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1122&q=80",
      description: t("service.prescolaire.desc")
    },
    {
      id: "soutien",
      name: t("service.soutien"),
      imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: t("service.soutien.desc")
    },
    {
      id: "langues",
      name: t("service.langues"),
      imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: t("service.langues.desc")
    },
    {
      id: "tot",
      name: t("service.tot"),
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: t("service.tot.desc")
    },
    {
      id: "soroban",
      name: t("service.soroban"),
      imageUrl: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80",
      description: t("service.soroban.desc")
    },
    {
      id: "robotique",
      name: t("service.robotique"),
      imageUrl: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: t("service.robotique.desc")
    },
    {
      id: "formation",
      name: t("service.formation"),
      imageUrl: "https://images.unsplash.com/photo-1571260899304-425eee4c7efd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: t("service.formation.desc")
    },
  ];

  // Update active index when language changes
  useEffect(() => {
    setOpenService(null);
  }, [language]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const openServiceDetails = (service: Service) => {
    setOpenService(service);
  };

  const closeServiceDetails = () => {
    setOpenService(null);
  };

  // Calculate visible cards
  const getVisibleServices = () => {
    const visibleCount = 5; // Show 5 cards on larger screens
    const result = [];
    const servicesCount = services.length;
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % servicesCount;
      result.push({
        service: services[index],
        position: i - Math.floor(visibleCount / 2) // -2, -1, 0, 1, 2
      });
    }
    
    return result;
  };

  const visibleServices = getVisibleServices();

  // Get card styling based on position
  const getCardStyle = (position: number) => {
    switch (position) {
      case -2: // Far left
        return "opacity-40 scale-75 -translate-x-3/4 z-10";
      case -1: // Left
        return "opacity-60 scale-85 -translate-x-1/2 z-20";
      case 0: // Center
        return "opacity-100 scale-100 z-30";
      case 1: // Right
        return "opacity-60 scale-85 translate-x-1/2 z-20";
      case 2: // Far right
        return "opacity-40 scale-75 translate-x-3/4 z-10";
      default:
        return "opacity-0";
    }
  };

  return (
    <section id="services" className={`py-20 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-nbs-purple mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden py-20" ref={containerRef}>
          <div className="flex justify-center items-center h-[500px] relative">
            {visibleServices.map(({ service, position }, index) => (
              <div
                key={service.id}
                className={`absolute transition-all duration-500 ease-in-out cursor-pointer transform
                           ${getCardStyle(position)} hover:shadow-xl`}
                onClick={() => position === 0 && openServiceDetails(service)}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg w-[350px] h-[450px]">
                  <div className="relative h-[250px] overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                      {service.name}
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm line-clamp-3">
                      {service.description}
                    </p>
                    {position === 0 && (
                      <button 
                        className="mt-4 inline-block text-nbs-purple font-semibold"
                      >
                        {language === "fr" ? "En savoir plus" : "معرفة المزيد"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-nbs-purple hover:bg-nbs-purple hover:text-white transition duration-300"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-nbs-purple hover:bg-nbs-purple hover:text-white transition duration-300"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-nbs-purple w-8"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* Service Details Modal */}
        {openService && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className={`bg-white rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl ${language === "ar" ? "rtl" : "ltr"}`}>
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-nbs-purple">{openService.name}</h3>
                <button
                  onClick={closeServiceDetails}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
              
              <img
                src={openService.imageUrl}
                alt={openService.name}
                className="w-full h-64 object-cover rounded-lg my-4"
              />
              
              <p className="text-gray-700 leading-relaxed">{openService.description}</p>
              
              <div className="mt-8 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-nbs-purple-dark mb-2">
                  {language === "fr" ? "Pourquoi choisir ce service ?" : "لماذا تختار هذه الخدمة؟"}
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>{language === "fr" ? "Enseignants hautement qualifiés" : "مدرسين مؤهلين تأهيلا عاليا"}</li>
                  <li>{language === "fr" ? "Programmes personnalisés" : "برامج مخصصة"}</li>
                  <li>{language === "fr" ? "Suivi régulier" : "متابعة منتظمة"}</li>
                  <li>{language === "fr" ? "Méthodes pédagogiques innovantes" : "أساليب تعليمية مبتكرة"}</li>
                </ul>
              </div>
              
              <button
                onClick={closeServiceDetails}
                className="mt-6 bg-nbs-purple text-white px-6 py-2 rounded-lg font-semibold hover:bg-nbs-purple-dark transition duration-300"
              >
                {language === "fr" ? "Fermer" : "إغلاق"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
