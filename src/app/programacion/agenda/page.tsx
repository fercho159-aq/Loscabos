
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Ticket, Mic, Video, Star, Clapperboard, Users, Music, VenetianMask, Info, FileText, ArrowLeft, View } from 'lucide-react';

const schedule = [
  {
    day: "10 de diciembre",
    events: [
      {
        title: "Sinfonía Oceánica",
        subtitle: "Proyección inaugural",
        imageSrc: "https://picsum.photos/seed/sinfonia/800/600",
        imageHint: "ocean whale symphony",
        text: "Esta función forma parte del programa #BeyondTheScreen, que celebra la convergencia entre arte, ciencia y conciencia ambiental. Inspirada en los paisajes submarinos de Baja California Sur, Sinfonía Oceánica invita a escuchar al mar como nunca antes: un concierto vivo entre ballenas y humanos que trasciende los límites del cine documental. Creada por el galardonado cineasta y fotógrafo de National Geographic Andy Mann, acompañada por la composición original del músico y compositor Garth Stevenson.",
        techInfo: [
            { label: "Dirección y concepto", value: "FOMARES" },
            { label: "Música", value: "Garth Stevenson" },
            { label: "Fotografía", value: "Andy Mann" },
            { label: "Producción", value: "Gabriela Gómez" },
            { label: "País", value: "México / Estados Unidos" },
            { label: "Año", value: "2025" },
            { label: "Duración", value: "25 min (aprox.)" },
            { label: "Género", value: "Documental" },
            { label: "Sitio web", value: "www.fomares.org", link: "http://www.fomares.org" },
            { label: "Instagram", value: "@fomaresorg", link: "https://instagram.com/fomaresorg" },
        ],
        synopsis: "Sinfonía Oceánica es una invitación a sentir el mar a través de un diálogo único entre el contrabajo y las ballenas, donde la música despierta nuestra conexión profunda con el océano.",
        access: "Acceso general con cupo limitado",
        icon: Music,
      },
      {
        title: "Bardo, falsa crónica de unas cuantas verdades",
        subtitle: "Proyección especial en Cinemex en Homenaje a Eugenio Caballero",
        imageSrc: "https://picsum.photos/seed/bardo/800/600",
        imageHint: "surreal movie scene",
        text: "Como parte del homenaje a Eugenio Caballero, diseñador de producción ganador del Óscar por El laberinto del fauno, el FICLosCabos 2025 presenta una función especial de Bardo acompañada de una conversación con Ana Terrazas (diseñadora de vestuario) y Ximena Lamadrid (actriz), moderada por Julio Patán. Una oportunidad única para explorar el arte del diseño cinematográfico y su poder narrativo dentro del cine contemporáneo.",
        techInfo: [
            { label: "Dirección", value: "Alejandro González. Iñárritu" },
            { label: "Guión", value: "Alejandro G. Iñárritu y Nicolás Giacobone" },
            { label: "País", value: "México / Estados Unidos" },
            { label: "Año", value: "2022" },
            { label: "Duración", value: "174 min" },
            { label: "Género", value: "Drama / Comedia surrealista" },
        ],
        synopsis: "Un reconocido periodista y documentalista regresa a México y se enfrenta a una crisis existencial mientras revisita su pasado, sus vínculos familiares y la historia reciente del país. Con un lenguaje visual desbordante, Bardo es una reflexión sobre la identidad, la memoria y el absurdo de la existencia contemporánea.",
        access: "Acceso con registro previo",
        icon: Clapperboard,
      }
    ]
  },
  {
    day: "11 de diciembre",
    events: [
      {
        title: "Masterclass con Eugenio Caballero",
        subtitle: "Homenaje a Eugenio Caballero",
        imageSrc: "https://picsum.photos/seed/eugenio-masterclass/800/600",
        imageHint: "man portrait",
        text: "Como parte del homenaje del FICLosCabos 2025 a Eugenio Caballero, diseñador de producción y ganador del Premio de la Academia, esta masterclass ofrece una mirada profunda a su proceso creativo. A través de su colaboración con cineastas como Guillermo del Toro, Alfonso Cuarón y J.A. Bayona, Caballero compartirá cómo el diseño visual se convierte en una fuerza narrativa capaz de transformar la experiencia cinematográfica.",
        access: "Acceso con registro previo",
        icon: Star,
        synopsis: null,
        techInfo: null,
      },
      {
        title: "Proyección al aire libre en Crania",
        subtitle: "en Homenaje a Eugenio Caballero (película por confirmar)",
        imageSrc: "https://picsum.photos/seed/crania/800/600",
        imageHint: "outdoor venue night",
        text: "En el marco del homenaje a Eugenio Caballero, el FICLosCabos 2025 presenta una proyección especial al aire libre en Crania, epicentro creativo de Puerto Los Cabos. Bajo las estrellas y frente al mar, el público vivirá una experiencia inmersiva donde la obra visual de Caballero dialoga con la naturaleza y reafirma el espíritu de #BeyondTheScreen.",
        access: "Acceso general con cupo limitado",
        icon: Video,
        synopsis: null,
        techInfo: null,
      },
      {
        title: "Cóctel de gala en Casa Ballena",
        subtitle: "en Homenaje a Eugenio Caballero",
        imageSrc: "https://picsum.photos/seed/casaballena/800/600",
        imageHint: "art gallery interior",
        text: "El homenaje a Eugenio Caballero culminará con un cóctel privado en Casa Ballena, espacio dedicado a la producción y difusión del arte contemporáneo en San José del Cabo. En este entorno íntimo y simbólico, la comunidad cinematográfica, aliados y creadores se reunirán para celebrar la trayectoria del diseñador de producción acompañada por la música del Ganzo Collective, ensamble residente del Hotel El Ganzo.",
        access: "Acceso solo por invitación",
        icon: VenetianMask,
        synopsis: null,
        techInfo: null,
      }
    ]
  },
    {
    day: "12 de diciembre",
    events: [
      {
        title: "Nuevas voces en el cine",
        subtitle: "Panel de cineastas emergentes",
        imageSrc: "https://picsum.photos/seed/nuevasvoces/800/600",
        imageHint: "young filmmakers group",
        text: "En esta edición, el Festival amplía su mirada hacia las nuevas voces del cine, reuniendo a una selección de jóvenes directores, productores y artistas con reconocimiento nacional e internacional, que están redefiniendo los lenguajes cinematográficos con una fuerza creativa única. Una conversación que celebra la diversidad de miradas y conecta al público con la generación que está moldeando el futuro del cine nacional.",
        access: "Acceso con registro previo",
        icon: Users,
        synopsis: null,
        techInfo: null,
      },
      {
        title: "Venado Azul",
        subtitle: "Masterclass: Animación mexicana en desarrollo",
        imageSrc: "https://picsum.photos/seed/venadoazul/800/600",
        imageHint: "animation deer art",
        text: "En el marco de la nueva sección de animación del FICLosCabos 2025, se presenta Venado Azul, largometraje dirigido por Pablo Calvillo, que sigue el viaje iniciático de Iyari, una joven wixárika que se adentra en el desierto sagrado de Wirikuta. La película propone una reflexión profunda sobre la conexión entre el ser humano y la naturaleza, y sobre la urgencia de preservar los ecosistemas que sostienen nuestra existencia. Como parte del programa #BeyondTheScreen, el Festival presentará un encuentro exclusivo con el director, que incluirá una masterclass y una preview especial dedicada al proceso de dirección y producción de Venado Azul, explorando las decisiones creativas detrás de su universo visual. A través de materiales inéditos —desde el diseño de flora y fauna endémica hasta la creación de robots, personajes y escenarios en 2D y 3D—, el público podrá conocer el proceso que da vida a esta obra, donde tradición, tecnología y narrativa autoral se entrelazan en una experiencia única.",
        access: "Acceso con registro previo",
        icon: Mic,
        synopsis: null,
        techInfo: null,
      },
       {
        title: "Personas Haciendo Cosas",
        subtitle: "Live Cinema / Performance",
        imageSrc: "https://picsum.photos/seed/performance/800/600",
        imageHint: "live coding performance",
        text: "La artista mexicana Tania Reza presenta Personas Haciendo Cosas, una instalación audiovisual que explora el movimiento contemporáneo a través de la repetición sostenida de gestos cotidianos. Utilizando live coding y un circuito cerrado de video, diez pantallas proyectan en tiempo real a distintas personas repitiendo un movimiento de su rutina u oficio, transformando lo ordinario en una experiencia escénica.",
        access: "Acceso general con cupo limitado",
        icon: Video,
        synopsis: null,
        techInfo: null,
      },
       {
        title: "Celebración del cine mexicano y sus nuevas voces",
        subtitle: "Cena de gala para ganadores del Fondo Fílmico Gabriel Figueroa y finalistas de La Baja Inspira.",
        imageSrc: "https://picsum.photos/seed/cenagala/800/600",
        imageHint: "gala dinner night",
        text: "La Cena de Gala del FICLosCabos 2025 rinde homenaje al talento que impulsa el futuro del cine mexicano. La velada se llevará a cabo en Suelo Sur, restaurante insignia de Los Cabos encabezado por el chef Guillermo Gómez, reconocido por la Guía Michelin por su enfoque en la sostenibilidad, el respeto al territorio y la reinterpretación contemporánea de los ingredientes de Baja California Sur. Cada plato es una historia contada con el lenguaje de la naturaleza. Durante la cena se reconocerá a los ganadores del Fondo Fílmico Gabriel Figueroa, programa que impulsa proyectos mexicanos en etapa de postproducción mediante mentorías y acompañamiento profesional, así como a los finalistas de La Baja Inspira, sección competitiva dedicada a las narrativas con raíces en la península que fortalecen el vínculo entre cine, comunidad y territorio.",
        access: "Acceso solo por invitación",
        icon: VenetianMask,
        synopsis: null,
        techInfo: null,
      },
    ]
  },
  {
    day: "13 de diciembre",
    events: [
        {
            title: "El Pulmo",
            subtitle: "Proyección especial",
            imageSrc: "https://picsum.photos/seed/elpulmo/800/600",
            imageHint: "underwater documentary",
            text: "El Pulmo se presenta como una de las proyecciones especiales del festival, reafirmando el compromiso con las historias que emergen del territorio y la conciencia ambiental. Dirigido por Mark Kronemeyer y Begoña Félix, el documental retrata la vida de Mario Castro, un pescador retirado cuya lucha por la conservación marina ha convertido a Cabo Pulmo en un ejemplo mundial de resiliencia y esperanza ecológica. A través de una fotografía sublime y una narrativa profundamente humana, la película revela las tensiones entre desarrollo, sostenibilidad y comunidad, mostrando cómo la preservación del entorno natural puede convertirse en una forma de resistencia cultural. Esta función forma parte del eje #BeyondTheScreen, que busca conectar el cine con la biodiversidad, la identidad local y el arte como herramienta de transformación.",
            techInfo: [
                { label: "Dirección", value: "Mark Kronemeyer, Begoña Félix" },
                { label: "Año", value: "2024" },
                { label: "País", value: "México" },
                { label: "Duración", value: "32 minutos" },
                { label: "Género", value: "Documental" },
            ],
            synopsis: "Mario Castro es un pescador comercial retirado, cuyos incansables esfuerzos han posicionado a Cabo Pulmo, México, como un referente mundial en conservación marina. Sin embargo, su entorno enfrenta nuevas amenazas: el crecimiento turístico, la falta de regulación y las consecuencias del desarrollo desmedido.",
            access: "Acceso general con cupo limitado",
            icon: Clapperboard,
        },
        {
            title: "Amores Perros – 25 años",
            subtitle: "Proyección especial y conversación con Marta Sosa",
            imageSrc: "https://picsum.photos/seed/amoresperros/800/600",
            imageHint: "urban drama movie poster",
            text: "El Festival rinde homenaje a una de las películas que redefinió la narrativa audiovisual mexicana contemporánea: Amores Perros, dirigida por Alejandro González Iñárritu, a 25 años de su estreno. La proyección especial contará con la participación de Marta Sosa, productora mexicana con una destacada trayectoria en la cinematografía nacional, reconocida por su trabajo en películas como Presunto Culpable (2008), P.O.V. (1988) y, por supuesto, Amores Perros (2000); obras que marcaron la identidad del cine mexicano moderno. Más que una retrospectiva, este encuentro propone un diálogo entre el pasado y el presente, explorando cómo las narrativas urbanas, la fragmentación del relato y la crudeza emocional de Amores Perros siguen resonando hoy en un contexto donde la tecnología y las nuevas formas de comunicación transforman la manera en que contamos y consumimos historias.",
            techInfo: [
                { label: "Dirección", value: "Alejandro González Iñárritu" },
                { label: "Guión", value: "Guillermo Arriaga" },
                { label: "País", value: "México" },
                { label: "Año", value: "2000" },
                { label: "Duración", value: "154 minutos" },
                { label: "Género", value: "Drama" },
            ],
            synopsis: "En la Ciudad de México, un trágico accidente automovilístico entrelaza las vidas de tres personajes: Octavio, un joven que huye de la violencia doméstica y el deseo prohibido; Valeria, una modelo cuyo mundo se derrumba tras perderlo todo; y El Chivo, un exguerrillero que busca redención entre el crimen y la soledad. A través de sus historias, Amores Perros revela la fragilidad humana, el amor, la pérdida y la violencia como pulsos inevitables de una sociedad fragmentada.",
            access: "Acceso general con cupo limitado",
            icon: Clapperboard,
        },
        {
            title: "La Nube en el Jardín",
            subtitle: "Proyección especial con Ed Maverick",
            imageSrc: "https://picsum.photos/seed/edmaverick/800/600",
            imageHint: "musician on stage",
            text: "El Festival Internacional de Cine de Los Cabos 2025 presentará una de sus experiencias más memorables: La Nube en el Jardín, documental protagonizado por Ed Maverick desde la Sala Nezahualcóyotl en la Ciudad de México. La película se proyectará en una mega pantalla, creando un entorno inmersivo donde la música en vivo y el lenguaje cinematográfico se entrelazan para generar una experiencia sensorial total. Al finalizar la proyección, Ed Maverick compartirá una conversación íntima sobre el proceso creativo detrás del documental.",
            access: "Acceso general con cupo limitado",
            icon: Music,
            synopsis: null,
            techInfo: null,
        },
    ],
  },
];


const renderTechInfo = (techInfo: any[]) => (
    <div className="space-y-1 text-sm text-muted-foreground">
        {techInfo.map((info, index) => (
            <p key={index}>
                <span className="font-semibold text-foreground">{info.label}:</span>{' '}
                {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{info.value}</a>
                ) : (
                    <span>{info.value}</span>
                )}
            </p>
        ))}
    </div>
);


export default function AgendaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
                        Agenda <span className="text-accent">2025</span>
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Explora la programación del festival en un formato de lista cronológica.
                    </p>
                     <div className="mt-8 flex justify-center">
                        <Button asChild variant="outline">
                            <Link href="/programacion">
                                <View className="mr-2 h-4 w-4" />
                                Ver en formato de Carrusel
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="space-y-16 max-w-5xl mx-auto">
                    {schedule.map((day, dayIndex) => (
                        <div key={dayIndex}>
                            <h2 className="font-headline text-4xl text-accent font-bold mb-8 border-b-2 border-accent pb-2">{day.day}</h2>
                            <div className="space-y-8">
                                {day.events.map((event, eventIndex) => (
                                    <Dialog key={eventIndex}>
                                        <Card className="flex flex-col md:flex-row items-center overflow-hidden group border-border/50 hover:shadow-lg transition-shadow duration-300">
                                            <div className="relative h-48 md:h-full w-full md:w-1/3 flex-shrink-0">
                                                <Image
                                                    src={event.imageSrc}
                                                    alt={event.title}
                                                    data-ai-hint={event.imageHint}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <CardContent className="p-6 flex-grow w-full">
                                                <p className="text-xs font-semibold text-accent">{event.subtitle}</p>
                                                <h3 className="text-2xl font-bold font-headline text-card-foreground mb-2">{event.title}</h3>
                                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.text}</p>
                                                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                                                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                                        <event.icon className="h-5 w-5 text-accent" />
                                                        <span>{event.access}</span>
                                                    </div>
                                                    <DialogTrigger asChild>
                                                        <Button>Ver Detalles</Button>
                                                    </DialogTrigger>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
                                            <DialogHeader>
                                                <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                                                    <Image
                                                        src={event.imageSrc}
                                                        alt={event.title}
                                                        data-ai-hint={event.imageHint}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <p className="text-sm font-semibold text-accent">{event.subtitle}</p>
                                                <DialogTitle className="text-3xl font-bold font-headline">{event.title}</DialogTitle>
                                            </DialogHeader>
                                            <div className="grid gap-6 py-4">
                                                <p className="text-base text-muted-foreground">{event.text}</p>
                                                
                                                {event.synopsis && (
                                                    <div>
                                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Info className="h-5 w-5 text-accent"/>Sinopsis</h4>
                                                        <p className="text-sm text-muted-foreground pl-7">{event.synopsis}</p>
                                                    </div>
                                                )}

                                                {event.techInfo && (
                                                        <div>
                                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><FileText className="h-5 w-5 text-accent"/>Ficha Técnica</h4>
                                                        <div className="pl-7">
                                                            {renderTechInfo(event.techInfo)}
                                                        </div>
                                                    </div>
                                                )}

                                                <div>
                                                    <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Ticket className="h-5 w-5 text-accent"/>Acceso</h4>
                                                    <p className="text-sm text-muted-foreground pl-7">{event.access}</p>
                                                </div>
                                                
                                                {event.title === "Nuevas voces en el cine" && (
                                                    <DialogFooter>
                                                        <Button asChild>
                                                            <Link href="/participantes">Ver Participantes</Link>
                                                        </Button>
                                                    </DialogFooter>
                                                )}
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

    