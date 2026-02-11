import type { Language } from '../i18n/utils';
import { images } from './images';

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
    image: images.developments['cuatro-bacalar'],
    description: {
      es: "Una experiencia de vida unica frente a la laguna de los siete colores.",
      en: "A unique living experience in front of the lagoon of seven colors.",
    },
  },
  {
    id: "tulum-eco-resort",
    title: "Tulum Eco Resort",
    location: "Tulum, Mexico",
    image: images.developments['tulum-eco-resort'],
    description: {
      es: "Lujo sustentable en el corazon de la selva maya.",
      en: "Sustainable luxury in the heart of the Mayan jungle.",
    },
  },
  {
    id: "merida-luxury",
    title: "Merida Heritage",
    location: "Merida, Yucatan",
    image: images.developments['merida-luxury'],
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
    image: images.developments['punta-mita-estates'],
    description: {
      es: "Villas de ultra lujo con acceso privado al oceano Pacifico.",
      en: "Ultra-luxury villas with private access to the Pacific Ocean.",
    },
  },
  {
    id: "cancun-penthouse",
    title: "Skyline Cancun",
    location: "Cancun, Mexico",
    image: images.developments['cancun-penthouse'],
    description: {
      es: "Lofts y penthouses en el punto mas vibrante de la ciudad.",
      en: "Lofts and penthouses in the most vibrant point of the city.",
    },
  },
  {
    id: "loscabos-villas",
    title: "Mar de Cortes Villas",
    location: "Los Cabos, BCS",
    image: images.developments['loscabos-villas'],
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
    image: images.developments['cuatro-bacalar'],
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
    images: images.gallery['cuatro-bacalar'],
  },
};
