/**
 * Centralized image configuration using ESM imports from src/assets/.
 * Images imported this way are optimized by Astro's Image component.
 * To replace an image, swap the file in src/assets/images/ keeping the same filename.
 */

// Hero
import heroMain from '@/assets/images/hero/hero-main.jpg';

// About
import aboutInterior from '@/assets/images/about/about-interior.jpg';

// Developments
import devCuatroBacalar from '@/assets/images/developments/dev-cuatro-bacalar.jpg';
import devCuatroBacalar2 from '@/assets/images/developments/dev-cuatro-bacalar-2.jpg';
import devCuatroBacalar3 from '@/assets/images/developments/dev-cuatro-bacalar-3.jpg';
import devCuatroBacalar4 from '@/assets/images/developments/dev-cuatro-bacalar-4.jpg';
import devTulumEcoResort from '@/assets/images/developments/dev-tulum-eco-resort.jpg';
import devMeridaLuxury from '@/assets/images/developments/dev-merida-luxury.jpg';
import devPuntaMita from '@/assets/images/developments/dev-punta-mita.jpg';
import devCancunPenthouse from '@/assets/images/developments/dev-cancun-penthouse.jpg';
import devLoscabosVillas from '@/assets/images/developments/dev-loscabos-villas.jpg';

// Blog
import blogDesignTrends from '@/assets/images/blog/blog-design-trends.jpg';
import blogInvestBacalar from '@/assets/images/blog/blog-invest-bacalar.jpg';

// Cuatro Bacalar specific
import housePlan from '@/assets/images/cuatro-bacalar/house-plan.png';
import plantaBaja from '@/assets/images/cuatro-bacalar/planta-baja.png';
import plantaAlta from '@/assets/images/cuatro-bacalar/planta-alta.png';
import floorPlanDetail from '@/assets/images/cuatro-bacalar/floor-plan-detail.png';

export const images = {
  hero: {
    main: heroMain,
  },
  about: {
    interior: aboutInterior,
  },
  developments: {
    'cuatro-bacalar': devCuatroBacalar,
    'tulum-eco-resort': devTulumEcoResort,
    'merida-luxury': devMeridaLuxury,
    'punta-mita-estates': devPuntaMita,
    'cancun-penthouse': devCancunPenthouse,
    'loscabos-villas': devLoscabosVillas,
  },
  gallery: {
    'cuatro-bacalar': [
      devCuatroBacalar,
      devCuatroBacalar2,
      devCuatroBacalar3,
      devCuatroBacalar4,
    ],
  },
  blog: {
    'design-trends': blogDesignTrends,
    'invest-bacalar': blogInvestBacalar,
  },
  cuatroBacalar: {
    housePlan,
    plantaBaja,
    plantaAlta,
    floorPlanDetail,
  },
  logos: {
    dark: '/assets/logo-dark.svg',
    light: '/assets/logo-light.svg',
  },
} as const;
