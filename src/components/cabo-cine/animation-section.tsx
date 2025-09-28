
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
        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-accent">
          Foco en Animación
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-background/90 leading-relaxed">
          Explora mundos imaginarios y celebra el arte de la animación con nuestra selección especial de largometrajes y cortometrajes animados de todo el mundo. Una ventana a nuevas técnicas y narrativas que desafían la realidad.
        </p>
      </div>
    </section>
  );
}
