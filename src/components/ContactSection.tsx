
import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "@/components/ui/sonner";

export const ContactSection = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare the email content with template
      const emailContent = {
        to: "nbs.school.admi@gmail.com",
        subject: "Contact via website",
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          
          Message:
          ${formData.message}
        `
      };
      
      // In a real implementation, you would send this to your backend
      console.log("Sending email:", emailContent);
      
      // Simulate email sending with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success(language === "fr" 
        ? "Message envoyé avec succès!" 
        : "تم إرسال الرسالة بنجاح!");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(language === "fr" 
        ? "Erreur lors de l'envoi du message. Veuillez réessayer." 
        : "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className={`py-20 bg-gray-50 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-nbs-purple mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                {t("contact.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nbs-purple"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                {t("contact.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nbs-purple"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nbs-purple resize-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-nbs-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-nbs-purple-dark transition duration-300 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting 
                ? (language === "fr" ? "Envoi en cours..." : "جاري الإرسال...")
                : t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
