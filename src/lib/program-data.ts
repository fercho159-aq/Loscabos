
export type Talent = {
  name: string;
  bio: string;
  image: string;
  imageHint: string;
  website?: string;
  instagram?: string;
};

export type Event = {
  title: string;
  subtitle: string;
  text: string;
  sinopsis?: string;
  techInfo?: {
    Dirección?: string;
    'Dirección y concepto'?: string;
    Música?: string;
    Fotografía?: string;
    Producción?: string;
    Guión?: string;
    País: string;
    Año: string;
    Duración: string;
    Género: string;
    'Sitio web'?: string;
    Instagram?: string;
  };
  access: string;
  image: string;
  imageHint: string;
  participantsButton?: boolean;
  time: string;
  place: string;
  talent?: Talent[];
};

export type DayProgram = {
  day: string;
  title: string;
  events: Event[];
};

export const programData: DayProgram[] = [
  {
    day: "1",
    title: "10 de diciembre",
    events: [
    ]
  },
  {
    day: "2",
    title: "11 de diciembre",
    events: [
      {
        title: "Masterclass con Eugenio Caballero",
        subtitle: "Homenaje a Eugenio Caballero",
        text: "Como parte del homenaje del FICLosCabos 2025 a Eugenio Caballero, diseñador de producción y ganador del Premio de la Academia, esta masterclass ofrece una mirada profunda a su proceso creativo. A través de su colaboración con cineastas como Guillermo del Toro, Alfonso Cuarón y J.A. Bayona, Caballero compartirá cómo el diseño visual se convierte en una fuerza narrativa capaz de transformar la experiencia cinematográfica.",
        access: "Acceso con registro previo",
        image: "/Images/Eugenio Caballero/EugenioCaballero.png",
        imageHint: "film set design",
        time: "12:00",
        place: "Hotel El Ganzo",
        talent: [
            {
                name: "Eugenio Caballero",
                bio: "Diseñador de producción mexicano ganador del Óscar por El laberinto del fauno. Ha trabajado en más de 30 películas con cineastas como Guillermo del Toro, Alfonso Cuarón, J.A. Bayona y Alejandro G. Iñárritu. Responsable del diseño en ROMA, Lo imposible, Un monstruo viene a verme y Bardo. Miembro de la Academia desde 2007, es una de las figuras más influyentes del cine contemporáneo.",
                image: "/Images/Biografias/FICC_DECK2025.pdf-image-115.jpg",
                imageHint: "man portrait professional"
            }
        ]
      },
      {
        title: "Cóctel de gala en Casa Ballena",
        subtitle: "en Homenaje a Eugenio Caballero",
        text: "El homenaje a Eugenio Caballero culminará con un cóctel privado en Casa Ballena, espacio dedicado a la producción y difusión del arte contemporáneo en San José del Cabo. En este entorno íntimo y simbólico, la comunidad cinematográfica, aliados y creadores se reunirán para celebrar la trayectoria del diseñador de producción acompañada por la música de El Ganzo Collective, ensamble residente del Hotel El Ganzo.",
        access: "Acceso solo por invitación",
        image: "/Images/Casa Ballena/Casa ballena (50 cm alto).JPG",
        imageHint: "elegant cocktail party",
        time: "22:00",
        place: "Casa Ballena",
        talent: [
            {
                name: "Casa Ballena",
                bio: "Casa Ballena es un espacio artístico ubicado en San José del Cabo que fusiona creación contemporánea con el entorno natural donde se encuentran el Pacífico y el Mar de Cortés. Fundada por el artista El Nacho en 2011, es un lugar dedicado a la producción y exhibición de arte, impulsando un legado que conecta comunidad y territorio.",
                image: "/Images/Casa Ballena/IMG_7868.jpg",
                imageHint: "art space gallery",
                website: "https://casaballena.com/",
                instagram: "@casa_ballenamx"
            }
        ]
      }
    ]
  },
  {
    day: "3",
    title: "12 de diciembre",
    events: [
      {
        title: "Nuevas caras en el cine",
        subtitle: "Panel de cineastas emergentes",
        text: "En esta edición, el Festival amplía su mirada hacia las nuevas voces del cine, reuniendo a una selección de jóvenes directores, productores y artistas con reconocimiento nacional e internacional, que están redefiniendo los lenguajes cinematográficos con una fuerza creativa única. Una conversación que celebra la diversidad de miradas y conecta al público con la generación que está moldeando el futuro del cine nacional.",
        access: "Acceso con registro previo",
        image: "/Images/nuevasvoces/jakob-owens-vIwkdibacK0-unsplash.jpg",
        imageHint: "young filmmakers panel",
        participantsButton: true,
        time: "17:00",
        place: "Hotel El Ganzo"
      },
      {
        title: "Cena de Gala",
        subtitle: "Premiación del Fondo Fílmico Gabriel Figueroa y La Baja",
        text: "La Cena de Gala del FICLosCabos 2025 rinde homenaje al talento que impulsa el futuro del cine mexicano. La velada se llevará a cabo en Suelo Sur, restaurante insignia de Los Cabos encabezado por el chef Guillermo Gómez, reconocido por la Guía Michelin por su enfoque en la sostenibilidad, el respeto al territorio y la reinterpretación contemporánea de los ingredientes de Baja California Sur. Cada plato es una historia contada con el lenguaje de la naturaleza. Durante la cena se reconocerá a los ganadores del Fondo Fílmico Gabriel Figueroa, programa que impulsa proyectos mexicanos en etapa de postproducción mediante mentorías y acompañamiento profesional, así como a los finalistas de La Baja Inspira, sección competitiva dedicada a las narrativas con raíces en la península que fortalecen el vínculo entre cine, comunidad y territorio.",
        access: "Acceso solo por invitación",
        image: "/Images/nuevasvoces/Suelo Sur Foto .jpg",
        imageHint: "gourmet dinner",
        time: "21:00",
        place: "Suelo Sur",
        talent: [
          {
            name: "Guillermo J. Gómez",
            bio: "Guillermo J. Gómez es un chef de origen argentino radicado en Los Cabos. Su cocina celebra la pesca artesanal, los cultivos locales y la conexión con quienes trabajan la tierra. Formado en Europa y enriquecido por sabores del mundo, crea platillos que honran sus raíces y el territorio sudcaliforniano. Su propuesta en Suelo Sur será el marco perfecto para la Cena de Premiación del FICLosCabos 2025.",
            image: "/Images/nuevasvoces/Chef Guillermo @ SAGE Master cooking Class.jpg",
            imageHint: "chef portrait",
            website: "https://www.suelosur.com/",
            instagram: "@suelosurbaja"
          }
        ]
      }
    ]
  },
  {
    day: "4",
    title: "13 de diciembre",
    events: [
    ]
  }
];
