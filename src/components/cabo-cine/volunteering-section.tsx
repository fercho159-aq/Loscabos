
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight, HandHeart } from 'lucide-react';
import Link from 'next/link';

export default function VolunteeringSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-background flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/volunteers/1920/1080"
          alt="Voluntarios del festival sonriendo"
          data-ai-hint="happy volunteers"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-accent">
          Sé Parte del Corazón del Festival
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-background/90 leading-relaxed">
          El voluntariado es una oportunidad única para vivir el festival desde adentro, aprender sobre la industria y formar parte de una comunidad apasionada por el cine.
        </p>
        <Button size="lg" className="mt-8 group" asChild>
          <Link href="/impacto">
            Conviértete en Voluntario
            <HandHeart className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
