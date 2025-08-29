
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Vista del Mar de Cortés en Los Cabos"
          data-ai-hint="ocean cortez"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
     
      <div className="relative z-10 p-4 animate-in fade-in duration-1000 flex flex-col items-center">
        
        <div className="mb-8">
            <Image 
                src="/Images/logos/FESTIVAL DE CINE LOS CABOS- blanco.png" 
                alt="CaboCine Logo" 
                width={400} 
                height={107}
                data-ai-hint="logo white"
                />
        </div>

        <p className="text-lg md:text-xl max-w-2xl mx-auto text-background/90 mb-8">
          Donde el desierto se encuentra con el mar, y el cine encuentra su destino.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-7 px-8 group transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/30">
            Vive el Festival
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold text-lg py-7 px-8 group transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/30">
            Haz Cine en Los Cabos
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
