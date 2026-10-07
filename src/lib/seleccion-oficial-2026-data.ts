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
  presentedBy?: "Filma Jalisco";
};

export const PREVIEW_FILM_BASE = "/programacion-2026-preview/peliculas";
export const PREVIEW_SELECTION_URL = "/programacion-2026-preview/seleccion-oficial";

export const programasPeliculas2026 = [
  { id: "seleccion", title: "Selección oficial", href: PREVIEW_SELECTION_URL, categoryIds: ["marejada-nacional", "marejada-internacional"] },
  { id: "la-baja-inspira", title: "La Baja Inspira", href: "/programacion-2026-preview/la-baja-inspira", categoryIds: ["la-baja-inspira"] },
  { id: "animacion", title: "Animación", href: "/programacion-2026-preview/animacion", categoryIds: ["animacion"] },
  { id: "next-wave", title: "The Next Wave — Emerging Filmmakers Panel", href: "/programacion-2026-preview/panel-the-next-wave", categoryIds: ["next-wave"] },
];

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
    "id": "proyecciones-especiales",
    "label": "Proyección especial",
    "color": "#ECE8DF"
  },
  {
    "id": "la-baja-inspira",
    "label": "La Baja Inspira",
    "color": "#BDC957"
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
    "slug": "angeles-fc",
    "title": "Ángeles FC",
    "categoryId": "la-baja-inspira",
    "directors": "Roberto Ortiz",
    "countries": "México",
    "year": "2025",
    "duration": "102’",
    "image": "/images/seleccion-oficial-2026/angeles-fc-still.jpg",
    "poster": "/images/seleccion-oficial-2026/angeles-fc-poster.jpg"
  },
  {
    "slug": "angels-egg-4k-restoration",
    "title": "Angel's Egg (4K Restoration)",
    "categoryId": "animacion",
    "directors": "Mamoru Oshii",
    "countries": "Japón",
    "year": "1985",
    "duration": "71’",
    "synopsis": "En una ciudad sumergida, una joven continúa cuidando un enorme huevo que sostiene con celo entre sus brazos. Ella cree que es el huevo de un ángel. Un chico con un enorme fusil desciende de un carro peculiar. Está buscando al ave que vio en sus sueños. En una ciudad abandonada, parece haber surgido una leve simpatía entre los dos. Sin embargo, una noche, el chico destruye el huevo de la joven.",
    "image": "/images/seleccion-oficial-2026/angels-egg-4k-restoration-still.jpg",
    "poster": "/images/seleccion-oficial-2026/angels-egg-4k-restoration-poster.jpg",
    "trailerUrl": "https://www.youtube.com/watch?v=4X9LM3aTiyY"
  },
  {
    "slug": "azul-la-ultima-semilla",
    "title": "Azul: La última semilla",
    "categoryId": "animacion",
    "presentedBy": "Filma Jalisco",
    "directors": "Aline Romero",
    "countries": "México, España",
    "year": "2026",
    "duration": "9’",
    "synopsis": "Han pasado años desde las últimas lluvias. Las semillas mueren y con ellas, la vida. Los pocos supervivientes emigran al norte buscando agua. Pero Azul, joven guardiana, imagina un futuro diferente. Con su mejor amigo, Tlacu, emprende un peligroso viaje para proteger la última semilla, la única esperanza para la vida que les queda.",
    "image": "/images/seleccion-oficial-2026/azul-la-ultima-semilla-still.jpg",
    "poster": "/images/seleccion-oficial-2026/azul-la-ultima-semilla-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1k_8DYP0EO5R1iM-xwucqU4OqUYvMxcpM/view?usp=drive_link"
  },
  {
    "slug": "azul-vivo",
    "title": "Azul Vivo",
    "categoryId": "la-baja-inspira",
    "directors": "Fernando Castanier",
    "countries": "México",
    "year": "2025",
    "duration": "17’",
    "image": "/images/seleccion-oficial-2026/azul-vivo-still.jpg",
    "poster": "/images/seleccion-oficial-2026/azul-vivo-poster.jpg"
  },
  {
    "slug": "baja-viva",
    "title": "BAJA VIVA",
    "categoryId": "la-baja-inspira",
    "directors": "Cristian Cortizo Perez",
    "countries": "México",
    "year": "2026",
    "duration": "42’",
    "image": "/images/seleccion-oficial-2026/baja-viva-still.jpg"
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
    "categoryId": "animacion",
    "presentedBy": "Filma Jalisco",
    "directors": "Cecilia Andalon",
    "countries": "México",
    "year": "2025",
    "duration": "10’",
    "synopsis": "Dolores solo quiere jugar, huye de un demonio de fuego y accidentalmente cae en una tumba. Ahí conoce a dos siniestros cráneos de cáscara de maíz que quieren que se quede con ellos y un curioso armadillo que intenta sacarla a toda costa.",
    "image": "/images/seleccion-oficial-2026/dolores-still.jpg",
    "poster": "/images/seleccion-oficial-2026/dolores-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/15Vmz_e8Ro0yyjgnZy4oq0ii-EJdC1OKz/view?usp=drive_link"
  },
  {
    "slug": "fiesta-en-la-mision",
    "title": "Fiesta en la misión",
    "categoryId": "la-baja-inspira",
    "directors": "Alexandra Hernandez Borja",
    "countries": "México",
    "year": "2025",
    "duration": "38’",
    "poster": "/images/seleccion-oficial-2026/fiesta-en-la-mision-poster.jpg"
  },
  {
    "slug": "guardianes-del-golfo-from-sand-to-sea",
    "title": "Guardianes Del Golfo: From Sand to Sea",
    "categoryId": "la-baja-inspira",
    "directors": "Nicolas Diaz-Magaloni",
    "countries": "México",
    "year": "2026",
    "duration": "18’",
    "poster": "/images/seleccion-oficial-2026/guardianes-del-golfo-from-sand-to-sea-poster.jpg",
    "image": "/images/seleccion-oficial-2026/guardianes-del-golfo-from-sand-to-sea-still.jpg",
    "trailerUrl": "https://vimeo.com/1222525365?share=copy&fl=sv&fe=ci"
  },
  {
    "slug": "hasta-pronto",
    "title": "Hasta pronto",
    "categoryId": "animacion",
    "presentedBy": "Filma Jalisco",
    "directors": "Jennifer Skarbnik López",
    "countries": "México",
    "year": "2025",
    "duration": "14’",
    "synopsis": "Un cortometraje animado inspirado en hechos reales. La carta de mi abuelo Ruwen le revela a su hermana menor Haneczka la tragedia que sufrió su familia en un acontecimiento histórico que marcó a la humanidad. La esperanza y el anhelo de reunirse y reconstruir sus vidas, es su mayor fuerza de supervivencia.",
    "image": "/images/seleccion-oficial-2026/hasta-pronto-still.jpg",
    "poster": "/images/seleccion-oficial-2026/hasta-pronto-poster.jpg",
    "trailerUrl": "https://vimeo.com/1077366960?share=copy"
  },
  {
    "slug": "hijas-del-bosque",
    "title": "Hijas del bosque",
    "categoryId": "marejada-nacional",
    "directors": "Otilia Portillo Padua",
    "countries": "México",
    "year": "2026",
    "duration": "95’",
    "synopsis": "HIJAS DEL BOSQUE entrelaza conocimiento generacional y ciencia occidental, lo visible y lo invisible, lo humano y lo no humano. Con destellos de ciencia ficción este documental sigue a Eliseete y Julieta, dos jóvenes biólogas del Estado de México y Oaxaca que mantienen una relación profunda con los hongos. Entre la deforestación y la falta de oportunidades, sus vidas, guiadas por el micelio, reflejan nuevas posibilidades de coexistencia en tiempos de crisis.",
    "image": "/images/seleccion-oficial-2026/hijas-del-bosque-still.jpg",
    "poster": "/images/seleccion-oficial-2026/hijas-del-bosque-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1eIZGAugqs3uEySA_IgIVjYb5eUhcTjHC/view?usp=drive_link"
  },
  {
    "slug": "i-deserve-a-lover-whose-every-rise-sets-fiery-dooms-raging-across-the-skies",
    "title": "I Deserve a Lover Whose Every Rise Sets Fiery Dooms Raging Across the Skies",
    "categoryId": "marejada-internacional",
    "directors": "Mani Haghighi",
    "countries": "Irán",
    "year": "2026",
    "duration": "76’",
    "synopsis": "El vasto archivo de objetos encontrados y documentos históricos no oficiales del artista iraní Nasser Bakhshi preserva la memoria colectiva en Tabriz. Las pinturas surrealistas de su pareja Roghayeh Najdi abordan el papel de la mujer en la sociedad iraní.",
    "image": "/images/seleccion-oficial-2026/i-deserve-a-lover-whose-every-rise-sets-fiery-dooms-raging-across-the-skies-still.jpg",
    "poster": "/images/seleccion-oficial-2026/i-deserve-a-lover-whose-every-rise-sets-fiery-dooms-raging-across-the-skies-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1WK1OZxD-yUKGqXQauzk_BZeex263KPbr/view?usp=drive_link"
  },
  {
    "slug": "in-praise-of-shadows",
    "title": "In Praise of Shadows",
    "categoryId": "la-baja-inspira",
    "directors": "Minori Murakami, Zoren Gold",
    "countries": "México",
    "year": "2026",
    "duration": "10’",
    "image": "/images/seleccion-oficial-2026/in-praise-of-shadows-still.jpg",
    "poster": "/images/seleccion-oficial-2026/in-praise-of-shadows-poster.jpg"
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
    "synopsis": "Silvestre, un cansado y derrotado director de cine, va de camino a encontrarse con “Ricky”, un posible inversionista interesado en su más reciente guión cinematográfico. Nadie conoce o ha visto al enigmático “Ricky”, pero si hay algo que se sabe de él es que tiene dinero de sobra y una especial afinidad por las artes. De camino, un ranchero de nombre “Silverio” decide darle aventón a su destino, y de paso aprovecha para contarle a Silvestre acerca de su increíble idea para una película de comedia. Silvestre, cansado, le dice que no tiene interés en su historia. Al llegar a la casa de Ricky, un gran festejo que comienza a doblar las líneas entre realidad y ficción hace que Silvestre se confronte con sus decisiones pasadas y cuestione si en verdad tiene lo necesario para ser compararse con los grandes directores de antaño.",
    "poster": "/images/seleccion-oficial-2026/la-peluca-poster.jpg"
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
    "slug": "la-ventana-a-la-esperanza",
    "title": "La ventana a la esperanza",
    "categoryId": "la-baja-inspira",
    "directors": "Guillermo Acevedo",
    "countries": "México",
    "year": "2025",
    "duration": "12’",
    "image": "/images/seleccion-oficial-2026/la-ventana-a-la-esperanza-still.jpg",
    "poster": "/images/seleccion-oficial-2026/la-ventana-a-la-esperanza-poster.jpg"
  },
  {
    "slug": "la-ventana-a-story-of-baja-california-sur-told-from-the-channel-of-isla-cerralvo",
    "title": "La Ventana: A Story of Baja California Sur told from the channel of Isla Cerralvo",
    "categoryId": "la-baja-inspira",
    "directors": "Alonso I. Rodríguez de la Parra",
    "countries": "México",
    "year": "2026",
    "duration": "34’",
    "poster": "/images/seleccion-oficial-2026/la-ventana-a-story-of-baja-california-sur-told-from-the-channel-of-isla-cerralvo-poster.jpg"
  },
  {
    "slug": "lo-que-queda-de-mi",
    "title": "Lo que queda de mí",
    "categoryId": "animacion",
    "presentedBy": "Filma Jalisco",
    "directors": "Melany Leyva Ruiz",
    "countries": "México",
    "year": "2026",
    "duration": "5.10’",
    "synopsis": "Una criatura sin memoria y una madre que busca a su hijo se unen en un pueblo en ruinas, emprendiendo una búsqueda que revelará la identidad del ser y una dolorosa verdad sobre el olvido.",
    "image": "/images/seleccion-oficial-2026/lo-que-queda-de-mi-still.jpg",
    "poster": "/images/seleccion-oficial-2026/lo-que-queda-de-mi-poster.jpg"
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
    "categoryId": "marejada-nacional",
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
    "slug": "my-blue-whale-family",
    "title": "My Blue Whale Family",
    "categoryId": "la-baja-inspira",
    "directors": "Hugh Pearson",
    "countries": "México",
    "year": "2025",
    "duration": "55’",
    "image": "/images/seleccion-oficial-2026/my-blue-whale-family-still.jpg",
    "poster": "/images/seleccion-oficial-2026/my-blue-whale-family-poster.jpg"
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
    "duration": "100’",
    "synopsis": "Un viaje compuesto por micro historias íntimas que exploran la relación profunda entre la arquitectura y la vida cotidiana, revelando experiencias humanas universales como la identidad, la desigualdad, la fe, la naturaleza, el arte y la necesidad de pertenecer. Una experiencia cinematográfica inmersiva sobre cómo los espacios nos moldean como seres humanos y el profundo impacto que tienen en nuestras vidas.",
    "image": "/images/seleccion-oficial-2026/odisea-nacional-still.jpg",
    "poster": "/images/seleccion-oficial-2026/odisea-nacional-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1SkZV3yQ1rt8YYbhQVQ0NB4m--Jw1eqTe/view?usp=drive_link"
  },
  {
    "slug": "oro-rojo",
    "title": "Oro Rojo",
    "categoryId": "la-baja-inspira",
    "directors": "Jesús Salazar",
    "countries": "México",
    "year": "2026",
    "duration": "37’",
    "image": "/images/seleccion-oficial-2026/oro-rojo-still.jpg",
    "poster": "/images/seleccion-oficial-2026/oro-rojo-poster.jpg"
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
    "slug": "rata-canguro-de-san-quintin-100-anos-de-resiliencia",
    "title": "Rata Canguro de San Quintín: 100 años de resiliencia",
    "categoryId": "la-baja-inspira",
    "directors": "Terra Peninsular",
    "countries": "México",
    "year": "2025",
    "duration": "10’",
    "image": "/images/seleccion-oficial-2026/rata-canguro-de-san-quintin-100-anos-de-resiliencia-still.jpg",
    "poster": "/images/seleccion-oficial-2026/rata-canguro-de-san-quintin-100-anos-de-resiliencia-poster.jpg"
  },
  {
    "slug": "recuerdos-profundos",
    "title": "Recuerdos Profundos",
    "categoryId": "la-baja-inspira",
    "directors": "Rafael Quiroga",
    "countries": "México",
    "year": "2024",
    "duration": "10’",
    "image": "/images/seleccion-oficial-2026/recuerdos-profundos-still.jpg",
    "poster": "/images/seleccion-oficial-2026/recuerdos-profundos-poster.jpg"
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
    "categoryId": "marejada-nacional",
    "directors": "Alejandro Springall",
    "countries": "México",
    "year": "1999",
    "duration": "110’",
    "synopsis": "Guiada por la revelación de un santo, una madre viuda viaja de Veracruz a Los Ángeles convencida de que su hija recién fallecida sigue viva."
  },
  {
    "slug": "sentimental",
    "title": "Sentimental",
    "categoryId": "marejada-internacional",
    "directors": "Cesc Gay",
    "countries": "España",
    "year": "2020",
    "duration": "82’",
    "synopsis": "Julio (Javier Cámara) y Ana (Griselda Siciliani) hace más de quince años que están juntos. Forman una pareja que ya no se mira ni se toca, y que ha hecho del combate diario la esencia de su relación. Esta noche Ana ha invitado a casa a sus vecinos del piso de arriba, Salva (Alberto San Juan) y Laura (Belén Cuesta), una pareja más joven que ellos, amable y simpática, pero cuyos “ruidos” se han convertido en una molestia para Julio y Ana... ¿o quizás en un estímulo? Los vecinos les harán una inusual y sorprendente propuesta que convertirá la velada en una experiencia catártica para el matrimonio... Adaptación cinematográfica de 'Los vecinos de arriba', la obra teatral debut de Cesc Gay.",
    "image": "/images/seleccion-oficial-2026/sentimental-still.jpg",
    "poster": "/images/seleccion-oficial-2026/sentimental-poster.jpg",
    "trailerUrl": "https://www.youtube.com/watch?v=a_cya2Q5n6w"
  },
  {
    "slug": "surgencia",
    "title": "Surgencia",
    "categoryId": "la-baja-inspira",
    "directors": "Alejandro Montalvo",
    "countries": "México",
    "year": "2024",
    "duration": "86’",
    "image": "/images/seleccion-oficial-2026/surgencia-still.jpg",
    "poster": "/images/seleccion-oficial-2026/surgencia-poster.jpg",
    "synopsis": "El reconocido vitivinicultor Hugo D’Acosta y el célebre chef Benito Molina emprenden un viaje a lo largo de la península de Baja California, una de las regiones más singulares de México. Desde los viñedos del Valle de Guadalupe hasta los oasis de San Ignacio, recorren un territorio donde la naturaleza imponente y la huella del ser humano conviven en un frágil equilibrio. A través de paisajes agrestes, costas indómitas y comunidades que han moldeado su identidad en torno al mar y la tierra, Surgencia revela las cicatrices de un territorio transformado por el tiempo y la intervención humana. Esta travesía es, a la vez, una exploración personal y una carta de amor a Baja California, escrita por dos figuras que han dejado una marca profunda e irreversible en su cultura gastronómica y enológica."
  },
  {
    "slug": "taje",
    "title": "Tajé",
    "categoryId": "la-baja-inspira",
    "directors": "Ángel Linares",
    "countries": "México",
    "year": "2026",
    "duration": "24’",
    "image": "/images/seleccion-oficial-2026/taje-still.jpg",
    "poster": "/images/seleccion-oficial-2026/taje-poster.jpg"
  },
  {
    "slug": "the-match",
    "title": "The Match",
    "categoryId": "marejada-internacional",
    "directors": "Juan Cabral, Santiago Franco",
    "countries": "Argentina",
    "year": "2026",
    "duration": "91’",
    "synopsis": "El partido rememora el mítico encuentro que tuvo lugar entre Inglaterra y Argentina en el Estadio Azteca de la Ciudad de México durante el Mundial de 1986, utilizando imágenes de archivo excepcionales, que incluyen el gol de la “Mano de Dios” de Maradona, para tejer una potente reconstrucción del evento. Esta película va más allá del terreno de juego y recorre más de dos siglos de conflicto entre ambas naciones, desde los primeros enfrentamientos hasta la Guerra de las Malvinas. Replantea el partido como un hito deportivo que es eco de una rivalidad histórica más profunda, un encuentro entre la belleza del fútbol y la sinrazón de la guerra."
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
    "slug": "teatro-secreto",
    "title": "Teatro secreto",
    "categoryId": "animacion",
    "presentedBy": "Filma Jalisco",
    "directors": "Diego Martínez Gutiérrez",
    "countries": "México",
    "year": "2025",
    "duration": "13’",
    "synopsis": "Una mujer ofrece un mechón de pelo a su mágico teatro de marionetas. Ella gira el mango de la manivela, y éste le da un regalo, el artefacto la absorbe en una actuación de títeres e insectos donde su presencia iluminará la vida.",
    "image": "/images/seleccion-oficial-2026/teatro-secreto-still.jpg",
    "poster": "/images/seleccion-oficial-2026/teatro-secreto-poster.jpg",
    "trailerUrl": "https://drive.google.com/file/d/1S6bx2grmBpfANtDDRAKv3d2rHXKskCIw/view?usp=drive_link"
  },
  {
    "slug": "tierra",
    "title": "Tierra",
    "categoryId": "la-baja-inspira",
    "directors": "José Fernando Altieri",
    "countries": "México",
    "year": "2025",
    "duration": "13’",
    "image": "/images/seleccion-oficial-2026/tierra-still.jpg",
    "poster": "/images/seleccion-oficial-2026/tierra-poster.jpg"
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

// El preview de Selección Oficial muestra únicamente las dos secciones de Marejada.
export const categoriasSeleccion2026 = categorias2026.filter((category) =>
  category.id === "marejada-nacional" || category.id === "marejada-internacional",
);

export const peliculasSeleccion2026 = peliculas2026.filter((film) =>
  categoriasSeleccion2026.some((category) => category.id === film.categoryId),
);

export function getProgramaPelicula2026(film: Pelicula2026) {
  return programasPeliculas2026.find((programa) => programa.categoryIds.includes(film.categoryId));
}
