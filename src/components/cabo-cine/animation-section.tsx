
import Image from 'next/image';

export default function AnimationSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-background flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/animation/1920/1080"
          alt="Banner de la sección de animación"
          data-ai-hint="abstract animation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <p className="font-semibold text-accent mb-2">Nueva sección</p>
        <h2 className="font-headline text-4xl sm:text-5xl font-bold">
          Animación
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-background/90 leading-relaxed">
          Por primera vez, el Festival Internacional de Cine de Los Cabos integra la animación a su programación oficial, con una selección de cortos y mediometrajes de escuelas nacionales e internacionales, masterclasses con profesionales de la industria y el anuncio de la convocatoria de animación 2026 junto a un taller formativo para creadores de Baja California.
        </p>
        <p className="mt-8 text-accent font-semibold text-xl">Descúbrelo próximamente</p>
      </div>
    </section>
  );
}
