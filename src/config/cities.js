/**
 * Ciudades que visita la clínica itinerante — Estética Girardi.
 *
 * Sólo Antofagasta tiene una sede con dirección fija. En el resto de ciudades
 * el lugar de atención cambia según la gira, por eso no se publica dirección:
 * se confirma al reservar y se anuncia en Instagram.
 *
 * TODO: verificar con la clínica la dirección exacta de Antofagasta (tildes,
 * numeración de oficina) antes de publicar.
 */

const cities = [
  {
    id: "antofagasta",
    name: "Antofagasta",
    address: "14 de Febrero #2065, of. 202, Edificio Estudio 14 (2.º piso)",
  },
  { id: "arica", name: "Arica" },
  { id: "calama", name: "Calama" },
  { id: "iquique", name: "Iquique" },
  { id: "la-serena", name: "La Serena" },
];

// Enlace de búsqueda a Google Maps: usa la dirección si existe, si no la ciudad.
export const mapsSearchUrl = (city) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    city.address ? `${city.address}, ${city.name}, Chile` : `${city.name}, Chile`
  )}`;

export default cities;
