import { BOOKING_URL, NEW_TAB_HINT } from "../../config/site";
import { IconExternal } from "../icons/Icons";
import "./BookingButton.scss";

/**
 * Botón primario de reserva. SIEMPRE apunta a la misma agenda online externa
 * y se abre en una pestaña nueva. Es el único CTA primario de la página.
 *
 * Props:
 * - children: texto del botón (por defecto "Reservar cita").
 * - variant: "solid" (defecto) | "ghost" (para las tarjetas de tratamiento).
 * - size: "md" (defecto) | "lg" (hero y CTA final).
 * - block: ocupa todo el ancho disponible.
 * - className: clases extra.
 */
const BookingButton = ({
  children = "Reservar cita",
  variant = "solid",
  size = "md",
  block = false,
  className = "",
}) => {
  const label = typeof children === "string" ? children : "Reservar cita";

  return (
    <a
      className={[
        "booking-btn",
        `booking-btn--${variant}`,
        `booking-btn--${size}`,
        block ? "booking-btn--block" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      href={BOOKING_URL}
      target="_blank"
      rel="noopener"
      aria-label={`${label} (${NEW_TAB_HINT})`}
    >
      <span>{children}</span>
      <IconExternal />
    </a>
  );
};

export default BookingButton;
