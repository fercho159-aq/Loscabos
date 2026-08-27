export type Personalidad = {
  name: string;
  /** Sin `image` la tarjeta se pinta como placeholder con iniciales. */
  image?: string;
  /** Alt propio cuando la foto no es un retrato individual (fotos de grupo). */
  alt?: string;
};

export type AnioPersonalidades = {
  year: string;
  /** Slug de `editionsData` — enlaza a /ediciones-anteriores/<slug>. */
  slug: string;
  people: Personalidad[];
};

// Newest-first, igual que editionsData. Fuera: 2020 (en línea), 2021 (híbrida),
// 2023 (cancelada) y 2024 (pendiente de material).
//
// Las fotos llegan por tandas: quien todavía no tiene `image` se pinta con
// iniciales. Para agregar una tanda: correr `scripts/optimize-personalidades.py`
// con el año nuevo en su MAPPING y llenar aquí los `image` correspondientes.
export const personalidadesPorAnio: AnioPersonalidades[] = [
  {
    year: "2025",
    slug: "edicion-2025",
    people: [
      { name: "Ed Maverick" },
      { name: "Eugenio Caballero" },
      { name: "Fernando Cattori" },
      { name: "Alejandro Puente" },
      { name: "Tessa Ia y Naian González Norvind" },
      { name: "Andrea Chaparro" },
      { name: "Lizeth Selene" },
    ],
  },
  {
    year: "2022",
    slug: "edicion-2022",
    people: [
      { name: "Karla Souza" },
      { name: "Ana Valeria Becerril" },
      { name: "Christian Chávez" },
      { name: "Michelle Renaud" },
      { name: "Marian Mathias y Joy Jorgensen" },
    ],
  },
  {
    year: "2019",
    slug: "edicion-2019",
    people: [
      { name: "Robert De Niro" },
      { name: "Yalitza Aparicio" },
      { name: "Cassandra Sánchez Navarro" },
      { name: "Ludwika Paleta" },
      { name: "Ira Sachs" },
    ],
  },
  {
    year: "2018",
    slug: "edicion-2018",
    people: [
      { name: "Adam Driver" },
      { name: "Rebecca Jones" },
      { name: "Martha Higareda" },
      { name: "Terry Gilliam" },
      { name: "Spike Lee" },
    ],
  },
  {
    year: "2017",
    slug: "edicion-2017",
    people: [
      { name: "Nicole Kidman" },
      { name: "Dolores Heredia" },
      { name: "Sophie Alexander" },
      { name: "Michel Franco" },
      { name: "Zuria Vega y Alberto Guerra" },
    ],
  },
  {
    year: "2016",
    slug: "edicion-2016",
    people: [
      { name: "Monica Bellucci" },
      { name: "Jacob Tremblay" },
      { name: "Lyn May" },
      { name: "Natalia Lafourcade" },
      { name: "Tony Dalton" },
    ],
  },
  {
    year: "2015",
    slug: "edicion-2015",
    people: [
      { name: "Liam Neeson", image: "/images/personalidades/2015/liam-neeson.jpg" },
      { name: "Jared Leto", image: "/images/personalidades/2015/jared-leto.jpg" },
      { name: "Manolo Caro", image: "/images/personalidades/2015/manolo-caro.jpg" },
      { name: "Humberto Busto", image: "/images/personalidades/2015/humberto-busto.jpg" },
      { name: "Alosian Vivancos", image: "/images/personalidades/2015/alosian-vivancos.jpg" },
    ],
  },
  {
    year: "2014",
    slug: "edicion-2014",
    people: [
      { name: "Reese Witherspoon", image: "/images/personalidades/2014/reese-witherspoon.jpg" },
      { name: "Rosario Dawson", image: "/images/personalidades/2014/rosario-dawson.jpg" },
      { name: "Natalia Tena", image: "/images/personalidades/2014/natalia-tena.jpg" },
      { name: "Eiza González", image: "/images/personalidades/2014/eiza-gonzalez.jpg" },
      { name: "Johanna Murillo", image: "/images/personalidades/2014/johanna-murillo.jpg" },
    ],
  },
  {
    year: "2013",
    slug: "edicion-2013",
    people: [
      { name: "Julieta Venegas", image: "/images/personalidades/2013/julieta-venegas.jpg" },
      { name: "Gael García Bernal", image: "/images/personalidades/2013/gael-garcia-bernal.jpg" },
      { name: "Ana De la Reguera", image: "/images/personalidades/2013/ana-de-la-reguera.jpg" },
      { name: "Daniel Jiménez Cacho", image: "/images/personalidades/2013/daniel-jimenez-cacho.jpg" },
      { name: "Paola Núñez", image: "/images/personalidades/2013/paola-nunez.jpg" },
    ],
  },
  {
    year: "2012",
    slug: "edicion-2012",
    people: [
      { name: "Edward Norton", image: "/images/personalidades/2012/edward-norton.jpg" },
      { name: "Diego Luna", image: "/images/personalidades/2012/diego-luna.jpg" },
      // El original es apaisado (1024x595); el script lo monta sobre lienzo 2:3.
      { name: "Gael García Bernal", image: "/images/personalidades/2012/gael-garcia-bernal.jpg" },
      { name: "Matt Dillon", image: "/images/personalidades/2012/matt-dillon.jpg" },
      {
        name: "Octavia Spencer",
        image: "/images/personalidades/2012/octavia-spencer.jpg",
        alt: "Allison Janney, Tate Taylor y Octavia Spencer en FICC Los Cabos 2012",
      },
    ],
  },
];
