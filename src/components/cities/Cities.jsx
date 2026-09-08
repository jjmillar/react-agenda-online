import cities, { mapsSearchUrl } from "../../config/cities";
import { BOOKING_URL, NEW_TAB_HINT } from "../../config/site";
import { IconExternal, IconPin } from "../icons/Icons";
import "./Cities.scss";

/**
 * "Ciudades que visitamos": la clínica es itinerante. Sólo Antofagasta tiene
 * dirección fija; en el resto, el lugar cambia según la gira y se confirma al
 * reservar. Cada tarjeta enlaza a la agenda online.
 */
const Cities = () => (
  <section className="section section--alt cities" id="ciudades">
    <div className="container">
      <div className="section__head reveal">
        <span className="section__eyebrow">Dónde estamos</span>
        <h2>Ciudades que visitamos en el norte de Chile</h2>
        <p className="section__lead">
          Las fechas de cada gira se anuncian en Instagram y en la agenda online.
          Reserva para ver la disponibilidad por ciudad.
        </p>
      </div>

      <ul className="cities__grid">
        {cities.map((city, i) => (
          <li
            key={city.id}
            className="city-card reveal"
            style={{ "--reveal-delay": `${Math.min(i, 4) * 60}ms` }}
          >
            <h3 className="city-card__name">
              <IconPin size={18} />
              {city.name}
            </h3>
            {city.address ? (
              <p className="city-card__address">{city.address}</p>
            ) : (
              <p className="city-card__address city-card__address--tba">
                La dirección varía según la gira y se confirma al reservar.
              </p>
            )}

            <div className="city-card__links">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener"
                aria-label={`Reservar cita en ${city.name} (${NEW_TAB_HINT})`}
              >
                Reservar en {city.name} <IconExternal />
              </a>
              {city.address && (
                <a
                  className="city-card__maps"
                  href={mapsSearchUrl(city)}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Ver ${city.name} en Google Maps (${NEW_TAB_HINT})`}
                >
                  Ver en Google Maps
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Cities;
