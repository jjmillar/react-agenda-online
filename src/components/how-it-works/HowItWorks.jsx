import "./HowItWorks.scss";

/**
 * "Cómo funciona": 4 pasos con numeración en CSS. Reduce la ansiedad
 * logística antes de reservar.
 */
const STEPS = [
  {
    title: "Reserva online",
    text: "Elige ciudad, tratamiento y horario disponible en la agenda. Tarda menos de un minuto.",
  },
  {
    title: "Primera valoración",
    text: "Conversamos tu objetivo, revisamos tu piel y resolvemos dudas sin compromiso.",
  },
  {
    title: "Plan personalizado",
    text: "Definimos qué tratamientos, en qué orden y con qué frecuencia, según tu caso.",
  },
  {
    title: "Seguimiento",
    text: "Controlamos resultados y agendamos los retoques o sesiones de mantención.",
  },
];

const HowItWorks = () => (
  <section className="section how" id="como-funciona">
    <div className="container">
      <div className="section__head reveal">
        <span className="section__eyebrow">Cómo funciona</span>
        <h2>De la reserva al seguimiento, sin sorpresas</h2>
      </div>

      <ol className="how__steps">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="how__step reveal"
            style={{ "--reveal-delay": `${i * 60}ms` }}
          >
            <span className="how__num" aria-hidden="true">
              {i + 1}
            </span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
