export type Persona = {
  name: string;
  /** Sin `image` la tarjeta se pinta como placeholder con iniciales. */
  image?: string;
  /** Línea corta en monoespaciada bajo el nombre: la obra (o el rol) en The Next Wave. */
  meta?: string;
  bio?: string;
};

export type PersonaGrupo = {
  title: string;
  /** Solo cambia la densidad de la rejilla; ambos pintan foto + nombre + texto. */
  layout: "compact" | "bio";
  people: Persona[];
};

export type Evento = {
  slug: string;
  /** Admite `*…*` para itálicas (ver src/lib/italics.tsx). */
  title: string;
  /** Título corto para la navegación anterior/siguiente cuando el largo no cabe. */
  cardTitle?: string;
  /** La tarjeta del índice muestra `title | credit`, como viene en el documento. */
  cardCredit?: boolean;
  /** Línea bajo el título de la tarjeta del índice, p. ej. dirección y ficha de una película. */
  cardSubtitle?: string;
  /** Hora (ISO con zona) a partir de la cual se publica; antes no se pinta ni tiene página. */
  publishAt?: string;
  date?: string;
  venue?: string;
  /** Crédito extra del encabezado, p. ej. "Moderado por…". */
  credit?: string;
  image: string;
  imageAlt: string;
  /** Acento de la página; se expone como `--cat` en el JSX. */
  accent: string;
  body: string[];
  /** Etiqueta sobre los logos; "Presentado por" si se omite. */
  presentedLabel?: string;
  /** Uno o varios logos de quien presenta el evento. */
  presentedBy?: { name: string; logo: string; width: number; height: number }[];
  groups?: PersonaGrupo[];
};


// Sneak Peek de la edición 2026, en el orden del teaser del 21 de octubre
// (pestaña "Teaser 21 octubre" del documento del sitio; Insectario va al final
// por indicación del cliente). Sin fechas: se anuncian
// después. Las fotos se generan con `python3 scripts/optimize-programacion.py`;
// quien todavía no tiene `image` no se pinta.
export const eventos2026: Evento[] = [
  {
    slug: "keynote-greg-rosenbaum",
    title: "Keynote — *Shaping the Next Wave of Creative Convergence*",
    cardTitle: "Keynote — Greg Rosenbaum",
    cardCredit: true,
    venue: "Cinépolis San José del Cabo | Sala 8",
    credit: "Greg Rosenbaum · Senior Vice President Programming SXSW",
    image: "/images/programacion-2026/keynote-greg-rosenbaum.jpg",
    imageAlt: "Greg Rosenbaum, Senior Vice President Programming de SXSW",
    accent: "#BDC957",
    body: [
      "Evolución de tendencias de contenido durante la última década vista desde SXSW: cine, TV, música, tecnología, comedia y educación · Relación de SXSW con México · Visión hacia 2027.",
    ],
  },
  {
    slug: "keynote-diana-segoviano",
    title: "Keynote — *The New Geography of Content, Filmar en México: el territorio como infraestructura de producción*",
    cardTitle: "Keynote — Diana Segoviano",
    cardCredit: true,
    venue: "Cinépolis San José del Cabo | Sala 8",
    credit: "Diana Segoviano · Coordinadora General de la Comisión Mexicana de Filmaciones (COMEFILM)",
    image: "/images/programacion-2026/keynote-diana-segoviano.jpg",
    imageAlt: "Diana Segoviano, Coordinadora General de la Comisión Mexicana de Filmaciones",
    accent: "#C47A3D",
    body: [
      "Una conversación sobre cómo está cambiando la geografía de la producción audiovisual y por qué los territorios se vuelven parte estratégica del proceso creativo y productivo. Qué hace hoy competitivo a un territorio y cómo México puede conectar sus capacidades regionales con la industria global.",
    ],
  },
  {
    slug: "homenaje-dolores-heredia",
    title: "Homenaje 2026 FICCLosCabos — Dolores Heredia",
    cardTitle: "Homenaje 2026 — Dolores Heredia",
    venue: "Cinépolis San José del Cabo | Sala 8",
    image: "/images/programacion-2026/homenaje-dolores-heredia.jpg",
    imageAlt: "Dolores Heredia, homenajeada de FICCLosCabos 2026",
    accent: "#FA6935",
    body: [
      "FICCLosCabos 2026 rinde homenaje a Dolores Heredia, una de las actrices más representativas del cine mexicano contemporáneo, cuya trayectoria se distingue por su versatilidad, sensibilidad artística y compromiso con la cinematografía nacional.",
      "A través de una remembranza audiovisual de 15 minutos de su vida y obra, celebraremos su contribución al cine, su capacidad para dar vida a personajes memorables y su vínculo con Baja California Sur, territorio que forma parte de su identidad.",
      "La ceremonia culminará con la entrega del reconocimiento a su trayectoria artística.",
    ],
  },
  {
    slug: "keynote-claudio-jimenez",
    title: "Keynote — *La transferencia de lenguajes y formatos en la creación de contenidos*",
    cardTitle: "Keynote — Claudio Jiménez",
    cardCredit: true,
    venue: "Cinépolis San José del Cabo | Sala 8",
    credit: "Claudio Jiménez · Fundador de Mighty Studios",
    image: "/images/programacion-2026/keynote-claudio-jimenez.jpg",
    imageAlt: "Claudio Jiménez, fundador de Mighty Studios",
    accent: "#E9B0BD",
    body: [
      "La animación, la IA y el storytelling como las tendencias que están redefiniendo la manera de contar historias.",
    ],
  },
  {
    slug: "blaise",
    title: "Proyección — *Blaise* + Conversatorio con directores",
    cardTitle: "Proyección — Blaise",
    credit: "Dir. Dimitri Planchon, Jean-Paul Guigue · Francia · 2026 · 82’",
    cardSubtitle: "Dir. Dimitri Planchon, Jean-Paul Guigue · Francia · 2026 · 82’",
    image: "/images/seleccion-oficial-2026/blaise-still.jpg",
    imageAlt: "Fotograma de la película Blaise",
    accent: "#BDC957",
    body: [
      "En una familia obsesionada por agradar a los demás, un introvertido adolescente termina involucrado, por pura complacencia, en una improvisada y violenta cruzada revolucionaria.",
    ],
  },
  {
    // El slug conserva el nombre anterior del evento para no romper enlaces ya compartidos.
    slug: "desayuno-girls-at-films",
    title: "Desayuno de Mujeres en la Industria",
    venue: "SAGE",
    image: "/images/programacion-2026/desayuno-girls-at-films.jpg",
    imageAlt: "SAGE, sede del Desayuno de Mujeres en la Industria",
    accent: "#960942",
    body: [
      "Mujeres del ecosistema fílmico mexicano e internacional, en colaboración con Girls at Films, ELLE México, The Hollywood Reporter y Quién.",
    ],
    presentedLabel: "En colaboración con",
    presentedBy: [
      {
        name: "Girls at Films",
        logo: "/images/programacion-2026/logos/girls-at-films.png",
        width: 317,
        height: 267,
      },
      {
        name: "ELLE México",
        logo: "/images/programacion-2026/logos/elle.png",
        width: 359,
        height: 106,
      },
      {
        name: "The Hollywood Reporter",
        logo: "/images/programacion-2026/logos/the-hollywood-reporter.png",
        width: 527,
        height: 124,
      },
      {
        name: "Quién",
        logo: "/images/programacion-2026/logos/quien.png",
        width: 355,
        height: 133,
      },
    ],
    groups: [
      {
        title: "Participan",
        layout: "bio",
        people: [
          {
            name: "Claudia Cándano",
            image: "/images/programacion-2026/personas/claudia-candano.jpg",
            meta: "Editora en Jefe de ELLE México",
          },
          {
            name: "Andrea Rendón",
            image: "/images/programacion-2026/personas/andrea-rendon.jpg",
            meta: "Fundadora de Girls at Films",
          },
          {
            name: "Griselda Siciliani",
            image: "/images/programacion-2026/personas/griselda-siciliani.jpg",
            meta: "Actriz",
          },
        ],
      },
    ],
  },
  {
    slug: "panel-the-next-wave",
    title: "Panel — The Next Wave: Emerging Filmmakers",
    cardTitle: "The Next Wave — Emerging Filmmakers Panel",
    venue: "Cinépolis San José del Cabo",
    credit: "Moderado por Carlos López Estrada",
    image: "/images/programacion-2026/panel-the-next-wave-teaser.jpg",
    imageAlt: "Fotograma de un cortometraje del panel The Next Wave",
    accent: "#6687C3",
    body: [
      "El Festival presenta The Next Wave: Emerging Filmmakers: un panel de cineastas emergentes de América Latina cuyo trabajo define el lenguaje audiovisual de la próxima generación.",
      "Moderado por Carlos López Estrada, cineasta mexicano nominado al Oscar cuyo debut Blindspotting abrió el Sundance Film Festival 2018, co-director de Raya and the Last Dragon de Disney y fundador de Antigravity Academy, plataforma dedicada a impulsar cineastas emergentes. El panel reúne a diez cineastas emergentes de América Latina con presencia en Sundance, Cannes, Berlín y SXSW.",
    ],
    presentedBy: [
      {
        name: "Salomon",
        logo: "/images/programacion-2026/logos/salomon.png",
        width: 383,
        height: 46,
      },
    ],
    groups: [
      {
        title: "Participantes",
        layout: "bio",
        people: [
          {
            name: "Carlos López Estrada",
            image: "/images/programacion-2026/personas/carlos-lopez-estrada.jpg",
            meta: "Moderador · México",
            bio: "Cineasta mexicano nominado al Oscar. Dirigió Blindspotting, Summertime y co-dirigió Raya and the Last Dragon, nominada al Oscar. Es fundador de Antigravity Academy, plataforma para cineastas emergentes.",
          },
          {
            name: "Martín André",
            image: "/images/programacion-2026/personas/martin-andre.jpg",
            meta: "“La pena no duerme de noche”",
            bio: "Cineasta y animador. Su trabajo ha pasado por festivales como Annecy, Sundance, Fantastic Fest, BIFAN y Valdivia. Su corto en stop-motion La pena no duerme de noche (2025), codirigido con Josefina Montino, fue seleccionado en más de 50 festivales.",
          },
          {
            name: "Josefina Montino",
            image: "/images/programacion-2026/personas/josefina-montino.jpg",
            meta: "“La pena no duerme de noche” · Chile",
            bio: "Cineasta y periodista. Codirectora de “La pena no duerme de noche” (2025), su primer corto, estrenado en Fantastic Fest y seleccionado en más de 50 festivales incluyendo Sundance y BIFAN.",
          },
          {
            name: "Natalia León",
            image: "/images/programacion-2026/personas/natalia-leon.jpg",
            meta: "“Como si la tierra se las hubiera tragado” · México",
            bio: "Guionista, directora, animadora y actriz. Graduada de ENSAD París y School of Visual Arts Nueva York. Su cortometraje debut Como si la tierra se las hubiera tragado ganó el Jury Award for Best Animated Short Film en Sundance 2025. Explora identidad, migración, memoria y duelo colectivo con una sensibilidad visual extraordinaria.",
          },
          {
            name: "Mariana Mendívil",
            image: "/images/programacion-2026/personas/mariana-mendivil.jpg",
            meta: "“Memoria de un cuerpo desplazado” · México",
            bio: "Cineasta, artista visual y animadora. Su cortometraje Memoria de un cuerpo desplazado ganó la Medalla Puma de Plata en FICUNAM 2024 y ha recorrido Morelia, Bogoshorts y Animafest Zagreb. Combina ensayo cinematográfico, animación y collage para explorar desplazamiento y memoria.",
          },
          {
            name: "Diego Gaxiola",
            image: "/images/programacion-2026/personas/diego-gaxiola.jpg",
            meta: "“Circo de Loy” · México",
            bio: "Guionista, director y productor. Su cortometraje Circo de Loy, desarrollado con el apoyo del cineasta ganador del Oscar Paolo Sorrentino, ha ganado reconocimiento internacional por su lenguaje visual único y su fuerza narrativa — creado con presupuesto casi inexistente.",
          },
          {
            name: "Karla Condado",
            image: "/images/programacion-2026/personas/karla-condado.jpg",
            meta: "“Miriam” · México",
            bio: "Directora, guionista y fotógrafa, egresada de ESCINE. Su cortometraje Miriam tuvo su estreno mundial en la sección Berlinale Shorts de la Berlinale 2026, compitiendo por el Oso de Oro. Una carta de video dirigida a su tía, víctima de feminicidio: memoria, ausencia e impacto de la violencia de género.",
          },
          {
            name: "Leo Aguirre",
            image: "/images/programacion-2026/personas/leo-aguirre.jpg",
            meta: "“Isme” · EUA",
            bio: "Guionista y director mexicano-americano criado entre El Paso y Ciudad Juárez. Su cortometraje Isme tuvo su estreno mundial en SXSW 2024. Explora identidad, espiritualidad y el crecimiento entre dos culturas con un lenguaje cinematográfico rico en simbolismo.",
          },
          {
            name: "Amandine Thomas",
            image: "/images/programacion-2026/personas/amandine-thomas.jpg",
            meta: "“Albatross” · Francia/EUA",
            bio: "Guionista, directora y editora franco-americana. Su cortometraje Albatross tuvo su estreno mundial en Sundance 2026. Con una sensibilidad visual refinada, descubre lo extraordinario dentro de lo cotidiano a través de historias profundamente humanas.",
          },
          {
            name: "Federico Luis",
            image: "/images/programacion-2026/personas/federico-luis.jpg",
            meta: "“The Opponents” · Argentina",
            bio: "Guionista y director. Su cortometraje The Opponents ganó la Palme d'Or al Mejor Cortometraje en Cannes 2025 — el máximo honor del festival en su categoría. Un retrato sutil de conexión humana y pertenencia ambientado en el mundo del fútbol amateur.",
          },
          {
            name: "Eduardo Braun Costa",
            image: "/images/programacion-2026/personas/eduardo-braun-costa.jpg",
            meta: "“The Liars” · Argentina",
            bio: "Guionista, director y productor. Su primer cortometraje de ficción The Liars ganó el Special Jury Award for Acting en Sundance 2026. Coproducción entre Argentina, Brasil y Francia sobre la inocencia y resiliencia de la infancia.",
          },
          {
            name: "Gabriela Ortega",
            image: "/images/programacion-2026/personas/gabriela-ortega.jpg",
            meta: "“Marga en el DF” · República Dominicana",
            bio: "Directora, guionista y actriz, egresada de USC y alumni de Sundance. Su cortometraje Huella fue seleccionado en Sundance 2022. Nombrada por Filmmaker Magazine como una de las 25 New Faces of Independent Film. En 2026 estrenó Marga en el DF en Sundance. Su trabajo explora la intersección entre ficción, poesía e identidad caribeña.",
          },
        ],
      },
    ],
  },
  {
    slug: "keynote-jim-kolmar",
    title: "Keynote — *How to pitch your movie to a festival*",
    cardTitle: "Keynote — Jim Kolmar",
    cardCredit: true,
    venue: "Hotel El Ganzo — Rooftop",
    credit: "Jim Kolmar · Programador SXSW",
    image: "/images/programacion-2026/keynote-jim-kolmar.jpg",
    imageAlt: "Jim Kolmar, programador de SXSW",
    accent: "#081722",
    body: [
      "Jim Kolmar, programador de SXSW desde 2009, asesora a cineastas emergentes para llevar sus películas a festivales: revisa cortes y guiones con la mirada de un programador.",
    ],
  },
  {
    slug: "work-in-progress-insectario",
    title: "Work in Progress — *Insectario*",
    venue: "Cinépolis San José del Cabo",
    image: "/images/programacion-2026/work-in-progress-insectario.jpg",
    imageAlt: "Fotograma de la cinta animada Insectario",
    accent: "#006666",
    body: [
      "Work-in-Progress y caso de estudio de la cinta Insectario. Con la directora Sofía Carrillo y el coproductor Matīss Kaža (Letonia).",
    ],
    groups: [
      {
        title: "Participan",
        layout: "bio",
        people: [
          {
            name: "Sofía Carrillo",
            image: "/images/programacion-2026/personas/sofia-carrillo.jpg",
            meta: "Directora",
          },
          {
            name: "Matīss Kaža",
            image: "/images/programacion-2026/personas/matiss-kaza.jpg",
            meta: "Coproductor · Letonia",
          },
        ],
      },
    ],
  },
];

/** Eventos ya publicados. Las páginas que la usan revalidan cada minuto. */
export function eventosVisibles2026(now: number = Date.now()): Evento[] {
  return eventos2026.filter((ev) => !ev.publishAt || Date.parse(ev.publishAt) <= now);
}
