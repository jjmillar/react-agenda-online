/**
 * Ciudades que visita la clínica itinerante — Estética Girardi.
 * Direcciones extraídas del render de la agenda online
 * (app.agendapia.com/girardiclinica).
 *
 * TODO: verificar con la clínica las tildes, la numeración exacta de
 * oficina/departamento y la vigencia de cada sede antes de publicar; las sedes
 * pueden rotar según la gira.
 *
 * El enlace de mapa usa una búsqueda genérica de Google Maps (no un mapa
 * embebido) porque las direcciones pueden cambiar entre giras.
 */

const cities = [
  {
    id: "antofagasta",
    name: "Antofagasta",
    address: "14 de Febrero #2065, of. 202, Edificio Estudio 14 (2.º piso)",
  },
  {
    id: "arica",
    name: "Arica",
    address: "Av. Cmdte. San Martín 320, depto. 705, torre 1",
  },
  {
    id: "calama",
    name: "Calama",
    address: "Bartolomé Vivar 1536",
  },
  {
    id: "iquique",
    name: "Iquique",
    address: "Capitán Roberto Pérez 2791, depto. 404",
  },
  {
    id: "la-serena",
    name: "La Serena",
    address: "Peñuelas Norte 186",
  },
];

export const mapsSearchUrl = (city) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${city.address}, ${city.name}, Chile`
  )}`;

export default cities;
