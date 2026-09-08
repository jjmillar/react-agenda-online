import { useEffect, useState } from "react";
import logo from "../../assets/common/logo.svg";
import BookingButton from "../booking-button/BookingButton";
import { NAV_LINKS } from "../../config/site";
import "./Header.scss";

/**
 * Header fijo: logo + nombre + navegación por anclas + botón de reserva
 * siempre visible. En móvil la navegación se colapsa en un menú hamburguesa
 * (CSS + mínimo JS); el botón "Reservar cita" permanece visible.
 */
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cerrar el menú al pasar a escritorio o al pulsar Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <a className="site-header__brand" href="#inicio" aria-label="Estética Girardi, ir al inicio">
          <img src={logo} width="34" height="40" alt="" />
          <span>Estética Girardi</span>
        </a>

        <nav
          className={`site-header__nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <BookingButton className="site-header__cta">Reservar cita</BookingButton>

          <button
            type="button"
            className={`site-header__burger ${menuOpen ? "is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Panel desplegable móvil */}
      <div
        id="menu-principal"
        className={`site-header__drawer ${menuOpen ? "is-open" : ""}`}
        hidden={!menuOpen}
      >
        <nav aria-label="Navegación móvil">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
