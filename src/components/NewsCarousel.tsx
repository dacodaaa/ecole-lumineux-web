
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Placeholder news images that will be replaced later
const newsImages = [
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "News 1",
    title: "New Course Announcement"
  },
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "News 2",
    title: "Technology Workshop"
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "News 3",
    title: "Student Achievement"
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "News 4",
    title: "Programming Contest"
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "News 5",
    title: "Open Day Event"
  }
];

export const NewsCarousel = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % newsImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-nbs-purple mb-4">
            {language === "fr" ? "Actualité" : "الجديد"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === "fr" 
              ? "Restez informés des dernières actualités et événements de NBS School" 
              : "ابق على اطلاع بأحدث الأخبار والفعاليات في مدرسة NBS"}
          </p>
        </div>
        
        <div className="relative">
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <CarouselContent>
              {newsImages.map((news, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                      <div className="relative">
                        <AspectRatio ratio={16/9}>
                          <img
                            src={news.src}
                            alt={news.alt}
                            className="object-cover w-full h-full"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                          <h3 className="text-white text-xl font-semibold">
                            {news.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-gray-600 line-clamp-3">
                          {language === "fr" 
                            ? "Cliquez pour en savoir plus sur cet événement." 
                            : "انقر لمعرفة المزيد عن هذا الحدث."}
                        </p>
                        <a 
                          href="#" 
                          className="mt-3 inline-block text-nbs-purple hover:underline"
                        >
                          {language === "fr" ? "Lire plus" : "اقرأ المزيد"}
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
