
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-card text-foreground">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12">
            <div className="space-y-4">
                <p className="font-headline text-accent tracking-widest">10 AL 14 DE DICIEMBRE DEL 2025</p>
                <h2 className="font-headline text-4xl md:text-5xl text-foreground">
                    EL FESTIVAL INTERNACIONAL DE CINE DE LOS CABOS CELEBRARÁ SU 13ª EDICIÓN
                </h2>
            </div>
            <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    En 2025, el Festival Internacional de Cine de Los Cabos celebrará su 13ª edición del 10 al 14 de diciembre, reafirmando su espíritu innovador y expandiendo su alcance hacia disciplinas que hoy definen la cultura contemporánea. El cine se mantiene como eje rector convergiendo con la música, el arte digital y la gastronomía.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/acerca-de">
                            Más información <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
