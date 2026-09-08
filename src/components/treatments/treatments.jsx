import treatments from "../../config/treatments";
import { BOOKING_URL, NEW_TAB_HINT } from "../../config/site";
import { IconExternal } from "../icons/Icons";
import "./Treatments.scss";

/**
 * Grilla de tratamientos. Los datos viven en src/config/treatments.js.
 * Sólo la toxina botulínica muestra precios (tarifas reales de la agenda);
 * el resto se cotiza en la valoración.
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

              {t.prices && (
                <div className="treatment-card__prices">
                  <table>
                    <caption className="visually-hidden">
                      Tarifas de {t.name}
                    </caption>
                    <tbody>
                      {t.prices.map((p) => (
                        <tr key={p.label}>
                          <th scope="row">{p.label}</th>
                          <td>{p.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {t.priceNote && (
                    <p className="treatment-card__price-note">{t.priceNote}</p>
                  )}
                </div>
              )}
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
        Los precios de los demás tratamientos se entregan en la valoración, según
        la zona y el producto.
      </p>
    </div>
  </section>
);

export default Treatments;
