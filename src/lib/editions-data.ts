export type Edition = {
  slug: string;
  year: string;
  dates: string;
  title: string;
  posterSrc: string;
  description: string;
  downloadPosterLink?: string;
  downloadCatalogLink?: string;
};

export const editionsData: Edition[] = [
  {
    slug: "edicion-2024",
    year: "2024",
    dates: "4 al 8 de diciembre",
    title: "Encuentros de cine",
    posterSrc:
      "https://static.wixstatic.com/media/589d69_35588de52248466c934a83761821f02d~mv2.jpg/v1/fill/w_708,h_1044,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Poster-70x100.jpg",
    description:
      "El 2024 marcó el regreso del Festival Internacional de Cine de Los Cabos, después de una pausa obligada en su edición 2023. Enmarcado bajo el concepto Encuentros de cine, el Festival expandió sus horizontes hacia San José del Cabo, en nuevas sedes como Crania, el Jardín Escultórico Puerto Los Cabos, Hotel El Ganzo, Plaza Mijares, además de tener actividades en Cinemex Puerto Paraíso, en Cabo San Lucas. Fue una edición con un enfoque especial en el cine nacional a través del programa Encuadres Mexicanos, que incluyó la programación de once largometrajes de reciente producción, así como la presentación de dos conversatorios. Este año el Fondo Fílmico Gabriel Figueroa apoyó a primeras y segundas películas y se le dio continuidad al ciclo de cine gratuito La Baja Inspira Itinerante, que durante el año recorrió Cabo San Lucas, Ciudad Insurgentes, El Triunfo, Guerrero Negro, La Paz, Loreto, San José del Cabo, Todos Santos, Tijuana y Mexicali.",
    downloadPosterLink:
      "https://drive.google.com/file/d/1tXYcBf8gqXUqHu12jycLgBqwqwHY5DQP/view?usp=sharing",
    downloadCatalogLink:
      "https://www.ficloscabos.org/_files/ugd/589d69_85362e90726047b4992c881da92100bf.pdf",
  },
  {
    slug: "edicion-2022",
    year: "2022",
    dates: "9 al 13 de noviembre",
    title: "Regreso a la experiencia colectiva",
    posterSrc:
      "https://static.wixstatic.com/media/589d69_5a30332cd9a94c03bb535ed1ae8a9469~mv2.png/v1/fill/w_522,h_772,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2022.png",
    description:
      "En su decimoprimera edición el Festival Internacional de Cine de Los Cabos regresó a los espacios físicos a través de la inigualable experiencia colectiva que nos ofrece el cine. Este año presentamos una programación imperdible que la audiencia pudo disfrutar en las salas de Cinemex Puerto Paraíso, así como en otros espacios al aire libre: Once Once y la Plaza Cívica de la Comunidad de La Playa. En el marco del Festival se entregó el Premio Sin Fronteras al actor mexicano Tenoch Huerta, y se otorgó el reconocimiento Mujeres Fantásticas a la actriz y productora Karla Souza.",
    downloadPosterLink:
      "https://drive.google.com/file/d/1oNKyt0I91O-FTF-pPGIbJ_R6alQnEzF9/view?usp=sharing",
    downloadCatalogLink:
      "https://www.ficloscabos.org/_files/ugd/589d69_ebb07096d2b24155a61e03b8b7ebdee2.pdf",
  },
  {
    slug: "edicion-2021",
    year: "2021",
    dates: "10 al 18 de noviembre",
    title: "Décimo Aniversario",
    posterSrc:
      "https://static.wixstatic.com/media/589d69_8e128326a72c48d482f00134b5f7f5cd~mv2.jpeg/v1/fill/w_536,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Poster_2021.jpeg",
    description:
      "En el 2021 el Festival celebró su décimo aniversario con una edición híbrida. Como parte de los festejos, las pantallas de Cinemex en Los Cabos, la Ciudad de México, y Mérida abrieron sus puertas para acoger proyecciones especiales. La plataforma digital del Festival también ofreció contenido especial para la audiencia en todo México y parte de Estados Unidos. Una edición marcada por la resistencia y la celebración del cine.",
    downloadPosterLink:
      "https://drive.google.com/file/d/1nRsNBwUvzZgXaH4QCF3SPKCMugXJAh22/view?usp=sharing",
    downloadCatalogLink:
      "https://www.ficloscabos.org/_files/ugd/589d69_e19094dd009e4058b5a22cdde245246f.pdf",
  },
  {
    slug: "edicion-2020",
    year: "2020",
    dates: "11 al 19 de noviembre",
    title: "(re)imaginarnos",
    posterSrc:
      "https://static.wixstatic.com/media/589d69_72ffde72244f4e80a3279000835f5d9b~mv2.png/v1/fill/w_536,h_792,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2020.png",
    description:
      "Bajo el lema (re)imaginarnos, la novena edición del Festival Internacional de Cine de Los Cabos se celebró completamente en el espacio digital, presentando una nueva oportunidad de dialogar con nuestra audiencia desde cualquier punto del país. La edición se adaptó a las circunstancias globales para continuar siendo un espacio de encuentro cinematográfico, industria y comunidad creativa.",
    downloadPosterLink:
      "https://drive.google.com/file/d/186nxjCE9-bch1QNnTmyofrYjvwj2Tfbr/view?usp=sharing",
    downloadCatalogLink:
      "https://www.ficloscabos.org/_files/ugd/589d69_4201d4c9d8874249909e27e754be9e81.pdf",
  },
  {
    slug: "edicion-2019",
    year: "2019",
    dates: "13 al 17 de noviembre",
    title: "The Irishman",
    posterSrc:
      "https://static.wixstatic.com/media/589d69_ce153d7a795441ea9081d0a2e3493e49~mv2.jpeg/v1/crop/x_106,y_0,w_1735,h_2560/fill/w_536,h_792,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Poster_2019.jpeg",
    description:
      "Robert De Niro, uno de los actores más extraordinarios de la historia, fue el encargado de presentar el estreno en América Latina de The Irishman, de Martin Scorsese, en la Gala Inaugural del Festival. Esta fue una edición en la que se abrieron nuevos espacios dedicados a la visibilidad de las mujeres en la industria fílmica, a través de iniciativas como Mujeres Fantásticas y la nueva sección HerStory, así como una programación robusta con más de 100 títulos de todas partes del mundo.",
    downloadPosterLink:
      "https://drive.google.com/file/d/1DzNGISaooaD3vKfxqq6Acg7-h3zMDLdM/view?usp=sharing",
    downloadCatalogLink:
      "https://www.ficloscabos.org/_files/ugd/589d69_ee4abd0ef5564ba0879c2f0c2f800bc4.pdf",
  },
  {
    slug: "edicion-2018",
    year: "2018",
    dates: "7 al 11 de noviembre",
    title: "Grandes Personalidades",
    posterSrc:
      "https://static.wixstatic.com/media/589d69_e1090894c6a0455b852758d46644e7a6~mv2.jpeg/v1/fill/w_536,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Poster_2018.jpeg",
    description:
      "Esta edición se destacó por reunir a grandes personalidades como parte de los principales invitados: Spike Lee, Adam Driver y Terry Gilliam, quienes engalanaron las alfombras rojas de las galas y participaron en sesiones especiales con el público. Una edición que consolidó al Festival como un espacio de conversación entre el cine internacional y el talento mexicano.",
    downloadPosterLink:
      "https://drive.google.com/file/d/1MTPjTA9ohHtDu4ow744YRRmV8axY-B6o/view?usp=sharing",
    downloadCatalogLink:
      "https://www.ficloscabos.org/_files/ugd/589d69_7fde9a9ce59e4467a18d3e95a3f949e2.pdf",
  },
  {
    slug: "edicion-2017",
    year: "2017",
    dates: "8 al 12 de noviembre",
    title: "Estrenos Mundiales",
    posterSrc:
      "https://static.wixstatic.com/media/589d69_89129b80c9fb45e3b7233085c119f946~mv2.png/v1/crop/x_50,y_0,w_980,h_1350/fill/w_536,h_792,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2017.png",
    description:
      "En la sexta edición del Festival presentamos una programación conformada por largometrajes reconocidos en los principales festivales cinematográficos alrededor del mundo. La audiencia disfrutó de estrenos mundiales y proyecciones especiales que posicionaron al Festival como un destino cinematográfico de relevancia internacional en el circuito de festivales de Latinoamérica.",
    downloadPosterLink:
      "https://drive.google.com/file/d/1JsmzBAy92Ts058-d-QmW_Qlk86kqKpiP/view?usp=sharing",
    downloadCatalogLink:
      "https://www.ficloscabos.org/_files/ugd/589d69_a75ada47d19d4d7d949357ce195d5b61.pdf",
  },
  {
    slug: "edicion-2016",
    year: "2016",
    dates: "9 al 13 de noviembre",
    title: "Cinco Años",
    posterSrc:
      "https://static.wixstatic.com/media/589d69_d6ea39784c1040caa177247a2166f5f5~mv2.jpeg/v1/fill/w_536,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Poster_2016.jpeg",
    description:
      "En el 2016 el Festival celebró cinco años de existencia, consolidando su labor por ser un punto de encuentro entre las cinematografías de México, Estados Unidos y Canadá. De los 45 títulos exhibidos más de la mitad fueron producciones cinematográficas mexicanas. Una edición de celebración que reafirmó el compromiso del Festival con el cine nacional e iberoamericano.",
    downloadPosterLink:
      "https://drive.google.com/file/d/1tbMhAjIz8UAqcIjHRrR_EsAVGkrIfoHu/view?usp=sharing",
    downloadCatalogLink:
      "https://www.ficloscabos.org/_files/ugd/589d69_229adad2d73e4c7cb0a3281c2e59ed0f.pdf",
  },
  {
    slug: "edicion-2015",
    year: "2015",
    dates: "11 al 15 de noviembre",
    title: "Nuevas Alianzas",
    posterSrc:
      "https://static.wixstatic.com/media/589d69_5506525ad6fb4151908636e2f7cc728e~mv2.jpeg/v1/fill/w_536,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Poster_2015.jpeg",
    description:
      "En la cuarta edición apostamos por un programa fílmico incluyente, una plataforma de industria fortalecida y por la inclusión de series de televisión en el programa. Esta edición se destacó por la diversidad de su programación y por el fortalecimiento de alianzas con la industria cinematográfica internacional que abrieron nuevas puertas para el talento mexicano.",
    downloadPosterLink:
      "https://drive.google.com/file/d/170gUwbZqk0ZTw2usTEgXo4YUP1Synw6V/view?usp=sharing",
    downloadCatalogLink:
      "https://www.ficloscabos.org/_files/ugd/589d69_813ab64ab01f40c8a3c9cbcadea28c89.pdf",
  },
  {
    slug: "edicion-2014",
    year: "2014",
    dates: "12 al 16 de noviembre",
    title: "Los Cabos Unstoppable",
    posterSrc:
      "https://static.wixstatic.com/media/589d69_58ff914b509c4fdba2aba848240fa811~mv2.jpeg/v1/fill/w_536,h_792,fp_0.47_0.35,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Poster_2014.jpeg",
    description:
      "Los Cabos logró sobreponerse al paso del devastador Huracán Odile. De la mano de la campaña Los Cabos Unstoppable, el Festival Internacional de Cine de Los Cabos fue el evento que reactivó las actividades turísticas y culturales de la región, demostrando la resiliencia de su comunidad y su compromiso con el cine.",
    downloadPosterLink:
      "https://drive.google.com/file/d/1WSDZZr8fq8FUpGNeCjRzuz8INoes9teb/view?usp=sharing",
    downloadCatalogLink:
      "https://www.ficloscabos.org/_files/ugd/589d69_ae80ac74c3214752a198d21ae921956c.pdf",
  },
  {
    slug: "edicion-2013",
    year: "2013",
    dates: "13 al 16 de noviembre",
    title: "Intercambio Cultural",
    posterSrc:
      "https://static.wixstatic.com/media/589d69_3f017daa60d34abe9a4574326e3a031d~mv2.jpeg/v1/fill/w_536,h_792,fp_0.50_0.41,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Poster_2013.jpeg",
    description:
      "Los Cabos nos dio la bienvenida del 13 al 16 de noviembre para celebrar la segunda edición del Festival. Este año el Festival se redefinió como un evento enfocado al cine de Norteamérica con el objetivo de lograr un intercambio cultural, profesional y comercial entre las industrias cinematográficas de México, Estados Unidos y Canadá. En esta edición nacieron las secciones competitivas Competencia Los Cabos y México Primero.",
    downloadPosterLink:
      "https://drive.google.com/file/d/1iBB7Ruj52eo6efE9tPMP9taux86SDIew/view?usp=sharing",
    downloadCatalogLink:
      "https://www.ficloscabos.org/_files/ugd/589d69_185dc33dca0642109f45b1c10258ebd8.pdf",
  },
  {
    slug: "edicion-2012",
    year: "2012",
    dates: "14 al 17 de noviembre",
    title: "Primera Edición",
    posterSrc:
      "https://static.wixstatic.com/media/589d69_b0d752d3497347d68b131666370ec8d6~mv2.jpeg/v1/fill/w_536,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Poster_2012.jpeg",
    description:
      "Nuestra primera edición se celebró bajo el nombre Baja International Film Festival. Estuvo conformada por 80 títulos nacionales e internacionales: 5 largometrajes internacionales de ficción, 5 largometrajes documentales, producciones mexicanas e historias de Baja California Sur. El inicio de un festival que se convertiría en uno de los más importantes de Latinoamérica.",
  },
];
