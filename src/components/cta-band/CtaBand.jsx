import BookingButton from "../booking-button/BookingButton";
import WhatsAppLink from "../whatsapp-link/WhatsAppLink";
import "./CtaBand.scss";

/**
 * Franja de CTA de media página. Fondo --surface-alt, titular + botón de
 * reserva + una línea de tranquilidad + enlace secundario a WhatsApp.
 */
const CtaBand = () => (
  <section className="section section--alt cta-band">
    <div className="container cta-band__inner reveal">
      <div>
        <h2>Da el primer paso con una valoración</h2>
        <p className="cta-band__reassure">
          Sin compromiso: conversamos tu objetivo y te explicamos las opciones
          antes de decidir nada.
        </p>
      </div>
      <div className="cta-band__actions">
        <BookingButton size="lg">Reserva tu cita online</BookingButton>
        <WhatsAppLink>¿Tienes dudas? Escríbenos por WhatsApp</WhatsAppLink>
      </div>
    </div>
  </section>
);

export default CtaBand;
