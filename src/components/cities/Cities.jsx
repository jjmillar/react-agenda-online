import cities, { mapsSearchUrl } from "../../config/cities";
import { BOOKING_URL, NEW_TAB_HINT } from "../../config/site";
import { IconExternal, IconPin } from "../icons/Icons";
import "./Cities.scss";

/**
 * "Ciudades que visitamos": la clínica es itinerante. Cada tarjeta muestra la
 * dirección de la sede y enlaza a la agenda online (las fechas de gira se
 * anuncian en Instagram y en la agenda). Sin mapa embebido: sólo un enlace de
 * búsqueda a Google Maps por si el usuario lo necesita.
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
            <p className="city-card__address">{city.address}</p>

            <div className="city-card__links">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener"
                aria-label={`Reservar cita en ${city.name} (${NEW_TAB_HINT})`}
              >
                Reservar en {city.name} <IconExternal />
              </a>
              <a
                className="city-card__maps"
                href={mapsSearchUrl(city)}
                target="_blank"
                rel="noopener"
                aria-label={`Ver ${city.name} en Google Maps (${NEW_TAB_HINT})`}
              >
                Ver en Google Maps
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Cities;
