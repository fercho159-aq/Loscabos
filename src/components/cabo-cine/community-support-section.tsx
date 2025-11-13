
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HandHeart } from 'lucide-react';

export default function CommunitySupportSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-background flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Main/crania.png"
          alt="Niños de la comunidad sonriendo"
          data-ai-hint="community children smiling"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-accent">
          El Festival Internacional de Cine de Los Cabos impulsa las iniciativas comunitarias de La Playa Centro Comunitario.
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-background/90 leading-relaxed">
          Tu aportación ayuda a fortalecer programas esenciales para las familias de la zona.
        </p>
        <Button size="lg" className="mt-8 group" asChild>
          <Link href="https://www.laplayacentrocomunitario.org/" target="_blank" rel="noopener noreferrer">
            Apoya a la comunidad
            <HandHeart className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
