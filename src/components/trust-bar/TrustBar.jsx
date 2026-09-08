import { IconPin } from "../icons/Icons";
import "./TrustBar.scss";

/**
 * Franja fina con las ciudades reales que atiende la clínica itinerante.
 * No incluye valoraciones, años ni cifras de pacientes: no hay datos verificados.
 */
const CITIES = ["Antofagasta", "Arica", "Calama", "Iquique", "La Serena"];

const TrustBar = () => (
  <div className="trust-bar">
    <div className="container trust-bar__inner">
      <span className="trust-bar__label">
        <IconPin size={18} />
        Ciudades que visitamos
      </span>
      <ul className="trust-bar__cities">
        {CITIES.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
      <span className="trust-bar__note">Atención con cita previa</span>
    </div>
  </div>
);

export default TrustBar;
