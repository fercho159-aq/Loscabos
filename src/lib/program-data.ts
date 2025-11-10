
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
        title: "Masterclass: Eugenio Caballero",
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
        title: "Cóctel: clausura en Casa Ballena",
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
        title: "Conferencia: La Conexión Creativa Por Luisa Reyes Retana",
        subtitle: "Programa de arte del Hotel El Ganzo",
        text: "En alianza con el programa de arte del Hotel El Ganzo —pionero cultural de Puerto Los Cabos—, el Festival presenta un ciclo de actividades que exploran la creatividad como un acto vital, un puente entre arte, territorio y conciencia. Bajo el concepto #BeyondTheScreen, el cine dialoga con la palabra, el pensamiento y la experiencia artística en dos encuentros que reflejan la energía viva del entorno y la profundidad de los procesos creativos. A través de su programa de arte, El Ganzo fomenta espacios de encuentro y reflexión sobre los procesos creativos que vinculan la práctica artística con la vida cotidiana. En esta conferencia, la escritora mexicana Luisa Reyes Retana invita a los participantes a explorar su propia relación con el impulso creador, comprendiendo la creatividad no solo como herramienta artística, sino como una forma de pensamiento expansivo y transformador. Con su estilo íntimo y lúcido, Luisa compartirá una reflexión sobre la curiosidad, la observación y el propósito de crear, invitando a los asistentes a reconocer y activar su potencial creativo desde la vida misma.",
        access: "Acceso con registro previo",
        image: "/Images/Programacion/Conferencia/3.png",
        imageHint: "creative workshop art",
        time: "16:00",
        place: "La Galería, Hotel El Ganzo",
        talent: [
          {
            name: "Luisa Reyes Retana",
            bio: 'Luisa Reyes Retana es escritora, editora y mentora creativa. Su primera novela, "Arde Josefina", recibió el Premio Mauricio Achar 2017 (Literatura Random House y Librerías Gandhi). Es autora de "Tu lengua en mi boca" (2022) y próximamente de "Mal de Río" (2025). Ha colaborado en medios como El País, Gatopardo, Revista de la Universidad de México, Arte al Día y Kulturaustausch (Alemania). Luisa artista en residencia (AIR) durante el mes de diciembre en El Ganzo.',
            image: "/Images/Programacion/Conferencia/Luisa_Reyes_Retana.png",
            imageHint: "woman writer portrait"
          },
          {
            name: "En alianza con el programa de arte del Hotel El Ganzo",
            bio: 'En alianza con el programa de arte del Hotel El Ganzo —pionero cultural de Puerto Los Cabos—, el Festival presenta un ciclo de actividades que exploran la creatividad como un acto vital, un puente entre arte, territorio y conciencia. Bajo el concepto #BeyondTheScreen, el cine dialoga con la palabra, el pensamiento y la experiencia artística en dos encuentros que reflejan la energía viva del entorno y la profundidad de los procesos creativos. ',
            image: "/Images/Programacion/Conferencia/DJI_0218 (5).jpg",
            imageHint: "hotel art program"
          }
        ]
      },
      {
        title: "Panel: Nuevas caras en el cine",
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
        title: "Documental: Ed Maverick, La nube en el jardín en vivo desde la Sala Nezahualcóyotl",
        subtitle: "Proyección especial",
        text: "El Festival Internacional de Cine de Los Cabos 2025 presentará una de sus experiencias más memorables: La Nube en el Jardín, documental protagonizado por Ed Maverick y filmado en vivo desde la Sala Nezahualcóyotl de la Ciudad de México. La película ofrece una inmersión profunda en el universo emocional de uno de los artistas más auténticos de su generación, capturando la noche en que Eduardo Hernández Saucedo (Ed Maverick) convirtió la emblemática sala en un santuario de vulnerabilidad y conexión colectiva.\nDesde un revelador ataque de pánico previo a subir al escenario hasta la catarsis compartida con un público rendido, el documental sigue al cantautor chihuahuense en un recorrido de honestidad brutal y comunión artística. Acompañado solo de su guitarra, su voz desnuda y un cuarteto de cuerdas, Ed interpreta su último álbum de principio a fin.",
        access: "Acceso con registro previo",
        image: "/Images/Programacion/la nube/Ed maverick foto 2.png",
        imageHint: "documentary concert",
        time: "20:00",
        place: "Crania",
        talent: [
          {
            name: "Ed Maverick",
            bio: "Ed Maverick (Eduardo Hernández Saucedo) irrumpió en la escena musical en 2018 y redefinió el folk alternativo en español con su voz cruda y letras íntimas. A los 17 años pasó de fenómeno viral a referente generacional, ganando un Grammy Latino por su colaboración con C. Tangana y presentándose en festivales como Coachella y Lollapalooza. Tras un silencio de tres años, regresó con La Nube En El Jardín, un álbum-concepto de 53 minutos que consagra su madurez artística y su búsqueda de autenticidad.",
            image: "/Images/Programacion/la nube/Ed Maverick Foto.png",
            imageHint: "musician portrait"
          }
        ]
      },
      {
        title: "Premiación del Fondo Fílmico Gabriel Figueroa y La Baja Inspira.",
        subtitle: "Cena de Gala en Suelo Sur",
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
      },
    ]
  },
  {
    day: "4",
    title: "13 de diciembre",
    events: [
      {
        title: "Sesión de poesía performática: “Somos como los ríos”",
        subtitle: "Programa de arte del Hotel El Ganzo",
        text: "El programa de arte de El Ganzo promueve el diálogo entre la creación contemporánea y los ecosistemas naturales del entorno. En esta lectura performática, Luisa Reyes Retana —escritora mexicana radicada en Berlín— y Mercedes Reynoso —poetisa bajacaliforniana— entrelazan palabra, cuerpo y voz para explorar la relación entre lenguaje, identidad y naturaleza, inspiradas en el flujo y la memoria de los cuerpos de agua de Baja California Sur.",
        access: "Acceso con registro previo",
        image: "/Images/Programacion/poesia/2-2.png",
        imageHint: "poetry performance nature",
        time: "17:00",
        place: "Rooftop, Hotel El Ganzo",
        talent: [
          {
            name: "Luisa Reyes Retana",
            bio: 'Luisa Reyes Retana es escritora, editora y mentora creativa. Su primera novela, "Arde Josefina", recibió el Premio Mauricio Achar 2017 (Literatura Random House y Librerías Gandhi). Es autora de "Tu lengua en mi boca" (2022) y próximamente de "Mal de Río" (2025). Ha colaborado en medios como El País, Gatopardo, Revista de la Universidad de México, Arte al Día y Kulturaustausch (Alemania). Luisa artista en residencia (AIR) durante el mes de diciembre en El Ganzo.',
            image: "/Images/Programacion/poesia/Luisa_Reyes_Retana.png",
            imageHint: "woman writer portrait"
          },
          {
            name: "Mercedes Reynoso",
            bio: "Mercedes Reynosa es poeta, feminista y gestora cultural sudcaliforniana. Autora de Malabras (2021) e Inversa Rama (2023). Ha publicado en diversas revistas literarias y obtenido premios como el de Poesía UABCS 2008. Productora del Mariposas FEST festival feminista transdisciplinario y co-creadora del proyecto escénico-literario Eco Etéreo.",
            image: "/Images/Programacion/poesia/Mercedes Reynoso.jpeg",
            imageHint: "woman poet portrait"
          }
        ]
      },
      {
        title: "Performance: Personas Haciendo Cosas",
        subtitle: "Presentado por Tania Reza",
        text: "La artista mexicana Tania Reza presenta Personas Haciendo Cosas, una instalación audiovisual que explora el movimiento contemporáneo a través de la repetición sostenida de gestos cotidianos. Utilizando live coding y un circuito cerrado de video, diez pantallas proyectan en tiempo real a distintas personas repitiendo un movimiento de su oficio, transformando lo ordinario en una experiencia escénica. En el marco del FICLosCabos2025 la artista presentará una edición especial de la obra inspirada en el territorio de la Baja.",
        access: "Acceso con registro previo",
        image: "/Images/Programacion/evento 5.jpg",
        imageHint: "audiovisual installation",
        time: "19:00",
        place: "Crania",
        talent: [
          {
            name: "Tania Reza",
            bio: "Tania Reza es licenciada en Danza Contemporánea con especialidad en Arte y Mediación Tecnológica. Ganadora del Premio Nacional de Arte Joven en 2019. Su práctica actual se nutre de la hibridación entre el video, la performance, la tecnología y las imágenes generadas por código, explorando un territorio intermedio entre el arte corporal, el audiovisual y la new media.",
            image: "/Images/Programacion/evento 5.jpg",
            imageHint: "artist portrait"
          }
        ]
      }
    ]
  },
   {
    day: "5",
    title: "14 de diciembre",
    events: [
      {
        title: "Documental: El Pulmo",
        subtitle: "Proyección especial con Mark Kronemeyer y Begoña Félix",
        text: "El Pulmo se presenta como una de las proyecciones especiales del festival, reafirmando el compromiso con las historias que emergen del territorio y la conciencia ambiental. Dirigido por Mark Kronemeyer y Begoña Félix, el documental retrata la vida de Mario Castro, un pescador retirado cuya lucha por la conservación marina ha convertido a Cabo Pulmo en un ejemplo mundial de resiliencia y esperanza ecológica.\n\nA través de una fotografía sublime y una narrativa profundamente humana, la película revela las tensiones entre desarrollo, sostenibilidad y comunidad, mostrando cómo la preservación del entorno natural puede convertirse en una forma de resistencia cultural.\n\nEsta función forma parte del eje #BeyondTheScreen, que busca conectar el cine con la biodiversidad, la identidad local y el arte como herramienta de transformación.",
        sinopsis: "Mario Castro es un pescador comercial retirado, cuyos incansables esfuerzos han posicionado a Cabo Pulmo, México, como un referente mundial en conservación marina. Sin embargo, su entorno enfrenta nuevas amenazas: el crecimiento turístico, la falta de regulación y las consecuencias del desarrollo desmedido.",
        access: "Acceso con registro previo",
        image: "/Images/Programacion/elpulmo/ELPULMOPOSTER (1)Fest.jpg",
        imageHint: "marine life documentary",
        time: "18:00",
        place: "Veleros Beach Club",
        talent: [
          {
            name: "Mark Kronemeyer",
            bio: "Mark Kronemeyer es fotógrafo acuático, experto en documentar olas y surf. Su trabajo ha sido publicado en ediciones por The Surfer’s Journal, Outside Magazine, Rizzoli y Lonely planet. Su obra se caracteriza por fragmentar la majestuosidad de la naturaleza en archivos trascendentales.",
            image: "/Images/Programacion/elpulmo/MK.jpg",
            imageHint: "photographer portrait water"
          },
          {
            name: "Begoña Félix",
            bio: "Bego Félix es arquitecta de profesión, apasionada de la literatura, pintura y fotografía. Su obra plástica está inspirada por la yuxtaposición de formas en la naturaleza. Como artista busca documentar y enaltecer la representación de la cotidianidad y los dilemas sociales.",
            image: "/Images/Programacion/elpulmo/BG.jpg",
            imageHint: "artist portrait nature"
          }
        ]
      },
      {
        title: "Documental: Depeche Mode M",
        subtitle: "Proyección especial con Fernando Frías",
        text: "El Festival Internacional de Cine de Los Cabos presenta DEPECHE MODE: M, un viaje cinematográfico al corazón de la relación de la cultura mexicana con la muerte, enmarcado por las icónicas presentaciones de Depeche Mode durante su gira Memento Mori 2023. Concebida y dirigida por el galardonado cineasta mexicano Fernando Frías, la película captura los tres conciertos con entradas agotadas en la Ciudad de México —a los que asistieron más de 200,000 fans—, combinando material en vivo con secuencias interpretativas y archivos históricos.",
        access: "Acceso con registro previo",
        image: "/Images/Programacion/Depeche Mode M/DSC_3850_Credit Toni François_rt.jpg",
        imageHint: "concert crowd silhouette",
        time: "20:00",
        place: "Crania",
        talent: [
            {
                name: "Fernando Frías",
                bio: "Es un director, guionista y documentalista mexicano galardonado. Escribió, dirigió y produjo Ya no estoy aquí, ganadora de 10 Premios Ariel, del Festival de Morelia y del Festival de El Cairo, además de ser nominada al Goya y preseleccionada al Óscar. Su más reciente filme, No voy a pedirle a nadie que me crea, se estrenó globalmente en Netflix en 2023. También ha dirigido para HBO, STARZ y FOX.",
                image: "/Images/Programacion/Depeche Mode M/FernandoPhoto1.jpg",
                imageHint: "director portrait monochrome"
            }
        ]
      }
    ]
  }
];

const allEvents = programData.flatMap(day => day.events);

export const orderedEvents = [
    allEvents.find(e => e.title === "Documental: Depeche Mode M"),
    allEvents.find(e => e.title === "Masterclass: Eugenio Caballero"),
    allEvents.find(e => e.title === "Documental: Ed Maverick, La nube en el jardín en vivo desde la Sala Nezahualcóyotl"),
    allEvents.find(e => e.title === "Panel: Nuevas caras en el cine"),
    allEvents.find(e => e.title === "Performance: Personas Haciendo Cosas"),
    allEvents.find(e => e.title === "Documental: El Pulmo"),
    allEvents.find(e => e.title === "Conferencia: La Conexión Creativa Por Luisa Reyes Retana"),
    allEvents.find(e => e.title === "Sesión de poesía performática: “Somos como los ríos”"),
    allEvents.find(e => e.title === "Premiación del Fondo Fílmico Gabriel Figueroa y La Baja Inspira."),
    allEvents.find(e => e.title === "Cóctel: clausura en Casa Ballena"),
].filter((e): e is Event => e !== undefined);
