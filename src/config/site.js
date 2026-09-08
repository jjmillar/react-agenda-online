/**
 * Constantes compartidas del sitio — Estética Girardi.
 * Un único lugar para las URLs de acción. Todos los botones de reserva
 * deben resolver EXACTAMENTE a BOOKING_URL.
 */

// Acción primaria: agenda online externa (se abre en una pestaña nueva).
export const BOOKING_URL = "https://app.agendapia.com/girardiclinica";

// Acción secundaria: WhatsApp con mensaje prellenado.
export const WHATSAPP_NUMBER = "56962105309";
export const WHATSAPP_MESSAGE =
  "Hola, me gustaría información sobre sus tratamientos.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// Acción secundaria: Instagram.
export const INSTAGRAM_URL = "https://www.instagram.com/girardiclinica/";
export const INSTAGRAM_HANDLE = "@girardiclinica";

// Texto accesible reutilizable para los enlaces que abren pestaña nueva.
export const NEW_TAB_HINT = "se abre en una nueva pestaña";

// Navegación por anclas del header.
export const NAV_LINKS = [
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#ciudades", label: "Ciudades" },
  { href: "#instagram", label: "Instagram" },
  { href: "#preguntas", label: "Preguntas" },
];
