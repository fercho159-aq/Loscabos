
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
        {/* Main Title & CTA */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">La Baja Inspira</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            La sección competitiva dedicada a celebrar y visibilizar las historias que nacen del territorio de la península de Baja California.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/la-baja-inspira">
                Inscribe tu Proyecto
            </Link>
          </Button>
        </div>

        {/* Objective */}
        <div className="max-w-2xl mx-auto mb-16">
            <Card className="bg-background shadow-lg">
                <CardHeader>
                    <CardTitle className='flex items-center gap-3'><Goal className='h-6 w-6 text-accent'/> Objetivo</CardTitle>
                </CardHeader>
                    <CardContent>
                    <p className="text-base text-muted-foreground">Vincular e integrar a la comunidad cinematográfica de la península con el resto de México y el mundo, reconociendo la identidad regional y fortaleciendo el tejido cultural local.</p>
                </CardContent>
            </Card>
        </div>

        {/* Methodology Section */}
        <div>
            <div className="text-center mb-12">
                <h3 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">Metodología</h3>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Un proceso claro y transparente para descubrir las mejores historias de la región.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                {methodology.map((item, index) => (
                    <div key={item.step} className="text-center flex flex-col items-center">
                        <div className="bg-primary/10 text-accent p-4 rounded-full mb-4 w-12 h-12 flex items-center justify-center">
                            <span className="text-2xl font-bold font-headline">{index + 1}</span>
                        </div>
                        <h4 className="text-xl font-bold font-headline text-foreground mb-2">{item.step}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
