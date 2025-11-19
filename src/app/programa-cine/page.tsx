
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { filmData } from '@/lib/cinema-program-data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const sections = [
  {
    id: "marejada",
    title: "Marejada: Muestra de largometrajes internacionales",
    description: "Marejada, la muestra internacional del 13º Festival de Cine de Los Cabos, nace desde la idea de reinvención: una sección que convierte los límites en oportunidad y abre nuestras costas al cine que se está creando en el mundo. Esta selección reúne voces consolidadas y nuevas miradas que, desde geografías y lenguajes diversos, trazan un mapa vibrante del presente cinematográfico."
  },
  {
    id: "competencia",
    title: "Competencia FICLosCabos de largometrajes mexicanos",
    description: "En Los Cabos, donde el desierto se encuentra con el mar, el cine también encuentra su punto de convergencia. De esa intersección nace la nueva competencia mexicana de largometrajes del FICLosCabos 2025: un espacio donde las voces independientes del país dialogan con el territorio, la comunidad y las nuevas formas de narrar el mundo. La competencia mexicana de largometrajes del Festival Internacional de Cine de Los Cabos 2025, concebida como una plataforma de visibilidad y apoyo para cineastas independientes. Su objetivo es impulsar la circulación, el diálogo y la proyección internacional de nuevas narrativas cinematográficas mexicanas."
  },
  {
    id: "cortometrajes",
    title: "Cortometrajes de cineastas emergentes",
    description: "El Festival Internacional de Cine de Los Cabos se consolida como un punto de encuentro entre múltiples generaciones de creadores. En su 13ª edición, el Festival amplía su mirada hacia las nuevas voces del cine reuniendo a una selección de jóvenes directores con reconocimiento nacional e internacional que están redefiniendo los lenguajes cinematográficos con una fuerza creativa única. Como parte de la programación oficial, el FICLosCabos proyectará los cortometrajes de los invitados al Panel de cineastas emergentes: Nuevas caras del cine."
  }
];

const filmsBySection = {
  marejada: filmData.filter(film => film.Sección.includes("Marejada")),
  competencia: filmData.filter(film => film.Sección.includes("Competencia")),
  cortometrajes: filmData.filter(film => film.Sección.includes("Cortometrajes")),
};


export default function ProgramaCinePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Content Section */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-7xl space-y-16">
            
            {sections.map(section => (
              <div key={section.id} className="p-8 rounded-lg">
                <h2 className="font-headline text-4xl font-bold text-accent text-center mb-4">{section.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">{section.description}</p>
                
                {section.id === 'competencia' && (
                  <h3 className="font-headline text-3xl text-foreground text-center mb-12">Nominados</h3>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filmsBySection[section.id as keyof typeof filmsBySection].map(film => (
                    <Dialog key={film.Título}>
                      <DialogTrigger asChild>
                        <Card className="bg-background overflow-hidden shadow-lg group cursor-pointer">
                          <div className="relative aspect-video w-full">
                            {film.imagen && film.imagen.length > 1 ? (
                              <Image
                                src={film.imagen}
                                alt={`Póster de ${film.Título}`}
                                data-ai-hint="movie poster"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full bg-muted flex items-center justify-center">
                                <p className="text-muted-foreground text-sm">Póster no disponible</p>
                              </div>
                            )}
                          </div>
                          <CardHeader>
                            <CardTitle className="text-xl leading-tight font-headline text-accent">{film.Título}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground"><strong>Director(a):</strong> {film['Director(a)']}</p>
                            <p className="text-sm text-muted-foreground"><strong>País / Año:</strong> {film['País / Año']}</p>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-2xl bg-card max-h-[90vh] flex flex-col">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-headline text-accent">{film.Título}</DialogTitle>
                          <DialogDescription>
                            {film['Director(a)']} • {film['País / Año']}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4 overflow-y-auto">
                          <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                             {film.imagen && film.imagen.length > 1 ? (
                              <Image
                                src={film.imagen}
                                alt={`Póster de ${film.Título}`}
                                data-ai-hint="movie poster"
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-muted flex items-center justify-center">
                                <p className="text-muted-foreground text-sm">Póster no disponible</p>
                              </div>
                            )}
                          </div>
                          <div className="text-base text-muted-foreground leading-relaxed overflow-y-auto">
                            {film['Sinopsis / Notas']}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
