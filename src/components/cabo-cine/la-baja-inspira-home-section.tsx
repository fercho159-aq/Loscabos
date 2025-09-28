
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Goal } from "lucide-react";
import Link from "next/link";

const methodology = [
    { step: "Convocatoria", description: "Lanzada vía newsletter, redes sociales y FilmFreeway (4 de marzo al 30 de abril de 2025)." },
    { step: "Recepción", description: "Se recibieron 1,600 registros." },
    { step: "Preselección", description: "400 películas cumplen con los requisitos iniciales." },
    { step: "Análisis", description: "Comité de programación especializado revisará todas las películas candidatas." },
    { step: "Anuncio", description: "La selección oficial (5 largos y 10-15 cortos) se anunciará el 31 de octubre de 2025." },
];

export default function LaBajaInspiraHomeSection() {
  return (
    <section id="la-baja-inspira-home" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          
          {/* Left Column */}
          <div className="space-y-8 md:col-span-2">
            <div>
              <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">La Baja <span className="text-accent">Inspira</span></h2>
              <p className="mt-4 text-lg text-muted-foreground">
                La sección competitiva dedicada a celebrar y visibilizar las historias que nacen del territorio de la península de Baja California.
              </p>
            </div>
            
            <Card className="bg-background shadow-lg">
                <CardHeader>
                    <CardTitle className='flex items-center gap-3'><Goal className='h-6 w-6 text-accent'/> Objetivo</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-base text-muted-foreground">Vincular e integrar a la comunidad cinematográfica de la península con el resto de México y el mundo, reconociendo la identidad regional y fortaleciendo el tejido cultural local.</p>
                </CardContent>
            </Card>

            <Button size="lg" asChild>
                <Link href="/la-baja-inspira">
                    Inscribe tu Proyecto
                </Link>
            </Button>
          </div>

          {/* Right Column */}
          <div className="md:col-span-1">
            <h3 className="font-headline text-3xl font-bold text-foreground">Metodología</h3>
            <p className="mt-2 text-lg text-muted-foreground">
              Un proceso claro y transparente para descubrir las mejores historias de la región.
            </p>
            <Accordion type="single" collapsible className="w-full mt-6">
              {methodology.map((item, index) => (
                <AccordionItem value={`item-${index + 1}`} key={item.step}>
                  <AccordionTrigger className='text-xl font-semibold'>
                    <span className="text-accent mr-4">{index + 1}.</span>{item.step}
                  </AccordionTrigger>
                  <AccordionContent className='text-base text-muted-foreground pt-2 pl-10'>
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
