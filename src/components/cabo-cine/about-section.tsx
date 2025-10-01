
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-card text-foreground">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          En 2025, el Festival Internacional de Cine de Los Cabos celebrará su 13ª edición del 10 al 14 de diciembre, reafirmando su espíritu innovador y expandiendo su alcance hacia disciplinas que hoy definen la cultura contemporánea. El cine se mantiene como eje rector convergiendo con la música, el arte digital, el diseño y la gastronomía.
        </p>
        <div className="mt-8">
            <Button asChild size="lg">
                <Link href="/acerca-de">
                    Más información <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
