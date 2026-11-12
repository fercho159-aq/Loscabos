// Agenda del preview /programacion-2026-preview.
//
// Fuente: FICCLosCabos_Programa.pdf (programa del 10-nov-2026) más los cambios
// de Mafer por WhatsApp (10-nov-2026):
//   A) Work in Progress — Insectario pasa del jueves 10 al viernes 11
//      (9:00–11:00, Cinépolis San José del Cabo).
//   B) Zoé: el conversatorio es con Olmo Guerra (no Olmo Rodríguez).
//
// Texto del PDF con erratas corregidas (Inaugural, Conversatorio, 77´,
// "12:30 – 12:45", Mighty Studios). En las descripciones, `**x**` es negrita,
// `*x*` itálica, "\n" salto de renglón y "\n\n" párrafo aparte.

/**
 * Fragmento de texto; `italic` reproduce las itálicas del PDF. Un segmento
 * con `softBreak` es un salto de renglón del PDF que solo se aplica en
 * escritorio (en móvil el texto vuelve a fluir).
 */
export type AgendaSegment = { text: string; italic?: boolean; softBreak?: boolean };
/** Una línea de texto; cada línea nueva es un salto forzado del PDF. */
export type AgendaLine = AgendaSegment[];

export type AgendaEvent = {
  id: string;
  /** Hora tal cual aparece en el PDF (en-dash, espaciado y " hrs"). */
  time: string;
  title: AgendaLine[];
  /** Ficha en negrita bajo el título; admite `*itálica*`. */
  subtitle?: string;
  /** `**negrita**`, `*itálica*`, "\n" salto de renglón, "\n\n" párrafo. */
  description?: string;
  location?: string;
  /**
   * Ubicación quitada por el cliente: se conserva su hueco (en escritorio)
   * para mantener el ritmo vertical de sus artboards corregidos.
   */
  locationRemoved?: boolean;
  /** Tracking propio del título cuando el PDF lo comprime (px de 1920). */
  titleLetterSpacing?: string;
  /** Ficha existente en /programacion-2026-preview/<slug>. */
  href?: string;
};

export type AgendaBlock = {
  /** Fondo de la banda. */
  bg: string;
  /** Color de todo el texto de la banda. */
  text: string;
  /** Color de la línea bajo la hora. */
  rule: string;
  /**
   * Borde izquierdo de la columna en el artboard de 1920 px (por defecto
   * 113). Algunas bandas del PDF van unos píxeles más a la izquierda.
   */
  x?: number;
  events: AgendaEvent[];
};

export type AgendaDay = {
  id: string;
  label: string;
  blocks: AgendaBlock[];
};

export type AgendaCardDecoration =
  | "diamonds"
  | "hexagons"
  | "ellipses"
  | "arc"
  | "chevrons"
  | "star";

export type AgendaSectionCard = {
  id: string;
  title: AgendaLine[];
  time: string;
  location: string;
  description: AgendaLine[];
  access: string;
  bg: string;
  text: string;
  decoration: AgendaCardDecoration;
};

const t = (text: string): AgendaSegment => ({ text });
const i = (text: string): AgendaSegment => ({ text, italic: true });
const softBreak: AgendaSegment = { text: "", softBreak: true };
const line = (...segments: AgendaSegment[]): AgendaLine => segments;
const plain = (text: string): AgendaLine[] => [[t(text)]];


const NAVY = "#0A1E23";
const CREAM = "#EDE6DC";
const BLUE = "#A3CDD8";
const SAGE = "#8FA79D";
const PEACH = "#EFA26F";
const TERRACOTTA = "#D97A5B";

const SALA_8 = "Cinépolis San José del Cabo | Sala 8";
const CINEPOLIS = "Cinépolis San José del Cabo";
const GANZO_GALERIA = "Hotel El Ganzo — Galería";
const GANZO_ROOFTOP = "Hotel El Ganzo — Rooftop";
const JW = "JW Marriott";
const JW_ANFITEATRO = "JW Marriott — Anfiteatro";
const ZADUN_SUITE = "Zadún Ritz-Carlton Reserve — Suite";
const MARINA = "La Marina Puerto Los Cabos";

// Las fichas de eventos completas viven en la ruta pública; el preview solo tiene tres.
const EVENTO = (slug: string) => `/programacion-2026/${slug}`;
const PELICULA = (slug: string) => `/programacion-2026-preview/peliculas/${slug}`;
const LBI = "/programacion-2026-preview/la-baja-inspira";
const FFGF = "/ffgf";
const FON = "/programacion-2026-preview/frequencies-of-now";

const sage = (events: AgendaEvent[]): AgendaBlock => ({ bg: SAGE, text: CREAM, rule: CREAM, events });
const peach = (events: AgendaEvent[]): AgendaBlock => ({ bg: PEACH, text: CREAM, rule: CREAM, events });
const terracotta = (events: AgendaEvent[]): AgendaBlock => ({
  bg: TERRACOTTA,
  text: CREAM,
  rule: CREAM,
  events,
});
const blue = (events: AgendaEvent[]): AgendaBlock => ({ bg: BLUE, text: NAVY, rule: NAVY, events });

/** "Prefijo — *Nombre*" (p. ej. "Taller — La Baja Inspira"). */
const titled = (prefix: string, name: string): AgendaLine[] => [line(t(`${prefix} — `), i(name))];
/** "Keynote — *Tema* | Persona · Cargo" en un solo párrafo que fluye. */
const keynote = (prefix: string, topic: string, who: string): AgendaLine[] => [
  line(t(`${prefix} — `), i(topic), t(` | ${who}`)),
];

/** Los tres talleres de 9:00–11:00 que se repiten jueves, viernes y sábado. */
const talleres = (day: string, session: number): AgendaEvent[] => [
  {
    id: `${day}-taller-lbi`,
    time: "9:00–11:00 hrs",
    title: titled("Taller", "La Baja Inspira"),
    href: LBI,
    description: `Sesión ${session} · Jurados y proyectos seleccionados`,
  },
  {
    id: `${day}-taller-ffgf`,
    time: "9:00–11:00 hrs",
    title: titled("Taller", "Fondo Fílmico Gabriel Figueroa"),
    href: FFGF,
    description: `Sesión ${session} · Jurados y proyectos seleccionados`,
    location: GANZO_GALERIA,
  },
  {
    id: `${day}-taller-fon`,
    time: "9:00–11:00 hrs",
    title: titled("Taller", "Frequencies of Now"),
    href: FON,
    description: `Sesión ${session} · Jurados y proyectos seleccionados`,
    location: JW,
  },
];

export const agenda2026: AgendaDay[] = [
  {
    id: "2026-12-09",
    label: "Miércoles 9 de diciembre",
    blocks: [
      blue([
        {
          id: "2026-12-09-inauguracion",
          time: "20:00–20:15 hrs",
          title: plain("Inauguración oficial"),
          description: "Ceremonia inaugural",
          location: GANZO_ROOFTOP,
        },
        {
          id: "2026-12-09-elsinore",
          time: "20:15–22:20 hrs",
          title: titled("Proyección Inaugural", "Elsinore"),
          subtitle: "Dir. Simon Stone · Reino Unido, Estados Unidos e Italia · 2026 · 111´",
          description: "Conversatorio postproyección",
          location: MARINA,
          href: PELICULA("elsinore"),
        },
        {
          id: "2026-12-09-fiesta",
          time: "22:20–00:00 hrs",
          title: plain("Cóctel + Fiesta inaugural"),
          location: MARINA,
        },
      ]),
    ],
  },
  {
    id: "2026-12-10",
    label: "Jueves 10 de diciembre",
    blocks: [
      sage(talleres("2026-12-10", 1)),
      peach([
        {
          id: "2026-12-10-rosenbaum",
          time: "11:30 – 11:55 hrs",
          title: keynote(
            "Keynote",
            "Shaping the Next Wave of Creative Convergence",
            "Greg Rosenbaum · Senior Vice President Programming SXSW",
          ),
          description:
            "¿Cómo han evolucionado las tendencias que están transformando las industrias creativas? A través de la mirada de Rosenbaum (SXSW), exploraremos los cambios más relevantes de la última década en cine, televisión, música, tecnología, comedia y educación, así como la relación del festival con México y las tendencias que marcarán el rumbo hacia 2027",
          location: SALA_8,
          href: EVENTO("keynote-greg-rosenbaum"),
        },
        {
          id: "2026-12-10-segoviano",
          time: "11:55 – 12:20 hrs",
          title: keynote(
            "Keynote",
            "Filmar en México: el territorio como infraestructura de producción",
            "Diana Segoviano · Coordinadora General de la Comisión Mexicana de Filmaciones (COMEFILM)",
          ),
          description:
            "¿Cómo está cambiando el mapa de la producción audiovisual y qué oportunidades representa para México? Una conversación sobre el papel estratégico de los territorios en los procesos creativos y de producción, los factores que hacen competitivo a un destino y cómo México puede aprovechar las capacidades de sus distintas regiones para fortalecer su conexión con la industria audiovisual global",
          location: SALA_8,
          href: EVENTO("keynote-diana-segoviano"),
        },
        {
          id: "2026-12-10-tender-loving-care",
          time: "12:20 – 14:15 hrs",
          title: titled("Proyección + Q&A", "Tender Loving Care"),
          subtitle: "Dir. Mike Leigh · Reino Unido · 2026 · 108´",
          description: "Q&A",
          location: SALA_8,
        },
        {
          id: "2026-12-10-dolores-heredia",
          time: "14:15 – 14:45 hrs",
          title: plain("Homenaje a Dolores Heredia"),
          description:
            "FICCLosCabos 2026 rinde homenaje a Dolores Heredia, una de las actrices más representativas del cine mexicano contemporáneo. Presentado por **José María Yazpik**, este encuentro celebrará su trayectoria artística a través de una retrospectiva audiovisual de su vida y obra, recordando algunos de los momentos más significativos de su carrera y su vínculo con Baja California Sur",
          location: SALA_8,
          href: EVENTO("homenaje-dolores-heredia"),
        },
      ]),
      terracotta([
        {
          id: "2026-12-10-lunch",
          time: "15:00 – 16:00 hrs",
          title: plain("Lunch"),
          description: "Lunch de Industria",
        },
        {
          id: "2026-12-10-panel-lbi",
          time: "16:00 – 16:45 hrs",
          title: titled("Panel", "La Baja Inspira"),
          href: LBI,
          description:
            "Presentación del proceso de selección y anuncio de los proyectos ganadores de cada categoría, seguida de la proyección de los documentales seleccionados. Moderado por **Iván Carrillo**",
        },
        {
          id: "2026-12-10-dj-set",
          time: "17:00 – 18:00 hrs",
          title: plain("DJ Set"),
        },
      ]),
      blue([
        {
          id: "2026-12-10-un-passo-alla-volta",
          time: "18:30–19:00 hrs",
          title: titled("Proyección + Q&A", "Un Passo Alla Volta"),
          subtitle: "Dir. Simone Coppo · Italia · 2026 · 14´",
          description:
            "El cortometraje de **Simone Coppo** y **Martina Ferragamo** estrenado en el Teatro La Fenice dentro de la *Mostra de Venecia*. Una reflexión sobre los nuevos comienzos y sobre el tiempo que toma convertir un legado en una elección propia\nQ&A con Martina Ferragamo y Simone Coppo. Moderado por **Rodrigo García** de Central Films",
          location: ZADUN_SUITE,
        },
        {
          id: "2026-12-10-not-not-jazz",
          time: "19:00–20:30 hrs",
          title: titled("Proyección + Conversatorio", "Medeski, Martin & Wood: Not not jazz"),
          subtitle: "Dir. Billy Martin · Estados Unidos · 2024 · 77´",
          description:
            "Conversatorio postproyección con Billy Martin y **Nicolás Celis** (fundador de Pimienta Films)",
          location: ZADUN_SUITE,
        },
        {
          id: "2026-12-10-coctel-ferragamo",
          time: "21:30–22:30 hrs",
          title: plain("Cóctel — En alianza con Ferragamo"),
          description: "**Jam Billy Martin** + talento local",
          location: ZADUN_SUITE,
        },
        {
          id: "2026-12-10-dj-mo",
          time: "22:30–00:00 hrs",
          title: plain("DJ MO"),
          description: "DJ set",
          location: ZADUN_SUITE,
        },
      ]),
    ],
  },
  {
    id: "2026-12-11",
    label: "Viernes 11 de diciembre",
    blocks: [
      sage([
        ...talleres("2026-12-11", 2),
        {
          id: "2026-12-11-insectario",
          time: "9:00–11:00 hrs",
          title: titled("Work in Progress", "Insectario"),
          description:
            "Un acercamiento al proceso creativo y de producción de Insectario a través de un caso de estudio presentado por su directora, **Sofía Carrillo**, y su coproductor, **Matīss Kaža** (Letonia). Una conversación para conocer el desarrollo de la película, sus desafíos creativos y la experiencia de colaboración internacional detrás del proyecto",
          location: CINEPOLIS,
          href: EVENTO("work-in-progress-insectario"),
        },
      ]),
      peach([
        {
          id: "2026-12-11-jalisco",
          time: "11:30 – 12:05 hrs",
          title: keynote(
            "Conversatorio",
            "De la idea a la industria",
            "Alfredo Aceves · Presidente del Fideicomiso Ciudad Creativa Digital y Alejandro Tavares · Director de FILMA Jalisco",
          ),
          description:
            "¿Qué oportunidades ofrece Jalisco a los profesionales de las industrias creativas y audiovisuales? Una conversación para conocer de cerca el trabajo de Ciudad Creativa Digital y Filma Jalisco, los apoyos y recursos que ofrecen a creadores y empresas y cómo acceder a ellos. Abordaremos también cómo profesionales de otros estados y del extranjero pueden aprovechar estas iniciativas para desarrollar sus proyectos y generar nuevas colaboraciones",
          location: SALA_8,
          href: EVENTO("conversatorio-ciudad-creativa-digital-filma-jalisco"),
        },
        {
          id: "2026-12-11-claudio-jimenez",
          time: "12:05 – 12:25 hrs",
          title: keynote(
            "Keynote",
            "La transferencia de lenguajes y formatos en la creación de contenidos",
            "Claudio Jiménez · Fundador de Mighty Studios",
          ),
          description:
            "¿Cómo están evolucionando las formas de contar historias? Claudio Jiménez, fundador de Mighty Studios, explorará cómo la animación, la inteligencia artificial y el storytelling están transformando los procesos creativos y abriendo nuevas posibilidades para desarrollar historias y experimentar con distintos formatos de contenido",
          location: SALA_8,
          href: EVENTO("keynote-claudio-jimenez"),
        },
        {
          id: "2026-12-11-panel-festivales",
          time: "12:25 – 12:55 hrs",
          title: titled(
            "Panel",
            "Del circuito de festivales al reconocimiento internacional: nuevos caminos para el cine independiente",
          ),
          description:
            "Panelistas:\n**Federico Luis** · Director de *Para los contrincantes*\n**Gabriela Ortega** · Directora de *Marga en el DF*\n**Carlos López Estrada** · Productor de *Marga en el DF* y fundador de Antigravity Academy\n**Stacy Perskie** · Productor de *Marga en el DF* y fundador de REDRUM\n\n¿Cómo logra el cine independiente abrirse camino en la industria internacional? Cinco voces creativas detrás de *Para los contrincantes*, dirigido por Federico Luis y producido por Elena Fortes, y *Marga en el DF*, dirigido por Gabriela Ortega y producido por Carlos López Estrada y Stacy Perskie, compartirán sus experiencias tras destacar en el circuito internacional de festivales y emprender campañas rumbo al Óscar. Una conversación sobre las alianzas creativas, las estrategias de producción y las conexiones dentro de la industria que permiten a las historias originales alcanzar nuevas audiencias y reconocimiento internacional. Moderado por **Elena Fortes**, productora de *Para los contrincantes*",
          location: SALA_8,
          href: EVENTO("panel-del-circuito-de-festivales"),
        },
        {
          id: "2026-12-11-blaise",
          time: "12:55 – 14:40 hrs",
          title: titled("Proyección + Conversatorio", "Blaise"),
          subtitle: "Dir. Dimitri Planchon, Jean-Paul Guigue · Francia · 2026 · 82´",
          description:
            "Conversatorio postproyección con Dimitri Planchon y Jean-Paul Guigue, y **Claudio Jiménez**, Fundador de Mighty Studios",
          location: SALA_8,
          href: EVENTO("blaise"),
        },
      ]),
      terracotta([
        {
          id: "2026-12-11-lunch",
          time: "14:30 – 16:00 hrs",
          title: plain("Lunch"),
          description: "Lunch de Industria",
          location: JW_ANFITEATRO,
        },
        {
          id: "2026-12-11-panel-fon",
          time: "16:00 – 17:00 hrs",
          title: titled("Panel", "Frequencies of Now: The stories behind the music"),
          href: FON,
          description:
            "Jurados participantes:\n**Juan Patricio Riveroll** · Director, productor y Director de Extensión Académica de ESCINE\n**Rodrigo Guardiola** · Cineasta, productor y baterista de Zoé\n**Hermann Neudert** · Director y realizador audiovisual\n**Mario Escobar** · Ejecutivo de Global Talent Services (Universal Music Group) y mánager de Ed Maverick\n**Zunshu** · Creativo y miembro de la dirección de Revista 192\n\nConoce los cinco proyectos seleccionados de Frequencies of Now, plataforma internacional dedicada al documental musical. Cineastas y jurados compartirán las historias detrás de cada proyecto y explorarán cómo la música refleja la identidad, la memoria y las transformaciones culturales de nuestro tiempo. La conversación abordará también los desafíos creativos y las oportunidades de proyección internacional del documental musical. El encuentro incluirá la proyección de fragmentos de los proyectos seleccionados. Moderado por **Alejandro Tavares**, Director de Filma Jalisco",
          location: JW_ANFITEATRO,
        },
        {
          id: "2026-12-11-soulcasters",
          time: "17:00 – 18:20 hrs",
          title: titled("Showcase musical + Conversatorio", "The Soulcasters"),
          description:
            "Showcase musical y conversatorio con The Soulcasters y Anamaría Sayre (Tiny Desk)",
          location: JW_ANFITEATRO,
        },
      ]),
      blue([
        {
          id: "2026-12-11-zoe",
          time: "19:30–22:30 hrs",
          title: titled("Proyección + Conversatorio", "Zoé: Memorex + Rexsexex y Más"),
          subtitle: "Dir. Rodrigo Guardiola · México · 2026 · 182´",
          description:
            "Conversatorio postproyección con **Rodrigo Guardiola**, **Olmo Guerra** y **Fabrizio Onetto**, de OCESA",
          location: "JW Marriott — Terraza Amet",
          href: PELICULA("memorex-rexsexex-y-mas"),
        },
        {
          id: "2026-12-11-fiesta-cierre",
          time: "22:30–00:00 hrs",
          title: plain("Fiesta de cierre"),
          description: "**DJ Set x Martín Fábregas**",
          location: ZADUN_SUITE,
        },
      ]),
    ],
  },
  {
    id: "2026-12-12",
    label: "Sábado 12 de diciembre",
    blocks: [
      sage([
        ...talleres("2026-12-12", 3),
        {
          id: "2026-12-12-desayuno",
          time: "9:00–11:00 hrs",
          title: titled("Desayuno", "Mujeres en la Industria"),
          description:
            "**Participan:**\n**Claudia Cándano** · Editora en Jefe de ELLE México\n**Andrea Rendon** · Fundadora de Girls at Films\n**Griselda Siciliani** · Actriz\n\nMujeres del ecosistema fílmico mexicano e internacional, en colaboración con Girls at Films, Elle México, Hollywood Reporter y Quién",
          location: "Sage",
          href: EVENTO("desayuno-girls-at-films"),
        },
      ]),
      peach([
        {
          id: "2026-12-12-panel-ffgf",
          time: "11:30 – 12:30 hrs",
          title: titled("Panel", "Fondo Fílmico Gabriel Figueroa"),
          href: FFGF,
          description: "Presentación del proceso de selección y anuncio de los proyectos ganadores",
          location: SALA_8,
        },
        {
          id: "2026-12-12-inna-payan",
          time: "12:30 – 12:45 hrs",
          title: keynote(
            "Keynote",
            "Estrategias de producción y financiamiento para el cine independiente",
            "Inna Payán · Productora independiente",
          ),
          href: EVENTO("keynote-inna-payan"),
          description:
            "¿Cómo construir una estrategia financiera que permita llevar una película de la idea a la pantalla? A partir de su experiencia como productora independiente, Inna Payán compartirá las claves para combinar inversión privada, fondos, estímulos como EFICINE e incentivos, así como estructurar coproducciones y alianzas estratégicas. Una conversación sobre cómo hacer viables los proyectos cinematográficos sin comprometer su visión creativa",
          location: SALA_8,
        },
        {
          id: "2026-12-12-sentimental",
          time: "13:05 – 14:45 hrs",
          title: titled("Proyección + Q&A", "Sentimental"),
          subtitle: "Dir. Cesc Gay · España · 2020 · 82´",
          description: "Q&A con **Griselda Siciliani**",
          location: SALA_8,
          href: PELICULA("sentimental"),
        },
      ]),
      terracotta([
        {
          id: "2026-12-12-lunch",
          time: "15:00 – 16:00 hrs",
          title: plain("Lunch de cierre"),
          description: "Lunch de Industria",
          location: GANZO_ROOFTOP,
        },
        {
          id: "2026-12-12-kolmar",
          time: "16:00 – 16:20 hrs",
          title: keynote(
            "Keynote",
            "How to pitch your movie to a festival",
            "Jim Kolmar · Curador y programador cinematográfico internacional · SXSW Film & TV",
          ),
          description:
            "Desde su experiencia en el circuito internacional de festivales, Jim Kolmar compartirá las claves para presentar una película ante los equipos de programación, entender los criterios de selección y desarrollar estrategias que aumenten sus oportunidades de formar parte de festivales y llegar a nuevas audiencias",
          location: GANZO_ROOFTOP,
          href: EVENTO("keynote-jim-kolmar"),
        },
        {
          id: "2026-12-12-next-wave",
          time: "16:20 – 17:30 hrs",
          title: titled("Panel", "The Next Wave: Emerging Filmmakers"),
          description:
            "Presentado por **Salomon**\nCineastas participantes: **Natalia León, Mariana Mendívil, Diego Gaxiola, Karla Condado, Leo Aguirre, Amandine Thomas, Gabriela Ortega, Federico Luis, Eduardo Braun, Josefina Montino y Martín André**\n\nConoce a los 11 cineastas emergentes de América Latina que forman parte de The Next Wave, un programa dedicado a impulsar nuevas voces del cine latinoamericano. En su presentación oficial, descubriremos a los talentos seleccionados y sus perspectivas creativas. Moderado por **Carlos López Estrada**, cineasta y fundador de Antigravity Academy",
          location: SALA_8,
          href: EVENTO("panel-the-next-wave"),
        },
        {
          id: "2026-12-12-space-xmas",
          time: "17:30 – 18:30 hrs",
          title: plain("Space Xmas"),
          description: "Evento especial",
          location: "Hotel El Ganzo — Jetty",
        },
      ]),
      blue([
        {
          id: "2026-12-12-gala",
          time: "20:00–23:00 hrs",
          title: plain("Gala de Clausura + Cóctel de cierre"),
          description:
            "Presentación de ***La Baja Inspira***, ***Fondo Fílmico Gabriel Figueroa*** y ***Frequencies of Now***",
          location: "Suelo Sur",
        },
      ]),
    ],
  },
  {
    id: "2026-12-13",
    label: "Domingo 13 de diciembre",
    blocks: [
      blue([
        {
          id: "2026-12-13-aire-libre",
          time: "18:30–20:00 hrs",
          title: titled("Proyección al aire libre", "Por anunciarse"),
          description:
            "Proyección *La Baja Inspira* en alianza con **Cine Club Documental Los Cabos**",
          location: "Plaza Mijares, San José del Cabo",
          href: LBI,
        },
      ]),
    ],
  },
];

// Tarjetas de sección / leyenda (páginas 3–6 del PDF).
export const agendaSectionCards2026: AgendaSectionCard[] = [
  {
    id: "formacion-e-industria",
    title: plain("Programa de Formación e Industria"),
    time: "9:00–11:00 hrs",
    location: "Hotel El Ganzo | Cinépolis San José del Cabo",
    description: [
      line(t("Talleres · Work in Progress · Evaluación de carpetas "), softBreak, t("· Pitches")),
    ],
    access: "Cerrado a jurados y comité de contenido",
    bg: SAGE,
    text: CREAM,
    decoration: "diamonds",
  },
  {
    id: "cine-e-industria",
    title: plain("Programa de Cine e Industria"),
    time: "11:00–14:30 hrs",
    location: "Cinépolis San José del Cabo",
    description: [
      line(
        t("Keynotes · Proyección de cine · Conversatorios "),
        softBreak,
        t("· Homenajes · Reconocimientos"),
      ),
    ],
    access: "Abierto al público",
    bg: PEACH,
    text: CREAM,
    decoration: "hexagons",
  },
  {
    id: "lunch-and-learn",
    title: plain("Lunch & Learn"),
    time: "15:00–17:00 hrs",
    location: "JW Marriott | Hotel El Ganzo",
    description: plain("Lunch · Networking · Paneles · Showcases musicales"),
    access: "Abierto al público",
    bg: TERRACOTTA,
    text: CREAM,
    decoration: "ellipses",
  },
  {
    id: "beyond-the-screen",
    title: plain("Programa #BeyondTheScreen"),
    time: "18:30–01:00 hrs",
    location: "Zadún Ritz-Carlton | JW Marriott",
    description: [
      line(
        t("Proyecciones al aire libre · Conversatorios · Fiestas · "),
        softBreak,
        t("Cócteles"),
      ),
    ],
    access: "Abierto al público",
    bg: BLUE,
    text: NAVY,
    decoration: "chevrons",
  },
];
