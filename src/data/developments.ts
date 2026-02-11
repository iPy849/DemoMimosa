import type { Language } from '../i18n/utils';

export interface Development {
  id: string;
  title: string;
  location: string;
  image: string;
  description: Record<Language, string>;
}

export interface DevelopmentDetail extends Development {
  amenities: Record<Language, string[]>;
  mapUrl: string;
  virtualTour: string;
  images: string[];
}

export const featuredDevelopments: Development[] = [
  {
    id: "cuatro-bacalar",
    title: "Cuatro Bacalar",
    location: "Bacalar, Quintana Roo",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&h=600&auto=format&fit=crop",
    description: {
      es: "Una experiencia de vida unica frente a la laguna de los siete colores.",
      en: "A unique living experience in front of the lagoon of seven colors.",
    },
  },
  {
    id: "tulum-eco-resort",
    title: "Tulum Eco Resort",
    location: "Tulum, Mexico",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&h=600&auto=format&fit=crop",
    description: {
      es: "Lujo sustentable en el corazon de la selva maya.",
      en: "Sustainable luxury in the heart of the Mayan jungle.",
    },
  },
  {
    id: "merida-luxury",
    title: "Merida Heritage",
    location: "Merida, Yucatan",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&h=600&auto=format&fit=crop",
    description: {
      es: "Elegancia colonial combinada con modernidad absoluta.",
      en: "Colonial elegance combined with absolute modernity.",
    },
  },
];

export const allDevelopments: Development[] = [
  ...featuredDevelopments,
  {
    id: "punta-mita-estates",
    title: "Punta Mita Estates",
    location: "Nayarit, Mexico",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&h=600&auto=format&fit=crop",
    description: {
      es: "Villas de ultra lujo con acceso privado al oceano Pacifico.",
      en: "Ultra-luxury villas with private access to the Pacific Ocean.",
    },
  },
  {
    id: "cancun-penthouse",
    title: "Skyline Cancun",
    location: "Cancun, Mexico",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?q=80&w=800&h=600&auto=format&fit=crop",
    description: {
      es: "Lofts y penthouses en el punto mas vibrante de la ciudad.",
      en: "Lofts and penthouses in the most vibrant point of the city.",
    },
  },
  {
    id: "loscabos-villas",
    title: "Mar de Cortes Villas",
    location: "Los Cabos, BCS",
    image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=800&h=600&auto=format&fit=crop",
    description: {
      es: "Privacidad absoluta entre el desierto y el mar.",
      en: "Absolute privacy between the desert and the sea.",
    },
  },
];

export const developmentDetails: Record<string, DevelopmentDetail> = {
  "cuatro-bacalar": {
    id: "cuatro-bacalar",
    title: "Cuatro Bacalar",
    location: "Bacalar, Quintana Roo",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&h=600&auto=format&fit=crop",
    description: {
      es: "Cuatro Bacalar es un desarrollo residencial de lujo disenado para armonizar con la belleza natural de la Laguna de los Siete Colores. Con una arquitectura organica que utiliza materiales locales y tecnologia sustentable, este proyecto ofrece 24 exclusivas unidades con vistas panoramicas, club de playa privado y amenidades de clase mundial.",
      en: "Cuatro Bacalar is a luxury residential development designed to harmonize with the natural beauty of the Seven Colors Lagoon. With organic architecture using local materials and sustainable technology, this project offers 24 exclusive units with panoramic views, private beach club, and world-class amenities.",
    },
    amenities: {
      es: ["Beach Club Privado", "Seguridad 24/7", "Alberca Infinity", "Gimnasio", "Restaurante Gourmet", "Muelle Privado"],
      en: ["Private Beach Club", "24/7 Security", "Infinity Pool", "Gym", "Gourmet Restaurant", "Private Pier"],
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.4939223793!2d-88.3974443!3d18.6755455!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!2f1080!3m2!1m1!2zMTjCsDQwJzMyLjAiTiA4OMKwMjMnNTAuOCJX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx",
    virtualTour: "https://kuula.co/share/hs7cq/collection/7Dgjf?logo=0&info=0&fs=1&vr=1&initload=0&thumbs=1",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&h=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&h=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&h=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=1200&h=800&auto=format&fit=crop",
    ],
  },
};
