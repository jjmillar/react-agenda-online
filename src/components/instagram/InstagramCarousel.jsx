import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import instagramPosts from "../../config/instagramPosts";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, NEW_TAB_HINT } from "../../config/site";
import { IconChevronLeft, IconChevronRight, IconInstagram } from "../icons/Icons";

import "swiper/css";
import "swiper/css/navigation";
import "./InstagramCarousel.scss";

/**
 * Sección de Instagram — dos modos:
 *
 * 1. MODO CURADO (por defecto): lee src/config/instagramPosts.js y muestra un
 *    carrusel de miniaturas. Al hacer clic se abre el `permalink` del post en
 *    una pestaña nueva. No usa el SDK de Instagram (protege el rendimiento).
 *    Si el array está vacío, se muestra una cuadrícula estática de reserva.
 *
 * 2. MODO WIDGET EN VIVO: si `import.meta.env.VITE_INSTAGRAM_WIDGET` está
 *    definido, se renderiza un contenedor para un embed de Behold.so o
 *    LightWidget en lugar del carrusel curado. Ver README.
 *    - Si el valor empieza por "http", se trata como URL de iframe (LightWidget).
 *    - En caso contrario, se trata como ID de feed de Behold.so y se inyecta
 *      su script.
 */

const WIDGET_ID = import.meta.env.VITE_INSTAGRAM_WIDGET;

function LiveWidget({ value }) {
  const containerRef = useRef(null);
  const isUrl = /^https?:\/\//i.test(value);

  useEffect(() => {
    if (isUrl) return;
    // Behold.so: inyectar el script una sola vez.
    const SRC = "https://w.behold.so/widget.js";
    if (!document.querySelector(`script[src="${SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SRC;
      s.type = "module";
      s.async = true;
      document.head.appendChild(s);
    }
  }, [isUrl, value]);

  if (isUrl) {
    return (
      <iframe
        className="ig__widget-iframe"
        src={value}
        title="Últimas publicaciones de Instagram"
        loading="lazy"
        width="100%"
        height="480"
      />
    );
  }

  return (
    <div ref={containerRef} className="ig__widget">
      {/* Behold.so renderiza el feed dentro de este contenedor */}
      <div data-behold-id={value} />
    </div>
  );
}

function StaticGrid({ posts }) {
  return (
    <ul className="ig__grid">
      {posts.map((post) => (
        <li key={post.id}>
          <a href={post.permalink} target="_blank" rel="noopener">
            <img
              src={post.image}
              alt={post.alt}
              width="480"
              height="480"
              loading="lazy"
              decoding="async"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

const InstagramCarousel = () => {
  const [swiper, setSwiper] = useState(null);
  const posts = instagramPosts || [];

  return (
    <section className="section instagram" id="instagram">
      <div className="container">
        <div className="section__head instagram__head reveal">
          <div>
            <span className="section__eyebrow">Instagram</span>
            <h2>Síguenos en {INSTAGRAM_HANDLE}</h2>
            <p className="section__lead">
              Calendario de giras, novedades y resultados del día a día de la
              clínica.
            </p>
          </div>
          <a
            className="instagram__follow"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            aria-label={`Seguir a ${INSTAGRAM_HANDLE} en Instagram (${NEW_TAB_HINT})`}
          >
            <IconInstagram size={18} />
            Seguir
          </a>
        </div>

        <div className="instagram__body reveal">
          {WIDGET_ID ? (
            <LiveWidget value={WIDGET_ID} />
          ) : posts.length === 0 ? (
            <StaticGrid posts={instagramPosts} />
          ) : (
            <div className="ig__carousel">
              <Swiper
                modules={[Navigation, A11y]}
                onSwiper={setSwiper}
                spaceBetween={16}
                slidesPerView={1.2}
                breakpoints={{
                  640: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 24 },
                }}
                a11y={{
                  containerRoleDescriptionMessage: "carrusel",
                  slideRole: "group",
                }}
                className="ig__swiper"
              >
                {posts.map((post) => (
                  <SwiperSlide key={post.id}>
                    <a
                      className="ig__thumb"
                      href={post.permalink}
                      target="_blank"
                      rel="noopener"
                      aria-label={`${post.caption || "Ver publicación"} en Instagram (${NEW_TAB_HINT})`}
                      title={post.caption || undefined}
                    >
                      <img
                        src={post.image}
                        alt={post.alt}
                        width="480"
                        height="480"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="ig__thumb-glyph" aria-hidden="true">
                        <IconInstagram size={18} />
                      </span>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="ig__controls">
                <button
                  type="button"
                  className="ig__nav"
                  aria-label="Publicación anterior"
                  onClick={() => swiper && swiper.slidePrev()}
                >
                  <IconChevronLeft />
                </button>
                <button
                  type="button"
                  className="ig__nav"
                  aria-label="Publicación siguiente"
                  onClick={() => swiper && swiper.slideNext()}
                >
                  <IconChevronRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;
