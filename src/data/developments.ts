export interface Development {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  descriptionEn: string;
}

export interface DevelopmentDetail extends Development {
  amenities: string[];
  amenitiesEn: string[];
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
    description: "Una experiencia de vida única frente a la laguna de los siete colores.",
    descriptionEn: "A unique living experience in front of the lagoon of seven colors.",
  },
  {
    id: "tulum-eco-resort",
    title: "Tulum Eco Resort",
    location: "Tulum, México",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Lujo sustentable en el corazón de la selva maya.",
    descriptionEn: "Sustainable luxury in the heart of the Mayan jungle.",
  },
  {
    id: "merida-luxury",
    title: "Mérida Heritage",
    location: "Mérida, Yucatán",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Elegancia colonial combinada con modernidad absoluta.",
    descriptionEn: "Colonial elegance combined with absolute modernity.",
  },
];

export const allDevelopments: Development[] = [
  ...featuredDevelopments,
  {
    id: "punta-mita-estates",
    title: "Punta Mita Estates",
    location: "Nayarit, México",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Villas de ultra lujo con acceso privado al océano Pacífico.",
    descriptionEn: "Ultra-luxury villas with private access to the Pacific Ocean.",
  },
  {
    id: "cancun-penthouse",
    title: "Skyline Cancun",
    location: "Cancún, México",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Lofts y penthouses en el punto más vibrante de la ciudad.",
    descriptionEn: "Lofts and penthouses in the most vibrant point of the city.",
  },
  {
    id: "loscabos-villas",
    title: "Mar de Cortés Villas",
    location: "Los Cabos, BCS",
    image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Privacidad absoluta entre el desierto y el mar.",
    descriptionEn: "Absolute privacy between the desert and the sea.",
  },
];

export const developmentDetails: Record<string, DevelopmentDetail> = {
  "cuatro-bacalar": {
    id: "cuatro-bacalar",
    title: "Cuatro Bacalar",
    location: "Bacalar, Quintana Roo",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Cuatro Bacalar es un desarrollo residencial de lujo diseñado para armonizar con la belleza natural de la Laguna de los Siete Colores. Con una arquitectura orgánica que utiliza materiales locales y tecnología sustentable, este proyecto ofrece 24 exclusivas unidades con vistas panorámicas, club de playa privado y amenidades de clase mundial.",
    descriptionEn: "Cuatro Bacalar is a luxury residential development designed to harmonize with the natural beauty of the Seven Colors Lagoon. With organic architecture using local materials and sustainable technology, this project offers 24 exclusive units with panoramic views, private beach club, and world-class amenities.",
    amenities: ["Beach Club Privado", "Seguridad 24/7", "Alberca Infinity", "Gimnasio", "Restaurante Gourmet", "Muelle Privado"],
    amenitiesEn: ["Private Beach Club", "24/7 Security", "Infinity Pool", "Gym", "Gourmet Restaurant", "Private Pier"],
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

export const blogPosts = [
  {
    id: "1",
    title: "Tendencias de Diseño Interior 2024 para Residencias de Lujo",
    titleEn: "2024 Interior Design Trends for Luxury Residences",
    excerpt: "Descubre cómo los materiales naturales y la domótica están redefiniendo el concepto de hogar exclusivo.",
    excerptEn: "Discover how natural materials and home automation are redefining the concept of an exclusive home.",
    date: "24 Mayo, 2024",
    author: "Elena Rivera",
    image: "https://images.unsplash.com/photo-1616489953149-8f6f5986872a?q=80&w=800&h=500&auto=format&fit=crop",
    content: `<p>El diseño de interiores para el año 2024 está marcado por una profunda conexión con la naturaleza y la integración invisible de la tecnología. En MIMOSA Estates, observamos cómo nuestros desarrollos están adoptando estas filosofías para crear espacios que no solo son estéticamente impresionantes, sino que también promueven el bienestar.</p>
<h3>1. Biofilia y Materiales Orgánicos</h3>
<p>Ya no se trata solo de añadir plantas. La tendencia actual integra la naturaleza en la estructura misma. Piedras locales, maderas certificadas con acabados mate y textiles de fibras naturales como el lino y la seda salvaje dominan las paletas de este año. Los tonos tierra y cremas proporcionan el lienzo perfecto para esta estética.</p>
<h3>2. Domótica Invisible</h3>
<p>El lujo hoy significa comodidad sin esfuerzo. Los sistemas inteligentes ahora se ocultan tras paneles de diseño o se integran en el mobiliario, permitiendo que la estética del hogar permanezca limpia mientras se ofrece control total sobre la iluminación, el clima y la seguridad.</p>
<h3>3. El "Quiet Luxury" Inmobiliario</h3>
<p>Menos es más, pero con una calidad excepcional. Esta tendencia se aleja de la ostentación para centrarse en detalles discretos, texturas ricas y una artesanía impecable que solo los conocedores pueden apreciar plenamente.</p>`,
    contentEn: `<p>Interior design for 2024 is marked by a deep connection with nature and the invisible integration of technology. At MIMOSA Estates, we observe how our developments are adopting these philosophies to create spaces that are not only aesthetically stunning but also promote well-being.</p>
<h3>1. Biophilia and Organic Materials</h3>
<p>It's no longer just about adding plants. Current trends integrate nature into the very structure. Local stones, certified woods with matte finishes, and natural fiber textiles like linen and wild silk dominate this year's palettes. Earthy tones and creams provide the perfect canvas for this aesthetic.</p>
<h3>2. Invisible Home Automation</h3>
<p>Luxury today means effortless comfort. Smart systems are now hidden behind designer panels or integrated into furniture, allowing the home's aesthetic to remain clean while offering full control over lighting, climate, and security.</p>
<h3>3. Real Estate "Quiet Luxury"</h3>
<p>Less is more, but with exceptional quality. This trend moves away from ostentation to focus on discreet details, rich textures, and impeccable craftsmanship that only connoisseurs can fully appreciate.</p>`,
  },
  {
    id: "2",
    title: "Por qué invertir en Bacalar es la decisión más inteligente hoy",
    titleEn: "Why Investing in Bacalar is the Smartest Decision Today",
    excerpt: "Analizamos el crecimiento exponencial de la zona y por qué el 'lujo descalzo' es la tendencia ganadora.",
    excerptEn: "We analyze the exponential growth of the area and why 'barefoot luxury' is the winning trend.",
    date: "12 Abril, 2024",
    author: "Marco Sánchez",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=800&h=500&auto=format&fit=crop",
    content: `<p>Bacalar se ha convertido en uno de los destinos de inversión inmobiliaria más prometedores de México.</p>`,
    contentEn: `<p>Bacalar has become one of Mexico's most promising real estate investment destinations.</p>`,
  },
];
