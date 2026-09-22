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
  title: string;
  /** Título corto para la tarjeta del índice cuando el largo no cabe. */
  cardTitle?: string;
  date?: string;
  venue?: string;
  /** Crédito extra del encabezado, p. ej. "Moderado por…". */
  credit?: string;
  image: string;
  imageAlt: string;
  /** Acento de la página; se expone como `--cat` en el JSX. */
  accent: string;
  body: string[];
  /** Uno o varios logos de quien presenta el evento. */
  presentedBy?: { name: string; logo: string; width: number; height: number }[];
  groups?: PersonaGrupo[];
};

// Sneak Peek de la edición 2026, en orden de programa. Las fotos se generan con
// `python3 scripts/optimize-programacion.py`; quien todavía no tiene `image` se
// pinta con iniciales.
export const eventos2026: Evento[] = [
  {
    slug: "homenaje-dolores-heredia",
    title: "Homenaje 2026 FICCLosCabos — Dolores Heredia",
    cardTitle: "Homenaje 2026 — Dolores Heredia",
    image: "/images/programacion-2026/homenaje-dolores-heredia.jpg",
    imageAlt: "Dolores Heredia, homenajeada de FICCLosCabos 2026",
    accent: "#FA6935",
    body: [
      "En 2026, FICCLosCabos rinde homenaje a Dolores Heredia, actriz y expresidenta de la Academia Mexicana de Artes y Ciencias Cinematográficas, nacida en La Paz, Baja California Sur, y una de las grandes figuras del cine mexicano e iberoamericano.",
      "Con más de 50 largometrajes y una trayectoria que ha cruzado fronteras, Dolores Heredia ha construido una carrera que forma parte de la historia del cine mexicano. Este homenaje reconoce su talento, su trayectoria y el orgullo de celebrar a una mujer que ha llevado el nombre de Baja California Sur más allá de sus fronteras.",
    ],
  },
  {
    slug: "laboratorio-de-escritura",
    title: "Laboratorio de Escritura",
    date: "6 – 12 de diciembre",
    venue: "Hotel El Ganzo",
    image: "/images/programacion-2026/laboratorio-de-escritura.jpg",
    imageAlt: "Sesión del Laboratorio de Escritura de FICCLosCabos",
    accent: "#006666",
    body: [
      "El Laboratorio de Escritura es el espacio de FICCLosCabos dedicado a acompañar el desarrollo de nuevos proyectos cinematográficos de Baja California Sur. A través de mentorías, escritura y encuentro con la industria, el programa impulsa a cineastas locales a fortalecer sus guiones y llevar sus proyectos hacia su siguiente etapa.",
    ],
    groups: [
      {
        title: "Mentores",
        layout: "compact",
        people: [
          {
            name: "Carlos Cuarón",
            image: "/images/programacion-2026/personas/carlos-cuaron.jpg",
            bio: "Director y guionista de Y Tu Mamá También, Rudo y Cursi y Sólo con Tu Pareja.",
          },
          {
            name: "Fernando Frías",
            image: "/images/programacion-2026/personas/fernando-frias.jpg",
            bio: "Director y guionista de Ya no estoy aquí y No voy a pedirle a nadie que me crea.",
          },
          {
            name: "Gibrán Portela",
            image: "/images/programacion-2026/personas/gibran-portela.jpg",
            bio: "Dramaturgo y guionista de La Jaula de Oro, Güeros, La Región Salvaje y Familia de Medianoche.",
          },
        ],
      },
    ],
  },
  {
    slug: "panel-the-next-wave",
    title: "The Next Wave — Emerging Filmmaker Panel",
    date: "Sábado 12 de diciembre",
    venue: "Cinépolis San José del Cabo",
    credit: "Moderado por Carlos López Estrada",
    image: "/images/programacion-2026/panel-the-next-wave.jpg",
    imageAlt: "Panel The Next Wave en Cinépolis San José del Cabo",
    accent: "#6687C3",
    body: [
      "El Festival presenta The Next Wave: un panel de cineastas emergentes de América Latina cuyo trabajo define el lenguaje audiovisual de la próxima generación.",
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
            meta: "Moderador",
            bio: "Cineasta y fundador de Antigravity Academy.",
          },
          {
            name: "Natalia León",
            image: "/images/programacion-2026/personas/natalia-leon.jpg",
            meta: "“Como si la tierra se las hubiera tragado”",
            bio: "Guionista, directora, animadora y actriz.",
          },
          {
            name: "Mariana Mendívil",
            image: "/images/programacion-2026/personas/mariana-mendivil.jpg",
            meta: "“Memoria de un cuerpo desplazado”",
            bio: "Cineasta, artista visual y animadora.",
          },
          {
            name: "Diego Gaxiola",
            image: "/images/programacion-2026/personas/diego-gaxiola.jpg",
            meta: "“Circo de Loy”",
            bio: "Guionista, director y productor.",
          },
          {
            name: "Karla Condado",
            image: "/images/programacion-2026/personas/karla-condado.jpg",
            meta: "“Miriam”",
            bio: "Directora, guionista y fotógrafa.",
          },
          {
            name: "Leo Aguirre",
            image: "/images/programacion-2026/personas/leo-aguirre.jpg",
            meta: "“Isme”",
            bio: "Guionista y director.",
          },
          {
            name: "Amandine Thomas",
            image: "/images/programacion-2026/personas/amandine-thomas.jpg",
            meta: "“Albatross”",
            bio: "Guionista, directora y editora.",
          },
          {
            name: "Federico Luis",
            image: "/images/programacion-2026/personas/federico-luis.jpg",
            meta: "“For the Opponents”",
            bio: "Guionista y director.",
          },
          {
            name: "Eduardo Braun Costa",
            image: "/images/programacion-2026/personas/eduardo-braun-costa.jpg",
            meta: "“Los mentirosos”",
            bio: "Guionista, director y productor.",
          },
          {
            name: "Gabriela Ortega",
            image: "/images/programacion-2026/personas/gabriela-ortega.jpg",
            meta: "“Marga en el DF”",
            bio: "Directora, guionista y actriz.",
          },
          {
            name: "Martín André",
            image: "/images/programacion-2026/personas/martin-andre.jpg",
            meta: "“La pena no duerme de noche”",
            bio: "Cineasta y animador.",
          },
          {
            name: "Josefina Montino",
            image: "/images/programacion-2026/personas/josefina-montino.jpg",
            meta: "“La pena no duerme de noche”",
            bio: "Cineasta y periodista.",
          },
        ],
      },
    ],
  },
];
