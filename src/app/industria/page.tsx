
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Award, Calendar, DollarSign, Target, Milestone, UserCheck, Handshake, Info, Users, Film } from 'lucide-react';
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
    "Premio EGEDA: participación internacional en Iberseries Platino 2026, Madrid."
];

const gfffRepresents = [
    "Impulso a la creación cinematográfica mexicana en su etapa de postproducción.",
    "Puente de vinculación con productores, distribuidores, inversionistas, festivales y agentes internacionales.",
    "Semillero de talento emergente, consolidando nuevas voces y narrativas diversas.",
    "Plataforma de colaboración que ofrece financiamiento, servicios, premios en especie y networking estratégico."
];

const selectionCommittee = [
    "Juan Patricio Riveroll. Director y productor. Ha sido docente, novelista y director ejecutivo de Diplomacia Cultural y Turística en la SRE.",
    "Jaime Romandía. Fundador de Mantarraya, productor de más de 45 filmes premiados en Cannes y Venecia. Dirige ESCINE.",
    "Alfredo Ruiz. Director de la Licenciatura en Cinematografía en ESCINE. Experiencia en curaduría, crítica y formación académica.",
    "Otros nombres por confirmar (Ximena Urrutia, Salvador Amores, etc.)."
];

const evaluationCriteria = [
    "Vínculo y pertinencia regional.",
    "Narrativa y voz autoral.",
    "Coherencia artística y calidad técnica.",
    "Impacto y resonancia cultural.",
    "Diversidad e identidad del Festival."
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
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Edición 2025</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Una convocatoria nacional para impulsar las próximas grandes películas mexicanas. Abierta a largometrajes de ficción o documental (óperas primas o segundas películas).
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    <div>
                        <Card className="bg-background">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3"><Calendar className="h-6 w-6 text-accent"/> Fechas Clave</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <p className="font-semibold text-foreground">Convocatoria Nacional</p>
                                    <p className="text-sm text-muted-foreground">20 al 28 de Octubre 2025</p>
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
                        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Fondo Fílmico Gabriel Figueroa – FICC 2025</h2>
                        <div className="mt-6 text-lg text-muted-foreground space-y-4">
                            <p>En el marco del Festival Internacional de Cine de Los Cabos 2025, el Fondo Fílmico Gabriel Figueroa (GFFF) entra en una etapa renovada como parte de la visión #BeyondTheScreen. Creado en 2012, este programa ha impulsado la consolidación de nuevas voces del cine mexicano, y hoy se proyecta como un motor estratégico dentro del ecosistema de las industrias creativas.</p>
                            <p>Las industrias creativas son hoy uno de los principales motores de transformación económica, cultural y social a nivel internacional. En Baja California Sur, el GFFF se convierte en un vehículo clave para articular talento, formación y producción audiovisual, al tiempo que fortalece la proyección de México en el mundo.</p>
                            <p>En alianza con la Escuela Superior de Cine (ESCINE), el Fondo gana legitimidad, credibilidad y alcance, ofreciendo a cineastas emergentes un puente con productores, distribuidores, inversionistas y festivales internacionales. Más que un programa de apoyo, el GFFF es un espacio de convergencia entre cultura, tecnología y creatividad interdisciplinaria, que conecta la potencia del cine con los nuevos lenguajes digitales y con la necesidad de narrativas diversas y sostenibles.</p>
                            <p>Con esta visión renovada, el Fondo Fílmico Gabriel Figueroa reafirma el compromiso del FICC 2025: ser no solo un festival de cine, sino una plataforma que potencia a Puerto Los Cabos como hub creativo y regenerativo, al tiempo que fortalece el desarrollo económico y cultural de la región y de la industria audiovisual mexicana.</p>
                        </div>
                    </div>
                     <div className='md:col-span-2'>
                        <Card className="bg-card shadow-lg">
                            <CardHeader>
                                <CardTitle className='flex items-center gap-3'><Target className='h-6 w-6 text-accent'/> Qué representa el GFFF</CardTitle>
                            </CardHeader>
                             <CardContent className="space-y-3">
                                {gfffRepresents.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                        <p className="text-sm text-muted-foreground">{item}</p>
                                    </div>
                                ))}
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
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Detalles de la Convocatoria</h2>
                     <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Bases, beneficios y reglamento para los cineastas que quieran formar parte del Fondo Fílmico Gabriel Figueroa.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className='text-xl font-semibold'>Términos de participación</AccordionTrigger>
                    <AccordionContent className='text-base text-muted-foreground space-y-3 pt-3'>
                      <p>Podrán inscribirse proyectos de largometraje (más de 60 minutos), de ficción o documental, que sean óperas primas o segundas películas producidas o coproducidas por México.</p>
                      <p>La etapa requerida para los proyectos es edición o inicio de postproducción.</p>
                      <p>Cinco proyectos serán seleccionados para participar en mentorías con reconocidos miembros de la industria nacional y sostendrán reuniones privadas con las compañías aliadas del Festival.</p>
                      <p>Los ganadores se anunciarán en la premiación oficial del FICC 2025.</p>
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="item-2">
                    <AccordionTrigger className='text-xl font-semibold'>Beneficios para Seleccionados</AccordionTrigger>
                     <AccordionContent className='text-base text-muted-foreground space-y-3 pt-3'>
                        <p>Hospedaje del 10 al 14 de diciembre 2025 en hotel sede para un representante por proyecto.</p>
                        <p>Vuelo nacional redondo para un representante.</p>
                        <p>Acreditación de Industria del Festival.</p>
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="item-3">
                    <AccordionTrigger className='text-xl font-semibold'>Proceso de selección</AccordionTrigger>
                     <AccordionContent className='text-base text-muted-foreground space-y-4 pt-3'>
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Etapas del proceso:</h4>
                            <p><span className='font-semibold'>1. Elegibilidad:</span> Revisión técnica y formal de requisitos.</p>
                            <p><span className='font-semibold'>2. Evaluación cualitativa (ESCINE):</span> Visionado doble; en caso de discrepancia, tercera valoración.</p>
                            <p><span className='font-semibold'>3. Selección final:</span> Jurado de cineastas de renombre define la selección oficial (5 largometrajes + 10–15 cortos).</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Criterios de evaluación:</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {evaluationCriteria.map((criterion, index) => (
                                    <li key={index}>{criterion}</li>
                                ))}
                            </ul>
                        </div>
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="item-4">
                    <AccordionTrigger className='text-xl font-semibold'>Comité de selección (propuestos)</AccordionTrigger>
                     <AccordionContent className='text-base text-muted-foreground space-y-3 pt-3'>
                       {selectionCommittee.map((member, index) => (
                           <p key={index}>{member}</p>
                       ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
            </div>
        </section>
        
        {/* Sponsors Value Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Valor para Patrocinadores y Aliados</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Una oportunidad única para conectar tu marca con la vanguardia del cine y la cultura.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12 text-left">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary/10 text-accent p-3 rounded-full mt-1">
                            <Users className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground">Exposición Internacional</h3>
                            <p className="text-muted-foreground">Exposición como socios estratégicos de la industria audiovisual en la plataforma más influyente del Festival.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary/10 text-accent p-3 rounded-full mt-1">
                            <Film className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground">Participación Directa</h3>
                            <p className="text-muted-foreground">Implicación en la formación y consolidación de proyectos cinematográficos que trascienden fronteras.</p>
                        </div>
                    </div>
                </div>
                 <Button size="lg" className="mt-12">Conviértete en Aliado</Button>
            </div>
        </section>

        {/* About Gabriel Figueroa Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                 <div className="text-center">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground mb-4">Sobre Gabriel Figueroa</h2>
                    <Image src="/Images/Biografias/FICC_DECK2025.pdf-image-115.jpg" alt="Gabriel Figueroa" width={200} height={200} data-ai-hint="man portrait monochrome" className="mx-auto rounded-full my-6 shadow-lg" />
                    <div className="text-base text-muted-foreground space-y-4 text-left sm:text-center">
                        <p>Gabriel Figueroa (1907–1997) fue uno de los grandes directores de fotografía del cine mexicano y mundial. Con más de 200 películas, colaboraciones con Buñuel, Huston y Ford, y una nominación al Oscar por La noche de la iguana, su legado se convirtió en símbolo de excelencia cinematográfica.</p>
                        <p>El Fondo Fílmico Gabriel Figueroa, creado en 2012 en su honor, se ha consolidado como el brazo estratégico del Festival para vincularse con la industria audiovisual. En esta nueva etapa, y en alianza con ESCINE, el Fondo reafirma que el FICC no solo proyecta cine: también lo produce, lo impulsa y lo conecta con el mundo.</p>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
