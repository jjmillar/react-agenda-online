/**
 * Menú de tratamientos — Estética Girardi.
 * Fuente: investigación sobre la agenda online (app.agendapia.com/girardiclinica)
 * y la bio de Instagram.
 *
 * No se muestran precios en la web: el valor de cada tratamiento se entrega en
 * la valoración según la zona, el producto y el número de sesiones.
 *
 * Algunas descripciones son redacciones estándar correctas para el tipo de
 * tratamiento, pero NO provienen de textos propios de la clínica. Están marcadas
 * con un comentario `TODO: validar descripción con la clínica`.
 */

const treatments = [
  {
    id: "toxina-botulinica",
    name: "Toxina botulínica (Dysport)",
    tagline: "Arrugas de expresión",
    description:
      "Relaja de forma temporal los músculos que marcan el entrecejo, la frente y las patas de gallo, suavizando el rostro y previniendo nuevas líneas. Se aplica marca Dysport en una sesión de unos 30 minutos, con retoque incluido a partir del día 14. Los resultados se ven en pocos días y duran entre 3 y 4 meses.",
  },
  {
    id: "acido-hialuronico",
    name: "Ácido hialurónico",
    tagline: "Volumen e hidratación",
    description:
      "Los rellenos con ácido hialurónico devuelven volumen y definición a labios, pómulos, surcos, mentón y ojeras, además de hidratar y mejorar la calidad de la piel. Es un procedimiento ambulatorio, con resultados inmediatos y reversibles, y una duración habitual de 6 a 12 meses según la zona y el producto. Se realiza tras evaluación para lograr un resultado natural y armónico.",
  },
  {
    id: "morpheus-8",
    name: "Morpheus 8",
    tagline: "Microneedling con radiofrecuencia",
    // TODO: validar descripción con la clínica
    description:
      "Combina microagujas y radiofrecuencia fraccionada para remodelar la piel en profundidad: estimula colágeno, reafirma tejidos y mejora textura, poros dilatados, cicatrices de acné y flacidez incipiente en rostro, cuello y cuerpo. Requiere una o varias sesiones espaciadas, con enrojecimiento leve de 1 a 3 días como principal tiempo de recuperación. Los resultados son progresivos durante las semanas siguientes.",
  },
  {
    id: "hifu",
    name: "HIFU",
    tagline: "Lifting sin cirugía",
    // TODO: validar descripción con la clínica (confirmar si el equipo es HIFU 22D)
    description:
      "El ultrasonido microfocalizado de alta intensidad llega a distintas profundidades para estimular colágeno en las capas profundas de la piel y el SMAS, con un efecto tensor y de reafirmación en rostro, cuello, papada y zonas corporales. Es un procedimiento no invasivo, sin tiempo de recuperación, con resultados que se aprecian de forma progresiva durante 2 a 3 meses y se prolongan cerca de un año.",
  },
  {
    id: "skinbooster",
    name: "Skinbooster",
    tagline: "Hidratación profunda",
    // TODO: validar descripción con la clínica
    description:
      "Microinyecciones de ácido hialurónico de baja densidad que hidratan la piel desde el interior y mejoran luminosidad, elasticidad y las finas líneas de deshidratación en rostro, cuello, escote y manos. Se recomienda un esquema inicial de 2 a 3 sesiones y luego mantención.",
  },
  {
    id: "bioestimuladores",
    name: "Bioestimuladores de colágeno",
    tagline: "Firmeza gradual y natural",
    // TODO: validar descripción con la clínica
    description:
      "Inducen la producción natural de colágeno para mejorar de forma gradual la firmeza, densidad y calidad de la piel, corrigiendo flacidez y pérdida de volumen con un resultado muy natural y de larga duración (hasta cerca de 2 años). Se aplican en sesiones espaciadas varias semanas.",
  },
  {
    id: "polinucleotidos",
    name: "Polinucleótidos (ADN de salmón)",
    tagline: "Regeneración de la piel",
    // TODO: validar descripción con la clínica
    description:
      "Tratamiento regenerador a base de polinucleótidos, habitualmente de origen marino, que mejora la hidratación profunda, la elasticidad y la reparación de la piel, atenuando líneas finas y mejorando ojeras y textura. Suele indicarse en un esquema de varias sesiones.",
  },
  {
    id: "vitaminas",
    name: "Vitaminas y sueros",
    tagline: "Luminosidad y aporte antioxidante",
    // TODO: validar descripción con la clínica
    description:
      "Protocolos de aporte de vitaminas y antioxidantes —vía mesoterapia facial o sueros— orientados a mejorar luminosidad, hidratación y aspecto general de la piel, y a complementar otros tratamientos estéticos.",
  },
];

export default treatments;
