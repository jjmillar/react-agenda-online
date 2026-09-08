/**
 * Iconos SVG en línea — Estética Girardi.
 * Se dibujan con SVG propio para no depender de librerías de iconos ni de
 * scripts de terceros (Font Awesome / Ionicons se eliminaron).
 * Todos son decorativos: se marcan con aria-hidden y focusable="false".
 */

const base = {
  "aria-hidden": true,
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
};

export const IconInstagram = ({ size = 20 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
  </svg>
);

export const IconWhatsApp = ({ size = 20 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm0 1.8c2.18 0 4.24.86 5.78 2.4a8.13 8.13 0 0 1 2.4 5.78c0 4.52-3.68 8.18-8.2 8.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.08.8.82-3-.2-.32a8.13 8.13 0 0 1-1.26-4.34c0-4.52 3.68-8.18 8.2-8.18Zm-2.4 4.4c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.24 1.02.38 1.38.5.58.18 1.1.16 1.52.1.46-.08 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.4-1.32-1.64-.14-.24-.02-.36.1-.48.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42Z" />
  </svg>
);

/* Flecha diagonal: pista visual de "enlace externo / abre pestaña nueva" */
export const IconExternal = ({ size = 16 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M7 17 17 7M9 7h8v8"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconChevronLeft = ({ size = 22 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="m15 6-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconChevronRight = ({ size = 22 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="m9 6 6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconPin = ({ size = 20 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export const IconCheck = ({ size = 18 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="m5 13 4 4 10-10"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
