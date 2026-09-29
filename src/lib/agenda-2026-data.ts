import { eventos2026 } from "./programacion-2026-preview-data";

export type AgendaEvent = {
  id: string;
  startTime?: string;
  endTime?: string;
  title: string;
  description?: string;
  venue: string;
  capacity?: string;
  access?: string;
  href?: string;
  ticketUrl?: string;
  accent: "navy" | "blue" | "orange" | "sage" | "peach";
};

export type AgendaRow = AgendaEvent[];
export type AgendaDay = {
  id: string;
  label: string;
  color: string;
  rows: AgendaRow[];
};

type AgendaSourceEvent = AgendaEvent & { detailSlug?: string };
type AgendaSourceDay = Omit<AgendaDay, "rows"> & { rows: AgendaSourceEvent[][] };

// Horarios y agrupaciones de Propuesta_Programa.pdf. Los textos y aforos
// repetidos de la maqueta se omiten; los eventos con ficha usan su contenido
// vigente para mantener el índice y el detalle sincronizados.
const agendaSource: AgendaSourceDay[] = [
  {
    "id": "2026-12-09",
    "label": "Miércoles 9 de diciembre",
    "color": "#A3CDD8",
    "rows": [
      [
        {
          "id": "2026-12-09-01",
          "startTime": "16:30",
          "endTime": "19:00",
          "title": "Cóctel inaugural + Fiesta del Festival",
          "venue": "Casa Ballena",
          "access": "Invitados especiales",
          "accent": "navy"
        },
        {
          "id": "2026-12-09-02",
          "startTime": "20:00",
          "endTime": "20:15",
          "title": "Inauguración oficial",
          "venue": "La Marina, Los Cabos",
          "access": "Abierto al público",
          "accent": "navy"
        }
      ],
      [
        {
          "id": "2026-12-09-03",
          "startTime": "20:15",
          "endTime": "22:00",
          "title": "Proyección película inaugural",
          "venue": "La Marina, Los Cabos",
          "access": "Abierto al público",
          "accent": "blue"
        },
        {
          "id": "2026-12-09-04",
          "startTime": "22:00",
          "endTime": "22:20",
          "title": "Conversatorio post-proyección",
          "venue": "La Marina, Los Cabos",
          "access": "Abierto al público",
          "accent": "blue"
        }
      ],
      [
        {
          "id": "2026-12-09-05",
          "startTime": "22:20",
          "endTime": "00:00",
          "title": "Cóctel inaugural + Fiesta del Festival",
          "venue": "La Marina, Los Cabos",
          "access": "Abierto al público",
          "accent": "sage"
        }
      ]
    ]
  },
  {
    "id": "2026-12-10",
    "label": "Jueves 10 de diciembre",
    "color": "#8FA79D",
    "rows": [
      [
        {
          "id": "2026-12-10-01",
          "startTime": "09:00",
          "endTime": "11:00",
          "title": "Taller La Baja Inspira",
          "venue": "Hotel Tropicana",
          "access": "Invitados especiales",
          "accent": "peach"
        },
        {
          "id": "2026-12-10-02",
          "startTime": "09:00",
          "endTime": "11:00",
          "title": "Taller Fondo Fílmico Gabriel Figueroa",
          "venue": "Galería | Hotel El Ganzo",
          "access": "Invitados especiales",
          "accent": "peach"
        },
        {
          "id": "2026-12-10-03",
          "startTime": "09:00",
          "endTime": "11:00",
          "title": "Desayuno Girls at Films",
          "venue": "Hotel El Ganzo",
          "access": "Invitados especiales + Abierto al público",
          "accent": "peach",
          "detailSlug": "desayuno-girls-at-films"
        }
      ],
      [
        {
          "id": "2026-12-10-04",
          "startTime": "11:35",
          "endTime": "11:40",
          "title": "Presentación del spot 2026 FICCLosCabos",
          "venue": "Cinépolis San José del Cabo",
          "access": "Invitados especiales",
          "accent": "blue"
        },
        {
          "id": "2026-12-10-05",
          "startTime": "11:40",
          "endTime": "12:05",
          "title": "Industry talk — \"Shaping the Next Wave of Creative Convergence\"",
          "venue": "Cinépolis San José del Cabo",
          "access": "Abierto al público",
          "accent": "blue"
        },
        {
          "id": "2026-12-10-06",
          "startTime": "12:05",
          "endTime": "13:40",
          "title": "Proyección película selección oficial",
          "venue": "Cinépolis San José del Cabo",
          "access": "Abierto al público",
          "accent": "blue"
        },
        {
          "id": "2026-12-10-07",
          "startTime": "13:40",
          "endTime": "13:55",
          "title": "Conversatorio post-proyección",
          "venue": "Cinépolis San José del Cabo",
          "access": "Abierto al público",
          "accent": "blue"
        },
        {
          "id": "2026-12-10-08",
          "startTime": "14:00",
          "endTime": "14:30",
          "title": "Homenaje a Dolores Heredia",
          "venue": "Cinépolis San José del Cabo",
          "access": "Abierto al público",
          "accent": "blue",
          "detailSlug": "homenaje-dolores-heredia"
        }
      ],
      [
        {
          "id": "2026-12-10-09",
          "startTime": "15:00",
          "endTime": "18:00",
          "title": "Brunch — Hotel Tropicana",
          "venue": "Hotel Tropicana",
          "access": "Abierto al público",
          "accent": "orange"
        },
        {
          "id": "2026-12-10-10",
          "startTime": "16:00",
          "endTime": "16:45",
          "title": "Panel La Baja Inspira",
          "venue": "Hotel Tropicana",
          "access": "Seleccionados La Baja Inspira y jurados",
          "accent": "orange"
        }
      ],
      [
        {
          "id": "2026-12-10-11",
          "startTime": "16:00",
          "endTime": "17:00",
          "title": "Showcase de Música",
          "venue": "Hotel Tropicana",
          "access": "Invitados especiales",
          "accent": "navy"
        },
        {
          "id": "2026-12-10-12",
          "startTime": "18:30",
          "endTime": "19:00",
          "title": "Corto Martina Ferragamo",
          "venue": "Zadun — Suite Presidencial",
          "access": "Abierto al público",
          "accent": "navy"
        },
        {
          "id": "2026-12-10-13",
          "startTime": "19:00",
          "endTime": "21:30",
          "title": "Proyección — Marejada internacional + conversatorio",
          "venue": "Zadun — Suite Presidencial",
          "access": "Abierto al público",
          "accent": "navy"
        }
      ],
      [
        {
          "id": "2026-12-10-14",
          "startTime": "21:30",
          "endTime": "00:00",
          "title": "Cóctel Ferragamo",
          "venue": "Zadun — Suite Presidencial",
          "access": "Abierto al público",
          "accent": "sage"
        }
      ]
    ]
  },
  {
    "id": "2026-12-11",
    "label": "Viernes 11 de diciembre",
    "color": "#876B5D",
    "rows": [
      [
        {
          "id": "2026-12-11-01",
          "startTime": "09:00",
          "endTime": "11:00",
          "title": "Taller La Baja Inspira",
          "venue": "Hotel Tropicana",
          "access": "*Este evento es cerrado al público. Asistencia proyectos seleccionados y jurados",
          "accent": "peach"
        },
        {
          "id": "2026-12-11-02",
          "startTime": "09:00",
          "endTime": "11:00",
          "title": "Taller Fondo Fílmico Gabriel Figueroa",
          "venue": "Galería | Hotel El Ganzo",
          "access": "Invitados especiales",
          "accent": "peach"
        },
        {
          "id": "2026-12-11-03",
          "startTime": "09:00",
          "endTime": "11:00",
          "title": "Work in Progress — Insectario",
          "venue": "Cinépolis San José del Cabo",
          "access": "Invitados especiales + Abierto al público",
          "accent": "peach"
        }
      ],
      [
        {
          "id": "2026-12-11-04",
          "startTime": "11:35",
          "endTime": "12:00",
          "title": "Presentación Ciudad Creativa Digital",
          "venue": "Cinépolis San José del Cabo",
          "access": "Invitados especiales",
          "accent": "blue"
        },
        {
          "id": "2026-12-11-05",
          "startTime": "12:00",
          "endTime": "12:20",
          "title": "Industry talk — \"La transferencia de lenguajes y formatos en la creación de contenidos\"",
          "venue": "Cinépolis San José del Cabo",
          "access": "Abierto al público",
          "accent": "blue"
        },
        {
          "id": "2026-12-11-06",
          "startTime": "12:05",
          "endTime": "13:50",
          "title": "Proyección película selección oficial",
          "venue": "Cinépolis San José del Cabo",
          "access": "Abierto al público",
          "accent": "blue"
        },
        {
          "id": "2026-12-11-07",
          "startTime": "13:50",
          "endTime": "14:10",
          "title": "Conversatorio post-proyección",
          "venue": "Cinépolis San José del Cabo",
          "access": "Abierto al público",
          "accent": "blue"
        }
      ],
      [
        {
          "id": "2026-12-11-08",
          "startTime": "16:00",
          "endTime": "16:30",
          "title": "Brunch + Panel \"Lenguajes Audiovisuales y la Tendencia 2027\"",
          "venue": "JW Marriott — Anfiteatro",
          "access": "Abierto al público",
          "accent": "orange"
        },
        {
          "id": "2026-12-11-09",
          "startTime": "17:00",
          "endTime": "17:30",
          "title": "Brunch + Presentación de proyectos ganadores de Frequency of Now",
          "venue": "JW Marriott — Anfiteatro",
          "access": "Seleccionados La Baja Inspira y jurados",
          "accent": "orange"
        }
      ],
      [
        {
          "id": "2026-12-11-10",
          "startTime": "17:30",
          "endTime": "18:30",
          "title": "Showcase de Música + Panel Universal Music México",
          "venue": "JW Marriott — Anfiteatro",
          "access": "Invitados especiales",
          "accent": "navy"
        },
        {
          "id": "2026-12-11-11",
          "startTime": "19:00",
          "endTime": "22:00",
          "title": "MEMOREX + REXSEXEX",
          "href": "/programacion-2026-preview/peliculas/memorex-rexsexex-y-mas",
          "venue": "Terraza AMET",
          "access": "Abierto al público",
          "accent": "navy"
        }
      ],
      [
        {
          "id": "2026-12-11-12",
          "startTime": "22:30",
          "endTime": "00:00",
          "title": "Fiesta — Cierre de día",
          "venue": "JW Marriott",
          "access": "Abierto al público",
          "accent": "sage"
        }
      ]
    ]
  },
  {
    "id": "2026-12-12",
    "label": "Sábado 12 de diciembre",
    "color": "#E3A97C",
    "rows": [
      [
        {
          "id": "2026-12-12-01",
          "startTime": "09:00",
          "endTime": "11:00",
          "title": "Taller La Baja Inspira",
          "venue": "Hotel Tropicana",
          "access": "Invitados especiales",
          "accent": "peach"
        },
        {
          "id": "2026-12-12-02",
          "startTime": "09:00",
          "endTime": "11:00",
          "title": "Taller Fondo Fílmico Gabriel Figueroa",
          "venue": "Galería | Hotel El Ganzo",
          "access": "Invitados especiales",
          "accent": "peach"
        },
        {
          "id": "2026-12-12-03",
          "startTime": "09:00",
          "endTime": "11:00",
          "title": "Animación — Frankelda",
          "venue": "Cinépolis San José del Cabo",
          "access": "Invitados especiales + Abierto al público",
          "accent": "peach"
        },
        {
          "id": "2026-12-12-04",
          "startTime": "09:00",
          "endTime": "11:00",
          "title": "Plática con Stacy Perskie y Carlos López Estrada",
          "venue": "Galería Hotel El Ganzo",
          "access": "Invitados especiales + Abierto al público",
          "accent": "peach"
        }
      ],
      [
        {
          "id": "2026-12-12-05",
          "startTime": "11:30",
          "endTime": "12:30",
          "title": "Presentación de finalistas — FFGF",
          "venue": "Cinépolis San José del Cabo",
          "access": "Invitados especiales",
          "accent": "blue"
        },
        {
          "id": "2026-12-12-06",
          "startTime": "12:30",
          "endTime": "13:05",
          "title": "Presentación del mecanismo del Fondo",
          "venue": "Cinépolis San José del Cabo",
          "access": "Abierto al público",
          "accent": "blue"
        },
        {
          "id": "2026-12-12-07",
          "startTime": "12:05",
          "endTime": "12:40",
          "title": "Proyección película selección oficial",
          "venue": "Cinépolis San José del Cabo",
          "access": "Abierto al público",
          "accent": "blue"
        },
        {
          "id": "2026-12-12-08",
          "startTime": "12:40",
          "endTime": "12:45",
          "title": "Conversatorio post-proyección",
          "venue": "Cinépolis San José del Cabo",
          "access": "Abierto al público",
          "accent": "blue"
        },
        {
          "id": "2026-12-12-09",
          "startTime": "14:30",
          "endTime": "14:45",
          "title": "Reconocimiento a Manuel Arango",
          "venue": "Cinépolis San José del Cabo",
          "access": "Abierto al público",
          "accent": "blue"
        }
      ],
      [
        {
          "id": "2026-12-12-10",
          "startTime": "15:00",
          "endTime": "18:00",
          "title": "Brunch de cierre",
          "venue": "Rooftop Hotel El Ganzo",
          "access": "Abierto al público",
          "accent": "orange"
        },
        {
          "id": "2026-12-12-11",
          "startTime": "16:00",
          "endTime": "16:45",
          "title": "Panel 1: The Next Wave to watch — Emerging Filmmaker",
          "venue": "Rooftop Hotel El Ganzo",
          "access": "Seleccionados La Baja Inspira y jurados",
          "accent": "orange",
          "detailSlug": "panel-the-next-wave"
        },
        {
          "id": "2026-12-12-12",
          "startTime": "15:00",
          "endTime": "18:00",
          "title": "Industry talk — “How to pitch your movie to a festival ˮ",
          "venue": "Cinépolis San José del Cabo",
          "access": "Abierto al público",
          "accent": "orange"
        },
        {
          "id": "2026-12-12-13",
          "startTime": "21:00",
          "endTime": "23:00",
          "title": "Cena de Clausura FICCLosCabos 2026",
          "venue": "Suelo Sur",
          "access": "Seleccionados La Baja Inspira y jurados",
          "accent": "orange"
        }
      ],
      [
        {
          "id": "2026-12-12-14",
          "startTime": "17:30",
          "endTime": "18:30",
          "title": "Ceremonia de Premiación — Proyectos FFGF + La Baja Inspira",
          "venue": "Suelo Sur",
          "access": "Invitados especiales",
          "accent": "navy"
        }
      ]
    ]
  },
  {
    "id": "2026-12-13",
    "label": "Domingo 13 de diciembre",
    "color": "#EDE6DC",
    "rows": [
      [
        {
          "id": "2026-12-13-01",
          "startTime": "17:30",
          "endTime": "18:30",
          "title": "Salida en yate — Ritz-Carlton",
          "venue": "Suelo Sur",
          "access": "Invitados especiales",
          "accent": "navy"
        }
      ]
    ]
  }
];

export const agenda2026: AgendaDay[] = agendaSource.map((day) => ({
  ...day,
  rows: day.rows.map((row) => row.map(({ detailSlug, ...event }) => {
    const detail = eventos2026.find((item) => item.slug === detailSlug);
    return detail ? {
      ...event,
      title: detail.cardTitle ?? detail.title,
      description: detail.body[0],
      venue: detail.venue ?? event.venue,
      href: `/programacion-2026-preview/${detail.slug}`,
    } : event;
  })),
}));
