
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Ticket, Mic, Video, Star, Clapperboard, Users, Music, VenetianMask } from 'lucide-react';
import Link from 'next/link';

const schedule = [
  {
    day: "10 de diciembre",
    events: [
      {
        title: "Sinfonía Oceánica",
        subtitle: "Proyección inaugural",
        imageSrc: "/Images/Programacion/Sinfonia_Oceanica.png",
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
        imageSrc: "/Images/Programacion/Bardo.png",
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
        imageSrc: "/Images/Programacion/Eugenio_Caballero.jpg",
        imageHint: "man portrait",
        text: "Como parte del homenaje del FICLosCabos 2025 a Eugenio Caballero, diseñador de producción y ganador del Premio de la Academia, esta masterclass ofrece una mirada profunda a su proceso creativo. A través de su colaboración con cineastas como Guillermo del Toro, Alfonso Cuarón y J.A. Bayona, Caballero compartirá cómo el diseño visual se convierte en una fuerza narrativa capaz de transformar la experiencia cinematográfica.",
        access: "Acceso con registro previo",
        icon: Star,
      },
      {
        title: "Proyección al aire libre en Crania",
        subtitle: "en Homenaje a Eugenio Caballero (película por confirmar)",
        imageSrc: "/Images/Programacion/Crania.jpg",
        imageHint: "outdoor venue night",
        text: "En el marco del homenaje a Eugenio Caballero, el FICLosCabos 2025 presenta una proyección especial al aire libre en Crania, epicentro creativo de Puerto Los Cabos. Bajo las estrellas y frente al mar, el público vivirá una experiencia inmersiva donde la obra visual de Caballero dialoga con la naturaleza y reafirma el espíritu de #BeyondTheScreen.",
        access: "Acceso general con cupo limitado",
        icon: Video,
      },
      {
        title: "Cóctel de gala en Casa Ballena",
        subtitle: "en Homenaje a Eugenio Caballero",
        imageSrc: "/Images/Programacion/Casa_Ballena.jpg",
        imageHint: "art gallery interior",
        text: "El homenaje a Eugenio Caballero culminará con un cóctel privado en Casa Ballena, espacio dedicado a la producción y difusión del arte contemporáneo en San José del Cabo. En este entorno íntimo y simbólico, la comunidad cinematográfica, aliados y creadores se reunirán para celebrar la trayectoria del diseñador de producción acompañada por la música del Ganzo Collective, ensamble residente del Hotel El Ganzo.",
        access: "Acceso solo por invitación",
        icon: VenetianMask,
      }
    ]
  },
    {
    day: "12 de diciembre",
    events: [
      {
        title: "Nuevas voces en el cine",
        subtitle: "Panel de cineastas emergentes",
        imageSrc: "/Images/Programacion/Nuevas_Voces.png",
        imageHint: "young filmmakers group",
        text: "En esta edición, el Festival amplía su mirada hacia las nuevas voces del cine, reuniendo a una selección de jóvenes directores, productores y artistas con reconocimiento nacional e internacional, que están redefiniendo los lenguajes cinematográficos con una fuerza creativa única. Una conversación que celebra la diversidad de miradas y conecta al público con la generación que está moldeando el futuro del cine nacional.",
        access: "Acceso con registro previo",
        icon: Users,
      },
      {
        title: "Venado Azul",
        subtitle: "Masterclass: Animación mexicana en desarrollo",
        imageSrc: "/Images/Programacion/Venado_Azul.png",
        imageHint: "animation deer art",
        text: "En el marco de la nueva sección de animación del FICLosCabos 2025, se presenta Venado Azul, largometraje dirigido por Pablo Calvillo, que sigue el viaje iniciático de Iyari, una joven wixárika que se adentra en el desierto sagrado de Wirikuta. La película propone una reflexión profunda sobre la conexión entre el ser humano y la naturaleza, y sobre la urgencia de preservar los ecosistemas que sostienen nuestra existencia. Como parte del programa #BeyondTheScreen, el Festival presentará un encuentro exclusivo con el director, que incluirá una masterclass y una preview especial dedicada al proceso de dirección y producción de Venado Azul, explorando las decisiones creativas detrás de su universo visual. A través de materiales inéditos —desde el diseño de flora y fauna endémica hasta la creación de robots, personajes y escenarios en 2D y 3D—, el público podrá conocer el proceso que da vida a esta obra, donde tradición, tecnología y narrativa autoral se entrelazan en una experiencia única.",
        access: "Acceso con registro previo",
        icon: Mic,
      },
       {
        title: "Personas Haciendo Cosas",
        subtitle: "Live Cinema / Performance",
        imageSrc: "https://picsum.photos/seed/performance/800/600",
        imageHint: "live coding performance",
        text: "La artista mexicana Tania Reza presenta Personas Haciendo Cosas, una instalación audiovisual que explora el movimiento contemporáneo a través de la repetición sostenida de gestos cotidianos. Utilizando live coding y un circuito cerrado de video, diez pantallas proyectan en tiempo real a distintas personas repitiendo un movimiento de su rutina u oficio, transformando lo ordinario en una experiencia escénica.",
        access: "Acceso general con cupo limitado",
        icon: Video,
      },
       {
        title: "Celebración del cine mexicano y sus nuevas voces",
        subtitle: "Cena de gala para ganadores del Fondo Fílmico Gabriel Figueroa y finalistas de La Baja Inspira.",
        imageSrc: "/Images/Programacion/Cena_Gala.jpg",
        imageHint: "gala dinner night",
        text: "La Cena de Gala del FICLosCabos 2025 rinde homenaje al talento que impulsa el futuro del cine mexicano. La velada se llevará a cabo en Suelo Sur, restaurante insignia de Los Cabos encabezado por el chef Guillermo Gómez, reconocido por la Guía Michelin por su enfoque en la sostenibilidad, el respeto al territorio y la reinterpretación contemporánea de los ingredientes de Baja California Sur. Cada plato es una historia contada con el lenguaje de la naturaleza. Durante la cena se reconocerá a los ganadores del Fondo Fílmico Gabriel Figueroa, programa que impulsa proyectos mexicanos en etapa de postproducción mediante mentorías y acompañamiento profesional, así como a los finalistas de La Baja Inspira, sección competitiva dedicada a las narrativas con raíces en la península que fortalecen el vínculo entre cine, comunidad y territorio.",
        access: "Acceso solo por invitación",
        icon: VenetianMask,
      },
    ]
  },
  {
    day: "13 de diciembre",
    events: [
        {
            title: "El Pulmo",
            subtitle: "Proyección especial",
            imageSrc: "/Images/Programacion/El_Pulmo.png",
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
            title: "Amores Perros – 25 años de una obra que transformó el cine mexicano",
            subtitle: "Proyección especial y conversación con Marta Sosa",
            imageSrc: "/Images/Programacion/Amores_Perros.png",
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
            imageSrc: "/Images/Programacion/Ed_Maverick.png",
            imageHint: "musician on stage",
            text: "El Festival Internacional de Cine de Los Cabos 2025 presentará una de sus experiencias más memorables: La Nube en el Jardín, documental protagonizado por Ed Maverick desde la Sala Nezahualcóyotl en la Ciudad de México. La película se proyectará en una mega pantalla, creando un entorno inmersivo donde la música en vivo y el lenguaje cinematográfico se entrelazan para generar una experiencia sensorial total. Al finalizar la proyección, Ed Maverick compartirá una conversación íntima sobre el proceso creativo detrás del documental.",
            access: "Acceso general con cupo limitado",
            icon: Music,
        },
    ],
  },
];


const renderTechInfo = (techInfo: any[]) => (
    <div className="space-y-1 text-sm">
        {techInfo.map((info, index) => (
            <p key={index}>
                <span className="font-semibold text-foreground">{info.label}:</span>{' '}
                {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{info.value}</a>
                ) : (
                    <span className="text-muted-foreground">{info.value}</span>
                )}
            </p>
        ))}
    </div>
);


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
                        Descubre los eventos, proyecciones y experiencias que marcarán esta edición del festival.
                    </p>
                </div>

                <div className="space-y-16">
                    {schedule.map((day, dayIndex) => (
                        <div key={dayIndex}>
                            <h2 className="font-headline text-4xl text-accent font-bold mb-8 border-b-2 border-accent pb-2">{day.day}</h2>
                            <div className="space-y-12">
                                {day.events.map((event, eventIndex) => (
                                    <Card key={eventIndex} className="overflow-hidden shadow-lg border-border/50 grid md:grid-cols-5 gap-0">
                                        <div className="md:col-span-2 relative min-h-[300px] md:min-h-0">
                                             <Image
                                                src={event.imageSrc}
                                                alt={event.title}
                                                data-ai-hint={event.imageHint}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="md:col-span-3 p-6 sm:p-8 flex flex-col">
                                            <CardHeader className="p-0 mb-4">
                                                <div className="flex items-start gap-4">
                                                    <div className="bg-accent/10 p-3 rounded-md mt-1">
                                                        <event.icon className="h-6 w-6 text-accent" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-accent">{event.subtitle}</p>
                                                        <CardTitle className="text-2xl font-bold">{event.title}</CardTitle>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="p-0 flex-grow">
                                                <p className="text-muted-foreground mb-6">{event.text}</p>
                                                <Accordion type="single" collapsible className="w-full">
                                                    {event.synopsis && (
                                                        <AccordionItem value="sinopsis">
                                                            <AccordionTrigger>Sinopsis</AccordionTrigger>
                                                            <AccordionContent>{event.synopsis}</AccordionContent>
                                                        </AccordionItem>
                                                    )}
                                                    {event.techInfo && (
                                                        <AccordionItem value="ficha-tecnica">
                                                            <AccordionTrigger>Ficha Técnica</AccordionTrigger>
                                                            <AccordionContent>{renderTechInfo(event.techInfo)}</AccordionContent>
                                                        </AccordionItem>
                                                    )}
                                                </Accordion>
                                            </CardContent>
                                            <div className="mt-6 flex items-center gap-2 font-semibold text-sm text-foreground">
                                                <Ticket className="h-5 w-5 text-accent" />
                                                <span>{event.access}</span>
                                            </div>
                                        </div>
                                    </Card>
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
