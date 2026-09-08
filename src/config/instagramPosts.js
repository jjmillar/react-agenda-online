/**
 * Carrusel de Instagram — LISTA DE RESERVA (fallback). Estética Girardi.
 * ---------------------------------------------------------------------------
 * Por defecto el carrusel muestra las últimas publicaciones REALES obtenidas
 * en vivo por la función serverless `/.netlify/functions/instagram` al cargar
 * la página. Este archivo sólo se usa si esa función falla (Instagram bloquea
 * la IP del servidor, rate-limit, o se ejecuta sin Netlify en local).
 *
 * Puedes dejar estas entradas de ejemplo o poner una selección propia:
 *  - `permalink`: enlace del post (https://www.instagram.com/p/XXXX/ o /reel/XXXX/)
 *    o, como aquí, el perfil.
 *  - `image`: ruta a una miniatura en public/images/ (cuadrada, < 200 KB).
 *  - `alt`: texto alternativo en español (lo lee el lector de pantalla).
 *  - `caption`: texto breve opcional para el tooltip.
 * Deja entre 1 y 5 entradas.
 *
 * MODO WIDGET EN VIVO (opcional): si defines VITE_INSTAGRAM_WIDGET (ver README)
 * el componente usa un embed de terceros y NADA de esto (ni el scraping ni esta
 * lista) se aplica.
 * ---------------------------------------------------------------------------
 *
 * NOTA: el `permalink` de abajo apunta al perfil (no a un post concreto) y las
 * imágenes son las 5 promos que ya venían en el repositorio.
 */

const instagramPosts = [
  {
    id: "ph-1",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/1.jpg",
    alt: "Publicación de ejemplo de Estética Girardi en Instagram",
    caption: "Tratamientos de vanguardia por el norte de Chile",
  },
  {
    id: "ph-2",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/2.jpg",
    alt: "Publicación de ejemplo de Estética Girardi en Instagram",
    caption: "Agenda tu hora online",
  },
  {
    id: "ph-3",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/3.jpg",
    alt: "Publicación de ejemplo de Estética Girardi en Instagram",
    caption: "Toxina botulínica Dysport",
  },
  {
    id: "ph-4",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/4.jpg",
    alt: "Publicación de ejemplo de Estética Girardi en Instagram",
    caption: "Resultados naturales",
  },
  {
    id: "ph-5",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/5.jpg",
    alt: "Publicación de ejemplo de Estética Girardi en Instagram",
    caption: "Calendario de giras en nuestro Instagram",
  },
];

export default instagramPosts;
