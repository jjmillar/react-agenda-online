import { useEffect } from "react";

/**
 * Revelado al hacer scroll (fade + translate) con IntersectionObserver.
 * - Se ejecuta una sola vez por elemento (deja de observar tras revelar).
 * - Respeta `prefers-reduced-motion`: si el usuario lo pide, muestra todo el
 *   contenido en su estado final de inmediato y no inicializa el observer.
 *
 * Uso: añade la clase `reveal` a los elementos que quieras animar dentro del
 * árbol. Opcionalmente `style={{ '--reveal-delay': '60ms' }}` para escalonar.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const nodes = Array.from(document.querySelectorAll(".reveal"));
    if (!nodes.length) return;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}
