
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const convocatoriaItems = [
    {
        title: "CONVOCATORIA NACIONAL",
        description: "Activa del 13 al 31 de octubre 2025."
    },
    {
        title: "SELECCIÓN Y RESULTADOS",
        description: "Hasta 5 largometrajes de ficción o documental (óperas primas o segundas películas). Anuncio de resultados: 15 de noviembre 2025."
    },
    {
        title: "ENCUENTROS Y PREMIACIÓN",
        description: "Encuentros uno a uno y premiación oficial: 10 al 14 diciembre 2025, en el marco del Festival Internacional de Cine de Los Cabos."
    }
];

export default function GFFFHomeSection() {
  return (
    <section id="gfff-home" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="md:col-span-1">
            <Image 
              src="/Images/Main/fondofilmico.png"
              alt="Cineasta en la playa durante el atardecer"
              data-ai-hint="filmmaker beach sunset"
              width={800}
              height={1000}
              className="rounded-lg shadow-2xl object-cover w-full h-auto"
            />
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-accent mb-2">Convocatoria abierta hasta el 31 de Octubre</p>
              <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">FONDO FÍLMICO <br /> GABRIEL FIGUEROA</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                El Fondo Fílmico Gabriel Figueroa, creado en 2012 en honor al gran cinefotógrafo mexicano, entra en una nueva etapa en el marco del FICLosCabos 2025. En alianza con la Escuela Superior de Cine (ESCINE), se consolida como motor estratégico del festival para impulsar al cine mexicano, ofreciendo a cineastas emergentes un puente hacia productores, distribuidores, inversionistas y festivales internacionales, con apoyos para proyectos en desarrollo y postproducción.
              </p>
            </div>

            <div className="pt-4">
              <Accordion type="single" collapsible className="w-full">
                {convocatoriaItems.map((item, index) => (
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
                  <Link href="/industria">
                      DESCUBRE MÁS
                  </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

    