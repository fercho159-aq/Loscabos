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

// Orden cronológico ascendente (2012 -> 2025). Fuera: 2020 (en línea), 2021 (híbrida),
// 2023 (cancelada) y 2024 (pendiente de material).
//
// Las fotos se generan con `scripts/optimize-personalidades.py` (2:3, máx
// 600x900). Quien no tenga `image` se pinta con placeholder de iniciales.
export const personalidadesPorAnio: AnioPersonalidades[] = [
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
    year: "2016",
    slug: "edicion-2016",
    people: [
      { name: "Monica Bellucci", image: "/images/personalidades/2016/monica-bellucci.jpg" },
      { name: "Jacob Tremblay", image: "/images/personalidades/2016/jacob-tremblay.jpg" },
      { name: "Lyn May", image: "/images/personalidades/2016/lyn-may.jpg" },
      { name: "Natalia Lafourcade", image: "/images/personalidades/2016/natalia-lafourcade.jpg" },
      { name: "Tony Dalton", image: "/images/personalidades/2016/tony-dalton.jpg" },
    ],
  },
  {
    year: "2017",
    slug: "edicion-2017",
    people: [
      { name: "Nicole Kidman", image: "/images/personalidades/2017/nicole-kidman.jpg" },
      { name: "Dolores Heredia", image: "/images/personalidades/2017/dolores-heredia.jpg" },
      { name: "Sophie Alexander", image: "/images/personalidades/2017/sophie-alexander.jpg" },
      { name: "Michel Franco", image: "/images/personalidades/2017/michel-franco.jpg" },
      { name: "Zuria Vega y Alberto Guerra", image: "/images/personalidades/2017/zuria-vega-y-alberto-guerra.jpg" },
    ],
  },
  {
    year: "2018",
    slug: "edicion-2018",
    people: [
      { name: "Adam Driver", image: "/images/personalidades/2018/adam-driver.jpg" },
      { name: "Rebecca Jones", image: "/images/personalidades/2018/rebecca-jones.jpg" },
      { name: "Martha Higareda", image: "/images/personalidades/2018/martha-higareda.jpg" },
      { name: "Terry Gilliam", image: "/images/personalidades/2018/terry-gilliam.jpg" },
      { name: "Spike Lee", image: "/images/personalidades/2018/spike-lee.jpg" },
    ],
  },
  {
    year: "2019",
    slug: "edicion-2019",
    people: [
      { name: "Robert De Niro", image: "/images/personalidades/2019/robert-de-niro.jpg" },
      { name: "Yalitza Aparicio", image: "/images/personalidades/2019/yalitza-aparicio.jpg" },
      { name: "Cassandra Sánchez Navarro", image: "/images/personalidades/2019/cassandra-sanchez-navarro.jpg" },
      { name: "Ludwika Paleta", image: "/images/personalidades/2019/ludwika-paleta.jpg" },
      { name: "Ira Sachs", image: "/images/personalidades/2019/ira-sachs.jpg" },
    ],
  },
  {
    year: "2022",
    slug: "edicion-2022",
    people: [
      { name: "Karla Souza", image: "/images/personalidades/2022/karla-souza.jpg" },
      { name: "Ana Valeria Becerril", image: "/images/personalidades/2022/ana-valeria-becerril.jpg" },
      { name: "Christian Chávez", image: "/images/personalidades/2022/christian-chavez.jpg" },
      { name: "Michelle Renaud", image: "/images/personalidades/2022/michelle-renaud.jpg" },
      { name: "Marian Mathias y Joy Jorgensen", image: "/images/personalidades/2022/marian-mathias-y-joy-jorgensen.jpg" },
    ],
  },
  {
    year: "2025",
    slug: "edicion-2025",
    people: [
      { name: "Ed Maverick", image: "/images/personalidades/2025/ed-maverick.jpg" },
      { name: "Eugenio Caballero", image: "/images/personalidades/2025/eugenio-caballero.jpg" },
      { name: "Fernando Cattori", image: "/images/personalidades/2025/fernando-cattori.jpg" },
      { name: "Alejandro Puente", image: "/images/personalidades/2025/alejandro-puente.jpg" },
      { name: "Tessa Ia y Naian González Norvind", image: "/images/personalidades/2025/tessa-ia-y-naian-gonzalez-norvind.jpg" },
      { name: "Andrea Chaparro", image: "/images/personalidades/2025/andrea-chaparro.jpg" },
      { name: "Lizeth Selene", image: "/images/personalidades/2025/lizeth-selene.jpg" },
    ],
  },
];
