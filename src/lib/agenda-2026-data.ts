// Agenda del preview /programacion-2026-preview.
//
// Fuente: FICCLosCabos_Programa.pdf (programa final, 14-oct-2026) más las
// correcciones del cliente por WhatsApp (15-oct-2026):
//   A) Miércoles 9: sin ubicaciones; "Por anunciarse" en itálica.
//   B) Jueves 10, 12:05: Panel → Keynote con cargo completo de Diana
//      Segoviano; se quita "Participan… Moderador…" de la descripción.
//   C) Jueves 10: sin ubicaciones en el bloque terracota (15:00–17:00).
//   D) Viernes 11 y Sábado 12: sin ubicaciones en el bloque terracota.
//
// El texto sigue al PDF con la ortografía corregida (16-oct-2026).

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
  /** Créditos en negrita bajo el título (p. ej. ficha de película). */
  subtitle?: string;
  /**
   * Cada "\n" es un salto de renglón del PDF; en escritorio los renglones
   * cortan exactamente ahí y en móvil el texto vuelve a fluir.
   */
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

export const agenda2026: AgendaDay[] = [
  {
    id: "2026-12-09",
    label: "Miércoles 9 de diciembre",
    blocks: [
      {
        bg: BLUE,
        text: NAVY,
        rule: NAVY,
        events: [
          {
            id: "2026-12-09-01",
            locationRemoved: true,
            time: "20:00–20:15 hrs",
            title: plain("Inauguración oficial"),
            description: "Palabras de bienvenida",
          },
          {
            id: "2026-12-09-02",
            locationRemoved: true,
            time: "20:15–22:00 hrs",
            title: [line(t("Proyección Inaugural — "), i("Por anunciarse"))],
          },
          {
            id: "2026-12-09-03",
            locationRemoved: true,
            time: "22:00–22:20 hrs",
            title: plain("Conversatorio postproyección"),
            description: "Q&A con director/talento",
          },
        ],
      },
      {
        bg: NAVY,
        text: CREAM,
        rule: CREAM,
        events: [
          {
            id: "2026-12-09-04",
            locationRemoved: true,
            time: "22:20–01:00 hrs",
            title: plain("Cóctel + Fiesta inaugural"),
          },
        ],
      },
    ],
  },
  {
    id: "2026-12-10",
    label: "Jueves 10 de diciembre",
    blocks: [
      {
        bg: SAGE,
        text: CREAM,
        rule: CREAM,
        events: [
          {
            id: "2026-12-10-01",
            time: "9:00–11:00 hrs",
            title: plain("Work in Progress — Insectario"),
            description:
              "Día 1 — Work-in-Progress y caso de estudio de la cinta Insectario. Con la directora Sofía Carrillo y el coproductor\nMatīss Kaža (Letonia)",
            location: "Cinépolis San José del Cabo",
          },
        ],
      },
      {
        bg: PEACH,
        text: CREAM,
        rule: CREAM,
        x: 109,
        events: [
          {
            id: "2026-12-10-02",
            time: "11:40 – 12:05 hrs",
            title: [
              line(
                t("Keynote — "),
                i("Shaping the Next Wave of Creative Convergence"),
                t("\u00A0|"),
              ),
              line(t("Greg Rosenbaum · SVP Programming SXSW")),
            ],
            description:
              "Evolución de tendencias de contenido durante la última década vista desde SXSW: cine, TV, música, tecnología,\ncomedia y educación",
            location: SALA_8,
          },
          {
            id: "2026-12-10-03",
            time: "12:05 – 12:30 hrs",
            title: [
              line(
                t("Keynote — "),
                i("Filmar en México: El territorio como aliado de la producción"),
                t("\u00A0|"),
              ),
              line(
                t(
                  "Diana Segoviano · Coordinadora General de la Comisión Mexicana de Filmaciones (COMEFILM)",
                ),
              ),
            ],
            description:
              "Una conversación sobre cómo está cambiando la geografía de la producción audiovisual y por qué los territorios se\nestán convirtiendo en parte estratégica del proceso creativo y productivo. La conversación reúne distintas perspectivas\npara explorar qué hace hoy a un territorio competitivo para producir contenido, cómo México puede conectar mejor sus\ncapacidades regionales con la industria global y qué podemos aprender de otros modelos internacionales.",
            location: SALA_8,
          },
          {
            id: "2026-12-10-04",
            time: "12:30 – 13:45 hrs",
            title: [line(t("Proyección — "), i("Jaripeo"))],
            subtitle: "Dir. Rebecca Zweig, Efraín Mojica · México · 71′",
            location: SALA_8,
          },
          {
            id: "2026-12-10-05",
            time: "13:45 – 14:00 hrs",
            title: plain("Conversatorio postproyección"),
            description: "Q&A con los directores Rebecca Zweig, Efraín Mojica",
            location: SALA_8,
          },
          {
            id: "2026-12-10-06",
            time: "14:00 – 14:15 hrs",
            title: plain("Homenaje a Dolores Heredia"),
            description:
              "Entrega del homenaje a Dolores Heredia · Presentación de su trayectoria y obra",
            location: SALA_8,
            href: "/programacion-2026-preview/homenaje-dolores-heredia",
          },
        ],
      },
      {
        bg: TERRACOTTA,
        text: CREAM,
        rule: CREAM,
        x: 109,
        events: [
          {
            id: "2026-12-10-07",
            locationRemoved: true,
            time: "15:00 – 16:00 hrs",
            title: plain("Brunch"),
            description: "Brunch de Industria",
          },
          {
            id: "2026-12-10-08",
            locationRemoved: true,
            time: "16:00 – 16:30 hrs",
            title: plain("Panel — La Baja Inspira"),
            description:
              "Presentación del proceso de selección y anuncio de los proyectos ganadores de cada categoría, seguida de la\nproyección de los documentales seleccionados. Moderado por Iván Carrillo",
          },
          {
            id: "2026-12-10-09",
            locationRemoved: true,
            time: "16:45 – 17:00 hrs",
            title: plain("Homenaje a Manuel Arango"),
            description:
              "Entrega del homenaje a Manuel Arango, pionero mexicano de la conservación y el cine · Presentación de su\ntrayectoria",
          },
        ],
      },
    ],
  },
  {
    id: "2026-12-11",
    label: "Viernes 11 de diciembre",
    blocks: [
      {
        bg: SAGE,
        text: CREAM,
        rule: CREAM,
        x: 111,
        events: [
          {
            id: "2026-12-11-01",
            time: "9:00–11:00 hrs",
            title: plain("Work in Progress — Insectario"),
            description:
              "Día 2 — Work-in-Progress y caso de estudio de la cinta Insectario. Con la directora Sofía Carrillo y el coproductor\nMatīss Kaža (Letonia). Participan: Sofía Carrillo, invitada especial (México), y Matīss Kaža (Letonia)",
            location: "Cinépolis San José del Cabo",
          },
        ],
      },
      {
        bg: TERRACOTTA,
        text: CREAM,
        rule: CREAM,
        x: 108,
        events: [
          {
            id: "2026-12-11-02",
            locationRemoved: true,
            time: "14:20 – 17:00 hrs",
            title: [
              line(
                // Doble espacio antes de la raya, como en el PDF.
                t("Brunch + Panel "),
                i("— La música como memoria, identidad y testimonio de "),
                softBreak,
                i("nuestro tiempo"),
                t(" | Frequencies of Now · El archivo vivo de la cultura musical"),
              ),
            ],
            // En el PDF este título va ~2.8 % más apretado para caber en dos
            // renglones.
            titleLetterSpacing: "-0.0135em",
            description:
              "Brunch de Industria · Conversación sobre la relevancia de construir un archivo documental que preserve y explore las\ndimensiones sociales, culturales y antropológicas de la música a través de cuatro ejes: Música y Territorio, Música e\nIdentidad, Procesos de Creación Musical y Movimientos Culturales. Participantes: Rodrigo Guardiola · Alejandro\nTavares · Hermann Neudert · Mario Escobar · Zunshu. Moderado por Juan Patricio Riveroll",
          },
        ],
      },
    ],
  },
  {
    id: "2026-12-12",
    label: "Sábado 12 de diciembre",
    blocks: [
      {
        bg: SAGE,
        text: CREAM,
        rule: CREAM,
        x: 111,
        events: [
          {
            id: "2026-12-12-01",
            time: "9:00–11:00 hrs",
            title: plain("Desayuno de Mujeres en la Industria"),
            description:
              "Mujeres del ecosistema fílmico mexicano e internacional, en colaboración con Girls at Films, Elle México, The Hollywood\nReporter y Quién. Con la presencia de Griselda Siciliani y Dolores Heredia",
            location: "Sage",
            href: "/programacion-2026-preview/desayuno-girls-at-films",
          },
        ],
      },
      {
        bg: TERRACOTTA,
        text: CREAM,
        rule: CREAM,
        x: 111,
        events: [
          {
            id: "2026-12-12-02",
            locationRemoved: true,
            time: "15:00 – 16:00 hrs",
            title: plain("Brunch"),
            description: "Brunch de cierre de programa",
          },
          {
            id: "2026-12-12-03",
            time: "16:00 – 16:20 hrs",
            title: [
              line(t("Keynote — "), i("How to pitch your movie to a festival"), t("\u00A0\u00A0|")),
              line(t("Jim Kolmar · Programador SXSW")),
            ],
            description:
              "Jim Kolmar, programador de SXSW desde 2009, asesora a cineastas emergentes para llevar sus películas a\nfestivales: revisa cortes y guiones con la mirada de un programador",
          },
          {
            id: "2026-12-12-04",
            locationRemoved: true,
            time: "16:20 – 17:00 hrs",
            title: plain("Panel — The Next Wave — Emerging Filmmakers"),
            description:
              "Presentación oficial del panel The Next Wave — Emerging Filmmakers, presentado por Salomon · Moderado por\nCarlos López Estrada · Presentación de los 10 cineastas emergentes de América Latina seleccionados: Natalia León,\nMariana Mendívil, Diego Gaxiola, Karla Condado, Leo Aguirre, Amandine Thomas, Gabriela Ortega, Federico Luis,\nEduardo Braun, Josefina Montino y Martín André",
            href: "/programacion-2026-preview/panel-the-next-wave",
          },
        ],
      },
    ],
  },
  {
    id: "2026-12-13",
    label: "Domingo 13 de diciembre",
    blocks: [
      {
        bg: BLUE,
        text: NAVY,
        rule: NAVY,
        events: [
          {
            id: "2026-12-13-01",
            time: "18:30–20:00 hrs",
            title: plain("Proyección al aire libre — Por anunciarse"),
            description: "Proyección en alianza con Cine Club Documental Los Cabos",
            location: "Plaza Mijares, San José del Cabo",
          },
        ],
      },
    ],
  },
];

// Tarjetas de sección / leyenda (páginas 5–10 del PDF).
export const agendaSectionCards2026: AgendaSectionCard[] = [
  {
    id: "formacion-e-industria",
    title: plain("Programa de Formación e Industria"),
    time: "9:00–11:00 hrs",
    location: "Hotel El Ganzo | Cinépolis San José del Cabo",
    description: [
      line(t("Talleres · Work in Progress · Evaluación de carpetas · "), softBreak, t("Pitches")),
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
        t("Keynotes en colaboración con WIRED · Proyección de "),
        softBreak,
        t("cine · Conversatorios · Homenaje · Reconocimientos"),
      ),
    ],
    access: "Abierto al público",
    bg: PEACH,
    text: CREAM,
    decoration: "hexagons",
  },
  {
    id: "brunch-networking",
    title: plain("Brunch & Networking"),
    time: "15:00–17:00 hrs",
    location: "JW Marriott | Hotel El Ganzo Rooftop",
    description: [
      line(
        t("Brunch en colaboración con Forbes Global Properties · "),
        softBreak,
        t("Networking · Paneles"),
      ),
    ],
    access: "Abierto al público",
    bg: TERRACOTTA,
    text: CREAM,
    decoration: "ellipses",
  },
  {
    id: "beyond-the-screen-musica",
    title: [line(t("Programa #BeyondTheScreen:")), line(t("Música"))],
    time: "17:00–18:30 hrs",
    location: "JW Marriott | Hotel El Ganzo",
    description: plain("Showcases musicales · Conversatorios"),
    access: "Abierto al público",
    bg: "#876B5D",
    text: CREAM,
    decoration: "arc",
  },
  {
    id: "beyond-the-screen-cine-al-aire-libre",
    title: [line(t("Programa #BeyondTheScreen:")), line(t("Cine al aire libre"))],
    time: "18:30–21:30 hrs",
    location: "Zadún Ritz-Carlton | JW Marriott",
    description: plain("Proyecciones · Conversatorios"),
    access: "Abierto al público",
    bg: BLUE,
    text: NAVY,
    decoration: "chevrons",
  },
  {
    id: "cocteles",
    title: [line(t("Cócteles")), line(t("FICCLosCabos"))],
    time: "21:30–01:00 hrs",
    location: "Zadún Ritz-Carlton | JW Marriott",
    description: plain("Fiestas · Cócteles"),
    access: "Eventos solo por invitación",
    bg: NAVY,
    text: CREAM,
    decoration: "star",
  },
];
