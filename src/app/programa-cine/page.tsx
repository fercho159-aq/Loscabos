
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProgramaCinePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Banner Section */}
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground text-center">
            <div className="absolute inset-0 z-0">
                <Image
                src="/Images/Programacion/FICC_Banner_Programacion.png"
                alt="Banner de la sección de Programa de Cine"
                data-ai-hint="graphic composition"
                fill
                className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-background">
                Programa de cine FICLosCabos 2025
              </h1>
            </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            
            <div className="p-8 rounded-lg">
              <h2 className="font-headline text-4xl font-bold text-foreground mb-4">Marejada: Panorama de largometrajes internacionales</h2>
              <p className="text-lg text-muted-foreground">Próximamente se anunciará la selección de películas que conforman este panorama.</p>
            </div>

            <div className="p-8 rounded-lg bg-background shadow-lg">
              <h2 className="font-headline text-4xl font-bold text-foreground mb-4">Competencia FICLosCabos de largometrajes mexicanos</h2>
              <p className="text-lg text-muted-foreground space-y-4">
                <span>En Los Cabos, donde el desierto se encuentra con el mar, el cine también encuentra su punto de convergencia. De esa intersección nace la nueva competencia mexicana de largometrajes del FICLosCabos 2025: un espacio donde las voces independientes del país dialogan con el territorio, la comunidad y las nuevas formas de narrar el mundo.</span>
                <span>La competencia mexicana de largometrajes del Festival Internacional de Cine de Los Cabos 2025, concebida como una plataforma de visibilidad y apoyo para cineastas independientes. Su objetivo es impulsar la circulación, el diálogo y la proyección internacional de nuevas narrativas cinematográficas mexicanas.</span>
              </p>
            </div>

            <div className="p-8 rounded-lg">
              <h2 className="font-headline text-4xl font-bold text-foreground mb-4">Cortometrajes de cineastas emergentes</h2>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>El Festival Internacional de Cine de Los Cabos se consolida como un punto de encuentro entre múltiples generaciones de creadores. En su 13ª edición, el Festival amplía su mirada hacia las nuevas voces del cine reuniendo a una selección de jóvenes directores con reconocimiento nacional e internacional que están redefiniendo los lenguajes cinematográficos con una fuerza creativa única.</p>
                <p>Como parte de la programación oficial, el FICLosCabos proyectará los cortometrajes de los invitados al Panel de cineastas emergentes: Nuevas caras del cine.</p>
              </div>
               <div className="mt-8">
                <Button asChild>
                  <Link href="/participantes">
                    Conoce a los cineastas <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
