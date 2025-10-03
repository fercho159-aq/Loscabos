
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Calendar, Award, Users } from "lucide-react";
import Image from "next/image";

const keyDates = [
    {
        icon: Calendar,
        title: "Convocatoria",
        description: "Activa del 4 de marzo al 30 de abril de 2025."
    },
    {
        icon: Award,
        title: "Selección y resultados",
        description: "La selección oficial de 5 largometrajes y 10 cortometrajes será anunciada el 31 de octubre de 2025 vía newsletter, redes sociales y FilmFreeway."
    }
];

export default function LaBajaInspiraHomeSection() {
  return (
    <section id="la-baja-inspira-home" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image */}
           <div>
             <Image 
                src="https://picsum.photos/seed/baja-inspira/800/1000"
                alt="Paisaje de Baja California"
                data-ai-hint="baja california landscape"
                width={800}
                height={1000}
                className="rounded-lg shadow-2xl object-cover w-full h-auto"
              />
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">La Baja <span className="text-accent">Inspira</span></h2>
              <p className="mt-4 text-lg text-muted-foreground">
                En el corazón del Festival Internacional de Cine de Los Cabos, La Baja Inspira es la sección competitiva dedicada a celebrar las historias que nacen del territorio. Este programa reconoce y visibiliza a los cineastas que retratan la esencia de la península de Baja California, desde sus paisajes hasta sus comunidades, ofreciendo a la audiencia local la posibilidad de verse reflejada en la pantalla.
              </p>
            </div>
            
             <div>
                <h3 className="font-headline text-3xl font-bold text-foreground mb-4">Fechas clave</h3>
                <Accordion type="single" collapsible className="w-full">
                  {keyDates.map((item, index) => (
                    <AccordionItem value={`item-${index + 1}`} key={item.title}>
                      <AccordionTrigger className='text-xl font-semibold text-left'>
                        <div className="flex items-center gap-3">
                            <item.icon className="h-6 w-6 text-accent flex-shrink-0" />
                            <span>{item.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='text-base text-muted-foreground pt-2 pl-12'>
                        {item.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
             </div>

            <Button size="lg" asChild>
                <Link href="/la-baja-inspira">
                    Descubre más
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
