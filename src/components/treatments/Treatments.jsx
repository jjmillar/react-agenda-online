import treatments from "../../config/treatments";
import { BOOKING_URL, NEW_TAB_HINT } from "../../config/site";
import { IconExternal } from "../icons/Icons";
import "./Treatments.scss";

/**
 * Grilla de tratamientos. Los datos viven en src/config/treatments.js.
 * La web no muestra precios: el valor se entrega en la valoración.
 */
const Treatments = () => (
  <section className="section treatments" id="tratamientos">
    <div className="container">
      <div className="section__head reveal">
        <span className="section__eyebrow">Tratamientos</span>
        <h2>Un menú de medicina estética centrado en resultados naturales</h2>
        <p className="section__lead">
          Inyectables, bioestimulación y tecnología para la piel. Cada
          tratamiento parte de una valoración para ajustar el plan a tu caso.
        </p>
      </div>

      <ul className="treatments__grid">
        {treatments.map((t, i) => (
          <li
            key={t.id}
            className="treatment-card reveal"
            style={{ "--reveal-delay": `${Math.min(i, 5) * 60}ms` }}
          >
            <div className="treatment-card__body">
              <p className="treatment-card__tag">{t.tagline}</p>
              <h3 className="treatment-card__name">{t.name}</h3>
              <p className="treatment-card__desc">{t.description}</p>
            </div>

            <a
              className="treatment-card__cta"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              aria-label={`Reservar ${t.name} (${NEW_TAB_HINT})`}
            >
              Reservar <IconExternal />
            </a>
          </li>
        ))}
      </ul>

      <p className="treatments__foot reveal">
        Cada plan se define en la valoración según la zona, el producto y el
        número de sesiones.
      </p>
    </div>
  </section>
);

export default Treatments;
