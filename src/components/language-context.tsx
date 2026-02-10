"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.developments": "Desarrollos",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "hero.subtitle": "Boutique Real Estate",
    "hero.title": "MIMOSA Estates",
    "hero.description": "Descubre una colección curada de los desarrollos más exclusivos del Caribe mexicano. Donde la sofisticación arquitectónica se une a la naturaleza virgen.",
    "hero.cta.primary": "VER DESARROLLOS",
    "hero.cta.secondary": "CONTACTAR AGENTE",
    "featured.subtitle": "Portafolio Exclusivo",
    "featured.title": "Desarrollos Destacados",
    "featured.cta": "VER TODO EL PORTAFOLIO",
    "about.essence": "Nuestra Esencia",
    "about.title": "Redefiniendo el Lujo Inmobiliario",
    "about.history_title": "El Prestigio Detrás de Mimosa",
    "about.history_subtitle": "Nuestra Historia",
    "about.history_p1": "MIMOSA Estates nació de la visión de transformar el mercado inmobiliario del Caribe Mexicano, elevándolo a estándares internacionales de lujo y exclusividad sin precedentes.",
    "about.history_p2": "Nos especializamos en conectar a inversionistas visionarios con obras maestras arquitectónicas que desafían lo convencional, priorizando siempre la armonía con el ecosistema y la excelencia en cada milímetro de diseño.",
    "about.pillars_title": "Nuestros Pilares",
    "about.pillar1.title": "Excelencia",
    "about.pillar1.desc": "Buscamos la perfección absoluta en cada etapa del ciclo de vida inmobiliario.",
    "about.pillar2.title": "Atención Boutique",
    "about.pillar2.desc": "Cada cliente recibe un trato personalizado, confidencial y sumamente exclusivo.",
    "about.pillar3.title": "Ubicación Premium",
    "about.pillar3.desc": "Solo operamos en los puntos geográficos más estratégicos y de mayor plusvalía proyectada.",
    "about.pillar4.title": "Compromiso",
    "about.pillar4.desc": "Nuestra pasión por el detalle se refleja en la satisfacción de nuestros inversionistas.",
    "about.quote": "En MIMOSA Estates, no vendemos propiedades, entregamos legados. Cada proyecto en nuestro portafolio ha sido seleccionado por su diseño arquitectónico superior y ubicación estratégica.",
    "about.cta": "CONOCE NUESTRA HISTORIA",
    "contact.subtitle": "Hablemos",
    "contact.title": "Inicia Tu Próxima Inversión",
    "contact.desc": "Completa el formulario y un asesor especializado te contactará en menos de 24 horas para una sesión personalizada.",
    "contact.form.name": "Nombre Completo",
    "contact.form.email": "Correo Electrónico",
    "contact.form.whatsapp": "WhatsApp",
    "contact.form.interest": "Desarrollo de Interés",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "ENVIAR SOLICITUD DE INFORMACIÓN",
    "footer.nav": "Navegación",
    "footer.explore": "Explorar",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.terms": "Términos y Condiciones",
    "footer.privacy": "Política de Privacidad",
    "dev.back": "VOLVER A DESARROLLOS",
    "dev.dossier": "SOLICITAR DOSSIER",
    "dev.location": "Ubicación Estratégica",
    "dev.immersive": "Experiencia Inmersiva",
    "dev.360": "Recorrido Virtual 360°",
    "dev.explore": "EXPLORA AHORA",
    "blog.subtitle": "Inspiración",
    "blog.title": "Blog & Estilo de Vida",
    "blog.read_more": "LEER MÁS",
    "sitemap.title": "Mapa del Sitio",
    "sitemap.desc": "Explora todas las secciones de nuestro portal.",
    "sitemap.sec1": "Principales",
    "sitemap.sec2": "Desarrollos",
    "sitemap.sec3": "Legal",
    "common.loading": "Cargando...",
    "common.back": "Regresar"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.developments": "Developments",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "hero.subtitle": "Boutique Real Estate",
    "hero.title": "MIMOSA Estates",
    "hero.description": "Discover a curated collection of the most exclusive developments in the Mexican Caribbean. Where architectural sophistication meets virgin nature.",
    "hero.cta.primary": "VIEW DEVELOPMENTS",
    "hero.cta.secondary": "CONTACT AGENT",
    "featured.subtitle": "Exclusive Portfolio",
    "featured.title": "Featured Developments",
    "featured.cta": "VIEW ALL PORTFOLIO",
    "about.essence": "Our Essence",
    "about.title": "Redefining Luxury Real Estate",
    "about.history_title": "The Prestige Behind Mimosa",
    "about.history_subtitle": "Our History",
    "about.history_p1": "MIMOSA Estates was born from the vision of transforming the Mexican Caribbean real estate market, elevating it to unprecedented international standards of luxury and exclusivity.",
    "about.history_p2": "We specialize in connecting visionary investors with architectural masterpieces that challenge the conventional, always prioritizing harmony with the ecosystem and excellence in every millimeter of design.",
    "about.pillars_title": "Our Pillars",
    "about.pillar1.title": "Excellence",
    "about.pillar1.desc": "We seek absolute perfection in every stage of the real estate life cycle.",
    "about.pillar2.title": "Boutique Service",
    "about.pillar2.desc": "Every client receives personalized, confidential, and highly exclusive treatment.",
    "about.pillar3.title": "Premium Location",
    "about.pillar3.desc": "We only operate in the most strategic geographical points with the highest projected value.",
    "about.pillar4.title": "Commitment",
    "about.pillar4.desc": "Our passion for detail is reflected in the satisfaction of our investors.",
    "about.quote": "At MIMOSA Estates, we don't sell properties, we deliver legacies. Every project in our portfolio has been selected for its superior architectural design and strategic location.",
    "about.cta": "LEARN OUR STORY",
    "contact.subtitle": "Let's Talk",
    "contact.title": "Start Your Next Investment",
    "contact.desc": "Complete the form and a specialized advisor will contact you in less than 24 hours for a personalized session.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.whatsapp": "WhatsApp",
    "contact.form.interest": "Development of Interest",
    "contact.form.message": "Message",
    "contact.form.submit": "SEND INFORMATION REQUEST",
    "footer.nav": "Navigation",
    "footer.explore": "Explore",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
    "dev.back": "BACK TO DEVELOPMENTS",
    "dev.dossier": "REQUEST DOSSIER",
    "dev.location": "Strategic Location",
    "dev.immersive": "Immersive Experience",
    "dev.360": "360° Virtual Tour",
    "dev.explore": "EXPLORE NOW",
    "blog.subtitle": "Inspiration",
    "blog.title": "Blog & Lifestyle",
    "blog.read_more": "READ MORE",
    "sitemap.title": "Sitemap",
    "sitemap.desc": "Explore all sections of our portal.",
    "sitemap.sec1": "Main",
    "sitemap.sec2": "Developments",
    "sitemap.sec3": "Legal",
    "common.loading": "Loading...",
    "common.back": "Go Back"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['es']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: keyof typeof translations['es']) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}