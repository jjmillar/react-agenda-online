import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import fallbackPosts from "../../config/instagramPosts";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, NEW_TAB_HINT } from "../../config/site";
import { IconChevronLeft, IconChevronRight, IconInstagram } from "../icons/Icons";

import "swiper/css";
import "swiper/css/navigation";
import "./InstagramCarousel.scss";

/**
 * Sección de Instagram.
 *
 * MODO POR DEFECTO — scraping en vivo al cargar la página:
 * al montar, el componente pide `/.netlify/functions/instagram`, que obtiene
 * del lado del servidor las 5 publicaciones más recientes de @girardiclinica
 * (el navegador no puede por CORS ni por el muro de login de Instagram). Así
 * el carrusel muestra siempre lo último que se publicó.
 * Si la función falla (Instagram bloquea la IP, rate-limit, sin red), se usa
 * la lista de reserva de `src/config/instagramPosts.js`.
 *
 * MODO WIDGET EN VIVO (opcional): si `VITE_INSTAGRAM_WIDGET` está definido, se
 * renderiza un embed de terceros (Behold.so / LightWidget) en lugar de todo lo
 * anterior. Ver README.
 */

const ENDPOINT = "/.netlify/functions/instagram";
const WIDGET_ID = import.meta.env.VITE_INSTAGRAM_WIDGET;

function LiveWidget({ value }) {
  const isUrl = /^https?:\/\//i.test(value);

  useEffect(() => {
    if (isUrl) return;
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
    <div className="ig__widget">
      <div data-behold-id={value} />
    </div>
  );
}

function Skeleton() {
  return (
    <div className="ig__carousel" aria-hidden="true">
      <ul className="ig__skeletons">
        {Array.from({ length: 4 }).map((_, i) => (
          <li key={i} className="ig__skeleton" />
        ))}
      </ul>
    </div>
  );
}

function Carousel({ posts }) {
  const swiperRef = useRef(null);

  return (
    <div className="ig__carousel">
      <Swiper
        modules={[Navigation, A11y]}
        onSwiper={(s) => (swiperRef.current = s)}
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
              {post.isVideo && (
                <span className="ig__thumb-badge" aria-hidden="true">
                  Reel
                </span>
              )}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="ig__controls">
        <button
          type="button"
          className="ig__nav"
          aria-label="Publicación anterior"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <IconChevronLeft />
        </button>
        <button
          type="button"
          className="ig__nav"
          aria-label="Publicación siguiente"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <IconChevronRight />
        </button>
      </div>
    </div>
  );
}

const InstagramCarousel = () => {
  // null = cargando; array = listo (en vivo o de reserva)
  const [posts, setPosts] = useState(WIDGET_ID ? [] : null);

  useEffect(() => {
    if (WIDGET_ID) return;
    let alive = true;

    (async () => {
      try {
        const res = await fetch(ENDPOINT, { headers: { accept: "application/json" } });
        const data = await res.json();
        if (!alive) return;
        if (data?.ok && Array.isArray(data.posts) && data.posts.length) {
          setPosts(data.posts);
        } else {
          setPosts(fallbackPosts);
        }
      } catch {
        if (alive) setPosts(fallbackPosts);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

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
          ) : posts === null ? (
            <Skeleton />
          ) : (
            <Carousel posts={posts} />
          )}
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;
