
export type AgendaEvent = {
  "HORA DE INICIO": string;
  "HORA DE FIN": string;
  "EVENTO": string;
  "SEDE": string;
  "CATEGORÍA": string;
  "COLOR": string;
  "Dia": string;
};

export type Event = AgendaEvent;

export const agendaData: AgendaEvent[] = [
  {
    "HORA DE INICIO": "20:30",
    "HORA DE FIN": "0:00",
    "EVENTO": "Cena de Gala Suelo Sur\nPremiación Fondo Fílmico Gabriel Figueroa y La Baja Inspira \n*Evento solo invitación/RSVP",
    "SEDE": "Suelo Sur",
    "CATEGORÍA": "Evento solo por invitación",
    "COLOR": "#3a3a08",
    "Dia": "miércoles 10 dic"
  },
  {
    "HORA DE INICIO": "9:00",
    "HORA DE FIN": "12:00",
    "EVENTO": "Pitches \nFondo Fílmico Gabriel Figueroa",
    "SEDE": "Hotel el Ganzo Galería",
    "CATEGORÍA": "Industria",
    "COLOR": "#051723",
    "Dia": "jueves 11 dic"
  },
  {
    "HORA DE INICIO": "11:00",
    "HORA DE FIN": "12:00",
    "EVENTO": "Panel de cineastas emergentes:\nNuevas caras en el cine",
    "SEDE": "Hotel El Ganzo Rooftop",
    "CATEGORÍA": "Industria",
    "COLOR": "#051723",
    "Dia": "jueves 11 dic"
  },
  {
    "HORA DE INICIO": "12:00",
    "HORA DE FIN": "12:30",
    "EVENTO": "Networking de industria",
    "SEDE": "Hotel El Ganzo Rooftop",
    "CATEGORÍA": "Industria",
    "COLOR": "#051723",
    "Dia": "jueves 11 dic"
  },
  {
    "HORA DE INICIO": "12:30",
    "HORA DE FIN": "13:30",
    "EVENTO": "Panel La Baja Inspira 2025\nModerado por Cristina Velasco y Nicolasa Ruíz\nPresentado por ESCINE",
    "SEDE": "Hotel El Ganzo Rooftop",
    "CATEGORÍA": "Industria",
    "COLOR": "#051723",
    "Dia": "jueves 11 dic"
  },
  {
    "HORA DE INICIO": "13:30",
    "HORA DE FIN": "16:00",
    "EVENTO": "Brunch\n#BeyondtheScreen \n*Evento solo invitación/RSVP",
    "SEDE": "Hotel Zadún, a Ritz-Carlton Reserve",
    "CATEGORÍA": "Evento solo por invitación",
    "COLOR": "#3a3a08",
    "Dia": "sábado 13 dic"
  },
  {
    "HORA DE INICIO": "18:30",
    "HORA DE FIN": "19:00",
    "EVENTO": "Inauguración oficial\nMaestro de ceremonia: José María Yazpik + Live Cinema Performance \nPersonas Haciendo Cosas con Tania Reza",
    "SEDE": "Crania",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "jueves 11 dic"
  },
  {
    "HORA DE INICIO": "19:00",
    "HORA DE FIN": "20:55",
    "EVENTO": "Proyección Inaugural\nIf I had legs I'd kick you | Dir. Mary Bronstein | EEUU | 113 min",
    "SEDE": "Crania",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "jueves 11 dic"
  },
  {
    "HORA DE INICIO": "21:00",
    "HORA DE FIN": "0:00",
    "EVENTO": "Fiesta Inaugural\nDJ Set\nMandrake",
    "SEDE": "Crania",
    "CATEGORÍA": "Music Sessions FICLosCabos",
    "COLOR": "#6688c5",
    "Dia": "jueves 11 dic"
  },
  {
    "HORA DE INICIO": "9:00",
    "HORA DE FIN": "12:30",
    "EVENTO": "Asesorías 1 a 1 \nFondo Fílmico Gabriel Figueroa",
    "SEDE": "Hotel El Ganzo Galería",
    "CATEGORÍA": "Industria",
    "COLOR": "#051723",
    "Dia": "viernes 12 de dic"
  },
  {
    "HORA DE INICIO": "12:00",
    "HORA DE FIN": "12:30",
    "EVENTO": "Networking de industria",
    "SEDE": "Hotel El Ganzo Rooftop",
    "CATEGORÍA": "Industria",
    "COLOR": "#051723",
    "Dia": "viernes 12 de dic"
  },
  {
    "HORA DE INICIO": "13:00",
    "HORA DE FIN": "13:45",
    "EVENTO": "Panel Fondo Fïlmico Gabriel Figueroa 2025 \nModerado por Ximena Urrutia y Michel Lipkes \npresentado por ESCINE",
    "SEDE": "Hotel El Ganzo Rooftop",
    "CATEGORÍA": "Industria",
    "COLOR": "#051723",
    "Dia": "viernes 12 de dic"
  },
  {
    "HORA DE INICIO": "16:00",
    "HORA DE FIN": "18:00",
    "EVENTO": "Conferencia \nLa Conexión Creativa \ncon Luisa Reyes Retana",
    "SEDE": "Hotel El Ganzo Galería",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "viernes 12 de dic"
  },
  {
    "HORA DE INICIO": "17:00",
    "HORA DE FIN": "17:30",
    "EVENTO": "Proyección especial\nToda una vida, 75 años de las Cruces | México | 20 min",
    "SEDE": "Crania",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "viernes 12 de dic"
  },
  {
    "HORA DE INICIO": "17:30",
    "HORA DE FIN": "18:00",
    "EVENTO": "Proyección especial \nEl Pulmo | Dir. Mark Kronemeyer y Begoña Félix | México | 30 min",
    "SEDE": "Crania",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "viernes 12 de dic"
  },
  {
    "HORA DE INICIO": "18:00",
    "HORA DE FIN": "20:00",
    "EVENTO": "Proyección especial\nDepeche Mode: M | Dir. Fernando Frías | EEUU, México | 95 min.\nQ&A",
    "SEDE": "Crania",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "viernes 12 de dic"
  },
  {
    "HORA DE INICIO": "20:00",
    "HORA DE FIN": "22:00",
    "EVENTO": "Proyección Especial\nLa Nube En El Jardín En Vivo desde La Sala Nezahualcóyotl | Dir. Olmo Guerra | México | 99 min\nQ&A",
    "SEDE": "Crania",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "viernes 12 de dic"
  },
  {
    "HORA DE INICIO": "22:00",
    "HORA DE FIN": "1:00",
    "EVENTO": "Fiesta \nDJ Set Tatiana Serur",
    "SEDE": "Crania",
    "CATEGORÍA": "Music Sessions FICLosCabos",
    "COLOR": "#6688c5",
    "Dia": "viernes 12 de dic"
  },
  {
    "HORA DE INICIO": "11:15",
    "HORA DE FIN": "12:00",
    "EVENTO": "Masterclass\ncon Eugenio Caballero",
    "SEDE": "Hotel El Ganzo Galería",
    "CATEGORÍA": "Industria",
    "COLOR": "#051722",
    "Dia": "sábado 13 de dic"
  },
  {
    "HORA DE INICIO": "12:00",
    "HORA DE FIN": "12:30",
    "EVENTO": "Networking de industria",
    "SEDE": "Hotel El Ganzo Rooftop",
    "CATEGORÍA": "Industria",
    "COLOR": "#051723",
    "Dia": "sábado 13 de dic"
  },
  {
    "HORA DE INICIO": "12:30",
    "HORA DE FIN": "13:30",
    "EVENTO": "Ponencia\nIncentivos para la industria fílmica presentado por IMCINE\nImpartida por Mtra. Daniela Alatorre",
    "SEDE": "Hotel El Ganzo Rooftop",
    "CATEGORÍA": "Industria",
    "COLOR": "#051723",
    "Dia": "sábado 13 de dic"
  },
  {
    "HORA DE INICIO": "17:00",
    "HORA DE FIN": "19:00",
    "EVENTO": "Sesión de poesía performática\nSomos como los ríos\ncon Luisa Reyes Retana y Mercedes Reynosa\n(Seguido por diálogos en torno al territorio y sus cuerpos de agua)",
    "SEDE": "Hotel El Ganzo Rooftop",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "sábado 13 de dic"
  },
  {
    "HORA DE INICIO": "17:00",
    "HORA DE FIN": "18:00",
    "EVENTO": "Proyección de cortometrajes animados en alianza con Cutout Fest",
    "SEDE": "Crania",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "sábado 13 de dic"
  },
  {
    "HORA DE INICIO": "18:30",
    "HORA DE FIN": "20:18",
    "EVENTO": "Homenaje a Eugenio Caballero y proyección especial en su honor:\nUn monstruo viene a verme | Dir. Juan Antonio Bayona | España, EEUU | 108 min",
    "SEDE": "Crania",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "sábado 13 de dic"
  },
  {
    "HORA DE INICIO": "20:20",
    "HORA DE FIN": "21:30",
    "EVENTO": "Premiación\nEntrega de premios Fondo Fílmico Gabriel Figueroa,\nCompetencia FICLosCabos de largometrajes mexicanos, \nPalabras de clausura",
    "SEDE": "Crania",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "sábado 13 de dic"
  },
  {
    "HORA DE INICIO": "21:30",
    "HORA DE FIN": "0:00",
    "EVENTO": "Space Xmas\nEvento aliado *Acceso no incluido",
    "SEDE": "Crania Cate",
    "CATEGORÍA": "Music Sessions FICLosCabos",
    "COLOR": "#6688c5",
    "Dia": "sábado 13 de dic"
  },
  {
    "HORA DE INICIO": "21:00",
    "HORA DE FIN": "0:00",
    "EVENTO": "Cóctel de clausura Casa Ballena \n*Evento solo invitación/RSVP",
    "SEDE": "Casa Ballena",
    "CATEGORÍA": "Evento solo por invitación",
    "COLOR": "#3a3a08",
    "Dia": "sábado 13 de dic"
  },
  {
    "HORA DE INICIO": "17:00",
    "HORA DE FIN": "19:34",
    "EVENTO": "Proyección especial\nLos Domingos | Dir. Alauda Ruiz de Azua | España | 115 min\n\n*Abierto al público | Acceso gratuito\n(capacidad para 100 personas)",
    "SEDE": "Jetty",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "domingo 14 de dic"
  },
  {
    "HORA DE INICIO": "19:40",
    "HORA DE FIN": "21:30",
    "EVENTO": "Proyección especial\nAmores Perros | Dir. Alejandro González Iñárritu | México | 154 min.\n\n*Abierto al público | Acceso gratuito (capacidad para 100 personas)",
    "SEDE": "Jetty",
    "CATEGORÍA": "Programa #BeyondTheScreen",
    "COLOR": "#e67050",
    "Dia": "domingo 14 de dic"
  }
];

export const groupedAgenda = agendaData.reduce((acc, event) => {
  const day = event.Dia;
  if (!acc[day]) {
    acc[day] = [];
  }
  acc[day].push(event);
  return acc;
}, {} as Record<string, AgendaEvent[]>);


const allVenues = [...new Set(agendaData.map(e => e['SEDE']))];
export const venues = allVenues.sort((a, b) => {
  const order = ["Hotel El Ganzo Rooftop", "Hotel El Ganzo Galería", "Crania", "Crania Cate", "Suelo Sur", "Casa Ballena", "Jetty"];
  return order.indexOf(a) - order.indexOf(b);
});

export const timeSlots = [
  "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
];

function generateDetailedTimeSlots() {
  const slots: string[] = [];
  const startHour = 9;
  const endHour = 23;
  for (let hour = startHour; hour <= endHour; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    slots.push(`${hour.toString().padStart(2, '0')}:15`);
    slots.push(`${hour.toString().padStart(2, '0')}:30`);
    slots.push(`${hour.toString().padStart(2, '0')}:45`);
  }
  return slots;
}

export const detailedTimeSlots = generateDetailedTimeSlots();




