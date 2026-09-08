import logo from "../../assets/common/logo.svg";
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  WHATSAPP_URL,
  NAV_LINKS,
  NEW_TAB_HINT,
} from "../../config/site";
import { IconInstagram, IconWhatsApp } from "../icons/Icons";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src={logo} width="32" height="38" alt="" />
          <span>Estética Girardi</span>
        </div>

        <nav className="site-footer__nav" aria-label="Navegación del pie de página">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__social">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            aria-label={`Instagram ${INSTAGRAM_HANDLE} (${NEW_TAB_HINT})`}
          >
            <IconInstagram />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            aria-label={`WhatsApp (${NEW_TAB_HINT})`}
          >
            <IconWhatsApp />
          </a>
        </div>
      </div>

      <div className="container site-footer__legal">
        <p>
          Los tratamientos estéticos requieren evaluación previa. Los resultados
          individuales pueden variar.
        </p>
        <p className="site-footer__meta">
          {/* TODO: enlazar los documentos reales de Aviso legal y Política de privacidad */}
          <span>© {year} Estética Girardi</span>
          <a href="#">Aviso legal</a>
          <a href="#">Política de privacidad</a>
        </p>
        <p className="site-footer__credit">
          Sitio desarrollado por <strong>JJ Studio</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
