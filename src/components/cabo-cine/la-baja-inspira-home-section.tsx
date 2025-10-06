
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const keyDates = [
    {
        title: "CONVOCATORIA",
        description: "Activa del 4 de marzo al 30 de abril de 2025."
    },
    {
        title: "SELECCIÓN Y RESULTADOS",
        description: "La selección oficial de 5 largometrajes y 10 cortometrajes será anunciada el 31 de octubre de 2025 vía newsletter, redes sociales y FilmFreeway."
    }
];

export default function LaBajaInspiraHomeSection() {
  return (
    <section id="la-baja-inspira-home" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-6">
            <div>
                <p className="font-headline text-accent tracking-widest text-l">EN EL CORAZÓN DEL FESTIVAL</p>
                <p className="font-headline text-accent tracking-widest text-l   mb-4">INTERNACIONAL DE CINE DE LOS CABOS</p>
                <h2 className="font-headline text-5xl sm:text-6xl font-bold text-foreground">LA BAJA <span className="text-accent">INSPIRA</span></h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    La Baja Inspira es la sección competitiva dedicada a celebrar las historias que nacen del territorio. Este programa reconoce y visibiliza a los cineastas que retratan la esencia de la península de Baja California, desde sus paisajes hasta sus comunidades, ofreciendo a la audiencia local la posibilidad de verse reflejada en la pantalla.
                </p>
            </div>
            
             <div className="pt-4">
                <Accordion type="single" collapsible className="w-full">
                    {keyDates.map((item, index) => (
                    <AccordionItem value={`item-${index + 1}`} key={index}>
                        <AccordionTrigger className="text-accent font-semibold text-sm hover:no-underline">{item.title}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm">
                        {item.description}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <div className="pt-4">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-headline px-9 h-14 py-3 text-lg">
                  <Link href="/la-baja-inspira">
                      DESCUBRE MÁS
                  </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
           <div>
             <Image 
                src="/Images/Main/La Baja Inspira.jpg"
                alt="Carretera en Baja California al atardecer"
                data-ai-hint="baja california road sunset"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl object-cover w-full h-auto"
              />
          </div>

        </div>
      </div>
    </section>
  );
}
