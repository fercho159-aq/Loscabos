
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Main/Banner inicial.jpg"
          alt="Paisaje de Puerto Los Cabos"
          data-ai-hint="puerto los cabos landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
     
      <div className="relative z-10 p-4 animate-in fade-in duration-1000 flex flex-col items-center">
        
        <div className="mb-4">
            <Image 
                src="/Images/Main/logo main.png" 
                alt="CaboCine Logo" 
                width={600} 
                height={160}
                data-ai-hint="logo white"
                />
        </div>

        <p className="mt-4 font-headline text-3xl md:text-4xl text-accent tracking-widest">
            #BEYONDTHESCREEN
        </p>

        <div className="mt-12">
            <p className="text-base text-background/80 mb-2">
            ¿TE INTERESA ASISTIR?
            </p>
            <Button asChild size="lg" variant="link" className="font-headline text-accent hover:text-accent/90 text-lg py-3 px-8 group transition-all duration-300 transform hover:scale-105">
                <Link href="/pre-registro">
                    PRE-REGÍSTRATE AQUÍ
                </Link>
            </Button>
            <p className="mt-2 text-sm text-background/80">
            TE AVISAREMOS CUANDO SE ABRA LA TAQUILLA.
            </p>
        </div>

      </div>
    </section>
  );
}
