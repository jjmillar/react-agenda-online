import "./Faq.scss";

/**
 * Preguntas frecuentes con <details>/<summary> nativos (accesible y sin JS).
 * Sólo se mencionan precios reales (rango de toxina botulínica); el resto se
 * cotiza en la valoración.
 */
const FAQS = [
  {
    q: "¿Cuánto cuestan los tratamientos?",
    a: "La toxina botulínica (Dysport) tiene tarifas publicadas, desde $49.900 por 1 zona hasta $149.900 por 7 zonas, con retoque incluido a partir del día 14. El precio del resto de los tratamientos depende de la zona, el producto y el número de sesiones, y se entrega en la valoración.",
  },
  {
    q: "¿Duele?",
    a: "La mayoría de los procedimientos son bien tolerados. En inyectables se usan agujas muy finas y, cuando corresponde, anestésico tópico. Puede haber una molestia breve, enrojecimiento leve o pequeños hematomas que ceden en pocos días.",
  },
  {
    q: "¿Cuánto duran los resultados?",
    a: "Varía por tratamiento: la toxina botulínica dura entre 3 y 4 meses; el ácido hialurónico entre 6 y 12 meses según la zona; los bioestimuladores de colágeno pueden mantenerse hasta cerca de 2 años. HIFU y Morpheus 8 dan resultados progresivos que se prolongan varios meses.",
  },
  {
    q: "¿Necesito tiempo de recuperación?",
    a: "En general no. Los inyectables permiten volver a la rutina el mismo día siguiendo indicaciones simples. Morpheus 8 puede dejar enrojecimiento de 1 a 3 días. En la valoración se explican los cuidados posteriores de cada tratamiento.",
  },
  {
    q: "¿Cómo es la primera cita?",
    a: "Es una valoración: conversamos tu objetivo, revisamos tu piel, resolvemos dudas y proponemos un plan con opciones, tiempos y orden de los tratamientos. No hay obligación de realizar ningún procedimiento ese día.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    // TODO: confirmar con la clínica los medios de pago aceptados y si hay financiamiento/cuotas
    a: "Consulta los medios de pago disponibles al momento de reservar o escríbenos por WhatsApp; te confirmamos las opciones vigentes para tu ciudad.",
  },
  {
    q: "¿Puedo cambiar o cancelar mi hora?",
    a: "Sí. Puedes modificar o cancelar tu reserva desde la misma agenda online. Al ser una clínica itinerante, te pedimos avisar con la mayor anticipación posible para reorganizar el calendario de la gira.",
  },
  {
    q: "¿En qué ciudades atienden?",
    a: "Antofagasta, Arica, Calama, Iquique y La Serena. La atención es con cita previa y las fechas de cada gira se anuncian en Instagram y en la agenda online; reserva para ver la disponibilidad por ciudad.",
  },
];

const Faq = () => (
  <section className="section faq" id="preguntas">
    <div className="container">
      <div className="section__head reveal">
        <span className="section__eyebrow">Preguntas frecuentes</span>
        <h2>Lo que suelen preguntarnos antes de reservar</h2>
      </div>

      <div className="faq__list">
        {FAQS.map((item) => (
          <details key={item.q} className="faq__item reveal">
            <summary>
              {item.q}
              <span className="faq__mark" aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
