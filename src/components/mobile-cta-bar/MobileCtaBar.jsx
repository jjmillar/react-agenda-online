import { BOOKING_URL, WHATSAPP_URL, NEW_TAB_HINT } from "../../config/site";
import { IconWhatsApp, IconExternal } from "../icons/Icons";
import "./MobileCtaBar.scss";

/**
 * Barra de CTA fija inferior — sólo en móvil (<768px). Aparece deslizándose
 * hacia arriba (sólo transform, sin provocar CLS) cuando el usuario ha pasado
 * el hero. Izquierda ~70% "Reservar cita" (sólido), derecha ~30% WhatsApp
 * (contorno). Ambos objetos táctiles ≥ 48px.
 *
 * Props:
 * - visible: boolean — controla el deslizamiento.
 */
const MobileCtaBar = ({ visible }) => (
  <div
    className={`mobile-cta ${visible ? "is-visible" : ""}`}
    role="region"
    aria-label="Acciones rápidas"
  >
    <a
      className="mobile-cta__book"
      href={BOOKING_URL}
      target="_blank"
      rel="noopener"
      aria-label={`Reservar cita (${NEW_TAB_HINT})`}
      tabIndex={visible ? 0 : -1}
    >
      Reservar cita <IconExternal />
    </a>
    <a
      className="mobile-cta__wa"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label={`Contactar por WhatsApp (${NEW_TAB_HINT})`}
      tabIndex={visible ? 0 : -1}
    >
      <IconWhatsApp size={22} />
    </a>
  </div>
);

export default MobileCtaBar;
