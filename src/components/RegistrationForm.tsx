
import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { toast } from "@/components/ui/sonner";

interface RegistrationFormProps {
  onClose: () => void;
  serviceName?: string;
}

export const RegistrationForm = ({ onClose, serviceName = "" }: RegistrationFormProps) => {
  const { language } = useLanguage();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: serviceName || ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the email content with template
      const emailContent = {
        to: "nbs.school.admi@gmail.com",
        subject: `Inscription: ${formState.service || "FORMATION"}`,
        body: `
          Prénom: ${formState.firstName}
          Nom: ${formState.lastName}
          Email: ${formState.email}
          Téléphone: ${formState.phone}
          Formation choisie: ${formState.service}
        `
      };
      
      console.log("Sending registration email:", emailContent);
      
      // Simulate email sending with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(language === "fr" 
        ? "Votre inscription a été envoyée avec succès!" 
        : "تم إرسال تسجيلك بنجاح!");
      
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      console.error("Registration error:", err);
      toast.error(language === "fr" 
        ? "Une erreur s'est produite. Veuillez réessayer." 
        : "حدث خطأ. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className={`bg-white rounded-xl p-6 max-w-xl w-full max-h-[90vh] overflow-auto shadow-2xl ${language === "ar" ? "rtl" : "ltr"}`}>
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-nbs-purple">
            {language === "fr" ? "Formulaire d'inscription" : "نموذج التسجيل"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {language === "fr" ? "Prénom" : "الاسم الأول"}
              </label>
              <input
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nbs-purple focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {language === "fr" ? "Nom" : "اللقب"}
              </label>
              <input
                type="text"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nbs-purple focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === "fr" ? "Email" : "البريد الإلكتروني"}
            </label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nbs-purple focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === "fr" ? "Téléphone" : "الهاتف"}
            </label>
            <input
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nbs-purple focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === "fr" ? "Formation choisie" : "التكوين المختار"}
            </label>
            <select
              name="service"
              value={formState.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nbs-purple focus:border-transparent"
            >
              <option value="" disabled>
                {language === "fr" ? "Sélectionnez une formation" : "اختر التكوين"}
              </option>
              <option value="prescolaire">
                {language === "fr" ? "Préscolaire" : "ما قبل المدرسة"}
              </option>
              <option value="soutien">
                {language === "fr" ? "Cours de soutiens" : "دروس الدعم"}
              </option>
              <option value="langues">
                {language === "fr" ? "Langues par niveau" : "اللغات حسب المستوى"}
              </option>
              <option value="developpement">
                {language === "fr" ? "Développement personnel" : "تطوير الذات"}
              </option>
              <option value="soroban">
                {language === "fr" ? "Soroban" : "سوروبان"}
              </option>
              <option value="informatique">
                {language === "fr" ? "Informatique" : "معلوماتية"}
              </option>
              <option value="formation">
                {language === "fr" ? "Formation Professionnelle" : "التدريب المهني"}
              </option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              {language === "fr" ? "Annuler" : "إلغاء"}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-nbs-purple text-white rounded-md hover:bg-nbs-purple-dark disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                language === "fr" ? "Envoi en cours..." : "جاري الإرسال..."
              ) : (
                language === "fr" ? "Envoyer" : "إرسال"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
