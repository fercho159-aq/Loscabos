
'use client';

import { useState } from 'react';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, ChevronDown, Info, Ticket, Share2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type Talent = {
  name: string;
  bio: string;
  image: string;
  imageHint: string;
};

type Event = {
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

type DayProgram = {
  day: string;
  title: string;
  events: Event[];
};

const programData: DayProgram[] = [
  {
    day: "1",
    title: "10 de diciembre",
    events: [
      {
        title: "Sinfonía Oceánica",
        subtitle: "Proyección inaugural",
        text: "Esta función forma parte del programa #BeyondTheScreen, que celebra la convergencia entre arte, ciencia y conciencia ambiental. Inspirada en los paisajes submarinos de Baja California Sur, Sinfonía Oceánica invita a escuchar al mar como nunca antes: un concierto vivo entre ballenas y humanos que trasciende los límites del cine documental. Creada por el galardonado cineasta y fotógrafo de National Geographic Andy Mann, acompañada por la composición original del músico y compositor Garth Stevenson.",
        techInfo: {
          'Dirección y concepto': "FOMARES",
          Música: "Garth Stevenson",
          Fotografía: "Andy Mann",
          Producción: "Gabriela Gómez",
          País: "México / Estados Unidos",
          Año: "2025",
          Duración: "25 min (aprox.)",
          Género: "Documental",
          'Sitio web': "www.fomares.org",
          Instagram: "@fomaresorg"
        },
        sinopsis: "Sinfonía Oceánica es una invitación a sentir el mar a través de un diálogo único entre el contrabajo y las ballenas, donde la música despierta nuestra conexión profunda con el océano.",
        access: "Acceso general con cupo limitado",
        image: "https://picsum.photos/seed/ocean-symphony/800/600",
        imageHint: "underwater whale",
        time: "19:00",
        place: "Crania",
        talent: [
            {
                name: "Andy Mann",
                bio: "Fotógrafo de National Geographic y director nominado al Emmy. Cofundador de SeaLegacy, su trabajo ha impulsado la protección de los océanos. Ha filmado en siete continentes y dirige Sinfonía Oceánica.",
                image: "https://picsum.photos/seed/andy-mann/400/400",
                imageHint: "man portrait photographer"
            },
            {
                name: "Garth Stevenson",
                bio: "Es contrabajista y compositor reconocido por conectar su música con la naturaleza. En 2010 tocó para ballenas en la Antártida junto al Dr. Roger Payne. En 2025, invitado por FOMARES, interpretó su contrabajo para ballenas jorobadas en Baja California Sur mediante bocinas submarinas e hidrófonos, creando un encuentro sonoro único.",
                image: "https://picsum.photos/seed/garth-stevenson/400/400",
                imageHint: "man with cello"
            },
            {
                name: "Maru Brito",
                bio: "Es miembro de ORGCAS, ha colaborado con NatGeo, Disney TV y BBC en documentales de naturaleza. Piloto de dron y fotógrafa subacuática, su mirada ha sido clave en proyectos de conservación. En Sinfonía Oceánica participó como videógrafa, aportando tomas esenciales y experiencia técnica bajo la dirección de Andy Mann.",
                image: "https://picsum.photos/seed/maru-brito/400/400",
                imageHint: "woman underwater camera"
            },
            {
                name: "Gabriela Gómez",
                bio: "Es cofundadora y directora de FOMARES. Abogada enfocada en la conservación marina a través de políticas públicas, alianzas comunitarias y proyectos que integran ciencia, arte y cultura. Promotora de iniciativas que impulsan la protección ambiental mediante conciencia social y participación activa en territorio.",
                image: "https://picsum.photos/seed/gabriela-gomez/400/400",
                imageHint: "woman portrait professional"
            }
        ]
      },
      {
        title: "Bardo, falsa crónica de unas cuantas verdades",
        subtitle: "Proyección especial en Cinemex en Homenaje a Eugenio Caballero",
        text: "Como parte del homenaje a Eugenio Caballero, diseñador de producción ganador del Óscar por El laberinto del fauno, el FICLosCabos 2025 presenta una función especial de Bardo acompañada de una conversación con Ana Terrazas (diseñadora de vestuario) y Ximena Lamadrid (actriz), moderada por Julio Patán. Una oportunidad única para explorar el arte del diseño cinematográfico y su poder narrativo dentro del cine contemporáneo.",
        techInfo: {
          Dirección: "Alejandro González. Iñárritu",
          Guión: "Alejandro G. Iñárritu y Nicolás Giacobone",
          País: "México / Estados Unidos",
          Año: "2022",
          Duración: "174 min",
          Género: "Drama / Comedia surrealista"
        },
        sinopsis: "Un reconocido periodista y documentalista regresa a México y se enfrenta a una crisis existencial mientras revisita su pasado, sus vínculos familiares y la historia reciente del país. Con un lenguaje visual desbordante, Bardo es una reflexión sobre la identidad, la memoria y el absurdo de la existencia contemporánea.",
        access: "Acceso con registro previo",
        image: "https://picsum.photos/seed/bardo/800/600",
        imageHint: "surreal movie scene",
        time: "20:30",
        place: "Cinemex Puerto Paraíso"
      }
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
        image: "https://picsum.photos/seed/masterclass-caballero/800/600",
        imageHint: "film set design",
        time: "12:00",
        place: "Hotel El Ganzo",
        talent: [
            {
                name: "Eugenio Caballero",
                bio: "Diseñador de producción mexicano ganador del Óscar por El laberinto del fauno. Ha trabajado en más de 30 películas con cineastas como Guillermo del Toro, Alfonso Cuarón, J.A. Bayona y Alejandro G. Iñárritu. Responsable del diseño en ROMA, Lo imposible, Un monstruo viene a verme y Bardo. Miembro de la Academia desde 2007, es una de las figuras más influyentes del cine contemporáneo.",
                image: "https://picsum.photos/seed/eugenio-caballero-bio/400/400",
                imageHint: "man portrait professional"
            }
        ]
      },
      {
        title: "Proyección al aire libre en Crania",
        subtitle: "en Homenaje a Eugenio Caballero (película por confirmar)",
        text: "En el marco del homenaje a Eugenio Caballero, el FICLosCabos 2025 presenta una proyección especial al aire libre en Crania, epicentro creativo de Puerto Los Cabos. Bajo las estrellas y frente al mar, el público vivirá una experiencia inmersiva donde la obra visual de Caballero dialoga con la naturaleza y reafirma el espíritu de #BeyondTheScreen.",
        access: "Acceso general con cupo limitado.",
        image: "https://picsum.photos/seed/crania-screening/800/600",
        imageHint: "outdoor cinema night",
        time: "20:00",
        place: "Crania"
      },
      {
        title: "Cóctel de gala en Casa Ballena",
        subtitle: "en Homenaje a Eugenio Caballero",
        text: "El homenaje a Eugenio Caballero culminará con un cóctel privado en Casa Ballena, espacio dedicado a la producción y difusión del arte contemporáneo en San José del Cabo. En este entorno íntimo y simbólico, la comunidad cinematográfica, aliados y creadores se reunirán para celebrar la trayectoria del diseñador de producción acompañada por la música del Ganzo Collective, ensamble residente del Hotel El Ganzo.",
        access: "Acceso solo por invitación.",
        image: "https://picsum.photos/seed/gala-ballena/800/600",
        imageHint: "elegant cocktail party",
        time: "22:00",
        place: "Casa Ballena"
      }
    ]
  },
  {
    day: "3",
    title: "12 de diciembre",
    events: [
      {
        title: "Nuevas voces en el cine",
        subtitle: "Panel de cineastas emergentes",
        text: "En esta edición, el Festival amplía su mirada hacia las nuevas voces del cine, reuniendo a una selección de jóvenes directores, productores y artistas con reconocimiento nacional e internacional, que están redefiniendo los lenguajes cinematográficos con una fuerza creativa única. Una conversación que celebra la diversidad de miradas y conecta al público con la generación que está moldeando el futuro del cine nacional.",
        access: "Acceso con registro previo",
        image: "https://picsum.photos/seed/new-voices/800/600",
        imageHint: "young filmmakers panel",
        participantsButton: true,
        time: "17:00",
        place: "Hotel El Ganzo"
      },
      {
        title: "Venado Azul",
        subtitle: "Masterclass: Animación mexicana en desarrollo",
        text: "En el marco de la nueva sección de animación del FICLosCabos 2025, se presenta Venado Azul, largometraje dirigido por Pablo Calvillo, que sigue el viaje iniciático de Iyari, una joven wixárika que se adentra en el desierto sagrado de Wirikuta. La película propone una reflexión profunda sobre la conexión entre el ser humano y la naturaleza, y sobre la urgencia de preservar los ecosistemas que sostienen nuestra existencia. Como parte del programa #BeyondTheScreen, el Festival presentará un encuentro exclusivo con el director, que incluirá una masterclass y una preview especial dedicada al proceso de dirección y producción de Venado Azul, explorando las decisiones creativas detrás de su universo visual. A través de materiales inéditos —desde el diseño de flora y fauna endémica hasta la creación de robots, personajes y escenarios en 2D y 3D—, el público podrá conocer el proceso que da vida a esta obra, donde tradición, tecnología y narrativa autoral se entrelazan en una experiencia única.",
        access: "Acceso con registro previo",
        image: "https://picsum.photos/seed/venado-azul/800/600",
        imageHint: "animation concept art",
        time: "18:00",
        place: "Cinemex Puerto Paraíso"
      },
      {
        title: "Personas Haciendo Cosas",
        subtitle: "Live Cinema / Performance",
        text: "La artista mexicana Tania Reza presenta Personas Haciendo Cosas, una instalación audiovisual que explora el movimiento contemporáneo a través de la repetición sostenida de gestos cotidianos. Utilizando live coding y un circuito cerrado de video, diez pantallas proyectan en tiempo real a distintas personas repitiendo un movimiento de su rutina u oficio, transformando lo ordinario en una experiencia escénica.",
        access: "Acceso general con cupo limitado.",
        image: "https://picsum.photos/seed/live-cinema/800/600",
        imageHint: "art installation video",
        time: "20:00",
        place: "Crania"
      },
      {
        title: "Celebración del cine mexicano y sus nuevas voces",
        subtitle: "Cena de gala para ganadores del Fondo Fílmico Gabriel Figueroa y finalistas de La Baja Inspira.",
        text: "La Cena de Gala del FICLosCabos 2025 rinde homenaje al talento que impulsa el futuro del cine mexicano. La velada se llevará a cabo en Suelo Sur, restaurante insignia de Los Cabos encabezado por el chef Guillermo Gómez, reconocido por la Guía Michelin por su enfoque en la sostenibilidad, el respeto al territorio y la reinterpretación contemporánea de los ingredientes de Baja California Sur. Cada plato es una historia contada con el lenguaje de la naturaleza. Durante la cena se reconocerá a los ganadores del Fondo Fílmico Gabriel Figueroa, programa que impulsa proyectos mexicanos en etapa de postproducción mediante mentorías y acompañamiento profesional, así como a los finalistas de La Baja Inspira, sección competitiva dedicada a las narrativas con raíces en la península que fortalecen el vínculo entre cine, comunidad y territorio.",
        access: "Acceso solo por invitación",
        image: "https://picsum.photos/seed/gala-dinner/800/600",
        imageHint: "gourmet dinner",
        time: "21:00",
        place: "Suelo Sur"
      }
    ]
  },
  {
    day: "4",
    title: "13 de diciembre",
    events: [
      {
        title: "El Pulmo",
        subtitle: "Proyección especial",
        text: "El Pulmo se presenta como una de las proyecciones especiales del festival, reafirmando el compromiso con las historias que emergen del territorio y la conciencia ambiental. Dirigido por Mark Kronemeyer y Begoña Félix, el documental retrata la vida de Mario Castro, un pescador retirado cuya lucha por la conservación marina ha convertido a Cabo Pulmo en un ejemplo mundial de resiliencia y esperanza ecológica. A través de una fotografía sublime y una narrativa profundamente humana, la película revela las tensiones entre desarrollo, sostenibilidad y comunidad, mostrando cómo la preservación del entorno natural puede convertirse en una forma de resistencia cultural. Esta función forma parte del eje #BeyondTheScreen, que busca conectar el cine con la biodiversidad, la identidad local y el arte como herramienta de transformación.",
        techInfo: {
            Dirección: "Mark Kronemeyer, Begoña Félix",
            País: "México",
            Año: "2024",
            Duración: "32 minutos",
            Género: "Documental"
        },
        sinopsis: "Mario Castro es un pescador comercial retirado, cuyos incansables esfuerzos han posicionando a Cabo Pulmo, México, como un referente mundial en conservación marina. Sin embargo, su entorno enfrenta nuevas amenazas: el crecimiento turístico, la falta de regulación y las consecuencias del desarrollo desmedido.",
        access: "Acceso general con cupo limitado",
        image: "https://picsum.photos/seed/el-pulmo/800/600",
        imageHint: "coral reef documentary",
        time: "17:00",
        place: "Cinemex San José del Cabo"
      },
      {
        title: "Amores Perros – 25 años de una obra que transformó el cine mexicano",
        subtitle: "Proyección especial y conversación con Marta Sosa",
        text: "El Festival rinde homenaje a una de las películas que redefinió la narrativa audiovisual mexicana contemporánea: Amores Perros, dirigida por Alejandro González Iñárritu, a 25 años de su estreno. La proyección especial contará con la participación de Marta Sosa, productora mexicana con una destacada trayectoria en la cinematografía nacional, reconocida por su trabajo en películas como Presunto Culpable (2008), P.O.V. (1988) y, por supuesto, Amores Perros (2000); obras que marcaron la identidad del cine mexicano moderno. Más que una retrospectiva, este encuentro propone un diálogo entre el pasado y el presente, explorando cómo las narrativas urbanas, la fragmentación del relato y la crudeza emocional de Amores Perros siguen resonando hoy en un contexto donde la tecnología y las nuevas formas de comunicación transforman la manera en que contamos y consumimos historias.",
        techInfo: {
          Dirección: "Alejandro González Iñárritu",
          Guión: "Guillermo Arriaga",
          País: "México",
          Año: "2000",
          Duración: "154 minutos",
          Género: "Drama"
        },
        sinopsis: "En la Ciudad de México, un trágico accidente automovilístico entrelaza las vidas de tres personajes: Octavio, un joven que huye de la violencia doméstica y el deseo prohibido; Valeria, una modelo cuyo mundo se derrumba tras perderlo todo; y El Chivo, un exguerrillero que busca redención entre el crimen y la soledad. A través de sus historias, Amores Perros revela la fragilidad humana, el amor, la pérdida y la violencia como pulsos inevitables de una sociedad fragmentada.",
        access: "Acceso general con cupo limitado",
        image: "https://picsum.photos/seed/amores-perros/800/600",
        imageHint: "gritty film scene",
        time: "19:00",
        place: "Cinemex Puerto Paraíso"
      },
      {
        title: "La Nube en el Jardín",
        subtitle: "Proyección especial con Ed Maverick",
        text: "El Festival Internacional de Cine de Los Cabos 2025 presentará una de sus experiencias más memorables: La Nube en el Jardín, documental protagonizado por Ed Maverick desde la Sala Nezahualcóyotl en la Ciudad de México. La película se proyectará en una mega pantalla, creando un entorno inmersivo donde la música en vivo y el lenguaje cinematográfico se entrelazan para generar una experiencia sensorial total. Al finalizar la proyección, Ed Maverick compartirá una conversación íntima sobre el proceso creativo detrás del documental.",
        access: "Acceso general con cupo limitado",
        image: "https://picsum.photos/seed/ed-maverick/800/600",
        imageHint: "musician on stage",
        time: "21:00",
        place: "Jardín Ikal"
      }
    ]
  }
];

const CalendarLinks = ({ event, day }: { event: Event, day: DayProgram }) => {
    const getEventDate = (dayString: string, timeString: string) => {
        const dayOfMonth = parseInt(dayString.split(' ')[0], 10);
        const [hours, minutes] = timeString.split(':').map(Number);
        // Assuming the festival is in December 2025
        return new Date(2025, 11, dayOfMonth, hours, minutes);
    };

    const startTime = getEventDate(day.title, event.time);
    const endTime = new Date(startTime.getTime() + (parseInt(event.techInfo?.Duración || '90') * 60000));
    
    const formatForGoogle = (date: Date) => format(date, "yyyyMMdd'T'HHmmss'Z'");

    const details = `${event.text}\n\nAcceso: ${event.access}`;

    const googleCalendarUrl = new URL("https://www.google.com/calendar/render");
    googleCalendarUrl.searchParams.append("action", "TEMPLATE");
    googleCalendarUrl.searchParams.append("text", event.title);
    googleCalendarUrl.searchParams.append("dates", `${formatForGoogle(startTime)}/${formatForGoogle(endTime)}`);
    googleCalendarUrl.searchParams.append("details", details);
    googleCalendarUrl.searchParams.append("location", event.place);

    return (
        <Button asChild>
            <Link href={googleCalendarUrl.toString()} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" /> Añadir a Google Calendar
            </Link>
        </Button>
    );
};


const EventDialogContent = ({ event, day }: { event: Event, day: DayProgram }) => {
    const getTalentButtonText = () => {
        if (event.talent && event.talent.length === 1) {
            return `Conoce a ${event.talent[0].name}`;
        }
        return "Descubre al talento que nos acompaña en el Festival";
    };

    return (
        <DialogContent className="sm:max-w-2xl bg-card max-h-[90svh] flex flex-col">
            <DialogHeader className="flex-shrink-0">
                <DialogTitle className="font-headline text-3xl text-foreground">{event.title}</DialogTitle>
                <DialogDescription className="text-accent font-semibold pt-1">{event.subtitle}</DialogDescription>
            </DialogHeader>
            <div className="flex-grow overflow-y-auto pr-6 -mr-6">
              <div className="grid gap-6 py-4">
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                      <Image
                          src={event.image}
                          alt={event.title}
                          data-ai-hint={event.imageHint}
                          fill
                          className="object-cover"
                      />
                  </div>
                  <p className="text-muted-foreground">{event.text}</p>
                  {event.sinopsis && (
                      <blockquote className="mt-2 border-l-2 pl-4 italic text-muted-foreground">"{event.sinopsis}"</blockquote>
                  )}
                  {event.techInfo && (
                      <div>
                          <h4 className="font-semibold text-foreground mb-2">Ficha Técnica</h4>
                          <div className="text-sm text-muted-foreground space-y-1">
                              {Object.entries(event.techInfo).map(([key, value]) => (
                                  <p key={key}>
                                      <span className="font-semibold text-foreground/80">{key}:</span> {value}
                                  </p>
                              ))}
                          </div>
                      </div>
                  )}
                  
                  {event.talent && event.talent.length > 0 && (
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <Button variant="ghost" className="text-base font-semibold">
                                    {getTalentButtonText()}
                                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 ml-2" />
                                </Button>
                            </AccordionTrigger>
                            <AccordionContent>
                               <div className="space-y-8 pt-4">
                                    {event.talent.map(person => (
                                        <div key={person.name} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                                            <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                                                <Image 
                                                    src={person.image}
                                                    alt={person.name}
                                                    data-ai-hint={person.imageHint}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <h5 className="font-bold text-foreground">{person.name}</h5>
                                                <p className="text-sm text-muted-foreground mt-1">{person.bio}</p>
                                            </div>
                                        </div>
                                    ))}
                               </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                  )}
    
                  <div className="flex items-center gap-4 text-sm mt-4">
                      <div className="flex items-center gap-2">
                          <Ticket className="h-5 w-5 text-accent" />
                          <span className="font-semibold text-foreground">{event.access}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-accent" />
                          <span className="font-semibold text-foreground">{event.time} @ {event.place}</span>
                      </div>
                  </div>
              </div>
            </div>
            <div className="flex-shrink-0 pt-4 flex flex-wrap gap-4 mt-auto border-t">
              {event.participantsButton && (
                  <Button asChild>
                      <Link href="/participantes">Ver Participantes</Link>
                  </Button>
              )}
                <CalendarLinks event={event} day={day} />
            </div>
        </DialogContent>
    );
}


export default function ProgramacionPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
                Programación <span className="text-accent">2025</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Explora los eventos, proyecciones y experiencias que marcarán la 13ª edición del Festival.
              </p>
            </div>

            {programData.map((day) => (
              <div key={day.day} className="mb-16">
                <h2 className="font-headline text-4xl font-bold text-foreground mb-8 text-center">{day.title}</h2>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {day.events.map((event, index) => (
                       <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                          <Dialog>
                            <DialogTrigger asChild>
                                <Card className="overflow-hidden group cursor-pointer h-full flex flex-col">
                                    <div className="relative aspect-video w-full">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            data-ai-hint={event.imageHint}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                                            <h3 className="text-xl font-bold font-headline text-background">{event.title}</h3>
                                            <p className="text-sm text-accent font-semibold mt-1">{event.subtitle}</p>
                                        </div>
                                    </div>
                                    <CardContent className="p-6 mt-auto">
                                       <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Calendar className="h-4 w-4"/>
                                                <span>{event.time} @ {event.place}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-accent">
                                                <Info className="h-4 w-4"/>
                                                <span>Ver detalles</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </DialogTrigger>
                             <EventDialogContent event={event} day={day} />
                        </Dialog>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {day.events.length > 3 && (
                    <>
                        <CarouselPrevious className="hidden sm:flex -left-8" />
                        <CarouselNext className="hidden sm:flex -right-8" />
                    </>
                  )}
                </Carousel>
              </div>
            ))}

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
