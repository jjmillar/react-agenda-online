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
- [Swiper 11](https://swiperjs.com/) para el carrusel de Instagram
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
    instagramPosts.js   Publicaciones curadas del carrusel de Instagram
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
    instagram/         InstagramCarousel (modo curado o widget en vivo)
    faq/              Preguntas frecuentes (<details>/<summary>)
    final-cta/         CTA final
    footer/           Footer
    mobile-cta-bar/    Barra de CTA fija inferior (móvil)
    whatsapp-fab/      Botón flotante de WhatsApp (escritorio)
  pages/
    Home.jsx           Compone todas las secciones
```

### Dónde cambiar el contenido

| Qué                                   | Archivo                        |
| ------------------------------------- | ------------------------------ |
| URL de la agenda, WhatsApp, Instagram | `src/config/site.js`           |
| Tratamientos y precios                | `src/config/treatments.js`     |
| Ciudades y direcciones                | `src/config/cities.js`         |
| Publicaciones de Instagram            | `src/config/instagramPosts.js` |
| Colores, tipografías, espaciados      | `src/styles/_tokens.scss`      |
| Textos del hero / FAQ / pasos         | dentro de cada componente      |

## Carrusel de Instagram

Tiene **dos modos**.

### 1. Modo curado (por defecto)

Lee `src/config/instagramPosts.js`: un array de hasta 5 objetos
`{ id, permalink, image, alt, caption }`. Muestra un carrusel de miniaturas;
al hacer clic se abre el `permalink` en una pestaña nueva. Si el array está
vacío, se muestra una cuadrícula estática con las mismas imágenes.

**Para poner las 5 publicaciones reales más recientes:**

1. Abre `https://www.instagram.com/girardiclinica/` con la sesión iniciada.
2. Por cada post: copia su enlace (`.../p/XXXX/` o `.../reel/XXXX/`) al campo
   `permalink`.
3. Guarda una miniatura del post en `public/images/instagram/` (cuadrada,
   1080×1080, < 200 KB) y apunta `image` a `/images/instagram/post-1.jpg`.
4. Escribe un `alt` descriptivo en español y, opcionalmente, un `caption` corto.

Las instrucciones completas están también al inicio del propio archivo de
configuración.

### 2. Modo widget en vivo (opcional, "últimas publicaciones" automáticas)

Si defines la variable de entorno `VITE_INSTAGRAM_WIDGET`, el componente
renderiza un contenedor para un embed de terceros que se actualiza solo, en vez
del carrusel curado. No se usa el SDK oficial de Instagram.

Crea un archivo `.env` (o `.env.local`) en la raíz:

```bash
# Opción A — Behold.so: usa el ID del feed
VITE_INSTAGRAM_WIDGET=tu_id_de_behold

# Opción B — LightWidget u otro: usa la URL del iframe (debe empezar por http)
VITE_INSTAGRAM_WIDGET=https://lightwidget.com/widgets/xxxxxxxx.html
```

- Si el valor **empieza por `http`**, se trata como URL de un `<iframe>`
  (LightWidget y similares).
- En caso contrario, se trata como **ID de feed de Behold.so** y se inyecta su
  script (`https://w.behold.so/widget.js`) mediante un `useEffect`.

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
  Ahora el hero y el carrusel usan las 5 imágenes promocionales que ya estaban
  en el repositorio.
- **Publicaciones reales de Instagram** para el carrusel (permalinks + miniaturas).
  Ver "Carrusel de Instagram".
- **Testimonios / reseñas**: no se incluyó ninguna sección de opiniones porque
  no hay datos verificados. No inventar reseñas ni valoraciones.
- **Equipo / profesionales**: nombres, cargos, credenciales y registro
  sanitario. No hay sección de equipo por falta de datos verificados.
- **Teléfono / WhatsApp definitivo**: se usó `+56 9 6210 5309` (confirmado por el
  sitio anterior). Hay otros dos números en circulación sin confirmar.
- **Precios** más allá de la toxina botulínica (Dysport), que son los únicos
  publicados en la agenda. El resto se marca como "se cotiza en la valoración".
- **Descripciones de tratamientos** marcadas con
  `TODO: validar descripción con la clínica` en `src/config/treatments.js`
  (Morpheus 8, HIFU, skinbooster, bioestimuladores, polinucleótidos, vitaminas):
  son redacciones estándar correctas para el tipo de tratamiento, pero no son
  textos propios de la clínica. Confirmar también si el equipo de HIFU es "22D".
- **Direcciones por ciudad** (`src/config/cities.js`): revisar tildes, número de
  oficina/departamento y vigencia; las sedes pueden rotar según la gira.
- **Fechas de las giras** por ciudad: hoy se remite a Instagram y a la agenda.
- **Formas de pago** (FAQ): confirmar medios aceptados y si hay cuotas /
  financiamiento (marcado con `TODO` en `src/components/faq/Faq.jsx`).
- **Aviso legal** y **Política de privacidad**: enlaces `#` de marcador en el
  footer (`src/components/footer/Footer.jsx`), pendientes de documentos reales.
- **Horario de atención**: depende del calendario de cada gira; sin confirmar.
