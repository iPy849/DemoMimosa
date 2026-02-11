export const languages = {
  es: 'Espanol',
  en: 'English',
} as const;

export const defaultLang = 'es' as const;
export type Language = keyof typeof languages;

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.developments": "Desarrollos",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "hero.subtitle": "Boutique Real Estate",
    "hero.title": "MIMOSA Developments",
    "hero.description": "Descubre una coleccion curada de los desarrollos mas exclusivos del Caribe mexicano. Donde la sofisticacion arquitectonica se une a la naturaleza virgen.",
    "hero.cta.primary": "VER DESARROLLOS",
    "hero.cta.secondary": "CONTACTAR AGENTE",
    "featured.subtitle": "Portafolio Exclusivo",
    "featured.title": "Desarrollos Destacados",
    "featured.cta": "VER TODO EL PORTAFOLIO",
    "about.essence": "Nuestra Esencia",
    "about.title": "Redefiniendo el Lujo Inmobiliario",
    "about.history_title": "El Prestigio Detras de Mimosa",
    "about.history_subtitle": "Nuestra Historia",
    "about.history_p1": "MIMOSA Developments nacio de la vision de transformar el mercado inmobiliario del Caribe Mexicano, elevandolo a estandares internacionales de lujo y exclusividad sin precedentes.",
    "about.history_p2": "Nos especializamos en conectar a inversionistas visionarios con obras maestras arquitectonicas que desafian lo convencional, priorizando siempre la armonia con el ecosistema y la excelencia en cada milimetro de diseno.",
    "about.pillars_title": "Nuestros Pilares",
    "about.pillar1.title": "Excelencia",
    "about.pillar1.desc": "Buscamos la perfeccion absoluta en cada etapa del ciclo de vida inmobiliario.",
    "about.pillar2.title": "Atencion Boutique",
    "about.pillar2.desc": "Cada cliente recibe un trato personalizado, confidencial y sumamente exclusivo.",
    "about.pillar3.title": "Ubicacion Premium",
    "about.pillar3.desc": "Solo operamos en los puntos geograficos mas estrategicos y de mayor plusvalia proyectada.",
    "about.pillar4.title": "Compromiso",
    "about.pillar4.desc": "Nuestra pasion por el detalle se refleja en la satisfaccion de nuestros inversionistas.",
    "about.quote": "En MIMOSA Developments, no vendemos propiedades, entregamos legados. Cada proyecto en nuestro portafolio ha sido seleccionado por su diseno arquitectonico superior y ubicacion estrategica.",
    "about.cta": "CONOCE NUESTRA HISTORIA",
    "contact.subtitle": "Hablemos",
    "contact.title": "Inicia Tu Proxima Inversion",
    "contact.desc": "Completa el formulario y un asesor especializado te contactara en menos de 24 horas para una sesion personalizada.",
    "contact.form.name": "Nombre Completo",
    "contact.form.email": "Correo Electronico",
    "contact.form.whatsapp": "WhatsApp",
    "contact.form.interest": "Desarrollo de Interes",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "ENVIAR SOLICITUD DE INFORMACION",
    "footer.nav": "Navegacion",
    "footer.explore": "Explorar",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.terms": "Terminos y Condiciones",
    "footer.privacy": "Politica de Privacidad",
    "footer.brand_desc": "Definiendo el lujo inmobiliario en el Caribe. Proyectos exclusivos disenados para un estilo de vida inigualable.",
    "dev.back": "VOLVER A DESARROLLOS",
    "dev.dossier": "SOLICITAR DOSSIER",
    "dev.location": "Ubicacion Estrategica",
    "dev.immersive": "Experiencia Inmersiva",
    "dev.360": "Recorrido Virtual 360",
    "dev.explore": "EXPLORA AHORA",
    "blog.subtitle": "Inspiracion",
    "blog.title": "Blog & Estilo de Vida",
    "blog.read_more": "LEER MAS",
    "sitemap.title": "Mapa del Sitio",
    "sitemap.desc": "Explora todas las secciones de nuestro portal.",
    "sitemap.sec1": "Principales",
    "sitemap.sec2": "Desarrollos",
    "sitemap.sec3": "Legal",
    "common.loading": "Cargando...",
    "common.back": "Regresar",
    "common.share": "Compartir:",
    "common.contact_agent": "CONTACTAR AGENTE",
    "contact.page.how": "Como podemos ayudarte?",
    "contact.page.desc": "Estamos aqui para asesorarte en tu proxima gran inversion. Ya sea que busques una residencia vacacional o diversificar tu portafolio, nuestro equipo esta a tu disposicion.",
    "contact.page.email": "Email",
    "contact.page.phone": "Telefono",
    "contact.page.office": "Oficina",
    "contact.page.hours": "Horario",
    "contact.page.hours.value": "Lun - Vie: 9:00 - 18:00",
    "contact.page.submit": "ENVIAR SOLICITUD",
    "whatsapp.text": "En que podemos ayudarte?",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.developments": "Developments",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "hero.subtitle": "Boutique Real Estate",
    "hero.title": "MIMOSA Developments",
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
    "about.history_p1": "MIMOSA Developments was born from the vision of transforming the Mexican Caribbean real estate market, elevating it to unprecedented international standards of luxury and exclusivity.",
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
    "about.quote": "At MIMOSA Developments, we don't sell properties, we deliver legacies. Every project in our portfolio has been selected for its superior architectural design and strategic location.",
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
    "footer.brand_desc": "Defining luxury real estate in the Caribbean. Exclusive projects designed for an unparalleled lifestyle.",
    "dev.back": "BACK TO DEVELOPMENTS",
    "dev.dossier": "REQUEST DOSSIER",
    "dev.location": "Strategic Location",
    "dev.immersive": "Immersive Experience",
    "dev.360": "360 Virtual Tour",
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
    "common.back": "Go Back",
    "common.share": "Share:",
    "common.contact_agent": "CONTACT AGENT",
    "contact.page.how": "How can we help you?",
    "contact.page.desc": "We are here to advise you on your next great investment. Whether you are looking for a vacation residence or to diversify your portfolio, our team is at your disposal.",
    "contact.page.email": "Email",
    "contact.page.phone": "Phone",
    "contact.page.office": "Office",
    "contact.page.hours": "Hours",
    "contact.page.hours.value": "Mon - Fri: 9:00 - 18:00",
    "contact.page.submit": "SEND REQUEST",
    "whatsapp.text": "How can we help you?",
  },
} as const;

export type TranslationKey = keyof typeof ui['es'];

/**
 * Get the language from a URL path, using Astro's i18n routing convention.
 * Default locale (es) has no prefix, English uses /en/ prefix.
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

/**
 * Returns a translation function for the given language.
 */
export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

/**
 * Returns the path prefix for the given language.
 */
export function getPathPrefix(lang: Language): string {
  return lang === defaultLang ? '' : `/${lang}`;
}

/**
 * Generates the localized path for a given route.
 */
export function localePath(lang: Language, path: string): string {
  const prefix = getPathPrefix(lang);
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') return prefix || '/';
  return `${prefix}${cleanPath}`;
}

/**
 * Get the alternate language toggle href.
 */
export function getAlternateLocaleUrl(url: URL, currentLang: Language): string {
  const targetLang = currentLang === 'es' ? 'en' : 'es';
  const pathname = url.pathname;

  if (currentLang === 'es') {
    // Add /en prefix
    return `/en${pathname === '/' ? '' : pathname}` || '/en';
  } else {
    // Remove /en prefix
    const stripped = pathname.replace(/^\/en\/?/, '/');
    return stripped || '/';
  }
}
