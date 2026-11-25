// Agenda del preview /programacion-2026-preview.
//
// Fuente: programa final del doc "SitioWeb_FICC2026" (comentarios de Mafer del
// 25-nov-2026), que sustituye al FICCLosCabos_Programa.pdf del 10-nov. En las descripciones, `**x**` es negrita,
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
const GANZO_ROOFTOP = "Hotel El Ganzo — Rooftop";
const JW_ANFITEATRO = "JW Marriott — Anfiteatro";
const ZADUN_SUITE = "Zadún Ritz-Carlton Reserve — Suite Presidencial";
const JW_TERRAZA = "JW Marriott — Terraza Amet";
const TROPICANA = "Hotel Tropicana";
const PATROCINIO_LUNCH = "Patrocinado por Tequila Código 1530 y Mezcal The Producer";
const MARINA = "La Marina Puerto Los Cabos";

// Las fichas de eventos completas viven en la ruta pública; el preview solo tiene tres.
const EVENTO = (slug: string) => `/programacion-2026/${slug}`;
const PELICULA = (slug: string) => `/programacion-2026/peliculas/${slug}`;
const LBI = "/programacion-2026/la-baja-inspira";

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

export const agenda2026: AgendaDay[] = [
  {
    id: "2026-12-09",
    label: "Miércoles 9 de diciembre",
    blocks: [
      blue([
        {
          id: "2026-12-09-coctel-recepcion",
          time: "19:30 – 20:00 hrs",
          title: plain("Cóctel de recepción por Tequila Código 1530"),
          location: MARINA,
        },
        {
          id: "2026-12-09-palabras",
          time: "20:00 – 20:15 hrs",
          title: plain("Palabras Inaugurales"),
          location: MARINA,
        },
        {
          id: "2026-12-09-spot",
          time: "20:20 – 20:35 hrs",
          title: plain("Presentación de spot institucional FICCLosCabos 2026"),
          description: "Presenta Claudio Jiménez, fundador de Mighty Studio",
          location: MARINA,
        },
        {
          id: "2026-12-09-elsinore",
          time: "20:35 – 22:30 hrs",
          title: titled("Proyección Inaugural", "Elsinore"),
          subtitle: "Dir. Simon Stone · Reino Unido, Estados Unidos e Italia · 2026 · 111´",
          location: MARINA,
          href: PELICULA("elsinore"),
        },
        {
          id: "2026-12-09-fiesta",
          time: "22:30 – 01:00 hrs",
          title: plain("Cóctel inaugural presentado por Tequila Código 1530 en alianza con Veleros Beach Club"),
          description: "Pato Watson DJ Set + Zombie VJ Set",
          location: MARINA,
        },
      ]),
    ],
  },
  {
    id: "2026-12-10",
    label: "Jueves 10 de diciembre",
    blocks: [
      peach([
        {
          id: "2026-12-10-bienvenida",
          time: "11:15 – 11:30 hrs",
          title: plain("Bienvenida"),
          location: SALA_8,
        },
        {
          id: "2026-12-10-rosenbaum",
          time: "11:30 – 12:00 hrs",
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
          time: "12:00 – 12:30 hrs",
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
          id: "2026-12-10-cameron-winter",
          time: "12:30 – 13:45 hrs",
          title: titled("Proyección + Q&A", "Cameron Winter At Carnegie Hall"),
          subtitle: "Dir. Paul Thomas Anderson · Estados Unidos · 2026 · 71´",
          description: "Q&A",
          location: SALA_8,
          href: PELICULA("cameron-winter-at-carnegie-hall"),
        },
        {
          id: "2026-12-10-dolores-heredia",
          time: "13:45 – 14:10 hrs",
          title: plain("Homenaje — Dolores Heredia"),
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
          title: plain("Lunch de Industria"),
          description: PATROCINIO_LUNCH,
          location: TROPICANA,
        },
        {
          id: "2026-12-10-panel-lbi",
          time: "16:00 – 16:35 hrs",
          title: titled(
            "Panel",
            "La Baja Inspira: Biodiversidad, memoria histórica y desarrollo sostenible de Baja California Sur",
          ),
          href: LBI,
          description:
            "Presentación del proceso de selección y anuncio de los proyectos ganadores de cada categoría, seguida de la proyección de los documentales seleccionados. Moderado por **Iván Carrillo**",
          location: TROPICANA,
        },
        {
          id: "2026-12-10-dj-set",
          time: "16:35 – 17:35 hrs",
          title: plain("DJ Set"),
          location: TROPICANA,
        },
      ]),
      blue([
        {
          id: "2026-12-10-coctel-recepcion",
          time: "18:00 – 19:00 hrs",
          title: plain("Cóctel de recepción"),
          description: PATROCINIO_LUNCH,
          location: ZADUN_SUITE,
        },
        {
          id: "2026-12-10-un-passo-alla-volta",
          time: "19:10 – 19:40 hrs",
          title: titled("Proyección + Q&A", "Un Passo Alla Volta"),
          href: EVENTO("un-passo-alla-volta"),
          subtitle: "Dir. Simone Coppo · Italia · 2026 · 14´",
          description:
            "El cortometraje de **Simone Coppo** y **Martina Ferragamo** estrenado en el Teatro La Fenice dentro de la *Mostra de Venecia*. Una reflexión sobre los nuevos comienzos y sobre el tiempo que toma convertir un legado en una elección propia\n**Q&A con Martina Ferragamo y Simone Coppo**. Moderado por **Rodrigo García** de Central Films",
          location: ZADUN_SUITE,
        },
        {
          id: "2026-12-10-not-not-jazz",
          time: "19:40 – 21:15 hrs",
          title: titled("Proyección + Q&A", "Medeski, Martin & Wood: Not not jazz"),
          href: EVENTO("not-not-jazz"),
          subtitle: "Dir. Jason Miller · Estados Unidos · 2024 · 77´",
          description:
            "**Q&A con Billy Martin**, baterista de Medeski, Martin & Wood, y **Nicolás Celis** (fundador de Pimienta Films)",
          location: ZADUN_SUITE,
        },
        {
          id: "2026-12-10-jam-ferragamo",
          time: "21:15 – 22:15 hrs",
          title: plain(
            "Ferragamo presenta: Jam musical con Billy Martin con músicos locales de San José del Cabo",
          ),
          description: "**Jam Billy Martin** + talento local",
          location: ZADUN_SUITE,
        },
        {
          id: "2026-12-10-dj-mo",
          time: "22:10 – 00:00 hrs",
          title: plain("MO DJ Set"),
          location: ZADUN_SUITE,
        },
      ]),
    ],
  },
  {
    id: "2026-12-11",
    label: "Viernes 11 de diciembre",
    blocks: [
      peach([
        {
          id: "2026-12-11-bienvenida",
          time: "11:15 – 11:30 hrs",
          title: plain("Bienvenida"),
          location: SALA_8,
        },
        {
          id: "2026-12-11-jalisco",
          time: "11:30 – 12:00 hrs",
          title: keynote(
            "Conversatorio",
            "De la idea a la industria, oportunidades para crear y producir desde Jalisco",
            "Alfredo Aceves · Presidente del Fideicomiso Ciudad Creativa Digital y Alejandro Tavares · Director de FILMA Jalisco",
          ),
          description:
            "¿Qué oportunidades ofrece Jalisco a los profesionales de las industrias creativas y audiovisuales? Una conversación para conocer de cerca el trabajo de Ciudad Creativa Digital y Filma Jalisco, los apoyos y recursos que ofrecen a creadores y empresas y cómo acceder a ellos. Abordaremos también cómo profesionales de otros estados y del extranjero pueden aprovechar estas iniciativas para desarrollar sus proyectos y generar nuevas colaboraciones",
          location: SALA_8,
          href: EVENTO("conversatorio-ciudad-creativa-digital-filma-jalisco"),
        },
        {
          id: "2026-12-11-claudio-jimenez",
          time: "12:00 – 12:20 hrs",
          title: keynote(
            "Keynote",
            "La transferencia de lenguajes y formatos en la creación de contenidos",
            "Claudio Jiménez · Fundador de Mighty Animation",
          ),
          description:
            "¿Cómo están evolucionando las formas de contar historias? Claudio Jiménez, fundador de Mighty Animation, explorará cómo la animación, la inteligencia artificial y el storytelling están transformando los procesos creativos y abriendo nuevas posibilidades para desarrollar historias y experimentar con distintos formatos de contenido",
          location: SALA_8,
          href: EVENTO("keynote-claudio-jimenez"),
        },
        {
          id: "2026-12-11-panel-festivales",
          time: "12:20 – 12:50 hrs",
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
          time: "12:50 – 14:35 hrs",
          title: titled("Proyección + Q&A", "Blaise"),
          subtitle: "Dir. Dimitri Planchon, Jean-Paul Guigue · Francia · 2026 · 82´",
          description:
            "**Q&A con Dimitri Planchon y Jean-Paul Guigue**, y **Claudio Jiménez**, Fundador de Mighty Animation",
          location: SALA_8,
          href: EVENTO("blaise"),
        },
      ]),
      terracotta([
        {
          id: "2026-12-11-lunch",
          time: "15:00 – 16:00 hrs",
          title: plain("Lunch de Industria"),
          description: PATROCINIO_LUNCH,
          location: JW_ANFITEATRO,
        },
        {
          id: "2026-12-11-panel-media-pimienta",
          time: "16:00 – 16:30 hrs",
          title: plain("Panel Media Coalition + Pimienta Films"),
          location: JW_ANFITEATRO,
        },
        {
          id: "2026-12-11-shamans",
          time: "16:30 – 17:30 hrs",
          title: titled("Showcase musical", "Shamans"),
          location: JW_ANFITEATRO,
        },
      ]),
      blue([
        {
          id: "2026-12-11-bienvenida-noche",
          time: "18:30 – 18:45 hrs",
          title: plain("Palabras de bienvenida"),
          location: JW_TERRAZA,
        },
        {
          id: "2026-12-11-zoe",
          time: "18:45 – 22:20 hrs",
          title: [
            line(
              t("Proyección — "),
              i("Zoé: Memorex + Rexsexex y Más"),
              t(" + Conversatorio: La música en el cine, de la promoción al patrimonio cultural"),
            ),
          ],
          subtitle: "Dir. Rodrigo Guardiola · México · 2026 · 182´",
          description:
            "**Conversatorio con Rodrigo Guardiola** · Cineasta, productor y baterista de Zoé, **Olmo Guerra** · Productor, **Fabrizio Onetto** · Subdirector de Contenidos y Desarrollo Artístico en OCESA Seitrack. Moderado por **Alejandro Tavares** · Director de Filma Jalisco",
          location: JW_TERRAZA,
          href: EVENTO("zoe-memorex-rexsexex-y-mas"),
        },
        {
          id: "2026-12-11-puma-kutz",
          time: "22:20 – 00:00 hrs",
          title: plain("Puma + Kutz DJ Set"),
          location: JW_TERRAZA,
        },
      ]),
    ],
  },
  {
    id: "2026-12-12",
    label: "Sábado 12 de diciembre",
    blocks: [
      sage([
        {
          id: "2026-12-12-desayuno",
          time: "9:00 – 11:00 hrs",
          title: titled("Desayuno", "Mujeres en la Industria"),
          description:
            "**Participan:**\n**Griselda Siciliani** · Actriz\n**Johana Murillo** · Actriz\n**Ximena Lamadrid** · Actriz\n**Elena Fortes** · Productora\n\nModerado por:\n**Claudia Cándano** · Editora en Jefe de ELLE México\n**Andrea Rendon** · Fundadora de Girls at Films\n\nMujeres del ecosistema fílmico mexicano e internacional, en colaboración con Girls at Films, Elle México, Hollywood Reporter y Quién",
          location: "Sage",
          href: EVENTO("desayuno-girls-at-films"),
        },
      ]),
      peach([
        {
          id: "2026-12-12-bienvenida",
          time: "11:15 – 11:30 hrs",
          title: plain("Bienvenida"),
          location: SALA_8,
        },
        {
          id: "2026-12-12-panel-next-worlds",
          time: "11:30 – 12:05 hrs",
          title: titled(
            "Panel",
            "Next World’s: El storytelling como herramienta para la construcción de cultura y nuevos mundos",
          ),
          description:
            "Participan:\n**Gary Alazraki** · Cineasta, guionista y showrunner\n**Jorge Suárez** · Fundador de Amber Studio\n**Stacy Perskie** · Fundador de REDRUM y productor del videojuego Mexican Ninja\n**Alfredo Aceves** · Presidente del Fideicomiso de Ciudad Creativa Digital\n\nEste panel explora cómo el storytelling trasciende las pantallas para construir nuevos mundos, conectar audiencias y generar propiedad intelectual, así como las oportunidades para que México transforme su talento creativo en proyectos con impacto cultural, económico y proyección internacional. Moderado por **Isabel Gil** · Directora de Relaciones Culturales y Jefa de Artes para el British Council en México",
          location: SALA_8,
          href: EVENTO("panel-next-worlds"),
        },
        {
          id: "2026-12-12-inna-payan",
          time: "12:05 – 12:25 hrs",
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
          time: "12:30 – 14:20 hrs",
          title: titled("Proyección + Q&A", "Sentimental"),
          subtitle: "Dir. Cesc Gay · España · 2020 · 82´",
          description: "**Q&A con Griselda Siciliani**",
          location: SALA_8,
          href: EVENTO("sentimental"),
        },
        {
          // El doc dice "14:20 – 12:40"; se toma como errata de 14:40.
          id: "2026-12-12-life-achievement",
          time: "14:20 – 14:40 hrs",
          title: plain("Life Achievement Award — Manuel Arango"),
          description: "Entregado por Marina Stavenhagen · Directora General de la Cineteca Nacional",
          location: SALA_8,
        },
      ]),
      terracotta([
        {
          id: "2026-12-12-lunch",
          time: "15:00 – 16:00 hrs",
          title: plain("Lunch de Industria"),
          description: PATROCINIO_LUNCH,
          location: GANZO_ROOFTOP,
        },
        {
          id: "2026-12-12-kolmar",
          time: "16:00 – 16:30 hrs",
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
          id: "2026-12-12-efica",
          time: "16:30 – 16:45 hrs",
          title: keynote(
            "Presentación",
            "EFICA: Nuevas oportunidades para la producción cinematográfica y audiovisual en México",
            "Erwin Siegfried · Coordinador técnico IMCINE",
          ),
          location: GANZO_ROOFTOP,
        },
        {
          id: "2026-12-12-next-wave",
          time: "16:45 – 17:30 hrs",
          title: titled("Panel", "The Next Wave: Emerging Filmmakers"),
          description:
            "Presentado por **Salomon**\nCineastas participantes: **Natalia León, Mariana Mendívil, Diego Gaxiola, Karla Condado, Leo Aguirre, Amandine Thomas, Gabriela Ortega, Federico Luis, Eduardo Braun, Josefina Montino y Martín André**\n\nConoce a los 11 cineastas emergentes de América Latina que forman parte de The Next Wave, un programa dedicado a impulsar nuevas voces del cine latinoamericano. En su presentación oficial, descubriremos a los talentos seleccionados y sus perspectivas creativas. Moderado por **Carlos López Estrada**, cineasta y fundador de Antigravity Academy",
          location: GANZO_ROOFTOP,
          href: EVENTO("panel-the-next-wave"),
        },
        {
          id: "2026-12-12-dj-set",
          time: "17:30 – 18:30 hrs",
          title: plain("DJ Set"),
          location: GANZO_ROOFTOP,
        },
      ]),
      blue([
        {
          id: "2026-12-12-gala",
          time: "20:00 – 22:30 hrs",
          title: plain("Gala de Clausura + Cóctel"),
          description: `${PATROCINIO_LUNCH}\nPalabras de bienvenida. Cena por **Chef Guillermo J. Gómez**. Presentación de proyectos de ***La Baja Inspira***, ***Fondo Fílmico Gabriel Figueroa*** y ***Frequencies of Now***`,
          location: "Suelo Sur",
        },
        {
          id: "2026-12-12-fiesta-cierre",
          time: "22:30 – 01:00 hrs",
          title: plain("Fiesta de Cierre"),
          description: "Rulo DJ Set",
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
          time: "18:30 – 20:00 hrs",
          title: titled("Proyección al aire libre", "La Baja Inspira"),
          description:
            "Proyección *La Baja Inspira* en alianza con **Cine Club Documental Los Cabos**\n\n**Surgencia**\nDir. Alejandro Montalvo · México · 2024 · 77´\n\n**My Blue Whale Family**\nDir. Hugh Pearson · México · 2025 · 55´",
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
    time: "11:15–14:40 hrs",
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
    time: "15:00–18:30 hrs",
    location: "Hotel Tropicana | JW Marriott | Hotel El Ganzo",
    description: plain("Lunch · Networking · Paneles · Showcases musicales"),
    access: "Abierto al público",
    bg: TERRACOTTA,
    text: CREAM,
    decoration: "ellipses",
  },
  {
    id: "beyond-the-screen",
    title: plain("Programa #BeyondTheScreen"),
    time: "18:00–01:00 hrs",
    location: "La Marina | Zadún Ritz-Carlton | JW Marriott | Suelo Sur",
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
