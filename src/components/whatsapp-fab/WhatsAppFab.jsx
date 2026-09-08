import { WHATSAPP_URL, NEW_TAB_HINT } from "../../config/site";
import { IconWhatsApp } from "../icons/Icons";
import "./WhatsAppFab.scss";

/**
 * Botón flotante de WhatsApp — sólo escritorio (≥768px). En móvil se usa la
 * barra de CTA inferior, así que este FAB queda oculto por CSS y nunca
 * coexisten dos sistemas flotantes.
 *
 * Props:
 * - visible: boolean — aparece (fade + scale) tras pasar el hero.
 *   Bajo prefers-reduced-motion la transición es instantánea (reset global).
 */
const WhatsAppFab = ({ visible }) => (
  <a
    className={`wa-fab ${visible ? "is-visible" : ""}`}
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener"
    aria-label={`Contactar por WhatsApp (${NEW_TAB_HINT})`}
    tabIndex={visible ? 0 : -1}
  >
    <IconWhatsApp size={28} />
    <span className="wa-fab__text">Escríbenos por WhatsApp</span>
  </a>
);

export default WhatsAppFab;
