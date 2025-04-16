
import { createContext, useState, useContext, ReactNode } from "react";

type Language = "fr" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  // Navigation
  "nav.home": {
    fr: "Accueil",
    ar: "الرئيسية"
  },
  "nav.about": {
    fr: "À Propos",
    ar: "من نحن"
  },
  "nav.services": {
    fr: "Services",
    ar: "خدماتنا"
  },
  "nav.contact": {
    fr: "Contact",
    ar: "اتصل بنا"
  },
  // Hero
  "hero.welcome": {
    fr: "Bienvenue à",
    ar: "مرحبًا بكم في"
  },
  "hero.slogan": {
    fr: "Éducation de Qualité pour un Avenir Brillant",
    ar: "تعليم عالي الجودة لمستقبل مشرق"
  },
  // About
  "about.title": {
    fr: "À Propos de Nous",
    ar: "من نحن"
  },
  "about.subtitle": {
    fr: "Excellence Éducative",
    ar: "التميز التعليمي"
  },
  "about.description": {
    fr: "NBS School est une institution éducative de premier plan, dédiée à fournir des programmes d'apprentissage innovants qui stimulent la croissance intellectuelle, créative et personnelle de nos étudiants. Notre approche pédagogique unique combine des méthodes d'enseignement traditionnelles et modernes, préparant les étudiants à exceller dans un monde en constante évolution.",
    ar: "مدرسة NBS هي مؤسسة تعليمية رائدة، مكرسة لتوفير برامج تعليمية مبتكرة تحفز النمو الفكري والإبداعي والشخصي لطلابنا. يجمع نهجنا التعليمي الفريد بين طرق التدريس التقليدية والحديثة، مما يعد الطلاب للتفوق في عالم دائم التغير."
  },
  // Services
  "services.title": {
    fr: "Nos Services",
    ar: "خدماتنا"
  },
  "services.subtitle": {
    fr: "Des programmes éducatifs adaptés à tous les besoins",
    ar: "برامج تعليمية تلبي جميع الاحتياجات"
  },
  // Service Names
  "service.prescolaire": {
    fr: "Préscolaire",
    ar: "ما قبل المدرسة"
  },
  "service.soutien": {
    fr: "Cours de soutiens",
    ar: "دروس الدعم"
  },
  "service.langues": {
    fr: "Langues par niveau",
    ar: "اللغات حسب المستوى"
  },
  "service.tot": {
    fr: "TOT (Trainer of Trainers)",
    ar: "تدريب المدربين"
  },
  "service.soroban": {
    fr: "Soroban",
    ar: "سوروبان"
  },
  "service.robotique": {
    fr: "Robotique",
    ar: "الروبوتات"
  },
  "service.formation": {
    fr: "Formation Professionnelle",
    ar: "التدريب المهني"
  },
  // Service Descriptions
  "service.prescolaire.desc": {
    fr: "Nos programmes préscolaires sont conçus pour stimuler la curiosité naturelle des enfants, développer leurs compétences sociales et les préparer à la réussite scolaire future.",
    ar: "برامجنا ما قبل المدرسية مصممة لتحفيز الفضول الطبيعي للأطفال، وتطوير مهاراتهم الاجتماعية، وإعدادهم للنجاح الأكاديمي المستقبلي."
  },
  "service.soutien.desc": {
    fr: "Des cours de soutien personnalisés pour aider les élèves à surmonter leurs difficultés et à exceller dans différentes matières académiques.",
    ar: "دروس دعم مخصصة لمساعدة الطلاب على التغلب على الصعوبات والتفوق في مختلف المواد الأكاديمية."
  },
  "service.langues.desc": {
    fr: "Apprentissage des langues adapté à tous les niveaux, avec des méthodes pédagogiques innovantes et des enseignants natifs.",
    ar: "تعلم اللغات مناسب لجميع المستويات، مع أساليب تعليمية مبتكرة ومعلمين ناطقين باللغة الأصلية."
  },
  "service.tot.desc": {
    fr: "Programme spécialisé pour former les futurs formateurs, développant les compétences pédagogiques et les techniques d'enseignement efficaces.",
    ar: "برنامج متخصص لتدريب المدربين المستقبليين، وتطوير المهارات التعليمية وتقنيات التدريس الفعالة."
  },
  "service.soroban.desc": {
    fr: "Méthode japonaise traditionnelle de calcul mental qui améliore les compétences en mathématiques et la concentration des élèves.",
    ar: "طريقة يابانية تقليدية للحساب الذهني تحسن مهارات الرياضيات والتركيز لدى الطلاب."
  },
  "service.robotique.desc": {
    fr: "Des ateliers de robotique pour développer la pensée logique, la créativité et les compétences en résolution de problèmes chez les élèves.",
    ar: "ورش عمل الروبوتات لتطوير التفكير المنطقي والإبداع ومهارات حل المشكلات لدى الطلاب."
  },
  "service.formation.desc": {
    fr: "Des formations professionnelles qualifiantes pour préparer nos étudiants à réussir sur le marché du travail avec des compétences pratiques et théoriques.",
    ar: "تدريب مهني مؤهل لإعداد طلابنا للنجاح في سوق العمل بمهارات عملية ونظرية."
  },
  // Contact
  "contact.title": {
    fr: "Contactez-Nous",
    ar: "اتصل بنا"
  },
  "contact.subtitle": {
    fr: "Nous sommes à votre écoute",
    ar: "نحن هنا للاستماع إليك"
  },
  "contact.name": {
    fr: "Nom",
    ar: "الاسم"
  },
  "contact.email": {
    fr: "Email",
    ar: "البريد الإلكتروني"
  },
  "contact.message": {
    fr: "Message",
    ar: "الرسالة"
  },
  "contact.send": {
    fr: "Envoyer",
    ar: "إرسال"
  },
  "contact.address": {
    fr: "Adresse",
    ar: "العنوان"
  },
  "contact.phone": {
    fr: "Téléphone",
    ar: "الهاتف"
  },
  "contact.email.label": {
    fr: "Courriel",
    ar: "البريد الإلكتروني"
  },
  // Footer
  "footer.rights": {
    fr: "© 2025 NBS School. Tous droits réservés.",
    ar: "© 2025 مدرسة NBS. جميع الحقوق محفوظة."
  },
  "footer.location": {
    fr: "Notre Emplacement",
    ar: "موقعنا"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[key as keyof typeof translations]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
