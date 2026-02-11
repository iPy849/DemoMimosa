/**
 * Centralized image configuration.
 * All image paths point to /assets/images/ in the public directory.
 * To replace an image, simply swap the file in public/assets/images/ keeping the same filename,
 * or update the path here.
 */

export const images = {
  hero: {
    main: '/assets/images/hero-main.jpg',
  },
  about: {
    interior: '/assets/images/about-interior.jpg',
  },
  developments: {
    'cuatro-bacalar': '/assets/images/dev-cuatro-bacalar.jpg',
    'tulum-eco-resort': '/assets/images/dev-tulum-eco-resort.jpg',
    'merida-luxury': '/assets/images/dev-merida-luxury.jpg',
    'punta-mita-estates': '/assets/images/dev-punta-mita.jpg',
    'cancun-penthouse': '/assets/images/dev-cancun-penthouse.jpg',
    'loscabos-villas': '/assets/images/dev-loscabos-villas.jpg',
  },
  gallery: {
    'cuatro-bacalar': [
      '/assets/images/dev-cuatro-bacalar.jpg',
      '/assets/images/dev-cuatro-bacalar-2.jpg',
      '/assets/images/dev-cuatro-bacalar-3.jpg',
      '/assets/images/dev-cuatro-bacalar-4.jpg',
    ],
  },
  blog: {
    'design-trends': '/assets/images/blog-design-trends.jpg',
    'invest-bacalar': '/assets/images/blog-invest-bacalar.jpg',
  },
} as const;
