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
 * uso comercial sin atribución — ver public/images/CREDITS.txt). Muestran
 * procedimientos reales del menú de la clínica (inyectables y aparatología:
 * toxina botulínica, ácido hialurónico, Morpheus 8, bioestimuladores…), no
 * mascarillas ni cosmética. El `permalink` apunta al perfil, no a un post.
 */

const instagramPosts = [
  {
    id: "ph-1",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/ig-1.jpg",
    alt: "Aplicación de toxina botulínica con jeringa en el rostro",
    caption: "Toxina botulínica (Dysport)",
  },
  {
    id: "ph-2",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/ig-2.jpg",
    alt: "Sesión de Morpheus 8 con dispositivo de microneedling y radiofrecuencia",
    caption: "Morpheus 8: microneedling con radiofrecuencia",
  },
  {
    id: "ph-3",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/ig-3.jpg",
    alt: "Relleno de labios con ácido hialurónico",
    caption: "Ácido hialurónico: volumen e hidratación",
  },
  {
    id: "ph-4",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/ig-4.jpg",
    alt: "Aplicación de bioestimuladores de colágeno en el rostro",
    caption: "Bioestimuladores de colágeno",
  },
  {
    id: "ph-5",
    permalink: "https://www.instagram.com/girardiclinica/",
    image: "/images/ig-5.jpg",
    alt: "Inyección estética en la zona de la frente por una profesional",
    caption: "Medicina estética con evaluación previa",
  },
];

export default instagramPosts;
