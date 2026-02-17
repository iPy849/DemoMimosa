/**
 * Centralized image configuration using ESM imports from src/assets/.
 * Images imported this way are optimized by Astro's Image component.
 * To replace an image, swap the file in src/assets/images/ keeping the same filename.
 */

// Hero
import heroMain from '@/assets/images/hero/hero-main.webp';

// About
import aboutInterior from '@/assets/images/about/about-interior.webp';
import drawNLogo from '@/assets/images/about/draw_n_logo.webp';

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

// Cuatro Bacalar Renders
import cbAlberca1 from '@/assets/images/cuatro-bacalar/renders/alberca_privada_1.webp';
import cbAlberca2 from '@/assets/images/cuatro-bacalar/renders/alberca_privada_2.webp';
import cbAlbercaSocial from '@/assets/images/cuatro-bacalar/renders/alberca_privada_y_area_social.webp';
import cbAreaSocial from '@/assets/images/cuatro-bacalar/renders/area_social.webp';
import cbBannoPrincipal from '@/assets/images/cuatro-bacalar/renders/banno_recamara_principal.webp';
import cbFachada from '@/assets/images/cuatro-bacalar/renders/fachada.webp';
import cbPlantaAltaRender from '@/assets/images/cuatro-bacalar/renders/planta_alta.webp';
import cbPlantaBajaRender from '@/assets/images/cuatro-bacalar/renders/planta_baja.webp';
import cbRecamaraPrincipal from '@/assets/images/cuatro-bacalar/renders/recamara_principal.webp';
import cbVistaAerea from '@/assets/images/cuatro-bacalar/renders/vista_aerea.webp';

export const images = {
  hero: {
    main: heroMain,
  },
  about: {
    interior: aboutInterior,
    draw_n_logo: drawNLogo,
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
    renders: {
      alberca1: cbAlberca1,
      alberca2: cbAlberca2,
      albercaSocial: cbAlbercaSocial,
      areaSocial: cbAreaSocial,
      bannoPrincipal: cbBannoPrincipal,
      fachada: cbFachada,
      plantaAlta: cbPlantaAltaRender,
      plantaBaja: cbPlantaBajaRender,
      recamaraPrincipal: cbRecamaraPrincipal,
      vistaAerea: cbVistaAerea,
    },
  },
  logos: {
    dark: '/assets/logo-dark.svg',
    light: '/assets/logo-light.svg',
  },
} as const;
