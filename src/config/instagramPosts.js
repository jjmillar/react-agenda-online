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
 * NOTA: las imágenes de abajo son fotografías libres de derechos (Unsplash,
 * uso comercial sin atribución — ver public/images/CREDITS.txt), acordes a
 * estética y belleza, mientras no haya publicaciones reales. El `permalink`
 * apunta al perfil, no a un post concreto.
 */

const instagramPosts = [
  {
    id: "ph-1",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/ig-1.jpg",
    alt: "Mascarilla facial en un tratamiento de estética",
    caption: "Cuidado facial en Estética Girardi",
  },
  {
    id: "ph-2",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/ig-2.jpg",
    alt: "Sesión de masaje facial estético",
    caption: "Tratamientos de vanguardia por el norte de Chile",
  },
  {
    id: "ph-3",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/ig-3.jpg",
    alt: "Aplicación de un tratamiento para la piel del rostro",
    caption: "Resultados naturales, a tu ritmo",
  },
  {
    id: "ph-4",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/ig-4.jpg",
    alt: "Profesional realizando un peeling facial",
    caption: "Piel más luminosa y cuidada",
  },
  {
    id: "ph-5",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/ig-5.jpg",
    alt: "Persona relajada durante un tratamiento de belleza",
    caption: "Agenda tu valoración online",
  },
];

export default instagramPosts;
