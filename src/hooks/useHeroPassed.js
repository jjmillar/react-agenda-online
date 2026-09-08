import { useEffect, useRef, useState } from "react";

/**
 * Devuelve `true` cuando el elemento observado (normalmente el hero) ha salido
 * por completo de la parte superior del viewport. Se usa para revelar la barra
 * de CTA móvil y el botón flotante de WhatsApp sólo después del hero.
 *
 * Devuelve `[ref, passed]`: coloca `ref` en el elemento centinela.
 */
export default function useHeroPassed() {
  const ref = useRef(null);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      // Sin soporte: mostrar los elementos flotantes desde el inicio.
      setPassed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Sólo cuenta como "pasado" cuando el centinela quedó POR ENCIMA del
        // viewport (top < 0); si está por debajo (aún no se hace scroll) no.
        setPassed(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, passed];
}
