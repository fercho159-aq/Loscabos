
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function AnimationSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-background flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Animacion/cutoutfest-banner.jpg"
          alt="Banner de la sección de animación - Cut Out Fest"
          data-ai-hint="colorful animation art illustration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <p className="font-semibold text-accent mb-2">Nueva sección</p>
        <h2 className="font-headline text-4xl sm:text-5xl font-bold">
          Animación
        </h2>
        <p className="mt-2 text-xl md:text-2xl text-background/90 font-medium">
          en alianza con Cut Out Fest
        </p>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-background/90 leading-relaxed">
          Por primera vez, el Festival Internacional de Cine de Los Cabos integra la animación a su programación oficial, con una selección de cortos seleccionados por Cut Out Fest.
        </p>
        <div className="mt-8">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-headline px-8 py-3 text-lg">
            <Link href="/programa-cine#seleccin-de-cortometrajes-cut-out-fest">
              Ver programación <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
