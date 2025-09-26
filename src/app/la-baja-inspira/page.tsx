
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Award, Calendar, Target, Milestone, UserCheck, Handshake, Info, Users, Film, ListChecks, Goal, GitBranch } from 'lucide-react';
import Image from 'next/image';

const requirements = [
    "País de producción o coproducción: México.",
    "Vínculo directo con Baja California o Baja California Sur.",
    "Duración mínima: 10 minutos.",
    "Año de producción: 2022–2025.",
    "Género: ficción o no ficción.",
    "Formato de proyección: archivo digital.",
];

const methodology = [
    { step: "Convocatoria", description: "Lanzada vía newsletter, redes sociales y FilmFreeway (4 de marzo al 30 de abril de 2025)." },
    { step: "Recepción", description: "Se recibieron 1,600 registros." },
    { step: "Preselección", description: "400 películas cumplen con los requisitos iniciales." },
    { step: "Análisis", description: "Comité de programación especializado revisará todas las películas candidatas." },
    { step: "Anuncio", description: "La selección oficial (5 largos y 10-15 cortos) se anunciará el 31 de octubre de 2025." },
]

const evaluationCriteria = [
    "Vínculo y pertinencia regional.",
    "Narrativa y voz autoral.",
    "Coherencia artística y calidad técnica.",
    "Impacto y resonancia cultural.",
    "Diversidad e identidad del Festival."
]

export default function LaBajaInspiraPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-background py-20 sm:py-28 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
              La Baja <span className="text-accent">Inspira</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              La sección competitiva dedicada a celebrar y visibilizar las historias que nacen del territorio de la península de Baja California.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                 <Button size="lg" className="group">
                    Inscribe tu Proyecto
                </Button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Un Puente Entre lo Local y lo Global</h2>
                        <div className="mt-6 text-lg text-muted-foreground space-y-4">
                            <p>En el corazón del Festival, La Baja Inspira es un puente para que el talento de la región dialogue con México y el mundo, fortaleciendo la identidad cultural y consolidando a Baja California como un epicentro audiovisual con voz propia.</p>
                            <p>En colaboración con la Escuela Superior de Cine (ESCINE), esta sección se convierte en una plataforma sólida para los proyectos inscritos, garantizando un proceso de selección legítimo y creíble.</p>
                        </div>
                    </div>
                     <div>
                        <Card className="bg-background shadow-lg">
                            <CardHeader>
                                <CardTitle className='flex items-center gap-3'><Goal className='h-6 w-6 text-accent'/> Objetivo</CardTitle>
                            </CardHeader>
                             <CardContent>
                                <p className="text-base text-muted-foreground">Vincular e integrar a la comunidad cinematográfica de la península con el resto de México y el mundo, reconociendo la identidad regional y fortaleciendo el tejido cultural local.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Methodology Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Metodología</h2>
                     <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Un proceso claro y transparente para descubrir las mejores historias de la región.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                    {methodology.map((item, index) => (
                        <div key={item.step} className="text-center flex flex-col items-center">
                            <div className="bg-primary/10 text-accent p-4 rounded-full mb-4">
                                <span className="text-2xl font-bold font-headline">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold font-headline text-foreground mb-2">{item.step}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Details Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4 max-w-4xl">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Detalles de la Convocatoria</h2>
                     <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Bases, beneficios y reglamento para los cineastas que quieran formar parte de La Baja Inspira.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className='text-xl font-semibold flex items-center gap-3'><ListChecks/> Requerimientos</AccordionTrigger>
                    <AccordionContent className='text-base text-muted-foreground space-y-4 pt-4'>
                        <ul className="space-y-3">
                        {requirements.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                        </ul>
                        <div className="p-4 bg-background rounded-lg mt-4">
                            <h4 className="font-semibold text-foreground mb-2">Lineamientos Adicionales</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>No se aceptarán películas con integrantes del Festival en créditos principales.</li>
                                <li>No se aceptarán películas que no demuestren el vínculo regional.</li>
                                <li>Se requiere link digital (no se aceptan materiales físicos).</li>
                                <li>La inscripción implica aceptación de estas bases y del reglamento.</li>
                            </ul>
                        </div>
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="item-2">
                    <AccordionTrigger className='text-xl font-semibold flex items-center gap-3'><GitBranch /> Proceso de selección</AccordionTrigger>
                     <AccordionContent className='text-base text-muted-foreground space-y-4 pt-4'>
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Fases del Proceso:</h4>
                            <p><span className='font-semibold'>1. Elegibilidad (Primer Filtro):</span> Revisión técnica y formal de requisitos básicos.</p>
                            <p><span className='font-semibold'>2. Evaluación cualitativa – ESCINE (Segundo Filtro):</span> Visionado doble y comparativo. En caso de discrepancia, un tercer evaluador define.</p>
                            <p><span className='font-semibold'>3. Selección final – Jurado de renombre (Último Filtro):</span> Un jurado invitado de cineastas delibera y define la selección oficial.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Criterios de evaluación cualitativa:</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {evaluationCriteria.map((criterion, index) => (
                                    <li key={index}>{criterion}</li>
                                ))}
                            </ul>
                             <p className="text-sm mt-2">* Este esquema garantiza al menos dos visionados independientes por película.</p>
                        </div>
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="item-3">
                    <AccordionTrigger className='text-xl font-semibold flex items-center gap-3'><Users /> Jurado</AccordionTrigger>
                     <AccordionContent className='text-base text-muted-foreground space-y-3 pt-3'>
                        <p>El jurado se anunciará públicamente previo al 31 de octubre de 2025.</p>
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
