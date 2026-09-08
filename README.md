# Estética Girardi — Landing page

Landing page de una sola página para **Estética Girardi**, una clínica de
medicina estética **itinerante** que viaja a distintas ciudades del norte de
Chile (Antofagasta, Arica, Calama, Iquique y La Serena).

El objetivo de la página es llevar a las personas a **reservar en la agenda
online externa** (`https://app.agendapia.com/girardiclinica`). Acciones
secundarias: WhatsApp e Instagram.

## Stack

- [Vite 4](https://vitejs.dev/) + [React 18](https://react.dev/)
- Sass (`.scss`) para estilos, con tokens de diseño en custom properties
  (paleta derivada del logotipo)
- [Swiper 11](https://swiperjs.com/) para el carrusel de Instagram
- Una función serverless de Netlify (`netlify/functions/instagram.mjs`) para
  traer las últimas publicaciones de Instagram al cargar la página
- Sin librerías de iconos ni scripts de terceros (los iconos son SVG en línea)

## Cómo ejecutar

```bash
npm install
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en dist/
npm run preview  # sirve el build de producción
```

## Estructura

```
src/
  styles/
    _tokens.scss        Tokens de diseño (color, tipografía, espaciado, radios, sombras)
    _base.scss          Reset, utilidades globales, animación de revelado, reduced-motion
  config/
    site.js             URLs de acción (reserva, WhatsApp, Instagram) y navegación
    treatments.js       Menú de tratamientos (datos)
    cities.js           Ciudades y direcciones de las sedes itinerantes
    instagramPosts.js   Lista de RESERVA del carrusel (si el scraping en vivo falla)
  hooks/
    useScrollReveal.js  Revelado al hacer scroll (IntersectionObserver + reduced-motion)
    useHeroPassed.js    Detecta cuándo se pasó el hero (para los CTA flotantes)
  components/
    booking-button/     BookingButton — CTA primario (siempre a la agenda online)
    whatsapp-link/      WhatsAppLink — enlace secundario a WhatsApp
    icons/             Icons.jsx — iconos SVG en línea
    header/            Header fijo con navegación y hamburguesa CSS
    hero/             Hero con titular de resultado y CTA dominante
    trust-bar/         Franja con las ciudades reales
    treatments/        Grilla de tratamientos
    how-it-works/      "Cómo funciona" (4 pasos)
    cta-band/          Franja de CTA de media página
    cities/            "Ciudades que visitamos"
    instagram/         InstagramCarousel (scraping en vivo + reserva, o widget)
    faq/              Preguntas frecuentes (<details>/<summary>)
    final-cta/         CTA final
    footer/           Footer
    mobile-cta-bar/    Barra de CTA fija inferior (móvil)
    whatsapp-fab/      Botón flotante de WhatsApp (escritorio)
  pages/
    Home.jsx           Compone todas las secciones
netlify/
  functions/
    instagram.mjs      Trae las últimas publicaciones de Instagram (server-side)
netlify.toml           Build, directorio de funciones y redirección SPA
```

### Dónde cambiar el contenido

| Qué                                   | Archivo                        |
| ------------------------------------- | ------------------------------ |
| URL de la agenda, WhatsApp, Instagram | `src/config/site.js`           |
| Tratamientos (sin precios)            | `src/config/treatments.js`     |
| Ciudades y direcciones                | `src/config/cities.js`         |
| Instagram (reserva / nº de posts)     | `src/config/instagramPosts.js`, `netlify/functions/instagram.mjs` |
| Colores, tipografías, espaciados      | `src/styles/_tokens.scss`      |
| Textos del hero / FAQ / pasos         | dentro de cada componente      |

## Carrusel de Instagram

### 1. Modo por defecto — scraping en vivo al cargar la página

Al montar, `InstagramCarousel` pide `/.netlify/functions/instagram`. Esa función
serverless (`netlify/functions/instagram.mjs`) obtiene **del lado del servidor**
las 5 publicaciones más recientes de `@girardiclinica` y las devuelve como JSON
(con las miniaturas embebidas en `data:` URI). Así el carrusel muestra siempre
lo último que se publicó, sin intervención manual.

- El navegador **no** puede hacer esto directamente: Instagram no envía
  cabeceras CORS y responde con muro de login sin sesión. Por eso va en una
  función.
- La respuesta se **cachea en el CDN de Netlify ~15 min** (`s-maxage=900`) para
  no gatillar el rate-limit de Instagram.
- No se usa el SDK oficial de Instagram ni ningún script de terceros.

**Requiere Netlify** (o `netlify dev` en local). Con `npm run dev` a secas la
ruta de la función no existe y se usa la lista de reserva (ver abajo).

```bash
npm i -g netlify-cli   # una vez
netlify dev            # levanta Vite + las funciones en local
```

#### Si Instagram bloquea la IP del servidor

Instagram limita con dureza estas peticiones y puede responder `429` a las IPs
de Netlify. Si la función no consigue datos, devuelve `{ ok: false, posts: [] }`
y el componente usa **`src/config/instagramPosts.js`** (lista de reserva editable
a mano). La página nunca se rompe por esto.

Para un feed en vivo 100 % fiable sin depender del scraping, usa el modo widget.

### 2. Modo widget en vivo (opcional, alternativa robusta)

Si defines la variable de entorno `VITE_INSTAGRAM_WIDGET`, el componente
renderiza un embed de terceros que se actualiza solo y se salta tanto el
scraping como la lista de reserva.

Crea un archivo `.env` (o `.env.local`) en la raíz:

```bash
# Opción A — Behold.so: usa el ID del feed
VITE_INSTAGRAM_WIDGET=tu_id_de_behold

# Opción B — LightWidget u otro: usa la URL del iframe (debe empezar por http)
VITE_INSTAGRAM_WIDGET=https://lightwidget.com/widgets/xxxxxxxx.html
```

Reconstruye (`npm run build`) después de cambiar el `.env`.

## Accesibilidad y rendimiento

- `<html lang="es">`, un solo `<h1>`, landmarks semánticos, enlace
  "Saltar al contenido", foco visible con `--focus-ring` y `scroll-padding-top`.
- Todas las imágenes con `width`/`height` o `aspect-ratio` (CLS 0),
  `loading="lazy"` salvo la imagen del hero (`fetchpriority="high"`).
- Animaciones sólo con `transform`/`opacity`; reset global de
  `prefers-reduced-motion` y guarda con `matchMedia` en JS.
- Todos los CTA tienen un objeto táctil ≥ 48px.

## TODO — contenido real pendiente del cliente

La investigación disponible es limitada. Antes de publicar hay que conseguir de
la clínica:

- **Fotos reales** de la clínica, del equipo y de pacientes (con consentimiento).
  Ahora el hero y la lista de reserva del carrusel usan fotografías libres de
  derechos de Unsplash (ver `public/images/CREDITS.txt`); conviene sustituirlas
  por material propio. El carrusel de Instagram sí trae fotos reales en vivo.
- **Instagram**: el carrusel ya trae las últimas publicaciones automáticamente
  vía la función serverless. Sólo hay que actuar si Instagram bloquea la IP de
  Netlify de forma persistente: en ese caso, activar el modo widget
  (`VITE_INSTAGRAM_WIDGET`) o mantener a mano la lista de reserva
  `src/config/instagramPosts.js`. Ver "Carrusel de Instagram".
- **Testimonios / reseñas**: no se incluyó ninguna sección de opiniones porque
  no hay datos verificados. No inventar reseñas ni valoraciones.
- **Equipo / profesionales**: nombres, cargos, credenciales y registro
  sanitario. No hay sección de equipo por falta de datos verificados.
- **Teléfono / WhatsApp definitivo**: se usó `+56 9 6210 5309` (confirmado por el
  sitio anterior). Hay otros dos números en circulación sin confirmar.
- **Precios**: por decisión, la web **no muestra ningún precio**. Todo el valor
  se entrega en la valoración o por WhatsApp. Si en algún momento se quisieran
  publicar, el sitio de partida es `src/config/treatments.js` y la FAQ de
  `src/components/faq/Faq.jsx`.
- **Descripciones de tratamientos** marcadas con
  `TODO: validar descripción con la clínica` en `src/config/treatments.js`
  (Morpheus 8, HIFU, skinbooster, bioestimuladores, polinucleótidos, vitaminas):
  son redacciones estándar correctas para el tipo de tratamiento, pero no son
  textos propios de la clínica. Confirmar también si el equipo de HIFU es "22D".
- **Dirección de Antofagasta** (`src/config/cities.js`): es la única sede con
  dirección fija que se publica; revisar tildes y numeración. El resto de
  ciudades no lleva dirección a propósito (varía según la gira).
- **Fechas de las giras** por ciudad: hoy se remite a Instagram y a la agenda.
- **Formas de pago** (FAQ): confirmar medios aceptados y si hay cuotas /
  financiamiento (marcado con `TODO` en `src/components/faq/Faq.jsx`).
- **Aviso legal** y **Política de privacidad**: enlaces `#` de marcador en el
  footer (`src/components/footer/Footer.jsx`), pendientes de documentos reales.
- **Horario de atención**: depende del calendario de cada gira; sin confirmar.
