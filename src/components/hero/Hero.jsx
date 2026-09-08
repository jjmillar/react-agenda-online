import BookingButton from "../booking-button/BookingButton";
import { IconCheck } from "../icons/Icons";
import "./Hero.scss";

/**
 * Hero: titular de resultado (serif), una frase de apoyo, el único CTA
 * dominante + microcopy y una franja de confianza construida SOLO con datos
 * reales de la clínica.
 */
const TRUST = [
  "Clínica estética itinerante por el norte de Chile",
  "Agenda online en menos de 1 minuto",
  "Toxina botulínica Dysport con retoque incluido",
];

const Hero = () => (
  <section className="hero" id="inicio">
    <div className="hero__bg" aria-hidden="true" />
    <div className="hero__inner container">
      <div className="hero__content">
        <p className="hero__eyebrow">Medicina estética · Norte de Chile</p>
        <h1 className="hero__title">
          Tu piel, más luminosa y natural, a tu ritmo
        </h1>
        <p className="hero__lead">
          Viajamos a distintas ciudades del norte de Chile con tratamientos de
          vanguardia. Reserva tu valoración y define un plan pensado para ti.
        </p>

        <div className="hero__cta">
          <BookingButton size="lg">Reserva tu cita online</BookingButton>
          <p className="hero__microcopy">
            Reserva en menos de 1 minuto · Sin compromiso
          </p>
        </div>

        <ul className="hero__trust">
          {TRUST.map((item) => (
            <li key={item}>
              <IconCheck />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__media">
        <img
          src="/images/3.jpg"
          width="1080"
          height="1080"
          alt="Sesión de tratamiento estético en Estética Girardi"
          fetchpriority="high"
          decoding="async"
        />
      </div>
    </div>
  </section>
);

export default Hero;
