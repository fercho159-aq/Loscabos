
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Award, Calendar, DollarSign, Target, Handshake, Info, Users, Film, ListChecks, Goal, GitBranch, Milestone, UserCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    icon: Users,
    stat: "230+",
    description: "proyectos recibidos por edición; hasta 12 seleccionados para reuniones uno a uno.",
  },
];

const gfffRepresents = [
    "Impulso a la creación cinematográfica mexicana en su etapa de postproducción.",
    "Puente de vinculación con productores, distribuidores, inversionistas, festivales y agentes internacionales.",
    "Semillero de talento emergente, consolidando nuevas voces y narrativas diversas.",
    "Plataforma de colaboración que ofrece financiamiento, servicios, premios en especie y networking estratégico."
];

const selectionCommittee = [
    { name: "Juan Patricio Riveroll", bio: "Director, productor y guionista de tres largometrajes de ficción, entre ellos Ópera (2007), ganador del premio Naguib Mahfouz a la primera película de un director, mejor actriz y el FIPRESCI en el Festival del Cairo. Ha publicado cuatro novelas, Todo el oro de Lisboa (Tusquets) es la más reciente.", imgSrc: "/Images/FF/_RSL1446.jpg" },
    { name: "Jaime Romandía", bio: "Fundador de Mantarraya, productor de más de 45 filmes premiados en Cannes y Venecia. Dirige ESCINE.", imgSrc: "https://picsum.photos/seed/romandia/400/400" },
    { name: "Alfredo Ruiz", bio: "Alfredo Ruiz Arias estudió Comunicación y se formó en UNAM, SOMA y MUAC en Historia del Arte y Curaduría. En 2019 cursó el posgrado en Comisariado Cinematográfico en la Elías Querejeta Zine Eskola. Alumni del Locarno Industry Academy, desde 2020 dirige la Licenciatura en Cinematografía en ESCINE y colabora en proyectos curatoriales.", imgSrc: "/Images/FF/foto alfredo r.jpeg" },
];

const confirmedAwards = [
    "Renta de equipo cinematográfico.",
    "Corrección de color y postproducción.",
    "Distribución y estreno comercial.",
    "Diseño de trailer y cartel.",
    "Premio EGEDA: participación internacional en Iberseries Platino 2026, Madrid.",
    "Hospedaje del 10 al 14 de diciembre 2025 en hotel sede para un representante por proyecto.",
    "Vuelo nacional redondo para un representante.",
    "Acreditación de Industria del Festival."
];

const evaluationCriteria = [
    "Vínculo y pertinencia regional.",
    "Narrativa y voz autoral.",
    "Coherencia artística y calidad técnica.",
    "Impacto y resonancia cultural.",
    "Diversidad e identidad del Festival."
];

const selectionProcess = [
    { stage: "Etapa 1 – Elegibilidad", description: "Revisión técnica y formal de requisitos." },
    { stage: "Etapa 2 – Evaluación cualitativa (ESCINE)", description: "Visionado doble; en caso de discrepancia, tercera valoración." },
    { stage: "Etapa 3 – Selección final", description: "Jurado de cineastas de renombre define la selección oficial (5 largometrajes + 10 cortos)." }
];


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
            <p className="mt-4 text-xl font-semibold text-accent">Convocatoria abierta hasta el 31 de Octubre</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                 <Button size="lg" disabled className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-headline">
                    Aplicar a la Convocatoria
                </Button>
                <Button size="lg" asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-none font-headline">
                    <Link href="/faq-ffgf">
                        FAQ
                    </Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <div className='md:col-span-3'>
                        <div className="text-lg text-muted-foreground space-y-4">
                            <p>En el marco del FICLosCabos 2025, el Fondo Fílmico Gabriel Figueroa (GFFF) entra en una etapa renovada como parte de la visión #BeyondTheScreen. Creado en 2012, este programa ha impulsado la consolidación de nuevas voces del cine mexicano, y hoy se proyecta como un motor estratégico dentro del ecosistema de las industrias creativas.</p>
                            <p>En alianza con la Escuela Superior de Cine (<Link href="https://escine.mx/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ESCINE</Link>), el Fondo gana legitimidad, credibilidad y alcance, ofreciendo a cineastas emergentes un puente con productores, distribuidores, inversionistas y festivales internacionales.</p>
                            <p>Con esta visión renovada, el Fondo Fílmico Gabriel Figueroa reafirma el compromiso del FICLosCabos 2025: ser no solo un festival de cine, sino una plataforma que potencia a Puerto Los Cabos como ecosistema creativo y regenerativo, al tiempo que fortalece el desarrollo económico y cultural de la industria cinematográfica mexicana.</p>
                        </div>
                    </div>
                     <div className='md:col-span-2'>
                        <Image
                            src="/Images/FF/FICC_Banner5.jpg"
                            alt="Cineasta en set"
                            data-ai-hint="filmmaker on set"
                            width={800}
                            height={1000}
                            className="rounded-lg shadow-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
        
        {/* Represents & Results Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 space-y-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image 
                            src="/Images/FF/FICC_Banner6.jpg"
                            alt="Networking en evento de cine"
                            data-ai-hint="cinema networking event"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                     <div>
                        <h2 className="font-headline text-4xl font-bold text-foreground mb-6">¿Qué representa el Fondo?</h2>
                         <div className="space-y-4">
                            {gfffRepresents.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                                    <p className="text-lg text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Resultados a la Fecha</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {results.map((result) => (
                            <Card key={result.stat} className="bg-card text-center p-6 shadow-lg">
                                <result.icon className="w-12 h-12 mb-4 text-accent mx-auto" />
                                <p className="text-5xl font-bold text-foreground font-headline">{result.stat}</p>
                                <p className="text-muted-foreground mt-2">{result.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Convocatoria Banner */}
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Images/FF/FICC_Banner8.jpg"
                    alt="Banner Convocatoria"
                    data-ai-hint="film slate camera"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                 <h2 className="font-headline text-5xl sm:text-7xl font-bold">Convocatoria Edición 2025</h2>
            </div>
        </section>

        {/* Convocatoria Details Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full" defaultValue='item-1'>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='text-2xl font-semibold hover:no-underline'><div className='flex items-center gap-3'><ListChecks className='h-6 w-6 text-accent'/>Términos de participación</div></AccordionTrigger>
                            <AccordionContent className='text-base text-muted-foreground space-y-2 pt-6 pl-4'>
                                <Accordion type="single" collapsible className="w-full bg-background/50 rounded-lg p-4">
                                     <AccordionItem value="sub-item-1" className="border-b-0">
                                        <AccordionTrigger className="text-lg font-medium hover:no-underline"><div className="flex items-center gap-2"><Target className="h-5 w-5 text-secondary"/>Proyectos elegibles</div></AccordionTrigger>
                                        <AccordionContent className='text-base text-muted-foreground space-y-2 pt-4 pl-8'>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Largometrajes de más de 60 minutos.</li>
                                                <li>Ficción o documental.</li>
                                                <li>Óperas primas o segundas películas producidas o coproducidas por México.</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                     <AccordionItem value="sub-item-2" className="border-b-0">
                                        <AccordionTrigger className="text-lg font-medium hover:no-underline"><div className="flex items-center gap-2"><Milestone className="h-5 w-5 text-secondary"/>Etapa requerida</div></AccordionTrigger>
                                        <AccordionContent className='text-base text-muted-foreground space-y-2 pt-4 pl-8'>
                                             <p>Proyectos en edición o inicio de postproducción.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="sub-item-3" className="border-b-0">
                                        <AccordionTrigger className="text-lg font-medium hover:no-underline"><div className="flex items-center gap-2"><UserCheck className="h-5 w-5 text-secondary"/>Selección</div></AccordionTrigger>
                                        <AccordionContent className='text-base text-muted-foreground space-y-2 pt-4 pl-8'>
                                            <p>Se elegirán 5 proyectos para participar en mentorías con reconocidos miembros de la industria nacional.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className='text-2xl font-semibold hover:no-underline'><div className='flex items-center gap-3'><Goal className='h-6 w-6 text-accent'/>Criterios de evaluación</div></AccordionTrigger>
                            <AccordionContent className='text-base text-muted-foreground pt-6 pl-4'>
                                <ul className="list-disc list-inside space-y-2">
                                    {evaluationCriteria.map((criterion, index) => (
                                        <li key={index}>{criterion}</li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className='text-2xl font-semibold hover:no-underline'><div className='flex items-center gap-3'><Calendar className='h-6 w-6 text-accent'/>Fechas Clave</div></AccordionTrigger>
                            <AccordionContent className='text-base text-muted-foreground space-y-4 pt-6 pl-4'>
                                <div>
                                    <p className="font-semibold text-foreground">Convocatoria nacional</p>
                                    <p className="text-sm">Abierta del 13 al 31 de octubre 2025.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Selección y resultados</p>
                                    <p className="text-sm">Anuncio de resultados: 15 de noviembre 2025.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Encuentros y premiación oficial</p>
                                    <p className="text-sm">10 al 14 diciembre 2025, en el marco del Festival.</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className='text-2xl font-semibold hover:no-underline'><div className='flex items-center gap-3'><Award className='h-6 w-6 text-accent'/>Premios y Beneficios 2025</div></AccordionTrigger>
                            <AccordionContent className='text-base text-muted-foreground pt-6 pl-4'>
                                <ul className="space-y-3">
                                {confirmedAwards.map((award, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                        <span>{award}</span>
                                    </li>
                                ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-5">
                            <AccordionTrigger className='text-2xl font-semibold hover:no-underline'><div className='flex items-center gap-3'><GitBranch className='h-6 w-6 text-accent'/>Proceso de selección</div></AccordionTrigger>
                             <AccordionContent className='text-base text-muted-foreground space-y-4 pt-6 pl-4'>
                                {selectionProcess.map((item, index) => (
                                     <div key={index}>
                                        <p><span className='font-semibold text-foreground'>{item.stage}.</span> {item.description}</p>
                                    </div>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="text-center mt-12">
                        <Button size="lg" disabled className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-headline">Aplica a la convocatoria</Button>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Selection Committee Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Comité de Selección</h2>
                     <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Más nombres por confirmar.</p>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {selectionCommittee.map((member) => (
                        <Card key={member.name} className="bg-card text-center p-6 shadow-lg">
                           <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden">
                                <Image 
                                    src={member.imgSrc} 
                                    alt={`Retrato de ${member.name}`} 
                                    data-ai-hint="portrait" 
                                    fill
                                    className="object-cover aspect-square"
                                />
                           </div>
                           <h3 className="text-2xl font-bold font-headline text-foreground">{member.name}</h3>
                           <p className="text-muted-foreground mt-2 text-sm" dangerouslySetInnerHTML={{ __html: member.bio.replace('ESCINE', '<a href="https://escine.mx/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">ESCINE</a>') }} />
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* About Gabriel Figueroa Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4 max-w-4xl">
                 <div className="text-center">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground mb-4">Sobre Gabriel Figueroa</h2>
                    <Image src="/Images/FF/Foto Gabriel Figueroa_tiff.png" alt="Gabriel Figueroa" width={200} height={200} data-ai-hint="man portrait monochrome" className="mx-auto rounded-full my-6 shadow-lg" />
                    <div className="text-lg text-muted-foreground space-y-4 text-left sm:text-center">
                        <p>Gabriel Figueroa (1907–1997) fue uno de los grandes directores de fotografía del cine mexicano y mundial. Con más de 200 películas, colaboraciones con Luis Buñuel, John Huston y John Ford, y una nominación al Oscar por La noche de la iguana, su legado se convirtió en símbolo de excelencia cinematográfica.</p>
                        <p>El Fondo Fílmico Gabriel Figueroa, creado en 2012 en su honor, se ha consolidado como el brazo estratégico del FICLosCabos para vincularse con la industria fílmica. Ha otorgado más de 46 millones de pesos en apoyos y premios, impulsando proyectos de postproducción y coproducción internacional.</p>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
