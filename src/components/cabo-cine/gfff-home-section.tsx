
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Calendar, Award, Users } from "lucide-react";
import Image from "next/image";

const convocatoriaItems = [
    {
        icon: Calendar,
        title: "Convocatoria nacional",
        description: "Activa del 13 al 31 de octubre 2025."
    },
    {
        icon: Award,
        title: "Selección y resultados",
        description: "Hasta 5 largometrajes de ficción o documental (óperas primas o segundas películas). Anuncio de resultados: 15 de noviembre 2025."
    },
    {
        icon: Users,
        title: "Encuentros y premiación",
        description: "Encuentros uno a uno y premiación oficial: 10 al 14 diciembre 2025, en el marco del Festival Internacional de Cine de Los Cabos."
    }
];

export default function GFFFHomeSection() {
  return (
    <section id="gfff-home" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-accent mb-2">Convocatoria abierta a partir del 13 de Octubre.</p>
              <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Fondo Fílmico <span className="text-accent">Gabriel Figueroa</span></h2>
              <p className="mt-4 text-lg text-muted-foreground">
                El Fondo Fílmico Gabriel Figueroa, creado en 2012 en honor al gran cinefotógrafo mexicano, entra en una nueva etapa en el marco del FICLosCabos 2025. En alianza con la Escuela Superior de Cine (ESCINE), se consolida como motor estratégico del festival para impulsar al cine mexicano, ofreciendo a cineastas emergentes un puente hacia productores, distribuidores, inversionistas y festivales internacionales, con apoyos para proyectos en desarrollo y postproducción.
              </p>
            </div>

            <div className="space-y-4">
                <h3 className="font-headline text-3xl font-bold text-foreground">Convocatoria 2025</h3>
                <Accordion type="single" collapsible className="w-full">
                  {convocatoriaItems.map((item, index) => (
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
                <Link href="/industria">
                    Postula tu proyecto
                </Link>
            </Button>
          </div>

          {/* Right Column */}
          <div className="md:col-span-1">
            <Image 
              src="https://picsum.photos/seed/gfff/800/1000"
              alt="Networking en el festival de cine"
              data-ai-hint="film festival networking"
              width={800}
              height={1000}
              className="rounded-lg shadow-2xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
