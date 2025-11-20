
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HandHeart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full min-w-[200%] min-h-[120%] object-cover -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/5SY9U-M9G2w?autoplay=1&mute=1&loop=1&playlist=5SY9U-M9G2w&controls=0&showinfo=0&autohide=1&modestbranding=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="background video"
        ></iframe>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
     
      <div className="relative z-10 p-4 animate-in fade-in duration-1000 flex flex-col items-center">
        
        <div className="w-[80vw] md:w-[60vw] px-4">
            <Image 
                src="/Images/Main/FICC_Logo2.png" 
                alt="CaboCine Logo" 
                width={1200}
                height={320}
                data-ai-hint="logo white"
                className="w-full h-auto"
                />
        </div>

        <p className="mt-4 font-headline text-[5vw] md:text-[3vw] lg:text-[2.5vw] text-background tracking-widest leading-none">
            #BEYONDTHESCREEN
        </p>

        <div className="mt-12 md:mt-20 flex flex-col items-center gap-2">
            <p className="text-lg md:text-sm text-background/80">
            ASEGURA TU LUGAR
            </p>
            <div className="my-2 flex flex-col md:flex-row gap-4">
                <Button asChild className="font-headline text-xl md:text-lg group transition-all duration-300 transform hover:scale-105 bg-accent text-accent-foreground hover:bg-accent/90 w-[266px] h-14 md:h-[46px] py-[10px] px-[2px] rounded-none">
                    <Link href="https://festival-internacional-de-cine-de-los-cabos-2025.boletia.com/" target="_blank" rel="noopener noreferrer">
                        COMPRAR BOLETOS
                    </Link>
                </Button>
                 <Button asChild variant="outline" className="font-headline text-xl md:text-lg group transition-all duration-300 transform hover:scale-105 bg-transparent text-background hover:bg-background hover:text-foreground border-background w-[266px] h-14 md:h-[46px] py-[10px] px-[2px] rounded-none">
                    <Link href="https://www.laplayacentrocomunitario.org/" target="_blank" rel="noopener noreferrer">
                        Apoya a la comunidad <HandHeart className="ml-2" />
                    </Link>
                </Button>
            </div>
            <p className="text-lg md:text-base text-background/80 mt-1 text-center">
            Y VIVE LA EXPERIENCIA.
            </p>
        </div>

      </div>
    </section>
  );
}
