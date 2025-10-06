
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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
        
        <div className="w-[85vw] px-4">
            <Image 
                src="/Images/Main/logo main.png" 
                alt="CaboCine Logo" 
                width={1200}
                height={320}
                data-ai-hint="logo white"
                className="w-full h-auto"
                />
        </div>

        <p className="mt-4 font-headline text-[4vw] text-background tracking-widest leading-none">
            #BEYONDTHESCREEN
        </p>

        <div className="mt-20 flex flex-col items-center gap-2">
            <p className="text-sm text-background/80">
            ¿TE INTERESA ASISTIR?
            </p>
            <div className="">
                <Button asChild className="font-headline text-lg group transition-all duration-300 transform hover:scale-105 bg-accent text-accent-foreground hover:bg-accent/90 w-[266px] h-[46px] py-[10px] px-[2px] rounded-none">
                    <Link href="/pre-registro">
                        PRE-REGÍSTRATE AQUÍ
                    </Link>
                </Button>
            </div>
            <p className="text-m text-background/80 mt-10">
            TE AVISAREMOS CUANDO
            <br />
            SE ABRA LA TAQUILLA.
            </p>
        </div>

      </div>
    </section>
  );
}
