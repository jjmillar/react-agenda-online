/**
 * Carrusel de Instagram — modo CURADO (manual). Estética Girardi.
 * ---------------------------------------------------------------------------
 * CÓMO ACTUALIZAR ESTE CARRUSEL CON LAS 5 PUBLICACIONES REALES MÁS RECIENTES:
 *
 * 1. Abre https://www.instagram.com/girardiclinica/ con la sesión iniciada.
 * 2. Por cada una de las 5 publicaciones más recientes que quieras mostrar:
 *    a. Copia el enlace del post (menú "..." → "Copiar enlace"). Tiene el
 *       formato https://www.instagram.com/p/XXXXXXXXX/  o  /reel/XXXXXXXXX/
 *       Pégalo en el campo `permalink`.
 *    b. Descarga o toma una captura de la imagen de portada del post y
 *       guárdala en  public/images/instagram/  con un nombre simple
 *       (por ejemplo  post-1.jpg ). Recomendado: cuadrada (1080×1080) y
 *       optimizada (< 200 KB). Pon la ruta en `image` como
 *       "/images/instagram/post-1.jpg".
 *    c. Escribe un `alt` corto y descriptivo en español (lo lee el lector de
 *       pantalla) y, si quieres, un `caption` breve para el tooltip.
 * 3. Deja el array con 1 a 5 entradas. Si lo dejas vacío, la sección muestra
 *    una cuadrícula estática con estas mismas imágenes de ejemplo.
 *
 * MODO WIDGET EN VIVO (opcional, "últimas publicaciones" automáticas):
 * define la variable de entorno VITE_INSTAGRAM_WIDGET (ver README) y el
 * componente cargará un contenedor para un embed de Behold.so / LightWidget
 * en lugar de este carrusel curado.
 * ---------------------------------------------------------------------------
 *
 * NOTA: las entradas de abajo son PLACEHOLDERS. El `permalink` apunta al perfil
 * (no a un post concreto) y las imágenes son las 5 promos que ya venían en el
 * repositorio. Reemplázalas siguiendo los pasos anteriores.
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
