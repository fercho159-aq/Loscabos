export type Persona = {
  name: string;
  /** Sin `image` la tarjeta se pinta como placeholder con iniciales. */
  image?: string;
  country?: string;
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
    slug: "desayuno-girls-at-films",
    title: "Desayuno Girls At Films #BeyondTheScreen",
    date: "Jueves 10 de diciembre",
    venue: "SAGE",
    image: "/images/programacion-2026/desayuno-girls-at-films.jpg",
    imageAlt: "SAGE, sede del Desayuno Girls At Films",
    accent: "#960942",
    body: [
      "Un encuentro que reúne a mujeres del cine y la actuación, junto con prensa especializada y profesionales de la industria, para conversar sobre el papel de las mujeres frente y detrás de cámara.",
      "Una conversación sobre representación, liderazgo y las nuevas formas de contar y hacer cine.",
    ],
    presentedBy: [
      {
        name: "Girls at Films",
        logo: "/images/programacion-2026/logos/girls-at-films.png",
        width: 317,
        height: 267,
      },
      {
        name: "Elle",
        logo: "/images/programacion-2026/logos/elle.png",
        width: 359,
        height: 106,
      },
    ],
  },
  {
    slug: "panel-the-next-wave",
    title: "The Next Wave — Emerging Filmmakers Panel",
    date: "Sábado 12 de diciembre",
    venue: "Cinépolis San José del Cabo",
    credit: "Moderado por Carlos López Estrada",
    image: "/images/programacion-2026/panel-the-next-wave.jpg",
    imageAlt: "Panel The Next Wave en Cinépolis San José del Cabo",
    accent: "#6687C3",
    body: [
      "El Festival presenta The Next Wave — Emerging Filmmakers Panel: un panel de cineastas emergentes de América Latina cuyo trabajo define el lenguaje audiovisual de la próxima generación.",
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
            country: "México",
            meta: "Moderador",
            bio: "Moderador. Cineasta mexicano nominado al Oscar. Dirigió Blindspotting, Summertime y co-dirigió Raya and the Last Dragon, nominada al Oscar. Es fundador de Antigravity Academy, plataforma para cineastas emergentes.",
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
            country: "Chile",
            meta: "“La pena no duerme de noche”",
            bio: 'Cineasta y periodista. Codirectora de "La pena no duerme de noche" (2025), su primer corto, estrenado en Fantastic Fest y seleccionado en más de 50 festivales incluyendo Sundance y BIFAN.',
          },
          {
            name: "Natalia León",
            image: "/images/programacion-2026/personas/natalia-leon.jpg",
            country: "México",
            meta: "“Como si la tierra se las hubiera tragado”",
            bio: "Guionista, directora, animadora y actriz. Graduada de ENSAD París y School of Visual Arts Nueva York. Su cortometraje debut Como si la tierra se las hubiera tragado ganó el Jury Award for Best Animated Short Film en Sundance 2025. Explora identidad, migración, memoria y duelo colectivo con una sensibilidad visual extraordinaria.",
          },
          {
            name: "Mariana Mendívil",
            image: "/images/programacion-2026/personas/mariana-mendivil.jpg",
            country: "México",
            meta: "“Memoria de un cuerpo desplazado”",
            bio: "Cineasta, artista visual y animadora. Su cortometraje Memoria de un cuerpo desplazado ganó la Medalla Puma de Plata en FICUNAM 2024 y ha recorrido Morelia, Bogoshorts y Animafest Zagreb. Combina ensayo cinematográfico, animación y collage para explorar desplazamiento y memoria.",
          },
          {
            name: "Diego Gaxiola",
            image: "/images/programacion-2026/personas/diego-gaxiola.jpg",
            country: "México",
            meta: "“Circo de Loy”",
            bio: "Guionista, director y productor. Su cortometraje Circo de Loy, desarrollado con el apoyo del cineasta ganador del Oscar Paolo Sorrentino, ha ganado reconocimiento internacional por su lenguaje visual único y su fuerza narrativa — creado con presupuesto casi inexistente.",
          },
          {
            name: "Karla Condado",
            image: "/images/programacion-2026/personas/karla-condado.jpg",
            country: "México",
            meta: "“Miriam”",
            bio: "Directora, guionista y fotógrafa, egresada de ESCINE. Su cortometraje Miriam tuvo su estreno mundial en la sección Berlinale Shorts de la Berlinale 2026, compitiendo por el Oso de Oro. Una carta de video dirigida a su tía, víctima de feminicidio: memoria, ausencia e impacto de la violencia de género.",
          },
          {
            name: "Leo Aguirre",
            image: "/images/programacion-2026/personas/leo-aguirre.jpg",
            country: "EUA",
            meta: "“Isme”",
            bio: "Guionista y director mexicano-americano criado entre El Paso y Ciudad Juárez. Su cortometraje Isme tuvo su estreno mundial en SXSW 2024. Explora identidad, espiritualidad y el crecimiento entre dos culturas con un lenguaje cinematográfico rico en simbolismo.",
          },
          {
            name: "Amandine Thomas",
            image: "/images/programacion-2026/personas/amandine-thomas.jpg",
            country: "Francia/EUA",
            meta: "“Albatross”",
            bio: "Guionista, directora y editora franco-americana. Su cortometraje Albatross tuvo su estreno mundial en Sundance 2026. Con una sensibilidad visual refinada, descubre lo extraordinario dentro de lo cotidiano a través de historias profundamente humanas.",
          },
          {
            name: "Federico Luis",
            image: "/images/programacion-2026/personas/federico-luis.jpg",
            country: "Argentina",
            meta: "“The Opponents”",
            bio: "Guionista y director. Su cortometraje The Opponents ganó la Palme d'Or al Mejor Cortometraje en Cannes 2025 — el máximo honor del festival en su categoría. Un retrato sutil de conexión humana y pertenencia ambientado en el mundo del fútbol amateur.",
          },
          {
            name: "Eduardo Braun Costa",
            image: "/images/programacion-2026/personas/eduardo-braun-costa.jpg",
            country: "Argentina",
            meta: "“The Liars”",
            bio: "Guionista, director y productor. Su primer cortometraje de ficción The Liars ganó el Special Jury Award for Acting en Sundance 2026. Coproducción entre Argentina, Brasil y Francia sobre la inocencia y resiliencia de la infancia.",
          },
          {
            name: "Gabriela Ortega",
            image: "/images/programacion-2026/personas/gabriela-ortega.jpg",
            country: "República Dominicana",
            meta: "“Marga en el DF”",
            bio: "Directora, guionista y actriz, egresada de USC y alumni de Sundance. Su cortometraje Huella fue seleccionado en Sundance 2022. Nombrada por Filmmaker Magazine como una de las 25 New Faces of Independent Film. En 2026 estrenó Marga en el DF en Sundance. Su trabajo explora la intersección entre ficción, poesía e identidad caribeña.",
          },
        ],
      },
    ],
  },
];
