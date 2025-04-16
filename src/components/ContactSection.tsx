
import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    // For this demo, we'll just console log the data
    console.log("Form submitted:", formData);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    
    // Show success message (in a real app you'd use a toast notification)
    alert(language === "fr" ? "Message envoyé avec succès!" : "تم إرسال الرسالة بنجاح!");
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
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
              >
                {t("contact.send")}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-nbs-purple-dark mb-6">
                {language === "fr" ? "Informations de Contact" : "معلومات الاتصال"}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-nbs-purple bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin className="text-nbs-purple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t("contact.address")}</h4>
                    <p className="text-gray-600">123 Rue Principale, Casablanca, Maroc</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-nbs-purple bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone className="text-nbs-purple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t("contact.phone")}</h4>
                    <p className="text-gray-600">+212 5xx-xxxxxx</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-nbs-purple bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail className="text-nbs-purple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t("contact.email.label")}</h4>
                    <p className="text-gray-600">contact@nbsschool.ma</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Opening Hours */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-nbs-purple-dark mb-6">
                {language === "fr" ? "Heures d'Ouverture" : "ساعات العمل"}
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">{language === "fr" ? "Lundi - Vendredi" : "الإثنين - الجمعة"}</span>
                  <span className="font-semibold text-gray-900">8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{language === "fr" ? "Samedi" : "السبت"}</span>
                  <span className="font-semibold text-gray-900">9h00 - 15h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{language === "fr" ? "Dimanche" : "الأحد"}</span>
                  <span className="font-semibold text-gray-900">{language === "fr" ? "Fermé" : "مغلق"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
