
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
        
        <div className="mb-4">
            <Image 
                src="/Images/Main/logo main.png" 
                alt="CaboCine Logo" 
                width={900} 
                height={240}
                data-ai-hint="logo white"
                />
        </div>

        <p className="mt-4 font-headline text-2xl text-background tracking-widest">
            #BEYONDTHESCREEN
        </p>

        <div className="mt-[150px]">
            <p className="text-sm text-background/80 mb-2">
            ¿TE INTERESA ASISTIR?
            </p>
            <div className="my-[50px]">
                <Button asChild className="font-headline text-lg group transition-all duration-300 transform hover:scale-105 bg-accent text-accent-foreground hover:bg-accent/90 w-[266px] h-[46px] py-[10px] px-[2px] rounded-none">
                    <Link href="/pre-registro">
                        PRE-REGÍSTRATE AQUÍ
                    </Link>
                </Button>
            </div>
            <p className="mt-[100px] text-sm text-background/80">
            TE AVISAREMOS CUANDO
            </p>
            <p className="mt-2 text-sm text-background/80">
            SE ABRA LA TAQUILLA.
            </p>
        </div>

      </div>
    </section>
  );
}
