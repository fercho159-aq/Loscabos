// Programa de cine por día, del doc SitioWeb_FICC2026 (pestaña "Programa de
// Cine 2026", Mafer, 19-nov-2026). Los títulos se ligan a su ficha en
// ProgramaCine2026 cuando la película ya es pública.

// Oculto hasta que Mafer apruebe el preview (/programacion-2026-preview/programa-de-cine). Cambiar a true para publicarlo.
export const programaCinePublico2026 = false;

export type FuncionPelicula = { title: string; meta: string };
export type Funcion = {
  time: string;
  sala: string;
  title: string;
  meta: string;
  /** Slug de un evento especial (/programacion-2026/<slug>) en vez de película. */
  evento?: string;
  /** Slug de la ficha cuando el título del programa no coincide con el de la película. */
  pelicula?: string;
  /** Programas de cortos: cada corto con su línea de créditos. */
  films?: FuncionPelicula[];
};
export type DiaPrograma = { id: string; label: string; funciones: Funcion[] };

const f = (time: string, sala: string, title: string, meta: string, extra: Partial<Funcion> = {}): Funcion => ({ time, sala, title, meta, ...extra });
const c = (title: string, meta: string): FuncionPelicula => ({ title, meta });

export const programaCine2026: DiaPrograma[] = [
  {
    id: "jueves",
    label: "Jueves 10 de diciembre",
    funciones: [
      f("12:30", "Sala 8", "Cameron Winter At Carnegie Hall", "Dir. Paul Thomas Anderson • Estados Unidos • 2026 • 71’"),
      f("13:40", "Sala 8", "Homenaje a Dolores Heredia", "15’", { evento: "homenaje-dolores-heredia" }),
      f("16:00", "Sala 2", "Muestra de cortometrajes animados", "En alianza con Filma Jalisco y Ciudad Creativa Digital • 81’", {
        films: [
          c("Lo que queda de mí", "Dir. Melany Leyva Ruiz • México • 2026 • 5.10’"),
          c("Teatro secreto", "Dir. Diego Martínez Gutiérrez • México • 2025 • 13’"),
          c("Azul: La última semilla", "Dir. Aline Romero • México, España • 2026 • 9’"),
          c("Dolores", "Dir. Cecilia Andalon • México • 2025 • 10’"),
          c("Hasta pronto", "Dir. Jennifer Skarbnik López • México • 2025 • 14’"),
        ],
      }),
      f("16:00", "Sala 5", "The Next Wave — Emerging Filmmakers", "Programa 1 + Q&A • 83’", {
        films: [
          c("Albatross", "Dir. Amandine Thomas • Estados Unidos, México • 2026 • 14’"),
          c("Circo de Loy", "Dir. Diego Gaxiola • España, México • 2026 • 15’"),
          c("Marga en el DF", "Dir. Gabriela Ortega • República Dominicana, México, Estados Unidos • 2026 • 21’"),
          c("Los mentirosos", "Dir. Eduardo Braun Costa • Argentina • 2026 • 19’"),
          c("Como si la tierra se las hubiera tragado", "Dir. Natalia León • México • 2024 • 14’"),
        ],
      }),
      f("17:15", "Sala 3", "Seis meses en el edificio rosa con azul + Q&A", "Dir. Bruno Santamaría Razo • México, Brasil, Dinamarca • 2026 • 104’"),
      f("18:00", "Sala 2", "La peluca + Q&A", "Dir. Emiliano Rocha Minter • México • 2026 • 65’"),
      f("18:00", "Sala 5", "The Next Wave — Emerging Filmmakers", "Programa 2 + Q&A • 70’", {
        films: [
          c("Memoria de un cuerpo desplazado", "Dir. Mariana Mendivil • México • 2024 • 10’"),
          c("Para los contrincantes", "Dir. Federico Luis • México, Chile, Francia, Reino Unido • 2026 • 15’"),
          c("Miriam", "Dir. Karla Condado • México • 2026 • 20’"),
          c("Isme", "Dir. Leo Aguirre • México • 2024 • 16’"),
          c("La pena no duerme de noche", "Dir. Martín André, Josefina Montino • Chile • 2025 • 9’"),
        ],
      }),
      f("18:00", "Sala 8", "Iron Boy", "Dir. Louis Clichy • Francia, Bélgica • 2026 • 90’"),
      f("19:30", "Sala 4", "We Are All Strangers", "Dir. Anthony Chen • Singapur • 2026 • 157’"),
      f("19:45", "Sala 2", "El Partido", "Dir. Juan Cabral, Santiago Franco • Argentina • 2026 • 91’"),
      f("19:45", "Sala 3", "Nuisance Bear", "Dir. Jack Weisman, Gabriela Osio Vanden • Canadá, EEUU, Reino Unido • 2026 • 89’"),
      f("19:45", "Sala 5", "The Only Living Pickpocket in New York", "Dir. Noah Segan • Estados Unidos • 2026 • 88’"),
      f("20:00", "Sala 8", "Angel's Egg (4K Restoration)", "Dir. Mamoru Oshii • Japón • 1985 • 71’"),
    ],
  },
  {
    id: "viernes",
    label: "Viernes 11 de diciembre",
    funciones: [
      f("12:55", "Sala 8", "Blaise + Q&A", "Dir. Dimitri Planchon, Jean-Paul Guigue • Francia • 2026 • 82’"),
      f("16:30", "Sala 2", "Jaripeo + Q&A", "Dir. Efraín Mojica, Rebecca Zweig • México, Estados Unidos • 2026 • 71’"),
      f("16:30", "Sala 4", "Frequencies of Now", "Programa 1 + Q&A • 99’", {
        films: [
          c("Quijada de árbol", "Dir. Diana Valencia • México • 2024 • 10’"),
          c("Afilo mi Gillete", "Dir. Ignacio Jaunsolo, Juan Meza • Uruguay • 2026 • 89’"),
        ],
      }),
      f("16:45", "Sala 3", "Hijas del bosque + Q&A", "Dir. Otilia Portillo Padua • México • 2026 • 95’"),
      f("17:30", "Sala 5", "Nagi Notes", "Dir. Kōji Fukada • Japón • 2026 • 110’"),
      f("18:00", "Sala 8", "We are aliens", "Dir. Kohei Kadowaki • Japón • 2026 • 117’"),
      f("18:30", "Sala 2", "Heil Jupiter! + Q&A", "Dir. Carlos Reygadas • México, Polonia, Portugal, Noruega, Suecia • 2026 • 156’"),
      f("19:00", "Sala 3", "Odisea Nacional + Q&A", "Dir. Mariano Rentería • México • 2026 • 100’"),
      f("19:00", "Sala 4", "Love Lessons", "Dir. Martin Provost • Francia, Bélgica • 2026 • 114’"),
      f("19:45", "Sala 5", "Tender Loving Care", "Dir. Mike Leigh • Reino Unido, Estados Unidos • 2026 • 107’"),
      f("20:30", "Sala 8", "Wishful Thinking", "Dir. Graham Parkes • Estados Unidos • 2026 • 90’"),
    ],
  },
  {
    id: "sabado",
    label: "Sábado 12 de diciembre",
    funciones: [
      f("12:45", "Sala 8", "Sentimental + Q&A", "Dir. Cesc Gay • España • 2020 • 82’"),
      f("14:50", "Sala 8", "Life Achievement Award — Manuel Arango", "30’"),
      f("16:30", "Sala 8", "Frequencies of Now", "Programa 2 + Q&A • 100’", {
        films: [c("Pánico", "Dir. Jorge Catoni, Renata Valencia • Chile • 2024 • 100’")],
      }),
      f("17:00", "Sala 2", "Los Mariachis Perdidos + Q&A", "Dir. Francisco Ohem • México • 2026 • 80’"),
      f("17:00", "Sala 3", "Los Nuevos + Q&A", "Dir. Rodrigo Plá • México, España • 2026 • 80’"),
      // En el doc dice "Programa 2" otra vez; es el tercero (pendiente de confirmar con Mafer).
      f("17:30", "Sala 5", "Frequencies of Now", "Programa 3 + Q&A • 108’", {
        films: [
          c("Nara", "Dir. Mikhail Borisov • Federación Rusa • 2026 • 7’"),
          c("Weird and Wired", "Dir. Eliza Swanson Cooney • Reino Unido • 2026 • 12’"),
          c("La Mamuncia", "Dir. Juan Fernando Uribe • Colombia • 2022 • 12’"),
          c("Recibamos con un aplauso a los robots", "Dir. Cinthya Chavez • México • 2026 • 18’"),
          c("Mbalax", "Dir. Javier López, Javier Montijano • España, Senegal • 2025 • 28’"),
          c("La Cifra", "Dir. Juan Gordon • Colombia • 2019 • 6’"),
          c("Ingrito", "Dir. Alejandro Tavares • México • 2024 • 25’"),
        ],
      }),
      f("17:45", "Sala 4", "Rehearsals for a Revolution", "Dir. Pegāh Āhangarāni • Irán • 2026 • 95’"),
      f("19:00", "Sala 8", "Blaise", "Dir. Dimitri Planchon, Jean-Paul Guigue • Francia • 2026 • 82’"),
      f("19:15", "Sala 2", "Medeski, Martin & Wood: Not not jazz", "Dir. Jason Miller • Estados Unidos • 2024 • 77’", { evento: "not-not-jazz" }),
      f("19:30", "Sala 3", "Angel's Egg (4K Restoration)", "Dir. Mamoru Oshii • Japón • 1985 • 71’"),
      f("19:30", "Sala 5", "We Are All Strangers", "Dir. Anthony Chen • Singapur • 2026 • 157’"),
      f("19:45", "Sala 4", "Nina Roza", "Dir. Geneviève Dulude-De Cells • Bélgica, Bulgaria, Canadá, Italia • 2026 • 103’"),
      f("20:45", "Sala 8", "I Deserve a Lover Whose Every Rise Sets Fiery Dooms Raging Across the Skies", "Dir. Mani Haghighi • Irán • 2026 • 76’"),
    ],
  },
  {
    id: "domingo",
    label: "Domingo 13 de diciembre",
    funciones: [
      f("12:00", "Sala 8", "La Baja Inspira", "Programa 1 + Q&A • 102’", {
        films: [c("Ángeles FC", "Dir. Roberto Ortiz • México • 2025 • 102’")],
      }),
      f("12:00", "Sala 2", "La Baja Inspira", "Programa 2 + Q&A • 87’", {
        films: [
          c("Surgencia", "Dir. Alejandro Montalvo • México • 2024 • 77’"),
          c("Recuerdos Profundos", "Dir. Rafael Quiroga • México • 2024 • 10’"),
        ],
      }),
      f("12:00", "Sala 5", "La Baja Inspira", "Programa 3 + Q&A • 97’", {
        films: [
          c("My Blue Whale Family", "Dir. Hugh Pearson • México • 2025 • 55’"),
          c("Guardianes Del Golfo: From Sand to Sea", "Dir. Nicolas Diaz-Magaloni • México • 2026 • 18’"),
          c("Tajé", "Dir. Ángel Linares • México • 2026 • 24’"),
        ],
      }),
      f("12:00", "Sala 4", "La Baja Inspira", "Programa 4 + Q&A • 105’", {
        films: [
          c("BAJA VIVA", "Dir. Cristian Cortizo Perez • México • 2026 • 42’"),
          c("Fiesta en la misión", "Dir. Alexandra Hernandez Borja • México • 2025 • 38’"),
          c("Azul Vivo", "Dir. Fernando Castanier • México • 2025 • 17’"),
          c("In Praise of Shadows", "Dir. Minori Murakami, Zoren Gold • México • 2026 • 10’"),
        ],
      }),
      f("12:00", "Sala 3", "La Baja Inspira", "Programa 5 + Q&A • 106’", {
        films: [
          c("Oro Rojo", "Dir. Jesús Salazar • México • 2026 • 37’"),
          c("La Ventana: Una Historia de Baja California Sur contada desde el canal de Isla Cerralvo", "Dir. Alonso I. Rodríguez de la Parra • México • 2026 • 34’"),
          c("Tierra", "Dir. José Fernando Altieri • México • 2025 • 13’"),
          c("La ventana a la esperanza", "Dir. Guillermo Acevedo • México • 2025 • 12’"),
          c("Rata Canguro de San Quintín: 100 años de resiliencia", "Dir. Terra Peninsular • México • 2025 • 10’"),
        ],
      }),
      f("14:15", "Sala 2", "Heil Jupiter!", "Dir. Carlos Reygadas • México, Polonia, Portugal, Noruega, Suecia • 2026 • 156’"),
      f("14:30", "Sala 5", "Iron Boy", "Dir. Louis Clichy • Francia, Bélgica • 2026 • 90’"),
      f("15:00", "Sala 3", "Zoé: Memorex + Rexsexex y más", "Dir. Rodrigo Guardiola • México • 2026 • 182’", { pelicula: "memorex-rexsexex-y-mas" }),
      f("15:00", "Sala 4", "Love Lessons", "Dir. Martin Provost • Francia, Bélgica • 2026 • 114’"),
      f("15:00", "Sala 8", "Rehearsals for a Revolution", "Dir. Pegāh Āhangarāni • Irán • 2026 • 95’"),
      f("16:30", "Sala 5", "I Deserve a Lover Whose Every Rise Sets Fiery Dooms Raging Across the Skies", "Dir. Mani Haghighi • Irán • 2026 • 76’"),
      // En el doc venían después de Nuisance Bear (18:30); van por hora.
      f("17:00", "Sala 8", "Wishful Thinking", "Dir. Graham Parkes • Estados Unidos • 2026 • 90’"),
      f("17:15", "Sala 2", "El Partido", "Dir. Juan Cabral, Santiago Franco • Argentina • 2026 • 91’"),
      f("17:30", "Sala 4", "Nagi Notes", "Dir. Kōji Fukada • Japón • 2026 • 110’"),
      f("18:15", "Sala 5", "We are aliens", "Dir. Kohei Kadowaki • Japón • 2026 • 117’"),
      f("18:30", "Sala 3", "Nuisance Bear", "Dir. Jack Weisman, Gabriela Osio Vanden • Canadá, EEUU, Reino Unido • 2026 • 89’"),
      f("19:15", "Sala 2", "Santitos", "Dir. Alejandro Springall • México • 1999 • 110’"),
      f("19:15", "Sala 8", "The Only Living Pickpocket in New York", "Dir. Noah Segan • Estados Unidos • 2026 • 88’"),
      f("19:45", "Sala 4", "Nina Roza", "Dir. Geneviève Dulude-De Cells • Bélgica, Bulgaria, Canadá, Italia • 2026 • 103’"),
    ],
  },
];
