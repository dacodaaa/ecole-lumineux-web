
import { useLanguage } from "./LanguageContext";

export const AboutSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="about" className={`py-20 bg-gray-50 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-nbs-purple mb-4">
              {t("about.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80" 
                  alt="About NBS School" 
                  className="rounded-lg shadow-xl object-cover w-full h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-nbs-purple p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-xl font-bold text-white">10+</p>
                  <p className="text-white">{language === "fr" ? "Années d'Excellence" : "سنوات من التميز"}</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-nbs-purple-dark mb-6">
                {language === "fr" ? "Notre Vision Éducative" : "رؤيتنا التعليمية"}
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t("about.description")}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-nbs-purple text-xl font-bold mb-2">
                    {language === "fr" ? "Excellence Académique" : "التميز الأكاديمي"}
                  </div>
                  <p className="text-gray-600">
                    {language === "fr" 
                      ? "Des programmes éducatifs de haute qualité pour tous les âges." 
                      : "برامج تعليمية عالية الجودة لجميع الأعمار."}
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-nbs-purple text-xl font-bold mb-2">
                    {language === "fr" ? "Approche Innovante" : "نهج مبتكر"}
                  </div>
                  <p className="text-gray-600">
                    {language === "fr" 
                      ? "Des méthodes pédagogiques modernes et adaptées." 
                      : "أساليب تعليمية حديثة ومتكيفة."}
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-nbs-purple text-xl font-bold mb-2">
                    {language === "fr" ? "Enseignants Qualifiés" : "مدرسون مؤهلون"}
                  </div>
                  <p className="text-gray-600">
                    {language === "fr" 
                      ? "Une équipe d'experts passionnés par l'éducation." 
                      : "فريق من الخبراء المتحمسين للتعليم."}
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-nbs-purple text-xl font-bold mb-2">
                    {language === "fr" ? "Développement Complet" : "التطوير الشامل"}
                  </div>
                  <p className="text-gray-600">
                    {language === "fr" 
                      ? "Focus sur les compétences académiques et personnelles." 
                      : "التركيز على المهارات الأكاديمية والشخصية."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
