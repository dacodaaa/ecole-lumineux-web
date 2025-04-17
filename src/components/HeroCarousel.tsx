
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Students learning in classroom"
  },
  {
    src: "https://images.unsplash.com/photo-1509191436522-d296cf87d244?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80", 
    alt: "Group of diverse students"
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Students in technology class"
  },
  {
    src: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80",
    alt: "Children in educational activity"
  }
];

export const HeroCarousel = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }
  };

  const goToPrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
    }
  };

  // Auto-play effect
  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-[100vh] min-h-[700px] overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            onTransitionEnd={handleTransitionEnd}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transform scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className={`max-w-4xl ${language === "ar" ? "rtl" : "ltr"}`}>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
            {t("hero.welcome")}
          </h2>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            NBS <span className="text-nbs-gold">School</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12">
            {t("hero.slogan")}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#services"
              className="bg-nbs-purple px-8 py-3 rounded-md text-white font-semibold hover:bg-nbs-purple-dark transition duration-300"
            >
              {t("nav.services")}
            </a>
            <button
              onClick={scrollToContact}
              className="bg-transparent border-2 border-white px-8 py-3 rounded-md text-white font-semibold hover:bg-white hover:text-nbs-purple-dark transition duration-300"
            >
              {language === "fr" ? "S'inscrire" : "التسجيل"}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 text-white transition duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 text-white transition duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-12"
                : "bg-white bg-opacity-50 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
