
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Award, Calendar, DollarSign, Target, Milestone, UserCheck, Handshake, Info } from 'lucide-react';
import Image from 'next/image';

const results = [
  {
    icon: DollarSign,
    stat: "+$46M",
    description: "otorgados en premios y apoyos desde 2012.",
  },
  {
    icon: Handshake,
    stat: "+12",
    description: "empresas líderes de la industria como aliadas.",
  },
  {
    icon: UserCheck,
    stat: "230+",
    description: "proyectos recibidos por edición en promedio.",
  },
];

const confirmedAwards = [
    "Renta de equipo cinematográfico (CTT).",
    "Corrección de color y postproducción (Cinecolor, Shalala).",
    "Distribución y estreno comercial (Piano).",
    "Diseño de trailer y cartel (Art Kingdom).",
    "Premio EGEDA: participación en Iberseries Platino 2026, Madrid."
]

export default function IndustriaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-background py-20 sm:py-28 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
              Fondo Fílmico <span className="text-accent">Gabriel Figueroa</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              El motor estratégico de la industria audiovisual en México y América Latina, impulsando la creación y conectando talento con oportunidades globales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                 <Button size="lg" className="group">
                    Aplicar a la Convocatoria
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group">
                    Conviértete en Aliado
                </Button>
            </div>
          </div>
        </section>

        {/* 2025 Edition Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Edición 2025</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Una convocatoria nacional para impulsar las próximas grandes películas mexicanas.
                        </p>
                        <Card className="mt-8 bg-background">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3"><Calendar className="h-6 w-6 text-accent"/> Fechas Clave</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <p className="font-semibold text-foreground">Convocatoria Nacional</p>
                                    <p className="text-sm text-muted-foreground">Abre el 8 de octubre de 2025</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Reuniones de Industria en CDMX</p>
                                    <p className="text-sm text-muted-foreground">Noviembre 2025</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Encuentros y Premiación en Los Cabos</p>
                                    <p className="text-sm text-muted-foreground">Diciembre 2025, durante el festival.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                     <div>
                        <h3 className="font-headline text-3xl font-bold text-foreground mb-4">Premios Confirmados 2025</h3>
                        <p className="text-muted-foreground mb-6">Apoyos en especie y económicos para llevar los proyectos al siguiente nivel.</p>
                        <div className="space-y-4">
                        {confirmedAwards.map((award, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Award className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                <p className="text-foreground">{award}</p>
                            </div>
                        ))}
                        </div>
                     </div>
                </div>
            </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <div className='md:col-span-3'>
                        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Una Nueva Etapa: #BeyondTheScreen</h2>
                        <div className="mt-6 text-lg text-muted-foreground space-y-4">
                            <p>El Fondo Fílmico Gabriel Figueroa, creado en 2012, entra en una nueva etapa en 2025 dentro de la plataforma #BeyondTheScreen. En alianza con la Escuela Superior de Cine (ESCINE), el Fondo amplía su alcance formativo y profesional, reafirmando que el cine es el eje rector del festival, pero ahora conectado con las transformaciones digitales, los nuevos lenguajes audiovisuales y la creatividad interdisciplinaria.</p>
                            <p className='font-semibold text-foreground'>El GFFF 2025 es más que un fondo: es un puente creativo entre cine, la industria y las nuevas narrativas.</p>
                        </div>
                    </div>
                     <div className='md:col-span-2'>
                        <Card className="bg-card shadow-lg">
                            <CardHeader>
                                <CardTitle className='flex items-center gap-3'><Target className='h-6 w-6 text-accent'/> Lo que representa</CardTitle>
                            </CardHeader>
                             <CardContent className="space-y-3 text-sm">
                                <p>Puente de vinculación con la industria global.</p>
                                <p>Impulso a la creación en etapa de postproducción.</p>
                                <p>Semillero de talento emergente y narrativas diversas.</p>
                                <p>Plataforma de colaboración con financiamiento y networking.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

        {/* Results Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Resultados a la Fecha</h2>
                     <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Más de una década impulsando el cine mexicano.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {results.map((result) => (
                        <Card key={result.stat} className="bg-background/80 backdrop-blur-sm border-border/50 text-center p-6">
                            <result.icon className="w-12 h-12 mb-4 text-accent mx-auto" />
                            <p className="text-5xl font-bold text-foreground font-headline">{result.stat}</p>
                            <p className="text-muted-foreground mt-2">{result.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Convocatoria Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Convocatoria 2025</h2>
                     <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Detalles, bases y beneficios para los cineastas que quieran formar parte del Fondo Fílmico Gabriel Figueroa.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className='text-xl font-semibold'>¿Quiénes pueden participar?</AccordionTrigger>
                    <AccordionContent className='text-base text-muted-foreground space-y-3 pt-3'>
                      <p>Eres candidato si cuentas con un proyecto de largometraje (más de 60 minutos) de ficción o documental que sean óperas primas o segundas películas del director(a) que se postula, producidos por México con cualquier otro país.</p>
                      <p>La convocatoria estará abierta a partir del 13 de Octubre para películas en etapa de edición y que están por empezar sus procesos de postproducción.</p>
                      <p>Todos los proyectos inscritos deben contar con un productor que haya realizado y estrenado en salas comerciales y/o festivales (nacionales o internacionales) al menos un largometraje ya sea ficción o documental.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className='text-xl font-semibold'>Premios</AccordionTrigger>
                    <AccordionContent className='text-base text-muted-foreground space-y-4 pt-3'>
                        <p><span className='font-bold text-foreground'>Premio CTT EXP & Rentals:</span> $1,276,000.00 MXN en renta de equipo cinematográfico para el siguiente proyecto.</p>
                        <p><span className='font-bold text-foreground'>Premio CINECOLOR:</span> $400,000.00 MXN en servicios de corrección de color y entregables.</p>
                        <p><span className='font-bold text-foreground'>Premio Shalala:</span> $10,000 USD en servicios de postproducción y/o diseño de audio Dolby Atmos.</p>
                        <p><span className='font-bold text-foreground'>Premio PIANO:</span> $50,000 MXN para impulso al estreno comercial y carta de intención de distribución.</p>
                        <p><span className='font-bold text-foreground'>Premio Art Kingdom:</span> $14,000 USD para diseño de trailer y cartel.</p>
                        <p><span className='font-bold text-foreground'>Premio EGEDA MÉXICO:</span> $5,000 USD en efectivo y participación en Iberseries Platino 2026 en Madrid.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className='text-xl font-semibold'>Beneficios para Seleccionados</AccordionTrigger>
                     <AccordionContent className='text-base text-muted-foreground space-y-3 pt-3'>
                        <p>Los 5 proyectos seleccionados reciben mentorías con expertos de la industria.</p>
                        <p>Hospedaje del 10 al 14 de diciembre de 2025 en un hotel sede del Festival.</p>
                        <p>Vuelo nacional redondo para un representante por proyecto.</p>
                        <p>Acreditación de Industria para un representante de cada proyecto.</p>
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="item-4">
                    <AccordionTrigger className='text-xl font-semibold'>Bases y Reglamento</AccordionTrigger>
                     <AccordionContent className='text-base text-muted-foreground space-y-3 pt-3'>
                       <p>La convocatoria estará vigente del 8 de octubre a las 11:00 a.m. al 28 de octubre de 2025 a las 7:00 p.m.</p>
                       <p>Los proyectos deben inscribirse en español a través del formulario oficial en la web del festival.</p>
                       <p>Proyectos seleccionados en ediciones anteriores no podrán volver a postularse.</p>
                       <p>Los proyectos premiados se comprometen a incluir los logos del Festival y del Fondo Fílmico en los créditos iniciales.</p>
                       <p>El comité de selección se reserva el derecho de descalificar a participantes que no envíen la información completa.</p>
                       <p>La selección de proyectos y la decisión de los patrocinadores será inapelable.</p>
                       <p>La participación en la convocatoria implica la aceptación total del reglamento.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
