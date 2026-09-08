import BookingButton from "../booking-button/BookingButton";
import WhatsAppLink from "../whatsapp-link/WhatsAppLink";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, NEW_TAB_HINT } from "../../config/site";
import { IconInstagram } from "../icons/Icons";
import "./FinalCta.scss";

/**
 * CTA final: retoma el resultado prometido en el hero y cierra con el botón de
 * reserva grande. WhatsApp e Instagram quedan como acciones secundarias.
 */
const FinalCta = () => (
  <section className="section final-cta">
    <div className="container final-cta__inner reveal">
      <h2>Tu piel, más luminosa y natural, empieza con una cita</h2>
      <p>
        Reserva tu valoración en la agenda online. Te confirmamos disponibilidad
        por ciudad y resolvemos tus dudas antes de decidir.
      </p>

      <BookingButton size="lg">Pide tu hora</BookingButton>

      <div className="final-cta__secondary">
        <WhatsAppLink variant="outline">Escríbenos por WhatsApp</WhatsAppLink>
        <a
          className="final-cta__ig"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener"
          aria-label={`Instagram ${INSTAGRAM_HANDLE} (${NEW_TAB_HINT})`}
        >
          <IconInstagram size={18} />
          {INSTAGRAM_HANDLE}
        </a>
      </div>
    </div>
  </section>
);

export default FinalCta;
