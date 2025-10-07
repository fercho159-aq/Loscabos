
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Award, Calendar, Target, Milestone, UserCheck, Handshake, Info, Users, Film, ListChecks, Goal, GitBranch } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const requirements = [
    "Producción o coproducción mexicana.",
    "Vínculo directo con Baja California o Baja California Sur (filmación, producción o integrantes originarios).",
    "Duración mínima: 10 minutos (cortometraje, mediometraje o largometraje).",
    "Año de producción: 2022–2025.",
    "Género: ficción o no ficción.",
    "Formato de proyección: archivo digital.",
];

const evaluationCriteria = [
    "Vínculo y pertinencia regional.",
    "Narrativa y voz autoral.",
    "Coherencia artística y calidad técnica.",
    "Impacto y resonancia cultural.",
    "Diversidad e identidad del Festival."
]

const additionalGuidelines = [
    "No se aceptarán películas con integrantes del Festival en créditos principales.",
    "No se aceptarán obras que no demuestren el vínculo regional.",
    "Es obligatorio entregar un link digital (no se aceptan materiales físicos).",
    "La inscripción implica la aceptación de estas bases y del reglamento.",
]

export default function LaBajaInspiraPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground text-center">
            <div className="absolute inset-0 z-0">
                <Image
                src="/Images/BajaInspira/FICC_Banner9.png"
                alt="Banner de La Baja Inspira"
                data-ai-hint="baja california desert ocean"
                fill
                className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="font-headline text-5xl md:text-7xl font-bold">
                  La Baja <span className="text-accent">Inspira</span>
                </h1>
            </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4 text-lg text-muted-foreground">
                        <p>La Baja Inspira es la sección competitiva dedicada a celebrar las historias que nacen del territorio. Este programa reconoce y visibiliza a los cineastas que retratan la esencia de la península de Baja California, desde sus paisajes hasta sus comunidades, ofreciendo a la audiencia local la posibilidad de verse reflejada en la pantalla.</p>
                        <p>La Baja Inspira es un puente entre lo local y lo global: abre un espacio para que el talento de la región dialogue con México y el mundo, fortaleciendo la identidad cultural y consolidando a Baja California como un epicentro audiovisual con voz propia.</p>
                    </div>
                    <div>
                        <Image src="/Images/BajaInspira/FICC_Banner10.png" alt="Paisaje de Baja California" data-ai-hint="baja california scenery" width={800} height={600} className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </div>
        </section>

        {/* ESCINE Alliance Banner */}
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Images/BajaInspira/FICC_Banner11.png"
                    alt="Alianza con ESCINE"
                    data-ai-hint="film students collaboration"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="font-headline text-4xl sm:text-5xl font-bold">Alianza con <Link href="https://escine.mx/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ESCINE</Link></h2>
                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    En esta edición, la Escuela Superior de Cine (ESCINE) participa en el proceso de evaluación, aportando legitimidad y veracidad a cada etapa. Gracias a esta colaboración, la sección se convierte en una plataforma sólida para los proyectos inscritos este año, de los cuales resultarán 5 largometrajes y 10 cortometrajes seleccionados para la programación oficial.
                </p>
            </div>
        </section>

        {/* Convocatoria y metodologia Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Convocatoria y metodología</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    La convocatoria se lanzó el 4 de marzo y cerró el 30 de abril de 2025, con gestión y difusión a través de FilmFreeway. Se recibieron 1,600 proyectos, todos visionados por un comité de programación especializado. El anuncio de los seleccionados se realizará el 31 de octubre de 2025 mediante newsletter, redes sociales y FilmFreeway.
                </p>
            </div>
        </section>
        
        {/* Details Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className='text-2xl font-bold hover:no-underline'><div className='flex items-center gap-3'><ListChecks className='h-6 w-6 text-accent'/>Requerimientos de participación</div></AccordionTrigger>
                    <AccordionContent className='text-base text-muted-foreground pt-6 pl-4'>
                        <ul className="space-y-3">
                        {requirements.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                        </ul>
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="item-2">
                    <AccordionTrigger className='text-2xl font-bold hover:no-underline'><div className='flex items-center gap-3'><GitBranch className='h-6 w-6 text-accent'/> Criterios de evaluación</div></AccordionTrigger>
                     <AccordionContent className='text-base text-muted-foreground pt-6 pl-4'>
                        <ul className="list-disc list-inside space-y-2">
                            {evaluationCriteria.map((criterion, index) => (
                                <li key={index}>{criterion}</li>
                            ))}
                        </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className='text-2xl font-bold hover:no-underline'><div className='flex items-center gap-3'><Info className='h-6 w-6 text-accent'/> Lineamientos adicionales</div></AccordionTrigger>
                    <AccordionContent className='text-base text-muted-foreground pt-6 pl-4'>
                         <ul className="list-disc list-inside space-y-2">
                            {additionalGuidelines.map((guideline, index) => (
                                <li key={index}>{guideline}</li>
                            ))}
                        </ul>
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="item-4">
                    <AccordionTrigger className='text-2xl font-bold hover:no-underline'><div className='flex items-center gap-3'><Users className='h-6 w-6 text-accent'/> Jurado</div></AccordionTrigger>
                     <AccordionContent className='text-base text-muted-foreground space-y-3 pt-6 pl-4'>
                        <p>La integración del jurado será anunciada antes del 31 de octubre de 2025.</p>
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
