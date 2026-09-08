import { WHATSAPP_URL, NEW_TAB_HINT } from "../../config/site";
import { IconWhatsApp } from "../icons/Icons";
import "./WhatsAppLink.scss";

/**
 * Enlace secundario a WhatsApp con mensaje prellenado. Nunca debe tener el
 * mismo peso visual que el botón de reserva.
 *
 * Props:
 * - children: texto visible (opcional).
 * - variant: "text" (defecto) | "outline" | "solid".
 */
const WhatsAppLink = ({ children = "Escríbenos por WhatsApp", variant = "text" }) => (
  <a
    className={`wa-link wa-link--${variant}`}
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener"
    aria-label={`Contactar por WhatsApp (${NEW_TAB_HINT})`}
  >
    <IconWhatsApp size={18} />
    <span>{children}</span>
  </a>
);

export default WhatsAppLink;
