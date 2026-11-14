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
  presentedBy?: { name: string; logo: string; width: number; height: number; wide?: boolean }[];
  groups?: PersonaGrupo[];
};


// Sneak Peek de la edición 2026, en el orden del teaser del 21 de octubre
// (pestaña "Teaser 21 octubre" del documento del sitio), más el conversatorio de
// Jalisco y el panel de festivales del documento del 29 de octubre. Sin fechas: se anuncian
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
      "¿Cómo han evolucionado las tendencias que están transformando las industrias creativas? A través de la mirada de Rosenbaum (SXSW), exploraremos los cambios más relevantes de la última década en cine, televisión, música, tecnología, comedia y educación, así como la relación del festival con México y las tendencias que marcarán el rumbo hacia 2027.",
    ],
  },
  {
    slug: "keynote-diana-segoviano",
    title: "Keynote — *Filmar en México: el territorio como infraestructura de producción*",
    cardTitle: "Keynote — Diana Segoviano",
    cardCredit: true,
    venue: "Cinépolis San José del Cabo | Sala 8",
    credit: "Diana Segoviano · Coordinadora General de la Comisión Mexicana de Filmaciones (COMEFILM)",
    image: "/images/programacion-2026/keynote-diana-segoviano.jpg",
    imageAlt: "Diana Segoviano, Coordinadora General de la Comisión Mexicana de Filmaciones",
    accent: "#C47A3D",
    body: [
      "¿Cómo está cambiando el mapa de la producción audiovisual y qué oportunidades representa para México? Una conversación sobre el papel estratégico de los territorios en los procesos creativos y de producción, los factores que hacen competitivo a un destino y cómo México puede aprovechar las capacidades de sus distintas regiones para fortalecer su conexión con la industria audiovisual global.",
    ],
  },
  {
    slug: "homenaje-dolores-heredia",
    title: "Homenaje 2026 — Dolores Heredia",
    venue: "Cinépolis San José del Cabo | Sala 8",
    image: "/images/programacion-2026/homenaje-dolores-heredia.jpg",
    imageAlt: "Dolores Heredia, homenajeada de FICCLosCabos 2026",
    accent: "#FA6935",
    body: [
      "FICCLosCabos 2026 rinde homenaje a Dolores Heredia, una de las actrices más representativas del cine mexicano contemporáneo.",
      "Presentado por José María Yazpik, este encuentro celebrará su trayectoria artística a través de una retrospectiva audiovisual de su vida y obra, recordando algunos de los momentos más significativos de su carrera y su vínculo con Baja California Sur.",
    ],
    groups: [
      {
        title: "Presenta",
        layout: "bio",
        people: [
          {
            name: "José María Yazpik",
            image: "/images/programacion-2026/personas/jose-maria-yazpik.jpg",
            meta: "Actor",
          },
        ],
      },
    ],
  },
  {
    slug: "keynote-claudio-jimenez",
    title: "Keynote — *La transferencia de lenguajes y formatos en la creación de contenidos*",
    cardTitle: "Keynote — Claudio Jiménez",
    cardCredit: true,
    venue: "Cinépolis San José del Cabo | Sala 8",
    credit: "Claudio Jiménez · Fundador de Mighty Animation",
    image: "/images/programacion-2026/keynote-claudio-jimenez.jpg",
    imageAlt: "Claudio Jiménez, fundador de Mighty Animation",
    accent: "#E9B0BD",
    body: [
      "¿Cómo están evolucionando las formas de contar historias? Claudio Jiménez, fundador de Mighty Animation, explorará cómo la animación, la inteligencia artificial y el storytelling están transformando los procesos creativos y abriendo nuevas posibilidades para desarrollar historias y experimentar con distintos formatos de contenido.",
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
      "Conversatorio postproyección con Dimitri Planchon y Jean-Paul Guigue, y Claudio Jiménez, fundador de Mighty Animation.",
    ],
    groups: [
      {
        title: "Participan",
        layout: "bio",
        people: [
          {
            name: "Dimitri Planchon",
            image: "/images/programacion-2026/personas/dimitri-planchon.jpg",
            meta: "Director",
          },
          {
            name: "Jean-Paul Guigue",
            image: "/images/programacion-2026/personas/jean-paul-guigue.jpg",
            meta: "Director",
          },
          {
            name: "Claudio Jiménez",
            image: "/images/programacion-2026/personas/claudio-jimenez.jpg",
            meta: "Fundador de Mighty Animation",
          },
        ],
      },
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
        width: 621,
        height: 146,
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
    venue: "Hotel El Ganzo — Rooftop",
    credit: "Moderado por Carlos López Estrada",
    image: "/images/programacion-2026/panel-the-next-wave-teaser.jpg",
    imageAlt: "Fotograma de un cortometraje del panel The Next Wave",
    accent: "#6687C3",
    body: [
      "Conoce a los 11 cineastas emergentes de América Latina que forman parte de The Next Wave, un programa dedicado a impulsar nuevas voces del cine latinoamericano. En su presentación oficial, descubriremos a los talentos seleccionados y sus perspectivas creativas a través de un encuentro moderado por Carlos López Estrada.",
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
    credit: "Jim Kolmar · Curador y programador cinematográfico internacional - SXSW Film & TV",
    image: "/images/programacion-2026/keynote-jim-kolmar.jpg",
    imageAlt: "Jim Kolmar, curador y programador de SXSW Film & TV",
    accent: "#081722",
    body: [
      "Desde su experiencia en el circuito internacional de festivales, Jim Kolmar compartirá las claves para presentar una película ante los equipos de programación, entender los criterios de selección y desarrollar estrategias que aumenten sus oportunidades de formar parte de festivales y llegar a nuevas audiencias.",
    ],
  },
  {
    slug: "keynote-inna-payan",
    title: "Keynote — *Estrategias de producción y financiamiento para el cine independiente*",
    cardTitle: "Keynote — Inna Payán",
    cardCredit: true,
    venue: "Cinépolis San José del Cabo | Sala 8",
    credit: "Inna Payán · Productora independiente",
    image: "/images/programacion-2026/keynote-inna-payan.jpg",
    imageAlt: "Inna Payán, productora independiente",
    accent: "#6687C3",
    body: [
      "¿Cómo construir una estrategia financiera que permita llevar una película de la idea a la pantalla? A partir de su experiencia como productora independiente, Inna Payán compartirá las claves para combinar inversión privada, fondos, estímulos como EFICINE e incentivos, así como estructurar coproducciones y alianzas estratégicas.",
      "Una conversación sobre cómo hacer viables los proyectos cinematográficos sin comprometer su visión creativa.",
    ],
  },
  {
    slug: "un-passo-alla-volta",
    title: "Proyección + Q&A — *Un Passo Alla Volta*",
    cardTitle: "Proyección — Un Passo Alla Volta",
    venue: "Zadún Ritz-Carlton Reserve — Suite",
    credit: "Dir. Simone Coppo · Italia · 2026 · 14’",
    cardSubtitle: "Dir. Simone Coppo · Italia · 2026 · 14’",
    image: "/images/programacion-2026/un-passo-alla-volta.jpg",
    imageAlt: "Fotograma del cortometraje Un Passo Alla Volta",
    accent: "#6687C3",
    body: [
      "El cortometraje de Simone Coppo y Martina Ferragamo estrenado en el Teatro La Fenice dentro de la Mostra de Venecia.",
      "Una reflexión sobre los nuevos comienzos y sobre el tiempo que toma convertir un legado en una elección propia.",
      "Q&A con Martina Ferragamo y Simone Coppo. Moderado por Rodrigo García de Central Films.",
    ],
    groups: [
      {
        title: "Participan",
        layout: "bio",
        people: [
          {
            name: "Martina Ferragamo y Simone Coppo",
            image: "/images/programacion-2026/personas/martina-ferragamo-simone-coppo.jpg",
            meta: "Q&A",
          },
          {
            name: "Rodrigo García",
            image: "/images/programacion-2026/personas/rodrigo-garcia.jpg",
            meta: "Modera · Central Films",
          },
        ],
      },
    ],
  },
  {
    slug: "not-not-jazz",
    title: "Proyección + Conversatorio — *Medeski, Martin & Wood: Not not jazz*",
    cardTitle: "Proyección — Not not jazz",
    venue: "Zadún Ritz-Carlton Reserve — Suite",
    credit: "Dir. Jason Miller · Estados Unidos · 2024 · 77’",
    cardSubtitle: "Dir. Jason Miller · Estados Unidos · 2024 · 77’",
    image: "/images/programacion-2026/not-not-jazz.jpg",
    imageAlt: "Medeski, Martin & Wood en el póster de Not not jazz",
    accent: "#081722",
    body: [
      "Conversatorio postproyección con Billy Martin, baterista de Medeski, Martin & Wood, y Nicolás Celis (fundador de Pimienta Films).",
    ],
    groups: [
      {
        title: "Participan",
        layout: "bio",
        people: [
          {
            name: "Billy Martin",
            image: "/images/programacion-2026/personas/billy-martin.jpg",
            meta: "Baterista de Medeski, Martin & Wood",
          },
          {
            name: "Nicolás Celis",
            image: "/images/programacion-2026/personas/nico-celis.jpg",
            meta: "Fundador de Pimienta Films",
          },
        ],
      },
    ],
  },
  {
    slug: "zoe-memorex-rexsexex-y-mas",
    title: "Proyección + Conversatorio — *Zoé: Memorex + Rexsexex y Más*",
    cardTitle: "Proyección — Zoé: Memorex + Rexsexex y Más",
    venue: "JW Marriott — Terraza Amet",
    credit: "Dir. Rodrigo Guardiola · México · 2026 · 182’",
    cardSubtitle: "Dir. Rodrigo Guardiola · México · 2026 · 182’",
    image: "/images/seleccion-oficial-2026/memorex-rexsexex-y-mas-still.jpg",
    imageAlt: "Zoé en Memorex + Rexsexex y Más",
    accent: "#6687C3",
    body: [
      "Seis Estadios GNP en la Ciudad de México. Más de 380 000 almas. Lo que ocurrió a lo largo de esas seis noches fue mucho más que un récord sin precedentes para el rock mexicano; fue un encuentro histórico e íntimo entre una banda que ha sido la banda sonora de universos enteros y una fanbase multigeneracional más devota que nunca. Esta es la historia de lo que vibró sobre el escenario y de lo que quedó guardado en los corazones de los fans: un desglose sin filtros del magnetismo absoluto, la nostalgia y la vigencia indiscutible de Zoé.",
      "Conversatorio con Rodrigo Guardiola, cineasta, productor y baterista de Zoé; Olmo Guerra, productor, y Fabrizio Onetto, subdirector de Contenidos y Desarrollo Artístico en OCESA Seitrack. Moderado por Alejandro Tavares, director de Filma Jalisco.",
    ],
    groups: [
      {
        title: "Participan",
        layout: "bio",
        people: [
          {
            name: "Rodrigo Guardiola",
            image: "/images/programacion-2026/personas/rodrigo-guardiola.jpg",
            meta: "Cineasta, productor y baterista de Zoé",
          },
          {
            name: "Olmo Guerra",
            image: "/images/programacion-2026/personas/olmo-guerra.jpg",
            meta: "Productor",
          },
          {
            name: "Fabrizio Onetto",
            image: "/images/programacion-2026/personas/fabrizio-onetto.jpg",
            meta: "Subdirector de Contenidos y Desarrollo Artístico en OCESA Seitrack",
          },
          {
            name: "Alejandro Tavares",
            image: "/images/programacion-2026/personas/alejandro-tavares.jpg",
            meta: "Modera · Director de Filma Jalisco",
          },
        ],
      },
    ],
  },
  {
    slug: "sentimental",
    title: "Proyección + Q&A — *Sentimental*",
    cardTitle: "Proyección — Sentimental",
    venue: "Cinépolis San José del Cabo | Sala 8",
    credit: "Dir. Cesc Gay · España · 2020 · 82’",
    cardSubtitle: "Dir. Cesc Gay · España · 2020 · 82’",
    image: "/images/seleccion-oficial-2026/sentimental-still.jpg",
    imageAlt: "Fotograma de la película Sentimental",
    accent: "#960942",
    body: [
      "Julio (Javier Cámara) y Ana (Griselda Siciliani) hace más de quince años que están juntos. Forman una pareja que ya no se mira ni se toca, y que ha hecho del combate diario la esencia de su relación. Esta noche Ana ha invitado a casa a sus vecinos del piso de arriba, Salva (Alberto San Juan) y Laura (Belén Cuesta), una pareja más joven que ellos, amable y simpática, pero cuyos “ruidos” se han convertido en una molestia para Julio y Ana... ¿o quizás en un estímulo? Los vecinos les harán una inusual y sorprendente propuesta que convertirá la velada en una experiencia catártica para el matrimonio... Adaptación cinematográfica de 'Los vecinos de arriba', la obra teatral debut de Cesc Gay.",
      "Q&A con Griselda Siciliani.",
    ],
    groups: [
      {
        title: "Participa",
        layout: "bio",
        people: [
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
    slug: "panel-frequencies-of-now",
    title: "Panel — *Frequencies of Now: The stories behind the music*",
    cardTitle: "Panel — Frequencies of Now",
    venue: "JW Marriott — Anfiteatro",
    credit: "Moderado por Alejandro Tavares · Director de Filma Jalisco",
    image: "/images/programacion-2026/panel-frequencies-of-now.jpg",
    imageAlt: "Consola de audio iluminada en morado",
    accent: "#6687C3",
    body: [
      "Conoce los cinco proyectos seleccionados de Frequencies of Now, plataforma internacional dedicada al documental musical. Cineastas y jurados compartirán las historias detrás de cada proyecto y explorarán cómo la música refleja la identidad, la memoria y las transformaciones culturales de nuestro tiempo. La conversación abordará también los desafíos creativos y las oportunidades de proyección internacional del documental musical. El encuentro incluirá la proyección de fragmentos de los proyectos seleccionados.",
      "Jurados participantes: Rodrigo Guardiola, Hermann Neudert, Mario Escobar y Zunshu. Moderado por Alejandro Tavares, Director de Filma Jalisco.",
    ],
    groups: [
      {
        title: "Jurados participantes",
        layout: "bio",
        people: [
          {
            name: "Rodrigo Guardiola",
            image: "/images/programacion-2026/personas/rodrigo-guardiola.jpg",
            meta: "Cineasta, productor y baterista de Zoé",
          },
          {
            name: "Hermann Neudert",
            image: "/images/programacion-2026/personas/hermann-neudert.jpg",
            meta: "Director y realizador audiovisual",
          },
          {
            name: "Mario Escobar",
            image: "/images/programacion-2026/personas/mario-escobar.jpg",
            meta: "Ejecutivo de Global Talent Services (Universal Music Group) y mánager de Ed Maverick",
          },
          {
            name: "Zunshu",
            image: "/images/programacion-2026/personas/zunshu.jpg",
            meta: "Creativo y miembro de la dirección de Revista 192",
          },
          {
            name: "Alejandro Tavares",
            image: "/images/programacion-2026/personas/alejandro-tavares.jpg",
            meta: "Modera · Director de Filma Jalisco",
          },
        ],
      },
    ],
  },
  {
    slug: "conversatorio-ciudad-creativa-digital-filma-jalisco",
    title:
      "Conversatorio — *De la idea a la industria*",
    cardTitle: "Conversatorio — Ciudad Creativa Digital y Filma Jalisco",
    venue: "Cinépolis San José del Cabo | Sala 8",
    credit:
      "Alfredo Aceves · Presidente del Fideicomiso de Ciudad Creativa Digital y Alejandro Tavares · Director de Filma Jalisco",
    image: "/images/programacion-2026/conversatorio-ciudad-creativa-digital-filma-jalisco.jpg",
    imageAlt: "Rodaje en un foro con pantalla verde",
    accent: "#FA6935",
    body: [
      "¿Qué oportunidades ofrece Jalisco a los profesionales de las industrias creativas y audiovisuales? Una conversación para conocer de cerca el trabajo de Ciudad Creativa Digital y FILMA Jalisco, los apoyos y recursos que ofrecen a creadores y empresas y cómo acceder a ellos.",
      "Abordaremos también cómo profesionales de otros estados y del extranjero pueden aprovechar estas iniciativas para desarrollar sus proyectos y generar nuevas colaboraciones.",
      "Ciudad Creativa Digital, el hub de innovación, tecnología e industrias creativas de Jalisco. Reúne estudios, laboratorios, proyectos de innovación y espacios de formación en un mismo ecosistema.",
      "Filma Jalisco representa una nueva generación de comisiones fílmicas, ayuda a facilitar producciones, articula creadores, industria, instituciones, incentivos e infraestructura, para hacer las capacidades de Jalisco visibles y accesibles a productores nacionales e internacionales.",
    ],
    presentedLabel: "En colaboración con",
    presentedBy: [
      {
        name: "Ciudad Creativa Digital",
        logo: "/images/programacion-2026/logos/ciudad-creativa-digital-jalisco.png",
        width: 1759,
        height: 241,
        wide: true,
      },
      {
        name: "Filma Jalisco",
        logo: "/images/programacion-2026/logos/filma-jalisco.png",
        width: 587,
        height: 140,
      },
    ],
    groups: [
      {
        title: "Participan",
        layout: "bio",
        people: [
          {
            name: "Alfredo Aceves",
            image: "/images/programacion-2026/personas/alfredo-aceves.jpg",
            meta: "Presidente del Fideicomiso de Ciudad Creativa Digital",
            bio: "Dirige la Agencia para el Desarrollo de las Industrias Creativas y Digitales de Jalisco y preside la Junta de Gobierno de PLAi, desde donde impulsa iniciativas de innovación, tecnología y desarrollo económico.",
          },
          {
            name: "Alejandro Tavares",
            image: "/images/programacion-2026/personas/alejandro-tavares.jpg",
            meta: "Director de Filma Jalisco",
            bio: "Comunicador, productor y gestor cultural con más de tres décadas de trayectoria. Dirigió el Sistema Jalisciense de Radio y Televisión entre 2018 y 2024, y desde 2025 encabeza Filma Jalisco.",
          },
        ],
      },
    ],
  },
  {
    slug: "panel-del-circuito-de-festivales",
    title:
      "Panel — *Del circuito de festivales al reconocimiento internacional: nuevos caminos para el cine independiente*",
    cardTitle: "Panel — Del circuito de festivales al reconocimiento internacional",
    venue: "Cinépolis San José del Cabo | Sala 8",
    credit: "Modera: Elena Fortes · Productora de Para los contrincantes",
    image: "/images/programacion-2026/panel-del-circuito-de-festivales.jpg",
    imageAlt: "Pósters de los cortometrajes Para los contrincantes y Marga en el DF",
    accent: "#960942",
    body: [
      "¿Cómo logra el cine independiente abrirse camino en la industria internacional? Cinco voces creativas detrás de Para los contrincantes, dirigido por Federico Luis y producido por Elena Fortes, y Marga en el DF, dirigido por Gabriela Ortega y producido por Carlos López Estrada y Stacy Perskie, compartirán sus experiencias tras destacar en el circuito internacional de festivales y emprender campañas rumbo al Óscar.",
      "Una conversación sobre las alianzas creativas, las estrategias de producción y las conexiones dentro de la industria que permiten a las historias originales alcanzar nuevas audiencias y reconocimiento internacional.",
    ],
    groups: [
      {
        title: "Panelistas",
        layout: "bio",
        people: [
          {
            name: "Federico Luis",
            image: "/images/programacion-2026/personas/federico-luis.jpg",
            meta: "Director de “Para los contrincantes”",
          },
          {
            name: "Gabriela Ortega",
            image: "/images/programacion-2026/personas/gabriela-ortega.jpg",
            meta: "Directora de “Marga en el DF”",
          },
          {
            name: "Carlos López Estrada",
            image: "/images/programacion-2026/personas/carlos-lopez-estrada.jpg",
            meta: "Productor de “Marga en el DF” · Fundador de Antigravity Academy",
          },
          {
            name: "Stacy Perskie",
            image: "/images/programacion-2026/personas/stacy-perskie.jpg",
            meta: "Productor de “Marga en el DF” · Fundador de REDRUM",
          },
          {
            name: "Elena Fortes",
            image: "/images/programacion-2026/personas/elena-fortes.jpg",
            meta: "Moderadora · Productora de “Para los contrincantes”",
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
