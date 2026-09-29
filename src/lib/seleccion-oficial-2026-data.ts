export type Pelicula2026 = {
  slug: string;
  title: string;
  categoryId: string;
  directors: string;
  countries: string;
  year: string;
  duration: string;
  synopsis?: string;
  image?: string;
  poster?: string;
  trailerUrl?: string;
  trailerLabel?: "Tráiler" | "Clip";
};

export const PREVIEW_FILM_BASE = "/programacion-2026-preview/peliculas";
export const PREVIEW_SELECTION_URL = "/programacion-2026-preview/seleccion-oficial";

// Selección Oficial 2026: contenido y materiales proporcionados en el documento.
// https://docs.google.com/document/d/1e56bhRB7ubZZOMVvUfl_ZXcR5tYcK8T77ctQyn6hbRc/edit?tab=t.u81o9exgnzci
// Los materiales pendientes se omiten hasta contar con una fuente confirmada.
export const categorias2026: { id: string; label: string; color: string }[] = [
  {
    "id": "marejada-nacional",
    "label": "Marejada: Panorama de Largometrajes Nacionales",
    "color": "#A3CDD5"
  },
  {
    "id": "marejada-internacional",
    "label": "Marejada: Panorama de Largometrajes Internacionales",
    "color": "#0A1E23"
  },
  {
    "id": "next-wave",
    "label": "The Next Wave",
    "color": "#E5AC82"
  },
  {
    "id": "animacion",
    "label": "Animación",
    "color": "#90A79C"
  },
  {
    "id": "filma-jalisco",
    "label": "Animación · Filma Jalisco",
    "color": "#90A79C"
  },
  {
    "id": "proyecciones-especiales",
    "label": "Proyección especial",
    "color": "#ECE8DF"
  },
  {
    "id": "homenaje",
    "label": "Homenaje a Dolores Heredia",
    "color": "#886D5E"
  }
];

export const peliculas2026: Pelicula2026[] = [
  {
    "slug": "6-meses-en-el-edificio-rosa-con-azul",
    "title": "6 meses en el edificio rosa con azul",
    "categoryId": "marejada-nacional",
    "directors": "Bruno Santamaría Razo",
    "countries": "México, Brasil, Dinamarca",
    "year": "2026",
    "duration": "104’",
    "synopsis": "Cuando Bruno cumple 11 años, se enamora de su mejor amigo Vladimir. Esa noche, al padre de Bruno le diagnostican VIH. Tras la noticia, la dinámica familiar empieza a cambiar de forma inesperada, tierna y liberadora.",
    "image": "/images/seleccion-oficial-2026/6-meses-en-el-edificio-rosa-con-azul-still.jpg"
  },
  {
    "slug": "albatross",
    "title": "Albatross",
    "categoryId": "next-wave",
    "directors": "Amandine Thomas",
    "countries": "Estados Unidos, México",
    "year": "2026",
    "duration": "14’",
    "synopsis": "María, abrumada por el cuidado de su esposo enfermo, es invitada a una fiesta.",
    "image": "/images/seleccion-oficial-2026/albatross-still.jpg",
    "poster": "/images/seleccion-oficial-2026/albatross-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1m_Q74rB4HyVRvG7FLEHL5d4cpiZMUTVt/view?usp=drive_link"
  },
  {
    "slug": "angels-egg-4k-restoration",
    "title": "Angel's Egg (4K Restoration)",
    "categoryId": "animacion",
    "directors": "Mamoru Oshii",
    "countries": "Japón",
    "year": "1985",
    "duration": "71’",
    "synopsis": "En una ciudad sumergida, una niña cuida con devoción un gran huevo entre sus brazos, convencida de que pertenece a un ángel. Un muchacho aparece con un artefacto al hombro, en busca de un ave que contempló en un sueño. Al principio, nace entre ellos simpatía, hasta que, el muchacho aplasta el huevo."
  },
  {
    "slug": "blaise",
    "title": "Blaise",
    "categoryId": "animacion",
    "directors": "Dimitri Planchon, Jean-Paul Guigue",
    "countries": "Francia",
    "year": "2026",
    "duration": "82’",
    "synopsis": "En una familia obsesionada por agradar a los demás, un introvertido adolescente termina involucrado, por pura complacencia, en una improvisada y violenta cruzada revolucionaria.",
    "image": "/images/seleccion-oficial-2026/blaise-still.jpg",
    "poster": "/images/seleccion-oficial-2026/blaise-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1akamxtWBPhQQ52GfhCqz8QBWoxJ8AA_Z/view?usp=drive_link"
  },
  {
    "slug": "circo-de-loy",
    "title": "Circo de Loy",
    "categoryId": "next-wave",
    "directors": "Diego Gaxiola",
    "countries": "España, México",
    "year": "2026",
    "duration": "15’",
    "synopsis": "En un precario circo de los Andes, la obsesión de un artista por crear un espectáculo legendario culmina en un acto final que quiebra las reglas de la realidad.",
    "image": "/images/seleccion-oficial-2026/circo-de-loy-still.jpg",
    "poster": "/images/seleccion-oficial-2026/circo-de-loy-poster.jpg"
  },
  {
    "slug": "como-si-la-tierra-se-las-hubiera-tragado",
    "title": "Como si la tierra se las hubiera tragado",
    "categoryId": "next-wave",
    "directors": "Natalia León",
    "countries": "México",
    "year": "2024",
    "duration": "14’",
    "synopsis": "Olivia, una joven que vive en el extranjero, regresa a su ciudad natal, en México, con la esperanza de reconectarse con su pasado. Pero la violencia de la que fue testigo en su infancia no ha disminuido, y este viaje reaviva recuerdos con los que le resulta imposible reconciliarse.",
    "image": "/images/seleccion-oficial-2026/como-si-la-tierra-se-las-hubiera-tragado-still.jpg",
    "poster": "/images/seleccion-oficial-2026/como-si-la-tierra-se-las-hubiera-tragado-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/19iNPehmOPsNvS-N1h0LN1f3JPXD4XfCL/view?usp=drive_link"
  },
  {
    "slug": "dolores",
    "title": "Dolores",
    "categoryId": "filma-jalisco",
    "directors": "Cecilia Andalon",
    "countries": "México",
    "year": "2025",
    "duration": "10’",
    "synopsis": "Dolores solo quiere jugar, huye de un demonio de fuego y accidentalmente cae en una tumba. Ahí conoce a dos siniestros cráneos de cáscara de maíz que quieren que se quede con ellos y un curioso armadillo que intenta sacarla a toda costa."
  },
  {
    "slug": "el-teatro-secreto",
    "title": "El teatro secreto",
    "categoryId": "filma-jalisco",
    "directors": "Diego Martínez Gutiérrez",
    "countries": "México",
    "year": "2025",
    "duration": "13’",
    "synopsis": "Una mujer ofrece un mechón de pelo a su mágico teatro de marionetas. Ella gira el mango de la manivela, y éste le da un regalo, el artefacto la absorbe en una actuación de títeres e insectos donde su presencia iluminará la vida."
  },
  {
    "slug": "el-viaje-azul",
    "title": "El viaje azul",
    "categoryId": "filma-jalisco",
    "directors": "Aline Romero",
    "countries": "México",
    "year": "2026",
    "duration": "8.40’",
    "synopsis": "Azul y su amigo Tlacu protegen a una frágil semilla en un viaje por la búsqueda de agua en un mundo devastado por la sequía y el cambio climático."
  },
  {
    "slug": "hasta-pronto",
    "title": "Hasta pronto",
    "categoryId": "filma-jalisco",
    "directors": "Jennifer Skarbnik López",
    "countries": "México",
    "year": "2025",
    "duration": "14’",
    "synopsis": "Un cortometraje animado inspirado en hechos reales. La carta de mi abuelo Ruwen le revela a su hermana menor Haneczka la tragedia que sufrió su familia en un acontecimiento histórico que marcó a la humanidad. La esperanza y el anhelo de reunirse y reconstruir sus vidas, es su mayor fuerza de supervivencia."
  },
  {
    "slug": "hijas-del-bosque",
    "title": "Hijas del bosque",
    "categoryId": "marejada-nacional",
    "directors": "Otilia Portillo Padua",
    "countries": "México",
    "year": "2026",
    "duration": "95’",
    "synopsis": "Dos micólogas mexicanas entrelazan la ciencia moderna y la sabiduría indígena ancestral junto a una comunidad de recolectoras de hongos, invitando a reconsiderar la relación de la humanidad con la naturaleza."
  },
  {
    "slug": "i-deserve-a-lover-whose-every-rise-sets-fiery-dooms-raging-across-the-skies",
    "title": "I Deserve a Lover Whose Every Rise Sets Fiery Dooms Raging Across the Skies",
    "categoryId": "marejada-internacional",
    "directors": "Mani Haghighi",
    "countries": "Irán",
    "year": "2026",
    "duration": "76’",
    "synopsis": "El vasto archivo de objetos encontrados y documentos históricos no oficiales del artista iraní Nasser Bakhshi preserva la memoria colectiva en Tabriz. Las pinturas surrealistas de su pareja Roghayeh Najdi abordan el papel de la mujer en la sociedad iraní."
  },
  {
    "slug": "iron-boy",
    "title": "Iron Boy",
    "categoryId": "animacion",
    "directors": "Louis Clichy",
    "countries": "Francia, Bélgica",
    "year": "2026",
    "duration": "90’",
    "synopsis": "Obligado a dejar las tareas de la granja tras ponerse un corsé médico, un niño de 11 años transforma su vida al descubrir el deporte, la música y nuevas amistades."
  },
  {
    "slug": "isme",
    "title": "Isme",
    "categoryId": "next-wave",
    "directors": "Leo Aguirre",
    "countries": "México",
    "year": "2024",
    "duration": "16’",
    "synopsis": "Cuando Isme le roba un collar a una anciana que fallece poco después, su obsesión plantea preguntas sobre el más allá y sobre cómo el karma podría trascender el plano físico.",
    "image": "/images/seleccion-oficial-2026/isme-still.jpg",
    "poster": "/images/seleccion-oficial-2026/isme-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1VgDQAaJygTsoGGsT8RTJfbSCoHR4FTl2/view?usp=drive_link"
  },
  {
    "slug": "jaripeo",
    "title": "Jaripeo",
    "categoryId": "marejada-nacional",
    "directors": "Efraín Mojica, Rebecca Zweig",
    "countries": "México, Estados Unidos",
    "year": "2026",
    "duration": "71’",
    "synopsis": "Un viaje a los jaripeos hipermasculinos de Michoacán desciende al subconsciente de la memoria, el deseo queer y la añoranza. Un ajuste de cuentas con las heridas y la belleza de un hogar dejado atrás."
  },
  {
    "slug": "la-peluca",
    "title": "La peluca",
    "categoryId": "marejada-nacional",
    "directors": "Emiliano Rocha Minter",
    "countries": "México",
    "year": "2026",
    "duration": "65’",
    "synopsis": "Un cineasta en apuros tiene la oportunidad de lanzar su ambicioso drama histórico sobre Benito Juárez a un rico potencial inversionista."
  },
  {
    "slug": "la-pena-no-duerme-de-noche",
    "title": "La pena no duerme de noche",
    "categoryId": "next-wave",
    "directors": "Martín André, Josefina Montino",
    "countries": "Chile",
    "year": "2025",
    "duration": "9’",
    "synopsis": "Un hombre se aísla en una casa en medio del bosque junto a su gato. Los fantasmas de su pasado comienzan a atormentarlo, debiendo enfrentar sus miedos y culpas para no ser consumido por la locura.",
    "image": "/images/seleccion-oficial-2026/la-pena-no-duerme-de-noche-still.jpg",
    "poster": "/images/seleccion-oficial-2026/la-pena-no-duerme-de-noche-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1waPTG7fm-SA25pOXY0ChRKJgpZWEYwsS/view?usp=drive_link"
  },
  {
    "slug": "lo-que-queda-de-mi",
    "title": "Lo que queda de mí",
    "categoryId": "filma-jalisco",
    "directors": "Melany Leyva Ruiz",
    "countries": "México",
    "year": "2026",
    "duration": "5.10’",
    "synopsis": "Una criatura sin memoria y una madre que busca a su hijo se unen en un pueblo en ruinas, emprendiendo una búsqueda que revelará la identidad del ser y una dolorosa verdad sobre el olvido."
  },
  {
    "slug": "los-mentirosos",
    "title": "Los mentirosos",
    "categoryId": "next-wave",
    "directors": "Eduardo Braun Costa",
    "countries": "Argentina",
    "year": "2026",
    "duration": "19’",
    "synopsis": "Matías y su hermano menor Jaime quedan a su suerte en un mundo de adultos. Cuando atrapan a Jaime robando, Matías debe convencer a un desconocido para que se haga pasar por su padre.",
    "image": "/images/seleccion-oficial-2026/los-mentirosos-still.jpg",
    "poster": "/images/seleccion-oficial-2026/los-mentirosos-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1CAuFW2vanFuo6iyMH8iEy_Acs4OT-0cu/view?usp=drive_link"
  },
  {
    "slug": "love-lessons",
    "title": "Love Lessons",
    "categoryId": "marejada-internacional",
    "directors": "Martin Provost",
    "countries": "Francia, Bélgica",
    "year": "2026",
    "duration": "114’",
    "synopsis": "En el centro de esta historia está un profesor a punto de cumplir los 70 años, a quien su esposa abandona la misma noche en que se jubila, obligándolo a poner a prueba en su propia vida las lecciones sobre el amor y la literatura que impartió a sus estudiantes durante décadas.",
    "image": "/images/seleccion-oficial-2026/love-lessons-still.jpg",
    "poster": "/images/seleccion-oficial-2026/love-lessons-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1NBXODI0nYRE3TWuIKwzXQZZV2owWYVBQ/view",
    "trailerLabel": "Clip"
  },
  {
    "slug": "marga-en-el-df",
    "title": "Marga en el DF",
    "categoryId": "next-wave",
    "directors": "Gabriela Ortega",
    "countries": "República Dominicana, México, Estados Unidos",
    "year": "2026",
    "duration": "21’",
    "synopsis": "Tras viajar a la Ciudad de México para sorprender a su esposo, una mujer dominicana embarazada descubre un doloroso secreto matrimonial que la obliga a reconstruir su identidad en solo un fin de semana.",
    "image": "/images/seleccion-oficial-2026/marga-en-el-df-still.jpg",
    "poster": "/images/seleccion-oficial-2026/marga-en-el-df-poster.jpg",
    "trailerUrl": "https://vimeo.com/1164762885"
  },
  {
    "slug": "memorex-rexsexex-y-mas",
    "title": "Memorex + Rexsexex y mas",
    "categoryId": "proyecciones-especiales",
    "directors": "Rodrigo Guardiola",
    "countries": "México",
    "year": "2026",
    "duration": "182’",
    "synopsis": "Crónica del hito histórico de Zoé al reunir a más de 380 000 personas en seis conciertos en el Estadio GNP de la Ciudad de México, un evento sin precedentes que celebra la vigencia de la banda y su profunda conexión con varias generaciones de fans.",
    "image": "/images/seleccion-oficial-2026/memorex-rexsexex-y-mas-still.jpg",
    "poster": "/images/seleccion-oficial-2026/memorex-rexsexex-y-mas-poster.jpg",
    "trailerUrl": "https://youtu.be/BxWh4K6EtVc?si=IpOJy3MKADqV66VA"
  },
  {
    "slug": "memoria-de-un-cuerpo-desplazado",
    "title": "Memoria de un cuerpo desplazado",
    "categoryId": "next-wave",
    "directors": "Mariana Mendivil",
    "countries": "México",
    "year": "2024",
    "duration": "10’",
    "synopsis": "Ritual en forma de ensayo fílmico que explora, a través del collage, el sentido de destierro al migrar en la primera infancia, como una configuración primigenia del desarraigo del territorio, del entorno familiar, del cuerpo, y la recuperación del origen como un centro simbólico.",
    "image": "/images/seleccion-oficial-2026/memoria-de-un-cuerpo-desplazado-still.jpg",
    "poster": "/images/seleccion-oficial-2026/memoria-de-un-cuerpo-desplazado-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1QIu6-IsgHHNwEKPGkjFsBhU6uTF2hHMY/view?usp=drive_link"
  },
  {
    "slug": "miriam",
    "title": "Miriam",
    "categoryId": "next-wave",
    "directors": "Karla Condado",
    "countries": "México",
    "year": "2026",
    "duration": "20’",
    "synopsis": "A través de esta videocarta, la directora platica con su tía, quien fue víctima de feminicidio años atrás, sobre cómo ha sido para ella crecer con miedo en un país peligroso para las mujeres, tratando de desarrollarse como la única mujer de su familia y sobrellevar el duelo del feminicidio.",
    "image": "/images/seleccion-oficial-2026/miriam-still.jpg",
    "poster": "/images/seleccion-oficial-2026/miriam-poster.jpg"
  },
  {
    "slug": "nagi-notes",
    "title": "Nagi Notes",
    "categoryId": "marejada-internacional",
    "directors": "Kōji Fukada",
    "countries": "Japón",
    "year": "2026",
    "duration": "110’",
    "synopsis": "En la Okayama rural, la escultora Yoriko lidia con un duelo sin resolver hasta que su amiga Yuri, arquitecta de Tokio/Taiwán, llega para posar para su arte."
  },
  {
    "slug": "nina-roza",
    "title": "Nina Roza",
    "categoryId": "marejada-internacional",
    "directors": "Geneviève Dulude-De Cells",
    "countries": "Bélgica, Bulgaria, Canadá, Italia",
    "year": "2026",
    "duration": "103’",
    "synopsis": "Un video viral de una artista búlgara de 8 años llama la atención de un importante coleccionista de arte. Mihail es enviado allí, 30 años después de haber dejado su país natal, para evaluar el valor de la obra de la niña y enfrentarse a los fantasmas de su pasado.",
    "image": "/images/seleccion-oficial-2026/nina-roza-still.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1wRa-DX_0K8JT803bnPLpagMKyrO8K6rg/view?usp=drive_link"
  },
  {
    "slug": "nuisance-bear",
    "title": "Nuisance Bear",
    "categoryId": "marejada-internacional",
    "directors": "Jack Weisman, Gabriela Osio Vanden",
    "countries": "Canadá, EEUU, Reino Unido",
    "year": "2026",
    "duration": "89’",
    "synopsis": "Un oso polar se ve obligado a navegar a través de un mundo de turistas, oficiales de vida silvestre y cazadores mientras su antigua migración choca con la vida moderna. Cuando un depredador sagrado es tachado de molestia, deja de estar claro quién pertenece realmente a este paisaje compartido.",
    "image": "/images/seleccion-oficial-2026/nuisance-bear-still.jpg",
    "poster": "/images/seleccion-oficial-2026/nuisance-bear-poster.jpg",
    "trailerUrl": "https://www.youtube.com/watch?v=xy0kJ3CliMA"
  },
  {
    "slug": "odisea-nacional",
    "title": "Odisea Nacional",
    "categoryId": "marejada-nacional",
    "directors": "Mariano Rentería",
    "countries": "México",
    "year": "2026",
    "duration": "100’"
  },
  {
    "slug": "para-los-contrincantes",
    "title": "Para los contrincantes",
    "categoryId": "next-wave",
    "directors": "Federico Luis",
    "countries": "México, Chile, Francia, Reino Unido",
    "year": "2026",
    "duration": "15’",
    "synopsis": "En el duro barrio de Tepito, un joven persigue el gran sueño mexicano: convertirse en campeón de boxeo.",
    "image": "/images/seleccion-oficial-2026/para-los-contrincantes-still.jpg",
    "poster": "/images/seleccion-oficial-2026/para-los-contrincantes-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1D-aCZWL1qlnuubJT0GEKQpRCBrvPmuSf/view?usp=drive_link"
  },
  {
    "slug": "rehearsals-for-a-revolution",
    "title": "Rehearsals for a Revolution",
    "categoryId": "marejada-internacional",
    "directors": "Pegāh Āhangarāni",
    "countries": "Irán",
    "year": "2026",
    "duration": "95’",
    "synopsis": "Pegah Ahangarani traza su vida a través de cinco retratos de familiares y mentores. Utilizando archivos personales, videos caseros, protestas y periódicos, relata más de 40 años de historia iraní desde 1979 hasta 2026."
  },
  {
    "slug": "santitos",
    "title": "Santitos",
    "categoryId": "homenaje",
    "directors": "Alejandro Springall",
    "countries": "México",
    "year": "1999",
    "duration": "110’",
    "synopsis": "Guiada por la revelación de un santo, una madre viuda viaja de Veracruz a Los Ángeles convencida de que su hija recién fallecida sigue viva."
  },
  {
    "slug": "sentimental",
    "title": "Sentimental",
    "categoryId": "proyecciones-especiales",
    "directors": "Cesc Gay",
    "countries": "España",
    "year": "2020",
    "duration": "82’",
    "synopsis": "Julio y Ana hace más de quince años que están juntos. Forman una pareja que ya no se mira ni se toca, y que ha hecho del combate diario la esencia de su relación."
  },
  {
    "slug": "the-only-living-pickpocket-in-new-york",
    "title": "The Only Living Pickpocket in New York",
    "categoryId": "marejada-internacional",
    "directors": "Noah Segan",
    "countries": "Estados Unidos",
    "year": "2026",
    "duration": "88’",
    "synopsis": "Un carterista experimentado debe recorrer Nueva York en una misión para recuperar lo robado después de que un robo sale mal."
  },
  {
    "slug": "we-are-aliens",
    "title": "We are aliens",
    "categoryId": "animacion",
    "directors": "Kohei Kadowaki",
    "countries": "Japón",
    "year": "2026",
    "duration": "117’",
    "synopsis": "\"Oye, ¿qué pasaría si te dijera que soy un extraterrestre?\". En un pequeño pueblo japonés, la silenciosa traición de un niño ordinario pone en marcha algo que se pasará el resto de su vida intentando olvidar.",
    "image": "/images/seleccion-oficial-2026/we-are-aliens-still.jpg",
    "poster": "/images/seleccion-oficial-2026/we-are-aliens-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1nsRBjazSbtsRhgMlp4Oqvi3F34fc3tNU/view?usp=drive_link"
  },
  {
    "slug": "we-are-all-strangers",
    "title": "We Are All Strangers",
    "categoryId": "marejada-internacional",
    "directors": "Anthony Chen",
    "countries": "Singapur",
    "year": "2026",
    "duration": "157’",
    "synopsis": "En el Singapur actual, las diferencias sociales y económicas marcan el destino de varias familias, cuestionando los lazos que las unen y el verdadero significado de ser familia.",
    "image": "/images/seleccion-oficial-2026/we-are-all-strangers-still.jpg",
    "poster": "/images/seleccion-oficial-2026/we-are-all-strangers-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1Z18PqPKYCFRWWg54nQ2p5uZ1_gvWmmMC/view?usp=drive_link",
    "trailerLabel": "Clip"
  },
  {
    "slug": "wishful-thinking",
    "title": "Wishful Thinking",
    "categoryId": "marejada-internacional",
    "directors": "Graham Parkes",
    "countries": "Estados Unidos",
    "year": "2026",
    "duration": "90’",
    "synopsis": "Una pareja descubre que sus emociones afectan físicamente su entorno, haciéndoles plantearse si su relación les beneficia o les perjudica."
  }
];
